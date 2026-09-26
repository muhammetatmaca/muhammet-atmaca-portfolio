import { useState, useMemo, useEffect } from 'react';
import { Link } from 'wouter';
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  MoveUpRight,
  Search,
  SlidersHorizontal,
  Star,
  X,
} from 'lucide-react';
import {
  MOBILE_APPS,
  APP_CATEGORIES,
  type AppCategory,
  type MobileApp,
  type Platform,
} from '../data/mobileApps';
import FlowerType from '../components/originkit/ui/botanical-text-custom-style';
import { SEO } from '../components/SEO';
import { SitelinksDirectory } from '../components/SitelinksDirectory';
import { GlassCodeBlock } from '../components/GlassCodeBlock';
import { FooterSection4 } from '../components/FooterSection4';

const APP_CATEGORY_LABELS: Record<string, string> = {
  All: 'Tümü',
  Fintech: 'Finans & Ödeme',
  'E-Commerce': 'E-Ticaret',
  Social: 'Sosyal & Oyun',
  'Health & Fitness': 'Sağlık & Yaşam',
  'AI & Utilities': 'Yapay Zeka & Araçlar',
  'Food & Delivery': 'Yeme-İçme & Sipariş',
};

export function MobileAppsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<AppCategory>('All');
  const [selectedPlatform, setSelectedPlatform] = useState<'All' | Platform>('All');
  const [activeModalApp, setActiveModalApp] = useState<MobileApp | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const filteredApps = useMemo(() => {
    return MOBILE_APPS.filter((app) => {
      if (selectedCategory !== 'All' && app.category !== selectedCategory) {
        return false;
      }
      if (selectedPlatform !== 'All' && !app.platforms.includes(selectedPlatform)) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = app.name.toLowerCase().includes(query);
        const matchesTagline = app.tagline.toLowerCase().includes(query);
        const matchesDesc = app.description.toLowerCase().includes(query);
        const matchesTech = app.techStack.some((t) => t.toLowerCase().includes(query));
        const matchesCategory = app.category.toLowerCase().includes(query);
        return matchesName || matchesTagline || matchesDesc || matchesTech || matchesCategory;
      }
      return true;
    }).sort((a, b) => {
  const priority = ['teleflow-prompter', 'geode-cutter-3d', 'virelon-wifi', 'aura-weather-widget', 'pairplay', 'toplualarm', 'tick-shopping', 'tempoeat', 'truelevel', 'sonorbird', 'sketchdr-ar-drawing', 'ringekko-alarm', 'quran-mushaf', 'qr-base', 'privaradar', 'petpin-qr-tag', 'tofitef-pet-game', 'belgecep-pdf-scanner', 'waypoint-offline-map', 'nutricompass', 'cuma-hutbeleri', 'luminagrade', 'kira-mevzuat', 'ar-precision-ruler', 'kostebek-party', 'icd10-rehberi', 'gurultumetre', 'virelon-game', 'masal-perisi', 'chefengine'];
      const aPriority = priority.indexOf(a.id);
      const bPriority = priority.indexOf(b.id);
      if (aPriority !== -1 || bPriority !== -1) {
        return (aPriority === -1 ? priority.length : aPriority) - (bPriority === -1 ? priority.length : bPriority);
      }
      return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
    });
  }, [searchQuery, selectedCategory, selectedPlatform]);

  // Color cycler matching the site design tokens
  const getAppAccent = (index: number) => {
    const accents = [
      { bg: 'var(--cobalt)', text: 'var(--paper)', cardBg: '#e7e5dd' },
      { bg: 'var(--coral)', text: 'var(--ink)', cardBg: '#f9f7f0' },
      { bg: 'var(--lime)', text: 'var(--ink)', cardBg: '#d5e1fa' },
      { bg: 'var(--ink)', text: 'var(--paper)', cardBg: '#ece9df' },
    ];
    return accents[index % accents.length];
  };

  return (
    <main className="portfolio-shell" id="top">
      <SEO
        title="50+ Yayındaki Mobil Uygulama (React Native & Flutter) | Muhammet Atmaca"
        description="React Native, Flutter, Swift ve Kotlin ile geliştirilmiş 50'den fazla üretim mobil uygulaması. Finans, E-ticaret, Sosyal, Sağlık ve Yapay Zeka uygulamaları dizini."
        canonicalUrl="https://muhammetatmaca.com.tr/apps"
        keywords={[
          'Mobil Uygulamalar',
          'React Native Portfolyo',
          'Flutter Uygulamaları',
          'iOS App Developer Samsun',
          'Android Geliştirici',
          '50+ Mobil Uygulama',
          'Muhammet Atmaca Mobil',
        ]}
      />
      {/* Top editorial navigation */}
      <nav className="nav-card" aria-label="Mobile apps navigation">
        <Link href="/" className="wordmark" data-testid="link-back-home">
          <span className="wordmark-mark">
            <ArrowLeft size={13} strokeWidth={2.2} />
          </span>
          <span>Muhammet Atmaca</span>
        </Link>
        <div className="nav-links">
          <Link href="/" className="nav-link">Genel bakış</Link>
          <Link href="/web" className="nav-link">Web sistemleri</Link>
          <span className="nav-link" style={{ color: 'var(--cobalt)', fontWeight: 600 }}>
            Mobil uygulamalar (50+)
          </span>
          <a href="mailto:muhammetatmaca79@gmail.com" className="nav-cta" data-testid="link-contact-apps">
            İletişime geç <ArrowUpRight size={14} strokeWidth={1.8} />
          </a>
        </div>
      </nav>

      {/* Hero section matching site typography with Originkit Botanical Text */}
      <section className="hero" style={{ minHeight: 'auto', paddingBottom: '40px' }}>
        <div
          className="container-wide"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          <div style={{ maxWidth: '620px' }}>
            <div className="eyebrow">Mobil Mühendislik ve Mimari / iOS & Android</div>
            <h1 style={{ maxWidth: '820px' }}>
              50+ Uygulama<br />
              <em>canlıda,</em><br />
              her dokunuşta hissedilen akıcılık.
            </h1>
            <p className="hero-lede" style={{ maxWidth: '640px', color: '#000000', fontWeight: 500 }}>
              React Native, Flutter, Swift ve Kotlin ile geliştirilmiş kapsamlı üretim mobil uygulamaları dizini. 60 FPS akıcı jest tepkileri, öngörülebilir durum makineleri ve platforma özgü detaylara odaklı mimari.
            </p>
          </div>

          {/* Originkit Botanical Text component - Hidden on mobile screens */}
          <div
            className="mobile-hero-flower-anim hidden md:block"
            style={{
              width: '100%',
              maxWidth: '540px',
              height: 'clamp(240px, 50vw, 360px)',
              position: 'relative',
              justifySelf: 'end',
            }}
          >
            <FlowerType style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </section>

      {/* Filter and Search Bar matching site editorial form styling */}
      <section className="container-wide" style={{ marginBottom: '45px' }}>
        <div
          style={{
            padding: 'clamp(16px, 3vw, 24px) clamp(16px, 3vw, 28px)',
            borderRadius: '16px',
            border: '1px solid var(--line)',
            background: 'rgba(250, 248, 242, 0.85)',
          }}
        >
          {/* Search input & Platform toggle */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div style={{ position: 'relative', flex: '1 1 320px' }}>
              <Search
                size={15}
                style={{
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'rgba(24, 32, 51, 0.45)',
                  pointerEvents: 'none',
                }}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Uygulama adı, teknoloji veya anahtar kelimeyle ara (örn. SQLite, Bluetooth, Kamera)..."
                style={{
                  width: '100%',
                  padding: '12px 38px 12px 38px',
                  borderRadius: '10px',
                  border: '1px solid var(--line)',
                  background: 'var(--paper)',
                  color: 'var(--ink)',
                  font: '500 13px/1 var(--app-font-mono)',
                  outline: 'none',
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'rgba(24, 32, 51, 0.5)',
                  }}
                  aria-label="Aramayı temizle"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            {/* Platform pills */}
            <div style={{ display: 'inline-flex', gap: '4px', padding: '4px', borderRadius: '10px', background: 'rgba(24, 32, 51, 0.06)', border: '1px solid var(--line)' }}>
              {(['All', 'iOS', 'Android'] as const).map((plat) => (
                <button
                  key={plat}
                  type="button"
                  onClick={() => setSelectedPlatform(plat)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '7px',
                    border: 'none',
                    font: '500 11px/1 var(--app-font-mono)',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    background: selectedPlatform === plat ? 'var(--ink)' : 'transparent',
                    color: selectedPlatform === plat ? 'var(--paper)' : 'rgba(24, 32, 51, 0.65)',
                  }}
                >
                  {plat === 'All' ? 'Tümü' : plat}
                </button>
              ))}
            </div>
          </div>

          {/* Category Chips */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ font: '500 11px/1 var(--app-font-mono)', color: 'rgba(24, 32, 51, 0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginRight: '6px' }}>
              Kategori:
            </span>
            {APP_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '7px 14px',
                    borderRadius: '8px',
                    font: '500 11px/1 var(--app-font-mono)',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    background: active ? 'var(--cobalt)' : 'transparent',
                    color: active ? 'var(--paper)' : 'rgba(24, 32, 51, 0.75)',
                    border: active ? '1px solid var(--cobalt)' : '1px solid var(--line)',
                    boxShadow: active ? '2px 2px 0 var(--ink)' : 'none',
                  }}
                >
                  {APP_CATEGORY_LABELS[cat] ?? cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Status Line */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', padding: '0 4px', font: '500 11px/1 var(--app-font-mono)', color: 'rgba(24, 32, 51, 0.5)' }}>
          <span>{MOBILE_APPS.length} mobil uygulamadan {filteredApps.length} tanesi gösteriliyor</span>
          {(searchQuery || selectedCategory !== 'All' || selectedPlatform !== 'All') && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedPlatform('All');
              }}
              style={{ background: 'none', border: 'none', color: 'var(--cobalt)', cursor: 'pointer', font: 'inherit', textDecoration: 'underline' }}
            >
              Filtreleri sıfırla
            </button>
          )}
        </div>
      </section>

      {/* Applications Grid: Styled like site project-card & list-item */}
      <section className="container-wide" style={{ marginBottom: '110px' }}>
        {filteredApps.length === 0 ? (
          <div
            style={{
              padding: '70px 20px',
              textAlign: 'center',
              border: '1px dashed var(--line)',
              borderRadius: '16px',
            }}
          >
            <h3 style={{ font: '600 22px/1 var(--font-display)', color: 'var(--ink)' }}>Uygulama bulunamadı</h3>
            <p style={{ color: 'rgba(24, 32, 51, 0.6)', fontSize: '13px', marginTop: '8px' }}>Arama kriterlerinizi değiştirmeyi veya farklı bir kategori seçmeyi deneyin.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedPlatform('All');
              }}
              className="button-primary"
              style={{ marginTop: '18px' }}
            >
              Filtreleri sıfırla
            </button>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 290px), 1fr))',
              gap: '24px',
            }}
          >
            {filteredApps.map((app, index) => {
              const accent = getAppAccent(index);
              return (
                <article
                  key={app.id}
                  style={{
                    position: 'relative',
                    padding: '28px',
                    borderRadius: '17px',
                    border: '1px solid rgba(24, 32, 51, 0.14)',
                    background: accent.cardBg,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '340px',
                    transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                  }}
                  className="hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[rgba(24,32,51,0.08)]"
                >
                  <div>
                    {/* Topline */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        {app.iconUrl ? (
                          <img
                            src={app.iconUrl}
                            alt={`${app.name} (${app.category}) mobil uygulama resmi ikonu - Muhammet Atmaca`}
                            loading="lazy"
                            decoding="async"
                            width={40}
                            height={40}
                            style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '10px',
                              objectFit: 'cover',
                              boxShadow: '2px 2px 0 rgba(24,32,51,0.18)',
                              flexShrink: 0,
                            }}
                          />
                        ) : (
                          <div
                            style={{
                              width: '34px',
                              height: '34px',
                              borderRadius: '8px',
                              background: accent.bg,
                              color: accent.text,
                              display: 'grid',
                              placeItems: 'center',
                              font: '600 15px/1 var(--app-font-mono)',
                              boxShadow: '2px 2px 0 var(--ink)',
                            }}
                          >
                            {app.iconLetter}
                          </div>
                        )}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          <span style={{ color: 'rgba(24, 32, 51, 0.6)', font: '10px/1 var(--app-font-mono)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                            {APP_CATEGORY_LABELS[app.category] ?? app.category}
                          </span>
                          {app.packageId && (
                            <span style={{ font: '9px/1 var(--app-font-mono)', color: 'var(--cobalt)', letterSpacing: '0.04em' }}>
                              {app.packageId}
                            </span>
                          )}
                        </div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                        {app.packageId && (
                          <span style={{
                            font: '9px/1 var(--app-font-mono)',
                            padding: '3px 7px',
                            borderRadius: '4px',
                            background: 'rgba(42, 92, 219, 0.12)',
                            color: 'var(--cobalt)',
                            border: '1px solid rgba(42, 92, 219, 0.2)',
                          }}>
                            Canlı Uygulama
                          </span>
                        )}
                        <span style={{ color: 'rgba(24, 32, 51, 0.45)', font: '10px/1 var(--app-font-mono)' }}>{app.year}</span>
                      </div>
                    </div>

                    {/* App Title */}
                    <h3
                      style={{
                        margin: '12px 0 8px',
                        color: 'var(--ink)',
                        font: '600 24px/1.08 var(--font-display)',
                        letterSpacing: '-0.06em',
                      }}
                    >
                      {app.name}
                    </h3>

                    {/* Tagline */}
                    <p style={{ margin: '0 0 14px', color: 'rgba(24, 32, 51, 0.72)', fontSize: '13px', lineHeight: 1.45 }}>
                      {app.tagline}
                    </p>

                    {/* Metrics row */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.45)',
                        border: '1px solid rgba(24, 32, 51, 0.08)',
                        font: '500 11px/1 var(--app-font-mono)',
                        color: 'rgba(24, 32, 51, 0.7)',
                        marginBottom: '16px',
                      }}
                    >
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--ink)' }}>
                        <Star size={11} style={{ fill: 'var(--coral)', color: 'var(--coral)' }} /> {app.rating}
                      </span>
                      <span>•</span>
                      <span>
                        {app.downloads === 'Closed Beta'
                          ? app.tagline.split(' — ')[0]
                          : /[0-9]/.test(app.downloads)
                            ? `${app.downloads} indirme`
                            : app.downloads}
                      </span>
                      <span>•</span>
                      <span>{app.platforms.join('/')}</span>
                    </div>

                    {/* Tech stack pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '20px' }}>
                      {app.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          style={{
                            padding: '4px 8px',
                            borderRadius: '5px',
                            background: 'rgba(255, 255, 255, 0.55)',
                            border: '1px solid rgba(24, 32, 51, 0.09)',
                            color: 'rgba(24, 32, 51, 0.75)',
                            font: '10px/1 var(--app-font-mono)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {app.techStack.length > 3 && (
                        <span
                          style={{
                            padding: '4px 6px',
                            borderRadius: '5px',
                            color: 'rgba(24, 32, 51, 0.45)',
                            font: '10px/1 var(--app-font-mono)',
                          }}
                        >
                          +{app.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card bottom action */}
                  <div
                    style={{
                      paddingTop: '16px',
                      borderTop: '1px solid rgba(24, 32, 51, 0.1)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveModalApp(app)}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        color: 'var(--ink)',
                        font: '500 11px/1 var(--app-font-mono)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                      className="hover:text-[var(--cobalt)]"
                    >
                      Mimariyi incele <MoveUpRight size={13} />
                    </button>
                    <span style={{ color: 'rgba(24, 32, 51, 0.4)', font: '10px/1 var(--app-font-mono)' }}>
                      0{index + 1}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* Interactive Code Architecture Showcase */}
      <section style={{ padding: '70px 0 50px', borderTop: '1px solid var(--line)', background: '#f4f0e6' }} aria-label="Mobil Mühendislik ve Canlı Kod Standartları">
        <div className="container-wide" style={{ marginBottom: '32px', textAlign: 'center' }}>
          <div style={{ color: 'var(--cobalt)', font: '600 11px/1 var(--app-font-mono)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '8px' }}>
            60 FPS & Temiz Kod Mimarisi
          </div>
          <h2 style={{ margin: '0 0 12px', font: '700 clamp(24px, 4vw, 36px)/1.15 var(--font-display)', color: 'var(--ink)', letterSpacing: '-0.03em' }}>
            50+ Mobil Uygulamanın Altyapısı
          </h2>
          <p style={{ maxWidth: '620px', margin: '0 auto', fontSize: '15px', lineHeight: 1.6, color: 'rgba(24, 32, 51, 0.75)' }}>
            App Store ve Google Play'de onaylanan uygulamalarımızın arkasındaki sade, anlaşılır ve güvenilir mobil mimari.
          </p>
        </div>
        <div className="container-wide" style={{ maxWidth: '920px' }}>
          <GlassCodeBlock initialTabId="mobile" />
        </div>
      </section>

      {/* Editorial Detail Modal matching site cards */}
      {activeModalApp && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            background: 'rgba(24, 32, 51, 0.55)',
            backdropFilter: 'blur(8px)',
          }}
          onClick={() => setActiveModalApp(null)}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '620px',
              maxHeight: 'calc(100svh - 32px)',
              overflowY: 'auto',
              borderRadius: '18px',
              background: 'var(--paper)',
              border: '1px solid rgba(24, 32, 51, 0.18)',
              boxShadow: '0 25px 60px rgba(24, 32, 51, 0.22)',
              padding: 'clamp(20px, 5vw, 36px)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setActiveModalApp(null)}
              style={{
                position: 'absolute',
                top: '22px',
                right: '22px',
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                border: '1px solid var(--line)',
                background: 'transparent',
                display: 'grid',
                placeItems: 'center',
                cursor: 'pointer',
                color: 'var(--ink)',
              }}
              aria-label="Close modal"
            >
              <X size={16} />
            </button>

            {/* Header */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '24px', paddingRight: '36px' }}>
              {activeModalApp.iconUrl ? (
                <img
                  src={activeModalApp.iconUrl}
                  alt={`${activeModalApp.name} (${activeModalApp.category}) mobil uygulama ikonu - Muhammet Atmaca`}
                  loading="lazy"
                  decoding="async"
                  width={58}
                  height={58}
                  style={{
                    width: '58px',
                    height: '58px',
                    borderRadius: '14px',
                    objectFit: 'cover',
                    boxShadow: '3px 3px 0 rgba(24,32,51,0.18)',
                    flexShrink: 0,
                  }}
                />
              ) : (
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '11px',
                    background: 'var(--cobalt)',
                    color: 'var(--paper)',
                    display: 'grid',
                    placeItems: 'center',
                    font: '600 20px/1 var(--app-font-mono)',
                    boxShadow: '3px 3px 0 var(--ink)',
                    flexShrink: 0,
                  }}
                >
                  {activeModalApp.iconLetter}
                </div>
              )}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span style={{ color: 'var(--cobalt)', font: '10px/1 var(--app-font-mono)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                    {APP_CATEGORY_LABELS[activeModalApp.category] ?? activeModalApp.category} • {activeModalApp.year}
                  </span>
                  {activeModalApp.packageId && (
                    <span style={{
                      font: '9px/1 var(--app-font-mono)',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      background: 'rgba(42, 92, 219, 0.1)',
                      color: 'var(--cobalt)',
                      border: '1px solid rgba(42, 92, 219, 0.2)',
                    }}>
                      Canlı Uygulama
                    </span>
                  )}
                </div>
                <h2 style={{ margin: 0, color: 'var(--ink)', font: '600 28px/1.05 var(--font-display)', letterSpacing: '-0.06em' }}>
                  {activeModalApp.name}
                </h2>
                <p style={{ margin: '6px 0 0', color: 'rgba(24, 32, 51, 0.65)', fontSize: '13px' }}>
                  {activeModalApp.tagline}
                </p>
                {activeModalApp.packageId && (
                  <span style={{ display: 'block', marginTop: '4px', font: '10px/1 var(--app-font-mono)', color: 'rgba(24, 32, 51, 0.4)' }}>
                    {activeModalApp.packageId}
                  </span>
                )}
              </div>
            </div>

            {/* Metrics */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                padding: '16px',
                borderRadius: '12px',
                border: '1px solid var(--line)',
                background: 'rgba(255, 255, 255, 0.45)',
                marginBottom: '28px',
                textAlign: 'center',
              }}
            >
              <div>
                <span style={{ display: 'block', color: 'rgba(24, 32, 51, 0.45)', font: '10px/1 var(--app-font-mono)', textTransform: 'uppercase' }}>Mağaza Puanı</span>
                <strong style={{ display: 'block', marginTop: '6px', color: 'var(--ink)', font: '600 18px/1 var(--font-display)' }}>
                  {activeModalApp.rating} ★
                </strong>
              </div>
              <div style={{ borderInline: '1px solid var(--line)' }}>
                <span style={{ display: 'block', color: 'rgba(24, 32, 51, 0.45)', font: '10px/1 var(--app-font-mono)', textTransform: 'uppercase' }}>İndirme Sayısı</span>
                <strong style={{ display: 'block', marginTop: '6px', color: 'var(--ink)', font: '600 18px/1 var(--font-display)' }}>
                  {/[0-9]/.test(activeModalApp.downloads) ? `${activeModalApp.downloads} indirme` : activeModalApp.downloads}
                </strong>
              </div>
              <div>
                <span style={{ display: 'block', color: 'rgba(24, 32, 51, 0.45)', font: '10px/1 var(--app-font-mono)', textTransform: 'uppercase' }}>Platformlar</span>
                <strong style={{ display: 'block', marginTop: '6px', color: 'var(--cobalt)', font: '600 18px/1 var(--font-display)' }}>
                  {activeModalApp.platforms.join(' & ')}
                </strong>
              </div>
            </div>

            {/* Problem & Description */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ color: 'rgba(24, 32, 51, 0.5)', font: '10px/1 var(--app-font-mono)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>
                Sistem Mimarisi ve Genel Bakış
              </div>
              <p style={{ margin: 0, color: 'rgba(24, 32, 51, 0.78)', fontSize: '14px', lineHeight: 1.6 }}>
                {activeModalApp.description}
              </p>
            </div>

            {/* Screenshots gallery */}
            {activeModalApp.screenshots && activeModalApp.screenshots.length > 0 && (
              <div style={{ marginBottom: '26px' }}>
                <div style={{ color: 'rgba(24, 32, 51, 0.5)', font: '10px/1 var(--app-font-mono)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>
                  Uygulama Ekran Görüntüleri
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: '10px',
                    overflowX: 'auto',
                    paddingBottom: '8px',
                    scrollbarWidth: 'thin',
                  }}
                >
                  {activeModalApp.screenshots.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${activeModalApp.name} iOS & Android mobil uygulama ekran görüntüsü ${i + 1} - Muhammet Atmaca`}
                      loading="lazy"
                      decoding="async"
                      style={{
                        height: '200px',
                        width: 'auto',
                        borderRadius: '10px',
                        border: '1px solid rgba(24, 32, 51, 0.1)',
                        flexShrink: 0,
                        objectFit: 'cover',
                        boxShadow: '2px 4px 12px rgba(24,32,51,0.1)',
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Key Engineering Features */}
            <div style={{ marginBottom: '26px' }}>
              <div style={{ color: 'rgba(24, 32, 51, 0.5)', font: '10px/1 var(--app-font-mono)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '10px' }}>
                Çözülen Temel Mühendislik Problemleri
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: '8px' }}>
                {activeModalApp.features.map((feat, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: 'rgba(24, 32, 51, 0.76)', lineHeight: 1.5 }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--cobalt)', marginTop: '8px', flexShrink: 0 }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ color: 'rgba(24, 32, 51, 0.5)', font: '10px/1 var(--app-font-mono)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '10px' }}>
                Kullanılan Teknolojiler & Kütüphaneler
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {activeModalApp.techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: '6px 10px',
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.7)',
                      border: '1px solid var(--line)',
                      color: 'var(--ink)',
                      font: '500 11px/1 var(--app-font-mono)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom action */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', paddingTop: '16px', borderTop: '1px solid var(--line)' }}>
              <button
                type="button"
                onClick={() => setActiveModalApp(null)}
                className="button-quiet"
                style={{ cursor: 'pointer', padding: '10px 16px' }}
              >
                Kapat
              </button>
              <a
                href="mailto:muhammetatmaca79@gmail.com?subject=Mobil Mimari Hakkında Bilgi Talebi"
                className="button-primary"
                style={{ padding: '12px 18px' }}
              >
                İletişime geç <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Sitelinks Navigation Directory */}
      <SitelinksDirectory />

      {/* Editorial Footer Section 4 (2-card split layout) */}
      <FooterSection4 />
    </main>
  );
}
