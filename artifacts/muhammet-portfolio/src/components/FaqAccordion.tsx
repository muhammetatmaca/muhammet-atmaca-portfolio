import React from 'react';
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
} from 'lucide-react';

/* ==========================================================================
   HIGH-FIDELITY BESPOKE UI VISUALS FOR FAQ ACCORDION
   Rooted in our portfolio palette:
   - Derin Mürekkep: #182033 / #121828
   - Bizim Beyaz: #ffffff
   - Bizim Mavi / Kobalt: #60a5fa / #38bdf8 / #194bdf
   - Bizim Turuncu: #ff765e / #ea580c
   - Bizim Lime: #d4e86e
   ========================================================================== */

// 1. Mobil Uygulama Süreci (4 Aşamalı Modern Pipeline)
function VisualMobileProcess() {
  const steps = [
    {
      num: '01',
      title: 'Analiz & PRD',
      desc: 'Mimari Taslak',
      tag: '#Wireframe',
      icon: <FileSearch size={15} className="text-[#38bdf8]" />,
      border: 'border-sky-500/30',
      badgeBg: 'bg-sky-500/10 text-sky-400',
    },
    {
      num: '02',
      title: 'UI/UX 60 FPS',
      desc: 'Figma Prototip',
      tag: '#KullanıcıDostu',
      icon: <Palette size={15} className="text-[#c084fc]" />,
      border: 'border-purple-500/30',
      badgeBg: 'bg-purple-500/10 text-purple-300',
    },
    {
      num: '03',
      title: 'React Native',
      desc: 'Yerel Derleme',
      tag: '#iOS & #Android',
      icon: <Code2 size={15} className="text-[#818cf8]" />,
      border: 'border-indigo-500/30',
      badgeBg: 'bg-indigo-500/10 text-indigo-300',
    },
    {
      num: '04',
      title: 'Canlı Yayında',
      desc: 'Store Release',
      tag: '● %100 Onaylı',
      icon: <CheckCircle2 size={15} className="text-[#4ade80]" />,
      border: 'border-emerald-500/40',
      badgeBg: 'bg-emerald-500/15 text-emerald-400 font-bold',
    },
  ];

  return (
    <div className="w-full max-w-[420px] rounded-2xl bg-[#111726] border border-white/10 p-4 shadow-2xl flex flex-col justify-between gap-3 text-white">
      {/* Top Chrome Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-[10px] text-white/45">pipeline://mobile-workflow.v3</span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 font-mono text-[9px] text-emerald-400 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Production Ready</span>
        </div>
      </div>

      {/* 4 Steps Grid */}
      <div className="grid grid-cols-2 gap-2.5 my-1">
        {steps.map((st) => (
          <div
            key={st.num}
            className={`p-2.5 rounded-xl bg-[#0c1220] border ${st.border} flex flex-col justify-between shadow-sm`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-mono text-[10px] font-bold text-white/50">{st.num}</span>
              <div className="p-1 rounded-md bg-white/5">{st.icon}</div>
            </div>
            <div>
              <div className="text-xs font-bold text-white leading-tight">{st.title}</div>
              <div className="text-[10px] text-white/60 leading-tight mt-0.5">{st.desc}</div>
            </div>
            <div className="mt-2">
              <span className={`inline-block px-1.5 py-0.5 rounded text-[8.5px] font-mono ${st.badgeBg}`}>
                {st.tag}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Summary Bar */}
      <div className="p-2.5 rounded-xl bg-[#0c1220] border border-white/10 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center shrink-0">
            <ShieldCheck size={14} className="text-sky-400" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-white leading-tight">Sözleşmeli Teslimat & Canlı Testler</div>
            <div className="text-[9px] text-white/55 leading-tight">TestFlight & APK doğrudan telefonunuza teslim</div>
          </div>
        </div>
        <span className="px-2 py-1 rounded bg-emerald-500/15 border border-emerald-500/30 text-[9px] font-mono text-emerald-400 font-bold shrink-0">
          60 FPS OK
        </span>
      </div>
    </div>
  );
}

// 2. Çift Platform (iOS & Android Senkron Yerel UI)
function VisualCrossPlatform() {
  return (
    <div className="w-full max-w-[420px] rounded-2xl bg-[#111726] border border-white/10 p-4 shadow-2xl flex flex-col justify-between gap-3 text-white">
      {/* Top Core Engine Nucleus */}
      <div className="flex items-center justify-between p-2 rounded-xl bg-[#0c1220] border border-sky-500/30">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-sky-500/15 flex items-center justify-center">
            <Layers size={14} className="text-sky-400" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">React Native TurboEngine</div>
            <div className="text-[9px] font-mono text-sky-300">Tek Kod Tabanı · %100 Senkronize</div>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[9px] font-bold">
          2x Hızlı Teslim
        </span>
      </div>

      {/* Dual Phones Side by Side */}
      <div className="grid grid-cols-2 gap-3 my-1">
        {/* iPhone 16 Pro */}
        <div className="rounded-xl bg-[#0c1220] border border-slate-700/80 p-2.5 flex flex-col justify-between shadow-inner">
          <div className="flex justify-center mb-1.5">
            <div className="w-10 h-2 rounded-full bg-black border border-white/10" />
          </div>
          <div className="p-2 rounded-lg bg-white/5 border border-white/5 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[8px] text-white/60">Bakiye</span>
              <span className="text-[8px] font-bold text-emerald-400">+14.2%</span>
            </div>
            <div className="text-xs font-mono font-bold text-white">$18,450.00</div>
            <div className="h-1.5 w-full bg-sky-500/20 rounded-full overflow-hidden">
              <div className="h-full w-4/5 bg-sky-400 rounded-full" />
            </div>
            <div className="flex gap-1 pt-0.5">
              <span className="flex-1 py-0.5 text-center text-[7.5px] rounded bg-sky-500/20 text-sky-300 font-semibold">Gönder</span>
              <span className="flex-1 py-0.5 text-center text-[7.5px] rounded bg-white/10 text-white/80">Al</span>
            </div>
          </div>
          <div className="mt-2 text-center py-1 rounded bg-blue-950/60 border border-blue-500/30 text-[8.5px] font-mono text-blue-300 font-bold">
            Apple iOS · 60 FPS
          </div>
        </div>

        {/* Android Flagship */}
        <div className="rounded-xl bg-[#0c1220] border border-slate-700/80 p-2.5 flex flex-col justify-between shadow-inner">
          <div className="flex justify-center mb-1.5">
            <div className="w-2 h-2 rounded-full bg-black border border-white/10" />
          </div>
          <div className="p-2 rounded-lg bg-white/5 border border-white/5 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[8px] text-white/60">Bakiye</span>
              <span className="text-[8px] font-bold text-emerald-400">+14.2%</span>
            </div>
            <div className="text-xs font-mono font-bold text-white">$18,450.00</div>
            <div className="h-1.5 w-full bg-emerald-500/20 rounded-full overflow-hidden">
              <div className="h-full w-4/5 bg-emerald-400 rounded-full" />
            </div>
            <div className="flex gap-1 pt-0.5">
              <span className="flex-1 py-0.5 text-center text-[7.5px] rounded bg-emerald-500/20 text-emerald-300 font-semibold">Gönder</span>
              <span className="flex-1 py-0.5 text-center text-[7.5px] rounded bg-white/10 text-white/80">Al</span>
            </div>
          </div>
          <div className="mt-2 text-center py-1 rounded bg-emerald-950/60 border border-emerald-500/30 text-[8.5px] font-mono text-emerald-300 font-bold">
            Android · Kotlin 60fps
          </div>
        </div>
      </div>

      {/* Bottom Efficiency Banner */}
      <div className="text-center py-1.5 px-3 rounded-lg bg-white/5 border border-white/10 font-mono text-[9.5px] text-white/75">
        Tek Mühendislik Mimarisi · %50 Maliyet Avantajı · Eş Zamanlı Yayında
      </div>
    </div>
  );
}

// 3. Şeffaf Fiyatlandırma & Sözleşmeli Güvence
function VisualTransparentPricing() {
  return (
    <div className="w-full max-w-[420px] rounded-2xl bg-[#111726] border border-white/10 p-4 shadow-2xl flex flex-col justify-between gap-3 text-white">
      {/* Top Agreement Header */}
      <div className="p-2.5 rounded-xl bg-[#0c1220] border border-emerald-500/30 flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
          <ShieldCheck size={16} className="text-emerald-400" />
        </div>
        <div>
          <div className="text-xs font-bold text-white">Resmi Sabit Fiyat ve Kapsam Sözleşmesi</div>
          <div className="text-[9.5px] text-white/60">Sürpriz Maliyet Yok · Kesin Teslim Takvimi Taahhüdü</div>
        </div>
      </div>

      {/* 3 Pillar Guarantee Tiles */}
      <div className="grid grid-cols-3 gap-2 my-1">
        {/* Pillar 1 */}
        <div className="p-2.5 rounded-xl bg-[#0c1220] border border-sky-500/30 flex flex-col justify-between">
          <div className="w-6 h-6 rounded-md bg-sky-500/15 flex items-center justify-center mb-1.5">
            <GitBranch size={13} className="text-sky-400" />
          </div>
          <div>
            <div className="text-[10.5px] font-bold text-white">%100 Kod</div>
            <div className="text-[8.5px] text-white/55 mt-0.5 leading-tight">Tüm kaynak kodlar müşteriye teslim</div>
          </div>
          <span className="mt-2 inline-block px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-300 text-[8px] font-mono font-semibold">
            Tam Mülkiyet
          </span>
        </div>

        {/* Pillar 2 */}
        <div className="p-2.5 rounded-xl bg-[#0c1220] border border-emerald-500/30 flex flex-col justify-between">
          <div className="w-6 h-6 rounded-md bg-emerald-500/15 flex items-center justify-center mb-1.5">
            <Lock size={13} className="text-emerald-400" />
          </div>
          <div>
            <div className="text-[10.5px] font-bold text-white">0₺ Gizli Gider</div>
            <div className="text-[8.5px] text-white/55 mt-0.5 leading-tight">Sözleşmeye bağlı sabit bütçe</div>
          </div>
          <span className="mt-2 inline-block px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 text-[8px] font-mono font-semibold">
            Sıfır Sürpriz
          </span>
        </div>

        {/* Pillar 3 */}
        <div className="p-2.5 rounded-xl bg-[#0c1220] border border-amber-500/30 flex flex-col justify-between">
          <div className="w-6 h-6 rounded-md bg-amber-500/15 flex items-center justify-center mb-1.5">
            <Zap size={13} className="text-amber-400" />
          </div>
          <div>
            <div className="text-[10.5px] font-bold text-white">1 Yıl Garanti</div>
            <div className="text-[8.5px] text-white/55 mt-0.5 leading-tight">Yayın sonrası ücretsiz bakım & SLA</div>
          </div>
          <span className="mt-2 inline-block px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300 text-[8px] font-mono font-semibold">
            Kesintisiz SLA
          </span>
        </div>
      </div>

      {/* Bottom Timeline Schedule */}
      <div className="p-2.5 rounded-xl bg-[#0c1220] border border-white/10 space-y-1.5">
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-white/70 font-medium">Ortalama Teslimat Süresi:</span>
          <span className="font-mono font-bold text-sky-400">2 ila 6 Hafta</span>
        </div>
        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-4/5 bg-gradient-to-r from-sky-400 via-purple-400 to-emerald-400 rounded-full" />
        </div>
        <div className="flex justify-between font-mono text-[7.5px] text-white/45 pt-0.5">
          <span>Analiz</span>
          <span>UI/UX</span>
          <span>Kodlama</span>
          <span className="text-emerald-400 font-bold">Canlıda</span>
        </div>
      </div>
    </div>
  );
}

// 4. Web Sistemleri & Google SEO (100/100 Core Web Vitals)
function VisualWebPerformance() {
  return (
    <div className="w-full max-w-[420px] rounded-2xl bg-[#111726] border border-white/10 p-4 shadow-2xl flex flex-col justify-between gap-3 text-white">
      {/* Top Lighthouse & Core Web Vitals HUD */}
      <div className="grid grid-cols-5 gap-2.5">
        {/* Score 100 Gauge */}
        <div className="col-span-2 p-2.5 rounded-xl bg-[#0c1220] border border-emerald-500/30 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-full border-2 border-emerald-400 flex items-center justify-center font-mono font-extrabold text-lg text-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.3)]">
            100
          </div>
          <div className="text-[10px] font-bold text-white mt-1">Lighthouse Score</div>
          <div className="text-[8px] text-white/50">Core Web Vitals</div>
        </div>

        {/* 3 Metrics */}
        <div className="col-span-3 space-y-1.5 flex flex-col justify-center">
          <div className="p-1.5 px-2.5 rounded-lg bg-[#0c1220] border border-emerald-500/25 flex items-center justify-between text-[9.5px]">
            <span className="text-white/75">Sayfa Açılış (LCP):</span>
            <span className="font-mono font-bold text-emerald-400">&lt; 0.4s</span>
          </div>
          <div className="p-1.5 px-2.5 rounded-lg bg-[#0c1220] border border-emerald-500/25 flex items-center justify-between text-[9.5px]">
            <span className="text-white/75">Tıklama Tepki (INP):</span>
            <span className="font-mono font-bold text-emerald-400">14ms</span>
          </div>
          <div className="p-1.5 px-2.5 rounded-lg bg-[#0c1220] border border-emerald-500/25 flex items-center justify-between text-[9.5px]">
            <span className="text-white/75">Düzen Kayması (CLS):</span>
            <span className="font-mono font-bold text-emerald-400">0.00</span>
          </div>
        </div>
      </div>

      {/* Google SERP Preview Card */}
      <div className="p-2.5 rounded-xl bg-[#0c1220] border border-white/10 space-y-1">
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 rounded-full bg-blue-600 flex items-center justify-center text-[7px] font-bold">M</div>
          <span className="font-mono text-[9px] text-sky-300">muhammetatmaca.com.tr</span>
        </div>
        <div className="text-[11px] font-bold text-sky-400 leading-snug">
          Muhammet Atmaca — Kıdemli Mobil &amp; Web Mühendisi
        </div>
        <div className="flex items-center gap-1 text-[8.5px] text-amber-400 font-semibold">
          <span>★★★★★</span>
          <span className="text-white/60 font-mono">5.0 (50+ Üretim Projesi)</span>
        </div>
        <div className="text-[8.5px] text-white/60 leading-tight">
          Google 1. sıra indeksleme mimarisi, zengin Schema.org yapısal verileri ve 60 FPS mobil altyapı.
        </div>
        <div className="flex gap-1.5 pt-1">
          <span className="px-2 py-0.5 rounded bg-white/5 text-[8px] font-mono text-sky-300">Mobil Uygulamalar</span>
          <span className="px-2 py-0.5 rounded bg-white/5 text-[8px] font-mono text-sky-300">Web Sistemleri</span>
          <span className="px-2 py-0.5 rounded bg-white/5 text-[8px] font-mono text-sky-300">Teklif İste</span>
        </div>
      </div>
    </div>
  );
}

// 5. %100 Mağaza Onayı (App Store & Google Play)
function VisualStoreApproval() {
  return (
    <div className="w-full max-w-[420px] rounded-2xl bg-[#111726] border border-white/10 p-4 shadow-2xl flex flex-col justify-between gap-3 text-white">
      {/* Dual Store Cards */}
      <div className="grid grid-cols-2 gap-2.5 my-1">
        {/* Apple App Store */}
        <div className="p-3 rounded-xl bg-[#0c1220] border border-sky-500/30 flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-xs text-white">Apple App Store</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <div className="py-1 px-2 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-[9px] font-mono font-bold text-emerald-400">
            Ready for Sale
          </div>
          <div className="space-y-1 text-[8px] text-white/65">
            <div>✔ HIG Standartlarına %100 Uyum</div>
            <div>✔ In-App Purchase &amp; IAP Onaylı</div>
            <div>✔ TestFlight Beta Ağı Aktif</div>
          </div>
          <span className="text-[7.5px] font-mono text-sky-300">iOS &amp; iPadOS SDK 18</span>
        </div>

        {/* Google Play Console */}
        <div className="p-3 rounded-xl bg-[#0c1220] border border-emerald-500/30 flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-xs text-white">Google Play Store</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <div className="py-1 px-2 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-[9px] font-mono font-bold text-emerald-400">
            Production Live
          </div>
          <div className="space-y-1 text-[8px] text-white/65">
            <div>✔ Target Android 15 (API 35)</div>
            <div>✔ Developer Policy %100 Uyum</div>
            <div>✔ Crash Rate: %0.00 Sıfır Hata</div>
          </div>
          <span className="text-[7.5px] font-mono text-emerald-300">Android Production</span>
        </div>
      </div>

      {/* Bottom Track Record Crest */}
      <div className="p-2.5 rounded-xl bg-[#0c1220] border border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center font-mono font-extrabold text-sm text-sky-400">
            50+
          </div>
          <div>
            <div className="text-xs font-bold text-white">50'den Fazla Başarılı Mağaza Onayı</div>
            <div className="text-[9px] text-white/55">Apple &amp; Google onay kurallarına harfiyen uyum</div>
          </div>
        </div>
        <span className="px-2 py-1 rounded bg-emerald-500/15 border border-emerald-500/30 text-[9px] font-bold text-emerald-400 shrink-0">
          Sıfır Ret Garantisi
        </span>
      </div>
    </div>
  );
}

// 6. Türkiye Geneli 81 İl ve Uzaktan Çalışma Ağı
function VisualNationwideRemote() {
  const channels = [
    {
      title: 'Haftalık TestFlight & APK',
      desc: 'Doğrudan telefonunuza canlı test sürümü',
      tag: 'Canlı Mobil Test',
      icon: <Smartphone size={13} className="text-sky-400" />,
      border: 'border-sky-500/30',
      badge: 'bg-sky-500/10 text-sky-300',
    },
    {
      title: 'Birebir Video Çağrı (Meet)',
      desc: 'Doğrudan mühendisle ekran paylaşımı',
      tag: 'Sıfır Aracı Ajans',
      icon: <Video size={13} className="text-purple-400" />,
      border: 'border-purple-500/30',
      badge: 'bg-purple-500/10 text-purple-300',
    },
    {
      title: 'Şeffaf GitHub CI/CD Akışı',
      desc: 'Her commit ve geliştirmeyi anlık takip',
      tag: 'Canlı Kod Takibi',
      icon: <GitBranch size={13} className="text-emerald-400" />,
      border: 'border-emerald-500/30',
      badge: 'bg-emerald-500/10 text-emerald-300',
    },
  ];

  return (
    <div className="w-full max-w-[420px] rounded-2xl bg-[#111726] border border-white/10 p-4 shadow-2xl flex flex-col justify-between gap-3 text-white">
      {/* Top Network Command Node */}
      <div className="p-2.5 rounded-xl bg-[#0c1220] border border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center">
            <Globe size={15} className="text-sky-400" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Samsun HQ ⟶ 81 İl ve Yurt Dışı</div>
            <div className="text-[9px] text-white/55">İstanbul · Ankara · İzmir · Bursa · Antalya · Bayburt</div>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 text-[9px] font-mono font-bold">
          %100 Remote
        </span>
      </div>

      {/* 3 Remote Protocols */}
      <div className="space-y-1.5 my-1">
        {channels.map((ch, idx) => (
          <div
            key={idx}
            className={`p-2 px-3 rounded-xl bg-[#0c1220] border ${ch.border} flex items-center justify-between gap-2`}
          >
            <div className="flex items-center gap-2.5">
              <div className="p-1 rounded-md bg-white/5">{ch.icon}</div>
              <div>
                <div className="text-[10.5px] font-bold text-white leading-tight">{ch.title}</div>
                <div className="text-[8.5px] text-white/55 leading-tight">{ch.desc}</div>
              </div>
            </div>
            <span className={`px-1.5 py-0.5 rounded text-[8px] font-mono shrink-0 ${ch.badge}`}>
              {ch.tag}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom Ping Telemetry */}
      <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-[9px] font-mono text-white/70">
        <span>Uzaktan Çalışma İletişimi: Gerçek Zamanlı</span>
        <span className="text-emerald-400 font-bold">● Aktif Destek</span>
      </div>
    </div>
  );
}

// 7. Bayburt Yerel Kurumsal Çözümler & Altyapı
function VisualLocalEngineering() {
  return (
    <div className="w-full max-w-[420px] rounded-2xl bg-[#111726] border border-white/10 p-4 shadow-2xl flex flex-col justify-between gap-3 text-white">
      {/* Terminal Header */}
      <div className="p-2.5 rounded-xl bg-[#0c1220] border border-emerald-500/30 space-y-1.5">
        <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
            <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
            <span className="w-2 h-2 rounded-full bg-[#28c840]" />
            <span className="ml-2 font-mono text-[9px] text-white/50">bayburt-kurumsal-sistemler.sh</span>
          </div>
          <span className="text-[8px] font-mono text-emerald-400 font-bold">● Aktif Servis</span>
        </div>
        <div className="font-mono text-[9px] text-emerald-400">
          $ muhammet --location=bayburt --service=all
        </div>
        <div className="font-mono text-[8.5px] text-white/80 space-y-0.5">
          <div>✔ Kurumsal Web Sitesi &amp; E-Ticaret Sistemi (Aktif)</div>
          <div>✔ Özel Barkod, Stok &amp; Muhasebe Entegrasyonu (Kuruldu)</div>
          <div>✔ SQL Veritabanı &amp; Yerel Ağ Altyapı Desteği (Tamam)</div>
        </div>
        <div className="py-1 px-2 rounded bg-amber-500/15 border border-amber-500/30 font-mono text-[8px] text-amber-300 font-semibold">
          Status: Yerinde Birebir Mühendislik &amp; Esnaf Desteği
        </div>
      </div>

      {/* 3 Regional Badges */}
      <div className="grid grid-cols-3 gap-2 my-1">
        <div className="p-2 rounded-xl bg-[#0c1220] border border-sky-500/30 flex flex-col justify-between">
          <div className="text-[10px] font-bold text-sky-400">Bayburt Lisesi</div>
          <div className="text-[8px] text-white/50 leading-tight mt-0.5">Fen Lisesi Mezunu</div>
          <span className="mt-1 text-[7.5px] font-mono text-sky-300 font-bold">Yerel Güven</span>
        </div>

        <div className="p-2 rounded-xl bg-[#0c1220] border border-emerald-500/30 flex flex-col justify-between">
          <div className="text-[10px] font-bold text-emerald-400">Birebir Destek</div>
          <div className="text-[8px] text-white/50 leading-tight mt-0.5">Ofis veya Dükkanda</div>
          <span className="mt-1 text-[7.5px] font-mono text-emerald-300 font-bold">Hızlı Müdahale</span>
        </div>

        <div className="p-2 rounded-xl bg-[#0c1220] border border-amber-500/30 flex flex-col justify-between">
          <div className="text-[10px] font-bold text-amber-400">Anahtar Teslim</div>
          <div className="text-[8px] text-white/50 leading-tight mt-0.5">Yazılım &amp; Altyapı</div>
          <span className="mt-1 text-[7.5px] font-mono text-amber-300 font-bold">Tam Entegrasyon</span>
        </div>
      </div>

      {/* Bottom Summary Pill */}
      <div className="py-1.5 px-3 rounded-lg bg-white/5 border border-white/10 text-center font-mono text-[9px] text-white/75">
        Bayburt &amp; Çevre İllere Yerinde ve Online Doğrudan Mühendis Desteği
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
              <div className="p-6 md:p-8 space-y-6 flex flex-col justify-between min-h-[260px]">
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
              <div className="min-h-[260px] md:h-full md:border-l border-t md:border-t-0 border-[var(--line)] md:absolute md:w-1/2 md:right-0 md:top-0 relative overflow-hidden bg-[#182033] flex items-center justify-center p-3 md:p-5">
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
