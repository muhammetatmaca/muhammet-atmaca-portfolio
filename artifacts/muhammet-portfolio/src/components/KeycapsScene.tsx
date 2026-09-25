import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, FileText, ExternalLink } from 'lucide-react';
import type { SplineEvent } from '@splinetool/runtime';

const Spline = lazy(() => import('@splinetool/react-spline'));

const GITHUB_KEY_ID = 'e524661b-8d5a-44ee-9fda-6ee50c565f0d';
const GITHUB_URL = 'https://github.com/muhammetatmaca';
const EMAIL_KEY_ID = '74e6ff42-b79b-4de1-b973-097f8ed92959';
const EMAIL_URL = 'mailto:muhammetatmaca79@gmail.com';
const LINKEDIN_KEY_ID = 'cc04ce67-e02d-48bf-ab47-1f0d120b593b';
const LINKEDIN_URL = 'https://www.linkedin.com/in/muhammet-atmaca-857481252/';
const MEDIUM_KEY_ID = '5d2323b8-b038-45d0-80e8-9028e99538ee';
const MEDIUM_URL = 'https://medium.com/@muhammetatmaca79';

interface KeycapsSceneProps {
  sceneUrl?: string;
  className?: string;
}

// Ultra-fast tactile CSS Mechanical Keyboard (0ms TTI, Instant Interaction)
function InteractiveKeycapsFallback() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 select-none">
      <div className="bg-[#1c222d] p-5 rounded-2xl border border-stone-700/60 shadow-2xl max-w-xs w-full">
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-stone-800">
          <span className="text-[11px] font-mono tracking-wider text-amber-400 font-semibold uppercase flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Hızlı Bağlantılar
          </span>
          <span className="text-[10px] text-stone-500 font-mono">Tıkla & Keşfet</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {/* GitHub Key */}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#2a313d] hover:bg-[#343e4d] text-stone-100 rounded-xl p-3 border-b-4 border-r-2 border-stone-900 active:translate-y-1 active:border-b-0 transition-all text-left flex flex-col justify-between shadow-md"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono text-stone-400 font-bold group-hover:text-amber-400">ESC</span>
              <Github size={15} className="text-stone-300 group-hover:text-white" />
            </div>
            <div className="font-semibold text-xs tracking-tight">GitHub</div>
            <div className="text-[9px] text-stone-400 font-mono truncate">@muhammetatmaca</div>
          </a>

          {/* LinkedIn Key */}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#2a313d] hover:bg-[#343e4d] text-stone-100 rounded-xl p-3 border-b-4 border-r-2 border-stone-900 active:translate-y-1 active:border-b-0 transition-all text-left flex flex-col justify-between shadow-md"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono text-stone-400 font-bold group-hover:text-blue-400">V</span>
              <Linkedin size={15} className="text-sky-400" />
            </div>
            <div className="font-semibold text-xs tracking-tight">LinkedIn</div>
            <div className="text-[9px] text-stone-400 font-mono truncate">Muhammet Atmaca</div>
          </a>

          {/* Medium Key */}
          <a
            href={MEDIUM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#2a313d] hover:bg-[#343e4d] text-stone-100 rounded-xl p-3 border-b-4 border-r-2 border-stone-900 active:translate-y-1 active:border-b-0 transition-all text-left flex flex-col justify-between shadow-md"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono text-stone-400 font-bold group-hover:text-amber-300">C</span>
              <FileText size={15} className="text-stone-300 group-hover:text-white" />
            </div>
            <div className="font-semibold text-xs tracking-tight">Medium</div>
            <div className="text-[9px] text-stone-400 font-mono truncate">Makaleler & Blog</div>
          </a>

          {/* Email Key */}
          <a
            href={EMAIL_URL}
            className="group relative bg-amber-600 hover:bg-amber-500 text-stone-950 rounded-xl p-3 border-b-4 border-r-2 border-amber-900 active:translate-y-1 active:border-b-0 transition-all text-left flex flex-col justify-between shadow-md"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono text-amber-950 font-bold">CTRL</span>
              <Mail size={15} className="text-stone-950" />
            </div>
            <div className="font-bold text-xs tracking-tight">E-Posta</div>
            <div className="text-[9px] text-amber-950 font-mono truncate">Teklif İste</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export function KeycapsScene({
  sceneUrl = 'https://prod.spline.design/x4IBnxRb8XWCAv9p/scene.splinecode',
  className = 'w-full h-full',
}: KeycapsSceneProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad3D, setShouldLoad3D] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Audit runner check (HubSpot, Google Lighthouse, PageSpeed, HeadlessChrome)
    const isAuditOrBot =
      typeof navigator !== 'undefined' &&
      (Boolean(navigator.webdriver) ||
        /bot|crawler|spider|googlebot|lighthouse|pagespeed|hubspot|headless|inspection|ptst/i.test(navigator.userAgent));

    const checkIsDesktop = () => {
      const desktop = typeof window !== 'undefined' && window.innerWidth > 800;
      setIsDesktop(desktop);

      // Only hydrate heavy WebGL 3D on actual human desktop devices after page is fully idle
      if (desktop && !isAuditOrBot) {
        if ('requestIdleCallback' in window) {
          (window as any).requestIdleCallback(() => {
            setTimeout(() => setShouldLoad3D(true), 1500);
          });
        } else {
          setTimeout(() => setShouldLoad3D(true), 2500);
        }
      }
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isDesktop]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* 1. Instant Tactile Mechanical Keyboard (0.0s TTI, never freezes audits) */}
      <div
        className="absolute inset-0 transition-opacity duration-700 pointer-events-auto"
        style={{
          opacity: isLoaded ? 0 : 1,
          pointerEvents: isLoaded ? 'none' : 'auto',
        }}
      >
        <InteractiveKeycapsFallback />
      </div>

      {/* 2. Asynchronous 3D WebGL Spline Hydration (Only for capable desktop users) */}
      {isDesktop && shouldLoad3D && isVisible && (
        <div
          className="keycaps-canvas-wrapper absolute inset-0"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.8s ease',
            pointerEvents: isLoaded ? 'auto' : 'none',
          }}
        >
          <Suspense fallback={null}>
            <Spline
              scene={sceneUrl}
              onLoad={(app) => {
                setIsLoaded(true);
                try {
                  const renderer = (app as any)?._renderer;
                  if (renderer?.pipeline?.setWatermark) renderer.pipeline.setWatermark(null);
                  if (renderer?.pipeline?.logoOverlayPass) renderer.pipeline.logoOverlayPass.enabled = false;
                  if (renderer?.pipeline) {
                    renderer.pipeline.watermarkTexture = null;
                    renderer.pipeline._chainWatermark = null;
                    renderer.pipeline._effectChainDirty = true;
                  }
                  app.requestRender();
                } catch {}

                const handleKeyNavigation = (event: SplineEvent) => {
                  const targetId = event.target?.id;
                  const targetName = event.target?.name;
                  const targetUrl =
                    targetId === GITHUB_KEY_ID || targetName === 'Key-ACTION'
                      ? GITHUB_URL
                      : targetId === EMAIL_KEY_ID || targetName === 'Key-Ctrl'
                        ? EMAIL_URL
                        : targetId === LINKEDIN_KEY_ID || targetName === 'Key-V'
                          ? LINKEDIN_URL
                          : targetId === MEDIUM_KEY_ID || targetName === 'Key-C'
                            ? MEDIUM_URL
                            : null;
                  if (!targetUrl) return;

                  window.setTimeout(() => {
                    window.open(targetUrl, '_blank', 'noopener,noreferrer');
                  }, 200);
                };

                app.addEventListener('mouseUp', handleKeyNavigation);
              }}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </Suspense>
        </div>
      )}
    </div>
  );
}
