import { Link } from 'wouter';
import { ArrowUpRight } from 'lucide-react';

interface SitelinkItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  href: string;
  isInternalRoute: boolean;
}

const SITELINKS: SitelinkItem[] = [
  {
    id: 'sitelink-apps',
    badge: 'Mobil Dizin',
    title: 'Mobil Uygulamalar (50+)',
    description: 'React Native & Flutter ile App Store ve Google Play’de yayında olan 50’den fazla mobil uygulama kataloğu.',
    href: '/apps',
    isInternalRoute: true,
  },
  {
    id: 'sitelink-web',
    badge: 'Web Dizin',
    title: 'Web Sistemleri & Platformlar',
    description: 'Next.js, ASP.NET Core ve Node.js mimarisiyle geliştirilen ölçeklenebilir kurumsal web platformları.',
    href: '/web',
    isInternalRoute: true,
  },
  {
    id: 'sitelink-services',
    badge: 'Rehber & Teklif',
    title: 'Hizmetler & Sıkça Sorulan Sorular',
    description: 'Mobil uygulama ve web sitesi yaptırma süreci, fiyatlandırma, mağaza onayları ve teknik danışmanlık.',
    href: '/#services',
    isInternalRoute: false,
  },
  {
    id: 'sitelink-career',
    badge: 'Deneyim & CV',
    title: 'Kariyer & Deneyim',
    description: '7 yılı aşkın savunma sanayii ve kurumsal yazılım mühendisliği kariyeri, projeler ve PDF özgeçmiş.',
    href: '/#career',
    isInternalRoute: false,
  },
  {
    id: 'sitelink-contact',
    badge: 'İletişim',
    title: 'İletişim & Proje Teklifi',
    description: 'Geliştirmek istediğiniz fikirler için ücretsiz ön değerlendirme, teklif ve doğrudan mühendis iletişimi.',
    href: '/#contact',
    isInternalRoute: false,
  },
];

export function SitelinksDirectory() {
  return (
    <section className="sitelinks-section container-wide" aria-label="Site Haritası ve Alt Sayfa Bağlantıları">
      <div className="sitelinks-container">
        <div className="sitelinks-header">
          <div>
            <div className="eyebrow">Site Rehberi & Dizin</div>
            <h3 className="sitelinks-main-title">Öne Çıkan Sayfalar ve Bölümler</h3>
          </div>
          <p className="sitelinks-lede">
            Doğrudan aradığınız içeriğe, proje kataloglarına veya teklif alma rehberine hızlıca ulaşın.
          </p>
        </div>

        <nav className="sitelinks-grid" aria-label="Site içi alt bağlantılar">
          {SITELINKS.map((item) => {
            const content = (
              <>
                <div className="sitelink-top">
                  <span className="sitelink-badge">{item.badge}</span>
                  <ArrowUpRight size={14} className="sitelink-icon" />
                </div>
                <strong className="sitelink-title">{item.title}</strong>
                <p className="sitelink-desc">{item.description}</p>
              </>
            );

            return item.isInternalRoute ? (
              <Link
                key={item.id}
                href={item.href}
                className="sitelink-card"
                data-testid={item.id}
              >
                {content}
              </Link>
            ) : (
              <a
                key={item.id}
                href={item.href}
                className="sitelink-card"
                data-testid={item.id}
              >
                {content}
              </a>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
