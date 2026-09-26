import React, { useState } from 'react';
import { Link } from 'wouter';
import { motion, type Variants } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  FileText,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';

export interface FooterSection4Props {
  onOpenCv?: () => void;
  className?: string;
}

export function FooterSection4({ onOpenCv, className = '' }: FooterSection4Props) {
  const [emailInput, setEmailInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    const mailto = `mailto:muhammetatmaca79@gmail.com?subject=Proje Teklifi ve Tanışma Talebi&body=Merhaba Muhammet Bey,%0D%0A%0D%0Aİletişim / E-posta adresim: ${encodeURIComponent(
      emailInput.trim(),
    )}%0D%0A%0D%0AProjemiz hakkında görüşmek istiyoruz.`;
    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: 'easeOut',
      },
    },
  };

  const navColumns = [
    {
      title: 'Sayfalar & Projeler',
      links: [
        { label: 'Genel Bakış (Ana Sayfa)', href: '/', isRoute: true },
        { label: 'Web Sistemleri Dizini', href: '/web', isRoute: true },
        { label: '50+ Mobil Uygulama', href: '/apps', isRoute: true },
        { label: 'Akademik & AR-GE', href: '/academic', isRoute: true },
        { label: 'Özgeçmiş (PDF İndir)', href: '/muhammetatmacacv.pdf', isDownload: true },
      ],
    },
    {
      title: 'Uzmanlık & Teknolojiler',
      links: [
        { label: 'React Native & Expo', href: '/apps', isRoute: true },
        { label: 'Next.js, React & SSR', href: '/web', isRoute: true },
        { label: 'Swift, Kotlin & iOS/Android', href: '/apps', isRoute: true },
        { label: 'ASP.NET Core & Node.js', href: '/web', isRoute: true },
        { label: 'PostgreSQL, Redis & Docker', href: '/web', isRoute: true },
      ],
    },
    {
      title: 'Hizmetler & Kapsam',
      links: [
        { label: 'Mobil Uygulama Geliştirme', href: '/services', isRoute: true },
        { label: 'Kurumsal Web Platformları', href: '/services', isRoute: true },
        { label: 'App Store & Play Onay Süreci', href: '/services', isRoute: true },
        { label: 'Samsun & Bayburt Yerel Hizmet', href: '/contact', isRoute: true },
        { label: '81 İl Uzaktan (Remote) Destek', href: '/services', isRoute: true },
      ],
    },
    {
      title: 'Doğrudan İletişim',
      links: [
        { label: 'muhammetatmaca79@gmail.com', href: 'mailto:muhammetatmaca79@gmail.com' },
        { label: '+90 (544) 525 89 79', href: 'https://wa.me/905445258979' },
        { label: 'VirelonSoft (Google İşletme)', href: 'https://share.google/LeVvOPDHGCxM1biap' },
        { label: 'GitHub / muhammetatmaca', href: 'https://github.com/muhammetatmaca' },
        { label: 'LinkedIn / Muhammet Atmaca', href: 'https://www.linkedin.com/in/muhammet-atmaca-857481252/' },
      ],
    },
  ];

  return (
    <footer className={`pt-4 pb-12 px-4 sm:px-6 lg:px-8 bg-[var(--paper)] ${className}`} id="footer-section">
      <motion.div
        className="container-wide mx-auto max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={containerVariants}
      >
        <div className="flex flex-col lg:flex-row gap-5 items-stretch">
          {/* Coral Orange Identity Card (Left Card) */}
          <motion.div
            className="relative w-full lg:w-1/3 min-h-[380px] lg:min-h-[560px] overflow-hidden rounded-2xl bg-[var(--coral)] text-white flex flex-col justify-between p-8 md:p-10 shadow-lg"
            variants={itemVariants}
          >
            {/* Top Logo & Header */}
            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center font-mono font-bold text-xl text-white shadow-sm backdrop-blur-md">
                  M
                </div>
                <div>
                  <span className="text-xl font-bold tracking-tight block leading-tight font-display text-white">
                    Muhammet Atmaca
                  </span>
                  <span className="text-xs text-white/75 font-mono tracking-wide">
                    Senior Software Engineer
                  </span>
                </div>
              </div>
            </div>

            {/* Center Editorial Statement */}
            <div className="relative z-10 py-6 space-y-3">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight leading-snug">
                Modern Mobil Uygulama & Web Sistemleri
              </h3>
              <p className="text-sm text-white/85 font-normal leading-relaxed">
                Samsun ve Bayburt merkezli, Türkiye geneli (81 İl) ve yurt dışına %100 uzaktan anahtar teslim yazılım geliştirme.
              </p>
            </div>

            {/* Bottom Socials & Copyright */}
            <div className="relative z-10 space-y-5 pt-4 border-t border-white/15">
              <div className="flex items-center flex-wrap gap-2.5">
                <a
                  href="https://github.com/muhammetatmaca"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/12 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-105"
                  title="GitHub Profil"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammet-atmaca-857481252/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/12 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-105"
                  title="LinkedIn Profil"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="mailto:muhammetatmaca79@gmail.com"
                  className="w-9 h-9 rounded-lg bg-white/12 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-105"
                  title="E-posta Gönder"
                  aria-label="E-posta"
                >
                  <Mail size={16} />
                </a>
                <a
                  href="https://wa.me/905445258979"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/12 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-105"
                  title="WhatsApp'tan Yaz"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={16} />
                </a>
                <a
                  href="https://share.google/LeVvOPDHGCxM1biap"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/12 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-105"
                  title="VirelonSoft Google İşletme Haritası"
                  aria-label="Google İşletme"
                >
                  <MapPin size={16} />
                </a>
                {onOpenCv && (
                  <button
                    type="button"
                    onClick={onOpenCv}
                    className="h-9 px-3 rounded-lg bg-white/12 hover:bg-white/25 border border-white/20 flex items-center gap-1.5 text-xs font-mono text-white transition-all hover:scale-105 cursor-pointer"
                    title="Özgeçmişi İncele"
                  >
                    <FileText size={13} />
                    <span>CV</span>
                  </button>
                )}
              </div>
              <p className="text-xs text-white/65 font-mono">
                &copy; {new Date().getFullYear()} Muhammet Atmaca. Tüm hakları saklıdır.
              </p>
            </div>
          </motion.div>

          {/* Paper Content Card (Right Card) */}
          <motion.div
            className="w-full lg:w-2/3 rounded-2xl bg-white border border-[var(--line)] p-8 md:p-12 flex flex-col justify-between min-h-[500px] lg:min-h-[560px] shadow-sm"
            variants={itemVariants}
          >
            {/* Top Categories Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-8">
              {navColumns.map((col, idx) => (
                <div key={idx} className="flex flex-col space-y-4">
                  <h4 className="text-sm font-bold text-[var(--ink)] font-display uppercase tracking-wider text-xs font-mono text-[var(--coral)]">
                    {col.title}
                  </h4>
                  <ul className="flex flex-col space-y-2.5 text-xs md:text-[13px] text-[#182033]/75 font-normal">
                    {col.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        {link.isRoute ? (
                          <Link
                            href={link.href}
                            className="hover:text-[var(--coral)] transition-colors inline-flex items-center gap-1"
                          >
                            <span>{link.label}</span>
                          </Link>
                        ) : link.isDownload ? (
                          <a
                            href={link.href}
                            download="Muhammet_Atmaca_CV.pdf"
                            className="hover:text-[var(--coral)] transition-colors inline-flex items-center gap-1"
                          >
                            <span>{link.label}</span>
                            <Download size={11} className="opacity-70" />
                          </a>
                        ) : (
                          <a
                            href={link.href}
                            target={link.href.startsWith('http') ? '_blank' : undefined}
                            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                            className="hover:text-[var(--coral)] transition-colors inline-flex items-center gap-1"
                          >
                            <span className="truncate max-w-[170px]">{link.label}</span>
                            {link.href.startsWith('http') && <ArrowUpRight size={11} className="opacity-60 shrink-0" />}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom Quick Contact & Newsletter */}
            <div className="pt-10 mt-10 border-t border-[var(--line)] flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2 max-w-md">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--coral)] font-semibold">
                    Hızlı Değerlendirme & Bütçe
                  </span>
                </div>
                <h4 className="text-base md:text-lg font-bold text-[var(--ink)] font-display tracking-tight">
                  Aklınızdaki projeyi hemen başlatalım
                </h4>
                <p className="text-xs text-[#182033]/70 leading-relaxed">
                  E-posta adresinizi veya proje özetinizi bırakın, teknik analiz ve bütçe planlaması için aynı gün doğrudan iletişime geçeyim.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 pt-2">
                  <input
                    type="text"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="E-posta veya telefon numaranız..."
                    className="flex-1 rounded-lg px-3.5 py-2.5 text-xs md:text-sm bg-[#faf8f2] text-[var(--ink)] border border-[var(--line)] focus:outline-none focus:border-[var(--coral)] transition-colors"
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-[var(--coral)] text-white px-5 py-2.5 text-xs md:text-sm font-medium hover:bg-[#ff6444] transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer shrink-0"
                  >
                    <span>{submitted ? 'Açılıyor...' : 'Teklif Al'}</span>
                    <Send size={13} />
                  </button>
                </form>
              </div>

              {/* Scroll back to top */}
              <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 pt-2 md:pt-0">
                <a
                  href="#top"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-xs font-mono text-[var(--ink)]/60 hover:text-[var(--coral)] transition-colors py-2 px-3 rounded-lg border border-[var(--line)] hover:border-[var(--coral)]/40"
                  title="Sayfanın Başına Dön"
                >
                  <span>Yukarı çık</span>
                  <ArrowDown size={13} className="rotate-180" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}

export default FooterSection4;
