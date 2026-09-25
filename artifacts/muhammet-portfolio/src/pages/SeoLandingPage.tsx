import { useMemo, useState } from 'react';
import { Link } from 'wouter';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Download,
  ExternalLink,
  FileCode2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Zap,
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { SEO_LANDING_PAGES, SeoLandingPageData } from '@/data/seoLandingPages';
import { MOBILE_APPS, MobileApp } from '@/data/mobileApps';

interface SeoLandingPageProps {
  pageData: SeoLandingPageData;
}

export function SeoLandingPage({ pageData }: SeoLandingPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Match real applications from MOBILE_APPS
  const featuredApps: MobileApp[] = useMemo(() => {
    return pageData.featuredAppIds
      .map((id) => MOBILE_APPS.find((app) => app.id === id))
      .filter((app): app is MobileApp => Boolean(app));
  }, [pageData.featuredAppIds]);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const canonicalUrl = `https://muhammetatmaca.com.tr/${pageData.slug}`;

  // Structured Data Schema for Local SEO / Service
  const pageSchema = useMemo(() => {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': pageData.category === 'local' ? 'ProfessionalService' : 'Service',
          '@id': `${canonicalUrl}#service`,
          name: pageData.title,
          description: pageData.metaDescription,
          url: canonicalUrl,
          provider: {
            '@type': 'Person',
            name: 'Muhammet Atmaca',
            jobTitle: 'Senior Mobile Software Engineer',
            url: 'https://muhammetatmaca.com.tr/',
          },
          areaServed: pageData.cityOrRegion ? { '@type': 'City', name: pageData.cityOrRegion } : { '@type': 'Country', name: 'Türkiye' },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: pageData.heroHeading,
            itemListElement: pageData.whyChooseUs.map((item, idx) => ({
              '@type': 'Offer',
              position: idx + 1,
              itemOffered: {
                '@type': 'Service',
                name: item.title,
                description: item.description,
              },
            })),
          },
        },
        {
          '@type': 'FAQPage',
          '@id': `${canonicalUrl}#faq`,
          mainEntity: pageData.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        },
      ],
    };
  }, [canonicalUrl, pageData]);

  // List of other SEO landing pages for internal linking
  const otherPages = useMemo(() => {
    return Object.values(SEO_LANDING_PAGES).filter((p) => p.slug !== pageData.slug);
  }, [pageData.slug]);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1e293b] font-sans antialiased selection:bg-amber-200">
      <SEO
        title={pageData.title}
        description={pageData.metaDescription}
        keywords={pageData.keywords}
        canonicalUrl={canonicalUrl}
        structuredData={pageSchema}
      />

      {/* Top Bar Navigation */}
      <header className="sticky top-0 z-40 bg-[#faf8f5]/90 backdrop-blur-md border-b border-amber-900/10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group text-inherit no-underline">
            <div className="w-8 h-8 rounded-lg bg-stone-900 text-white flex items-center justify-center font-bold text-sm tracking-wider shadow-sm group-hover:bg-amber-600 transition-colors">
              MA
            </div>
            <div>
              <span className="font-semibold text-sm tracking-tight block text-stone-900">Muhammet Atmaca</span>
              <span className="text-[11px] text-stone-500 block -mt-0.5">Kıdemli Yazılım Mühendisi</span>
            </div>
          </Link>

          <nav className="flex items-center gap-3 md:gap-6 text-xs md:text-sm font-medium">
            <Link href="/" className="text-stone-600 hover:text-stone-900 transition-colors hidden sm:inline">
              Ana Sayfa
            </Link>
            <Link href="/apps" className="text-stone-600 hover:text-stone-900 transition-colors">
              50+ Mobil Uygulama
            </Link>
            <Link href="/academic" className="text-stone-600 hover:text-stone-900 transition-colors hidden md:inline">
              Akademik & AR-GE
            </Link>
            <a
              href="#contact"
              className="bg-stone-900 hover:bg-amber-600 text-white px-3.5 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-semibold transition-all shadow-sm"
            >
              Fiyat Teklifi Al
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100/80 text-amber-900 border border-amber-300/60 mb-6">
            <Sparkles size={13} className="text-amber-700" />
            {pageData.eyebrow}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.15] mb-6">
            {pageData.heroHeading}{' '}
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">
              {pageData.heroHighlight}
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-stone-700 leading-relaxed max-w-3xl mb-8">
            {pageData.heroSubheading}
          </p>

          <div className="flex flex-wrap items-center gap-3.5 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-amber-600 text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <Zap size={16} className="text-amber-400" />
              Ücretsiz Ön Analiz & Sabit Fiyat Teklifi
            </a>
            <Link
              href="/apps"
              className="inline-flex items-center gap-2 bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 px-5 py-3.5 rounded-xl font-semibold text-sm shadow-sm transition-all"
            >
              <Smartphone size={16} className="text-stone-600" />
              Yayınlanmış 50+ Uygulamayı Gör
            </Link>
          </div>

          {/* Trust Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-stone-200/80 text-left">
            <div className="bg-white/70 p-3 rounded-lg border border-stone-200/60 shadow-2xs">
              <div className="text-xl md:text-2xl font-black text-stone-900">50+</div>
              <div className="text-xs text-stone-600 font-medium">Canlı Mobil Uygulama</div>
            </div>
            <div className="bg-white/70 p-3 rounded-lg border border-stone-200/60 shadow-2xs">
              <div className="text-xl md:text-2xl font-black text-stone-900">7+ Yıl</div>
              <div className="text-xs text-stone-600 font-medium">Mühendislik Deneyimi</div>
            </div>
            <div className="bg-white/70 p-3 rounded-lg border border-stone-200/60 shadow-2xs">
              <div className="text-xl md:text-2xl font-black text-stone-900">%100</div>
              <div className="text-xs text-stone-600 font-medium">App & Play Store Onayı</div>
            </div>
            <div className="bg-white/70 p-3 rounded-lg border border-stone-200/60 shadow-2xs">
              <div className="text-xl md:text-2xl font-black text-stone-900">Kamu & SSB</div>
              <div className="text-xs text-stone-600 font-medium">Savunma & Bulut Mimarisi</div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Description */}
      <section className="py-12 md:py-16 bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="p-6 md:p-8 rounded-2xl bg-[#fdfcf9] border border-stone-200 shadow-xs">
            <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4">
              Neden Doğrudan Kıdemli Yazılım Mühendisi ile Çalışmalısınız?
            </h2>
            <p className="text-stone-700 leading-relaxed text-sm md:text-base mb-6">
              {pageData.introParagraph}
            </p>
            <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
              Kapsam ve Hedef Kitle:
            </div>
            <div className="text-sm font-medium text-stone-800 bg-amber-50/70 p-3.5 rounded-lg border border-amber-200/60 flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-amber-700 shrink-0 mt-0.5" />
              <span>{pageData.targetAudience}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions Grid */}
      <section className="py-14 md:py-20 bg-[#faf8f5] border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 tracking-tight mb-3">
              Fark Yaratan Mühendislik Standartları
            </h2>
            <p className="text-sm md:text-base text-stone-600">
              Ajans komisyonları veya acemi kodlama riskleri olmadan, baştan sona sağlam mimari güvencesi.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {pageData.whyChooseUs.map((prop, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold text-base mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">{prop.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Applications Section */}
      {featuredApps.length > 0 && (
        <section className="py-14 md:py-20 bg-white border-b border-stone-200">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-1">
                  Gerçek Referanslar
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 tracking-tight">
                  Yayınlanmış Seçkin Mobil Uygulamalar
                </h2>
              </div>
              <Link
                href="/apps"
                className="text-sm font-semibold text-stone-900 hover:text-amber-700 flex items-center gap-1.5 transition-colors"
              >
                Tüm 50+ Uygulamayı İncele <ArrowRight size={15} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {featuredApps.map((app) => (
                <div
                  key={app.id}
                  className="p-5 rounded-2xl bg-[#faf8f5] border border-stone-200 hover:border-amber-300 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3.5 mb-3.5">
                      {app.iconUrl ? (
                        <img
                          src={app.iconUrl}
                          alt={app.name}
                          className="w-12 h-12 rounded-xl object-cover shadow-xs border border-stone-200"
                        />
                      ) : (
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${app.iconGradient} text-white flex items-center justify-center font-bold text-lg shadow-xs`}
                        >
                          {app.iconLetter}
                        </div>
                      )}
                      <div>
                        <h3 className="font-bold text-stone-900 text-base leading-snug">{app.name}</h3>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-stone-200/70 text-stone-700">
                          {app.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm text-stone-600 line-clamp-2 mb-3">{app.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {app.techStack.slice(0, 3).map((t, idx) => (
                        <span key={idx} className="text-[11px] bg-white border border-stone-200 px-2 py-0.5 rounded text-stone-600">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-stone-200/70 flex items-center justify-between text-xs">
                    <span className="font-medium text-stone-500">{app.platforms.join(' & ')}</span>
                    {app.playStoreUrl && (
                      <a
                        href={app.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-800 font-semibold flex items-center gap-1 hover:underline"
                      >
                        Google Play <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4-Step Process */}
      <section className="py-14 md:py-20 bg-[#faf8f5] border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-1">
              Garantili Metodoloji
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 tracking-tight">
              Sıfırdan Canlıya 4 Aşamalı Yol Haritası
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {pageData.processSteps.map((s, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-stone-200 shadow-2xs">
                <span className="text-2xl font-black text-amber-600/80 block mb-2">{s.step}</span>
                <h3 className="font-bold text-stone-900 text-sm md:text-base mb-1.5">{s.title}</h3>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-14 md:py-20 bg-white border-b border-stone-200">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 tracking-tight mb-2">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-sm text-stone-600">Süreç, maliyetler ve teslimat hakkında merak edilenler.</p>
          </div>

          <div className="space-y-3">
            {pageData.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-stone-200 rounded-xl overflow-hidden bg-[#faf8f5] transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 md:p-5 flex items-center justify-between gap-4 font-bold text-stone-900 text-sm md:text-base hover:text-amber-800 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp size={18} className="shrink-0 text-stone-400" /> : <ChevronDown size={18} className="shrink-0 text-stone-400" />}
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 md:px-5 md:pb-5 text-xs md:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact & Lead Conversion CTA */}
      <section id="contact" className="py-16 md:py-24 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-6">
            <ShieldCheck size={14} /> Doğrudan Mühendis İletişimi
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Projenizi Birlikte Hayata Geçirelim
          </h2>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8">
            İster Bayburt, Samsun veya Doğu Karadeniz'de yerinde; ister İstanbul, Ankara, İzmir veya global ölçekte uzaktan.
            Fikrinizi dinleyelim, net kapsam ve sabit fiyat teklifinizi hemen iletelim.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href="mailto:muhammetatmaca79@gmail.com?subject=Proje%20Teklifi%20ve%20On%20Gorusme"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 text-sm"
            >
              <Mail size={16} /> E-posta ile Teklif İste (muhammetatmaca79@gmail.com)
            </a>
            <a
              href="https://wa.me/905448375685?text=Merhaba%20Muhammet%20Bey,%20web%20sitenizden%20yaz%C4%B1l%C4%B1m%20hizmeti%20hakk%C4%B1nda%20bilgi%20ve%20fiyat%20teklifi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 text-sm"
            >
              <MessageSquare size={16} /> WhatsApp ile Hızlı İletişim
            </a>
          </div>

          <div className="text-xs text-stone-400 space-y-1">
            <p>Lokasyonlar: Bayburt & Samsun, Türkiye — Hizmet Kapsamı: Türkiye Geneli 81 İl ve Uluslararası</p>
            <p>Sözleşmeli, faturalı, gizlilik korumalı (NDA) ve mağaza onay garantili teslimat.</p>
          </div>
        </div>
      </section>

      {/* Internal Linking SEO Silo Directory */}
      <footer className="py-12 bg-stone-950 border-t border-stone-800 text-stone-400 text-xs">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-6">
            <h3 className="text-stone-300 font-bold text-xs uppercase tracking-wider mb-3">
              Türkiye Geneli Şehirler & Hizmet Bölgeleri (Hızlı Erişim):
            </h3>
            <div className="flex flex-wrap gap-2">
              {otherPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  className="bg-stone-900 hover:bg-amber-600 hover:text-white border border-stone-800 px-2.5 py-1 rounded text-stone-400 transition-colors"
                >
                  {page.title.split('—')[0].trim()}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-500">
            <p>© 2026 Muhammet Atmaca. Tüm hakları saklıdır. Mobil Uygulama & Web Yazılım Mühendisliği.</p>
            <Link href="/" className="hover:text-stone-300 transition-colors">
              Portfolyo Ana Sayfasına Dön →
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
