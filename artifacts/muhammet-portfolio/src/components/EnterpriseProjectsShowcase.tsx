import { useState, useMemo } from 'react';
import { ArrowUpRight, ExternalLink, Laptop, MessageSquare, Smartphone, Sparkles } from 'lucide-react';
import { SHOWCASE_PROJECTS, ShowcaseProject } from '@/data/showcaseProjects';
import { MacbookPro } from '@/components/ui/macbook-pro';
import { Iphone16Pro } from '@/components/ui/iphone-16-pro';

interface EnterpriseProjectsShowcaseProps {
  initialProjectId?: string;
  serviceType?: string;
  cityName?: string;
}

type CategoryFilter = 'all' | 'b2b-erp' | 'eticaret' | 'mobil' | 'ai-cloud';

export function EnterpriseProjectsShowcase({
  initialProjectId,
  serviceType,
  cityName,
}: EnterpriseProjectsShowcaseProps) {
  // Determine default category based on serviceType
  const defaultCategory = useMemo<CategoryFilter>(() => {
    if (serviceType === 'e-ticaret') return 'eticaret';
    if (serviceType === 'mobil-uygulama') return 'mobil';
    if (serviceType === 'yazilim' || serviceType === 'kurumsal') return 'b2b-erp';
    return 'all';
  }, [serviceType]);

  const [activeCategory, setActiveCategory] = useState<CategoryFilter>(defaultCategory);

  // Determine initial active project
  const defaultProjectId = useMemo(() => {
    if (initialProjectId && SHOWCASE_PROJECTS.some((p) => p.id === initialProjectId)) {
      return initialProjectId;
    }
    if (serviceType === 'e-ticaret') return 'doganlar-eczacilik';
    if (serviceType === 'mobil-uygulama') return 'mobil-uygulama';
    return 'b2b-bayi';
  }, [initialProjectId, serviceType]);

  const [selectedProjectId, setSelectedProjectId] = useState<string>(defaultProjectId);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
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

  const activeProject = useMemo(() => {
    return SHOWCASE_PROJECTS.find((p) => p.id === selectedProjectId) || SHOWCASE_PROJECTS[0];
  }, [selectedProjectId]);

  const handleSelectProject = (id: string) => {
    setSelectedProjectId(id);
    const stageEl = document.getElementById('enterprise-hardware-stage');
    if (stageEl) {
      stageEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Merhaba Muhammet Bey, ${cityName ? `${cityName} bölgesindeki ` : ''}${activeProject.client} mimarisine benzer bir yazılım projesi için görüşmek istiyorum.`
  );

  return (
    <div className="w-full flex flex-col gap-8">
      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[var(--line)] no-scrollbar">
        {[
          { key: 'all', label: 'Tüm Projeler', count: SHOWCASE_PROJECTS.length },
          { key: 'b2b-erp', label: 'B2B & ERP Sistemleri', count: 6 },
          { key: 'eticaret', label: 'E-Ticaret & Pazaryeri', count: 4 },
          { key: 'mobil', label: 'Mobil Mühendislik', count: 3 },
          { key: 'ai-cloud', label: 'AI & Bulut Dağıtık', count: 4 },
        ].map((tab) => {
          const isActive = activeCategory === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveCategory(tab.key as CategoryFilter)}
              className={`cursor-pointer shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                isActive
                  ? 'bg-[var(--ink)] text-white shadow-sm'
                  : 'bg-[rgba(24,32,51,0.04)] text-[var(--ink)] hover:bg-[rgba(24,32,51,0.08)]'
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

      {/* Project Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {filteredProjects.map((proj, idx) => {
          const isSelected = proj.id === activeProject.id;
          return (
            <button
              key={proj.id}
              type="button"
              onClick={() => setSelectedProjectId(proj.id)}
              className={`cursor-pointer shrink-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                isSelected
                  ? 'bg-[var(--cobalt)] text-white border-[var(--cobalt)] shadow-sm font-semibold'
                  : 'bg-white/70 text-[var(--ink)] border-[var(--line)] hover:border-[var(--cobalt)]'
              }`}
            >
              <span className={isSelected ? 'text-white/80' : 'text-[rgba(24,32,51,0.45)]'}>
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span>{proj.client}</span>
            </button>
          );
        })}
      </div>

      {/* Main Hardware Stage Showcase Card */}
      <div
        id="enterprise-hardware-stage"
        className="relative overflow-hidden rounded-3xl border border-stone-800 bg-[#070709] p-5 sm:p-8 lg:p-12 shadow-2xl text-white transition-all duration-300"
      >
        {/* Subtle Ambient Color Aura */}
        <div
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-[600px] sm:w-[800px] rounded-full blur-[140px] opacity-25 transition-all duration-700"
          style={{ backgroundColor: activeProject.accent || '#194bdf' }}
        />

        <div className="relative z-10 flex flex-col items-center">
          {/* Dual Hardware Mockups Frame (MacBook Pro + iPhone 16 Pro) */}
          <div className="relative flex w-full max-w-5xl flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 py-2 sm:py-6">
            {/* MacBook Pro Mockup */}
            <div className="w-full lg:w-[82%] xl:w-[84%] transition-transform duration-500 hover:scale-[1.01]">
              <MacbookPro
                src={activeProject.desktopImage}
                className="h-auto w-full text-neutral-900 drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]"
              />
            </div>

            {/* Overlapping iPhone 16 Pro Mockup */}
            <div className="w-40 sm:w-52 lg:w-[22%] xl:w-[20%] lg:-ml-16 lg:mt-14 xl:mt-16 z-20 transition-transform duration-500 hover:-translate-y-2">
              <Iphone16Pro
                src={activeProject.mobileImage}
                className="h-auto w-full text-neutral-900 drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)]"
              />
            </div>
          </div>

          {/* Project Details Bar */}
          <div className="mt-8 w-full border-t border-white/10 pt-6 flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2.5 text-xs text-white/60 mb-2.5">
                <span className="font-mono uppercase tracking-wider text-[#5FCDFF] font-semibold">
                  {activeProject.client}
                </span>
                <span>•</span>
                <span className="text-white/80">{activeProject.category}</span>
                <span>•</span>
                <span className="font-mono text-white/50">{activeProject.year}</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-white mb-3 leading-snug">
                {activeProject.title}
              </h3>

              <p className="text-sm sm:text-base text-[#E1E0CC]/85 leading-relaxed font-sans">
                {activeProject.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {activeProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-[#E1E0CC]/90 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              {activeProject.externalUrl && (
                <a
                  href={activeProject.externalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs sm:text-sm font-semibold text-black transition-all hover:bg-[#E1E0CC] hover:scale-[1.02] shadow-sm"
                >
                  <span>Canlı Sistemi Ziyaret Et</span>
                  <ExternalLink size={15} />
                </a>
              )}

              <a
                href={`https://wa.me/905070084069?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#166534] hover:bg-[#15803d] text-white px-5 py-3 text-xs sm:text-sm font-semibold transition-all hover:scale-[1.02] shadow-sm"
              >
                <MessageSquare size={15} />
                <span>Bu Mimaride Teklif Al</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Other Systems in Active Category */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-base sm:text-lg font-bold text-[var(--ink)] flex items-center gap-2">
            <Sparkles size={16} className="text-[var(--cobalt)]" />
            <span>Kategorideki Diğer Mimari ve Canlı Sistemler ({filteredProjects.length})</span>
          </h4>
          <span className="text-xs font-mono text-[rgba(24,32,51,0.5)]">
            Tıklayarak donanım vitrininde inceleyin
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((item) => {
            const isCurrent = item.id === activeProject.id;
            return (
              <div
                key={item.id}
                onClick={() => handleSelectProject(item.id)}
                className={`cursor-pointer group text-left rounded-2xl p-4 transition-all border flex flex-col justify-between gap-3 ${
                  isCurrent
                    ? 'bg-white border-[var(--cobalt)] ring-2 ring-[var(--cobalt)]/20 shadow-md'
                    : 'bg-[rgba(250,248,242,0.9)] hover:bg-white border-[var(--line)] hover:border-[var(--ink)] shadow-xs'
                }`}
              >
                <div>
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-3 bg-[#0d0f12] border border-black/10">
                    <img
                      src={item.desktopImage}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/80 backdrop-blur-xs text-[10px] font-mono text-white/90">
                      {item.year}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[rgba(24,32,51,0.6)] mb-1">
                    <span className="font-mono font-semibold text-[var(--cobalt)]">
                      {item.client}
                    </span>
                    <span className="text-[11px] truncate max-w-[150px]">{item.category}</span>
                  </div>

                  <h5 className="text-sm font-bold text-[var(--ink)] line-clamp-1 group-hover:text-[var(--cobalt)] transition-colors">
                    {item.title}
                  </h5>

                  <p className="text-xs text-[rgba(24,32,51,0.72)] line-clamp-2 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[var(--line)]/60 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-[rgba(24,32,51,0.5)]">
                    <Laptop size={13} />
                    <Smartphone size={13} />
                    <span className="text-[11px] font-mono">Çift Ekran</span>
                  </div>
                  <span className="font-semibold text-[var(--cobalt)] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    {isCurrent ? 'Seçili' : 'Vitrinde İncele'}
                    <ArrowUpRight size={13} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
