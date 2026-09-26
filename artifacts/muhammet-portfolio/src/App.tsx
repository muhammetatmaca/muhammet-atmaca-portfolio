import { useEffect, useState, useMemo, lazy, Suspense } from 'react';
import { Route, Switch, Link, useLocation } from 'wouter';
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Download,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  MoveUpRight,
  Smartphone,
  X,
} from 'lucide-react';
import { KeycapsScene } from './components/KeycapsScene';
import RidgeParallax from './components/originkit/ui/ridge-parallax-base';
import { WEB_PROJECTS, CAREER_EXPERIENCES, EDUCATION_LIST, CV_METADATA } from './data/careerAndWeb';
import { MOBILE_APPS } from './data/mobileApps';
import { SERVICES_LIST } from './data/servicesFaq';
import { SEO } from './components/SEO';
import { SitelinksDirectory } from './components/SitelinksDirectory';
import { GlassCodeBlock } from './components/GlassCodeBlock';
import { FaqAccordion } from './components/FaqAccordion';
import { FooterSection4 } from './components/FooterSection4';
import { SEO_LANDING_PAGES } from './data/seoLandingPages';

const MobileAppsPage = lazy(() => import('./pages/MobileAppsPage').then((m) => ({ default: m.MobileAppsPage })));
const WebProjectsPage = lazy(() => import('./pages/WebProjectsPage').then((m) => ({ default: m.WebProjectsPage })));
const AcademicProjectsPage = lazy(() => import('./pages/AcademicProjectsPage').then((m) => ({ default: m.AcademicProjectsPage })));
const SeoLandingPage = lazy(() => import('./pages/SeoLandingPage').then((m) => ({ default: m.SeoLandingPage })));

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  return (
    <div className={`reveal ${delay ? `reveal-delay-${delay}` : ''} ${className}`}>
      {children}
    </div>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [workFilter, setWorkFilter] = useState<'all' | 'web' | 'mobile'>('all');
  const [cvNoticeOpen, setCvNoticeOpen] = useState(false);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const showcaseMobileApps = useMemo(() => {
    const topApps = MOBILE_APPS.slice(0, 24);
    return [...topApps, ...topApps];
  }, []);

  // Projects list based on filter
  const displayedProjects = workFilter === 'mobile'
    ? []
    : workFilter === 'web'
    ? WEB_PROJECTS
    : WEB_PROJECTS.slice(0, 3);

  const [location] = useLocation();

  const handleCvClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setCvNoticeOpen(true);
  };

  const seoMeta = useMemo(() => {
    if (location === '/services' || location === '/hizmetler') {
      return {
        title: 'Yazılım Hizmetleri & Fiyatlandırma SSS | Muhammet Atmaca',
        description: 'Mobil uygulama ve web sitesi geliştirme süreçleri, şeffaf fiyatlandırma, App Store & Google Play onay garantisi ve sıkça sorulan sorular.',
        canonicalUrl: 'https://muhammetatmaca.com.tr/services',
        keywords: [
          'Mobil Uygulama Fiyatları',
          'Web Sitesi Yaptırma Fiyatları',
          'Yazılım Hizmetleri',
          'App Store Yükleme Hizmeti',
          'Google Play Onay Danışmanlığı',
          'React Native Geliştirici',
        ],
      };
    }
    if (location === '/career' || location === '/kariyer') {
      return {
        title: 'Kariyer, Deneyim & Özgeçmiş (CV) | Muhammet Atmaca',
        description: '7+ yıllık savunma sanayii ve kurumsal yazılım mühendisliği kariyeri, teknoloji yetkinlikleri ve indirilebilir PDF CV.',
        canonicalUrl: 'https://muhammetatmaca.com.tr/career',
        keywords: [
          'Muhammet Atmaca CV',
          'Muhammet Atmaca Özgeçmiş',
          'Mobil Yazılım Mühendisi',
          'Savunma Sanayii Yazılım Deneyimi',
          'Kubernetes Ceph Mühendisi',
        ],
      };
    }
    if (location === '/contact' || location === '/iletisim') {
      return {
        title: 'İletişim & Ücretsiz Proje Teklifi | Muhammet Atmaca',
        description: 'Mobil uygulama ve web projeleriniz için ücretsiz ön analiz, bütçe teklifi ve doğrudan yazılım mühendisi iletişimi.',
        canonicalUrl: 'https://muhammetatmaca.com.tr/contact',
        keywords: [
          'Muhammet Atmaca İletişim',
          'Yazılım Teklifi Al',
          'Mobil Uygulama Yaptırmak İstiyorum',
          'Web Sitesi Teklifi',
          'Freelance Yazılımcı İletişim',
        ],
      };
    }
    return {
      title: 'Muhammet Atmaca — Mobil Uygulama & Web Geliştirme | Türkiye Geneli (81 İl) & Samsun',
      description: 'İstanbul, Ankara, İzmir, Bursa, Antalya, Samsun ve tüm Türkiye geneline 7 yılı aşkın deneyimle 50\'den fazla mobil uygulama ve ölçeklenebilir web sistemleri geliştiren Muhammet Atmaca\'nın portfolyosu.',
      canonicalUrl: 'https://muhammetatmaca.com.tr/',
      keywords: [
        'Mobil Uygulama Yaptırmak İstiyorum',
        'Web Sitesi Yaptırmak İstiyorum',
        'React Native Geliştirici Türkiye',
        'İstanbul Mobil Uygulama',
        'Ankara Mobil Yazılımcı',
        'İzmir React Native',
        'Bursa Mobil Uygulama',
        'Antalya Yazılım Geliştirme',
        'Samsun Mobil Yazılım',
        'Türkiye Geneli Mobil Geliştirme',
        '50+ Mobil Uygulama',
        'Freelance Mobil Yazılımcı',
      ],
    };
  }, [location]);

  return (
    <main className="portfolio-shell">
      <SEO
        title={seoMeta.title}
        description={seoMeta.description}
        canonicalUrl={seoMeta.canonicalUrl}
        keywords={seoMeta.keywords}
      />
      {/* Navigation matching original editorial style */}
      <nav className="nav-card" aria-label="Main navigation">
        <a href="#top" className="wordmark" onClick={closeMenu} data-testid="link-home">
          <span className="wordmark-mark">M</span>
          <span>Muhammet Atmaca <span className="wordmark-role">/ Software Engineer</span></span>
        </a>
        <div className="nav-links">
          <a href="#work" className="nav-link nav-link-active" data-testid="link-work">Çalışmalar</a>
          <a href="#services" className="nav-link" data-testid="link-services">Hizmetler & SSS</a>
          <Link href="/web" className="nav-link" data-testid="link-nav-web">Web Sistemleri</Link>
          <Link href="/apps" className="nav-link" data-testid="link-nav-apps">Mobil Uygulamalar</Link>
          <Link href="/academic" className="nav-link" data-testid="link-nav-academic">Akademik & AR-GE</Link>
          <a href="#career" className="nav-link" data-testid="link-career">Deneyim</a>
          <a href="#approach" className="nav-link" data-testid="link-approach">Yaklaşım</a>
          <a href="#about" className="nav-link" data-testid="link-about">Hakkımda</a>
          <button
            type="button"
            onClick={handleCvClick}
            className="nav-link"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            data-testid="link-cv-nav"
          >
            CV (PDF)
          </button>
          <a href="#contact" className="nav-cta" data-testid="link-contact-nav">
            İletişime geç <ArrowUpRight size={14} strokeWidth={1.8} />
          </a>
        </div>
        <button
          type="button"
          className="mobile-menu-button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          data-testid="button-mobile-menu"
        >
          {menuOpen ? <X size={21} strokeWidth={1.8} /> : <Menu size={21} strokeWidth={1.8} />}
        </button>
      </nav>
      {menuOpen && (
        <div className="mobile-nav">
          <a href="#work" className="nav-link" onClick={closeMenu} data-testid="link-mobile-work">Çalışmalar</a>
          <a href="#services" className="nav-link" onClick={closeMenu} data-testid="link-mobile-services">Hizmetler & SSS</a>
          <Link href="/web" className="nav-link" onClick={closeMenu} data-testid="link-mobile-web">Web Sistemleri</Link>
          <Link href="/apps" className="nav-link" onClick={closeMenu} data-testid="link-mobile-apps">Mobil Uygulamalar</Link>
          <Link href="/academic" className="nav-link" onClick={closeMenu} data-testid="link-mobile-academic">Akademik & AR-GE</Link>
          <a href="#career" className="nav-link" onClick={closeMenu} data-testid="link-mobile-career">Deneyim</a>
          <a href="#approach" className="nav-link" onClick={closeMenu} data-testid="link-mobile-approach">Yaklaşım</a>
          <a href="#about" className="nav-link" onClick={closeMenu} data-testid="link-mobile-about">Hakkımda</a>
          <button
            type="button"
            onClick={(e) => { closeMenu(); handleCvClick(e); }}
            className="nav-link"
            style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', padding: '13px 2px', borderBottom: '1px solid var(--line)' }}
            data-testid="link-mobile-cv"
          >
            Özgeçmişi İndir (PDF) <FileText size={13} style={{ display: 'inline', marginLeft: '4px' }} />
          </button>
          <a href="#contact" className="nav-link" onClick={closeMenu} data-testid="link-mobile-contact">İletişim <ArrowUpRight size={13} /></a>
        </div>
      )}

      {/* Hero section */}
      <div className="hero-landing-wrap">
        <section id="top" className="hero">
          {/* Compact WebGL signature animation in background */}
          <div className="home-ridge-banner" aria-label="Interactive web engineering animation">
            <RidgeParallax
              background="#f4f0e6"
              baseColor="#182033"
              accentColor="#2a5cdb"
              density={140}
              dotSize={320}
              speed={55}
              pointer={60}
              range={{ layers: 10, height: 155, roughness: 80, fall: 220, seed: 42 }}
              depth={{ parallax: 160, haze: 55, travelStart: 2200, travelEnd: 2200 }}
              style={{ width: '100%', height: '100%', minHeight: 0, minWidth: 0 }}
            />
          </div>

          <div className="container-wide hero-grid">
            <div>
              <Reveal><div className="eyebrow">Mobil &amp; Yazılım Mühendisi / Bayburt &amp; Samsun</div></Reveal>
              <Reveal delay={1}>
                <h1>Faydalı<br /><em>fikirler.</em><br /><span className="hero-phrase">Özenle hayata</span><br />geçirildi.</h1>
              </Reveal>
              <Reveal delay={2}>
                <p className="hero-lede" style={{ color: '#000000', fontWeight: 600 }}>
                  Ben Muhammet — karmaşık ürün fikirlerini insanların keyifle kullandığı, anlaşılır ve güvenilir yazılımlara dönüştürüyorum. VirelonSoft çatısı altında; Samsun ve Bayburt merkezli olarak İstanbul, Ankara, İzmir başta olmak üzere tüm Türkiye'ye (81 il) ve yurt dışına 7 yılı aşkın süredir ölçeklenebilir mobil uygulamalar (50+), yapay zeka & bilgisayarlı görü sistemleri ve web platformları geliştiriyorum.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <div className="hero-actions">
                  <a href="#work" className="button-primary hero-action-primary" data-testid="button-see-work">
                    Çalışmalarımı Gör <ArrowDown size={15} />
                  </a>
                  <div className="hero-actions-secondary">
                    <Link href="/apps" className="button-secondary hero-directory-button" data-testid="button-see-apps">
                      Mobil Uygulamalar (50+) <ArrowUpRight size={14} />
                    </Link>
                    <button
                      type="button"
                      onClick={handleCvClick}
                      className="button-secondary hero-cv-button flex items-center gap-1.5"
                    >
                      <FileText size={13} /> Özgeçmiş (CV)
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
            <Reveal className="hero-aside" delay={2}>
              <div className="key-stage-3d" aria-label="3D Interactive mechanical keyboard">
                <KeycapsScene />
              </div>
              <div className="hero-caption">GitHub, LinkedIn, Medium ve e-posta<br />için tuşlara tıkla.</div>
            </Reveal>
          </div>
          <div className="container-wide scroll-cue">Keşfetmek için kaydırın</div>
        </section>

        {/* Marquee band */}
        <div className="marquee-band" aria-hidden="true">
          <div className="marquee-track">
            {Array.from({ length: 2 }).map((_, index) => (
              <div className="marquee-item" key={index}>
                <span>YOLO (v5 / v8 / v11) · Nesne Tespiti & Görüntü İşleme</span><i />
                <span>ResNet (18 / 50 / 101) · Evrişimli Sinir Ağları (CNN)</span><i />
                <span>PyTorch · Deep Learning · Computer Vision</span><i />
                <span>AI Model Eğitimi & Optimizasyonu · CUDA</span><i />
                <span>ASP.NET Core · React Native · Flutter</span><i />
                <span>Node.js · Spring · TypeScript</span><i />
                <span>Microservices Architecture</span><i />
                <span>Apache Kafka · RabbitMQ · Redis</span><i />
                <span>Docker · Kubernetes · DevOps</span><i />
                <span>AWS · Azure · Google Cloud</span><i />
                <span>SQL · Cassandra · Entity Framework</span><i />
                <span>LLM Fine-Tuning & Prompt Engineering</span><i />
                <span>Hive · Spark · Hadoop</span><i />
                <span>Jenkins · Grafana · Automation</span><i />
                <span>Ceph · Virtualization · Linux</span><i />
                <span>Git · GitHub · Version Control</span><i />
                <span>REST APIs · System Integration</span><i />
                <span>LoRaWAN · Edge AI · Gömülü Sistemler</span><i />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Work section with Web & Mobile integration */}
      <section id="work" className="section container-wide work-section">
        <Reveal className="section-heading">
          <div>
            <div className="eyebrow">Seçili çalışmalar ve platformlar</div>
            <h2>Hayata geçirdiğim<br />birkaç çalışma.</h2>
          </div>
          <p>Web sistemleri ve 50’den fazla yayındaki mobil uygulamadan oluşan gerçek üretim ürünleri.</p>
        </Reveal>

        {/* Editorial Filter Tabs */}
        <Reveal delay={1}>
          <div className="work-filter-tabs">
            <button
              type="button"
              onClick={() => setWorkFilter('all')}
              className={`work-filter-btn ${workFilter === 'all' ? 'is-active' : ''}`}
            >
              Tüm çalışmalar
            </button>
            <button
              type="button"
              onClick={() => setWorkFilter('mobile')}
              className={`work-filter-btn ${workFilter === 'mobile' ? 'is-active' : ''}`}
            >
              Mobil uygulamalar (50+)
            </button>
            <button
              type="button"
              onClick={() => setWorkFilter('web')}
              className={`work-filter-btn ${workFilter === 'web' ? 'is-active' : ''}`}
            >
              Web platformları ({WEB_PROJECTS.length})
            </button>
          </div>
        </Reveal>

        <Reveal className="work-intro" delay={1}>
          <p className="display-line">En iyi arayüzler ve mühendislik çözümleri dikkat istemez. Her düşünülmüş ayrıntıyla güven kazanır.</p>
          <div className="project-list">
            <Link href="/web" className="project-list-item" data-testid="link-project-web-catalog">
              <span className="list-no">01</span><span className="list-title">Web sistemleri dizini</span><span className="list-meta">Next.js & Full-stack</span><MoveUpRight size={16} />
            </Link>
            <Link href="/apps" className="project-list-item" data-testid="link-project-mobile-catalog">
              <span className="list-no">02</span><span className="list-title">Mobil uygulamalar dizini</span><span className="list-meta">50+ React Native uygulaması</span><MoveUpRight size={16} />
            </Link>
            <Link href="/academic" className="project-list-item" data-testid="link-academic-quick">
              <span className="list-no">03</span><span className="list-title">Akademik & AR-GE dizini</span><span className="list-meta">9 bilimsel araştırma ve 3D sahne</span><MoveUpRight size={16} />
            </Link>
            <a href="#career" className="project-list-item" data-testid="link-project-career-quick">
              <span className="list-no">04</span><span className="list-title">Kariyer & VirelonSoft</span><span className="list-meta">7+ yıllık deneyim</span><MoveUpRight size={16} />
            </a>
          </div>
        </Reveal>

        {/* Mobile Directory Highlight Card (When mobile filter or all is active) */}
        {(workFilter === 'all' || workFilter === 'mobile') && (
          <Reveal className="mobile-specialization-reveal" delay={1}>
            <div
              className="mobile-specialization-card"
              style={{
                padding: '32px',
                borderRadius: '17px',
                border: '1px solid rgba(24, 32, 51, 0.16)',
                background: '#d5e1fa',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '24px',
              }}
            >
              <div style={{ maxWidth: '520px' }}>
                <div style={{ color: 'var(--cobalt)', font: '10px/1 var(--app-font-mono)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>
                  Mobil uzmanlık
                </div>
                <h3 style={{ margin: 0, color: 'var(--ink)', font: '600 clamp(24px, 4vw, 36px)/1.05 var(--font-display)', letterSpacing: '-0.06em' }}>
                  50+ üretim mobil uygulaması.
                </h3>
                <p style={{ margin: '8px 0 0', color: 'rgba(24, 32, 51, 0.72)', fontSize: '13px', lineHeight: 1.5 }}>
                  React Native, Flutter, Swift ve Kotlin ile geliştirilen 50+ üretim mobil uygulaması. Finans, e-ticaret, sosyal, sağlık ve yapay zeka alanlarında kategori ve teknolojiye göre filtrelenebilir.
                </p>
              </div>
              <Link href="/apps" className="button-primary" style={{ padding: '14px 22px' }}>
                Mobil uygulama dizinini aç (50+) <ArrowUpRight size={14} />
              </Link>
            </div>

            {/* Canlı akan mobil uygulama ikonları ve açıklamaları vitrini (Marquee) */}
            <div className="mobile-icons-marquee" aria-label="Mobil uygulamalar ikon vitrini">
              <div className="mobile-icons-track">
                {showcaseMobileApps.map((app, idx) => (
                  <Link
                    key={`${app.id}-${idx}`}
                    href="/apps"
                    className="mobile-icon-card"
                    title={`${app.name} — ${app.tagline}`}
                  >
                    {/* Top row: App Icon and Category badge */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '10px' }}>
                      {app.iconUrl ? (
                        <img
                          src={app.iconUrl}
                          alt={`${app.name} — ${app.tagline} | Muhammet Atmaca Mobil Uygulama`}
                          className="mobile-icon-img"
                          loading="lazy"
                          decoding="async"
                          width={46}
                          height={46}
                          style={{
                            width: '46px',
                            height: '46px',
                            borderRadius: '11px',
                            objectFit: 'cover',
                            boxShadow: '0 3px 8px rgba(24, 32, 51, 0.12)',
                            border: '1px solid rgba(24, 32, 51, 0.08)',
                            flexShrink: 0,
                            transition: 'transform 0.3s ease',
                          }}
                        />
                      ) : (
                        <div
                          className="mobile-icon-img"
                          style={{
                            width: '46px',
                            height: '46px',
                            borderRadius: '11px',
                            background: 'var(--cobalt)',
                            color: '#ffffff',
                            display: 'grid',
                            placeItems: 'center',
                            fontSize: '18px',
                            fontWeight: 700,
                            boxShadow: '0 3px 8px rgba(24, 32, 51, 0.12)',
                            flexShrink: 0,
                            transition: 'transform 0.3s ease',
                          }}
                        >
                          {app.iconLetter || 'M'}
                        </div>
                      )}
                      <span
                        style={{
                          font: '500 9px/1 var(--app-font-mono)',
                          padding: '3px 7px',
                          borderRadius: '4px',
                          background: 'rgba(24, 32, 51, 0.06)',
                          color: 'rgba(24, 32, 51, 0.65)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {app.category}
                      </span>
                    </div>

                    {/* App Title */}
                    <div
                      style={{
                        font: '600 13px/1.2 var(--font-display)',
                        color: 'var(--ink)',
                        marginBottom: '4px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        width: '100%',
                      }}
                    >
                      {app.name}
                    </div>

                    {/* App Short Description / Tagline */}
                    <p
                      style={{
                        margin: 0,
                        font: '400 11px/1.38 var(--font-body, system-ui, sans-serif)',
                        color: 'rgba(24, 32, 51, 0.68)',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        width: '100%',
                        flex: 1,
                      }}
                    >
                      {app.tagline}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        {/* Project Cards (Web Projects) */}
        {(workFilter === 'all' || workFilter === 'web') && (
          <div className="project-stack">
            {displayedProjects.map((project, idx) => (
              <Reveal key={project.id} delay={idx}>
                <article className="project-card" style={{ background: project.cardBg || '#e7e5dd' }}>
                  <div className="project-topline">
                    <span className="project-tag">{project.no} — {project.category}</span>
                    <span className="project-year">{project.year}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-graphic"><span /></div>
                  <a
                    href={project.githubUrl || 'https://github.com/muhammetatmaca'}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                    data-testid={`link-project-${project.id}`}
                  >
                    Projeyi İncele <ArrowUpRight size={14} />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      {/* Interactive Architecture & Code Quality Terminal */}
      <section className="section container-wide" style={{ paddingTop: '20px', paddingBottom: '70px' }} aria-label="Mühendislik Standartları ve Canlı Mimari">
        <Reveal className="section-heading" style={{ textAlign: 'center', margin: '0 auto 36px', maxWidth: '720px' }}>
          <div>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Temiz Kod ve Açık Mimari</div>
            <h2 style={{ fontSize: 'clamp(26px, 4.5vw, 40px)', margin: '0 0 14px' }}>
              Mühendislik Standartları.<br />
              <em>Şeffaf ve Anlaşılır.</em>
            </h2>
            <p style={{ margin: '0 auto', fontSize: '15px', color: 'rgba(24, 32, 51, 0.76)', lineHeight: 1.6 }}>
              Karmaşık teknolojileri sade, test edilebilir ve güven veren yapılara dönüştürüyorum. İşte her projemde taviz vermediğim üretim standartları.
            </p>
          </div>
        </Reveal>
        <Reveal delay={1} style={{ maxWidth: '940px', margin: '0 auto' }}>
          <GlassCodeBlock initialTabId="mobile" />
        </Reveal>
      </section>

      {/* Services & Search Intent FAQ Section */}
      <section id="services" className="section services-section container-wide">
        <Reveal className="section-heading">
          <div>
            <div className="eyebrow">Hizmetler & Sıkça Sorulan Sorular</div>
            <h2>Fikrinizi Canlıya<br />Taşıyalım.</h2>
          </div>
          <span className="section-number">02 / 08</span>
        </Reveal>

        {/* Nationwide 81-city Service Coverage Banner */}
        <Reveal>
          <div
            style={{
              padding: '14px 20px',
              borderRadius: '12px',
              background: 'rgba(25, 75, 223, 0.05)',
              border: '1px solid rgba(25, 75, 223, 0.16)',
              marginBottom: '36px',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '10px',
              font: '500 13px/1.5 var(--font-sans)',
              color: 'var(--ink)',
            }}
          >
            <span
              style={{
                font: '700 10px/1 var(--app-font-mono)',
                color: '#ffffff',
                background: 'var(--cobalt)',
                padding: '4px 8px',
                borderRadius: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Hizmet Alanı
            </span>
            <span>
              Samsun merkezli, <strong>Türkiye Geneli (81 İl)</strong> ve yurt dışına %100 uzaktan (remote) anahtar teslim yazılım geliştirme.
            </span>
            <span style={{ color: 'rgba(24, 32, 51, 0.55)', fontSize: '12px' }}>
              (İstanbul · Ankara · İzmir · Bursa · Antalya · Kocaeli · Adana · Gaziantep · Konya ve tüm şehirler)
            </span>
          </div>
        </Reveal>

        {/* Services Cards */}
        <div className="services-grid">
          {SERVICES_LIST.map((service, index) => (
            <Reveal key={service.id} delay={index === 0 ? 0 : index === 1 ? 1 : 2}>
              <article className="service-card" data-testid={`service-card-${service.id}`}>
                <div className="service-card-top">
                  <span className="service-badge">0{index + 1}</span>
                  <h3 className="service-title">{service.title}</h3>
                </div>
                <p className="service-tagline">{service.tagline}</p>
                <p className="service-desc">{service.description}</p>

                <div className="service-deliverables">
                  <div className="deliverables-title">Neler Teslim Ediyorum:</div>
                  <ul className="deliverables-list">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="deliverable-item">
                        <Check size={14} className="deliverable-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-tech-tags">
                  {service.tech.map((t) => (
                    <span key={t} className="service-tech-tag">{t}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* High-Intent FAQ Section */}
        <div className="services-faq-block">
          <Reveal className="faq-lead">
            <div className="eyebrow">Sıkça Sorulan Sorular</div>
            <h3 className="faq-main-title">Mobil Uygulama & Web Sitesi Yaptırma Rehberi</h3>
            <p className="faq-main-sub">
              Süreç, maliyet, iOS & Android mağaza onayları ve Samsun / uzaktan çalışma modeli hakkında merak edilenler:
            </p>
          </Reveal>

          <Reveal delay={1}>
            <FaqAccordion defaultOpenId="01" />
          </Reveal>

          {/* Direct CTA Banner */}
          <Reveal delay={1}>
            <div className="services-cta-banner">
              <div className="services-cta-copy">
                <h4>Mobil uygulama veya web sitesi yaptırmak mı istiyorsunuz?</h4>
                <p>
                  Projenizin mimarisini, takvimini ve bütçesini sürprizsiz planlayalım. Samsun veya uzaktan tüm Türkiye geneline hizmet veriyorum.
                </p>
              </div>
              <a
                href="#contact"
                className="button-primary services-cta-btn"
                data-testid="button-services-cta"
              >
                Ücretsiz Ön Değerlendirme & Teklif Al <ArrowUpRight size={15} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Approach section */}
      <section id="approach" className="section approach">
        <div className="container-wide">
          <Reveal className="section-heading">
            <div><div className="eyebrow">Nasıl Çalışırım</div><h2>Önce anla.<br />Kusursuz inşa et.</h2></div>
            <p>İyi yazılım, doğru soruyu sormakla başlar.</p>
          </Reveal>
          <div className="approach-grid">
            <Reveal>
              <div className="approach-copy">Karmaşayı eler, geriye sadece <span>akıcı ve çalışan</span> çözümler bırakırım.</div>
            </Reveal>
            <Reveal className="principles" delay={1}>
              <div className="principle"><span className="principle-no">01</span><div><strong>Doğru problemi bul</strong><p>Koda başlamadan önce ihtiyacı netleştir.</p></div></div>
              <div className="principle"><span className="principle-no">02</span><div><strong>Hızlı prototiple</strong><p>Fikirleri hızla çalışan bir deneyime dönüştür.</p></div></div>
              <div className="principle"><span className="principle-no">03</span><div><strong>Sağlam bırak</strong><p>Ölçeklenebilir mimari ve temiz kod teslim et.</p></div></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities section */}
      <section id="capabilities" className="section capabilities-section container-wide">
        <Reveal className="section-heading">
          <div><div className="eyebrow">Yetkinlikler</div><h2>İlk taslaktan<br />son detaya.</h2></div>
          <span className="section-number">03 / 08</span>
        </Reveal>
        <div className="capability-grid">
          <Reveal><p className="capability-lede">Problemi kavramaktan hızlı prototipe, son %5'lik kusursuzluk hissine kadar tüm süreci uçtan uca sahiplenirim.</p></Reveal>
          <Reveal className="capability-list" delay={1}>
            <div className="capability-row"><b>01</b><h3>React Native & Flutter</h3><span>Çok platformlu mobil mimari</span></div>
            <div className="capability-row"><b>02</b><h3>Native Swift & Kotlin</h3><span>iOS & Android yerel mühendislik</span></div>
            <div className="capability-row"><b>03</b><h3>Web Sistemleri & Next.js</h3><span>Full-stack modern altyapı</span></div>
            <div className="capability-row"><b>04</b><h3>Arayüz & Etkileşim</h3><span>60 FPS akıcı jest fiziği</span></div>
            <div className="capability-row"><b>05</b><h3>Teknik Liderlik</h3><span>Ölçekleme ve canlıya alma</span></div>
          </Reveal>
        </div>
      </section>

      {/* New Career & Experience section */}
      <section id="career" className="section career-section container-wide">
        <Reveal className="section-heading">
          <div>
            <div className="eyebrow">Kariyer & Deneyim</div>
            <h2>Değer kattığım<br />ekipler ve projeler.</h2>
          </div>
          <span className="section-number">04 / 08</span>
        </Reveal>
        <div className="career-grid">
          <Reveal className="career-lead">
            <p>
              7 yılı aşkın süredir üretim ortamında çalışan yazılımlar geliştiriyorum. Web ve mobil platformlarda hızlı ürün geliştirmeyi, sağlam ve sürdürülebilir mimari temellerle dengeliyorum.
            </p>

            {/* CV Download Card */}
            <div className="cv-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--cobalt)', marginBottom: '8px' }}>
                <FileText size={16} />
                <span style={{ font: '500 11px/1 var(--app-font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Özgeçmiş (CV)
                </span>
              </div>
              <div className="cv-box-title">Muhammet Atmaca</div>
              <div className="cv-box-meta">{CV_METADATA.fileSize} • {CV_METADATA.lastUpdated}</div>
              <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                <a
                  href="/muhammetatmacacv.pdf"
                  download="Muhammet_Atmaca_CV.pdf"
                  className="button-primary"
                  style={{ flex: 1, justifyContent: 'center', textAlign: 'center', display: 'flex', alignItems: 'center', gap: '6px', padding: '12px 14px' }}
                  data-testid="button-download-cv-card"
                >
                  <Download size={14} /> PDF İndir
                </a>
                <button
                  type="button"
                  onClick={handleCvClick}
                  className="button-quiet"
                  style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '12px 14px', cursor: 'pointer' }}
                  title="Detaylar ve E-posta ile Talep Et"
                >
                  <Mail size={14} /> İste
                </button>
              </div>
            </div>

            {/* Education Card */}
            <div className="cv-box" style={{ marginTop: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--cobalt)', marginBottom: '14px' }}>
                <GraduationCap size={16} />
                <span style={{ font: '500 11px/1 var(--app-font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Eğitim
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {EDUCATION_LIST.map((edu, index) => (
                  <div key={edu.id} style={{ borderTop: index > 0 ? '1px solid var(--line)' : 'none', paddingTop: index > 0 ? '12px' : '0' }}>
                    <div style={{ font: '600 14px/1.2 var(--font-display)', color: 'var(--ink)' }}>
                      {edu.institution}
                    </div>
                    <div style={{ font: '400 12px/1.4 var(--font-body)', color: 'rgba(24, 32, 51, 0.72)', marginTop: '3px' }}>
                      {edu.degree} {edu.field ? `• ${edu.field}` : ''}
                    </div>
                    <div style={{ font: '500 10px/1 var(--app-font-mono)', color: 'rgba(24, 32, 51, 0.45)', marginTop: '4px' }}>
                      {edu.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Career timeline ledger */}
          <Reveal className="career-list" delay={1}>
            {CAREER_EXPERIENCES.map((exp) => (
              <div key={exp.id} className="career-item">
                <div className="career-period">{exp.period}</div>
                <h3 className="career-role">{exp.role}</h3>
                <div className="career-company">{exp.company} • {exp.location}</div>
                <p className="career-desc">{exp.description}</p>
                <div className="career-tags">
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="career-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* About section */}
      <section id="about" className="section about-section container-wide">
        <Reveal className="about-grid">
          <div className="about-title">Sistemlerin<br />arkasındaki<br /><em>mühendis.</em></div>
          <div className="about-copy">
            <p>Yazılımı sadece kod yazmaktan ibaret görmüyorum; fikirleri sıfırdan çalışan, ölçeklenen ve insanların gerçekten kullandığı ürünlere dönüştürmeyi seviyorum.</p>
            <p>Savunma sanayiindeki otonom kontrol yazılımlarından mağazalardaki 50'den fazla mobil uygulamaya kadar uzanan süreçte odağım hep aynı: Karmaşık problemleri sağlam, performanslı ve sade mimarilerle çözmek.</p>
            <span className="currently"><Check size={12} /> Yeni projelere ve iş birliklerine açık</span>
          </div>
        </Reveal>
      </section>

      {/* Contact section */}
      <section id="contact" className="contact-section">
        <div className="container-wide">
          <Reveal className="contact-wrap">
            <div><div className="eyebrow">Çözülecek bir problem mi var?</div><h2 className="contact-title">Birlikte hayata<br />geçirelim.</h2></div>
            <div className="contact-side">
              <p>Geliştirmek istediğiniz fikri, karşılaştığınız teknik engelleri veya merak ettiklerinizi paylaşın. En kısa sürede doğrudan yanıtlayacağım.</p>
              <a href="mailto:muhammetatmaca79@gmail.com" className="contact-mail" data-testid="link-email-contact">İletişime geç <Mail size={14} /></a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Google Sitelinks & Quick Sub-Pages Directory */}
      <SitelinksDirectory />

      {/* Editorial Footer Section 4 (2-card split layout) */}
      <FooterSection4 onOpenCv={() => setCvNoticeOpen(true)} />

      {/* CV Download / Modal Notice */}
      {cvNoticeOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            background: 'rgba(24, 32, 51, 0.55)',
            backdropFilter: 'blur(8px)',
          }}
          onClick={() => setCvNoticeOpen(false)}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '460px',
              maxHeight: 'calc(100svh - 32px)',
              overflowY: 'auto',
              borderRadius: '18px',
              background: 'var(--paper)',
              border: '1px solid rgba(24, 32, 51, 0.18)',
              boxShadow: '0 25px 60px rgba(24, 32, 51, 0.22)',
              padding: 'clamp(20px, 5vw, 32px)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setCvNoticeOpen(false)}
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                width: '30px',
                height: '30px',
                borderRadius: '8px',
                border: '1px solid var(--line)',
                background: 'transparent',
                display: 'grid',
                placeItems: 'center',
                cursor: 'pointer',
                color: 'var(--ink)',
              }}
              aria-label="Close"
            >
              <X size={15} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '9px',
                  background: 'var(--cobalt)',
                  color: 'var(--paper)',
                  display: 'grid',
                  placeItems: 'center',
                  font: '600 16px/1 var(--app-font-mono)',
                  boxShadow: '2px 2px 0 var(--ink)',
                }}
              >
                <FileText size={18} />
              </div>
              <div>
                <div style={{ color: 'var(--cobalt)', font: '10px/1 var(--app-font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Özgeçmiş Belgesi
                </div>
                <h3 style={{ margin: 0, color: 'var(--ink)', font: '600 20px/1.1 var(--font-display)', letterSpacing: '-0.04em' }}>
                  Muhammet Atmaca — CV
                </h3>
              </div>
            </div>

            <p style={{ color: 'rgba(24, 32, 51, 0.72)', fontSize: '13px', lineHeight: 1.55, marginBottom: '20px' }}>
              Özgeçmiş; savunma sanayii, kurumsal altyapı deneyimlerini, 50+ mobil uygulamayı ve teknik uzmanlık profilini içerir (PDF formatı).
            </p>

            <div
              style={{
                padding: '12px 14px',
                borderRadius: '8px',
                background: '#e7e5dd',
                border: '1px solid var(--line)',
                font: '500 11px/1 var(--app-font-mono)',
                color: 'rgba(24, 32, 51, 0.65)',
                marginBottom: '24px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>Format: PDF</span>
              <span>Boyut: 252 KB</span>
              <span>Güncel: 2025</span>
            </div>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', alignItems: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => setCvNoticeOpen(false)}
                className="button-quiet"
                style={{ cursor: 'pointer', padding: '10px 14px' }}
              >
                Vazgeç
              </button>
              <a
                href="mailto:muhammetatmaca79@gmail.com?subject=Özgeçmiş Talebi - Muhammet Atmaca"
                className="button-quiet"
                style={{ padding: '10px 14px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                data-testid="link-request-cv-email"
              >
                <Mail size={14} /> E-posta ile İste
              </a>
              <a
                href="/muhammetatmacacv.pdf"
                download="Muhammet_Atmaca_CV.pdf"
                className="button-primary"
                style={{ padding: '12px 18px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                onClick={() => setCvNoticeOpen(false)}
                data-testid="link-download-cv-file"
              >
                <Download size={14} /> PDF İndir
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    if (location === '/services' || location === '/hizmetler') {
      const el = document.getElementById('services');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    if (location === '/career' || location === '/kariyer') {
      const el = document.getElementById('career');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    if (location === '/contact' || location === '/iletisim') {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location]);

  return null;
}

function SeoPageWrapper({ params }: { params: { slug: string } }) {
  const pageData = SEO_LANDING_PAGES[params.slug];
  if (!pageData) {
    return <Home />;
  }
  return <SeoLandingPage pageData={pageData} />;
}

function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <>
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="min-h-screen bg-[#f4f0e6] flex flex-col items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-stone-800 border-t-transparent animate-spin" />
            <span className="text-xs font-mono text-stone-600">Yükleniyor...</span>
          </div>
        }
      >
        <Switch>
          <Route path="/academic" component={AcademicProjectsPage} />
          <Route path="/akademik" component={AcademicProjectsPage} />
          <Route path="/web" component={WebProjectsPage} />
          <Route path="/apps" component={MobileAppsPage} />
          <Route path="/services" component={Home} />
          <Route path="/hizmetler" component={Home} />
          <Route path="/career" component={Home} />
          <Route path="/kariyer" component={Home} />
          <Route path="/contact" component={Home} />
          <Route path="/iletisim" component={Home} />
          <Route path="/:slug" component={SeoPageWrapper} />
          <Route path="/" component={Home} />
          <Route component={Home} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
