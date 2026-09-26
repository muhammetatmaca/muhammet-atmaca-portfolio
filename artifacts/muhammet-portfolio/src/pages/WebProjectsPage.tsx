import { useState, useMemo, useEffect } from 'react';
import { Link } from 'wouter';
import RidgeParallax from '../components/originkit/ui/ridge-parallax-base';
import LiquidGlassCluster from '../components/originkit/ui/glass-icon-custom-style';
import { SEO } from '../components/SEO';
import { SitelinksDirectory } from '../components/SitelinksDirectory';
import { LogoLoop, type LogoItem } from '../components/LogoLoop';
import { GlassCodeBlock } from '../components/GlassCodeBlock';
import { FooterSection4 } from '../components/FooterSection4';
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiDotnet,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiRedis,
  SiRabbitmq,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiLinux,
  SiNginx,
  SiGit,
  SiVite,
  SiMongodb,
} from 'react-icons/si';
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  ExternalLink,
  Github,
  LayoutGrid,
  Linkedin,
  List,
  MoveUpRight,
  Search,
  X,
  Zap,
} from 'lucide-react';
import { WEB_PROJECTS, type WebProject } from '../data/careerAndWeb';

const WEB_TECH_LOGOS: LogoItem[] = [
  {
    node: (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', border: '1px solid rgba(24, 32, 51, 0.12)', background: 'rgba(250, 248, 242, 0.9)', boxShadow: '0 2px 6px rgba(24, 32, 51, 0.04)', whiteSpace: 'nowrap' }}>
        <SiNextdotjs style={{ width: '18px', height: '18px', color: '#000000' }} />
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>Next.js</span>
      </div>
    ),
    title: 'Next.js',
  },
  {
    node: (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', border: '1px solid rgba(24, 32, 51, 0.12)', background: 'rgba(250, 248, 242, 0.9)', boxShadow: '0 2px 6px rgba(24, 32, 51, 0.04)', whiteSpace: 'nowrap' }}>
        <SiReact style={{ width: '18px', height: '18px', color: '#61DAFB' }} />
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>React 19</span>
      </div>
    ),
    title: 'React',
  },
  {
    node: (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', border: '1px solid rgba(24, 32, 51, 0.12)', background: 'rgba(250, 248, 242, 0.9)', boxShadow: '0 2px 6px rgba(24, 32, 51, 0.04)', whiteSpace: 'nowrap' }}>
        <SiTypescript style={{ width: '18px', height: '18px', color: '#3178C6' }} />
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>TypeScript</span>
      </div>
    ),
    title: 'TypeScript',
  },
  {
    node: (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', border: '1px solid rgba(24, 32, 51, 0.12)', background: 'rgba(250, 248, 242, 0.9)', boxShadow: '0 2px 6px rgba(24, 32, 51, 0.04)', whiteSpace: 'nowrap' }}>
        <SiNodedotjs style={{ width: '18px', height: '18px', color: '#5FA04E' }} />
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>Node.js</span>
      </div>
    ),
    title: 'Node.js',
  },
  {
    node: (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', border: '1px solid rgba(24, 32, 51, 0.12)', background: 'rgba(250, 248, 242, 0.9)', boxShadow: '0 2px 6px rgba(24, 32, 51, 0.04)', whiteSpace: 'nowrap' }}>
        <SiDotnet style={{ width: '18px', height: '18px', color: '#512BD4' }} />
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>ASP.NET Core</span>
      </div>
    ),
    title: 'ASP.NET Core',
  },
  {
    node: (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', border: '1px solid rgba(24, 32, 51, 0.12)', background: 'rgba(250, 248, 242, 0.9)', boxShadow: '0 2px 6px rgba(24, 32, 51, 0.04)', whiteSpace: 'nowrap' }}>
        <SiDocker style={{ width: '18px', height: '18px', color: '#2496ED' }} />
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>Docker</span>
      </div>
    ),
    title: 'Docker',
  },
  {
    node: (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', border: '1px solid rgba(24, 32, 51, 0.12)', background: 'rgba(250, 248, 242, 0.9)', boxShadow: '0 2px 6px rgba(24, 32, 51, 0.04)', whiteSpace: 'nowrap' }}>
        <SiKubernetes style={{ width: '18px', height: '18px', color: '#326CE5' }} />
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>Kubernetes</span>
      </div>
    ),
    title: 'Kubernetes',
  },
  {
    node: (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', border: '1px solid rgba(24, 32, 51, 0.12)', background: 'rgba(250, 248, 242, 0.9)', boxShadow: '0 2px 6px rgba(24, 32, 51, 0.04)', whiteSpace: 'nowrap' }}>
        <SiPostgresql style={{ width: '18px', height: '18px', color: '#4169E1' }} />
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>PostgreSQL</span>
      </div>
    ),
    title: 'PostgreSQL',
  },
  {
    node: (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', border: '1px solid rgba(24, 32, 51, 0.12)', background: 'rgba(250, 248, 242, 0.9)', boxShadow: '0 2px 6px rgba(24, 32, 51, 0.04)', whiteSpace: 'nowrap' }}>
        <SiRedis style={{ width: '18px', height: '18px', color: '#FF4438' }} />
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>Redis</span>
      </div>
    ),
    title: 'Redis',
  },
  {
    node: (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', border: '1px solid rgba(24, 32, 51, 0.12)', background: 'rgba(250, 248, 242, 0.9)', boxShadow: '0 2px 6px rgba(24, 32, 51, 0.04)', whiteSpace: 'nowrap' }}>
        <SiRabbitmq style={{ width: '18px', height: '18px', color: '#FF6600' }} />
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>RabbitMQ</span>
      </div>
    ),
    title: 'RabbitMQ',
  },
  {
    node: (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', border: '1px solid rgba(24, 32, 51, 0.12)', background: 'rgba(250, 248, 242, 0.9)', boxShadow: '0 2px 6px rgba(24, 32, 51, 0.04)', whiteSpace: 'nowrap' }}>
        <SiTailwindcss style={{ width: '18px', height: '18px', color: '#06B6D4' }} />
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>Tailwind CSS</span>
      </div>
    ),
    title: 'Tailwind CSS',
  },
  {
    node: (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', border: '1px solid rgba(24, 32, 51, 0.12)', background: 'rgba(250, 248, 242, 0.9)', boxShadow: '0 2px 6px rgba(24, 32, 51, 0.04)', whiteSpace: 'nowrap' }}>
        <SiGraphql style={{ width: '18px', height: '18px', color: '#E10098' }} />
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>GraphQL</span>
      </div>
    ),
    title: 'GraphQL',
  },
  {
    node: (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', border: '1px solid rgba(24, 32, 51, 0.12)', background: 'rgba(250, 248, 242, 0.9)', boxShadow: '0 2px 6px rgba(24, 32, 51, 0.04)', whiteSpace: 'nowrap' }}>
        <SiPython style={{ width: '18px', height: '18px', color: '#3776AB' }} />
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>Python</span>
      </div>
    ),
    title: 'Python',
  },
  {
    node: (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', border: '1px solid rgba(24, 32, 51, 0.12)', background: 'rgba(250, 248, 242, 0.9)', boxShadow: '0 2px 6px rgba(24, 32, 51, 0.04)', whiteSpace: 'nowrap' }}>
        <SiLinux style={{ width: '18px', height: '18px', color: '#FCC624' }} />
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>Linux</span>
      </div>
    ),
    title: 'Linux',
  },
  {
    node: (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', border: '1px solid rgba(24, 32, 51, 0.12)', background: 'rgba(250, 248, 242, 0.9)', boxShadow: '0 2px 6px rgba(24, 32, 51, 0.04)', whiteSpace: 'nowrap' }}>
        <SiNginx style={{ width: '18px', height: '18px', color: '#009639' }} />
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>Nginx</span>
      </div>
    ),
    title: 'Nginx',
  },
  {
    node: (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', border: '1px solid rgba(24, 32, 51, 0.12)', background: 'rgba(250, 248, 242, 0.9)', boxShadow: '0 2px 6px rgba(24, 32, 51, 0.04)', whiteSpace: 'nowrap' }}>
        <SiMongodb style={{ width: '18px', height: '18px', color: '#47A248' }} />
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>MongoDB</span>
      </div>
    ),
    title: 'MongoDB',
  },
  {
    node: (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', border: '1px solid rgba(24, 32, 51, 0.12)', background: 'rgba(250, 248, 242, 0.9)', boxShadow: '0 2px 6px rgba(24, 32, 51, 0.04)', whiteSpace: 'nowrap' }}>
        <SiVite style={{ width: '18px', height: '18px', color: '#646CFF' }} />
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>Vite</span>
      </div>
    ),
    title: 'Vite',
  },
  {
    node: (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', border: '1px solid rgba(24, 32, 51, 0.12)', background: 'rgba(250, 248, 242, 0.9)', boxShadow: '0 2px 6px rgba(24, 32, 51, 0.04)', whiteSpace: 'nowrap' }}>
        <SiGit style={{ width: '18px', height: '18px', color: '#F05032' }} />
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>Git</span>
      </div>
    ),
    title: 'Git',
  },
];

const WEB_CATEGORIES = [
  'All',
  'B2B / E-Commerce',
  'Service Platform',
  'Automation / SaaS',
  'HR / Enterprise',
  'E-Commerce / Microservices',
  'E-Commerce / Web',
  'Corporate / SEO',
  'Marketplace / Platform',
  'Corporate / Content',
  'B2B / Operations',
  'Restaurant / SEO',
  'Travel / Content',
];

const CATEGORY_LABELS: Record<string, string> = {
  'B2B / E-Commerce': 'B2B / E-ticaret',
  'Service Platform': 'Hizmet platformu',
  'Automation / SaaS': 'Otomasyon / SaaS',
  'HR / Enterprise': 'İK / Kurumsal',
  'E-Commerce / Microservices': 'E-ticaret / Mikroservis',
  'E-Commerce / Web': 'E-ticaret / Web',
  'Corporate / SEO': 'Kurumsal / SEO',
  'Marketplace / Platform': 'Pazaryeri / Platform',
  'Corporate / Content': 'Kurumsal / İçerik',
  'B2B / Operations': 'B2B / Operasyon',
  'Restaurant / SEO': 'Restoran / SEO',
  'Travel / Content': 'Seyahat / İçerik',
};

export function WebProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState<WebProject | null>(null);
  const [viewMode, setViewMode] = useState<'cards' | 'compact'>('cards');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: WEB_PROJECTS.length };
    WEB_CATEGORIES.forEach((cat) => {
      if (cat === 'All') return;
      counts[cat] = WEB_PROJECTS.filter((p) => p.category.toLowerCase().includes(cat.toLowerCase())).length;
    });
    return counts;
  }, []);

  const filteredProjects = useMemo(() => {
    return WEB_PROJECTS.filter((proj) => {
      if (selectedCategory !== 'All' && !proj.category.toLowerCase().includes(selectedCategory.toLowerCase())) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = proj.title.toLowerCase().includes(query);
        const matchesTagline = proj.tagline.toLowerCase().includes(query);
        const matchesDesc = proj.description.toLowerCase().includes(query);
        const matchesArch = (proj.architecture || '').toLowerCase().includes(query);
        const matchesMetrics = (proj.metrics || '').toLowerCase().includes(query);
        const matchesTech = proj.techStack.some((t) => t.toLowerCase().includes(query));
        const matchesFeatures = proj.features?.some((f) => f.toLowerCase().includes(query));
        return matchesTitle || matchesTagline || matchesDesc || matchesArch || matchesMetrics || matchesTech || matchesFeatures;
      }
      return true;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main className="portfolio-shell" id="top">
      <SEO
        title="Web Platformları & Full-Stack Sistemler | Muhammet Atmaca"
        description="Next.js, ASP.NET Core, Node.js ve mikroservis mimarileri ile geliştirilmiş kurumsal web sistemleri ve açık kaynak projeler. Muhammet Atmaca portfolyosu."
        canonicalUrl="https://muhammetatmaca.com.tr/web"
        keywords={[
          'Web Projeleri',
          'Full Stack Developer',
          'Next.js Portfolyo',
          'ASP.NET Core',
          'Mikroservis Mimarisi',
          'TypeScript',
          'Muhammet Atmaca Web',
        ]}
      />
      {/* Top editorial navigation */}
      <nav className="nav-card" aria-label="Web projects navigation">
        <Link href="/" className="wordmark" data-testid="link-back-home">
          <span className="wordmark-mark">
            <ArrowLeft size={13} strokeWidth={2.2} />
          </span>
          <span>Muhammet Atmaca</span>
        </Link>
        <div className="nav-links">
          <Link href="/" className="nav-link">Genel bakış</Link>
          <span className="nav-link" style={{ color: 'var(--cobalt)', fontWeight: 600 }}>
            Web sistemleri
          </span>
          <Link href="/apps" className="nav-link">Mobil uygulamalar (50+)</Link>
          <a href="mailto:muhammetatmaca79@gmail.com" className="nav-cta" data-testid="link-contact-web">
            İletişime geç <ArrowUpRight size={14} strokeWidth={1.8} />
          </a>
        </div>
      </nav>

      {/* Ridge Parallax WebGL Banner */}
      <div
        className="web-ridge-hero-banner"
        style={{
          position: 'relative',
          width: '100%',
          height: '340px',
          overflow: 'hidden',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <RidgeParallax
          background="#f4f0e6"
          baseColor="#182033"
          accentColor="#2a5cdb"
          density={140}
          dotSize={320}
          speed={55}
          pointer={60}
          range={{
            layers: 10,
            height: 155,
            roughness: 80,
            fall: 220,
            seed: 42,
          }}
          depth={{
            parallax: 160,
            haze: 55,
            travelStart: 2200,
            travelEnd: 2200,
          }}
          style={{ width: '100%', height: '100%', minHeight: 0, minWidth: 0 }}
        />
        {/* Centered label overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            gap: '10px',
          }}
        >
          <span
            style={{
              font: '500 10px/1 var(--app-font-mono)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(24, 32, 51, 0.78)',
              padding: '7px 10px',
              borderRadius: '7px',
              background: 'rgba(250, 248, 242, 0.72)',
              border: '1px solid rgba(24, 32, 51, 0.11)',
              boxShadow: '0 8px 22px rgba(24, 32, 51, 0.1)',
              backdropFilter: 'blur(10px)',
            }}
          >
            Web mühendisliği ve full-stack sistemler
          </span>
          <h2
            style={{
              margin: 0,
              font: '700 clamp(30px, 8vw, 52px)/1 var(--font-display)',
              color: 'var(--ink)',
              letterSpacing: '-0.06em',
              textAlign: 'center',
            }}
          >
            Web sistemleri
          </h2>
          <span
            style={{
              font: '500 12px/1 var(--app-font-mono)',
              color: 'rgba(24, 32, 51, 0.82)',
              letterSpacing: '0.04em',
              padding: '7px 11px',
              borderRadius: '7px',
              background: 'rgba(250, 248, 242, 0.76)',
              border: '1px solid rgba(24, 32, 51, 0.12)',
              boxShadow: '0 8px 22px rgba(24, 32, 51, 0.12)',
              backdropFilter: 'blur(10px)',
            }}
          >
            Yüksek Performans & Güçlü Mimari
          </span>
        </div>
      </div>

      {/* Hero section with Originkit Glass Icon */}
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
            <div className="eyebrow">Web mühendisliği ve full-stack sistemler</div>
            <h1 style={{ maxWidth: '840px' }}>
              Hız, güvenilirlik ve<br />
              <em>yüksek ölçek için</em><br />
              geliştirilen web sistemleri.
            </h1>
            <p className="hero-lede web-hero-lede" style={{ maxWidth: '620px' }}>
              Next.js, React, Node.js ve ASP.NET Core ile geliştirilen üretim web platformları, kurumsal B2B portalları, otomasyon sistemleri ve dağıtık mikroservis altyapıları.
            </p>
          </div>

          {/* Originkit Glass Icon component - Genişletilmiş görünüm */}
          <div
            style={{
              width: '100%',
              maxWidth: '520px',
              height: 'clamp(260px, 60vw, 400px)',
              minHeight: 'auto',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid rgba(24, 32, 51, 0.14)',
              boxShadow: '0 20px 50px rgba(24, 32, 51, 0.1), inset 0 1px rgba(255, 255, 255, 0.8)',
              background: '#F3EFE5',
              position: 'relative',
              justifySelf: 'end',
            }}
          >
            <LiquidGlassCluster
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="container-wide" style={{ marginBottom: '45px' }}>
        <div
          style={{
            padding: 'clamp(16px, 3vw, 24px) clamp(16px, 3vw, 28px)',
            borderRadius: '16px',
            border: '1px solid var(--line)',
            background: 'rgba(250, 248, 242, 0.85)',
          }}
        >
          {/* Top Row: Search bar & View mode switcher */}
          <div style={{ display: 'flex', gap: '14px', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
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
                placeholder="Web projelerinde ara: proje adı, teknoloji, mimari veya özellik..."
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

            {/* View Mode Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'rgba(24, 32, 51, 0.06)', padding: '4px', borderRadius: '10px', border: '1px solid var(--line)' }}>
              <button
                type="button"
                onClick={() => setViewMode('cards')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  borderRadius: '7px',
                  border: 'none',
                  background: viewMode === 'cards' ? 'var(--ink)' : 'transparent',
                  color: viewMode === 'cards' ? 'var(--paper)' : 'rgba(24, 32, 51, 0.65)',
                  cursor: 'pointer',
                  font: '600 11.5px/1 var(--app-font-mono)',
                  transition: 'all 0.2s',
                }}
              >
                <LayoutGrid size={13} />
                <span>Detaylı Kartlar</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('compact')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  borderRadius: '7px',
                  border: 'none',
                  background: viewMode === 'compact' ? 'var(--ink)' : 'transparent',
                  color: viewMode === 'compact' ? 'var(--paper)' : 'rgba(24, 32, 51, 0.65)',
                  cursor: 'pointer',
                  font: '600 11.5px/1 var(--app-font-mono)',
                  transition: 'all 0.2s',
                }}
              >
                <List size={13} />
                <span>Kompakt Liste</span>
              </button>
            </div>
          </div>

          {/* Category Chips */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ font: '500 11px/1 var(--app-font-mono)', color: 'rgba(24, 32, 51, 0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginRight: '6px' }}>
              Alan:
            </span>
            {WEB_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              const count = categoryCounts[cat] ?? 0;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '7px 12px',
                    borderRadius: '8px',
                    font: '500 11px/1 var(--app-font-mono)',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    background: active ? 'var(--cobalt)' : 'transparent',
                    color: active ? 'var(--paper)' : 'rgba(24, 32, 51, 0.75)',
                    border: active ? '1px solid var(--cobalt)' : '1px solid var(--line)',
                    boxShadow: active ? '2px 2px 0 var(--ink)' : 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span>{cat === 'All' ? 'Tümü' : CATEGORY_LABELS[cat] ?? cat}</span>
                  <span
                    style={{
                      fontSize: '9.5px',
                      opacity: active ? 0.9 : 0.55,
                      padding: '1px 4px',
                      borderRadius: '4px',
                      background: active ? 'rgba(255,255,255,0.2)' : 'rgba(24,32,51,0.08)',
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Status Line */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', padding: '0 4px', font: '500 11px/1 var(--app-font-mono)', color: 'rgba(24, 32, 51, 0.5)' }}>
          <span>{WEB_PROJECTS.length} web platformundan {filteredProjects.length} tanesi gösteriliyor</span>
          {(searchQuery || selectedCategory !== 'All') && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              style={{ background: 'none', border: 'none', color: 'var(--cobalt)', cursor: 'pointer', font: 'inherit', textDecoration: 'underline' }}
            >
              Filtreleri sıfırla
            </button>
          )}
        </div>
      </section>

      {/* Web Projects Grid / List */}
      <section className="container-wide" style={{ marginBottom: '110px' }}>
        {filteredProjects.length === 0 ? (
          <div
            style={{
              padding: '70px 20px',
              textAlign: 'center',
              border: '1px dashed var(--line)',
              borderRadius: '16px',
            }}
          >
            <h3 style={{ font: '600 22px/1 var(--font-display)', color: 'var(--ink)' }}>Web platformu bulunamadı</h3>
            <p style={{ color: 'rgba(24, 32, 51, 0.6)', fontSize: '13px', marginTop: '8px' }}>Arama veya filtre kriterlerini değiştirmeyi dene.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="button-primary"
              style={{ marginTop: '18px' }}
            >
              Tüm web platformlarını göster
            </button>
          </div>
        ) : viewMode === 'compact' ? (
          /* Compact Table / List Mode */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                style={{
                  padding: '18px 24px',
                  borderRadius: '14px',
                  border: '1px solid rgba(24, 32, 51, 0.12)',
                  background: 'rgba(250, 248, 242, 0.95)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  flexWrap: 'wrap',
                  transition: 'all 0.2s',
                }}
                className="hover:border-[var(--cobalt)] hover:shadow-md"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: '1 1 320px' }}>
                  <span className="web-card-no-badge">#{project.no}</span>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                      <h4 style={{ margin: 0, font: '700 17px/1.2 var(--font-display)', color: 'var(--ink)' }}>
                        {project.title}
                      </h4>
                      <span className="web-card-category-badge" style={{ fontSize: '9.5px', padding: '3px 6px' }}>
                        {CATEGORY_LABELS[project.category] ?? project.category}
                      </span>
                    </div>
                    <p style={{ margin: 0, fontSize: '12.5px', color: 'rgba(24, 32, 51, 0.65)' }}>
                      {project.tagline}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="web-card-tech-tag" style={{ fontSize: '9.5px', padding: '3px 6px' }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {project.metrics && (
                  <span style={{ font: '600 10.5px/1 var(--app-font-mono)', color: 'var(--cobalt)', background: 'rgba(25, 75, 223, 0.08)', padding: '4px 8px', borderRadius: '6px' }}>
                    {project.metrics}
                  </span>
                )}

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="web-card-btn-secondary"
                    style={{ padding: '7px 11px', fontSize: '11px' }}
                  >
                    Detaylar <MoveUpRight size={12} />
                  </button>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="web-card-btn-primary"
                      style={{ padding: '8px 14px', fontSize: '11.5px' }}
                    >
                      Canlı Aç <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Detailed Cards Grid (Default) */
          <div className="web-project-grid">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="web-system-card"
              >
                <div>
                  {/* Topline: Number, Category, Live Status & Year */}
                  <div className="web-card-topline">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <span className="web-card-no-badge">
                        #{project.no}
                      </span>
                      <span className="web-card-category-badge">
                        {CATEGORY_LABELS[project.category] ?? project.category}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="web-card-status-badge">
                        <span className="web-card-status-dot" />
                        Canlı Platform
                      </span>
                      <span style={{ font: '500 11px/1 var(--app-font-mono)', color: 'rgba(24, 32, 51, 0.45)' }}>
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="web-card-title">{project.title}</h3>
                  <p className="web-card-tagline">{project.tagline}</p>
                  <p className="web-card-description">{project.description}</p>

                  {/* Architecture & Feature Highlights Box (AYRINTILAR) */}
                  <div className="web-card-features-box">
                    <div className="web-card-features-heading">
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <Cpu size={13} style={{ color: 'var(--cobalt)' }} />
                        Sistem ve Mimari Ayrıntıları
                      </span>
                      {project.architecture && (
                        <span style={{ font: '500 9.5px/1 var(--app-font-mono)', color: 'var(--cobalt)', background: 'rgba(25, 75, 223, 0.08)', padding: '3px 7px', borderRadius: '4px' }}>
                          {project.architecture}
                        </span>
                      )}
                    </div>

                    <ul className="web-card-features-list">
                      {project.features?.map((feature, idx) => {
                        const colonIdx = feature.indexOf(':');
                        const title = colonIdx !== -1 ? feature.slice(0, colonIdx) : '';
                        const body = colonIdx !== -1 ? feature.slice(colonIdx + 1) : feature;

                        return (
                          <li key={idx} className="web-card-feature-item">
                            <CheckCircle2 size={14} className="web-card-feature-icon" />
                            <span>
                              {title && <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>{title}: </strong>}
                              {body}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Metrics / Impact row */}
                  {project.metrics && (
                    <div className="web-card-metric-row">
                      <Zap size={13} style={{ color: 'var(--cobalt)', flexShrink: 0 }} />
                      <span>{project.metrics}</span>
                    </div>
                  )}

                  {/* Tech stack tags */}
                  <div className="web-card-tech-row">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="web-card-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer with Direct Links */}
                <div className="web-card-actions">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="web-card-btn-primary"
                    >
                      <span>Canlı Sistemi Aç</span>
                      <ExternalLink size={13} />
                    </a>
                  ) : (
                    <span style={{ font: '500 11px/1 var(--app-font-mono)', color: 'rgba(24, 32, 51, 0.45)' }}>
                      İç Sistem / Kurumsal
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="web-card-btn-secondary"
                  >
                    <span>Mimari Detaylar</span>
                    <MoveUpRight size={13} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Web Project Detail Modal */}
      {activeModalProject && (
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
          onClick={() => setActiveModalProject(null)}
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
              onClick={() => setActiveModalProject(null)}
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
              aria-label="Pencereyi kapat"
            >
              <X size={16} />
            </button>

            {/* Header */}
            <div style={{ marginBottom: '24px', paddingRight: '36px' }}>
              <div style={{ color: 'var(--cobalt)', font: '10px/1 var(--app-font-mono)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '6px' }}>
                {activeModalProject.no} — {CATEGORY_LABELS[activeModalProject.category] ?? activeModalProject.category} • {activeModalProject.year}
              </div>
              <h2 style={{ margin: 0, color: 'var(--ink)', font: '600 28px/1.05 var(--font-display)', letterSpacing: '-0.06em' }}>
                {activeModalProject.title}
              </h2>
              <p style={{ margin: '6px 0 0', color: 'rgba(24, 32, 51, 0.65)', fontSize: '13px' }}>
                {activeModalProject.tagline}
              </p>
            </div>

            {/* Architecture and Metrics Badges */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
              {activeModalProject.architecture && (
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '8px', background: 'rgba(25, 75, 223, 0.08)', border: '1px solid rgba(25, 75, 223, 0.18)', color: 'var(--cobalt)', font: '600 11px/1 var(--app-font-mono)' }}>
                  <Cpu size={13} />
                  <span>{activeModalProject.architecture}</span>
                </div>
              )}
              {activeModalProject.metrics && (
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '8px', background: 'rgba(24, 32, 51, 0.05)', border: '1px solid rgba(24, 32, 51, 0.1)', color: 'var(--ink)', font: '600 11px/1 var(--app-font-mono)' }}>
                  <Zap size={13} style={{ color: 'var(--cobalt)' }} />
                  <span>{activeModalProject.metrics}</span>
                </div>
              )}
            </div>

            {/* Overview */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ color: 'rgba(24, 32, 51, 0.5)', font: '10px/1 var(--app-font-mono)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>
                Genel bakış ve sistem kapsamı
              </div>
              <p style={{ margin: 0, color: 'rgba(24, 32, 51, 0.78)', fontSize: '14px', lineHeight: 1.65 }}>
                {activeModalProject.description}
              </p>
            </div>

            {/* Features */}
            {activeModalProject.features && (
              <div style={{ marginBottom: '26px' }}>
                <div style={{ color: 'rgba(24, 32, 51, 0.5)', font: '10px/1 var(--app-font-mono)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '10px' }}>
                  Teknik öne çıkanlar ve mimari yetenekler
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: '10px' }}>
                  {activeModalProject.features.map((feat, i) => {
                    const colonIdx = feat.indexOf(':');
                    const title = colonIdx !== -1 ? feat.slice(0, colonIdx) : '';
                    const body = colonIdx !== -1 ? feat.slice(colonIdx + 1) : feat;

                    return (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: 'rgba(24, 32, 51, 0.8)', lineHeight: 1.55 }}>
                        <CheckCircle2 size={15} style={{ color: 'var(--cobalt)', marginTop: '2px', flexShrink: 0 }} />
                        <span>
                          {title && <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>{title}: </strong>}
                          {body}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ color: 'rgba(24, 32, 51, 0.5)', font: '10px/1 var(--app-font-mono)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '10px' }}>
                Teknolojiler
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {activeModalProject.techStack.map((tech) => (
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

            {/* Actions */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', paddingTop: '16px', borderTop: '1px solid var(--line)' }}>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="button-quiet"
                style={{ cursor: 'pointer', padding: '10px 16px' }}
              >
                Kapat
              </button>
              <a
                href={activeModalProject.liveUrl || 'https://github.com/muhammetatmaca'}
                target="_blank"
                rel="noreferrer"
                className="button-primary"
                style={{ padding: '12px 18px' }}
              >
                Projeyi aç <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Code Architecture Showcase */}
      <section style={{ padding: '70px 0 50px', borderTop: '1px solid var(--line)', background: '#f4f0e6' }} aria-label="Mühendislik Standartları ve Kod Mimarisi">
        <div className="container-wide" style={{ marginBottom: '32px', textAlign: 'center' }}>
          <div style={{ color: 'var(--cobalt)', font: '600 11px/1 var(--app-font-mono)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '8px' }}>
            Temiz Kod & Kurumsal Standartlar
          </div>
          <h2 style={{ margin: '0 0 12px', font: '700 clamp(24px, 4vw, 36px)/1.15 var(--font-display)', color: 'var(--ink)', letterSpacing: '-0.03em' }}>
            Mühendislik Nasıl İnşa Edilir?
          </h2>
          <p style={{ maxWidth: '620px', margin: '0 auto', fontSize: '15px', lineHeight: 1.6, color: 'rgba(24, 32, 51, 0.75)' }}>
            Ölçeklenebilir B2B portalları ve mobil sistemlerin perde arkasındaki sade, anlaşılır ve güvenilir kod mimarisi.
          </p>
        </div>
        <div className="container-wide" style={{ maxWidth: '920px' }}>
          <GlassCodeBlock initialTabId="web" />
        </div>
      </section>

      {/* Web Technologies & Architecture Logo Loop */}
      <section style={{ padding: '60px 0 45px', borderTop: '1px solid var(--line)', background: 'rgba(250, 248, 242, 0.45)' }} aria-label="Kullanılan Teknolojiler">
        <div className="container-wide" style={{ marginBottom: '28px', textAlign: 'center' }}>
          <div style={{ color: 'var(--cobalt)', font: '600 11px/1 var(--app-font-mono)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '8px' }}>
            Mühendislik Altyapısı & Ekosistem
          </div>
          <h3 style={{ margin: 0, font: '600 clamp(20px, 3.5vw, 28px)/1.15 var(--font-display)', color: 'var(--ink)' }}>
            Web Platformlarında Kullanılan Güçlü Teknolojiler
          </h3>
        </div>
        <LogoLoop
          logos={WEB_TECH_LOGOS}
          speed={65}
          logoHeight={36}
          gap={32}
          pauseOnHover={true}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="#f4f0e6"
          ariaLabel="Web teknolojileri ve kurumsal altyapı logoları"
        />
      </section>

      {/* Sitelinks Navigation Directory */}
      <SitelinksDirectory />

      {/* Editorial Footer Section 4 (2-card split layout) */}
      <FooterSection4 />
    </main>
  );
}
