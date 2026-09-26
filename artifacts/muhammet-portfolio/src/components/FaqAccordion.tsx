import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Button } from './ui/button';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

/* ==========================================================================
   HIGH-FIDELITY BESPOKE VECTOR UI ILLUSTRATIONS FOR FAQ ACCORDION
   ========================================================================== */

// 1. Mobil Uygulama Süreci (4 Aşamalı Modern Pipeline)
function SvgMobileProcess() {
  return (
    <svg viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[260px]" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="mpBg" x1="0" y1="0" x2="420" y2="280" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0a0f1d" />
          <stop offset="1" stopColor="#060911" />
        </linearGradient>
        <linearGradient id="mpTrack" x1="40" y1="120" x2="380" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="0.35" stopColor="#818cf8" />
          <stop offset="0.7" stopColor="#a855f7" />
          <stop offset="1" stopColor="#22c55e" />
        </linearGradient>
        <filter id="mpGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <pattern id="mpGrid" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="rgba(255, 255, 255, 0.05)" />
        </pattern>
      </defs>

      {/* Background Frame */}
      <rect width="420" height="280" rx="16" fill="url(#mpBg)" />
      <rect width="420" height="280" rx="16" fill="url(#mpGrid)" />
      <rect x="0.5" y="0.5" width="419" height="279" rx="15.5" stroke="rgba(255, 255, 255, 0.08)" />

      {/* Top Header Chrome */}
      <g transform="translate(18, 16)">
        <circle cx="8" cy="8" r="4" fill="#ff5f57" />
        <circle cx="22" cy="8" r="4" fill="#febc2e" />
        <circle cx="36" cy="8" r="4" fill="#28c840" />
        <text x="54" y="12" fill="rgba(255, 255, 255, 0.4)" fontSize="10" fontFamily="monospace" fontWeight="500">pipeline://mobile-workflow.v3</text>
        <rect x="250" y="-1" width="134" height="20" rx="10" fill="rgba(34, 197, 94, 0.12)" stroke="rgba(34, 197, 94, 0.3)" />
        <circle cx="262" cy="9" r="3.5" fill="#22c55e" filter="url(#mpGlow)" />
        <text x="272" y="12" fill="#4ade80" fontSize="9" fontWeight="700" fontFamily="monospace">● Production Ready</text>
      </g>

      {/* Connecting Laser Bus */}
      <line x1="45" y1="120" x2="375" y2="120" stroke="url(#mpTrack)" strokeWidth="3" strokeLinecap="round" opacity="0.85" filter="url(#mpGlow)" />
      <line x1="45" y1="120" x2="375" y2="120" stroke="rgba(255,255,255,0.7)" strokeWidth="1" strokeDasharray="6 6" />

      {/* Phase 1: Analiz */}
      <g transform="translate(24, 75)">
        <rect width="84" height="92" rx="12" fill="#0f172a" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1.2" />
        <rect x="8" y="8" width="28" height="18" rx="6" fill="rgba(56, 189, 248, 0.15)" />
        <text x="14" y="21" fill="#38bdf8" fontSize="10" fontWeight="800" fontFamily="monospace">01</text>
        <circle cx="68" cy="17" r="4" fill="#38bdf8" />
        <text x="10" y="44" fill="#ffffff" fontSize="11" fontWeight="700">Analiz &amp; PRD</text>
        <text x="10" y="58" fill="rgba(255, 255, 255, 0.55)" fontSize="8.5">Mimari Taslak</text>
        <rect x="10" y="68" width="64" height="15" rx="4" fill="rgba(56, 189, 248, 0.1)" />
        <text x="16" y="79" fill="#93c5fd" fontSize="7.5" fontFamily="monospace">#Fonksiyonel</text>
      </g>

      {/* Phase 2: UI/UX */}
      <g transform="translate(120, 75)">
        <rect width="84" height="92" rx="12" fill="#0f172a" stroke="rgba(168, 85, 247, 0.35)" strokeWidth="1.2" />
        <rect x="8" y="8" width="28" height="18" rx="6" fill="rgba(168, 85, 247, 0.15)" />
        <text x="14" y="21" fill="#c084fc" fontSize="10" fontWeight="800" fontFamily="monospace">02</text>
        <circle cx="68" cy="17" r="4" fill="#c084fc" />
        <text x="10" y="44" fill="#ffffff" fontSize="11" fontWeight="700">UI / UX 60fps</text>
        <text x="10" y="58" fill="rgba(255, 255, 255, 0.55)" fontSize="8.5">Figma Prototip</text>
        <rect x="10" y="68" width="64" height="15" rx="4" fill="rgba(168, 85, 247, 0.1)" />
        <text x="16" y="79" fill="#e9d5ff" fontSize="7.5" fontFamily="monospace">#KullanıcıDostu</text>
      </g>

      {/* Phase 3: Kodlama */}
      <g transform="translate(216, 75)">
        <rect width="84" height="92" rx="12" fill="#0f172a" stroke="rgba(99, 102, 241, 0.35)" strokeWidth="1.2" />
        <rect x="8" y="8" width="28" height="18" rx="6" fill="rgba(99, 102, 241, 0.15)" />
        <text x="14" y="21" fill="#818cf8" fontSize="10" fontWeight="800" fontFamily="monospace">03</text>
        <circle cx="68" cy="17" r="4" fill="#818cf8" />
        <text x="10" y="44" fill="#ffffff" fontSize="11" fontWeight="700">React Native</text>
        <text x="10" y="58" fill="rgba(255, 255, 255, 0.55)" fontSize="8.5">Yerel Derleme</text>
        <rect x="10" y="68" width="64" height="15" rx="4" fill="rgba(99, 102, 241, 0.1)" />
        <text x="16" y="79" fill="#c7d2fe" fontSize="7.5" fontFamily="monospace">#iOS&amp;Android</text>
      </g>

      {/* Phase 4: Mağazaya Çıkış */}
      <g transform="translate(312, 75)">
        <rect width="84" height="92" rx="12" fill="#0f172a" stroke="rgba(34, 197, 94, 0.45)" strokeWidth="1.4" />
        <rect x="8" y="8" width="28" height="18" rx="6" fill="rgba(34, 197, 94, 0.15)" />
        <text x="14" y="21" fill="#4ade80" fontSize="10" fontWeight="800" fontFamily="monospace">04</text>
        <circle cx="68" cy="17" r="4" fill="#22c55e" filter="url(#mpGlow)" />
        <text x="10" y="44" fill="#4ade80" fontSize="11" fontWeight="700">Canlı Yayında</text>
        <text x="10" y="58" fill="rgba(255, 255, 255, 0.55)" fontSize="8.5">App Store &amp; Play</text>
        <rect x="10" y="68" width="64" height="15" rx="4" fill="rgba(34, 197, 94, 0.15)" />
        <text x="16" y="79" fill="#86efac" fontSize="7.5" fontWeight="700" fontFamily="monospace">#%100Onaylı</text>
      </g>

      {/* Bottom Summary Bar */}
      <g transform="translate(24, 195)">
        <rect width="372" height="62" rx="12" fill="#0b1324" stroke="rgba(255, 255, 255, 0.08)" />
        <circle cx="28" cy="31" r="14" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" strokeWidth="1.2" />
        <path d="M23 31L27 35L34 27" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="52" y="27" fill="#ffffff" fontSize="11.5" fontWeight="700">Sözleşmeli Teslimat &amp; Düzenli Canlı Test Sürümleri</text>
        <text x="52" y="43" fill="rgba(255, 255, 255, 0.6)" fontSize="9">Her aşamada doğrudan telefona TestFlight &amp; APK kurulumu · Haftalık şeffaf rapor</text>
        <rect x="296" y="18" width="66" height="26" rx="6" fill="rgba(34, 197, 94, 0.18)" stroke="rgba(34, 197, 94, 0.35)" />
        <text x="306" y="35" fill="#4ade80" fontSize="9.5" fontWeight="700" fontFamily="monospace">60 FPS OK</text>
      </g>
    </svg>
  );
}

// 2. Çift Platform (iOS & Android Tek Kod Tabanı)
function SvgCrossPlatform() {
  return (
    <svg viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[260px]" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="cpBg" x1="0" y1="0" x2="420" y2="280" gradientUnits="userSpaceOnUse">
          <stop stopColor="#090d16" />
          <stop offset="1" stopColor="#05070d" />
        </linearGradient>
        <linearGradient id="cpBlue" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#38bdf8" />
          <stop offset="1" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="cpGreen" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#4ade80" />
          <stop offset="1" stopColor="#16a34a" />
        </linearGradient>
        <linearGradient id="cpChartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="rgba(56, 189, 248, 0.35)" />
          <stop offset="1" stopColor="rgba(56, 189, 248, 0.0)" />
        </linearGradient>
      </defs>

      <rect width="420" height="280" rx="16" fill="url(#cpBg)" />
      <rect x="0.5" y="0.5" width="419" height="279" rx="15.5" stroke="rgba(255, 255, 255, 0.08)" />

      {/* Central React Native TurboEngine Nucleus */}
      <g transform="translate(125, 16)">
        <rect width="170" height="42" rx="10" fill="#0f172a" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.4" />
        {/* Orbital Atom Motif */}
        <circle cx="24" cy="21" r="5" fill="#38bdf8" />
        <ellipse cx="24" cy="21" rx="12" ry="5" stroke="#38bdf8" strokeWidth="1" transform="rotate(30 24 21)" opacity="0.75" />
        <ellipse cx="24" cy="21" rx="12" ry="5" stroke="#38bdf8" strokeWidth="1" transform="rotate(-30 24 21)" opacity="0.75" />
        <text x="44" y="19" fill="#ffffff" fontSize="10.5" fontWeight="700">React Native Engine</text>
        <text x="44" y="32" fill="#93c5fd" fontSize="8.5" fontFamily="monospace">Tek Kod Tabanı · %100 Senkron</text>
      </g>

      {/* Sweeping Connecting Conduits */}
      <path d="M155 58 C 155 85, 95 85, 95 105" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
      <path d="M265 58 C 265 85, 325 85, 325 105" stroke="#4ade80" strokeWidth="2" strokeDasharray="3 3" />

      {/* Left Device: iPhone 16 Pro */}
      <g transform="translate(30, 95)">
        <rect width="130" height="145" rx="18" fill="#0c111d" stroke="#334155" strokeWidth="2" />
        {/* Titanium Outer Rim Highlight */}
        <rect x="1" y="1" width="128" height="143" rx="17" stroke="rgba(255, 255, 255, 0.12)" />
        {/* Dynamic Island */}
        <rect x="45" y="8" width="40" height="8" rx="4" fill="#000000" />
        <circle cx="78" cy="12" r="2" fill="#1e293b" />
        
        {/* App UI Header */}
        <g transform="translate(10, 24)">
          <rect width="110" height="24" rx="6" fill="#1e293b" />
          <circle cx="14" cy="12" r="6" fill="url(#cpBlue)" />
          <text x="26" y="15" fill="#ffffff" fontSize="8" fontWeight="700">Bakiye: $18,450</text>
          <text x="82" y="15" fill="#4ade80" fontSize="7" fontWeight="bold">+14.2%</text>
        </g>
        
        {/* Sparkline Chart */}
        <path d="M12 75 L30 65 L50 72 L70 56 L90 62 L118 48 L118 85 L12 85 Z" fill="url(#cpChartGrad)" />
        <path d="M12 75 L30 65 L50 72 L70 56 L90 62 L118 48" stroke="#38bdf8" strokeWidth="2" fill="none" />
        
        {/* Action Buttons */}
        <rect x="12" y="94" width="48" height="16" rx="4" fill="rgba(56, 189, 248, 0.2)" />
        <text x="20" y="105" fill="#93c5fd" fontSize="7.5" fontWeight="600">Gönder</text>
        <rect x="70" y="94" width="48" height="16" rx="4" fill="rgba(255, 255, 255, 0.08)" />
        <text x="82" y="105" fill="#ffffff" fontSize="7.5">Al</text>
        
        {/* Bottom OS Label */}
        <rect x="10" y="118" width="110" height="18" rx="5" fill="#172554" />
        <text x="18" y="130" fill="#60a5fa" fontSize="8" fontWeight="700" fontFamily="monospace">Apple iOS 18 · 60 FPS</text>
      </g>

      {/* Right Device: Android Flagship */}
      <g transform="translate(260, 95)">
        <rect width="130" height="145" rx="18" fill="#0c111d" stroke="#334155" strokeWidth="2" />
        <rect x="1" y="1" width="128" height="143" rx="17" stroke="rgba(255, 255, 255, 0.12)" />
        {/* Punch Hole */}
        <circle cx="65" cy="11" r="3.5" fill="#000000" />
        
        {/* App UI Header (Identical Parity) */}
        <g transform="translate(10, 24)">
          <rect width="110" height="24" rx="6" fill="#1e293b" />
          <circle cx="14" cy="12" r="6" fill="url(#cpGreen)" />
          <text x="26" y="15" fill="#ffffff" fontSize="8" fontWeight="700">Bakiye: $18,450</text>
          <text x="82" y="15" fill="#4ade80" fontSize="7" fontWeight="bold">+14.2%</text>
        </g>
        
        {/* Sparkline Chart */}
        <path d="M12 75 L30 65 L50 72 L70 56 L90 62 L118 48 L118 85 L12 85 Z" fill="url(#cpChartGrad)" />
        <path d="M12 75 L30 65 L50 72 L70 56 L90 62 L118 48" stroke="#4ade80" strokeWidth="2" fill="none" />
        
        {/* Action Buttons */}
        <rect x="12" y="94" width="48" height="16" rx="4" fill="rgba(34, 197, 94, 0.2)" />
        <text x="20" y="105" fill="#86efac" fontSize="7.5" fontWeight="600">Gönder</text>
        <rect x="70" y="94" width="48" height="16" rx="4" fill="rgba(255, 255, 255, 0.08)" />
        <text x="82" y="105" fill="#ffffff" fontSize="7.5">Al</text>
        
        {/* Bottom OS Label */}
        <rect x="10" y="118" width="110" height="18" rx="5" fill="#052e16" />
        <text x="18" y="130" fill="#4ade80" fontSize="8" fontWeight="700" fontFamily="monospace">Android 15 · Kotlin Core</text>
      </g>

      {/* Center Floating Parity Badge */}
      <g transform="translate(168, 135)">
        <rect width="84" height="65" rx="10" fill="#111c33" stroke="rgba(255, 255, 255, 0.12)" />
        <text x="18" y="24" fill="#fbbf24" fontSize="11" fontWeight="800">2x Hızlı</text>
        <text x="12" y="38" fill="rgba(255, 255, 255, 0.75)" fontSize="8" fontWeight="600">Sıfır Kod Tekrarı</text>
        <text x="10" y="52" fill="rgba(255, 255, 255, 0.55)" fontSize="7.5">%50 Maliyet Avantajı</text>
      </g>
    </svg>
  );
}

// 3. Şeffaf Fiyatlandırma & Sözleşmeli Güvence
function SvgTransparentPricing() {
  return (
    <svg viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[260px]" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="tpBg" x1="0" y1="0" x2="420" y2="280" gradientUnits="userSpaceOnUse">
          <stop stopColor="#090d16" />
          <stop offset="1" stopColor="#05070d" />
        </linearGradient>
        <linearGradient id="tpGold" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#fbbf24" />
          <stop offset="1" stopColor="#d97706" />
        </linearGradient>
      </defs>

      <rect width="420" height="280" rx="16" fill="url(#tpBg)" />
      <rect x="0.5" y="0.5" width="419" height="279" rx="15.5" stroke="rgba(255, 255, 255, 0.08)" />

      {/* Official Security / Agreement Header */}
      <g transform="translate(24, 18)">
        <rect width="372" height="54" rx="12" fill="#0f172a" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1.2" />
        <circle cx="28" cy="27" r="14" fill="rgba(34, 197, 94, 0.15)" stroke="#22c55e" strokeWidth="1.4" />
        <path d="M23 27L27 31L34 23" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="52" y="24" fill="#ffffff" fontSize="12" fontWeight="700">Resmi Sabit Fiyat ve Kapsam Sözleşmesi</text>
        <text x="52" y="40" fill="rgba(255, 255, 255, 0.6)" fontSize="9">Proje başında netleşen şeffaf takvim ve bütçe · Sıfır sürpriz ek fatura</text>
      </g>

      {/* 3 Pillar Guarantee Cards */}
      <g transform="translate(24, 86)">
        {/* Pillar 1: Kod Mülkiyeti */}
        <g>
          <rect width="116" height="96" rx="12" fill="#0c1322" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="1.2" />
          <rect x="12" y="12" width="30" height="26" rx="6" fill="rgba(56, 189, 248, 0.15)" />
          <text x="18" y="29" fill="#38bdf8" fontSize="11" fontWeight="800" fontFamily="monospace">%100</text>
          <text x="12" y="56" fill="#ffffff" fontSize="11" fontWeight="700">Kod Mülkiyeti</text>
          <text x="12" y="70" fill="rgba(255, 255, 255, 0.6)" fontSize="8.5">Kaynak kodlar eksiksiz</text>
          <text x="12" y="82" fill="rgba(255, 255, 255, 0.6)" fontSize="8.5">müşteriye teslim</text>
        </g>

        {/* Pillar 2: 0 TL Sürpriz */}
        <g transform="translate(128, 0)">
          <rect width="116" height="96" rx="12" fill="#0c1322" stroke="rgba(34, 197, 94, 0.25)" strokeWidth="1.2" />
          <rect x="12" y="12" width="30" height="26" rx="6" fill="rgba(34, 197, 94, 0.15)" />
          <text x="21" y="29" fill="#4ade80" fontSize="12" fontWeight="800" fontFamily="monospace">0₺</text>
          <text x="12" y="56" fill="#ffffff" fontSize="11" fontWeight="700">Gizli Gider Yok</text>
          <text x="12" y="70" fill="rgba(255, 255, 255, 0.6)" fontSize="8.5">Teklifte yazan net</text>
          <text x="12" y="82" fill="rgba(255, 255, 255, 0.6)" fontSize="8.5">rakamla sabit taahhüt</text>
        </g>

        {/* Pillar 3: 1 Yıl Garanti */}
        <g transform="translate(256, 0)">
          <rect width="116" height="96" rx="12" fill="#0c1322" stroke="rgba(251, 191, 36, 0.25)" strokeWidth="1.2" />
          <rect x="12" y="12" width="30" height="26" rx="6" fill="rgba(251, 191, 36, 0.15)" />
          <text x="15" y="29" fill="#fbbf24" fontSize="10.5" fontWeight="800" fontFamily="monospace">1 YIL</text>
          <text x="12" y="56" fill="#ffffff" fontSize="11" fontWeight="700">Teknik Destek</text>
          <text x="12" y="70" fill="rgba(255, 255, 255, 0.6)" fontSize="8.5">Yayın sonrası ücretsiz</text>
          <text x="12" y="82" fill="rgba(255, 255, 255, 0.6)" fontSize="8.5">hata &amp; bakım garantisi</text>
        </g>
      </g>

      {/* Bottom Timeline Schedule Bar */}
      <g transform="translate(24, 196)">
        <rect width="372" height="66" rx="12" fill="#0f172a" stroke="rgba(255, 255, 255, 0.08)" />
        <text x="16" y="24" fill="rgba(255, 255, 255, 0.85)" fontSize="10" fontWeight="600">Ortalama Teslimat Süreci: <tspan fill="#38bdf8" fontWeight="bold">2 ila 6 Hafta</tspan> (Kapsama Bağlı)</text>
        
        {/* Milestone Steps Bar */}
        <g transform="translate(16, 34)">
          <rect width="340" height="8" rx="4" fill="#1e293b" />
          <rect width="255" height="8" rx="4" fill="url(#tpGold)" />
          
          <text x="0" y="22" fill="#94a3b8" fontSize="8" fontFamily="monospace">Aşama 1: Analiz</text>
          <text x="95" y="22" fill="#94a3b8" fontSize="8" fontFamily="monospace">Aşama 2: UI/UX</text>
          <text x="190" y="22" fill="#94a3b8" fontSize="8" fontFamily="monospace">Aşama 3: Kodlama</text>
          <text x="290" y="22" fill="#4ade80" fontSize="8" fontWeight="bold" fontFamily="monospace">Canlıda 🚀</text>
        </g>
      </g>
    </svg>
  );
}

// 4. Web Sistemleri & Google SEO (100/100 Core Web Vitals)
function SvgWebPerformance() {
  return (
    <svg viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[260px]" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="wpBg" x1="0" y1="0" x2="420" y2="280" gradientUnits="userSpaceOnUse">
          <stop stopColor="#090d16" />
          <stop offset="1" stopColor="#05070d" />
        </linearGradient>
        <linearGradient id="wpEmerald" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#22c55e" />
          <stop offset="1" stopColor="#16a34a" />
        </linearGradient>
        <filter id="wpGlow">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <rect width="420" height="280" rx="16" fill="url(#wpBg)" />
      <rect x="0.5" y="0.5" width="419" height="279" rx="15.5" stroke="rgba(255, 255, 255, 0.08)" />

      {/* Left: Google Lighthouse 100/100 Gauge */}
      <g transform="translate(24, 20)">
        <rect width="130" height="135" rx="14" fill="#0d1424" stroke="rgba(34, 197, 94, 0.3)" strokeWidth="1.2" />
        {/* Circular Gauge */}
        <circle cx="65" cy="50" r="32" stroke="#1e293b" strokeWidth="5" />
        <circle cx="65" cy="50" r="32" stroke="#22c55e" strokeWidth="5" strokeDasharray="201" strokeDashoffset="0" strokeLinecap="round" filter="url(#wpGlow)" />
        <text x="50" y="56" fill="#22c55e" fontSize="20" fontWeight="900" fontFamily="monospace">100</text>
        <text x="24" y="98" fill="#ffffff" fontSize="10.5" fontWeight="700">Lighthouse Score</text>
        <text x="28" y="112" fill="rgba(255, 255, 255, 0.55)" fontSize="8.5">Core Web Vitals</text>
        <circle cx="65" cy="122" r="3" fill="#22c55e" />
      </g>

      {/* Right: 3 Key Real-world Telemetry Pills */}
      <g transform="translate(166, 20)">
        {/* Metric 1: LCP */}
        <g>
          <rect width="230" height="38" rx="8" fill="#0d1424" stroke="rgba(34, 197, 94, 0.25)" />
          <circle cx="16" cy="19" r="5" fill="#22c55e" />
          <text x="28" y="17" fill="#ffffff" fontSize="9.5" fontWeight="700">Sayfa Açılış Hızı (LCP):</text>
          <text x="28" y="30" fill="rgba(255, 255, 255, 0.5)" fontSize="8">Google hedefi &lt; 2.5s</text>
          <text x="165" y="24" fill="#4ade80" fontSize="11" fontWeight="900" fontFamily="monospace">&lt; 0.4s</text>
        </g>

        {/* Metric 2: INP */}
        <g transform="translate(0, 48)">
          <rect width="230" height="38" rx="8" fill="#0d1424" stroke="rgba(34, 197, 94, 0.25)" />
          <circle cx="16" cy="19" r="5" fill="#22c55e" />
          <text x="28" y="17" fill="#ffffff" fontSize="9.5" fontWeight="700">Tıklama Tepki Süresi (INP):</text>
          <text x="28" y="30" fill="rgba(255, 255, 255, 0.5)" fontSize="8">Anında etkileşim</text>
          <text x="175" y="24" fill="#4ade80" fontSize="11" fontWeight="900" fontFamily="monospace">14ms</text>
        </g>

        {/* Metric 3: CLS */}
        <g transform="translate(0, 96)">
          <rect width="230" height="38" rx="8" fill="#0d1424" stroke="rgba(34, 197, 94, 0.25)" />
          <circle cx="16" cy="19" r="5" fill="#22c55e" />
          <text x="28" y="17" fill="#ffffff" fontSize="9.5" fontWeight="700">Düzen Kayması (CLS):</text>
          <text x="28" y="30" fill="rgba(255, 255, 255, 0.5)" fontSize="8">Sıfır ekran atlaması</text>
          <text x="178" y="24" fill="#4ade80" fontSize="11" fontWeight="900" fontFamily="monospace">0.00</text>
        </g>
      </g>

      {/* Bottom: Google SERP Preview Card with Rich Sitelinks */}
      <g transform="translate(24, 168)">
        <rect width="372" height="96" rx="12" fill="#0c1322" stroke="rgba(255, 255, 255, 0.1)" />
        {/* Favicon + URL */}
        <circle cx="20" cy="20" r="7" fill="#2563eb" />
        <text x="17" y="23" fill="#ffffff" fontSize="8" fontWeight="bold">M</text>
        <text x="34" y="22" fill="#93c5fd" fontSize="9.5" fontFamily="monospace">muhammetatmaca.com.tr</text>
        {/* Title */}
        <text x="14" y="42" fill="#60a5fa" fontSize="12" fontWeight="700">Muhammet Atmaca — Mobil &amp; Web Sistemleri Mühendisi</text>
        <text x="14" y="56" fill="rgba(255, 255, 255, 0.65)" fontSize="8.5">Google 1. sıra indeksleme mimarisi, zengin Schema.org sonuçları ve 60 FPS mobil altyapı.</text>
        {/* 3 Sitelink Pills */}
        <g transform="translate(14, 66)">
          <rect width="92" height="18" rx="4" fill="#1e293b" />
          <text x="8" y="78" fill="#93c5fd" fontSize="8">Mobil Uygulamalar</text>
          <rect x="100" y="0" width="86" height="18" rx="4" fill="#1e293b" />
          <text x="108" y="12" fill="#93c5fd" fontSize="8">Web Platformları</text>
          <rect x="194" y="0" width="70" height="18" rx="4" fill="#1e293b" />
          <text x="202" y="12" fill="#93c5fd" fontSize="8">Teklif İste</text>
        </g>
      </g>
    </svg>
  );
}

// 5. %100 Mağaza Onayı (App Store & Google Play)
function SvgStoreApproval() {
  return (
    <svg viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[260px]" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="saBg" x1="0" y1="0" x2="420" y2="280" gradientUnits="userSpaceOnUse">
          <stop stopColor="#090d16" />
          <stop offset="1" stopColor="#05070d" />
        </linearGradient>
      </defs>

      <rect width="420" height="280" rx="16" fill="url(#saBg)" />
      <rect x="0.5" y="0.5" width="419" height="279" rx="15.5" stroke="rgba(255, 255, 255, 0.08)" />

      {/* Left Card: Apple App Store Connect */}
      <g transform="translate(24, 20)">
        <rect width="180" height="142" rx="14" fill="#0d1424" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1.2" />
        {/* Apple Logo Placeholder / Icon */}
        <rect x="14" y="14" width="30" height="30" rx="8" fill="#1e293b" stroke="rgba(255, 255, 255, 0.1)" />
        <path d="M29 20V36M22 28H36" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" />
        <text x="52" y="26" fill="#ffffff" fontSize="11" fontWeight="700">App Store Connect</text>
        <text x="52" y="38" fill="#60a5fa" fontSize="8.5" fontFamily="monospace">iOS &amp; iPadOS</text>

        {/* Status Pill */}
        <rect x="14" y="52" width="152" height="24" rx="6" fill="rgba(34, 197, 94, 0.15)" stroke="rgba(34, 197, 94, 0.35)" />
        <circle cx="26" cy="64" r="3.5" fill="#22c55e" />
        <text x="36" y="67" fill="#4ade80" fontSize="9" fontWeight="700">Status: Ready for Sale</text>

        {/* Checklist items */}
        <text x="14" y="94" fill="rgba(255, 255, 255, 0.65)" fontSize="8.5">✔ Human Interface Guidelines</text>
        <text x="14" y="109" fill="rgba(255, 255, 255, 0.65)" fontSize="8.5">✔ In-App Purchase (IAP) Ready</text>
        <text x="14" y="124" fill="rgba(255, 255, 255, 0.65)" fontSize="8.5">✔ Privacy Nutrition Label OK</text>
      </g>

      {/* Right Card: Google Play Console */}
      <g transform="translate(216, 20)">
        <rect width="180" height="142" rx="14" fill="#0d1424" stroke="rgba(34, 197, 94, 0.35)" strokeWidth="1.2" />
        {/* Play Icon */}
        <rect x="14" y="14" width="30" height="30" rx="8" fill="#1e293b" stroke="rgba(255, 255, 255, 0.1)" />
        <path d="M24 21L36 29L24 37Z" fill="#4ade80" />
        <text x="52" y="26" fill="#ffffff" fontSize="11" fontWeight="700">Google Play Store</text>
        <text x="52" y="38" fill="#4ade80" fontSize="8.5" fontFamily="monospace">Android Production</text>

        {/* Status Pill */}
        <rect x="14" y="52" width="152" height="24" rx="6" fill="rgba(34, 197, 94, 0.15)" stroke="rgba(34, 197, 94, 0.35)" />
        <circle cx="26" cy="64" r="3.5" fill="#22c55e" />
        <text x="36" y="67" fill="#4ade80" fontSize="9" fontWeight="700">Status: Passed &amp; Live</text>

        {/* Checklist items */}
        <text x="14" y="94" fill="rgba(255, 255, 255, 0.65)" fontSize="8.5">✔ Target Android 15 (API 35)</text>
        <text x="14" y="109" fill="rgba(255, 255, 255, 0.65)" fontSize="8.5">✔ Developer Policy %100 Uyum</text>
        <text x="14" y="124" fill="rgba(255, 255, 255, 0.65)" fontSize="8.5">✔ Account Deletion Flow OK</text>
      </g>

      {/* Bottom Track Record Banner */}
      <g transform="translate(24, 178)">
        <rect width="372" height="84" rx="12" fill="#0f172a" stroke="rgba(25, 75, 223, 0.35)" />
        <circle cx="38" cy="42" r="20" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" strokeWidth="1.2" />
        <text x="26" y="47" fill="#38bdf8" fontSize="15" fontWeight="900" fontFamily="monospace">50+</text>
        <text x="70" y="34" fill="#ffffff" fontSize="12.5" fontWeight="700">50'den Fazla Başarılı Mağaza Onayı</text>
        <text x="70" y="49" fill="rgba(255, 255, 255, 0.6)" fontSize="9">Apple ve Google inceleme ekiplerinin katı kurallarına harfiyen uyum</text>
        <rect x="70" y="58" width="124" height="18" rx="4" fill="rgba(34, 197, 94, 0.2)" />
        <text x="78" y="70" fill="#4ade80" fontSize="8.5" fontWeight="700">✔ Sıfır Ret Garantisi</text>
      </g>
    </svg>
  );
}

// 6. Türkiye Geneli 81 İl ve Uzaktan Çalışma Ağı
function SvgNationwideRemote() {
  return (
    <svg viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[260px]" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="nrBg" x1="0" y1="0" x2="420" y2="280" gradientUnits="userSpaceOnUse">
          <stop stopColor="#090d16" />
          <stop offset="1" stopColor="#05070d" />
        </linearGradient>
      </defs>

      <rect width="420" height="280" rx="16" fill="url(#nrBg)" />
      <rect x="0.5" y="0.5" width="419" height="279" rx="15.5" stroke="rgba(255, 255, 255, 0.08)" />

      {/* Network Connecting Lines */}
      <path d="M210 50 L80 90" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M210 50 L160 120" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M210 50 L340 90" stroke="rgba(74, 222, 128, 0.6)" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M80 90 L160 120" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M160 120 L60 155" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M210 50 L275 145" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" strokeDasharray="2 2" />

      {/* Center Command HQ: SAMSUN */}
      <g transform="translate(210, 50)">
        <circle cx="0" cy="0" r="22" fill="rgba(56, 189, 248, 0.12)" stroke="#38bdf8" strokeWidth="1" />
        <circle cx="0" cy="0" r="14" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" strokeWidth="2" />
        <circle cx="0" cy="0" r="5" fill="#38bdf8" />
        <rect x="-45" y="-34" width="90" height="18" rx="5" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
        <text x="-37" y="-22" fill="#38bdf8" fontSize="9" fontWeight="800" fontFamily="monospace">SAMSUN (HQ)</text>
      </g>

      {/* Node: İstanbul */}
      <g transform="translate(80, 90)">
        <circle cx="0" cy="0" r="12" fill="rgba(255, 255, 255, 0.08)" stroke="rgba(255, 255, 255, 0.3)" />
        <circle cx="0" cy="0" r="4" fill="#ffffff" />
        <text x="-18" y="-16" fill="#ffffff" fontSize="9" fontWeight="600">İstanbul</text>
      </g>

      {/* Node: Ankara */}
      <g transform="translate(160, 120)">
        <circle cx="0" cy="0" r="12" fill="rgba(255, 255, 255, 0.08)" stroke="rgba(255, 255, 255, 0.3)" />
        <circle cx="0" cy="0" r="4" fill="#ffffff" />
        <text x="-16" y="-16" fill="#ffffff" fontSize="9" fontWeight="600">Ankara</text>
      </g>

      {/* Node: İzmir */}
      <g transform="translate(60, 155)">
        <circle cx="0" cy="0" r="12" fill="rgba(255, 255, 255, 0.08)" stroke="rgba(255, 255, 255, 0.3)" />
        <circle cx="0" cy="0" r="4" fill="#ffffff" />
        <text x="-12" y="-16" fill="#ffffff" fontSize="9" fontWeight="600">İzmir</text>
      </g>

      {/* Node: Bayburt */}
      <g transform="translate(340, 90)">
        <circle cx="0" cy="0" r="16" fill="rgba(74, 222, 128, 0.15)" stroke="#4ade80" strokeWidth="1.8" />
        <circle cx="0" cy="0" r="5" fill="#4ade80" />
        <rect x="-35" y="-30" width="70" height="18" rx="5" fill="#0f172a" stroke="#4ade80" strokeWidth="1" />
        <text x="-25" y="-18" fill="#4ade80" fontSize="9" fontWeight="800" fontFamily="monospace">Bayburt</text>
      </g>

      {/* Bottom Remote Protocol 3 Cards */}
      <g transform="translate(24, 185)">
        <rect width="372" height="75" rx="12" fill="#0f172a" stroke="rgba(255, 255, 255, 0.08)" />
        
        {/* Card 1 */}
        <g transform="translate(12, 12)">
          <rect width="108" height="50" rx="8" fill="#1e293b" />
          <text x="10" y="22" fill="#38bdf8" fontSize="8.5" fontWeight="700">Haftalık TestFlight</text>
          <text x="10" y="34" fill="rgba(255, 255, 255, 0.6)" fontSize="7.5">Canlı Test APK/IPA</text>
          <text x="10" y="44" fill="#4ade80" fontSize="7" fontFamily="monospace">✔ Doğrudan Telefona</text>
        </g>

        {/* Card 2 */}
        <g transform="translate(132, 12)">
          <rect width="108" height="50" rx="8" fill="#1e293b" />
          <text x="10" y="22" fill="#c084fc" fontSize="8.5" fontWeight="700">Birebir Video Çağrı</text>
          <text x="10" y="34" fill="rgba(255, 255, 255, 0.6)" fontSize="7.5">Doğrudan Mühendis</text>
          <text x="10" y="44" fill="#a78bfa" fontSize="7" fontFamily="monospace">✔ Sıfır Aracı Ajans</text>
        </g>

        {/* Card 3 */}
        <g transform="translate(252, 12)">
          <rect width="108" height="50" rx="8" fill="#1e293b" />
          <text x="10" y="22" fill="#4ade80" fontSize="8.5" fontWeight="700">GitHub CI/CD Akışı</text>
          <text x="10" y="34" fill="rgba(255, 255, 255, 0.6)" fontSize="7.5">Şeffaf Commitler</text>
          <text x="10" y="44" fill="#86efac" fontSize="7" fontFamily="monospace">✔ Anlık Kod Takibi</text>
        </g>
      </g>
    </svg>
  );
}

// 7. Bayburt Yerel Kurumsal Çözümler & Altyapı
function SvgLocalEngineering() {
  return (
    <svg viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[260px]" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="leBg" x1="0" y1="0" x2="420" y2="280" gradientUnits="userSpaceOnUse">
          <stop stopColor="#090d16" />
          <stop offset="1" stopColor="#05070d" />
        </linearGradient>
      </defs>

      <rect width="420" height="280" rx="16" fill="url(#leBg)" />
      <rect x="0.5" y="0.5" width="419" height="279" rx="15.5" stroke="rgba(255, 255, 255, 0.08)" />

      {/* Terminal Screen Header */}
      <g transform="translate(24, 18)">
        <rect width="372" height="140" rx="12" fill="#0b1324" stroke="rgba(74, 222, 128, 0.35)" strokeWidth="1.2" />
        <circle cx="16" cy="16" r="4" fill="#ff5f57" />
        <circle cx="28" cy="16" r="4" fill="#febc2e" />
        <circle cx="40" cy="16" r="4" fill="#28c840" />
        <text x="56" y="20" fill="rgba(255, 255, 255, 0.45)" fontSize="9.5" fontFamily="monospace">bayburt-kurumsal-sistemler.sh</text>

        {/* Terminal Commands */}
        <text x="16" y="44" fill="#4ade80" fontSize="10.5" fontFamily="monospace">$ muhammet --location=bayburt --service=all</text>
        <text x="16" y="64" fill="#ffffff" fontSize="10" fontFamily="monospace">✔ Kurumsal Web Sitesi &amp; E-Ticaret Sistemi (Aktif)</text>
        <text x="16" y="82" fill="#ffffff" fontSize="10" fontFamily="monospace">✔ Özel Barkod, Stok &amp; Muhasebe Entegrasyonu (Kuruldu)</text>
        <text x="16" y="100" fill="#ffffff" fontSize="10" fontFamily="monospace">✔ Veritabanı, Yerel Sunucu &amp; Ağ Altyapı Desteği (Tamam)</text>
        <rect x="16" y="112" width="340" height="18" rx="4" fill="rgba(251, 191, 36, 0.15)" />
        <text x="22" y="125" fill="#fbbf24" fontSize="9" fontWeight="bold" fontFamily="monospace">Status: İş Yerinde / Ofiste Birebir Mühendislik Desteği</text>
      </g>

      {/* 3 Regional Trust Cards */}
      <g transform="translate(24, 172)">
        {/* Card 1 */}
        <g>
          <rect width="116" height="88" rx="10" fill="#0f172a" stroke="rgba(56, 189, 248, 0.25)" />
          <text x="12" y="26" fill="#38bdf8" fontSize="11" fontWeight="700">Bayburt Lisesi</text>
          <text x="12" y="40" fill="rgba(255, 255, 255, 0.6)" fontSize="8.5">Fen Lisesi Mezunu</text>
          <text x="12" y="58" fill="#ffffff" fontSize="9.5" fontWeight="600">Yerel Güvenilirlik</text>
          <text x="12" y="72" fill="rgba(255, 255, 255, 0.5)" fontSize="8">Doğrudan yerel bağ</text>
        </g>

        {/* Card 2 */}
        <g transform="translate(128, 0)">
          <rect width="116" height="88" rx="10" fill="#0f172a" stroke="rgba(74, 222, 128, 0.25)" />
          <text x="12" y="26" fill="#4ade80" fontSize="11" fontWeight="700">Birebir Destek</text>
          <text x="12" y="40" fill="rgba(255, 255, 255, 0.6)" fontSize="8.5">Ofis veya Dükkanda</text>
          <text x="12" y="58" fill="#ffffff" fontSize="9.5" fontWeight="600">Hızlı Müdahale</text>
          <text x="12" y="72" fill="rgba(255, 255, 255, 0.5)" fontSize="8">Esnaf ve KOBİ'ler</text>
        </g>

        {/* Card 3 */}
        <g transform="translate(256, 0)">
          <rect width="116" height="88" rx="10" fill="#0f172a" stroke="rgba(251, 191, 36, 0.25)" />
          <text x="12" y="26" fill="#fbbf24" fontSize="11" fontWeight="700">Anahtar Teslim</text>
          <text x="12" y="40" fill="rgba(255, 255, 255, 0.6)" fontSize="8.5">Yazılım &amp; Altyapı</text>
          <text x="12" y="58" fill="#ffffff" fontSize="9.5" fontWeight="600">Tam Donanım</text>
          <text x="12" y="72" fill="rgba(255, 255, 255, 0.5)" fontSize="8">Sıfırdan Canlıya</text>
        </g>
      </g>
    </svg>
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
    renderVisual: () => <SvgMobileProcess />,
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
    renderVisual: () => <SvgCrossPlatform />,
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
    renderVisual: () => <SvgTransparentPricing />,
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
    renderVisual: () => <SvgWebPerformance />,
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
    renderVisual: () => <SvgStoreApproval />,
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
    renderVisual: () => <SvgNationwideRemote />,
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
    renderVisual: () => <SvgLocalEngineering />,
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
              <div className="p-6 md:p-8 space-y-6 flex flex-col justify-between min-h-[250px]">
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
              <div className="h-64 md:h-full md:border-l border-t md:border-t-0 border-[var(--line)] md:absolute md:w-1/2 md:right-0 md:top-0 relative overflow-hidden bg-[#090d16] flex items-center justify-center p-3 md:p-5">
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
