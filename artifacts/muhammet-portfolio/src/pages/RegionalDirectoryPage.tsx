import { useState, useMemo, useEffect } from 'react';
import { Link } from 'wouter';
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronRight,
  Globe,
  MapPin,
  Search,
  Smartphone,
  Laptop,
  Code2,
  ShoppingBag,
  Sparkles,
  ArrowDown,
  Github,
  Linkedin,
} from 'lucide-react';
import { TURKISH_CITIES, TurkishCity } from '../data/turkishCities';
import { BAYBURT_SPECIALIZED_PAGES, TECH_SPECIALIZED_PAGES } from '../data/seoLandingPages';
import { SEO } from '../components/SEO';
import { SitelinksDirectory } from '../components/SitelinksDirectory';

const REGIONS: Array<TurkishCity['region']> = [
  'Marmara',
  'İç Anadolu',
  'Ege',
  'Akdeniz',
  'Karadeniz',
  'Güneydoğu Anadolu',
  'Doğu Anadolu',
];

const SERVICES_CONFIG = [
  { slugSuffix: 'yazilim', label: 'Yazılım', icon: Code2 },
  { slugSuffix: 'mobil-uygulama', label: 'Mobil Uygulama', icon: Smartphone },
  { slugSuffix: 'web-tasarim', label: 'Web Tasarım', icon: Globe },
  { slugSuffix: 'e-ticaret', label: 'E-Ticaret', icon: ShoppingBag },
  { slugSuffix: 'bilgisayar-muhendisi', label: 'Mühendislik', icon: Laptop },
];

export function RegionalDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRegion, setActiveRegion] = useState<string>('All');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const filteredCities = useMemo(() => {
    return TURKISH_CITIES.filter((city) => {
      const matchesSearch =
        city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        String(city.plate).includes(searchQuery.trim());
      const matchesRegion = activeRegion === 'All' || city.region === activeRegion;
      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, activeRegion]);

  const citiesByRegion = useMemo(() => {
    const map: Record<string, TurkishCity[]> = {};
    for (const r of REGIONS) {
      map[r] = [];
    }
    for (const city of filteredCities) {
      if (map[city.region]) {
        map[city.region].push(city);
      }
    }
    return map;
  }, [filteredCities]);

  return (
    <main className="portfolio-shell" id="top">
      <SEO
        title="Türkiye Geneli Yazılım & Mobil Uygulama Hizmet Bölgeleri (81 İl) | Muhammet Atmaca"
        description="Türkiye'nin 81 ilinde kurumsal yazılım, iOS & Android mobil uygulama, e-ticaret sistemleri ve web tasarım hizmetleri. Şehirlere özel yazılım mühendisliği dizini."
        canonicalUrl="https://muhammetatmaca.com.tr/hizmet-bolgeleri"
        keywords={[
          'Yazılım Hizmet Bölgeleri',
          '81 İl Yazılım Şirketleri',
          'Mobil Uygulama Yapanlar Türkiye',
          'E-Ticaret Sitesi Yaptırma',
          'Web Tasarım Hizmetleri',
          'Muhammet Atmaca',
        ]}
      />

      {/* Floating editorial navigation */}
      <nav className="nav-card" aria-label="Hizmet bölgeleri navigasyonu">
        <Link href="/" className="wordmark" data-testid="link-back-home">
          <span className="wordmark-mark">
            <ArrowLeft size={13} strokeWidth={2.2} />
          </span>
          <span>Muhammet Atmaca</span>
        </Link>
        <div className="nav-links">
          <Link href="/" className="nav-link">Genel bakış</Link>
          <Link href="/apps" className="nav-link">Mobil uygulamalar (50+)</Link>
          <Link href="/web" className="nav-link">Web sistemleri</Link>
          <span className="nav-link" style={{ color: 'var(--cobalt)', fontWeight: 600 }}>
            Hizmet bölgeleri (81 İl)
          </span>
          <a href="mailto:muhammetatmaca79@gmail.com" className="nav-cta">
            İletişime geç <ArrowUpRight size={14} strokeWidth={1.8} />
          </a>
        </div>
      </nav>

      {/* Header section */}
      <section style={{ padding: '130px 0 50px', borderBottom: '1px solid var(--line)' }}>
        <div className="container-wide">
          <div className="eyebrow" style={{ marginBottom: '14px' }}>
            Türkiye Geneli Mühendislik & Yazılım Dizini
          </div>
          <h1
            style={{
              fontSize: 'clamp(32px, 5.5vw, 62px)',
              lineHeight: 1.08,
              letterSpacing: '-0.04em',
              color: 'var(--ink)',
              margin: '0 0 20px',
              fontWeight: 700,
            }}
          >
            Türkiye genelinde<br />
            <em>81 il için</em> güvenilir yazılım altyapısı.
          </h1>
          <p
            style={{
              fontSize: 'clamp(15px, 2vw, 19px)',
              lineHeight: 1.6,
              color: 'rgba(24, 32, 51, 0.78)',
              maxWidth: '820px',
              margin: '0 0 35px',
            }}
          >
            Mağazalarda 50’den fazla canlı mobil uygulaması, savunma sanayii ve kurumsal B2B sistem tecrübesi bulunan
            yazılım mühendisi Muhammet Atmaca güvencesiyle; Türkiye’nin her bölgesindeki işletmeler için uçtan uca dijital dönüşüm.
          </p>

          {/* Search & Region Filters */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ position: 'relative', maxWidth: '480px' }}>
              <Search
                size={16}
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'rgba(24, 32, 51, 0.45)',
                }}
              />
              <input
                type="text"
                placeholder="İl adı veya plaka kodu ile ara (Örn: Adana, 01, Samsun, 55)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px 12px 44px',
                  borderRadius: '12px',
                  border: '1px solid var(--line)',
                  background: 'rgba(250, 248, 242, 0.95)',
                  fontSize: '14px',
                  color: 'var(--ink)',
                  outline: 'none',
                  boxShadow: '0 2px 8px rgba(24, 32, 51, 0.04)',
                }}
              />
            </div>

            {/* Region buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <button
                type="button"
                onClick={() => setActiveRegion('All')}
                style={{
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  border: '1px solid var(--line)',
                  background: activeRegion === 'All' ? 'var(--ink)' : 'rgba(250, 248, 242, 0.9)',
                  color: activeRegion === 'All' ? 'var(--paper)' : 'var(--ink)',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                Tüm Bölgeler ({TURKISH_CITIES.length})
              </button>
              {REGIONS.map((region) => {
                const count = TURKISH_CITIES.filter((c) => c.region === region).length;
                const isSelected = activeRegion === region;
                return (
                  <button
                    key={region}
                    type="button"
                    onClick={() => setActiveRegion(region)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '9999px',
                      border: '1px solid var(--line)',
                      background: isSelected ? 'var(--cobalt)' : 'rgba(250, 248, 242, 0.9)',
                      color: isSelected ? 'var(--paper)' : 'var(--ink)',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {region} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Cities by Region */}
      <section style={{ padding: '60px 0 90px' }}>
        <div className="container-wide" style={{ display: 'grid', gap: '50px' }}>
          {REGIONS.map((region) => {
            const citiesInRegion = citiesByRegion[region] || [];
            if (citiesInRegion.length === 0) return null;

            return (
              <div key={region} style={{ display: 'grid', gap: '22px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderBottom: '1px solid var(--line)', paddingBottom: '12px' }}>
                  <MapPin size={18} style={{ color: 'var(--cobalt)' }} />
                  <h2
                    style={{
                      margin: 0,
                      fontSize: '22px',
                      fontWeight: 700,
                      color: 'var(--ink)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {region} Bölgesi ({citiesInRegion.length} İl)
                  </h2>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
                    gap: '16px',
                  }}
                >
                  {citiesInRegion.map((city) => (
                    <div
                      key={city.slug}
                      style={{
                        padding: '18px 20px',
                        borderRadius: '14px',
                        background: 'rgba(250, 248, 242, 0.85)',
                        border: '1px solid var(--line)',
                        boxShadow: '0 4px 12px rgba(24, 32, 51, 0.03)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '17px', fontWeight: 700, color: 'var(--ink)' }}>
                          {city.name}
                        </span>
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 600,
                            fontFamily: 'var(--app-font-mono)',
                            color: 'var(--cobalt)',
                            background: 'rgba(25, 75, 223, 0.08)',
                            padding: '3px 8px',
                            borderRadius: '6px',
                          }}
                        >
                          Plaka: {city.plate < 10 ? `0${city.plate}` : city.plate}
                        </span>
                      </div>

                      {/* Service Links for this city */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                        {SERVICES_CONFIG.map((svc) => {
                          const href = `/${city.slug}-${svc.slugSuffix}`;
                          const Icon = svc.icon;
                          return (
                            <Link
                              key={svc.slugSuffix}
                              href={href}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                padding: '6px 10px',
                                borderRadius: '8px',
                                background: 'rgba(24, 32, 51, 0.04)',
                                border: '1px solid rgba(24, 32, 51, 0.06)',
                                textDecoration: 'none',
                                color: 'var(--ink)',
                                fontSize: '11.5px',
                                fontWeight: 500,
                                transition: 'all 0.15s ease',
                              }}
                              className="group hover:bg-[var(--cobalt)] hover:text-white"
                            >
                              <Icon size={12} className="opacity-70 group-hover:opacity-100" />
                              <span>{svc.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Bayburt Hyper-Specialized Links Section */}
          <div style={{ marginTop: '20px', borderTop: '1px solid var(--line)', paddingTop: '40px' }}>
            <div className="eyebrow" style={{ marginBottom: '10px' }}>
              Özel Mühendislik & Merkez Bölge
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--ink)', margin: '0 0 16px' }}>
              Bayburt (TR-69) Özel Çözümleri
            </h3>
            <p style={{ color: 'rgba(24, 32, 51, 0.72)', fontSize: '14px', marginBottom: '20px', maxWidth: '750px' }}>
              Bayburt merkezli yazılım şirketi, otomasyon, kamu sistemleri ve özel mühendislik çözümleri sayfaları.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {Object.keys(BAYBURT_SPECIALIZED_PAGES).map((slug) => {
                const item = BAYBURT_SPECIALIZED_PAGES[slug];
                return (
                  <Link
                    key={slug}
                    href={`/${slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '7px 12px',
                      borderRadius: '8px',
                      background: 'rgba(250, 248, 242, 0.9)',
                      border: '1px solid var(--line)',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: 'var(--ink)',
                      textDecoration: 'none',
                    }}
                  >
                    <span>{item.title.split('—')[0].trim()}</span>
                    <ArrowUpRight size={12} style={{ color: 'var(--cobalt)' }} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Tech Specialization Slugs Section */}
          <div style={{ borderTop: '1px solid var(--line)', paddingTop: '30px' }}>
            <div className="eyebrow" style={{ marginBottom: '10px' }}>
              Teknoloji & İleri Düzey Mimari
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--ink)', margin: '0 0 16px' }}>
              Ulusal Düzeyde Uzmanlık Rotaları
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {Object.keys(TECH_SPECIALIZED_PAGES).map((slug) => {
                const item = TECH_SPECIALIZED_PAGES[slug];
                return (
                  <Link
                    key={slug}
                    href={`/${slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 14px',
                      borderRadius: '8px',
                      background: 'rgba(25, 75, 223, 0.08)',
                      border: '1px solid rgba(25, 75, 223, 0.2)',
                      fontSize: '12.5px',
                      fontWeight: 600,
                      color: 'var(--cobalt)',
                      textDecoration: 'none',
                    }}
                  >
                    <Sparkles size={13} />
                    <span>{item.title.split('—')[0].trim()}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Sitelinks Navigation Directory */}
      <SitelinksDirectory />

      {/* Footer */}
      <footer className="footer">
        <div className="container-wide footer-inner">
          <span className="footer-note">© {new Date().getFullYear()} Muhammet Atmaca • Hizmet Bölgeleri</span>
          <div className="footer-links">
            <Link href="/" className="footer-link">Portfolyo Ana Sayfa</Link>
            <Link href="/apps" className="footer-link">Mobil Uygulamalar (50+)</Link>
            <Link href="/web" className="footer-link">Web Sistemleri</Link>
            <a href="https://github.com/muhammetatmaca" target="_blank" rel="noreferrer" className="footer-link">
              <Github size={13} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/muhammet-atmaca-857481252/" target="_blank" rel="noreferrer" className="footer-link">
              <Linkedin size={13} /> LinkedIn
            </a>
            <a
              href="#top"
              className="footer-link"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Yukarı çık <ArrowDown size={13} className="rotate-180" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
