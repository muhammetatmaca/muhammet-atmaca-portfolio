import { useMemo, useState } from 'react';
import { Link } from 'wouter';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Code2,
  CreditCard,
  Database,
  ExternalLink,
  FileCode2,
  Github,
  Globe,
  Layers,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Server,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Star,
  Terminal,
  Truck,
  Zap,
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { SEO_LANDING_PAGES, SeoLandingPageData, TECH_SPECIALIZED_PAGES } from '@/data/seoLandingPages';
import { MOBILE_APPS, MobileApp } from '@/data/mobileApps';
import { WEB_PROJECTS, WebProject } from '@/data/careerAndWeb';
import { TURKISH_CITIES, TurkishCity } from '@/data/turkishCities';
import { SitelinksDirectory } from '@/components/SitelinksDirectory';

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

  // Match real web projects
  const relevantWebProjects: WebProject[] = useMemo(() => {
    return WEB_PROJECTS.slice(0, 3);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const canonicalUrl = `https://muhammetatmaca.com.tr/${pageData.slug}`;

  // Find city info if available
  const cityInfo: TurkishCity | undefined = useMemo(() => {
    if (!pageData.cityOrRegion) return undefined;
    return TURKISH_CITIES.find(
      (c) =>
        c.name.toLowerCase() === pageData.cityOrRegion?.toLowerCase() ||
        pageData.slug.startsWith(`${c.slug}-`)
    );
  }, [pageData.cityOrRegion, pageData.slug]);

  // Determine current service type
  const serviceType = useMemo(() => {
    if (pageData.slug.endsWith('-e-ticaret')) return 'e-ticaret';
    if (pageData.slug.endsWith('-mobil-uygulama')) return 'mobil-uygulama';
    if (pageData.slug.endsWith('-web-tasarim')) return 'web-tasarim';
    if (pageData.slug.endsWith('-bilgisayar-muhendisi')) return 'bilgisayar-muhendisi';
    if (pageData.slug.endsWith('-yazilim')) return 'yazilim';
    return 'genel';
  }, [pageData.slug]);

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
            jobTitle: 'Software Engineer',
            url: 'https://muhammetatmaca.com.tr/',
          },
          areaServed: pageData.cityOrRegion
            ? { '@type': 'City', name: pageData.cityOrRegion }
            : { '@type': 'Country', name: 'Türkiye' },
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

  // Sibling services in the SAME city
  const siblingServices = useMemo(() => {
    if (!cityInfo) return [];
    const allTypes = [
      { slugSuffix: 'yazilim', label: 'Özel Yazılım', icon: Code2 },
      { slugSuffix: 'mobil-uygulama', label: 'Mobil Uygulama', icon: Smartphone },
      { slugSuffix: 'web-tasarim', label: 'Web Tasarım & SEO', icon: Globe },
      { slugSuffix: 'e-ticaret', label: 'E-Ticaret & Sanal POS', icon: ShoppingBag },
      { slugSuffix: 'bilgisayar-muhendisi', label: 'Bilgisayar Mühendisi', icon: Terminal },
    ];
    return allTypes
      .filter((t) => `${cityInfo.slug}-${t.slugSuffix}` !== pageData.slug)
      .map((t) => ({
        ...t,
        slug: `${cityInfo.slug}-${t.slugSuffix}`,
      }));
  }, [cityInfo, pageData.slug]);

  // Peer cities in the SAME geographical region
  const regionalPeers = useMemo(() => {
    if (!cityInfo) return [];
    return TURKISH_CITIES.filter(
      (c) => c.region === cityInfo.region && c.slug !== cityInfo.slug
    ).slice(0, 8);
  }, [cityInfo]);

  // Major Turkish hubs
  const majorMetropolises = useMemo(() => {
    const slugs = ['istanbul', 'ankara', 'izmir', 'bursa', 'samsun', 'antalya', 'bayburt'];
    return TURKISH_CITIES.filter(
      (c) => slugs.includes(c.slug) && c.slug !== cityInfo?.slug
    );
  }, [cityInfo]);

  return (
    <main className="portfolio-shell" id="top">
      <SEO
        title={pageData.title}
        description={pageData.metaDescription}
        keywords={pageData.keywords}
        canonicalUrl={canonicalUrl}
        structuredData={pageSchema}
      />

      {/* Floating editorial navigation matching main portfolio */}
      <nav className="nav-card" aria-label="Sayfa navigasyonu">
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
          <Link href="/hizmet-bolgeleri" className="nav-link">Hizmet bölgeleri</Link>
          <a href="#contact" className="nav-cta" data-testid="link-contact-nav">
            Fiyat teklifi al <ArrowUpRight size={14} strokeWidth={1.8} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ padding: '125px 0 55px', borderBottom: '1px solid var(--line)' }}>
        <div className="container-wide">
          {/* Breadcrumb Bar */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              font: '500 11px/1 var(--app-font-mono)',
              color: 'rgba(24, 32, 51, 0.65)',
              marginBottom: '22px',
              flexWrap: 'wrap',
            }}
            aria-label="Breadcrumb"
          >
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Ana Sayfa</Link>
            <span>/</span>
            <Link href="/hizmet-bolgeleri" style={{ color: 'inherit', textDecoration: 'none' }}>Hizmet Bölgeleri</Link>
            {cityInfo && (
              <>
                <span>/</span>
                <span style={{ color: 'var(--ink)' }}>{cityInfo.region}</span>
                <span>/</span>
                <span style={{ color: 'var(--ink)', fontWeight: 600 }}>{cityInfo.name}</span>
              </>
            )}
            <span>/</span>
            <span style={{ color: 'var(--cobalt)', fontWeight: 600 }}>{pageData.heroHighlight}</span>
          </nav>

          {/* Eyebrow */}
          <div className="eyebrow" style={{ marginBottom: '16px' }}>
            {pageData.eyebrow}
          </div>

          {/* Editorial Title */}
          <h1
            style={{
              fontSize: 'clamp(32px, 5.5vw, 64px)',
              lineHeight: 1.08,
              letterSpacing: '-0.04em',
              color: 'var(--ink)',
              margin: '0 0 24px',
              fontWeight: 700,
            }}
          >
            {cityInfo ? `${cityInfo.name} İçin ` : ''}
            <em>{pageData.heroHighlight}</em><br />
            {pageData.heroHeading}
          </h1>

          <p
            style={{
              fontSize: 'clamp(15px, 2vw, 20px)',
              lineHeight: 1.6,
              color: 'rgba(24, 32, 51, 0.82)',
              maxWidth: '850px',
              margin: '0 0 36px',
            }}
          >
            {pageData.heroSubheading}
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '45px' }}>
            <a
              href="#contact"
              className="button-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 24px',
                borderRadius: '12px',
                background: 'var(--ink)',
                color: 'var(--paper)',
                font: '600 13.5px/1 var(--app-font-mono)',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(24, 32, 51, 0.15)',
                transition: 'all 0.2s ease',
              }}
            >
              <Zap size={15} style={{ color: 'var(--coral)' }} />
              Ücretsiz Ön Değerlendirme & Sabit Fiyat Teklifi
            </a>

            <Link
              href="/apps"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 20px',
                borderRadius: '12px',
                background: 'rgba(250, 248, 242, 0.95)',
                border: '1px solid var(--line)',
                color: 'var(--ink)',
                font: '600 13.5px/1 var(--app-font-mono)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <Smartphone size={15} style={{ color: 'var(--cobalt)' }} />
              50+ Canlı Uygulamayı Gör
            </Link>

            <Link
              href="/hizmet-bolgeleri"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 18px',
                borderRadius: '12px',
                background: 'transparent',
                border: '1px solid rgba(24, 32, 51, 0.18)',
                color: 'rgba(24, 32, 51, 0.75)',
                font: '500 13px/1 var(--app-font-mono)',
                textDecoration: 'none',
              }}
            >
              <MapPin size={14} />
              81 İl Dizinine Dön
            </Link>
          </div>

          {/* Stats Bar (Editorial Brutalist Grid) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '12px',
              paddingTop: '28px',
              borderTop: '1px solid var(--line)',
            }}
          >
            <div
              style={{
                padding: '16px 18px',
                borderRadius: '12px',
                background: 'rgba(250, 248, 242, 0.85)',
                border: '1px solid var(--line)',
              }}
            >
              <div style={{ font: '700 24px/1 var(--font-display)', color: 'var(--ink)' }}>50+</div>
              <div style={{ font: '500 11.5px/1.4 var(--app-font-mono)', color: 'rgba(24, 32, 51, 0.65)', marginTop: '4px' }}>
                Canlı Mobil Uygulama (App Store & Google Play)
              </div>
            </div>

            <div
              style={{
                padding: '16px 18px',
                borderRadius: '12px',
                background: 'rgba(250, 248, 242, 0.85)',
                border: '1px solid var(--line)',
              }}
            >
              <div style={{ font: '700 24px/1 var(--font-display)', color: 'var(--ink)' }}>7+ Yıl</div>
              <div style={{ font: '500 11.5px/1.4 var(--app-font-mono)', color: 'rgba(24, 32, 51, 0.65)', marginTop: '4px' }}>
                Savunma Sanayii & Kurumsal Mühendislik
              </div>
            </div>

            <div
              style={{
                padding: '16px 18px',
                borderRadius: '12px',
                background: 'rgba(250, 248, 242, 0.85)',
                border: '1px solid var(--line)',
              }}
            >
              <div style={{ font: '700 24px/1 var(--font-display)', color: 'var(--cobalt)' }}>%100</div>
              <div style={{ font: '500 11.5px/1.4 var(--app-font-mono)', color: 'rgba(24, 32, 51, 0.65)', marginTop: '4px' }}>
                Doğrudan Kıdemli Mühendis İletişimi (Sıfır Aracı)
              </div>
            </div>

            <div
              style={{
                padding: '16px 18px',
                borderRadius: '12px',
                background: 'rgba(250, 248, 242, 0.85)',
                border: '1px solid var(--line)',
              }}
            >
              <div style={{ font: '700 24px/1 var(--font-display)', color: 'var(--ink)' }}>1 Yıl</div>
              <div style={{ font: '500 11.5px/1.4 var(--app-font-mono)', color: 'rgba(24, 32, 51, 0.65)', marginTop: '4px' }}>
                Sözleşmeli Teknik Destek & Garanti Kapsamı
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive Technical Blueprint Section */}
      <section style={{ padding: '65px 0', borderBottom: '1px solid var(--line)' }}>
        <div className="container-wide">
          <div style={{ maxWidth: '850px', marginBottom: '38px' }}>
            <div className="eyebrow" style={{ marginBottom: '10px' }}>
              Mühendislik Yaklaşımı & Mimari Altyapı
            </div>
            <h2
              style={{
                fontSize: 'clamp(24px, 4vw, 38px)',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                color: 'var(--ink)',
                margin: '0 0 14px',
                fontWeight: 700,
              }}
            >
              {serviceType === 'e-ticaret' && 'Ölçeklenebilir, Sıfır Komisyonlu E-Ticaret ve Sanal POS Altyapısı'}
              {serviceType === 'mobil-uygulama' && 'iOS & Android İçin 60 FPS Yerel Performanslı Mobil Mimariler'}
              {serviceType === 'web-tasarim' && 'Google PageSpeed 95+ Skorlu, Semantik Kurumsal Web Sistemleri'}
              {serviceType === 'bilgisayar-muhendisi' && 'Kıdemli Sistem Mimarisi, Kod İnceleme ve Güvenlik Danışmanlığı'}
              {serviceType === 'yazilim' && 'Şirket İş Akışlarına Özel ERP, CRM ve Mikroservis Mimarileri'}
              {serviceType === 'genel' && 'Geleceğe Hazır, Dayanıklı Yazılım Mühendisliği Standartları'}
            </h2>
            <p style={{ fontSize: '15.5px', lineHeight: 1.65, color: 'rgba(24, 32, 51, 0.78)' }}>
              {pageData.introParagraph}
            </p>
          </div>

          {/* Technical Specifications Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px',
              marginBottom: '40px',
            }}
          >
            {/* Box 1: E-Commerce / Core */}
            <div
              style={{
                padding: '24px',
                borderRadius: '16px',
                background: 'rgba(250, 248, 242, 0.9)',
                border: '1px solid var(--line)',
                boxShadow: '0 4px 16px rgba(24, 32, 51, 0.04)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <CreditCard size={18} style={{ color: 'var(--cobalt)' }} />
                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: 'var(--ink)' }}>
                  {serviceType === 'e-ticaret' ? 'Sanal POS & Ödeme Motoru' : 'Güvenli Ödeme & Yetkilendirme'}
                </h3>
              </div>
              <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: 'rgba(24, 32, 51, 0.74)', margin: 0 }}>
                {serviceType === 'e-ticaret'
                  ? '3D Secure 2.0 destekli iyzico, PayTR, Stripe ve tüm bankaların (Garanti, İş Bankası, Yapı Kredi) Sanal POS altyapıları ile sıfır aracı komisyonlu ödeme tahsilatı.'
                  : 'JWT tabanlı rol yetkilendirmesi, OAuth2 entegrasyonu ve endüstri standardı şifreleme protokolleri ile tam veri güvenliği.'}
              </p>
            </div>

            {/* Box 2: Integrations */}
            <div
              style={{
                padding: '24px',
                borderRadius: '16px',
                background: 'rgba(250, 248, 242, 0.9)',
                border: '1px solid var(--line)',
                boxShadow: '0 4px 16px rgba(24, 32, 51, 0.04)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <Server size={18} style={{ color: 'var(--coral)' }} />
                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: 'var(--ink)' }}>
                  {serviceType === 'e-ticaret' ? 'ERP, Kargo & Pazaryeri API' : 'Mikroservisler & Veri Akışı'}
                </h3>
              </div>
              <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: 'rgba(24, 32, 51, 0.74)', margin: 0 }}>
                {serviceType === 'e-ticaret'
                  ? 'Logo, Mikro, Zirve, Netsis ERP stok senkronizasyonu; Yurtiçi, Aras, MNG kargo barkodlama ve Trendyol/Hepsiburada çift yönlü sipariş entegrasyonu.'
                  : 'Asenkron RabbitMQ kuyruk yönetimi, REST ve GraphQL API katmanı, harici kurumsal servislerle sorunsuz iki yönlü veri iletişimi.'}
              </p>
            </div>

            {/* Box 3: Speed & High Traffic */}
            <div
              style={{
                padding: '24px',
                borderRadius: '16px',
                background: 'rgba(250, 248, 242, 0.9)',
                border: '1px solid var(--line)',
                boxShadow: '0 4px 16px rgba(24, 32, 51, 0.04)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <Zap size={18} style={{ color: 'var(--cobalt)' }} />
                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: 'var(--ink)' }}>
                  Yüksek Trafik & Redis Önbellek
                </h3>
              </div>
              <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: 'rgba(24, 32, 51, 0.74)', margin: 0 }}>
                Anlık kampanya ve yoğun trafik altında kilitlenmeyen PostgreSQL / Redis önbellek altyapısı,
                sub-second yanıt süreleri ve Cloudflare DDoS zırhı.
              </p>
            </div>
          </div>

          {/* Concrete Target Audience & Local Context */}
          <div
            style={{
              padding: '22px 24px',
              borderRadius: '14px',
              background: 'rgba(25, 75, 223, 0.06)',
              border: '1px solid rgba(25, 75, 223, 0.18)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px',
            }}
          >
            <CheckCircle2 size={20} style={{ color: 'var(--cobalt)', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ font: '600 12px/1 var(--app-font-mono)', color: 'var(--cobalt)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                Bölgesel Kapsam & Hedef Kitle:
              </div>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: 'var(--ink)' }}>
                {pageData.targetAudience}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Portfolio Projects Showcase */}
      <section style={{ padding: '65px 0', borderBottom: '1px solid var(--line)', background: 'rgba(250, 248, 242, 0.45)' }} id="referanslar">
        <div className="container-wide">
          <div style={{ marginBottom: '32px' }}>
            <div className="eyebrow" style={{ marginBottom: '8px' }}>
              Kanıtlanmış Üretim Referansları
            </div>
            <h2
              style={{
                fontSize: 'clamp(24px, 4vw, 36px)',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                color: 'var(--ink)',
                margin: 0,
                fontWeight: 700,
              }}
            >
              Canlıda Çalışan Gerçek Sistemler ve Mobil Uygulamalar
            </h2>
          </div>

          {/* Show either E-Commerce projects or Mobile apps */}
          {serviceType === 'e-ticaret' ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
              {/* Doğanlar Eczacılık Case Study */}
              <div
                style={{
                  padding: '28px',
                  borderRadius: '16px',
                  background: 'rgba(250, 248, 242, 0.95)',
                  border: '1px solid var(--line)',
                  boxShadow: '0 6px 20px rgba(24, 32, 51, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      font: '600 11px/1 var(--app-font-mono)',
                      color: 'var(--cobalt)',
                      background: 'rgba(25, 75, 223, 0.08)',
                      padding: '4px 8px',
                      borderRadius: '6px',
                    }}
                  >
                    B2B & E-Ticaret Platformu
                  </span>
                  <span style={{ font: '600 11px/1 var(--app-font-mono)', color: 'rgba(24, 32, 51, 0.5)' }}>
                    Canlı Üretim
                  </span>
                </div>
                <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 700, color: 'var(--ink)' }}>
                  Doğanlar Eczacılık B2B E-Ticaret
                </h3>
                <p style={{ margin: 0, fontSize: '13.5px', lineHeight: 1.6, color: 'rgba(24, 32, 51, 0.78)' }}>
                  100+ eczanenin aktif sipariş verdiği, Logo ERP senkronizasyonlu, dinamik iskonto ve Sanal POS ödeme altyapılı kurumsal B2B e-ticaret platformu.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {['ASP.NET Core', 'Microservices', 'Logo ERP', 'Redis', 'RabbitMQ', 'Sanal POS'].map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '11px',
                        fontFamily: 'var(--app-font-mono)',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        background: 'rgba(24, 32, 51, 0.05)',
                        color: 'var(--ink)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
                  <a
                    href="https://www.doganlarecza.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '12.5px',
                      fontWeight: 600,
                      color: 'var(--cobalt)',
                      textDecoration: 'none',
                    }}
                  >
                    Canlı Sistemi İncele <ExternalLink size={13} />
                  </a>
                </div>
              </div>

              {/* Tick Shopping App */}
              <div
                style={{
                  padding: '28px',
                  borderRadius: '16px',
                  background: 'rgba(250, 248, 242, 0.95)',
                  border: '1px solid var(--line)',
                  boxShadow: '0 6px 20px rgba(24, 32, 51, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      font: '600 11px/1 var(--app-font-mono)',
                      color: 'var(--coral)',
                      background: 'rgba(255, 118, 94, 0.12)',
                      padding: '4px 8px',
                      borderRadius: '6px',
                    }}
                  >
                    Mobil E-Ticaret & Sepet
                  </span>
                  <span style={{ font: '600 11px/1 var(--app-font-mono)', color: 'rgba(24, 32, 51, 0.5)' }}>
                    App Store & Play Store
                  </span>
                </div>
                <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 700, color: 'var(--ink)' }}>
                  Tick Shopping Akıllı Alışveriş
                </h3>
                <p style={{ margin: 0, fontSize: '13.5px', lineHeight: 1.6, color: 'rgba(24, 32, 51, 0.78)' }}>
                  Alışveriş listesi, sepet optimizasyonu ve anlık fiyat karşılaştırması sunan, React Native mimarili popüler mobil alışveriş uygulaması.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {['React Native', 'Expo', 'TypeScript', 'Offline SQLite', 'Cloud Sync'].map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '11px',
                        fontFamily: 'var(--app-font-mono)',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        background: 'rgba(24, 32, 51, 0.05)',
                        color: 'var(--ink)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
                  <Link
                    href="/apps"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '12.5px',
                      fontWeight: 600,
                      color: 'var(--cobalt)',
                      textDecoration: 'none',
                    }}
                  >
                    Mobil Kataloğunda Gör <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '18px' }}>
              {featuredApps.slice(0, 3).map((app) => (
                <div
                  key={app.id}
                  style={{
                    padding: '24px',
                    borderRadius: '16px',
                    background: 'rgba(250, 248, 242, 0.95)',
                    border: '1px solid var(--line)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span
                      style={{
                        font: '600 11px/1 var(--app-font-mono)',
                        color: 'var(--cobalt)',
                        background: 'rgba(25, 75, 223, 0.08)',
                        padding: '3px 8px',
                        borderRadius: '6px',
                      }}
                    >
                      {app.category}
                    </span>
                    <span style={{ fontSize: '11px', fontFamily: 'var(--app-font-mono)', color: 'rgba(24, 32, 51, 0.5)' }}>
                      {app.year}
                    </span>
                  </div>
                  <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: 'var(--ink)' }}>
                    {app.name}
                  </h3>
                  <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.55, color: 'rgba(24, 32, 51, 0.74)' }}>
                    {app.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: 'auto' }}>
                    {app.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '10.5px',
                          fontFamily: 'var(--app-font-mono)',
                          padding: '2px 7px',
                          borderRadius: '5px',
                          background: 'rgba(24, 32, 51, 0.05)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Directly an Engineer */}
      <section style={{ padding: '65px 0', borderBottom: '1px solid var(--line)' }}>
        <div className="container-wide">
          <div style={{ maxWidth: '780px', marginBottom: '36px' }}>
            <div className="eyebrow" style={{ marginBottom: '8px' }}>
              Mühendislik Güvencesi
            </div>
            <h2
              style={{
                fontSize: 'clamp(24px, 4vw, 36px)',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                color: 'var(--ink)',
                margin: '0 0 12px',
                fontWeight: 700,
              }}
            >
              Neden Aracı Ajans Değil, Doğrudan Yazılım Mühendisi?
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(24, 32, 51, 0.75)', margin: 0 }}>
              Pazarlama vaatleriyle vakit kaybetmeden; kodu yazan, mimariyi kuran ve canlıya alan uzmanla doğrudan çalışın.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '18px',
            }}
          >
            {pageData.whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '22px 24px',
                  borderRadius: '14px',
                  background: 'rgba(250, 248, 242, 0.9)',
                  border: '1px solid var(--line)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Check size={16} style={{ color: 'var(--cobalt)' }} />
                  <h3 style={{ margin: 0, fontSize: '15.5px', fontWeight: 700, color: 'var(--ink)' }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ margin: 0, fontSize: '13.5px', lineHeight: 1.6, color: 'rgba(24, 32, 51, 0.74)' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section style={{ padding: '65px 0', borderBottom: '1px solid var(--line)', background: 'rgba(250, 248, 242, 0.35)' }}>
        <div className="container-wide">
          <div style={{ maxWidth: '750px', marginBottom: '36px' }}>
            <div className="eyebrow" style={{ marginBottom: '8px' }}>
              Şeffaf Geliştirme Süreci
            </div>
            <h2
              style={{
                fontSize: 'clamp(24px, 4vw, 36px)',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                color: 'var(--ink)',
                margin: 0,
                fontWeight: 700,
              }}
            >
              Fikirden Canlıya: 5 Aşamalı Mühendislik Döngüsü
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '14px',
            }}
          >
            {pageData.processSteps.map((step) => (
              <div
                key={step.step}
                style={{
                  padding: '20px 22px',
                  borderRadius: '14px',
                  background: 'rgba(250, 248, 242, 0.95)',
                  border: '1px solid var(--line)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <div
                  style={{
                    font: '700 13px/1 var(--app-font-mono)',
                    color: 'var(--cobalt)',
                  }}
                >
                  Adım {step.step}
                </div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ink)' }}>
                  {step.title}
                </div>
                <div style={{ fontSize: '13px', lineHeight: 1.55, color: 'rgba(24, 32, 51, 0.72)' }}>
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sıkça Sorulan Sorular (FAQs) */}
      <section style={{ padding: '65px 0', borderBottom: '1px solid var(--line)' }}>
        <div className="container-wide">
          <div style={{ maxWidth: '750px', marginBottom: '32px' }}>
            <div className="eyebrow" style={{ marginBottom: '8px' }}>
              Sıkça Sorulan Sorular & Yanıtlar
            </div>
            <h2
              style={{
                fontSize: 'clamp(24px, 4vw, 36px)',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                color: 'var(--ink)',
                margin: 0,
                fontWeight: 700,
              }}
            >
              {cityInfo ? `${cityInfo.name} Projeleri Hakkında Merak Edilenler` : 'Hizmet & Teslimat Süreçleri'}
            </h2>
          </div>

          <div style={{ display: 'grid', gap: '10px', maxWidth: '850px' }}>
            {pageData.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  style={{
                    borderRadius: '12px',
                    border: '1px solid var(--line)',
                    background: 'rgba(250, 248, 242, 0.95)',
                    overflow: 'hidden',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    style={{
                      width: '100%',
                      padding: '18px 22px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      color: 'var(--ink)',
                      fontSize: '15px',
                      fontWeight: 600,
                      gap: '12px',
                    }}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.2s ease',
                        color: 'var(--cobalt)',
                        flexShrink: 0,
                      }}
                    />
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        padding: '0 22px 18px',
                        fontSize: '14px',
                        lineHeight: 1.65,
                        color: 'rgba(24, 32, 51, 0.78)',
                        borderTop: '1px solid rgba(24, 32, 51, 0.08)',
                        paddingTop: '14px',
                      }}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Internal Link Silo & Regional Network (Eliminates Orphan Pages) */}
      <section style={{ padding: '65px 0', borderBottom: '1px solid var(--line)', background: 'rgba(250, 248, 242, 0.5)' }}>
        <div className="container-wide">
          <div style={{ marginBottom: '32px' }}>
            <div className="eyebrow" style={{ marginBottom: '8px' }}>
              İç Bağlantı Ağı & Bölgesel Hizmetler
            </div>
            <h2
              style={{
                fontSize: 'clamp(22px, 3.5vw, 32px)',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                color: 'var(--ink)',
                margin: 0,
                fontWeight: 700,
              }}
            >
              {cityInfo ? `${cityInfo.name} ve Çevre İllerdeki Diğer Hizmetler` : 'İlgili Hizmet ve Şehir Sayfaları'}
            </h2>
          </div>

          <div style={{ display: 'grid', gap: '30px' }}>
            {/* Sibling Services in Same City */}
            {siblingServices.length > 0 && (
              <div>
                <div style={{ font: '600 12px/1 var(--app-font-mono)', color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                  {cityInfo?.name} Şehrinde Sunulan Diğer Çözümler:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {siblingServices.map((svc) => {
                    const Icon = svc.icon;
                    return (
                      <Link
                        key={svc.slug}
                        href={`/${svc.slug}`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '8px 14px',
                          borderRadius: '8px',
                          background: 'rgba(250, 248, 242, 0.95)',
                          border: '1px solid var(--line)',
                          fontSize: '12.5px',
                          fontWeight: 600,
                          color: 'var(--ink)',
                          textDecoration: 'none',
                        }}
                      >
                        <Icon size={13} style={{ color: 'var(--cobalt)' }} />
                        <span>{cityInfo?.name} {svc.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Regional Peer Cities */}
            {regionalPeers.length > 0 && (
              <div>
                <div style={{ font: '600 12px/1 var(--app-font-mono)', color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                  {cityInfo?.region} Bölgesindeki Komşu İller:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {regionalPeers.map((peer) => (
                    <Link
                      key={peer.slug}
                      href={`/${peer.slug}-${serviceType === 'genel' ? 'yazilim' : serviceType}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 14px',
                        borderRadius: '8px',
                        background: 'rgba(250, 248, 242, 0.95)',
                        border: '1px solid var(--line)',
                        fontSize: '12.5px',
                        fontWeight: 600,
                        color: 'var(--ink)',
                        textDecoration: 'none',
                      }}
                    >
                      <MapPin size={12} style={{ color: 'var(--coral)' }} />
                      <span>{peer.name} {pageData.heroHighlight}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* National Metropolitan Hubs */}
            <div>
              <div style={{ font: '600 12px/1 var(--app-font-mono)', color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                Türkiye Geneli Metropoller ve Merkez Rotalar:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {majorMetropolises.map((hub) => (
                  <Link
                    key={hub.slug}
                    href={`/${hub.slug}-${serviceType === 'genel' ? 'yazilim' : serviceType}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '7px 12px',
                      borderRadius: '8px',
                      background: 'rgba(250, 248, 242, 0.85)',
                      border: '1px solid var(--line)',
                      fontSize: '12px',
                      fontWeight: 500,
                      color: 'rgba(24, 32, 51, 0.85)',
                      textDecoration: 'none',
                    }}
                  >
                    <span>{hub.name}</span>
                    <ArrowUpRight size={11} style={{ color: 'var(--cobalt)' }} />
                  </Link>
                ))}
                <Link
                  href="/hizmet-bolgeleri"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '7px 14px',
                    borderRadius: '8px',
                    background: 'var(--ink)',
                    color: 'var(--paper)',
                    fontSize: '12px',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  <MapPin size={12} />
                  <span>Tüm 81 İli Listele</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact & Quotation Block (#contact) */}
      <section id="contact" style={{ padding: '80px 0', borderBottom: '1px solid var(--line)' }}>
        <div className="container-wide">
          <div
            style={{
              padding: 'clamp(28px, 5vw, 48px)',
              borderRadius: '20px',
              background: 'var(--ink)',
              color: 'var(--paper)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
              alignItems: 'center',
              boxShadow: '0 16px 40px rgba(24, 32, 51, 0.25)',
            }}
          >
            <div>
              <div
                style={{
                  color: 'var(--coral)',
                  font: '600 11px/1 var(--app-font-mono)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  marginBottom: '10px',
                }}
              >
                {cityInfo ? `${cityInfo.name} İçin Projeniz Mi Var?` : 'Birlikte Hayata Geçirelim'}
              </div>
              <h2
                style={{
                  fontSize: 'clamp(26px, 4vw, 40px)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  margin: '0 0 16px',
                  fontWeight: 700,
                  color: 'var(--paper)',
                }}
              >
                Doğrudan mühendis ile<br />
                sabit fiyatlı teklif alın.
              </h2>
              <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'rgba(244, 240, 230, 0.78)', margin: 0 }}>
                Aracı ajans komisyonları olmadan projenizi, bütçenizi ve teslimat takviminizi netleştirelim.
                24 saat içinde detaylı teknik şartname ve fiyat teklifi ile dönüş yapıyorum.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a
                href="mailto:muhammetatmaca79@gmail.com?subject=Proje Teklifi - Muhammet Atmaca"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px 20px',
                  borderRadius: '12px',
                  background: 'rgba(244, 240, 230, 0.08)',
                  border: '1px solid rgba(244, 240, 230, 0.16)',
                  color: 'var(--paper)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 600,
                  transition: 'background 0.2s ease',
                }}
              >
                <Mail size={18} style={{ color: 'var(--coral)' }} />
                <span>muhammetatmaca79@gmail.com</span>
              </a>

              <a
                href="https://wa.me/905432420822?text=Merhaba%2C%20yaz%C4%B1l%C4%B1m%20ve%20mobil%20uygulama%20hakk%C4%B1nda%20g%C3%B6r%C3%BC%C5%9Fmek%20istiyorum."
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px 20px',
                  borderRadius: '12px',
                  background: 'var(--cobalt)',
                  color: 'var(--paper)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 600,
                  boxShadow: '0 4px 12px rgba(25, 75, 223, 0.3)',
                }}
              >
                <MessageSquare size={18} />
                <span>WhatsApp ile Hızlı Mesaj Gönder</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sitelinks Directory */}
      <SitelinksDirectory />

      {/* Signature Portfolio Footer */}
      <footer className="footer">
        <div className="container-wide footer-inner">
          <span className="footer-note">
            © {new Date().getFullYear()} Muhammet Atmaca • {cityInfo ? `${cityInfo.name} Yazılım` : 'Mühendislik'}
          </span>
          <div className="footer-links">
            <Link href="/" className="footer-link">Portfolyo Ana Sayfa</Link>
            <Link href="/apps" className="footer-link">Mobil Uygulamalar (50+)</Link>
            <Link href="/web" className="footer-link">Web Sistemleri</Link>
            <Link href="/hizmet-bolgeleri" className="footer-link">Hizmet Bölgeleri (81 İl)</Link>
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
