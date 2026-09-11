"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const MAX_PARTICLES = 30000;

const SCALE_FACTOR = 0.085;

const CAM_DISTANCE = 35;

const DEFAULTS = {
  text: "Flower",
  bloom: "#FF4D0F",
  leaf: "#1F8A3B",
  hueSpread: 20,
  opacity: 20,
  bloomSize: 10,
  leafSize: 10,
  leafMix: 4,
  spread: 4,
  transition: { type: "tween", duration: 0.9, ease: "circOut" } as Transition,
  hoverOn: true,
  hover: { radius: 9, boost: 12 },
};

type FontValue = {
  fontFamily?: string;
  fontSize?: number | string;
  fontWeight?: number | string;
  fontStyle?: string;
  letterSpacing?: number | string;
  lineHeight?: number | string;
};

type Transition = {
  type?: string;
  duration?: number;
  delay?: number;
  ease?: string | number[];
};

type HoverOptions = { radius?: number; boost?: number };

type Config = {
  text: string;
  font: FontValue;
  bloom: string;
  leaf: string;
  hueSpread: number;
  opacity: number;
  bloomSize: number;
  leafSize: number;
  leafMix: number;
  spread: number;
  transition: Transition;
  hoverOn: boolean;
  hover: HoverOptions;
};

const NAMED_EASES: Record<string, number[]> = {
  linear: [0, 0, 1, 1],
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.42, 0, 1, 1],
  easeOut: [0, 0, 0.58, 1],
  easeInOut: [0.42, 0, 0.58, 1],
  circIn: [0.55, 0, 1, 0.45],
  circOut: [0, 0.55, 0.45, 1],
  circInOut: [0.85, 0, 0.15, 1],
  backIn: [0.36, 0, 0.66, -0.56],
  backOut: [0.34, 1.56, 0.64, 1],
  backInOut: [0.68, -0.6, 0.32, 1.6],
  anticipate: [0.36, 0, 0.66, -0.56],
};

function makeEaseFn(transition?: Transition) {
  let pts: number[] = NAMED_EASES.circOut;
  const ease = transition?.ease;
  if (Array.isArray(ease) && ease.length === 4 && ease.every(Number.isFinite))
    pts = ease as number[];
  else if (typeof ease === "string" && NAMED_EASES[ease])
    pts = NAMED_EASES[ease];

  const [x1, y1, x2, y2] = pts;
  if (x1 === y1 && x2 === y2) return (t: number) => t;

  const bez = (a: number, b: number, t: number) => {
    const u = 1 - t;
    return 3 * u * u * t * a + 3 * u * t * t * b + t * t * t;
  };
  return (t: number) => {
    const x = Math.max(0, Math.min(1, t));
    let s = x;
    for (let i = 0; i < 8; i++) {
      const cx = bez(x1, x2, s) - x;
      const u = 1 - s;
      const dx = 3 * u * u * x1 + 6 * u * s * (x2 - x1) + 3 * s * s * (1 - x2);
      if (Math.abs(dx) < 1e-6) break;
      s -= cx / dx;
      s = Math.max(0, Math.min(1, s));
    }
    return bez(y1, y2, s);
  };
}

function clamp(v: number, lo: number, hi: number, fallback: number): number {
  const n = typeof v === "number" && isFinite(v) ? v : fallback;
  return Math.max(lo, Math.min(hi, n));
}

function toPx(v: unknown, fallback: number, emBasis: number): number {
  if (typeof v === "number" && isFinite(v)) return v;
  if (typeof v === "string") {
    const n = parseFloat(v);
    if (!isFinite(n)) return fallback;
    if (v.indexOf("em") >= 0) return n * emBasis;
    if (v.indexOf("%") >= 0) return (n / 100) * emBasis;
    return n;
  }
  return fallback;
}

function toRatio(v: unknown, size: number, fallback: number): number {
  if (typeof v === "number" && isFinite(v)) return v > 4 ? v / size : v;
  if (typeof v === "string") {
    const n = parseFloat(v);
    if (!isFinite(n)) return fallback;
    if (v.indexOf("px") >= 0) return n / size;
    if (v.indexOf("%") >= 0) return n / 100;
    return n > 4 ? n / size : n;
  }
  return fallback;
}

function settingsFor(cfg: Config) {
  const font = cfg.font ?? {};
  const fontSize = Math.max(8, toPx(font.fontSize, 100, 16));
  return {
    family: font.fontFamily || "Baskerville, Georgia, serif",
    fontSize,
    weight: font.fontWeight ?? 100,
    fontStyle: font.fontStyle ?? "normal",
    tracking: toPx(font.letterSpacing, 0, fontSize),
    lineRatio: toRatio(font.lineHeight, fontSize, 0.9),

    hueSpread: clamp(cfg.hueSpread, 0, 20, DEFAULTS.hueSpread) * 0.01,
    bloomAlpha: 0.05 + clamp(cfg.opacity, 1, 20, DEFAULTS.opacity) * 0.045,

    leafAlpha: 0.08 + clamp(cfg.opacity, 1, 20, DEFAULTS.opacity) * 0.045,
    bloomSize: clamp(cfg.bloomSize, 1, 20, DEFAULTS.bloomSize) / 10,
    leafSize: clamp(cfg.leafSize, 1, 20, DEFAULTS.leafSize) / 10,

    leafMix: clamp(cfg.leafMix, 0, 20, DEFAULTS.leafMix) * 0.05,
    spread: clamp(cfg.spread, 0, 20, DEFAULTS.spread) * 0.05,

    duration: Math.max(0.05, cfg.transition?.duration ?? 0.9),
    delay: Math.max(0, cfg.transition?.delay ?? 0),

    hoverRadius: clamp(cfg.hover?.radius as number, 1, 20, 9) * 0.9,
    hoverBoost: clamp(cfg.hover?.boost as number, 1, 20, 12) * 0.25,
  };
}

function makeSpriteCanvas(size: number) {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  return { canvas, ctx: canvas.getContext("2d") as CanvasRenderingContext2D };
}

function makeFlowerTexture(): THREE.CanvasTexture {
  const size = 128;
  const { canvas, ctx } = makeSpriteCanvas(size);
  ctx.translate(size / 2, size / 2);
  ctx.fillStyle = "rgba(255,255,255,0.95)";
  for (let i = 0; i < 5; i++) {
    ctx.save();
    ctx.rotate((i / 5) * Math.PI * 2);
    ctx.beginPath();
    ctx.ellipse(0, -size * 0.24, size * 0.15, size * 0.24, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath();
  ctx.arc(0, 0, size * 0.07, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(0,0,0,0.55)";
  ctx.fill();
  return new THREE.CanvasTexture(canvas);
}

function makeLeafTexture(): THREE.CanvasTexture {
  const size = 128;
  const { canvas, ctx } = makeSpriteCanvas(size);
  ctx.translate(size / 2, size / 2);
  ctx.fillStyle = "rgba(255,255,255,0.95)";
  ctx.beginPath();
  ctx.moveTo(0, -size * 0.42);
  ctx.quadraticCurveTo(size * 0.3, -size * 0.05, 0, size * 0.42);
  ctx.quadraticCurveTo(-size * 0.3, -size * 0.05, 0, -size * 0.42);
  ctx.fill();
  return new THREE.CanvasTexture(canvas);
}

type Particle = {
  type: number;
  x: number;
  y: number;
  z: number;

  t: number;

  wait: number;

  jitter: number;
  maxScale: number;

  baseRotation: number;

  hover: number;

  hue: number;
  toDelete: boolean;
};

function makeBloom(
  x: number,
  y: number,
  S: ReturnType<typeof settingsFor>,
): Particle {
  return {
    type: 0,
    x: x + S.spread * (Math.random() - 0.5),
    y: y + S.spread * (Math.random() - 0.5),
    z: 0,

    hue: Math.random() - 0.5,
    toDelete: false,
    t: 0,
    wait: S.delay * Math.random(),
    jitter: 0.6 + 0.8 * Math.random(),

    maxScale: 0.9 * Math.pow(Math.random(), 20) * S.bloomSize,
    baseRotation: 0.5 * Math.random() * Math.PI,
    hover: 0,
  };
}

function makeLeaf(
  x: number,
  y: number,
  S: ReturnType<typeof settingsFor>,
): Particle {
  return {
    type: 1,
    x,
    y,
    z: 0,
    baseRotation: 0.6 * (Math.random() - 0.5) * Math.PI,

    hue: Math.random() - 0.5,
    toDelete: false,
    t: 0,
    wait: S.delay * Math.random(),
    jitter: 0.6 + 0.8 * Math.random(),
    maxScale: (0.1 + 0.7 * Math.pow(Math.random(), 7)) * S.leafSize,
    hover: 0,
  };
}

type Coord = { x: number; y: number; old: boolean; toDelete: boolean };

class FlowerTypeScene {
  private container: HTMLElement;
  private cfg: Config;
  private prev: Config;

  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);

  private group = new THREE.Group();

  private input: HTMLDivElement;
  private textCanvas: HTMLCanvasElement;
  private textCtx: CanvasRenderingContext2D;

  private geometry = new THREE.PlaneGeometry(1.2, 1.2);
  private textures: THREE.CanvasTexture[];

  private materials: THREE.MeshBasicMaterial[];
  private meshes: THREE.InstancedMesh[] = [];

  private dummy = new THREE.Object3D();
  private coords: Coord[] = [];
  private particles: Particle[] = [];
  private stringBox = { wTexture: 0, wScene: 0, hTexture: 0, hScene: 0 };

  private lastStep = 1;
  private text = "";

  private pointer = new THREE.Vector2();
  private pointerOver = false;

  private ease: (t: number) => number;

  private width = 1;
  private height = 1;
  private frameId = 0;
  private lastT = 0;
  private disposed = false;

  constructor(container: HTMLElement, cfg: Config) {
    this.container = container;
    this.cfg = cfg;
    this.prev = { ...cfg };

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    const canvas = this.renderer.domElement;
    canvas.style.position = "absolute";
    canvas.style.inset = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    container.appendChild(canvas);
    this.scene.add(this.group);

    this.textCanvas = document.createElement("canvas");
    this.textCanvas.width = this.textCanvas.height = 0;
    this.textCtx = this.textCanvas.getContext("2d", {
      willReadFrequently: true,
    }) as CanvasRenderingContext2D;

    this.input = document.createElement("div");
    this.input.contentEditable = "true";
    this.input.spellcheck = false;
    this.input.setAttribute("aria-label", "Type to reshape the text");
    Object.assign(this.input.style, {
      position: "absolute",
      top: "0",
      left: "0",
      opacity: "0",
      whiteSpace: "pre",
      pointerEvents: "none",
      outline: "none",
    } as CSSStyleDeclaration);
    container.appendChild(this.input);

    const S = settingsFor(cfg);
    this.textures = [makeFlowerTexture(), makeLeafTexture()];
    this.materials = [
      new THREE.MeshBasicMaterial({
        alphaMap: this.textures[0],
        opacity: S.bloomAlpha,

        depthTest: false,
        transparent: true,
      }),
      new THREE.MeshBasicMaterial({
        alphaMap: this.textures[1],
        opacity: S.leafAlpha,
        depthTest: false,
        transparent: true,
      }),
    ];

    this.ease = makeEaseFn(cfg.transition);
    this.applyInputStyle();
    this.setText(cfg.text);
    this.bindEvents();
  }

  private applyInputStyle() {
    const S = settingsFor(this.cfg);
    this.input.style.fontFamily = S.family;
    this.input.style.fontSize = S.fontSize + "px";
    this.input.style.fontWeight = String(S.weight);
    this.input.style.fontStyle = S.fontStyle;
    this.input.style.letterSpacing = S.tracking + "px";
    this.input.style.lineHeight = S.lineRatio * S.fontSize + "px";
  }

  private setText(text: string) {
    const value = typeof text === "string" ? text : "";
    this.input.innerHTML = value.replace(/\n/g, "<div><br></div>");
    this.text = value;
    this.handleInput();
    this.refreshText();
  }

  private bindEvents() {
    this.input.addEventListener("keyup", this.onEdit);
    this.input.addEventListener("input", this.onEdit);
    this.container.addEventListener("pointerdown", this.onPointerDown);
    this.container.addEventListener("pointermove", this.onPointerMove);

    this.container.addEventListener("pointerleave", this.onPointerLeave);
    this.container.addEventListener("pointercancel", this.onPointerLeave);
  }

  private onEdit = () => {
    if (this.disposed) return;
    this.handleInput();
    this.refreshText();
  };

  private onPointerDown = () => {
    if (this.disposed) return;
    this.focusInput();
  };

  private onPointerMove = (e: PointerEvent) => {
    if (this.disposed) return;
    const rect = this.container.getBoundingClientRect();
    this.pointer.set(
      (e.clientX - rect.left - rect.width / 2) * SCALE_FACTOR,

      -(e.clientY - rect.top - rect.height / 2) * SCALE_FACTOR,
    );
    this.pointerOver = true;
  };

  private onPointerLeave = () => {
    if (this.disposed) return;

    this.pointerOver = false;
  };

  private focusInput() {
    this.input.style.pointerEvents = "auto";
    this.input.focus({ preventScroll: true });
    this.input.style.pointerEvents = "none";
    const selection = window.getSelection();
    if (!selection) return;
    const range = document.createRange();
    range.selectNodeContents(this.input);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
  }

  private handleInput() {
    const isNewLine = (el: ChildNode | null) => {
      const node = el as HTMLElement | null;
      if (!node || !node.tagName) return false;
      const tag = node.tagName.toUpperCase();
      if (tag !== "DIV" && tag !== "P") return false;
      return node.innerHTML === "<br>" || node.innerHTML === "</br>";
    };

    if (isNewLine(this.input.firstChild)) this.input.firstChild?.remove();
    if (
      isNewLine(this.input.lastChild) &&
      isNewLine(this.input.lastChild?.previousSibling ?? null)
    ) {
      this.input.lastChild?.remove();
    }

    this.text = this.input.innerHTML
      .replaceAll("<p>", "\n")
      .replaceAll("</p>", "")
      .replaceAll("<div>", "\n")
      .replaceAll("</div>", "")
      .replaceAll("<br>", "")
      .replaceAll("<br/>", "")
      .replaceAll("&nbsp;", " ");

    this.stringBox.wTexture = this.input.clientWidth;
    this.stringBox.wScene = this.stringBox.wTexture * SCALE_FACTOR;
    this.stringBox.hTexture = this.input.clientHeight;
    this.stringBox.hScene = this.stringBox.hTexture * SCALE_FACTOR;
  }

  private refreshText() {
    this.sampleCoordinates();
    const S = settingsFor(this.cfg);

    this.particles = this.coords.map((c, i) => {
      const x = c.x * SCALE_FACTOR;
      const y = c.y * SCALE_FACTOR;

      let p =
        this.coords[i].old && this.particles[i] ? this.particles[i] : null;
      if (!p)
        p = Math.random() > S.leafMix ? makeBloom(x, y, S) : makeLeaf(x, y, S);
      if (c.toDelete) p.toDelete = true;
      return p;
    });

    this.recreateMeshes();
  }

  private sampleCoordinates() {
    const S = settingsFor(this.cfg);
    const lines = this.text.split("\n");
    const lineCount = Math.max(1, lines.length);

    this.textCanvas.width = this.stringBox.wTexture;
    this.textCanvas.height = this.stringBox.hTexture;
    if (!(this.stringBox.wTexture > 0 && this.stringBox.hTexture > 0)) {
      this.coords = [];
      return;
    }

    this.textCtx.font = `${S.fontStyle} ${S.weight} ${S.fontSize}px ${S.family}`;

    if ("letterSpacing" in this.textCtx)
      (this.textCtx as any).letterSpacing = `${S.tracking}px`;
    this.textCtx.fillStyle = "#ffffff";
    this.textCtx.clearRect(0, 0, this.textCanvas.width, this.textCanvas.height);
    for (let i = 0; i < lineCount; i++) {
      this.textCtx.fillText(
        lines[i],
        0,
        ((i + 0.8) * this.stringBox.hTexture) / lineCount,
      );
    }

    const w = this.textCanvas.width;
    const h = this.textCanvas.height;
    const data = this.textCtx.getImageData(0, 0, w, h).data;
    const mask: boolean[][] = Array.from(Array(h), () => new Array(w));
    let lit = 0;
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        mask[i][j] = data[(j + i * w) * 4] > 0;
        if (mask[i][j]) lit++;
      }
    }

    const step = Math.max(1, Math.ceil(Math.sqrt(lit / MAX_PARTICLES)));

    if (step !== this.lastStep) {
      this.lastStep = step;
      this.coords = [];
      this.particles = [];
    }

    if (this.coords.length !== 0) {
      const keptCoords: Coord[] = [];
      const keptParticles: Particle[] = [];
      this.coords.forEach((c, i) => {
        if (c.toDelete) return;
        keptCoords.push(c);
        if (this.particles[i]) keptParticles.push(this.particles[i]);
      });
      this.coords = keptCoords;
      this.particles = keptParticles;

      this.coords.forEach((c) => {
        if (mask[c.y] && mask[c.y][c.x]) {
          c.old = true;
          if (!c.toDelete) mask[c.y][c.x] = false;
        } else {
          c.toDelete = true;
        }
      });
    }

    for (let i = 0; i < h; i += step) {
      for (let j = 0; j < w; j += step) {
        if (mask[i][j] && this.coords.length < MAX_PARTICLES) {
          this.coords.push({ x: j, y: i, old: false, toDelete: false });
        }
      }
    }
  }

  private recreateMeshes() {
    this.meshes.forEach((m) => {
      this.group.remove(m);
      m.dispose();
    });
    this.meshes = [];

    const counts = [0, 1].map(
      (type) => this.particles.filter((p) => p.type === type).length,
    );
    const identity = new THREE.Matrix4();

    this.materials.forEach((material, type) => {
      const mesh = new THREE.InstancedMesh(
        this.geometry,
        material,
        counts[type],
      );

      for (let i = 0; i < counts[type]; i++) mesh.setMatrixAt(i, identity);
      mesh.instanceMatrix.needsUpdate = true;
      mesh.frustumCulled = false;
      mesh.position.x = -0.5 * this.stringBox.wScene;
      mesh.position.y = -0.6 * this.stringBox.hScene;
      this.meshes.push(mesh);
      this.group.add(mesh);
    });

    this.applyColors();
  }

  private applyColors() {
    const S = settingsFor(this.cfg);
    const base = [
      new THREE.Color(this.cfg.bloom || DEFAULTS.bloom),
      new THREE.Color(this.cfg.leaf || DEFAULTS.leaf),
    ];
    const hsl = [
      { h: 0, s: 0, l: 0 },
      { h: 0, s: 0, l: 0 },
    ];
    base[0].getHSL(hsl[0]);
    base[1].getHSL(hsl[1]);

    const idx = [0, 0];
    const color = new THREE.Color();
    this.particles.forEach((p) => {
      const mesh = this.meshes[p.type];
      if (!mesh) return;
      const b = hsl[p.type];

      color.setHSL((b.h + p.hue * S.hueSpread + 1) % 1, b.s, b.l);
      mesh.setColorAt(idx[p.type], color);
      idx[p.type]++;
    });
    this.meshes.forEach((m) => {
      if (m.instanceColor) m.instanceColor.needsUpdate = true;
    });
  }

  private updateMatrices(dt: number) {
    if (this.meshes.length === 0) return;
    const S = settingsFor(this.cfg);
    const hoverOn = this.cfg.hoverOn !== false;

    const localX = this.pointer.x + 0.5 * this.stringBox.wScene;
    const localY = this.pointer.y + 0.6 * this.stringBox.hScene;
    const radius = Math.max(0.001, S.hoverRadius);

    const idx = [0, 0];
    this.particles.forEach((p) => {
      const mesh = this.meshes[p.type];
      if (!mesh) return;

      if (p.toDelete) {
        p.t -= (dt * 2) / (S.duration * p.jitter);
        if (p.t < 0) p.t = 0;
      } else if (p.wait > 0) {
        p.wait -= dt;
      } else if (p.t < 1) {
        p.t += dt / (S.duration * p.jitter);
        if (p.t > 1) p.t = 1;
      }

      const y = this.stringBox.hScene - p.y;

      let target = 0;
      if (hoverOn && this.pointerOver) {
        const dx = p.x - localX;
        const dy = y - localY;
        const d = Math.sqrt(dx * dx + dy * dy);

        const near = Math.max(0, 1 - d / radius);
        target = near * near;
      }

      p.hover += (target - p.hover) * (1 - Math.exp(-dt * 7));

      const scale = p.maxScale * this.ease(p.t) * (1 + S.hoverBoost * p.hover);

      this.dummy.rotation.set(0, 0, p.baseRotation);
      this.dummy.position.set(p.x, y, p.z);
      if (p.type === 1) {
        this.dummy.position.y += 0.5 * scale;
      }
      this.dummy.scale.setScalar(Math.max(0, scale));
      this.dummy.updateMatrix();
      mesh.setMatrixAt(idx[p.type], this.dummy.matrix);
      idx[p.type]++;
    });

    this.meshes.forEach((m) => {
      m.instanceMatrix.needsUpdate = true;
    });
  }

  private updateCamera() {
    const aspect = Math.max(1, this.width) / Math.max(1, this.height);
    const spanH = this.height * SCALE_FACTOR;

    this.camera.aspect = aspect;
    this.camera.position.set(0, 0, CAM_DISTANCE);
    this.camera.lookAt(0, 0, 0);
    this.camera.fov = 2 * Math.atan(spanH / 2 / CAM_DISTANCE) * (180 / Math.PI);
    this.camera.near = 0.1;
    this.camera.far = CAM_DISTANCE + 100;
    this.camera.updateProjectionMatrix();
  }

  start() {
    this.lastT = performance.now();

    this.renderer.domElement.style.cursor = "text";
    const loop = () => {
      this.frameId = requestAnimationFrame(loop);
      this.step();
    };
    this.frameId = requestAnimationFrame(loop);
  }

  private step() {
    if (this.disposed) return;
    const now = performance.now();
    let dt = (now - this.lastT) / 1000;
    this.lastT = now;
    if (!isFinite(dt) || dt < 0) dt = 0;

    if (dt > 0.05) dt = 0.05;

    this.updateMatrices(dt);
    this.renderer.render(this.scene, this.camera);
  }

  setSize(width: number, height: number) {
    if (this.disposed) return;
    this.width = Math.max(1, width);
    this.height = Math.max(1, height);
    this.renderer.setSize(this.width, this.height, false);
    this.updateCamera();
  }

  updateConfig(cfg: Config) {
    if (this.disposed) return;
    const prev = this.prev;
    this.cfg = cfg;
    this.prev = { ...cfg };

    const fontChanged = JSON.stringify(cfg.font) !== JSON.stringify(prev.font);

    const reseed =
      cfg.bloomSize !== prev.bloomSize ||
      cfg.leafSize !== prev.leafSize ||
      cfg.leafMix !== prev.leafMix ||
      cfg.spread !== prev.spread ||

      (cfg.transition?.delay ?? 0) !== (prev.transition?.delay ?? 0);

    if (fontChanged || reseed) {
      if (fontChanged) this.applyInputStyle();
      if (reseed) {
        this.coords = [];
        this.particles = [];
      }
      this.handleInput();
      this.refreshText();
    } else if (cfg.text !== prev.text) {
      this.setText(cfg.text);
    }

    if (
      JSON.stringify(cfg.transition?.ease) !==
      JSON.stringify(prev.transition?.ease)
    ) {
      this.ease = makeEaseFn(cfg.transition);
    }

    const S = settingsFor(cfg);
    this.materials[0].opacity = S.bloomAlpha;
    this.materials[1].opacity = S.leafAlpha;
    if (
      cfg.bloom !== prev.bloom ||
      cfg.leaf !== prev.leaf ||
      cfg.hueSpread !== prev.hueSpread
    ) {
      this.applyColors();
    }
  }

  dispose() {
    this.disposed = true;
    cancelAnimationFrame(this.frameId);

    this.input.removeEventListener("keyup", this.onEdit);
    this.input.removeEventListener("input", this.onEdit);
    this.container.removeEventListener("pointerdown", this.onPointerDown);
    this.container.removeEventListener("pointermove", this.onPointerMove);
    this.container.removeEventListener("pointerleave", this.onPointerLeave);
    this.container.removeEventListener("pointercancel", this.onPointerLeave);

    this.meshes.forEach((m) => {
      this.group.remove(m);
      m.dispose();
    });
    this.meshes = [];
    this.geometry.dispose();
    this.materials.forEach((m) => m.dispose());
    this.textures.forEach((t) => t.dispose());
    this.scene.clear();
    this.renderer.dispose();
    this.renderer.domElement.remove();
    this.input.remove();
  }
}

export interface FlowerTypeProps {
  text?: string;
  font?: FontValue;
  bloom?: string;
  leaf?: string;
  hueSpread?: number;
  opacity?: number;
  bloomSize?: number;
  leafSize?: number;
  leafMix?: number;
  spread?: number;
  transition?: Transition;
  hoverOn?: boolean;
  hover?: HoverOptions;
  style?: React.CSSProperties;
}

function __OriginkitBase_FlowerType(props: FlowerTypeProps) {
  const {
    text = DEFAULTS.text,
    font = {
      fontFamily: "Baskerville",
      fontSize: 100,
      fontWeight: 100,
      lineHeight: 0.9,
    },
    bloom = DEFAULTS.bloom,
    leaf = DEFAULTS.leaf,
    hueSpread = DEFAULTS.hueSpread,
    opacity = DEFAULTS.opacity,
    bloomSize = DEFAULTS.bloomSize,
    leafSize = DEFAULTS.leafSize,
    leafMix = DEFAULTS.leafMix,
    spread = DEFAULTS.spread,
    transition = { type: "tween", duration: 0.9, ease: "circOut" },
    hoverOn = DEFAULTS.hoverOn,
    hover = { radius: 9, boost: 12 },
    style,
  } = props;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<FlowerTypeScene | null>(null);
  const cfgRef = useRef<Config>(null as any);

  cfgRef.current = {
    text,
    font: font ?? {},
    bloom,
    leaf,
    hueSpread,
    opacity,
    bloomSize,
    leafSize,
    leafMix,
    spread,
    transition,
    hoverOn,

    hover: hover ?? DEFAULTS.hover,
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let scene: FlowerTypeScene;
    try {
      scene = new FlowerTypeScene(container, cfgRef.current);
    } catch {
      return;
    }
    sceneRef.current = scene;
    scene.setSize(container.clientWidth, container.clientHeight);
    scene.start();

    const ro = new ResizeObserver(() => {
      scene.setSize(container.clientWidth, container.clientHeight);
    });
    ro.observe(container);
    return () => {
      ro.disconnect();
      scene.dispose();
      sceneRef.current = null;
    };
  }, []);

  useEffect(() => {
    sceneRef.current?.updateConfig(cfgRef.current);

  }, [
    text,
    JSON.stringify(font),
    bloom,
    leaf,
    hueSpread,
    opacity,
    bloomSize,
    leafSize,
    leafMix,
    spread,
    JSON.stringify(transition),
    hoverOn,
    JSON.stringify(hover),
  ]);

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label="Typed text grown as blossom and leaves. Click it and type; move across it to open the flowers."
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minWidth: 120,
        minHeight: 120,
        overflow: "hidden",
        ...style,
      }}
    />
  );
}

FlowerType.displayName = "Flower Type";

const __originkitPresetProps = {
  "text": "MOBİL \n APPS",
  "font": {
    "variant": "Regular",
    "fontSize": 100,
    "textAlign": "left",
    "fontFamily": "Baskerville",
    "fontWeight": 100,
    "lineHeight": 0.9,
    "letterSpacing": "0em"
  },
  "bloom": "#194BDE",
  "leaf": "#194BDE",
  "hueSpread": 20,
  "opacity": 20,
  "bloomSize": 10,
  "leafMix": 4,
  "leafSize": 10,
  "spread": 4,
  "transition": {
    "type": "tween",
    "duration": 0.4,
    "delay": 0,
    "ease": [
      0.42,
      0,
      1,
      1
    ]
  },
  "hoverOn": true,
  "hover": {
    "boost": 12,
    "radius": 9
  }
};

export default function FlowerType(props: Record<string, unknown>) {
  return <__OriginkitBase_FlowerType {...(__originkitPresetProps as Record<string, unknown>)} {...props} />;
}