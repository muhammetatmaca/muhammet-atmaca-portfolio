import React, { useEffect, useState } from 'react';
import { Link } from 'wouter';
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from 'lucide-react';
import WavingPortfolioLanding from '../components/WavingPortfolioLanding';
import { LogoCloud } from '../components/LogoCloud';
import { ExperienceEducation } from '../components/ExperienceEducation';
import { SEO } from '../components/SEO';
import { SitelinksDirectory } from '../components/SitelinksDirectory';

export function InteractiveLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const scrollToPartners = () => {
    document.getElementById('is-ortaklari')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToExperience = () => {
    document.getElementById('deneyim-ve-egitim')?.scrollIntoView({ behavior: 'smooth' });
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="w-full min-h-screen bg-[#f6f4f0] text-[#141414] overflow-x-hidden selection:bg-[#194BDE] selection:text-white">
      <SEO
        title="Muhammet Atmaca — İnteraktif Portfolyo | İş Ortakları & Deneyim"
        description="Yazılım Mühendisi Muhammet Atmaca'nın interaktif 3D vitrini, çalıştığı kurumsal iş ortakları ve T.C. Cumhurbaşkanlığı, Savunma Sanayii Başkanlığı, Crudfab Yazılım, Samsun Üniversitesi ve Bayburt Fen Lisesi deneyim geçmişi."
        canonicalUrl="https://muhammetatmaca.com.tr/landing"
        keywords={[
          'Muhammet Atmaca İnteraktif Portfolyo',
          'Muhammet Atmaca İş Ortakları',
          'T.C. Cumhurbaşkanlığı Yazılım',
          'Savunma Sanayii Başkanlığı',
          'Crudfab Yazılım',
          'Esternio',
          'Samsun Üniversitesi',
          'Bayburt Fen Lisesi',
          'Yazılım Mühendisi Portfolyo',
        ]}
      />

      {/* Floating Navigation Card matching portfolio standard */}
      <nav className="nav-card" aria-label="Main navigation" style={{ zIndex: 50 }}>
        <Link href="/" className="wordmark" onClick={closeMenu}>
          <span className="wordmark-mark">M</span>
          <span>
            Muhammet Atmaca <span className="wordmark-role">/ İnteraktif Vitrin</span>
          </span>
        </Link>
        <div className="nav-links">
          <Link href="/" className="nav-link flex items-center gap-1">
            <ArrowLeft size={14} /> Ana Sayfa
          </Link>
          <button
            type="button"
            onClick={scrollToPartners}
            className="nav-link"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            İş Ortaklarımız
          </button>
          <button
            type="button"
            onClick={scrollToExperience}
            className="nav-link"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            Deneyim & Eğitim
          </button>
          <Link href="/apps" className="nav-link">
            Mobil Uygulamalar (50+)
          </Link>
          <Link href="/web" className="nav-link">
            Web Sistemleri
          </Link>
          <a
            href="/muhammetatmacacv.pdf"
            download="Muhammet_Atmaca_CV.pdf"
            className="nav-link flex items-center gap-1"
          >
            <FileText size={13} /> CV (PDF)
          </a>
          <a href="/#contact" className="nav-cta">
            İletişime geç <ArrowUpRight size={14} strokeWidth={1.8} />
          </a>
        </div>
        <button
          type="button"
          className="mobile-menu-button"
          aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} strokeWidth={1.8} /> : <Menu size={21} strokeWidth={1.8} />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="mobile-nav" style={{ zIndex: 49 }}>
          <Link href="/" className="nav-link" onClick={closeMenu}>
            <ArrowLeft size={13} style={{ display: 'inline', marginRight: '6px' }} /> Ana Sayfa
          </Link>
          <button
            type="button"
            className="nav-link"
            style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', padding: '13px 2px', borderBottom: '1px solid var(--line)' }}
            onClick={() => {
              closeMenu();
              scrollToPartners();
            }}
          >
            İş Ortaklarımız
          </button>
          <button
            type="button"
            className="nav-link"
            style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', padding: '13px 2px', borderBottom: '1px solid var(--line)' }}
            onClick={() => {
              closeMenu();
              scrollToExperience();
            }}
          >
            Deneyim & Eğitim
          </button>
          <Link href="/apps" className="nav-link" onClick={closeMenu}>
            Mobil Uygulamalar (50+)
          </Link>
          <Link href="/web" className="nav-link" onClick={closeMenu}>
            Web Sistemleri
          </Link>
          <a
            href="/muhammetatmacacv.pdf"
            download="Muhammet_Atmaca_CV.pdf"
            className="nav-link"
            onClick={closeMenu}
          >
            Özgeçmiş (PDF) <FileText size={13} style={{ display: 'inline', marginLeft: '4px' }} />
          </a>
          <a href="/#contact" className="nav-link" onClick={closeMenu}>
            İletişim <ArrowUpRight size={13} />
          </a>
        </div>
      )}

      {/* 1. Hero Landing Section */}
      <div className="relative w-full h-[100svh]">
        <WavingPortfolioLanding
          name="Muhammet Atmaca"
          lettersLeft={['YAZI', 'MÜHEN']}
          giantLetter=""
          lettersRight={['LIM', 'DİSİ']}
          title="Yazılım Mühendisi"
          accent="#194BDE"
        />

        {/* Scroll Indicator Prompt */}
        <button
          onClick={scrollToPartners}
          className="absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 text-[#141414]/75 hover:text-[#194BDE] transition-all cursor-pointer group"
          aria-label="İş ortaklarımız için aşağı kaydırın"
        >
          <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] uppercase">
            İŞ ORTAKLARIMIZ İÇİN AŞAĞI KAYDIRIN
          </span>
          <svg
            className="w-4 h-4 md:w-5 md:h-5 animate-bounce text-[#194BDE]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>

      {/* 2. Modern Dark Tech Logo Grid Section (100% Seamless Edge-to-Edge Grid) */}
      <section id="is-ortaklari" className="w-full bg-[#08080a] relative z-10 overflow-hidden border-t border-[#27272a]">
        <LogoCloud />
      </section>

      {/* 3. Deneyim & Eğitim Grid Section */}
      <section id="deneyim-ve-egitim" className="w-full bg-[#08080a] relative z-10 overflow-hidden">
        <ExperienceEducation />
      </section>

      {/* 4. Google Sitelinks & Portfolio Quick Links Directory */}
      <SitelinksDirectory />

      {/* 5. Minimal Clean Footer */}
      <footer className="footer" style={{ borderTop: '1px solid #27272a', background: '#08080a', color: '#94a3b8' }}>
        <div className="container-wide footer-inner">
          <span className="footer-note" style={{ color: '#94a3b8' }}>
            © {new Date().getFullYear()} Muhammet Atmaca — Yazılım Mühendisi
          </span>
          <div className="footer-links">
            <Link href="/" className="footer-link" style={{ color: '#cbd5e1' }}>Ana Sayfa</Link>
            <Link href="/apps" className="footer-link" style={{ color: '#cbd5e1' }}>Mobil Uygulamalar (50+)</Link>
            <Link href="/web" className="footer-link" style={{ color: '#cbd5e1' }}>Web Sistemleri</Link>
            <a
              href="https://github.com/muhammetatmaca"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
              style={{ color: '#cbd5e1' }}
            >
              <Github size={13} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muhammet-atmaca-857481252/"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
              style={{ color: '#cbd5e1' }}
            >
              <Linkedin size={13} /> LinkedIn
            </a>
            <button
              type="button"
              className="footer-link"
              style={{ color: '#cbd5e1', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Yukarı çık <ArrowDown size={13} className="rotate-180" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default InteractiveLandingPage;
