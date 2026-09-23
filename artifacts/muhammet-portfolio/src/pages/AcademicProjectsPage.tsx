import { useState, useMemo, useEffect, Suspense, lazy } from 'react';
import { Link } from 'wouter';
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  MoveUpRight,
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
} from 'lucide-react';
import { ACADEMIC_PROJECTS, type AcademicProject } from '../data/academicProjects';
import { SEO } from '../components/SEO';
import { SitelinksDirectory } from '../components/SitelinksDirectory';

const Spline = lazy(() => import('@splinetool/react-spline'));

const SPLINE_ACADEMIC_SCENE = 'https://prod.spline.design/mTLP5akvjPGimxjD/scene.splinecode';

export function AcademicProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const filteredProjects = useMemo(() => {
    return ACADEMIC_PROJECTS.filter((proj) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        proj.title.toLowerCase().includes(q) ||
        proj.tagline.toLowerCase().includes(q) ||
        proj.description.toLowerCase().includes(q) ||
        proj.category.toLowerCase().includes(q) ||
        (proj.institution && proj.institution.toLowerCase().includes(q)) ||
        proj.technologies.some((t) => t.toLowerCase().includes(q));

      const matchesDomain =
        selectedDomain === 'All' ||
        (selectedDomain === 'Space' && proj.category.includes('Uzay')) ||
        (selectedDomain === 'Edge' && proj.category.includes('Edge')) ||
        (selectedDomain === 'Cloud' && proj.category.includes('DevOps')) ||
        (selectedDomain === 'AI' && (proj.category.includes('LLM') || proj.category.includes('Yapay Zeka'))) ||
        (selectedDomain === 'Health' && proj.category.includes('Biyomedikal')) ||
        (selectedDomain === 'Network' && (proj.category.includes('Ağ') || proj.category.includes('İstatistik')));

      return matchesSearch && matchesDomain;
    });
  }, [searchQuery, selectedDomain]);

  return (
    <div className="portfolio-page" style={{ minHeight: '100vh', background: 'var(--sand)' }}>
      <SEO
        title="Akademik & AR-GE Projeleri — Muhammet Atmaca | Uzay Sistemleri, Edge AI & LLM"
        description="İMECE Uydusu uzay enkazı çarpışma önleme (Bi-LSTM), LoRaWAN Edge AI bitirme tezi, Cumhurbaşkanlığı Kubernetes/Ceph mimarisi ve TÜBİTAK 2209-A araştırma projeleri."
        canonical="https://muhammetatmaca.com.tr/academic"
        keywords={[
          'Akademik Projeler Muhammet Atmaca',
          'İMECE Uydusu Çarpışma Önleme',
          'Physics-Informed Bi-LSTM',
          'SGP4 Kalman Filtresi',
          'LoRaWAN Edge AI Bitirme Tezi',
          'Cumhurbaşkanlığı Kubernetes Ceph',
          'TÜBİTAK 2209 Projesi',
          'Yapay Zeka AR-GE',
          'YOLO ResNet Görüntü İşleme',
        ]}
      />

      {/* Floating Navigation Card */}
      <nav className="nav-card" aria-label="Page navigation">
        <Link href="/" className="wordmark" data-testid="link-home-from-academic">
          <span className="wordmark-mark">M</span>
          <span>Muhammet Atmaca <span className="wordmark-role">/ Academic & R&D</span></span>
        </Link>
        <div className="nav-links">
          <Link href="/" className="nav-link flex items-center gap-1">
            <ArrowLeft size={14} /> Ana Sayfa
          </Link>
          <Link href="/apps" className="nav-link">Mobil Uygulamalar (50+)</Link>
          <Link href="/web" className="nav-link">Web Sistemleri</Link>
          <a
            href="https://share.google/LeVvOPDHGCxM1biap"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
            title="VirelonSoft Google İşletme Profili"
          >
            📍 VirelonSoft
          </a>
          <Link href="/#contact" className="nav-cta">
            İletişim <ArrowUpRight size={14} />
          </Link>
        </div>
      </nav>

      {/* Hero Header with Interactive 3D Spline Scene */}
      <header
        style={{
          paddingTop: '120px',
          paddingBottom: '50px',
          borderBottom: '1px solid var(--line)',
          background: 'linear-gradient(180deg, rgba(230,238,250,0.6) 0%, rgba(244,240,230,0) 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container-wide">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
              gap: '40px',
              alignItems: 'center',
            }}
            className="academic-hero-grid"
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  background: 'rgba(31, 74, 219, 0.1)',
                  border: '1px solid rgba(31, 74, 219, 0.2)',
                  color: 'var(--cobalt)',
                  font: '600 12px/1 var(--app-font-mono, monospace)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                <GraduationCap size={15} /> Bilimsel Araştırma & AR-GE Portfolyosu
              </div>

              <h1
                style={{
                  font: '700 clamp(2.4rem, 5vw, 3.8rem)/1.08 var(--font-display)',
                  color: 'var(--ink)',
                  margin: '0 0 16px',
                  letterSpacing: '-0.03em',
                }}
              >
                Akademik Tezler,<br />
                <span style={{ color: 'var(--cobalt)' }}>Uzay Yörünge Sistemleri</span><br />
                ve Derin Öğrenme.
              </h1>

              <p
                style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: 'rgba(24, 32, 51, 0.8)',
                  maxWidth: '580px',
                  margin: '0 0 24px',
                }}
              >
                Alçak Dünya Yörüngesi’nde İMECE uydusu çarpışma önleme mekaniğinden, LoRaWAN uç yapay zeka (Edge AI) bitirme tezine; Cumhurbaşkanlığı Kubernetes kümesinden TÜBİTAK 2209-A araştırmalarına kadar hayata geçirdiğim 8 bilimsel ve mühendislik projesi.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    padding: '8px 16px',
                    borderRadius: '12px',
                    background: '#fff',
                    border: '1px solid rgba(24,32,51,0.12)',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--ink)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Sparkles size={14} style={{ color: 'var(--coral)' }} /> 8 Bilimsel & AR-GE Projesi
                </div>
                <div
                  style={{
                    padding: '8px 16px',
                    borderRadius: '12px',
                    background: '#fff',
                    border: '1px solid rgba(24,32,51,0.12)',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--ink)',
                  }}
                >
                  🛰️ İMECE Uydusu Referanslı
                </div>
                <div
                  style={{
                    padding: '8px 16px',
                    borderRadius: '12px',
                    background: '#fff',
                    border: '1px solid rgba(24,32,51,0.12)',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--ink)',
                  }}
                >
                  🏛️ T.C. Cumhurbaşkanlığı & TÜBİTAK
                </div>
              </div>
            </div>

            {/* 3D Spline Interactive Scene */}
            <div
              style={{
                height: '420px',
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.4)',
                border: '1px solid rgba(24,32,51,0.12)',
                boxShadow: '0 20px 40px rgba(24,32,51,0.06)',
              }}
              className="academic-spline-card"
            >
              {!isSplineLoaded && (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                  }}
                >
                  <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                  <span style={{ font: '12px var(--app-font-mono, monospace)', color: 'rgba(24,32,51,0.6)' }}>
                    3D Araştırma Sahnesi Yükleniyor...
                  </span>
                </div>
              )}
              <Suspense fallback={null}>
                <Spline
                  scene={SPLINE_ACADEMIC_SCENE}
                  onLoad={() => setIsSplineLoaded(true)}
                  style={{ width: '100%', height: '100%', opacity: isSplineLoaded ? 1 : 0, transition: 'opacity 0.6s ease' }}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </header>

      {/* Filter and Search Bar */}
      <section className="container-wide" style={{ marginTop: '40px', marginBottom: '36px' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 24px',
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(12px)',
            borderRadius: '20px',
            border: '1px solid rgba(24, 32, 51, 0.12)',
            boxShadow: '0 8px 24px rgba(24, 32, 51, 0.04)',
          }}
        >
          {/* Domain Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {[
              { id: 'All', label: 'Tüm Projeler (8)' },
              { id: 'Space', label: '🛰️ Uzay & Yörünge (İMECE)' },
              { id: 'Edge', label: '⚡ Edge AI & LoRaWAN' },
              { id: 'Cloud', label: '🏛️ Kubernetes & Ceph' },
              { id: 'AI', label: '🧠 LLM & Deep Learning' },
              { id: 'Health', label: '🔬 TÜBİTAK 2209-A' },
              { id: 'Network', label: '🌐 Siber Ağ & Veri Bilimi' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedDomain(tab.id)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: '1px solid',
                  borderColor: selectedDomain === tab.id ? 'var(--cobalt)' : 'rgba(24, 32, 51, 0.14)',
                  background: selectedDomain === tab.id ? 'var(--cobalt)' : '#fff',
                  color: selectedDomain === tab.id ? '#fff' : 'var(--ink)',
                  transition: 'all 0.2s ease',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div style={{ position: 'relative', minWidth: '240px' }}>
            <Search
              size={16}
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'rgba(24,32,51,0.4)',
              }}
            />
            <input
              type="text"
              placeholder="Model, konu veya teknoloji ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '9px 12px 9px 36px',
                borderRadius: '12px',
                border: '1px solid rgba(24, 32, 51, 0.16)',
                background: '#fff',
                fontSize: '13.5px',
                color: 'var(--ink)',
                outline: 'none',
              }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'rgba(24,32,51,0.5)',
                }}
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <main className="container-wide" style={{ marginBottom: '110px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              style={{
                borderRadius: '24px',
                background: project.cardBg || '#fff',
                border: '1px solid rgba(24, 32, 51, 0.14)',
                padding: '36px',
                boxShadow: '0 12px 32px rgba(24, 32, 51, 0.05)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Topline Header */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px',
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
                  <span
                    style={{
                      font: '700 12px/1 var(--app-font-mono, monospace)',
                      color: 'var(--cobalt)',
                      background: 'rgba(31, 74, 219, 0.1)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                    }}
                  >
                    PROJE #{project.no}
                  </span>
                  {project.highlightBadge && (
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        color: '#b4341e',
                        background: 'rgba(217, 79, 51, 0.12)',
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        border: '1px solid rgba(217, 79, 51, 0.25)',
                      }}
                    >
                      {project.highlightBadge}
                    </span>
                  )}
                  <span
                    style={{
                      fontSize: '12.5px',
                      fontWeight: 600,
                      color: 'rgba(24, 32, 51, 0.65)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {project.institution && (
                    <span
                      style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        color: 'rgba(24, 32, 51, 0.75)',
                      }}
                    >
                      {project.institution}
                    </span>
                  )}
                  <span
                    style={{
                      font: '600 12px/1 var(--app-font-mono, monospace)',
                      color: 'rgba(24, 32, 51, 0.45)',
                    }}
                  >
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Title & Tagline */}
              <h2
                style={{
                  font: '700 clamp(1.6rem, 3vw, 2.2rem)/1.15 var(--font-display)',
                  color: 'var(--ink)',
                  margin: '0 0 10px',
                  letterSpacing: '-0.02em',
                }}
              >
                {project.title}
              </h2>

              <p
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: 'var(--cobalt)',
                  margin: '0 0 18px',
                  lineHeight: '1.5',
                }}
              >
                {project.tagline}
              </p>

              {/* Detailed Description */}
              <p
                style={{
                  fontSize: '14.5px',
                  lineHeight: '1.68',
                  color: 'rgba(24, 32, 51, 0.85)',
                  margin: '0 0 20px',
                }}
              >
                {project.description}
              </p>

              {/* Methodology / Architecture */}
              {project.methodology && (
                <div
                  style={{
                    padding: '16px 20px',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.75)',
                    border: '1px solid rgba(24, 32, 51, 0.08)',
                    marginBottom: '18px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '11.5px',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: 'rgba(24, 32, 51, 0.65)',
                      marginBottom: '6px',
                    }}
                  >
                    Metodoloji & Matematiksel / Sistem Altyapısı:
                  </div>
                  <p style={{ margin: 0, fontSize: '13.5px', lineHeight: '1.6', color: 'var(--ink)' }}>
                    {project.methodology}
                  </p>
                </div>
              )}

              {/* Measurable Results & Achievements */}
              {project.results && project.results.length > 0 && (
                <div style={{ marginBottom: '20px' }}>
                  <div
                    style={{
                      fontSize: '11.5px',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: 'rgba(24, 32, 51, 0.65)',
                      marginBottom: '8px',
                    }}
                  >
                    Ölçülebilir Başarı Sonuçları ve Çıktılar:
                  </div>
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: '20px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      fontSize: '13.5px',
                      lineHeight: '1.5',
                      color: 'rgba(24, 32, 51, 0.88)',
                    }}
                  >
                    {project.results.map((res, rIdx) => (
                      <li key={rIdx}>{res}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Dataset info */}
              {project.dataset && (
                <div
                  style={{
                    fontSize: '12.5px',
                    color: 'rgba(24, 32, 51, 0.65)',
                    marginBottom: '18px',
                    fontStyle: 'italic',
                  }}
                >
                  <strong>Veri Seti:</strong> {project.dataset}
                </div>
              )}

              {/* Technology Tags & Action Links */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '16px',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(24, 32, 51, 0.1)',
                }}
              >
                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '4px 10px',
                        borderRadius: '6px',
                        background: 'rgba(24, 32, 51, 0.08)',
                        fontSize: '11.5px',
                        fontWeight: 600,
                        color: 'var(--ink)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* External Links */}
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="button-primary"
                      style={{ padding: '8px 16px', fontSize: '12.5px' }}
                    >
                      <Github size={14} /> Kodları İncele <ArrowUpRight size={13} />
                    </a>
                  )}
                  {project.paperUrl && (
                    <a
                      href={project.paperUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="button-secondary"
                      style={{ padding: '8px 16px', fontSize: '12.5px' }}
                    >
                      <FileText size={14} /> Makale / Bildiri <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Sitelinks Directory */}
      <SitelinksDirectory />

      {/* Footer */}
      <footer className="footer">
        <div className="container-wide footer-inner">
          <span className="footer-note">© {new Date().getFullYear()} Muhammet Atmaca — Akademik & AR-GE Portfolyosu</span>
          <div className="footer-links">
            <Link href="/" className="footer-link">Ana Sayfa</Link>
            <Link href="/apps" className="footer-link">Mobil Uygulamalar (50+)</Link>
            <Link href="/web" className="footer-link">Web Sistemleri</Link>
            <a
              href="https://share.google/LeVvOPDHGCxM1biap"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
              title="VirelonSoft Google İşletme Profili"
            >
              📍 VirelonSoft
            </a>
            <a href="https://github.com/muhammetatmaca" target="_blank" rel="noreferrer" className="footer-link">
              <Github size={13} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/muhammet-atmaca-857481252/" target="_blank" rel="noreferrer" className="footer-link">
              <Linkedin size={13} /> LinkedIn
            </a>
            <a
              href="#"
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
    </div>
  );
}
