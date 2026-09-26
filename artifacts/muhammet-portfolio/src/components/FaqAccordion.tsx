import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Button } from './ui/button';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

export interface FaqAccordionItem {
  id: string;
  number: string;
  title: string;
  badge: string;
  content: string;
  actionText: string;
  actionUrl: string;
  img: string;
}

export const FAQ_ACCORDION_ITEMS: FaqAccordionItem[] = [
  {
    id: '01',
    number: '01',
    badge: 'Mobil Mimari & 4 Aşama',
    title: 'Mobil uygulama yaptırmak istiyorum, süreç nasıl işliyor?',
    content:
      'Süreç 4 temel aşamadan oluşur: 1) İhtiyaç Analizi & Mimari Taslak: Fikrinizi dinler, gerekli ekranları ve fonksiyonları netleştiririz. 2) Prototip & Arayüz Geliştirme: Modern ve kullanıcı dostu arayüzleri hazırlarım. 3) Kodlama & Test: React Native veya Flutter ile çift platforma eş zamanlı temiz ve test edilebilir kod yazarız. 4) Canlıya Alma: Uygulamanızı Apple App Store ve Google Play Store hesaplarınıza yükler, onay sürecini baştan sona yönetirim.',
    actionText: 'Süreç Hakkında Bilgi Al',
    actionUrl: '#contact',
    img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: '02',
    number: '02',
    badge: 'React Native & 60 FPS Native',
    title: 'Mobil uygulama hem iPhone (iOS) hem de Android cihazlarda çalışır mı?',
    content:
      'Evet. Geliştirdiğim uygulamalarda React Native ve Flutter teknolojilerini kullanarak tek bir sağlam kod tabanından hem iOS (iPhone, iPad) hem de Android (Samsung, Xiaomi vb.) cihazlarda yerel (native) hızda çalışan ürünler teslim ediyorum. Bu sayede iki ayrı ekip maliyetinden tasarruf eder, güncellemeleri aynı gün her iki mağazaya birden gönderirsiniz.',
    actionText: '50+ Yayındaki Uygulamayı Gör',
    actionUrl: '/apps',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: '03',
    number: '03',
    badge: 'Şeffaf Sözleşme & Sabit Fiyat',
    title: 'Mobil uygulama ve web sitesi yaptırma fiyatları nasıl belirlenir?',
    content:
      'Projenin kapsamı, ekran sayısı, entegrasyonlar (ödeme sistemleri, harita, yapay zeka API’leri, özel yönetim paneli) ve teslim süresi belirleyicidir. Net bir iş listesi çıkardıktan sonra sürpriz maliyetler içermeyen, şeffaf ve sabit bir teklif sunuyorum. İletişime geçerek projeniz için ücretsiz ön değerlendirme ve resmi fiyat teklifi alabilirsiniz.',
    actionText: 'Ücretsiz Teklif İste',
    actionUrl: '#contact',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: '04',
    number: '04',
    badge: 'Next.js & 100/100 Core Web Vitals',
    title: 'Web sitesi yaptırmak istiyorum, Google’da üst sıralarda çıkar mı (SEO)?',
    content:
      'Kesinlikle. Geliştirdiğim web siteleri Next.js ve modern sunucu taraflı render (SSR/SSG) teknolojileriyle hazırlanır. Schema.org yapısal verileri, OpenGraph etiketleri, sitemap.xml, robots.txt ve 100/100 Google Core Web Vitals performans kriterlerine uygun kodlanır; böylece arama motorları sitenizi hızla dizine ekler ve organik aramalarda üst sıralara taşır.',
    actionText: 'Web Sistemlerini İncele',
    actionUrl: '/web',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: '05',
    number: '05',
    badge: '%100 Mağaza Onay Güvencesi',
    title: 'Uygulama App Store ve Google Play Store onayından geçer mi?',
    content:
      'Evet. Bugüne kadar 50’den fazla mobil uygulamayı başarıyla mağazalara yüklemiş bir mühendis olarak, Apple Human Interface Guidelines ve Google Play Developer Policy kurallarına %100 uyumlu kod yazıyorum. Gizlilik politikası, izinler, hesap silme kuralları ve uygulama içi satın alma (IAP) gereksinimlerini eksiksiz uygulayarak ret riskini sıfıra indiriyorum.',
    actionText: "WhatsApp'tan Danış",
    actionUrl: 'https://wa.me/905445258979?text=Merhaba%2C%20mobil%20uygulama%20ma%C4%9Faza%20onay%20s%C3%BCreci%20hakk%C4%B1nda%20dan%C4%B1%C5%9Fmak%20istiyorum.',
    img: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: '06',
    number: '06',
    badge: '81 İl & Uzaktan (Remote) Model',
    title: 'Samsun ve Bayburt’tasınız; İstanbul, Ankara veya diğer illerden çalışabiliyor muyuz?',
    content:
      'Evet. Samsun ve Bayburt merkezli olarak çalışıyorum; başta İstanbul, Ankara, İzmir, Bursa, Antalya olmak üzere Türkiye’nin 81 ilindeki ve yurt dışındaki müşterilerimle %100 uzaktan (remote) kusursuz iş birlikleri yürütüyorum. Düzenli video toplantılar, haftalık canlı test sürümleri (TestFlight / APK) ve şeffaf ilerleme raporları ile fiziksel mesafe fark etmeksizin projenin her anında doğrudan yanınızdayım.',
    actionText: 'Görüşme Planla',
    actionUrl: '#contact',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: '07',
    number: '07',
    badge: 'Bayburt Yerel Yazılım & Birebir Destek',
    title: 'Bayburt’ta yazılım, bilgisayar ve web tasarım hizmeti veriyor musunuz?',
    content:
      'Evet. Bayburt Fen Lisesi mezunu olarak memleketim Bayburt’taki yerel işletmeler, KOBİ\'ler, esnaflar ve kurumlar için özel bilgisayar yazılımları, kurumsal web sitesi tasarımı, e-ticaret sistemleri, teknik veritabanı çözümleri ve iOS & Android mobil uygulama geliştirme hizmetlerini doğrudan yerinde veya online olarak sunuyorum.',
    actionText: 'Ofis & İletişim Bilgileri',
    actionUrl: '#contact',
    img: '/images/bayburt-software-office.jpg',
  },
];

export interface FaqAccordionProps {
  items?: FaqAccordionItem[];
  defaultOpenId?: string;
  className?: string;
}

export function FaqAccordion({
  items = FAQ_ACCORDION_ITEMS,
  defaultOpenId = '01',
  className = '',
}: FaqAccordionProps) {
  return (
    <div
      className={`w-full max-w-4xl mx-auto border border-[var(--line)] rounded-2xl bg-[var(--paper)] overflow-hidden shadow-sm ${className}`}
    >
      <Accordion type="single" defaultValue={defaultOpenId} collapsible className="w-full divide-y divide-[var(--line)]">
        {items.map((item) => (
          <AccordionItem
            className="relative border-b-0 group transition-colors"
            value={item.id}
            key={item.id}
            data-testid={`faq-item-${item.id}`}
          >
            <AccordionTrigger className="px-6 py-5 hover:no-underline [&>svg]:hidden flex items-center justify-between text-left transition-colors hover:bg-black/[0.02]">
              <div className="flex items-center gap-4 pr-3">
                <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[rgba(25,75,223,0.08)] text-[var(--cobalt)] group-data-[state=open]:bg-[var(--cobalt)] group-data-[state=open]:text-white transition-colors shrink-0">
                  {item.number}
                </span>
                <h3 className="text-base md:text-lg font-semibold text-[var(--ink)] tracking-tight">
                  {item.title}
                </h3>
              </div>
              <span className="w-8 h-8 rounded-full border border-[var(--line)] flex items-center justify-center shrink-0 text-[var(--ink)]/60 group-data-[state=open]:rotate-180 group-data-[state=open]:bg-[var(--cobalt)] group-data-[state=open]:text-white group-data-[state=open]:border-[var(--cobalt)] transition-all duration-200">
                <ChevronDown size={15} />
              </span>
            </AccordionTrigger>
            <AccordionContent className="relative p-0 text-muted-foreground w-full grid md:grid-cols-2 overflow-hidden bg-white/40">
              <div className="p-6 md:p-8 space-y-6 flex flex-col justify-between min-h-[230px]">
                <div className="space-y-3">
                  <span className="inline-block text-[11px] font-mono uppercase tracking-wider font-semibold text-[var(--cobalt)] bg-[rgba(25,75,223,0.08)] px-2.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                  <p className="text-sm md:text-[15px] leading-relaxed text-[#182033]/85 font-normal">
                    {item.content}
                  </p>
                </div>
                <div className="pt-1">
                  <Button
                    asChild
                    className="gap-2 bg-[var(--cobalt)] text-white hover:bg-[var(--cobalt)]/90 h-9 px-4 text-xs md:text-sm font-medium shadow-sm transition-all"
                  >
                    <a
                      href={item.actionUrl}
                      target={item.actionUrl.startsWith('http') ? '_blank' : undefined}
                      rel={item.actionUrl.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      <span>{item.actionText}</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="h-60 md:h-full md:border-l border-t md:border-t-0 border-[var(--line)] md:absolute md:w-1/2 md:right-0 md:top-0 relative overflow-hidden bg-black/5">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default FaqAccordion;
