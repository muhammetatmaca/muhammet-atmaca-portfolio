import { useState, useMemo } from 'react';
import { ArrowUpRight, ExternalLink, MessageSquare, Sparkles } from 'lucide-react';
import { SHOWCASE_PROJECTS, ShowcaseProject } from '@/data/showcaseProjects';
import { MacbookPro } from '@/components/ui/macbook-pro';
import { Iphone16Pro } from '@/components/ui/iphone-16-pro';
import { CUSTOM_MOBILE_MOCKUPS } from '@/components/showcase/MobileAppMockups';
import { MobileAppsMarquee } from '@/components/projects/MobileAppsMarquee';

interface EnterpriseProjectsShowcaseProps {
  initialProjectId?: string;
  serviceType?: string;
  cityName?: string;
}

type CategoryFilter = 'all' | 'b2b-erp' | 'eticaret' | 'mobil' | 'ai-cloud';

export function EnterpriseProjectsShowcase({
  serviceType,
  cityName,
}: EnterpriseProjectsShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [activeId, setActiveId] = useState<string>(SHOWCASE_PROJECTS[0].id);

  // Filter projects by category
  const displayedProjects = useMemo(() => {
    if (activeCategory === 'all') return SHOWCASE_PROJECTS;
    if (activeCategory === 'b2b-erp') {
      return SHOWCASE_PROJECTS.filter((p) =>
        ['b2b-bayi', 'crm-yonetim', 'erp-sistemleri', 'depo-sistemleri', 'doganlar-eczacilik', 'global-depo'].includes(p.id)
      );
    }
    if (activeCategory === 'eticaret') {
      return SHOWCASE_PROJECTS.filter((p) =>
        ['e-ticaret', 'multishop', 'ham-sandalye', 'doganlar-eczacilik'].includes(p.id)
      );
    }
    if (activeCategory === 'mobil') {
      return SHOWCASE_PROJECTS.filter((p) =>
        ['mobil-uygulama', 'servisciler', 'lcyikar'].includes(p.id)
      );
    }
    if (activeCategory === 'ai-cloud') {
      return SHOWCASE_PROJECTS.filter((p) =>
        ['ai-otomasyon', 'mikroservis', 'lexicallayer', 'seo-analitik'].includes(p.id)
      );
    }
    return SHOWCASE_PROJECTS;
  }, [activeCategory]);

  const scrollToProject = (id: string) => {
    setActiveId(id);
    const element = document.getElementById(`project-${id}`);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full flex flex-col gap-10">
      {/* Category Tabs & Quick Jump Navigation */}
      <div className="flex flex-col gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-[var(--line)] no-scrollbar">
          {[
            { key: 'all', label: 'Tüm Sistemler', count: SHOWCASE_PROJECTS.length },
            { key: 'b2b-erp', label: 'B2B & ERP', count: 6 },
            { key: 'eticaret', label: 'E-Ticaret & Pazaryeri', count: 4 },
            { key: 'mobil', label: 'Mobil Mühendislik', count: 3 },
            { key: 'ai-cloud', label: 'AI & Bulut Dağıtık', count: 4 },
          ].map((tab) => {
            const isActive = activeCategory === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => {
                  setActiveCategory(tab.key as CategoryFilter);
                }}
                className={`cursor-pointer shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-[var(--ink)] text-white shadow-sm'
                    : 'bg-[rgba(24,32,51,0.05)] text-[var(--ink)] hover:bg-[rgba(24,32,51,0.1)]'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`font-mono text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-black/5 text-[rgba(24,32,51,0.6)]'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Selector Pills (Akışta İlgili Projeye Atlama) */}
        <div className="flex items-center gap-2 overflow-x-auto py-2 no-scrollbar">
          {displayedProjects.map((project, idx) => {
            const isSelected = project.id === activeId;
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => scrollToProject(project.id)}
                className={`cursor-pointer shrink-0 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all ${
                  isSelected
                    ? 'border-black bg-black text-white shadow-sm'
                    : 'border-[var(--line)] bg-white/70 text-[var(--ink)] hover:border-gray-500 hover:text-black'
                }`}
              >
                <span className={`font-mono text-[11px] ${isSelected ? 'text-white/70' : 'text-gray-400'}`}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span>{project.client}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* All Projects Stream - Her biri sırayla donanım vitrini olarak listelenir */}
      <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20">
        {displayedProjects.map((project) => {
          const whatsappMessage = encodeURIComponent(
            `Merhaba Muhammet Bey, ${cityName ? `${cityName} bölgesindeki ` : ''}${project.client} mimarisine benzer bir sistem için teklif almak istiyorum.`
          );

          return (
            <section
              key={project.id}
              id={`project-${project.id}`}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#070709] p-5 sm:p-8 lg:p-12 transition-all duration-300 hover:border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.35)]"
            >
              {/* Subtle Color Aura */}
              <div
                className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-[600px] sm:w-[700px] rounded-full blur-[140px] opacity-25"
                style={{ backgroundColor: project.accent }}
              />

              <div className="relative z-10 flex flex-col items-center">
                {/* Hardware Stage Frame (MacBook Pro + iPhone 16 Pro) */}
                <div className="relative flex w-full max-w-6xl xl:max-w-7xl flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 py-2 sm:py-4">
                  {/* MacBook Pro Mockup */}
                  <div className="w-full lg:w-[82%] xl:w-[84%] transition-transform duration-500 hover:scale-[1.01]">
                    <MacbookPro
                      src={project.desktopImage}
                      className="h-auto w-full text-neutral-900 drop-shadow-[0_30px_60px_rgba(0,0,0,0.85)]"
                    />
                  </div>

                  {/* Overlapping iPhone 16 Pro Mockup with Custom Interactive Mobile Screen */}
                  <div className="w-44 sm:w-56 lg:w-[22%] xl:w-[20%] lg:-ml-20 lg:mt-16 xl:mt-20 z-20 transition-transform duration-500 hover:-translate-y-2">
                    <Iphone16Pro
                      src={CUSTOM_MOBILE_MOCKUPS[project.id] ? undefined : project.mobileImage}
                      className="h-auto w-full text-neutral-900 drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]"
                    >
                      {CUSTOM_MOBILE_MOCKUPS[project.id]}
                    </Iphone16Pro>
                  </div>
                </div>

                {/* Project Details Bar */}
                <div className="mt-8 w-full border-t border-white/10 pt-6 sm:pt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2.5 text-xs text-white/50 mb-2">
                      <span className="font-mono uppercase tracking-wider text-[#5FCDFF] font-semibold">
                        {project.client}
                      </span>
                      <span>•</span>
                      <span>{project.category}</span>
                      <span>•</span>
                      <span className="font-mono">{project.year}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-white mb-2 leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm lg:text-base text-[#E1E0CC]/80 leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-4 shrink-0">
                    <div className="flex flex-wrap gap-1.5 max-w-md">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-[#E1E0CC]/85 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      {project.externalUrl && (
                        <a
                          href={project.externalUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-[#E1E0CC] px-4 py-2 text-xs sm:text-sm font-medium text-black transition-all hover:bg-white hover:scale-105 shadow-sm"
                        >
                          <span>Canlı Siteyi Ziyaret Et</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      )}

                      <a
                        href={`https://wa.me/905070084069?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#166534] hover:bg-[#15803d] text-white px-4 py-2 text-xs sm:text-sm font-medium transition-all hover:scale-105 shadow-sm"
                      >
                        <MessageSquare className="h-4 w-4" />
                        <span>Bu Mimaride Teklif Al</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Akan Telefon Mockupları Marquee (Infinite Flowing Mobile Showcase) */}
      <div className="mt-8">
        <MobileAppsMarquee />
      </div>
    </div>
  );
}
