import { Suspense, lazy, useEffect, useRef, useState } from 'react';
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

export function KeycapsScene({
  sceneUrl = 'https://prod.spline.design/x4IBnxRb8XWCAv9p/scene.splinecode',
  className = 'w-full h-full',
}: KeycapsSceneProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(typeof window !== 'undefined' && window.innerWidth > 800);
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

  useEffect(() => {
    if (!isDesktop) return;
    const el = containerRef.current;
    if (!el) return;

    const stopWheel = (e: WheelEvent) => e.stopImmediatePropagation();
    let startX = 0, startY = 0;
    const onPointerDown = (e: PointerEvent) => { startX = e.clientX; startY = e.clientY; };
    const onPointerMove = (e: PointerEvent) => {
      if (e.buttons === 0) return;
      if (Math.abs(e.clientX - startX) > 3 || Math.abs(e.clientY - startY) > 3)
        e.stopImmediatePropagation();
    };

    el.addEventListener('wheel', stopWheel, { capture: true });
    el.addEventListener('pointerdown', onPointerDown, { capture: true });
    el.addEventListener('pointermove', onPointerMove, { capture: true });
    return () => {
      el.removeEventListener('wheel', stopWheel, true);
      el.removeEventListener('pointerdown', onPointerDown, true);
      el.removeEventListener('pointermove', onPointerMove, true);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          <span className="text-xs font-mono text-neutral-500">3D klavye yükleniyor...</span>
        </div>
      )}

      {/*
       * ZOOM AZALTMA: Canvas'ı 220% genişlikte render et, ortaya hizala.
       * Spline horizontal FOV'u 2x artırır → klavye çok daha küçük/uzak görünür.
       * overflow:hidden kenarları keser, watermark crop için +90px yükseklik.
       */}
      <div
        className="keycaps-canvas-wrapper"
        style={{
          visibility: isVisible ? 'visible' : 'hidden',
          pointerEvents: isVisible ? 'auto' : 'none',
        }}
      >
        <Suspense fallback={null}>
          <Spline
            scene={sceneUrl}
            onLoad={(app) => {
              setIsLoaded(true);
              const handleKeyNavigation = (event: SplineEvent) => {
                const targetId = event.target?.id;
                const targetName = event.target?.name;
                console.info('[Spline key event]', { id: targetId, name: targetName });
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
                }, 1000);
              };

              app.addEventListener('mouseUp', handleKeyNavigation);
              app.addEventListener('mousePress', handleKeyNavigation);
              app.addEventListener('mouseDown', handleKeyNavigation);
            }}
            style={{
              width: '100%',
              height: '100%',
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.7s ease',
            }}
          />
        </Suspense>
      </div>
    </div>
  );
}
