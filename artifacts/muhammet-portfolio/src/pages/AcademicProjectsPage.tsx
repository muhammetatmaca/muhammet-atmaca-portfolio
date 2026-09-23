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

      {/* Floating Navigation Card matching site editorial standard */}
      <nav className="nav-card" aria-label="Page navigation">
        <Link href="/" className="wordmark" data-testid="link-home-from-academic">
          <span className="wordmark-mark">M</span>
          <span>Muhammet Atmaca <span className="wordmark-role">/ Akademik & AR-GE</span></span>
        </Link>
        <div className="nav-links">
          <Link href="/" className="nav-link flex items-center gap-1">
            <ArrowLeft size={14} /> Ana Sayfa
          </Link>
          <Link href="/apps" className="nav-link">Mobil Uygulamalar</Link>
          <Link href="/web" className="nav-link">Web Sistemleri</Link>
          <a
            href="https://share.google/LeVvOPDHGCxM1biap"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
            title="VirelonSoft Google İşletme Profili"
          >
            VirelonSoft
          </a>
          <Link href="/#contact" className="nav-cta">
            İletişim <ArrowUpRight size={14} />
          </Link>
        </div>
      </nav>

      {/* Hero Header with Spline 3D as Immersive Full Background */}
      <header
        style={{
          position: 'relative',
          minHeight: '560px',
          paddingTop: '130px',
          paddingBottom: '70px',
          overflow: 'hidden',
          borderBottom: '1px solid var(--line)',
          background: '#f4f0e6',
        }}
      >
        {/* 3D Spline Canvas in Background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            pointerEvents: 'auto',
          }}
          aria-label="3D Interactive Engineering Model"
        >
          {!isSplineLoaded && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#f4f0e6',
                zIndex: 2,
              }}
            >
              <div
                style={{
                  font: '500 12px/1 var(--app-font-mono, monospace)',
                  color: 'rgba(24,32,51,0.5)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                3D Model Yükleniyor...
              </div>
            </div>
          )}
          <Suspense fallback={null}>
            <Spline
              scene={SPLINE_ACADEMIC_SCENE}
              onLoad={() => setIsSplineLoaded(true)}
              style={{
                width: '100%',
                height: '100%',
                opacity: isSplineLoaded ? 0.95 : 0,
                transition: 'opacity 0.7s ease',
              }}
            />
          </Suspense>
        </div>

        {/* Soft Radial & Linear Gradient Overlays to preserve high text legibility */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            pointerEvents: 'none',
            background:
              'radial-gradient(circle at 24% 45%, rgba(244, 240, 230, 0.94) 0%, rgba(244, 240, 230, 0.82) 42%, rgba(244, 240, 230, 0.35) 75%, transparent 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '120px',
            zIndex: 2,
            pointerEvents: 'none',
            background: 'linear-gradient(to top, #f4f0e6 15%, transparent 100%)',
          }}
        />

        {/* Foreground Content Layer */}
        <div className="container-wide" style={{ position: 'relative', zIndex: 3 }}>
          <div
            style={{
              maxWidth: '680px',
              padding: '24px 28px',
              borderRadius: '20px',
              background: 'rgba(244, 240, 230, 0.65)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(24, 32, 51, 0.08)',
              boxShadow: '0 12px 36px rgba(24, 32, 51, 0.04)',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '5px 12px',
                borderRadius: '6px',
                background: 'rgba(31, 74, 219, 0.08)',
                border: '1px solid rgba(31, 74, 219, 0.16)',
                color: 'var(--cobalt)',
                font: '600 11px/1 var(--app-font-mono, monospace)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Bilimsel Araştırma ve AR-GE Portfolyosu
            </div>

            <h1
              style={{
                font: '700 clamp(2.4rem, 4.6vw, 3.8rem)/1.08 var(--font-display)',
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
                fontSize: '15.5px',
                lineHeight: '1.62',
                color: 'rgba(24, 32, 51, 0.82)',
                margin: '0 0 24px',
              }}
            >
              Alçak Dünya Yörüngesi’nde İMECE uydusu çarpışma önleme mekaniğinden, LoRaWAN uç yapay zeka (Edge AI) bitirme tezine; Cumhurbaşkanlığı Kubernetes kümesinden TÜBİTAK 2209-A araştırmalarına uzanan 8 bilimsel ve mühendislik çalışması.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '10px',
              }}
            >
              <div
                style={{
                  padding: '10px 14px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid rgba(24, 32, 51, 0.1)',
                }}
              >
                <div style={{ font: '700 18px var(--font-display)', color: 'var(--ink)' }}>8 Proje</div>
                <div style={{ font: '500 11px var(--app-font-mono)', color: 'rgba(24, 32, 51, 0.65)' }}>Tez & Araştırma</div>
              </div>

              <div
                style={{
                  padding: '10px 14px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid rgba(24, 32, 51, 0.1)',
                }}
              >
                <div style={{ font: '700 18px var(--font-display)', color: 'var(--cobalt)' }}>İMECE</div>
                <div style={{ font: '500 11px var(--app-font-mono)', color: 'rgba(24, 32, 51, 0.65)' }}>Uydu Yörünge Modeli</div>
              </div>

              <div
                style={{
                  padding: '10px 14px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid rgba(24, 32, 51, 0.1)',
                }}
              >
                <div style={{ font: '700 18px var(--font-display)', color: 'var(--ink)' }}>T.C. Kamu</div>
                <div style={{ font: '500 11px var(--app-font-mono)', color: 'rgba(24, 32, 51, 0.65)' }}>Cumhurbaşkanlığı & TÜBİTAK</div>
              </div>

              <div
                style={{
                  padding: '10px 14px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid rgba(24, 32, 51, 0.1)',
                }}
              >
                <div style={{ font: '700 18px var(--font-display)', color: 'var(--ink)' }}>%97</div>
                <div style={{ font: '500 11px var(--app-font-mono)', color: 'rgba(24, 32, 51, 0.65)' }}>Bi-LSTM Doğruluğu</div>
              </div>
            </div>
          </div>

          {/* 3D Interaction Notice Badge */}
          <div
            style={{
              position: 'absolute',
              right: 0,
              bottom: '-30px',
              font: '500 11px var(--app-font-mono)',
              color: 'rgba(24, 32, 51, 0.5)',
              letterSpacing: '0.04em',
              background: 'rgba(255,255,255,0.6)',
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid rgba(24,32,51,0.08)',
              backdropFilter: 'blur(4px)',
            }}
          >
            Arka Plandaki 3D Modeli Döndürmek İçin Sürükleyin
          </div>
        </div>
      </header>

      {/* Filter and Search Bar */}
      <section className="container-wide" style={{ marginTop: '36px', marginBottom: '32px' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 20px',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderRadius: '14px',
            border: '1px solid rgba(24, 32, 51, 0.12)',
            boxShadow: '0 6px 20px rgba(24, 32, 51, 0.03)',
          }}
        >
          {/* Domain Filter Pills - Zero Emojis */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {[
              { id: 'All', label: 'Tüm Projeler (8)' },
              { id: 'Space', label: 'Uzay & Yörünge Mekaniği' },
              { id: 'Edge', label: 'Edge AI & Gömülü Sistemler' },
              { id: 'Cloud', label: 'Kubernetes & Ceph Bulut' },
              { id: 'AI', label: 'Büyük Dil Modelleri (LLM)' },
              { id: 'Health', label: 'TÜBİTAK 2209-A Araştırma' },
              { id: 'Network', label: 'Ağ & Siber Güvenlik' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedDomain(tab.id)}
                style={{
                  padding: '7px 14px',
                  borderRadius: '8px',
                  fontSize: '12.5px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: '1px solid',
                  borderColor: selectedDomain === tab.id ? 'var(--cobalt)' : 'rgba(24, 32, 51, 0.14)',
                  background: selectedDomain === tab.id ? 'var(--cobalt)' : '#fff',
                  color: selectedDomain === tab.id ? '#fff' : 'var(--ink)',
                  transition: 'all 0.15s ease',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div style={{ position: 'relative', minWidth: '240px' }}>
            <Search
              size={15}
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
              placeholder="Algoritma, kurum veya teknoloji ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px 8px 34px',
                borderRadius: '8px',
                border: '1px solid rgba(24, 32, 51, 0.16)',
                background: '#fff',
                fontSize: '13px',
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
                <X size={13} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <main className="container-wide" style={{ marginBottom: '100px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              style={{
                borderRadius: '16px',
                background: '#ffffff',
                border: '1px solid rgba(24, 32, 51, 0.12)',
                padding: '32px',
                boxShadow: '0 8px 24px rgba(24, 32, 51, 0.04)',
                position: 'relative',
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
                  marginBottom: '14px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid rgba(24, 32, 51, 0.08)',
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
                  <span
                    style={{
                      font: '700 12px/1 var(--app-font-mono, monospace)',
                      color: 'var(--cobalt)',
                      background: 'rgba(31, 74, 219, 0.08)',
                      padding: '4px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    PROJE {project.no} / 08
                  </span>

                  {project.highlightBadge && (
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        color: 'var(--cobalt)',
                        background: 'rgba(31, 74, 219, 0.06)',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        border: '1px solid rgba(31, 74, 219, 0.18)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {project.highlightBadge}
                    </span>
                  )}

                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: 'rgba(24, 32, 51, 0.6)',
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
                        fontSize: '12.5px',
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
                  font: '700 clamp(1.5rem, 2.5vw, 2rem)/1.15 var(--font-display)',
                  color: 'var(--ink)',
                  margin: '0 0 10px',
                  letterSpacing: '-0.02em',
                }}
              >
                {project.title}
              </h2>

              <p
                style={{
                  fontSize: '14.5px',
                  fontWeight: 600,
                  color: 'var(--cobalt)',
                  margin: '0 0 16px',
                  lineHeight: '1.5',
                }}
              >
                {project.tagline}
              </p>

              {/* Description */}
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: '1.68',
                  color: 'rgba(24, 32, 51, 0.85)',
                  margin: '0 0 20px',
                }}
              >
                {project.description}
              </p>

              {/* Methodology Box */}
              {project.methodology && (
                <div
                  style={{
                    padding: '16px 18px',
                    borderRadius: '8px',
                    background: 'rgba(31, 74, 219, 0.04)',
                    borderLeft: '3px solid var(--cobalt)',
                    marginBottom: '20px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--cobalt)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '6px',
                      fontFamily: 'var(--app-font-mono)',
                    }}
                  >
                    Mühendislik Metodolojisi & Mimari
                  </div>
                  <p style={{ margin: 0, fontSize: '13.5px', lineHeight: '1.6', color: 'rgba(24, 32, 51, 0.9)' }}>
                    {project.methodology}
                  </p>
                </div>
              )}

              {/* Key Results Grid */}
              {project.results && project.results.length > 0 && (
                <div style={{ marginBottom: '20px' }}>
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'rgba(24, 32, 51, 0.65)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '10px',
                      fontFamily: 'var(--app-font-mono)',
                    }}
                  >
                    Deneysel Bulgular ve Başarı Metrikleri
                  </div>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                      gap: '8px',
                    }}
                  >
                    {project.results.map((result, rIdx) => (
                      <div
                        key={rIdx}
                        style={{
                          padding: '10px 14px',
                          borderRadius: '6px',
                          background: 'rgba(24, 32, 51, 0.03)',
                          border: '1px solid rgba(24, 32, 51, 0.08)',
                          fontSize: '13px',
                          lineHeight: '1.5',
                          color: 'var(--ink)',
                        }}
                      >
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies and Links */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '14px',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(24, 32, 51, 0.08)',
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', maxWidth: '680px' }}>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '4px 9px',
                        borderRadius: '4px',
                        background: 'rgba(24, 32, 51, 0.06)',
                        fontSize: '11.5px',
                        fontWeight: 600,
                        color: 'var(--ink)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="button-primary"
                      style={{ padding: '8px 14px', fontSize: '12px' }}
                    >
                      <Github size={13} /> Kaynak Kodları <ArrowUpRight size={12} />
                    </a>
                  )}
                  {project.paperUrl && (
                    <a
                      href={project.paperUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="button-secondary"
                      style={{ padding: '8px 14px', fontSize: '12px' }}
                    >
                      <FileText size={13} /> Rapor / Makale <ArrowUpRight size={12} />
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

      {/* Footer without any emojis */}
      <footer className="footer">
        <div className="container-wide footer-inner">
          <span className="footer-note">© {new Date().getFullYear()} Muhammet Atmaca — Akademik & AR-GE Portfolyosu</span>
          <div className="footer-links">
            <Link href="/" className="footer-link">Ana Sayfa</Link>
            <Link href="/apps" className="footer-link">Mobil Uygulamalar</Link>
            <Link href="/web" className="footer-link">Web Sistemleri</Link>
            <a
              href="https://share.google/LeVvOPDHGCxM1biap"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
              title="VirelonSoft Google İşletme Profili"
            >
              VirelonSoft
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
