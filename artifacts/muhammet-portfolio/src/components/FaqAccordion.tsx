import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Button } from './ui/button';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

/* --- BESPOKE VECTOR SVG ILLUSTRATIONS --- */

// 1. Mobil Uygulama Süreci (4 Aşama Pipeline)
function SvgMobileProcess() {
  return (
    <svg viewBox="0 0 380 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[250px]">
      <rect width="380" height="260" rx="14" fill="#0c111d" />
      {/* Blueprint Grid */}
      <defs>
        <pattern id="grid1" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
        </pattern>
        <linearGradient id="gradFlow" x1="40" y1="130" x2="340" y2="130" gradientUnits="userSpaceOnUse">
          <stop stopColor="#194bdf" />
          <stop offset="0.5" stopColor="#818cf8" />
          <stop offset="1" stopColor="#22c55e" />
        </linearGradient>
      </defs>
      <rect width="380" height="260" rx="14" fill="url(#grid1)" />

      {/* Header Bar */}
      <circle cx="24" cy="20" r="4" fill="#ef4444" opacity="0.8" />
      <circle cx="36" cy="20" r="4" fill="#eab308" opacity="0.8" />
      <circle cx="48" cy="20" r="4" fill="#22c55e" opacity="0.8" />
      <text x="68" y="24" fill="rgba(255,255,255,0.45)" fontSize="10" fontFamily="monospace">pipeline.architecture.ts</text>
      <rect x="250" y="12" width="112" height="18" rx="9" fill="rgba(34, 197, 94, 0.15)" stroke="rgba(34, 197, 94, 0.3)" />
      <circle cx="260" cy="21" r="3" fill="#22c55e" />
      <text x="268" y="24" fill="#4ade80" fontSize="9" fontWeight="600" fontFamily="monospace">Production Live</text>

      {/* Main Flow connecting line */}
      <line x1="50" y1="110" x2="330" y2="110" stroke="url(#gradFlow)" strokeWidth="2.5" strokeDasharray="4 4" />

      {/* Step 1: Analiz */}
      <g transform="translate(30, 75)">
        <rect width="68" height="70" rx="10" fill="#141c2e" stroke="rgba(25, 75, 223, 0.4)" strokeWidth="1.2" />
        <rect x="8" y="8" width="22" height="14" rx="4" fill="rgba(25, 75, 223, 0.2)" />
        <text x="14" y="19" fill="#60a5fa" fontSize="9" fontWeight="bold" fontFamily="monospace">01</text>
        <text x="8" y="38" fill="#ffffff" fontSize="10" fontWeight="bold">Analiz</text>
        <text x="8" y="52" fill="rgba(255,255,255,0.5)" fontSize="8">Mimari Taslak</text>
        <circle cx="34" cy="35" r="2" fill="#60a5fa" />
      </g>

      {/* Step 2: UI/UX */}
      <g transform="translate(115, 75)">
        <rect width="68" height="70" rx="10" fill="#141c2e" stroke="rgba(129, 140, 248, 0.4)" strokeWidth="1.2" />
        <rect x="8" y="8" width="22" height="14" rx="4" fill="rgba(129, 140, 248, 0.2)" />
        <text x="14" y="19" fill="#c4b5fd" fontSize="9" fontWeight="bold" fontFamily="monospace">02</text>
        <text x="8" y="38" fill="#ffffff" fontSize="10" fontWeight="bold">UI / UX</text>
        <text x="8" y="52" fill="rgba(255,255,255,0.5)" fontSize="8">60 FPS Prototip</text>
      </g>

      {/* Step 3: Engine */}
      <g transform="translate(200, 75)">
        <rect width="68" height="70" rx="10" fill="#141c2e" stroke="rgba(96, 165, 250, 0.4)" strokeWidth="1.2" />
        <rect x="8" y="8" width="22" height="14" rx="4" fill="rgba(96, 165, 250, 0.2)" />
        <text x="14" y="19" fill="#93c5fd" fontSize="9" fontWeight="bold" fontFamily="monospace">03</text>
        <text x="8" y="38" fill="#ffffff" fontSize="10" fontWeight="bold">Yazılım</text>
        <text x="8" y="52" fill="rgba(255,255,255,0.5)" fontSize="8">React Native</text>
      </g>

      {/* Step 4: Canlı Mağaza */}
      <g transform="translate(285, 75)">
        <rect width="68" height="70" rx="10" fill="#141c2e" stroke="rgba(34, 197, 94, 0.5)" strokeWidth="1.4" />
        <rect x="8" y="8" width="22" height="14" rx="4" fill="rgba(34, 197, 94, 0.2)" />
        <text x="14" y="19" fill="#4ade80" fontSize="9" fontWeight="bold" fontFamily="monospace">04</text>
        <text x="8" y="38" fill="#4ade80" fontSize="10" fontWeight="bold">Canlıda</text>
        <text x="8" y="52" fill="rgba(255,255,255,0.5)" fontSize="8">App Store / Play</text>
      </g>

      {/* Bottom Summary Pill */}
      <g transform="translate(30, 185)">
        <rect width="320" height="48" rx="10" fill="#101726" stroke="rgba(255, 255, 255, 0.08)" />
        <circle cx="24" cy="24" r="6" fill="#194bdf" />
        <path d="M21 24L23 26L27 22" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="38" y="22" fill="#ffffff" fontSize="11" fontWeight="600">Sözleşmeli Teslimat Garantisi</text>
        <text x="38" y="36" fill="rgba(255,255,255,0.5)" fontSize="9">Her aşamada test sürümleri & haftalık şeffaf rapor</text>
        <rect x="254" y="15" width="56" height="20" rx="5" fill="rgba(25, 75, 223, 0.3)" />
        <text x="264" y="28" fill="#93c5fd" fontSize="9" fontWeight="bold" fontFamily="monospace">60 FPS</text>
      </g>
    </svg>
  );
}

// 2. Çift Platform (iOS & Android Tek Kod Tabanı)
function SvgCrossPlatform() {
  return (
    <svg viewBox="0 0 380 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[250px]">
      <rect width="380" height="260" rx="14" fill="#0c111d" />
      <pattern id="grid2" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
      </pattern>
      <rect width="380" height="260" rx="14" fill="url(#grid2)" />

      {/* Center Core Engine Node */}
      <g transform="translate(130, 20)">
        <rect width="120" height="42" rx="10" fill="#194bdf" stroke="rgba(255,255,255,0.2)" />
        <text x="18" y="20" fill="#ffffff" fontSize="10" fontWeight="bold">React Native Core</text>
        <text x="24" y="33" fill="rgba(255,255,255,0.75)" fontSize="8" fontFamily="monospace">Tek Kod Tabanı</text>
      </g>

      {/* Branching connecting lines */}
      <path d="M150 62 C 150 85, 85 85, 85 105" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3 3" />
      <path d="M230 62 C 230 85, 295 85, 295 105" stroke="#22c55e" strokeWidth="2" strokeDasharray="3 3" />

      {/* Left Device: iPhone Mockup */}
      <g transform="translate(30, 105)">
        <rect width="120" height="135" rx="14" fill="#111827" stroke="#374151" strokeWidth="2" />
        {/* Dynamic Island */}
        <rect x="42" y="8" width="36" height="7" rx="3.5" fill="#000000" />
        {/* Screen content */}
        <rect x="12" y="24" width="96" height="12" rx="4" fill="rgba(59, 130, 246, 0.2)" />
        <text x="18" y="33" fill="#60a5fa" fontSize="8" fontWeight="bold">Apple iOS (Swift)</text>
        <rect x="12" y="44" width="70" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
        <rect x="12" y="56" width="96" height="40" rx="6" fill="#1f2937" />
        <circle cx="28" cy="76" r="10" fill="#2563eb" />
        <rect x="44" y="70" width="56" height="5" rx="2" fill="rgba(255,255,255,0.6)" />
        <rect x="44" y="79" width="40" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
        <text x="12" y="118" fill="#4ade80" fontSize="8" fontWeight="bold" fontFamily="monospace">● 60 FPS Native</text>
      </g>

      {/* Right Device: Android Mockup */}
      <g transform="translate(230, 105)">
        <rect width="120" height="135" rx="14" fill="#111827" stroke="#374151" strokeWidth="2" />
        {/* Hole punch */}
        <circle cx="60" cy="11" r="3.5" fill="#000000" />
        {/* Screen content */}
        <rect x="12" y="24" width="96" height="12" rx="4" fill="rgba(34, 197, 94, 0.2)" />
        <text x="16" y="33" fill="#4ade80" fontSize="8" fontWeight="bold">Android (Kotlin)</text>
        <rect x="12" y="44" width="70" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
        <rect x="12" y="56" width="96" height="40" rx="6" fill="#1f2937" />
        <circle cx="28" cy="76" r="10" fill="#16a34a" />
        <rect x="44" y="70" width="56" height="5" rx="2" fill="rgba(255,255,255,0.6)" />
        <rect x="44" y="79" width="40" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
        <text x="12" y="118" fill="#4ade80" fontSize="8" fontWeight="bold" fontFamily="monospace">● 60 FPS Native</text>
      </g>

      {/* Center Efficiency Badge */}
      <g transform="translate(152, 140)">
        <rect width="76" height="48" rx="8" fill="#182236" stroke="rgba(255,255,255,0.1)" />
        <text x="12" y="20" fill="#fbbf24" fontSize="9" fontWeight="bold">2x Hızlı</text>
        <text x="8" y="34" fill="rgba(255,255,255,0.6)" fontSize="7.5">Aynı anda iki</text>
        <text x="8" y="44" fill="rgba(255,255,255,0.6)" fontSize="7.5">mağazada yayında</text>
      </g>
    </svg>
  );
}

// 3. Şeffaf Fiyatlandırma & Sözleşmeli Güvence
function SvgTransparentPricing() {
  return (
    <svg viewBox="0 0 380 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[250px]">
      <rect width="380" height="260" rx="14" fill="#0c111d" />
      <pattern id="grid3" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
      </pattern>
      <rect width="380" height="260" rx="14" fill="url(#grid3)" />

      {/* Contract Top Card */}
      <g transform="translate(24, 20)">
        <rect width="332" height="50" rx="10" fill="#141c2e" stroke="rgba(25, 75, 223, 0.4)" />
        <circle cx="28" cy="25" r="12" fill="rgba(34, 197, 94, 0.2)" />
        <path d="M23 25L27 29L34 21" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="50" y="24" fill="#ffffff" fontSize="12" fontWeight="bold">Şeffaf Kapsam ve Sabit Fiyat Sözleşmesi</text>
        <text x="50" y="38" fill="rgba(255,255,255,0.55)" fontSize="9">Proje başında belirlenen takvim ve bütçe • Sıfır gizli ek maliyet</text>
      </g>

      {/* 3 Guarantees Grid */}
      <g transform="translate(24, 85)">
        {/* Item 1 */}
        <rect width="102" height="85" rx="8" fill="#111827" stroke="rgba(255,255,255,0.08)" />
        <rect x="10" y="10" width="26" height="26" rx="6" fill="rgba(25, 75, 223, 0.2)" />
        <text x="18" y="27" fill="#60a5fa" fontSize="12" fontWeight="bold">%100</text>
        <text x="10" y="52" fill="#ffffff" fontSize="10" fontWeight="bold">Kod Mülkiyeti</text>
        <text x="10" y="66" fill="rgba(255,255,255,0.5)" fontSize="8">Tüm kaynak kodlar</text>
        <text x="10" y="76" fill="rgba(255,255,255,0.5)" fontSize="8">müşteriye teslim</text>

        {/* Item 2 */}
        <g transform="translate(115, 0)">
          <rect width="102" height="85" rx="8" fill="#111827" stroke="rgba(255,255,255,0.08)" />
          <rect x="10" y="10" width="26" height="26" rx="6" fill="rgba(34, 197, 94, 0.2)" />
          <text x="18" y="27" fill="#4ade80" fontSize="12" fontWeight="bold">0₺</text>
          <text x="10" y="52" fill="#ffffff" fontSize="10" fontWeight="bold">Sürpriz Maliyet</text>
          <text x="10" y="66" fill="rgba(255,255,255,0.5)" fontSize="8">Sabit anlaşma,</text>
          <text x="10" y="76" fill="rgba(255,255,255,0.5)" fontSize="8">net teslim takvimi</text>
        </g>

        {/* Item 3 */}
        <g transform="translate(230, 0)">
          <rect width="102" height="85" rx="8" fill="#111827" stroke="rgba(255,255,255,0.08)" />
          <rect x="10" y="10" width="26" height="26" rx="6" fill="rgba(234, 179, 8, 0.2)" />
          <text x="16" y="27" fill="#fde047" fontSize="11" fontWeight="bold">1 YIL</text>
          <text x="10" y="52" fill="#ffffff" fontSize="10" fontWeight="bold">Teknik Destek</text>
          <text x="10" y="66" fill="rgba(255,255,255,0.5)" fontSize="8">Yayın sonrası</text>
          <text x="10" y="76" fill="rgba(255,255,255,0.5)" fontSize="8">kesintisiz garanti</text>
        </g>
      </g>

      {/* Bottom Timeline bar */}
      <g transform="translate(24, 185)">
        <rect width="332" height="48" rx="8" fill="#101726" stroke="rgba(255,255,255,0.06)" />
        <text x="14" y="20" fill="rgba(255,255,255,0.7)" fontSize="9">Ortalama Teslimat Süresi:</text>
        <text x="125" y="20" fill="#60a5fa" fontSize="9" fontWeight="bold" fontFamily="monospace">2 ila 6 Hafta (Kapsama Bağlı)</text>
        {/* Progress bar */}
        <rect x="14" y="28" width="304" height="8" rx="4" fill="#1e293b" />
        <rect x="14" y="28" width="220" height="8" rx="4" fill="url(#gradFlow)" />
      </g>
    </svg>
  );
}

// 4. Web Sistemleri & Google SEO (100/100 Core Web Vitals)
function SvgWebPerformance() {
  return (
    <svg viewBox="0 0 380 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[250px]">
      <rect width="380" height="260" rx="14" fill="#0c111d" />
      <pattern id="grid4" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
      </pattern>
      <rect width="380" height="260" rx="14" fill="url(#grid4)" />

      {/* Google Lighthouse Score Gauge */}
      <g transform="translate(30, 24)">
        <circle cx="45" cy="45" r="38" stroke="#1f2937" strokeWidth="6" />
        <circle cx="45" cy="45" r="38" stroke="#22c55e" strokeWidth="6" strokeDasharray="238" strokeDashoffset="0" strokeLinecap="round" />
        <text x="32" y="52" fill="#22c55e" fontSize="24" fontWeight="bold" fontFamily="monospace">100</text>
        <text x="18" y="98" fill="#ffffff" fontSize="10" fontWeight="bold">Lighthouse Score</text>
        <text x="24" y="110" fill="rgba(255,255,255,0.5)" fontSize="8">Core Web Vitals</text>
      </g>

      {/* 3 Metric Pills */}
      <g transform="translate(135, 24)">
        <rect width="215" height="28" rx="6" fill="#131d2e" stroke="rgba(34, 197, 94, 0.3)" />
        <circle cx="14" cy="14" r="4" fill="#22c55e" />
        <text x="26" y="17" fill="#ffffff" fontSize="9" fontWeight="600">SEO & Arama Motoru:</text>
        <text x="145" y="17" fill="#4ade80" fontSize="9" fontWeight="bold" fontFamily="monospace">100 / 100</text>

        <g transform="translate(0, 36)">
          <rect width="215" height="28" rx="6" fill="#131d2e" stroke="rgba(34, 197, 94, 0.3)" />
          <circle cx="14" cy="14" r="4" fill="#22c55e" />
          <text x="26" y="17" fill="#ffffff" fontSize="9" fontWeight="600">Sayfa Açılış Hızı (LCP):</text>
          <text x="155" y="17" fill="#4ade80" fontSize="9" fontWeight="bold" fontFamily="monospace">&lt; 0.8s</text>
        </g>

        <g transform="translate(0, 72)">
          <rect width="215" height="28" rx="6" fill="#131d2e" stroke="rgba(34, 197, 94, 0.3)" />
          <circle cx="14" cy="14" r="4" fill="#22c55e" />
          <text x="26" y="17" fill="#ffffff" fontSize="9" fontWeight="600">Düzen Kayması (CLS):</text>
          <text x="162" y="17" fill="#4ade80" fontSize="9" fontWeight="bold" fontFamily="monospace">0.00</text>
        </g>
      </g>

      {/* Google SERP Snippet Preview */}
      <g transform="translate(30, 140)">
        <rect width="320" height="95" rx="10" fill="#111827" stroke="rgba(255,255,255,0.1)" />
        <circle cx="20" cy="22" r="6" fill="#3b82f6" />
        <text x="32" y="24" fill="#93c5fd" fontSize="9" fontFamily="monospace">muhammetatmaca.com.tr</text>
        <text x="20" y="44" fill="#60a5fa" fontSize="12" fontWeight="bold">Muhammet Atmaca — Mobil & Web Sistemleri</text>
        <text x="20" y="58" fill="rgba(255,255,255,0.6)" fontSize="9">Google 1. sıra indeksleme mimarisi, Schema.org zengin sonuçlar...</text>
        {/* Sitelinks buttons */}
        <rect x="20" y="68" width="85" height="18" rx="4" fill="#1f2937" />
        <text x="26" y="80" fill="#93c5fd" fontSize="8">Mobil Uygulamalar</text>
        <rect x="115" y="68" width="75" height="18" rx="4" fill="#1f2937" />
        <text x="122" y="80" fill="#93c5fd" fontSize="8">Web Sistemleri</text>
        <rect x="200" y="68" width="55" height="18" rx="4" fill="#1f2937" />
        <text x="208" y="80" fill="#93c5fd" fontSize="8">Hizmetler</text>
      </g>
    </svg>
  );
}

// 5. %100 Mağaza Onayı (App Store & Google Play)
function SvgStoreApproval() {
  return (
    <svg viewBox="0 0 380 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[250px]">
      <rect width="380" height="260" rx="14" fill="#0c111d" />
      <pattern id="grid5" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
      </pattern>
      <rect width="380" height="260" rx="14" fill="url(#grid5)" />

      {/* Apple App Store Card */}
      <g transform="translate(24, 22)">
        <rect width="158" height="110" rx="10" fill="#111827" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1.2" />
        <rect x="12" y="12" width="28" height="28" rx="7" fill="#1e293b" />
        <path d="M26 18L26 34M20 28L32 28" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
        <text x="46" y="24" fill="#ffffff" fontSize="10" fontWeight="bold">Apple App Store</text>
        <text x="46" y="36" fill="#60a5fa" fontSize="8" fontFamily="monospace">iOS & iPadOS</text>

        <rect x="12" y="50" width="134" height="22" rx="5" fill="rgba(34, 197, 94, 0.15)" stroke="rgba(34, 197, 94, 0.3)" />
        <circle cx="22" cy="61" r="3.5" fill="#22c55e" />
        <text x="30" y="64" fill="#4ade80" fontSize="8.5" fontWeight="bold">Status: Ready for Sale</text>

        <text x="12" y="88" fill="rgba(255,255,255,0.55)" fontSize="8">✔ Human Interface Guidelines</text>
        <text x="12" y="100" fill="rgba(255,255,255,0.55)" fontSize="8">✔ In-App Purchase (IAP) Ready</text>
      </g>

      {/* Google Play Console Card */}
      <g transform="translate(198, 22)">
        <rect width="158" height="110" rx="10" fill="#111827" stroke="rgba(34, 197, 94, 0.4)" strokeWidth="1.2" />
        <rect x="12" y="12" width="28" height="28" rx="7" fill="#1e293b" />
        <path d="M20 18L32 26L20 34Z" fill="#4ade80" />
        <text x="46" y="24" fill="#ffffff" fontSize="10" fontWeight="bold">Google Play Store</text>
        <text x="46" y="36" fill="#4ade80" fontSize="8" fontFamily="monospace">Android Production</text>

        <rect x="12" y="50" width="134" height="22" rx="5" fill="rgba(34, 197, 94, 0.15)" stroke="rgba(34, 197, 94, 0.3)" />
        <circle cx="22" cy="61" r="3.5" fill="#22c55e" />
        <text x="30" y="64" fill="#4ade80" fontSize="8.5" fontWeight="bold">Status: Passed & Live</text>

        <text x="12" y="88" fill="rgba(255,255,255,0.55)" fontSize="8">✔ Developer Policy %100</text>
        <text x="12" y="100" fill="rgba(255,255,255,0.55)" fontSize="8">✔ Account Deletion Flow OK</text>
      </g>

      {/* Bottom Track Record Banner */}
      <g transform="translate(24, 148)">
        <rect width="332" height="85" rx="10" fill="#131c2e" stroke="rgba(25, 75, 223, 0.3)" />
        <circle cx="34" cy="42" r="18" fill="rgba(25, 75, 223, 0.2)" />
        <text x="24" y="47" fill="#60a5fa" fontSize="14" fontWeight="bold">50+</text>
        <text x="64" y="34" fill="#ffffff" fontSize="12" fontWeight="bold">50'den Fazla Başarılı Mağaza Onayı</text>
        <text x="64" y="48" fill="rgba(255,255,255,0.6)" fontSize="9">Apple ve Google politikalarına harfiyen uyum ile sıfır ret riski</text>
        <rect x="64" y="58" width="105" height="18" rx="4" fill="rgba(34, 197, 94, 0.2)" />
        <text x="70" y="70" fill="#4ade80" fontSize="8" fontWeight="bold">Kusursuz Mağaza Geçişi</text>
      </g>
    </svg>
  );
}

// 6. Türkiye Geneli 81 İl ve Uzaktan Çalışma Ağı
function SvgNationwideRemote() {
  return (
    <svg viewBox="0 0 380 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[250px]">
      <rect width="380" height="260" rx="14" fill="#0c111d" />
      <pattern id="grid6" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
      </pattern>
      <rect width="380" height="260" rx="14" fill="url(#grid6)" />

      {/* Network Nodes */}
      {/* Node 1: Samsun (HQ) */}
      <g transform="translate(190, 45)">
        <circle cx="0" cy="0" r="16" fill="rgba(25, 75, 223, 0.25)" stroke="#194bdf" strokeWidth="2" />
        <circle cx="0" cy="0" r="6" fill="#60a5fa" />
        <text x="-25" y="-22" fill="#93c5fd" fontSize="10" fontWeight="bold">SAMSUN (HQ)</text>
      </g>

      {/* Node 2: İstanbul */}
      <g transform="translate(65, 80)">
        <circle cx="0" cy="0" r="12" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" />
        <circle cx="0" cy="0" r="4" fill="#ffffff" />
        <text x="-18" y="-16" fill="#ffffff" fontSize="9" fontWeight="600">İstanbul</text>
      </g>

      {/* Node 3: Ankara */}
      <g transform="translate(145, 115)">
        <circle cx="0" cy="0" r="12" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" />
        <circle cx="0" cy="0" r="4" fill="#ffffff" />
        <text x="-14" y="-16" fill="#ffffff" fontSize="9" fontWeight="600">Ankara</text>
      </g>

      {/* Node 4: İzmir */}
      <g transform="translate(45, 160)">
        <circle cx="0" cy="0" r="12" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" />
        <circle cx="0" cy="0" r="4" fill="#ffffff" />
        <text x="-10" y="-16" fill="#ffffff" fontSize="9" fontWeight="600">İzmir</text>
      </g>

      {/* Node 5: Bayburt */}
      <g transform="translate(305, 85)">
        <circle cx="0" cy="0" r="14" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="5" fill="#4ade80" />
        <text x="-20" y="-18" fill="#4ade80" fontSize="9" fontWeight="bold">Bayburt</text>
      </g>

      {/* Connecting Network Arcs */}
      <path d="M190 45 L65 80" stroke="rgba(25, 75, 223, 0.5)" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M190 45 L145 115" stroke="rgba(25, 75, 223, 0.5)" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M190 45 L305 85" stroke="rgba(34, 197, 94, 0.6)" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M65 80 L145 115" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M145 115 L45 160" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2 2" />

      {/* Bottom Remote Protocol Cards */}
      <g transform="translate(24, 190)">
        <rect width="332" height="50" rx="8" fill="#131c2e" stroke="rgba(255,255,255,0.08)" />
        <rect x="10" y="10" width="95" height="30" rx="6" fill="#1e293b" />
        <text x="18" y="24" fill="#60a5fa" fontSize="8" fontWeight="bold">Haftalık TestFlight</text>
        <text x="18" y="34" fill="rgba(255,255,255,0.5)" fontSize="7">Canlı Test APK/IPA</text>

        <rect x="115" y="10" width="105" height="30" rx="6" fill="#1e293b" />
        <text x="123" y="24" fill="#a78bfa" fontSize="8" fontWeight="bold">Video Toplantılar</text>
        <text x="123" y="34" fill="rgba(255,255,255,0.5)" fontSize="7">Birebir Doğrudan İletişim</text>

        <rect x="230" y="10" width="92" height="30" rx="6" fill="#1e293b" />
        <text x="238" y="24" fill="#4ade80" fontSize="8" fontWeight="bold">GitHub CI/CD</text>
        <text x="238" y="34" fill="rgba(255,255,255,0.5)" fontSize="7">Şeffaf Commit Akışı</text>
      </g>
    </svg>
  );
}

// 7. Bayburt Yerel Kurumsal Çözümler & Altyapı
function SvgLocalEngineering() {
  return (
    <svg viewBox="0 0 380 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[250px]">
      <rect width="380" height="260" rx="14" fill="#0c111d" />
      <pattern id="grid7" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
      </pattern>
      <rect width="380" height="260" rx="14" fill="url(#grid7)" />

      {/* Terminal Header */}
      <g transform="translate(24, 20)">
        <rect width="332" height="120" rx="10" fill="#111827" stroke="rgba(34, 197, 94, 0.4)" strokeWidth="1.2" />
        <circle cx="16" cy="16" r="4" fill="#ef4444" />
        <circle cx="28" cy="16" r="4" fill="#eab308" />
        <circle cx="40" cy="16" r="4" fill="#22c55e" />
        <text x="56" y="20" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="monospace">bayburt-kurumsal-terminal</text>

        {/* Code Lines */}
        <text x="16" y="44" fill="#4ade80" fontSize="10" fontFamily="monospace">$ muhammet --location=bayburt --service=all</text>
        <text x="16" y="62" fill="rgba(255,255,255,0.8)" fontSize="9.5" fontFamily="monospace">✔ Kurumsal Web Sitesi &amp; E-Ticaret Sistemi</text>
        <text x="16" y="78" fill="rgba(255,255,255,0.8)" fontSize="9.5" fontFamily="monospace">✔ Özel Muhasebe &amp; Barkod Yazılım Entegrasyonu</text>
        <text x="16" y="94" fill="rgba(255,255,255,0.8)" fontSize="9.5" fontFamily="monospace">✔ Veritabanı ve Yerel Bilgisayar Altyapı Desteği</text>
        <text x="16" y="112" fill="#fbbf24" fontSize="9" fontFamily="monospace">Status: Yerinde veya Online Birebir Mühendislik Desteği</text>
      </g>

      {/* Feature Cards Bottom */}
      <g transform="translate(24, 155)">
        <rect width="102" height="80" rx="8" fill="#141c2e" stroke="rgba(255,255,255,0.08)" />
        <text x="12" y="26" fill="#60a5fa" fontSize="11" fontWeight="bold">Bayburt Lisesi</text>
        <text x="12" y="38" fill="rgba(255,255,255,0.6)" fontSize="8">Fen Lisesi Mezunu</text>
        <text x="12" y="52" fill="#ffffff" fontSize="9" fontWeight="600">Güvenilir Referans</text>
        <text x="12" y="64" fill="rgba(255,255,255,0.5)" fontSize="7.5">Doğrudan yerel bağ</text>

        <g transform="translate(115, 0)">
          <rect width="102" height="80" rx="8" fill="#141c2e" stroke="rgba(255,255,255,0.08)" />
          <text x="12" y="26" fill="#4ade80" fontSize="11" fontWeight="bold">Birebir Destek</text>
          <text x="12" y="38" fill="rgba(255,255,255,0.6)" fontSize="8">Ofis veya İş Yerinde</text>
          <text x="12" y="52" fill="#ffffff" fontSize="9" fontWeight="600">Hızlı Müdahale</text>
          <text x="12" y="64" fill="rgba(255,255,255,0.5)" fontSize="7.5">Esnaf ve KOBİ'ler</text>
        </g>

        <g transform="translate(230, 0)">
          <rect width="102" height="80" rx="8" fill="#141c2e" stroke="rgba(255,255,255,0.08)" />
          <text x="12" y="26" fill="#fbbf24" fontSize="11" fontWeight="bold">Anahtar Teslim</text>
          <text x="12" y="38" fill="rgba(255,255,255,0.6)" fontSize="8">Yazılım &amp; Donanım</text>
          <text x="12" y="52" fill="#ffffff" fontSize="9" fontWeight="600">Teknik Çözüm</text>
          <text x="12" y="64" fill="rgba(255,255,255,0.5)" fontSize="7.5">Sıfırdan Canlıya</text>
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
              <div className="h-64 md:h-full md:border-l border-t md:border-t-0 border-[var(--line)] md:absolute md:w-1/2 md:right-0 md:top-0 relative overflow-hidden bg-[#0c111d] flex items-center justify-center p-3 md:p-5">
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
