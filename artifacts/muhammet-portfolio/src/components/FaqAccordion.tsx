import React, { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Button } from './ui/button';
import {
  ArrowUpRight,
  ChevronDown,
  CheckCircle2,
  ShieldCheck,
  Smartphone,
  Layers,
  Code2,
  FileSearch,
  Palette,
  GitBranch,
  Lock,
  Zap,
  Globe,
  Terminal,
  Star,
  Check,
  Video,
  Cpu,
  Search,
  Store,
  Server,
  User,
} from 'lucide-react';
import { AnimatedBeam } from './magicui/animated-beam';
import { OrbitingCircles } from './magicui/orbiting-circles';
import { DotPattern } from './magicui/dot-pattern';
import { cn } from '@/lib/utils';

/* ==========================================================================
   MAGIC UI BESPOKE COMPONENTS FOR FAQ ACCORDION
   Rooted in our portfolio palette:
   - Derin Mürekkep: #182033 / #111726 / #0b101d
   - Bizim Beyaz: #ffffff
   - Bizim Mavi / Kobalt: #60a5fa / #38bdf8 / #194bdf
   - Bizim Turuncu: #ff765e / #ea580c
   - Bizim Zümrüt / Emerald: #10b981 / #34d399 / #4ade80
   ========================================================================== */

// Reusable Circular Node for Animated Beam & Integrations
const CircleNode = React.forwardRef<
  HTMLDivElement,
  {
    className?: string;
    children: React.ReactNode;
    label?: string;
    sublabel?: string;
  }
>(({ className, children, label, sublabel }, ref) => {
  return (
    <div className="flex flex-col items-center gap-1 z-10">
      <div
        ref={ref}
        className={cn(
          'z-10 flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full border border-white/20 bg-[#111726] shadow-[0_0_20px_-3px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-white/40',
          className
        )}
      >
        {children}
      </div>
      {label && (
        <span className="font-mono text-[8.5px] md:text-[9px] text-white/85 font-medium whitespace-nowrap px-1.5 py-0.5 rounded bg-black/60 border border-white/10 shadow-sm">
          {label}
        </span>
      )}
      {sublabel && (
        <span className="font-mono text-[7px] text-white/45 -mt-0.5 whitespace-nowrap">
          {sublabel}
        </span>
      )}
    </div>
  );
});
CircleNode.displayName = 'CircleNode';

// 1. Mobil Uygulama Süreci (Magic UI Animated Beam Pipeline)
function VisualMobileProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prdRef = useRef<HTMLDivElement>(null);
  const figmaRef = useRef<HTMLDivElement>(null);
  const rnRef = useRef<HTMLDivElement>(null);
  const iosRef = useRef<HTMLDivElement>(null);
  const androidRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[420px] h-[330px] rounded-2xl bg-[#0b101d] border border-white/10 p-3.5 shadow-2xl flex flex-col justify-between overflow-hidden text-white mx-auto"
    >
      <DotPattern className="opacity-25 [mask-image:radial-gradient(220px_circle_at_center,white,transparent)]" />

      {/* Top Chrome Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-[9.5px] text-white/45">pipeline://mobile-workflow.v3</span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 font-mono text-[8.5px] text-emerald-400 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Production Ready</span>
        </div>
      </div>

      {/* Center Stage: Animated Beam Flow */}
      <div className="flex items-center justify-between w-full h-[190px] px-2 relative z-10">
        {/* Left Column: Analysis & UI */}
        <div className="flex flex-col justify-around h-full py-1">
          <CircleNode ref={prdRef} label="PRD Analiz" sublabel="Mimari Taslak">
            <FileSearch size={16} className="text-[#38bdf8]" />
          </CircleNode>
          <CircleNode ref={figmaRef} label="Figma UI/UX" sublabel="Prototip">
            <Palette size={16} className="text-[#c084fc]" />
          </CircleNode>
        </div>

        {/* Center Node: React Native Core */}
        <div className="flex flex-col items-center justify-center">
          <CircleNode
            ref={rnRef}
            className="h-14 w-14 md:h-14 md:w-14 border-sky-400/50 bg-[#14233c] shadow-[0_0_25px_rgba(56,189,248,0.4)]"
            label="React Native"
            sublabel="TurboEngine"
          >
            <Cpu size={24} className="text-sky-300 animate-pulse" />
          </CircleNode>
        </div>

        {/* Right Column: Stores */}
        <div className="flex flex-col justify-around h-full py-1">
          <CircleNode ref={iosRef} label="App Store" sublabel="iOS & TestFlight">
            <Smartphone size={16} className="text-white" />
          </CircleNode>
          <CircleNode ref={androidRef} label="Google Play" sublabel="Android APK">
            <CheckCircle2 size={16} className="text-emerald-400" />
          </CircleNode>
        </div>
      </div>

      {/* Animated Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={prdRef}
        toRef={rnRef}
        curvature={22}
        duration={3.5}
        gradientStartColor="#38bdf8"
        gradientStopColor="#194bdf"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={figmaRef}
        toRef={rnRef}
        curvature={-22}
        duration={3.5}
        delay={0.6}
        gradientStartColor="#c084fc"
        gradientStopColor="#194bdf"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={rnRef}
        toRef={iosRef}
        curvature={-22}
        duration={3.5}
        delay={1.2}
        gradientStartColor="#194bdf"
        gradientStopColor="#38bdf8"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={rnRef}
        toRef={androidRef}
        curvature={22}
        duration={3.5}
        delay={1.8}
        gradientStartColor="#194bdf"
        gradientStopColor="#34d399"
      />

      {/* Bottom Summary Bar */}
      <div className="z-10 px-2.5 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-[9px] font-mono text-white/75">
        <span>TestFlight &amp; Play Console Çift Dağıtım</span>
        <span className="text-emerald-400 font-bold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          60 FPS OK
        </span>
      </div>
    </div>
  );
}

// 2. Çift Platform (Magic UI Orbiting Circles - iOS & Android Senkron Yerel UI)
function VisualCrossPlatform() {
  return (
    <div className="relative w-full max-w-[420px] h-[330px] rounded-2xl bg-[#0b101d] border border-white/10 p-3.5 shadow-2xl flex flex-col justify-between overflow-hidden text-white mx-auto">
      <DotPattern className="opacity-25 [mask-image:radial-gradient(220px_circle_at_center,white,transparent)]" />

      {/* Top Chrome Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-[9.5px] text-white/45">runtime://dual-platform.sync</span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-sky-500/15 border border-sky-500/30 font-mono text-[8.5px] text-sky-300 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          <span>Tek Kod Tabanı</span>
        </div>
      </div>

      {/* Center Stage: Orbiting Circles */}
      <div className="relative flex items-center justify-center w-full h-[200px] overflow-hidden z-10">
        {/* Core Center Engine */}
        <div className="z-10 flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-700 to-sky-500 flex items-center justify-center text-white shadow-[0_0_30px_rgba(56,189,248,0.5)] border border-white/20">
            <Layers size={22} className="text-white" />
          </div>
          <span className="font-mono text-[8.5px] text-white/90 font-bold mt-1.5 px-2 py-0.5 rounded bg-black/70 border border-white/15">
            React Native
          </span>
        </div>

        {/* Inner Orbit (radius 56) */}
        <OrbitingCircles radius={56} duration={16} iconSize={32}>
          {/* iOS */}
          <div
            className="w-8 h-8 rounded-full bg-[#111726] border border-white/30 flex items-center justify-center shadow-lg text-white"
            title="Apple iOS Native"
          >
            <Smartphone size={14} className="text-white" />
          </div>
          {/* Android */}
          <div
            className="w-8 h-8 rounded-full bg-[#111726] border border-emerald-500/40 flex items-center justify-center shadow-lg text-emerald-400"
            title="Google Android Kotlin"
          >
            <Smartphone size={14} className="text-emerald-400" />
          </div>
        </OrbitingCircles>

        {/* Outer Orbit (radius 98, reverse) */}
        <OrbitingCircles radius={98} duration={26} reverse iconSize={28}>
          <div
            className="w-7 h-7 rounded-full bg-[#111726] border border-amber-500/40 flex items-center justify-center shadow-lg text-amber-300"
            title="60 FPS Akıcı"
          >
            <Zap size={13} className="text-amber-300" />
          </div>
          <div
            className="w-7 h-7 rounded-full bg-[#111726] border border-sky-500/40 flex items-center justify-center shadow-lg text-sky-300"
            title="TypeScript Mimari"
          >
            <Code2 size={13} className="text-sky-300" />
          </div>
          <div
            className="w-7 h-7 rounded-full bg-[#111726] border border-purple-500/40 flex items-center justify-center shadow-lg text-purple-300"
            title="Sıfır Sapma"
          >
            <Layers size={13} className="text-purple-300" />
          </div>
          <div
            className="w-7 h-7 rounded-full bg-[#111726] border border-emerald-500/40 flex items-center justify-center shadow-lg text-emerald-300"
            title="%50 Maliyet Tasarrufu"
          >
            <ShieldCheck size={13} className="text-emerald-300" />
          </div>
        </OrbitingCircles>
      </div>

      {/* Bottom Summary Bar */}
      <div className="z-10 px-2.5 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-[9px] font-mono text-white/75">
        <span>Tek Mühendislik · %50 Maliyet Avantajı</span>
        <span className="text-sky-400 font-bold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          Eş Zamanlı Canlıda
        </span>
      </div>
    </div>
  );
}

// 3. Şeffaf Fiyatlandırma & Sözleşmeli Güvence (Magic UI Animated Beam)
function VisualTransparentPricing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const clientRef = useRef<HTMLDivElement>(null);
  const contractRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);
  const budgetRef = useRef<HTMLDivElement>(null);
  const slaRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[420px] h-[330px] rounded-2xl bg-[#0b101d] border border-white/10 p-3.5 shadow-2xl flex flex-col justify-between overflow-hidden text-white mx-auto"
    >
      <DotPattern className="opacity-25 [mask-image:radial-gradient(220px_circle_at_center,white,transparent)]" />

      {/* Top Chrome Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-[9.5px] text-white/45">contract://fixed-budget.legal</span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 font-mono text-[8.5px] text-emerald-400 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Resmi Güvence</span>
        </div>
      </div>

      {/* Center Stage: Animated Trust Beam */}
      <div className="flex items-center justify-between w-full h-[190px] px-2 relative z-10">
        {/* Left: Client Requirements */}
        <div className="flex flex-col items-center justify-center">
          <CircleNode ref={clientRef} label="Müşteri Talebi" sublabel="Net Kapsam">
            <User size={16} className="text-sky-400" />
          </CircleNode>
        </div>

        {/* Center: Legal Contract Shield */}
        <div className="flex flex-col items-center justify-center">
          <CircleNode
            ref={contractRef}
            className="h-14 w-14 md:h-14 md:w-14 border-emerald-400/50 bg-[#0e231d] shadow-[0_0_25px_rgba(52,211,153,0.4)]"
            label="Sabit Sözleşme"
            sublabel="Resmi Taahhüt"
          >
            <ShieldCheck size={24} className="text-emerald-400" />
          </CircleNode>
        </div>

        {/* Right: 3 Guarantees */}
        <div className="flex flex-col justify-around h-full py-0.5">
          <CircleNode ref={codeRef} label="%100 Kod Mülkiyeti" sublabel="Tam Teslim">
            <GitBranch size={15} className="text-indigo-400" />
          </CircleNode>
          <CircleNode ref={budgetRef} label="0₺ Gizli Gider" sublabel="Sabit Bütçe">
            <Lock size={15} className="text-emerald-400" />
          </CircleNode>
          <CircleNode ref={slaRef} label="1 Yıl Garanti" sublabel="Ücretsiz SLA">
            <Zap size={15} className="text-amber-400" />
          </CircleNode>
        </div>
      </div>

      {/* Animated Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={clientRef}
        toRef={contractRef}
        curvature={0}
        duration={3.5}
        gradientStartColor="#38bdf8"
        gradientStopColor="#10b981"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={contractRef}
        toRef={codeRef}
        curvature={-26}
        duration={3.5}
        delay={0.5}
        gradientStartColor="#10b981"
        gradientStopColor="#818cf8"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={contractRef}
        toRef={budgetRef}
        curvature={0}
        duration={3.5}
        delay={1}
        gradientStartColor="#10b981"
        gradientStopColor="#34d399"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={contractRef}
        toRef={slaRef}
        curvature={26}
        duration={3.5}
        delay={1.5}
        gradientStartColor="#10b981"
        gradientStopColor="#fbbf24"
      />

      {/* Bottom Summary Bar */}
      <div className="z-10 px-2.5 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-[9px] font-mono text-white/75">
        <span>Sürpriz Maliyet Yok · Kesin Teslim Takvimi</span>
        <span className="text-emerald-400 font-bold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Sıfır Risk
        </span>
      </div>
    </div>
  );
}

// 4. Web Sistemleri & Google SEO (Magic UI Animated Lighthouse Beam)
function VisualWebPerformance() {
  const containerRef = useRef<HTMLDivElement>(null);
  const botRef = useRef<HTMLDivElement>(null);
  const userWebRef = useRef<HTMLDivElement>(null);
  const nextCoreRef = useRef<HTMLDivElement>(null);
  const lcpRef = useRef<HTMLDivElement>(null);
  const schemaRef = useRef<HTMLDivElement>(null);
  const serpRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[420px] h-[330px] rounded-2xl bg-[#0b101d] border border-white/10 p-3.5 shadow-2xl flex flex-col justify-between overflow-hidden text-white mx-auto"
    >
      <DotPattern className="opacity-25 [mask-image:radial-gradient(220px_circle_at_center,white,transparent)]" />

      {/* Top Chrome Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-[9.5px] text-white/45">lighthouse://core-web-vitals.100</span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 font-mono text-[8.5px] text-emerald-400 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>100/100 Puan</span>
        </div>
      </div>

      {/* Center Stage: Animated Web & SEO Engine */}
      <div className="flex items-center justify-between w-full h-[190px] px-2 relative z-10">
        {/* Left: Search Crawler & Visitor */}
        <div className="flex flex-col justify-around h-full py-1">
          <CircleNode ref={botRef} label="Googlebot" sublabel="Indexleme">
            <Search size={16} className="text-amber-400" />
          </CircleNode>
          <CircleNode ref={userWebRef} label="Ziyaretçi" sublabel="Web Tarayıcı">
            <Globe size={16} className="text-sky-400" />
          </CircleNode>
        </div>

        {/* Center: Next.js SSR Core */}
        <div className="flex flex-col items-center justify-center">
          <CircleNode
            ref={nextCoreRef}
            className="h-14 w-14 md:h-14 md:w-14 border-emerald-400/50 bg-[#0f241a] shadow-[0_0_25px_rgba(74,222,128,0.4)]"
            label="Next.js 15"
            sublabel="SSR &amp; Edge Cache"
          >
            <div className="font-mono font-extrabold text-lg text-emerald-400">100</div>
          </CircleNode>
        </div>

        {/* Right: Core Vitals & SERP */}
        <div className="flex flex-col justify-around h-full py-0.5">
          <CircleNode ref={lcpRef} label="LCP &lt; 0.4s" sublabel="Anında Açılış">
            <Zap size={15} className="text-emerald-400" />
          </CircleNode>
          <CircleNode ref={schemaRef} label="Schema.org" sublabel="Zengin Sonuçlar">
            <Star size={15} className="text-amber-400" />
          </CircleNode>
          <CircleNode ref={serpRef} label="Google 1. Sıra" sublabel="Organik İndeks">
            <ArrowUpRight size={15} className="text-sky-400" />
          </CircleNode>
        </div>
      </div>

      {/* Animated Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={botRef}
        toRef={nextCoreRef}
        curvature={-22}
        duration={3.5}
        gradientStartColor="#fbbf24"
        gradientStopColor="#10b981"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={userWebRef}
        toRef={nextCoreRef}
        curvature={22}
        duration={3.5}
        delay={0.5}
        gradientStartColor="#38bdf8"
        gradientStopColor="#10b981"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={nextCoreRef}
        toRef={lcpRef}
        curvature={-26}
        duration={3.5}
        delay={1}
        gradientStartColor="#10b981"
        gradientStopColor="#34d399"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={nextCoreRef}
        toRef={schemaRef}
        curvature={0}
        duration={3.5}
        delay={1.4}
        gradientStartColor="#10b981"
        gradientStopColor="#fbbf24"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={nextCoreRef}
        toRef={serpRef}
        curvature={26}
        duration={3.5}
        delay={1.8}
        gradientStartColor="#10b981"
        gradientStopColor="#38bdf8"
      />

      {/* Bottom Summary Bar */}
      <div className="z-10 px-2.5 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-[9px] font-mono text-white/75">
        <span>0.4s LCP · 14ms Tepki · 0.00 CLS</span>
        <span className="text-emerald-400 font-bold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Arama Motoru Uyumlu
        </span>
      </div>
    </div>
  );
}

// 5. %100 Mağaza Onayı (Magic UI Animated Store Approval Pipeline)
function VisualStoreApproval() {
  const containerRef = useRef<HTMLDivElement>(null);
  const appleHigRef = useRef<HTMLDivElement>(null);
  const googlePolicyRef = useRef<HTMLDivElement>(null);
  const verifiedCoreRef = useRef<HTMLDivElement>(null);
  const appStoreLiveRef = useRef<HTMLDivElement>(null);
  const playStoreLiveRef = useRef<HTMLDivElement>(null);
  const privacyRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[420px] h-[330px] rounded-2xl bg-[#0b101d] border border-white/10 p-3.5 shadow-2xl flex flex-col justify-between overflow-hidden text-white mx-auto"
    >
      <DotPattern className="opacity-25 [mask-image:radial-gradient(220px_circle_at_center,white,transparent)]" />

      {/* Top Chrome Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-[9.5px] text-white/45">store://app-store-google-play.audit</span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 font-mono text-[8.5px] text-emerald-400 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>%100 Onaylı</span>
        </div>
      </div>

      {/* Center Stage: Store Approval Pipeline */}
      <div className="flex items-center justify-between w-full h-[190px] px-2 relative z-10">
        {/* Left: Requirements */}
        <div className="flex flex-col justify-around h-full py-1">
          <CircleNode ref={appleHigRef} label="Apple HIG" sublabel="iOS 18 Uyum">
            <Smartphone size={16} className="text-white" />
          </CircleNode>
          <CircleNode ref={googlePolicyRef} label="Google Policy" sublabel="API 35 Uyum">
            <Smartphone size={16} className="text-emerald-400" />
          </CircleNode>
        </div>

        {/* Center: 50+ Apps Passed Shield */}
        <div className="flex flex-col items-center justify-center">
          <CircleNode
            ref={verifiedCoreRef}
            className="h-14 w-14 md:h-14 md:w-14 border-emerald-400/50 bg-[#122820] shadow-[0_0_25px_rgba(52,211,153,0.4)]"
            label="50+ Onay"
            sublabel="Sıfır Ret Güvencesi"
          >
            <CheckCircle2 size={24} className="text-emerald-400" />
          </CircleNode>
        </div>

        {/* Right: Live Releases */}
        <div className="flex flex-col justify-around h-full py-0.5">
          <CircleNode ref={appStoreLiveRef} label="App Store" sublabel="Ready for Sale">
            <Check size={15} className="text-emerald-400" />
          </CircleNode>
          <CircleNode ref={playStoreLiveRef} label="Play Console" sublabel="Production Live">
            <Check size={15} className="text-emerald-400" />
          </CircleNode>
          <CircleNode ref={privacyRef} label="IAP &amp; Gizlilik" sublabel="KVKK / GDPR OK">
            <Lock size={15} className="text-sky-400" />
          </CircleNode>
        </div>
      </div>

      {/* Animated Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={appleHigRef}
        toRef={verifiedCoreRef}
        curvature={-22}
        duration={3.5}
        gradientStartColor="#38bdf8"
        gradientStopColor="#10b981"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={googlePolicyRef}
        toRef={verifiedCoreRef}
        curvature={22}
        duration={3.5}
        delay={0.5}
        gradientStartColor="#10b981"
        gradientStopColor="#10b981"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={verifiedCoreRef}
        toRef={appStoreLiveRef}
        curvature={-26}
        duration={3.5}
        delay={1}
        gradientStartColor="#10b981"
        gradientStopColor="#38bdf8"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={verifiedCoreRef}
        toRef={playStoreLiveRef}
        curvature={0}
        duration={3.5}
        delay={1.4}
        gradientStartColor="#10b981"
        gradientStopColor="#34d399"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={verifiedCoreRef}
        toRef={privacyRef}
        curvature={26}
        duration={3.5}
        delay={1.8}
        gradientStartColor="#10b981"
        gradientStopColor="#818cf8"
      />

      {/* Bottom Summary Bar */}
      <div className="z-10 px-2.5 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-[9px] font-mono text-white/75">
        <span>50'den Fazla Başarılı Mağaza Onayı</span>
        <span className="text-emerald-400 font-bold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Sıfır Ret Garantisi
        </span>
      </div>
    </div>
  );
}

// 6. Türkiye Geneli 81 İl ve Uzaktan Çalışma Ağı (Magic UI Orbiting Circles)
function VisualNationwideRemote() {
  return (
    <div className="relative w-full max-w-[420px] h-[330px] rounded-2xl bg-[#0b101d] border border-white/10 p-3.5 shadow-2xl flex flex-col justify-between overflow-hidden text-white mx-auto">
      <DotPattern className="opacity-25 [mask-image:radial-gradient(220px_circle_at_center,white,transparent)]" />

      {/* Top Chrome Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-[9.5px] text-white/45">network://nationwide-remote.81</span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-sky-500/15 border border-sky-500/30 font-mono text-[8.5px] text-sky-300 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          <span>%100 Uzaktan &amp; Canlı</span>
        </div>
      </div>

      {/* Center Stage: Remote Orbit Network */}
      <div className="relative flex items-center justify-center w-full h-[200px] overflow-hidden z-10">
        {/* Core Center HQ */}
        <div className="z-10 flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-700 to-sky-600 flex items-center justify-center text-white shadow-[0_0_30px_rgba(99,102,241,0.5)] border border-white/20">
            <Globe size={22} className="text-white" />
          </div>
          <span className="font-mono text-[8.5px] text-white/90 font-bold mt-1.5 px-2 py-0.5 rounded bg-black/70 border border-white/15">
            HQ Samsun &amp; Bayburt
          </span>
        </div>

        {/* Inner Orbit (radius 56) */}
        <OrbitingCircles radius={56} duration={18} iconSize={32}>
          <div
            className="w-8 h-8 rounded-full bg-[#111726] border border-sky-400/40 flex items-center justify-center shadow-lg text-sky-300 font-mono text-[8px] font-bold"
            title="İstanbul"
          >
            İST
          </div>
          <div
            className="w-8 h-8 rounded-full bg-[#111726] border border-emerald-400/40 flex items-center justify-center shadow-lg text-emerald-300 font-mono text-[8px] font-bold"
            title="Ankara"
          >
            ANK
          </div>
          <div
            className="w-8 h-8 rounded-full bg-[#111726] border border-purple-400/40 flex items-center justify-center shadow-lg text-purple-300 font-mono text-[8px] font-bold"
            title="İzmir"
          >
            İZM
          </div>
        </OrbitingCircles>

        {/* Outer Orbit (radius 98, reverse) */}
        <OrbitingCircles radius={98} duration={26} reverse iconSize={28}>
          <div
            className="w-7 h-7 rounded-full bg-[#111726] border border-purple-400/40 flex items-center justify-center shadow-lg text-purple-300"
            title="Google Meet Birebir"
          >
            <Video size={13} className="text-purple-300" />
          </div>
          <div
            className="w-7 h-7 rounded-full bg-[#111726] border border-sky-400/40 flex items-center justify-center shadow-lg text-sky-300"
            title="TestFlight Canlı Test"
          >
            <Smartphone size={13} className="text-sky-300" />
          </div>
          <div
            className="w-7 h-7 rounded-full bg-[#111726] border border-emerald-400/40 flex items-center justify-center shadow-lg text-emerald-300"
            title="GitHub CI/CD Şeffaf Takip"
          >
            <GitBranch size={13} className="text-emerald-300" />
          </div>
          <div
            className="w-7 h-7 rounded-full bg-[#111726] border border-amber-400/40 flex items-center justify-center shadow-lg text-amber-300"
            title="Doğrudan Mühendisle İletişim"
          >
            <Zap size={13} className="text-amber-300" />
          </div>
        </OrbitingCircles>
      </div>

      {/* Bottom Summary Bar */}
      <div className="z-10 px-2.5 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-[9px] font-mono text-white/75">
        <span>81 İl &amp; Global · Sıfır Aracı Ajans</span>
        <span className="text-emerald-400 font-bold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Doğrudan Mühendis
        </span>
      </div>
    </div>
  );
}

// 7. Bayburt Yerel Kurumsal Çözümler (Magic UI Animated Local Hub)
function VisualLocalEngineering() {
  const containerRef = useRef<HTMLDivElement>(null);
  const esnafRef = useRef<HTMLDivElement>(null);
  const kurumsalRef = useRef<HTMLDivElement>(null);
  const bayburtHubRef = useRef<HTMLDivElement>(null);
  const webSysRef = useRef<HTMLDivElement>(null);
  const barcodeRef = useRef<HTMLDivElement>(null);
  const customDevRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[420px] h-[330px] rounded-2xl bg-[#0b101d] border border-white/10 p-3.5 shadow-2xl flex flex-col justify-between overflow-hidden text-white mx-auto"
    >
      <DotPattern className="opacity-25 [mask-image:radial-gradient(220px_circle_at_center,white,transparent)]" />

      {/* Top Chrome Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-[9.5px] text-white/45">terminal://bayburt-local.sh</span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 font-mono text-[8.5px] text-emerald-400 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Yerinde Servis</span>
        </div>
      </div>

      {/* Center Stage: Bayburt Tech Hub */}
      <div className="flex items-center justify-between w-full h-[190px] px-2 relative z-10">
        {/* Left: Local Clients */}
        <div className="flex flex-col justify-around h-full py-1">
          <CircleNode ref={esnafRef} label="Yerel Esnaf" sublabel="KOBİ &amp; Mağaza">
            <Store size={16} className="text-amber-400" />
          </CircleNode>
          <CircleNode ref={kurumsalRef} label="Kurumsal" sublabel="Sanayi &amp; Tesis">
            <Server size={16} className="text-sky-400" />
          </CircleNode>
        </div>

        {/* Center: Engineering Hub */}
        <div className="flex flex-col items-center justify-center">
          <CircleNode
            ref={bayburtHubRef}
            className="h-14 w-14 md:h-14 md:w-14 border-sky-400/50 bg-[#14233c] shadow-[0_0_25px_rgba(56,189,248,0.4)]"
            label="Muhammet Atmaca"
            sublabel="Fen Lisesi Güvencesi"
          >
            <Terminal size={22} className="text-sky-300" />
          </CircleNode>
        </div>

        {/* Right: Deployed Local Solutions */}
        <div className="flex flex-col justify-around h-full py-0.5">
          <CircleNode ref={webSysRef} label="Web &amp; E-Ticaret" sublabel="Google Uyumlu">
            <Globe size={15} className="text-sky-400" />
          </CircleNode>
          <CircleNode ref={barcodeRef} label="Barkod &amp; Stok" sublabel="Özel Muhasebe">
            <Terminal size={15} className="text-emerald-400" />
          </CircleNode>
          <CircleNode ref={customDevRef} label="Mobil &amp; Ağ" sublabel="Yerel Altyapı">
            <Smartphone size={15} className="text-purple-400" />
          </CircleNode>
        </div>
      </div>

      {/* Animated Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={esnafRef}
        toRef={bayburtHubRef}
        curvature={-22}
        duration={3.5}
        gradientStartColor="#fbbf24"
        gradientStopColor="#194bdf"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={kurumsalRef}
        toRef={bayburtHubRef}
        curvature={22}
        duration={3.5}
        delay={0.5}
        gradientStartColor="#38bdf8"
        gradientStopColor="#194bdf"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={bayburtHubRef}
        toRef={webSysRef}
        curvature={-26}
        duration={3.5}
        delay={1}
        gradientStartColor="#194bdf"
        gradientStopColor="#38bdf8"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={bayburtHubRef}
        toRef={barcodeRef}
        curvature={0}
        duration={3.5}
        delay={1.4}
        gradientStartColor="#194bdf"
        gradientStopColor="#34d399"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={bayburtHubRef}
        toRef={customDevRef}
        curvature={26}
        duration={3.5}
        delay={1.8}
        gradientStartColor="#194bdf"
        gradientStopColor="#c084fc"
      />

      {/* Bottom Summary Bar */}
      <div className="z-10 px-2.5 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-[9px] font-mono text-white/75">
        <span>Bayburt &amp; Çevre İllere Doğrudan Mühendis Desteği</span>
        <span className="text-sky-400 font-bold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          Yerel Güven
        </span>
      </div>
    </div>
  );
}

export interface FaqAccordionItem {
  id: string;
  number: string;
  title: string;
  badge: string;
  content: string;
  actionText: string;
  actionUrl: string;
  renderVisual: () => React.ReactNode;
}

export const FAQ_ACCORDION_ITEMS: FaqAccordionItem[] = [
  {
    id: '01',
    number: '01',
    badge: 'Mobil Mimari & 4 Aşama',
    title: 'Mobil uygulama yaptırmak istiyorum, süreç nasıl işliyor?',
    content:
      'Süreç 4 temel aşamadan oluşur: 1) İhtiyaç Analizi & Mimari Taslak: Fikrinizi dinler, gerekli ekranları ve fonksiyonları netleştiririz. 2) Prototip & Arayüz Geliştirme: Modern ve kullanıcı dostu arayüzleri hazırlarım. 3) Kodlama & Test: React Native veya Flutter ile çift platforma eş zamanlı temiz ve test edilebilir kod yazarız. 4) Canlıya Alma: Uygulamanızı Apple App Store ve Google Play Store hesaplarınıza yükler, onay sürecini baştan sona yönetirim.',
    actionText: 'Süreç Hakkında Bilgi Al',
    actionUrl: '#contact',
    renderVisual: () => <VisualMobileProcess />,
  },
  {
    id: '02',
    number: '02',
    badge: 'React Native & 60 FPS Native',
    title: 'Mobil uygulama hem iPhone (iOS) hem de Android cihazlarda çalışır mı?',
    content:
      'Evet. Geliştirdiğim uygulamalarda React Native ve Flutter teknolojilerini kullanarak tek bir sağlam kod tabanından hem iOS (iPhone, iPad) hem de Android (Samsung, Xiaomi vb.) cihazlarda yerel (native) hızda çalışan ürünler teslim ediyorum. Bu sayede iki ayrı ekip maliyetinden tasarruf eder, güncellemeleri aynı gün her iki mağazaya birden gönderirsiniz.',
    actionText: '50+ Yayındaki Uygulamayı Gör',
    actionUrl: '/apps',
    renderVisual: () => <VisualCrossPlatform />,
  },
  {
    id: '03',
    number: '03',
    badge: 'Şeffaf Sözleşme & Sabit Fiyat',
    title: 'Mobil uygulama ve web sitesi yaptırma fiyatları nasıl belirlenir?',
    content:
      'Projenin kapsamı, ekran sayısı, entegrasyonlar (ödeme sistemleri, harita, yapay zeka API’leri, özel yönetim paneli) ve teslim süresi belirleyicidir. Net bir iş listesi çıkardıktan sonra sürpriz maliyetler içermeyen, şeffaf ve sabit bir teklif sunuyorum. İletişime geçerek projeniz için ücretsiz ön değerlendirme ve resmi fiyat teklifi alabilirsiniz.',
    actionText: 'Ücretsiz Teklif İste',
    actionUrl: '#contact',
    renderVisual: () => <VisualTransparentPricing />,
  },
  {
    id: '04',
    number: '04',
    badge: 'Next.js & 100/100 Core Web Vitals',
    title: 'Web sitesi yaptırmak istiyorum, Google’da üst sıralarda çıkar mı (SEO)?',
    content:
      'Kesinlikle. Geliştirdiğim web siteleri Next.js ve modern sunucu taraflı render (SSR/SSG) teknolojileriyle hazırlanır. Schema.org yapısal verileri, OpenGraph etiketleri, sitemap.xml, robots.txt ve 100/100 Google Core Web Vitals performans kriterlerine uygun kodlanır; böylece arama motorları sitenizi hızla dizine ekler ve organik aramalarda üst sıralara taşır.',
    actionText: 'Web Sistemlerini İncele',
    actionUrl: '/web',
    renderVisual: () => <VisualWebPerformance />,
  },
  {
    id: '05',
    number: '05',
    badge: '%100 Mağaza Onay Güvencesi',
    title: 'Uygulama App Store ve Google Play Store onayından geçer mi?',
    content:
      'Evet. Bugüne kadar 50’den fazla mobil uygulamayı başarıyla mağazalara yüklemiş bir mühendis olarak, Apple Human Interface Guidelines ve Google Play Developer Policy kurallarına %100 uyumlu kod yazıyorum. Gizlilik politikası, izinler, hesap silme kuralları ve uygulama içi satın alma (IAP) gereksinimlerini eksiksiz uygulayarak ret riskini sıfıra indiriyorum.',
    actionText: "WhatsApp'tan Danış",
    actionUrl: 'https://wa.me/905445258979?text=Merhaba%2C%20mobil%20uygulama%20ma%C4%9Faza%20onay%20s%C3%BCreci%20hakk%C4%B1nda%20dan%C4%B1%C5%9Fmak%20istiyorum.',
    renderVisual: () => <VisualStoreApproval />,
  },
  {
    id: '06',
    number: '06',
    badge: '81 İl & Uzaktan (Remote) Model',
    title: 'Samsun ve Bayburt’tasınız; İstanbul, Ankara veya diğer illerden çalışabiliyor muyuz?',
    content:
      'Evet. Samsun ve Bayburt merkezli olarak çalışıyorum; başta İstanbul, Ankara, İzmir, Bursa, Antalya olmak üzere Türkiye’nin 81 ilindeki ve yurt dışındaki müşterilerimle %100 uzaktan (remote) kusursuz iş birlikleri yürütüyorum. Düzenli video toplantılar, haftalık canlı test sürümleri (TestFlight / APK) ve şeffaf ilerleme raporları ile fiziksel mesafe fark etmeksizin projenin her anında doğrudan yanınızdayım.',
    actionText: 'Görüşme Planla',
    actionUrl: '#contact',
    renderVisual: () => <VisualNationwideRemote />,
  },
  {
    id: '07',
    number: '07',
    badge: 'Bayburt Yerel Yazılım & Birebir Destek',
    title: 'Bayburt’ta yazılım, bilgisayar ve web tasarım hizmeti veriyor musunuz?',
    content:
      'Evet. Bayburt Fen Lisesi mezunu olarak memleketim Bayburt’taki yerel işletmeler, KOBİ\'ler, esnaflar ve kurumlar için özel bilgisayar yazılımları, kurumsal web sitesi tasarımı, e-ticaret sistemleri, teknik veritabanı çözümleri ve iOS & Android mobil uygulama geliştirme hizmetlerini doğrudan yerinde veya online olarak sunuyorum.',
    actionText: 'Ofis & İletişim Bilgileri',
    actionUrl: '#contact',
    renderVisual: () => <VisualLocalEngineering />,
  },
];

export interface FaqAccordionProps {
  items?: FaqAccordionItem[];
  defaultOpenId?: string;
  className?: string;
}

export function FaqAccordion({
  items = FAQ_ACCORDION_ITEMS,
  defaultOpenId = '01',
  className = '',
}: FaqAccordionProps) {
  return (
    <div
      className={`w-full max-w-5xl mx-auto border border-[var(--line)] rounded-2xl bg-[var(--paper)] overflow-hidden shadow-sm ${className}`}
    >
      <Accordion type="single" defaultValue={defaultOpenId} collapsible className="w-full divide-y divide-[var(--line)]">
        {items.map((item) => (
          <AccordionItem
            className="relative border-b-0 group transition-colors"
            value={item.id}
            key={item.id}
            data-testid={`faq-item-${item.id}`}
          >
            <AccordionTrigger className="px-6 py-5 hover:no-underline [&>svg]:hidden flex items-center justify-between text-left transition-colors hover:bg-black/[0.02]">
              <div className="flex items-center gap-4 pr-3">
                <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[rgba(25,75,223,0.08)] text-[var(--cobalt)] group-data-[state=open]:bg-[var(--cobalt)] group-data-[state=open]:text-white transition-colors shrink-0">
                  {item.number}
                </span>
                <h3 className="text-base md:text-lg font-semibold text-[var(--ink)] tracking-tight">
                  {item.title}
                </h3>
              </div>
              <span className="w-8 h-8 rounded-full border border-[var(--line)] flex items-center justify-center shrink-0 text-[var(--ink)]/60 group-data-[state=open]:rotate-180 group-data-[state=open]:bg-[var(--cobalt)] group-data-[state=open]:text-white group-data-[state=open]:border-[var(--cobalt)] transition-all duration-200">
                <ChevronDown size={15} />
              </span>
            </AccordionTrigger>
            <AccordionContent className="relative p-0 text-muted-foreground w-full grid md:grid-cols-2 overflow-hidden bg-white/40">
              <div className="p-6 md:p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="inline-block text-[11px] font-mono uppercase tracking-wider font-semibold text-[var(--cobalt)] bg-[rgba(25,75,223,0.08)] px-2.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                  <p className="text-sm md:text-[15px] leading-relaxed text-[#182033]/85 font-normal">
                    {item.content}
                  </p>
                </div>
                <div className="pt-1">
                  <Button
                    asChild
                    className="gap-2 bg-[var(--cobalt)] text-white hover:bg-[var(--cobalt)]/90 h-9 px-4 text-xs md:text-sm font-medium shadow-sm transition-all"
                  >
                    <a
                      href={item.actionUrl}
                      target={item.actionUrl.startsWith('http') ? '_blank' : undefined}
                      rel={item.actionUrl.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      <span>{item.actionText}</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="min-h-[350px] w-full border-t md:border-t-0 md:border-l border-[var(--line)] relative overflow-hidden bg-[#0c1220] flex items-center justify-center p-3 md:p-6">
                {item.renderVisual()}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default FaqAccordion;
