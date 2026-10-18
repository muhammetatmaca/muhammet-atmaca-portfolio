import { useEffect, useRef, CSSProperties } from 'react';

interface TopoWaveProps {
  className?: string;
  style?: CSSProperties;
  mode?: 'dark' | 'light';
  speed?: number; // Varsayılan: 1.0 (Animasyon hızı)
  density?: number; // Varsayılan: 1.0 (Çizgi sıklığı)
}

export default function TopoWave({
  className = 'topo-wave-canvas',
  style,
  mode = 'dark',
  speed = 1.0,
  density = 1.0,
}: TopoWaveProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', {
      alpha: false,
      antialias: false,
      depth: false,
    });
    if (!gl) return;

    // 1. Vertex Shader (Tam ekran Quad)
    const vsSource = `
      attribute vec2 a_position;
      void main() { 
        gl_Position = vec4(a_position, 0.0, 1.0); 
      }
    `;

    // 2. Fragment Shader (Simplex Noise + Topo Bands + Grid)
    const isLight = mode === 'light';
    const fsSource = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform float u_dpr;

      vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
        vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
        m = m * m; m = m * m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5; vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox; m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
        vec3 g; g.x = a0.x * x0.x + h.x * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 st = gl_FragCoord.xy / u_resolution.xy;
        st.x *= u_resolution.x / u_resolution.y;

        // 1px Fiziksel Izgara
        float gridSize = 48.0 * u_dpr;
        vec2 gridFract = fract(gl_FragCoord.xy / gridSize);
        float lineThickness = 1.0 / gridSize;
        float gridLines = step(1.0 - lineThickness, gridFract.x) + step(1.0 - lineThickness, gridFract.y);
        gridLines = clamp(gridLines, 0.0, 1.0) * ${isLight ? '0.55' : '0.12'};

        // Topografik Dalgalar
        float noiseScale = 1.4;
        vec2 noisePos = st * noiseScale + vec2(u_time * 0.015, u_time * 0.025);
        float n = snoise(noisePos) * 0.5 + 0.5;
        float numBands = ${(10.0 * density).toFixed(2)};
        float triangleWave = abs(fract(n * numBands) - 0.5) * 2.0;
        float topoLines = smoothstep(${isLight ? '0.03, 0.00' : '0.02, 0.00'}, triangleWave) * ${isLight ? '0.95' : '0.45'};

        ${
          isLight
            ? `
            vec3 paper = vec3(0.957, 0.941, 0.902);
            vec3 ink = vec3(0.12, 0.14, 0.18);
            float lines = clamp(gridLines + topoLines, 0.0, 1.0);
            gl_FragColor = vec4(mix(paper, ink, lines), 1.0);
          `
            : `
            vec3 color = vec3(gridLines + topoLines);
            gl_FragColor = vec4(color, 1.0);
          `
        }
      }
    `;

    function createShader(glCtx: WebGLRenderingContext, type: number, source: string) {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      return shader;
    }

    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const posBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const resLoc = gl.getUniformLocation(program, 'u_resolution');
    const timeLoc = gl.getUniformLocation(program, 'u_time');
    const dprLoc = gl.getUniformLocation(program, 'u_dpr');

    const resize = () => {
      const parent = canvas.parentElement || document.body;
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25); // Aşırı GPU tüketimini önler
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.uniform1f(dprLoc, dpr);
    };

    window.addEventListener('resize', resize, { passive: true });
    resize();

    let rafId = 0;
    let isVisible = true;
    const startTime = performance.now();

    const render = (time: number) => {
      if (!isVisible || (typeof document !== 'undefined' && document.hidden)) {
        rafId = 0;
        return;
      }
      gl.uniform1f(timeLoc, (time - startTime) * 0.001 * speed);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafId = requestAnimationFrame(render);
    };

    // Ekranda değilken GPU'yu %0'a düşürür (pil dostu)
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry?.isIntersecting ?? true;
        if (isVisible && !rafId) rafId = requestAnimationFrame(render);
      },
      { threshold: 0.01 }
    );
    observer.observe(canvas);

    const handleVisibility = () => {
      isVisible = !document.hidden;
      if (isVisible && !rafId) rafId = requestAnimationFrame(render);
    };
    document.addEventListener('visibilitychange', handleVisibility);

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibility);
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(posBuffer);
    };
  }, [mode, speed, density]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        ...style,
      }}
    />
  );
}
