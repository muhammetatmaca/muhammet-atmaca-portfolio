import React from "react";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// 1. Eflal Duşakabin
export function EflalLogo() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-1.5 sm:gap-2 md:gap-3.5">
      <svg viewBox="0 0 40 40" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0 text-white" fill="none">
        <path
          d="M 20 2 L 37 11 L 37 29 L 20 38 L 3 29 L 3 11 Z"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinejoin="round"
        />
        <path d="M 20 2 L 20 38" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
        <path d="M 3 11 L 20 20 L 37 11" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round" />
        <path d="M 11 25 L 11 17 L 20 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 29 25 L 29 17 L 20 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <span className="text-xs sm:text-sm md:text-2xl font-black tracking-tight leading-none text-white">
          Eflal
        </span>
        <span className="text-[6.5px] sm:text-[7.5px] md:text-[9.5px] font-bold tracking-[0.2em] md:tracking-[0.28em] text-neutral-400 uppercase mt-0.5 md:mt-1">
          DUŞAKABİN
        </span>
      </div>
    </div>
  );
}

// 2. Zafer Lokantası
export function ZaferLogo() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-1.5 sm:gap-2 md:gap-3.5">
      <svg viewBox="0 0 40 40" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0 text-white" fill="none">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2.8" />
        <path d="M 14 13 C 12 8 17 6 20 8 C 23 6 28 8 26 13 Z" fill="currentColor" />
        <line x1="20" y1="13" x2="20" y2="33" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M 13 17 C 13 15 27 15 27 17 C 27 24 24 28 20 31 C 16 28 13 24 13 17 Z" fill="currentColor" />
        <path d="M 28 12 Q 31 10 30 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <span className="text-xs sm:text-sm md:text-2xl font-black tracking-wide leading-none text-white">
          ZAFER
        </span>
        <span className="text-[6.5px] sm:text-[7.5px] md:text-[9.5px] font-bold tracking-[0.2em] md:tracking-[0.28em] text-neutral-400 uppercase mt-0.5 md:mt-1">
          LOKANTASI
        </span>
      </div>
    </div>
  );
}

// 3. Doğanlar Ecza Deposu
export function DoganlarLogo() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-1.5 sm:gap-2 md:gap-3.5">
      <svg viewBox="0 0 40 40" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0 text-white" fill="none">
        <rect x="2" y="2" width="36" height="36" rx="10" stroke="currentColor" strokeWidth="2.8" fill="currentColor" fillOpacity="0.12" />
        <path d="M 20 10 L 20 30 M 10 20 L 30 20" stroke="currentColor" strokeWidth="4.8" strokeLinecap="round" />
        <circle cx="20" cy="20" r="2.8" fill="#09090b" />
      </svg>
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <span className="text-[11px] sm:text-xs md:text-xl font-black tracking-tight leading-none text-white">
          DOĞANLAR
        </span>
        <span className="text-[6px] sm:text-[7px] md:text-[9px] font-bold tracking-[0.16em] md:tracking-[0.24em] text-neutral-400 uppercase mt-0.5 md:mt-1">
          ECZA DEPOSU
        </span>
      </div>
    </div>
  );
}

// 4. Limon Çiçeği Yıkar (Halı Yıkama)
export function LimonCicegiLogo() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-1.5 sm:gap-2 md:gap-3.5">
      <svg viewBox="0 0 40 40" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0 text-white" fill="none">
        <rect x="2" y="2" width="36" height="36" rx="9" stroke="currentColor" strokeWidth="2.2" opacity="0.4" />
        <path
          d="M 11 29 C 9 22 15 13 22 13 C 27 13 29 17 24 22 C 19 27 14 24 18 31 C 22 37 32 30 33 21"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="28" cy="11" r="2.5" fill="currentColor" />
        <path d="M 11 11 Q 13 8 15 11 Q 13 14 11 11 Z" fill="currentColor" opacity="0.8" />
      </svg>
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <span className="text-[6px] sm:text-[7px] md:text-[9px] font-bold tracking-[0.16em] md:tracking-[0.26em] text-neutral-400 uppercase">
          LİMON ÇİÇEĞİ
        </span>
        <span className="text-xs sm:text-sm md:text-2xl font-black tracking-wider leading-none text-white mt-0.5">
          YIKAR
        </span>
        <span className="text-[5.5px] sm:text-[6.5px] md:text-[8.5px] font-bold tracking-[0.16em] md:tracking-[0.24em] text-neutral-400 uppercase mt-0.5">
          HALI YIKAMA
        </span>
      </div>
    </div>
  );
}

// 5. MY Danışmanlık
export function MYDanismanlikLogo() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-1.5 sm:gap-2 md:gap-3.5">
      <svg viewBox="0 0 40 40" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0 text-white" fill="none">
        <circle cx="22" cy="20" r="14.5" stroke="currentColor" strokeWidth="2.6" strokeDasharray="75 14" strokeLinecap="round" />
        <text x="14.5" y="24" fill="currentColor" fontSize="11" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="-0.5px">
          MY
        </text>
        <path d="M 6 35 Q 9 21 8 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <ellipse cx="6" cy="18" rx="2.8" ry="1.6" transform="rotate(-35 6 18)" fill="currentColor" />
        <ellipse cx="11.5" cy="13.5" rx="2.8" ry="1.6" transform="rotate(25 11.5 13.5)" fill="currentColor" />
        <ellipse cx="7.5" cy="8.5" rx="2.2" ry="1.3" transform="rotate(-20 7.5 8.5)" fill="currentColor" />
      </svg>
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <span className="text-xs sm:text-sm md:text-2xl font-black tracking-wide leading-none text-white">
          MY
        </span>
        <span className="text-[6px] sm:text-[7px] md:text-[9px] font-bold tracking-[0.16em] md:tracking-[0.24em] text-neutral-400 uppercase mt-0.5 md:mt-1">
          DANIŞMANLIK
        </span>
      </div>
    </div>
  );
}

// 6. Hasağaç Mobilya
export function HasagacLogo() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-1.5 sm:gap-2 md:gap-3.5">
      <svg viewBox="0 0 40 40" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0 text-white" fill="none">
        <path d="M 7 36 L 7 19 A 13 13 0 0 1 33 19 L 33 36 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <line x1="20" y1="36" x2="20" y2="23" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M 20 28 L 14 22 M 20 25 L 26 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="20" cy="17" r="3.2" fill="currentColor" />
        <circle cx="13.5" cy="19.5" r="2.6" fill="currentColor" />
        <circle cx="26.5" cy="18.5" r="2.6" fill="currentColor" />
        <circle cx="16.5" cy="12" r="2.4" fill="currentColor" />
        <circle cx="23.5" cy="12.5" r="2.4" fill="currentColor" />
      </svg>
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <span className="text-[11px] sm:text-xs md:text-xl font-black tracking-wide leading-none text-white">
          HASAĞAÇ
        </span>
        <span className="text-[5.5px] sm:text-[6.5px] md:text-[8.5px] font-bold tracking-[0.14em] md:tracking-[0.18em] text-neutral-400 uppercase mt-0.5 md:mt-1">
          MOBİLYA & AKSESUAR
        </span>
      </div>
    </div>
  );
}

// 7. Servisciler İlan
export function ServiscilerLogo() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-1.5 sm:gap-2 md:gap-3.5">
      <svg viewBox="0 0 40 40" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0 text-white" fill="none">
        <path
          d="M 4 27 L 4 19 C 4 17 6 15 8 15 L 23 15 L 30 20 L 35 22 C 36 23 37 24 37 26 L 37 28 C 37 29 36 30 35 30 L 32 30 M 24 30 L 15 30 M 7 30 L 4 30"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="11" cy="30" r="4" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="28" cy="30" r="4" stroke="currentColor" strokeWidth="2.2" />
        <path d="M 10 18 L 22 18 L 22 23 L 10 23 Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M 24 18 L 28 18 L 32 23 L 24 23 Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
        <line x1="3" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
      </svg>
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <span className="text-[11px] sm:text-xs md:text-xl font-black italic tracking-wide leading-none text-white">
          SERVİSCİLER
        </span>
        <span className="text-[6px] sm:text-[7px] md:text-[9px] font-bold tracking-[0.16em] md:tracking-[0.26em] text-neutral-400 uppercase mt-0.5 md:mt-1">
          İLAN PLATFORMU
        </span>
      </div>
    </div>
  );
}

// 8. B&Y Hukuk
export function BYHukukLogo() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-1.5 sm:gap-2 md:gap-3.5">
      <svg viewBox="0 0 40 40" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0 text-white" fill="none">
        <path
          d="M 20 4 L 34 8 C 34 22 28 31 20 36 C 12 31 6 22 6 8 Z"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <line x1="20" y1="12" x2="20" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="28" x2="24" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="16" x2="28" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="20" cy="12" r="1.5" fill="currentColor" />
        <path d="M 12 16 L 10 22 L 14 22 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M 28 16 L 26 22 L 30 22 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <span className="text-xs sm:text-sm md:text-2xl font-black tracking-tight leading-none text-white">
          B&Y
        </span>
        <span className="text-[6.5px] sm:text-[7.5px] md:text-[9.5px] font-bold tracking-[0.2em] md:tracking-[0.28em] text-neutral-400 uppercase mt-0.5 md:mt-1">
          HUKUK BÜROSU
        </span>
      </div>
    </div>
  );
}

// 9. Trakya Matbaası
export function TrakyaMatbaasiLogo() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-1.5 sm:gap-2 md:gap-3.5">
      <svg viewBox="0 0 40 40" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0 text-white" fill="none">
        <rect x="6" y="8" width="28" height="9" rx="3.5" stroke="currentColor" strokeWidth="2.4" />
        <line x1="12" y1="8" x2="12" y2="17" stroke="currentColor" strokeWidth="1.6" strokeDasharray="2 2" />
        <line x1="28" y1="8" x2="28" y2="17" stroke="currentColor" strokeWidth="1.6" strokeDasharray="2 2" />
        <path
          d="M 10 17 L 10 32 L 29 32 L 29 17"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <line x1="14" y1="22" x2="25" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="14" y1="26" x2="22" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="33" cy="32" r="3" stroke="currentColor" strokeWidth="1.4" />
        <line x1="33" y1="27" x2="33" y2="37" stroke="currentColor" strokeWidth="1.2" />
        <line x1="28" y1="32" x2="38" y2="32" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <span className="text-[11px] sm:text-xs md:text-xl font-black tracking-wide leading-none text-white">
          TRAKYA
        </span>
        <span className="text-[6.5px] sm:text-[7.5px] md:text-[9px] font-bold tracking-[0.16em] md:tracking-[0.24em] text-neutral-400 uppercase mt-0.5 md:mt-1">
          MATBAASI
        </span>
      </div>
    </div>
  );
}

// 5 Columns x 5 Rows Grid Matrix:
// Column 0: Left flanking empty boxes
// Columns 1, 2, 3: The 3 center columns (Header / 9 Logos / Empty)
// Column 4: Right flanking empty boxes
// Row 0: Top Header row (Col 0 empty, Col 1-3 Header banner box, Col 4 empty)
// Row 1: Left empty | Eflal | Zafer | Doğanlar | Right empty
// Row 2: Left empty | Limon Çiçeği Yıkar | MY Danışmanlık | Hasağaç Mobilya | Right empty
// Row 3: Left empty | Servisciler İlan | B&Y Hukuk | Trakya Matbaası | Right empty
// Row 4: Full Bottom Row of 5 Empty Boxes

type LogoCloudProps = React.ComponentProps<"div">;

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  return (
    <div className="w-full bg-[#08080a] text-white overflow-hidden select-none">
      {/* 5-Column Full-Width Grid: Zero Solid Black Space! Every space is a box! */}
      <div
        className={cn(
          "w-full grid grid-cols-3 md:grid-cols-5 border-t border-l border-[#27272a] bg-[#09090b]",
          className
        )}
        {...props}
      >
        {/* =========================================
            ROW 0: HEADER ROW (Integrated into the grid)
            ========================================= */}
        {/* Col 0: Top-Left Empty Box */}
        <div className="hidden md:flex relative items-center justify-center border-r border-b border-[#27272a] bg-[#0c0c0e] min-h-[140px]">
          <PlusIcon className="-right-[12px] -bottom-[12px] absolute z-20 size-6 text-white/30" strokeWidth={1} />
        </div>

        {/* Col 1-3: Center Section Header Box */}
        <div className="col-span-3 md:col-span-3 relative flex flex-col items-center justify-center p-4 sm:p-6 md:p-12 border-r border-b border-[#27272a] bg-[#09090b]">
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-[#194BDE] block mb-1.5 md:mb-2">
            // REFERANSLAR & PROJELER
          </span>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tight text-white text-center">
            İŞ ORTAKLARIMIZ
          </h2>
          <PlusIcon className="-right-[7px] -bottom-[7px] md:-right-[12px] md:-bottom-[12px] absolute z-20 size-3.5 md:size-6 text-white/30" strokeWidth={1} />
        </div>

        {/* Col 4: Top-Right Empty Box */}
        <div className="hidden md:flex relative items-center justify-center border-r border-b border-[#27272a] bg-[#0c0c0e] min-h-[140px]">
          <PlusIcon className="-right-[12px] -bottom-[12px] absolute z-20 size-6 text-white/30" strokeWidth={1} />
        </div>

        {/* =========================================
            ROW 1: LOGOS 1, 2, 3
            ========================================= */}
        {/* Col 0: Empty Box */}
        <div className="hidden md:flex relative items-center justify-center border-r border-b border-[#27272a] bg-[#09090b] hover:bg-[#121216] transition-colors min-h-[155px]">
          <PlusIcon className="-right-[12px] -bottom-[12px] absolute z-20 size-6 text-white/30" strokeWidth={1} />
        </div>

        {/* Col 1: Eflal Duşakabin */}
        <div className="relative flex items-center justify-center p-2.5 py-4 sm:p-5 md:p-12 min-h-[95px] sm:min-h-[110px] md:min-h-[165px] border-r border-b border-[#27272a] bg-[#0c0c0e] hover:bg-[#141418] transition-colors cursor-pointer group">
          <div className="opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200">
            <EflalLogo />
          </div>
          <PlusIcon className="-right-[7px] -bottom-[7px] md:-right-[12px] md:-bottom-[12px] absolute z-20 size-3.5 md:size-6 text-white/40 group-hover:text-white" strokeWidth={1} />
        </div>

        {/* Col 2: Zafer Lokantası */}
        <div className="relative flex items-center justify-center p-2.5 py-4 sm:p-5 md:p-12 min-h-[95px] sm:min-h-[110px] md:min-h-[165px] border-r border-b border-[#27272a] bg-[#09090b] hover:bg-[#141418] transition-colors cursor-pointer group">
          <div className="opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200">
            <ZaferLogo />
          </div>
          <PlusIcon className="-right-[7px] -bottom-[7px] md:-right-[12px] md:-bottom-[12px] absolute z-20 size-3.5 md:size-6 text-white/40 group-hover:text-white" strokeWidth={1} />
        </div>

        {/* Col 3: Doğanlar Ecza Deposu */}
        <div className="relative flex items-center justify-center p-2.5 py-4 sm:p-5 md:p-12 min-h-[95px] sm:min-h-[110px] md:min-h-[165px] border-r border-b border-[#27272a] bg-[#0c0c0e] hover:bg-[#141418] transition-colors cursor-pointer group">
          <div className="opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200">
            <DoganlarLogo />
          </div>
          <PlusIcon className="-right-[7px] -bottom-[7px] md:-right-[12px] md:-bottom-[12px] absolute z-20 size-3.5 md:size-6 text-white/40 group-hover:text-white" strokeWidth={1} />
        </div>

        {/* Col 4: Empty Box */}
        <div className="hidden md:flex relative items-center justify-center border-r border-b border-[#27272a] bg-[#09090b] hover:bg-[#121216] transition-colors min-h-[155px]">
          <PlusIcon className="-right-[12px] -bottom-[12px] absolute z-20 size-6 text-white/30" strokeWidth={1} />
        </div>

        {/* =========================================
            ROW 2: LOGOS 4, 5, 6
            ========================================= */}
        {/* Col 0: Empty Box */}
        <div className="hidden md:flex relative items-center justify-center border-r border-b border-[#27272a] bg-[#0c0c0e] hover:bg-[#121216] transition-colors min-h-[155px]">
          <PlusIcon className="-right-[12px] -bottom-[12px] absolute z-20 size-6 text-white/30" strokeWidth={1} />
        </div>

        {/* Col 1: Limon Çiçeği Yıkar */}
        <div className="relative flex items-center justify-center p-2.5 py-4 sm:p-5 md:p-12 min-h-[95px] sm:min-h-[110px] md:min-h-[165px] border-r border-b border-[#27272a] bg-[#09090b] hover:bg-[#141418] transition-colors cursor-pointer group">
          <div className="opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200">
            <LimonCicegiLogo />
          </div>
          <PlusIcon className="-right-[7px] -bottom-[7px] md:-right-[12px] md:-bottom-[12px] absolute z-20 size-3.5 md:size-6 text-white/40 group-hover:text-white" strokeWidth={1} />
        </div>

        {/* Col 2: MY Danışmanlık */}
        <div className="relative flex items-center justify-center p-2.5 py-4 sm:p-5 md:p-12 min-h-[95px] sm:min-h-[110px] md:min-h-[165px] border-r border-b border-[#27272a] bg-[#0c0c0e] hover:bg-[#141418] transition-colors cursor-pointer group">
          <div className="opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200">
            <MYDanismanlikLogo />
          </div>
          <PlusIcon className="-right-[7px] -bottom-[7px] md:-right-[12px] md:-bottom-[12px] absolute z-20 size-3.5 md:size-6 text-white/40 group-hover:text-white" strokeWidth={1} />
        </div>

        {/* Col 3: Hasağaç Mobilya */}
        <div className="relative flex items-center justify-center p-2.5 py-4 sm:p-5 md:p-12 min-h-[95px] sm:min-h-[110px] md:min-h-[165px] border-r border-b border-[#27272a] bg-[#09090b] hover:bg-[#141418] transition-colors cursor-pointer group">
          <div className="opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200">
            <HasagacLogo />
          </div>
          <PlusIcon className="-right-[7px] -bottom-[7px] md:-right-[12px] md:-bottom-[12px] absolute z-20 size-3.5 md:size-6 text-white/40 group-hover:text-white" strokeWidth={1} />
        </div>

        {/* Col 4: Empty Box */}
        <div className="hidden md:flex relative items-center justify-center border-r border-b border-[#27272a] bg-[#0c0c0e] hover:bg-[#121216] transition-colors min-h-[155px]">
          <PlusIcon className="-right-[12px] -bottom-[12px] absolute z-20 size-6 text-white/30" strokeWidth={1} />
        </div>

        {/* =========================================
            ROW 3: LOGOS 7, 8, 9
            ========================================= */}
        {/* Col 0: Empty Box */}
        <div className="hidden md:flex relative items-center justify-center border-r border-b border-[#27272a] bg-[#09090b] hover:bg-[#121216] transition-colors min-h-[155px]">
          <PlusIcon className="-right-[12px] -bottom-[12px] absolute z-20 size-6 text-white/30" strokeWidth={1} />
        </div>

        {/* Col 1: Servisciler İlan */}
        <div className="relative flex items-center justify-center p-2.5 py-4 sm:p-5 md:p-12 min-h-[95px] sm:min-h-[110px] md:min-h-[165px] border-r border-b border-[#27272a] bg-[#0c0c0e] hover:bg-[#141418] transition-colors cursor-pointer group">
          <div className="opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200">
            <ServiscilerLogo />
          </div>
          <PlusIcon className="-right-[7px] -bottom-[7px] md:-right-[12px] md:-bottom-[12px] absolute z-20 size-3.5 md:size-6 text-white/40 group-hover:text-white" strokeWidth={1} />
        </div>

        {/* Col 2: B&Y Hukuk Bürosu */}
        <div className="relative flex items-center justify-center p-2.5 py-4 sm:p-5 md:p-12 min-h-[95px] sm:min-h-[110px] md:min-h-[165px] border-r border-b border-[#27272a] bg-[#09090b] hover:bg-[#141418] transition-colors cursor-pointer group">
          <div className="opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200">
            <BYHukukLogo />
          </div>
          <PlusIcon className="-right-[7px] -bottom-[7px] md:-right-[12px] md:-bottom-[12px] absolute z-20 size-3.5 md:size-6 text-white/40 group-hover:text-white" strokeWidth={1} />
        </div>

        {/* Col 3: Trakya Matbaası */}
        <div className="relative flex items-center justify-center p-2.5 py-4 sm:p-5 md:p-12 min-h-[95px] sm:min-h-[110px] md:min-h-[165px] border-r border-b border-[#27272a] bg-[#0c0c0e] hover:bg-[#141418] transition-colors cursor-pointer group">
          <div className="opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200">
            <TrakyaMatbaasiLogo />
          </div>
          <PlusIcon className="-right-[7px] -bottom-[7px] md:-right-[12px] md:-bottom-[12px] absolute z-20 size-3.5 md:size-6 text-white/40 group-hover:text-white" strokeWidth={1} />
        </div>

        {/* Col 4: Empty Box */}
        <div className="hidden md:flex relative items-center justify-center border-r border-b border-[#27272a] bg-[#09090b] hover:bg-[#121216] transition-colors min-h-[155px]">
          <PlusIcon className="-right-[12px] -bottom-[12px] absolute z-20 size-6 text-white/30" strokeWidth={1} />
        </div>

        {/* =========================================
            ROW 4: FULL ROW OF 5 EMPTY BOXES (Bottom Matrix - Hidden on mobile)
            ========================================= */}
        {/* Col 0 */}
        <div className="hidden md:flex relative items-center justify-center border-r border-b border-[#27272a] bg-[#0c0c0e] hover:bg-[#121216] transition-colors min-h-[110px]">
          <PlusIcon className="-right-[12px] -bottom-[12px] absolute z-20 size-6 text-white/30" strokeWidth={1} />
        </div>
        {/* Col 1 */}
        <div className="hidden md:flex relative items-center justify-center border-r border-b border-[#27272a] bg-[#09090b] hover:bg-[#121216] transition-colors min-h-[110px]">
          <PlusIcon className="-right-[12px] -bottom-[12px] absolute z-20 size-6 text-white/30" strokeWidth={1} />
        </div>
        {/* Col 2 */}
        <div className="hidden md:flex relative items-center justify-center border-r border-b border-[#27272a] bg-[#0c0c0e] hover:bg-[#121216] transition-colors min-h-[110px]">
          <PlusIcon className="-right-[12px] -bottom-[12px] absolute z-20 size-6 text-white/30" strokeWidth={1} />
        </div>
        {/* Col 3 */}
        <div className="hidden md:flex relative items-center justify-center border-r border-b border-[#27272a] bg-[#09090b] hover:bg-[#121216] transition-colors min-h-[110px]">
          <PlusIcon className="-right-[12px] -bottom-[12px] absolute z-20 size-6 text-white/30" strokeWidth={1} />
        </div>
        {/* Col 4 */}
        <div className="hidden md:flex relative items-center justify-center border-r border-b border-[#27272a] bg-[#0c0c0e] hover:bg-[#121216] transition-colors min-h-[110px]">
          <PlusIcon className="-right-[12px] -bottom-[12px] absolute z-20 size-6 text-white/30" strokeWidth={1} />
        </div>
      </div>
    </div>
  );
}
