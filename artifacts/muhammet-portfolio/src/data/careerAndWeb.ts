export interface WebProject {
  id: string;
  no: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  category: string;
  techStack: string[];
  features: string[];
  metrics?: string;
  liveUrl?: string;
  githubUrl?: string;
  cardBg?: string;
  architecture?: string;
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
  techStack: string[];
}

export const WEB_PROJECTS: WebProject[] = [
  {
    id: 'doganlar-eczacilik',
    no: '01',
    title: 'Doğanlar Eczacılık',
    tagline: 'Kurumsal B2B ve mikroservis e-ticaret platformu',
    description: 'Eczane-plasiyer iş akışını dijitalleştiren, Logo ERP entegrasyonlu; anlık stok, dinamik iskonto, cari bakiye ve sipariş süreçlerini uçtan uca yöneten kurumsal B2B platform.',
    metrics: '100+ eczane aktif kullanıyor',
    year: '2025',
    category: 'B2B / E-Commerce',
    techStack: ['ASP.NET Core', 'Microservices', 'Logo ERP', 'SQL Server', 'Redis', 'RabbitMQ'],
    architecture: 'Mikroservis Mimarisi & Dağıtık Event Altyapısı',
    features: [
      'Logo ERP Çift Yönlü Senkronizasyon: Stok, cari bakiye, vadeli fiyat ve siparişlerin anlık ERP entegrasyonu.',
      'Saha Plasiyer & Eczacı Sipariş Motoru: Eczaneler için özel sepet, iskonto baremleri ve plasiyer rota/tahsilat takibi.',
      'Dağıtık Sipariş & Kuyruk Yönetimi: RabbitMQ destekli asenkron sipariş işleme ile yüksek eşzamanlı işlem güvenliği.',
    ],
    liveUrl: 'https://www.doganlarecza.com/',
    cardBg: '#e7e5dd',
  },
  {
    id: 'lcyikar',
    no: '02',
    title: 'LCYıkar',
    tagline: 'Endüstriyel temizlik hizmetleri portalı',
    description: 'Kullanıcı ve kurumsal temizlik taleplerini merkezi sisteme toplayan, bölge ve ekiplere göre akıllı yönlendiren ve operasyonel panel sunan dijital hizmet platformu.',
    metrics: 'Türkiye geneli aktif operasyon',
    year: '2025',
    category: 'Service Platform',
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Admin Dashboard', 'SMS API'],
    architecture: 'Coğrafi Yönlendirmeli Hizmet Dağıtım Mimarisi',
    features: [
      'Bölgesel Otomatik Talep Yönlendirme: İl/ilçe bazında en yakın saha ekiplerine anında iş atama ve takip.',
      'Merkezi Operasyon & Yönetici Paneli: Randevu takvimi, dinamik fiyatlandırma, fatura ve ekip verimlilik analitiği.',
      'Müşteri Bildirim & Aşama İzleme: SMS ve e-posta tetiklemeleriyle randevu onay, yola çıkış ve tamamlanma bilgilendirmesi.',
    ],
    liveUrl: 'https://lcyikar.com/',
    cardBg: '#d5e1fa',
  },
  {
    id: 'tesvik-hesap',
    no: '03',
    title: 'Teşvik Hesap',
    tagline: 'SGK teşvik ve mevzuat otomasyon platformu',
    description: 'Karmaşık SGK ve istihdam teşvik hesaplamalarını saniyeler içinde otomatikleştiren, binlerce şube için merkezi konsolide raporlama ve analiz sunan SaaS sistemi.',
    metrics: '20.000+ şubeye hizmet',
    year: '2024',
    category: 'Automation / SaaS',
    techStack: ['ASP.NET Core', 'SQL Server', 'Automation Engine', 'Reporting', 'Excel Export'],
    architecture: 'Yüksek Performanslı Kurallar ve Teşvik Algoritma Motoru',
    features: [
      'Mevzuat Teşvik Kuralları Motoru: Personel bazlı teşvik uygunluğunu geçmişe dönük tarayan otomatik hesaplama algoritması.',
      'Büyük Veri & Konsolide Şube Analitiği: 20.000+ şubenin bordro ve teşvik verilerini milisaniyeler içinde işleyen SQL optimizasyonu.',
      'Şube & Genel Merkez Raporlaması: Tek tıkla detaylı denetim raporları, tasarruf grafikleri ve Excel/PDF çıktıları.',
    ],
    liveUrl: 'https://tesvikhesap.com/',
    cardBg: '#f9f7f0',
  },
  {
    id: 'myhr',
    no: '04',
    title: 'MyHR',
    tagline: 'Uçtan uca insan kaynakları yönetim sistemi',
    description: 'İşçi, İK Yöneticisi ve Şirket Admini rollerini buluşturan; konum doğrulamalı QR puantaj, dijital bordro, izin süreçleri ve anlık kurum içi iletişim modülleri sunan entegre İK platformu.',
    metrics: '3 rol tabanlı çalışma alanı',
    year: '2024',
    category: 'HR / Enterprise',
    techStack: ['React', 'Node.js', 'Socket.io', 'QR Validation', 'JWT Auth', 'Reporting'],
    architecture: 'Role-Based Access Control & Realtime Workspace',
    features: [
      'Konum Doğrulamalı Dinamik QR Puantaj: Sahteciliği önleyen, süreli ve lokasyon kısıtlamalı vardiya/mesai giriş-çıkış takibi.',
      '3 Katmanlı Rol & Yetki Altyapısı: İşçi, İK Departmanı ve Admin için özel dashboard ve izin onay hiyerarşisi.',
      'Dijital Özlük & Bordro Dağıtımı: Personel bordro onayları, yıllık izin takvimi ve kurum içi şifreli mesajlaşma.',
    ],
    liveUrl: 'https://hrfallow.com.tr/',
    cardBg: '#ece9df',
  },
  {
    id: 'multishop',
    no: '05',
    title: 'MultiShop',
    tagline: 'Mikroservis mimarili yeni nesil e-ticaret platformu',
    description: 'Ürün yönetimi, sipariş işleme, kargo entegrasyonu ve güvenli ödeme altyapısını bağımsız mikroservislerle yöneten, yüksek trafiğe dayanıklı e-ticaret platformu.',
    metrics: 'Ölçeklenebilir mikroservis altyapısı',
    year: '2023',
    category: 'E-Commerce / Microservices',
    techStack: ['ASP.NET Core', 'Microservices', 'Ocelot API Gateway', 'SQL Server', 'Stripe / Iyzico'],
    architecture: 'API Gateway & Dağıtık Mikroservis Ekosistemi',
    features: [
      'Bağımsız Mikroservisler: Identity, Catalog, Order, Payment ve Notification servislerinin modüler ayrımı.',
      'API Gateway & Trafik Yönlendirme: Ocelot gateway ile servisler arası güvenli yönlendirme ve rate-limiting.',
      'Kargo & Sanal POS Entegrasyonları: Çoklu banka sanal POS desteği, 3D Secure ve anlık kargo takip webhookları.',
    ],
    liveUrl: 'https://mobilia.com.tr/',
    cardBg: '#e7e5dd',
  },
  {
    id: 'ham-sandalye',
    no: '06',
    title: 'Ham Sandalye',
    tagline: 'Tam entegre e-ticaret ve mobilya mağazası',
    description: 'Yüksek çözünürlüklü ürün sunumu, kumaş ve cila varyant seçicisi, güçlü SEO mimarisi ve mobil öncelikli hızlı satın alma akışıyla geliştirilen modern e-ticaret mağazası.',
    metrics: 'SEO ve mobil uyumlu yüksek dönüşüm',
    year: '2023',
    category: 'E-Commerce / Web',
    techStack: ['E-Commerce', 'Next.js', 'SEO Optimization', 'Responsive UI', 'Payment Gateway'],
    architecture: 'SSR Tabanlı Yüksek Hızlı Katalog & Checkout',
    features: [
      'Gelişmiş Varyant & Özelleştirme: Kumaş türü, ahşap cilası ve ölçülere göre anlık fiyat güncelleyen modül.',
      'Core Web Vitals & Organik SEO: Sub-second sayfa açılış hızları, optimize edilmiş WebP görseller ve zengin snippetlar.',
      'Mobil Öncelikli Hızlı Satın Alma: Sürtünmesiz tek adımda ödeme akışı ve WhatsApp doğrudan sipariş hattı.',
    ],
    liveUrl: 'https://hamsandalye.com/',
    cardBg: '#d5e1fa',
  },
  {
    id: 'has-agac',
    no: '07',
    title: 'Has Ağaç',
    tagline: 'Masif ağaç ürünleri kurumsal vitrini',
    description: 'Doğal ahşap ve masif ürünlerin teknik detaylarını, yüksek kaliteli fotoğraf galerilerini ve kurumsal kimliği organik arama görünürlüğü ile buluşturan web platformu.',
    metrics: 'SEO odaklı organik erişim',
    year: '2023',
    category: 'Corporate / SEO',
    techStack: ['Web Design', 'Next.js', 'SEO Architecture', 'Responsive UI', 'Schema Markup'],
    architecture: 'Semantik İçerik ve Arama Motoru İndeksleme Mimarisi',
    features: [
      'Teknik Ebat & Ağaç Türü Kataloğu: Nem oranı, ağaç cinsi ve özel kesim detaylarını sunan teknik tablo yapısı.',
      'Sektörel SEO Mimarisi: Masif ahşap aramalarında ilk sayfada listelenmeyi sağlayan semantik HTML ve schema entegrasyonu.',
      'Kurumsal Teklif & İletişim Formları: Özel ebatlı siparişler için anlık WhatsApp ve e-posta teklif oluşturma.',
    ],
    liveUrl: 'https://hasagac.com.tr/',
    cardBg: '#f9f7f0',
  },
  {
    id: 'servisciler',
    no: '08',
    title: 'Servisciler',
    tagline: 'Personel ve okul servisi araç pazaryeri',
    description: 'Servis aracı sahipleri, şoförler ve araç arayan şirketleri bir araya getiren; plaka, araç kiralama, rota ilanı ve anlık mesajlaşma sunan sektörel pazaryeri platformu.',
    metrics: 'Sektörel ilan ve iletişim altyapısı',
    year: '2023',
    category: 'Marketplace / Platform',
    techStack: ['Marketplace Engine', 'React', 'Node.js', 'Live Chat', 'Mobile Responsive'],
    architecture: 'Çift Taraflı Pazaryeri ve İletişim Altyapısı',
    features: [
      'Akıllı Filtreleme & İlan Motoru: İlçe, koltuk sayısı, güzergah ve model yılına göre anında araç eşleştirme.',
      'Güvenli İletişim & Mesajlaşma: İlan sahipleri ile doğrudan platform üzerinden mesajlaşma ve bildirim sistemi.',
      'Şoför & Araç Belge Doğrulama: Güvenli taşımacılık için yetki belgesi ve ruhsat ön kontrol mekanizması.',
    ],
    liveUrl: 'https://servisciler.com/',
    cardBg: '#e7e5dd',
  },
  {
    id: 'babayigit-yamen',
    no: '09',
    title: 'Babayiğit Yamen',
    tagline: 'Hukuk bürosu dijital içerik platformu',
    description: 'Hukuk profesyonelleri için dinamik hukuki makale yayını, müvekkil bilgilendirme bültenleri, içtihat paylaşımları ve yerel arama motoru optimizasyonu sağlayan kurumsal web sitesi.',
    metrics: 'Organik görünürlük ve makale yayını',
    year: '2022',
    category: 'Corporate / Content',
    techStack: ['CMS', 'Next.js', 'SEO Engine', 'Legal Content Platform', 'Responsive UI'],
    architecture: 'İçerik Yönetim & SEO Dağıtım Mimarisi',
    features: [
      'Dinamik Hukuki Makale & Mevzuat CMS: Avukatların kolayca mevzuat bülteni ve makale yayınlayabildiği panel.',
      'Uzmanlık Alanı Segmentasyonu: Ceza, Ticaret ve İş hukuku alanlarına göre ayrıştırılmış konu indeksleme.',
      'Müvekkil Danışmanlık & Randevu Akışı: Güvenli SSL şifrelemeli ön bilgilendirme ve danışmanlık talep formu.',
    ],
    liveUrl: 'https://babayigityamen.av.tr/',
    cardBg: '#d5e1fa',
  },
  {
    id: 'global-depo',
    no: '10',
    title: 'Global Depo',
    tagline: 'B2B ve entegre depo yönetim platformu',
    description: 'Pazaryeri siparişleri, kargo operasyonları ve fiziki depo stok hareketlerini tek ekranda toplayan; barkodlu kabul ve sevkiyat yönetimi sunan B2B operasyon altyapısı.',
    metrics: 'Entegre depo ve operasyon yönetimi',
    year: '2022',
    category: 'B2B / Operations',
    techStack: ['B2B Portal', 'Warehouse Engine', 'Barcode Scanner', 'API Integrations', 'SQL'],
    architecture: 'Çok Kanallı Entegrasyon ve Depo İşletim Sistemi',
    features: [
      'Pazaryeri & E-Ticaret Entegrasyonu: Trendyol, Hepsiburada ve özel mağazaların siparişlerini tek havuzda birleştirme.',
      'Barkodlu Raf & Stok Yönetimi: El terminalleriyle hızlı ürün sayımı, yerleşim optimizasyonu ve sıfır hatalı toplama.',
      'Otomatik Kargo Barkodu & İrsaliye: Sipariş tamamlandığında anında kargo etiketi basımı ve fatura eşleştirmesi.',
    ],
    liveUrl: 'https://globaldepo.com/',
    cardBg: '#ece9df',
  },
  {
    id: 'zafer-lokantasi',
    no: '11',
    title: 'Zafer Lokantası',
    tagline: 'Tanıtım, dinamik menü ve QR deneyimi',
    description: 'Geleneksel lezzetleri dijital dünyaya taşıyan; günlük değişen yemek menüsü, alerjen ve kalori bilgileri, QR menü ve yerel SEO entegrasyonu sunan modern restoran sitesi.',
    metrics: 'Temassız QR menü ve yerel erişim',
    year: '2022',
    category: 'Restaurant / SEO',
    techStack: ['Dynamic QR Menu', 'Next.js', 'Local SEO', 'Mobile First', 'Analytics'],
    architecture: 'Hızlı Yüklenen Statik Menü ve Yerel SEO Mimarisi',
    features: [
      'Dinamik QR Menü Altyapısı: Masa üzeri QR kodlarla anında yüklenen, mobil cihazlara özel hafif menü tasarımı.',
      'Günlük Menü & İçerik Yönetimi: Mutfak ekibinin günün çorbası ve yemeklerini tek tıkla güncelleyebildiği arayüz.',
      'Google Harita & Yerel SEO Entegrasyonu: Bölgesel gastronomi ve restoran aramalarında doğrudan öne çıkma.',
    ],
    liveUrl: 'https://zaferlokantasi.com.tr/',
    cardBg: '#f9f7f0',
  },
  {
    id: 'eflal-dusakabin',
    no: '12',
    title: 'Eflal Duşakabin',
    tagline: 'SEO uyumlu ürün kataloğu ve keşif sitesi',
    description: 'Özel ölçülü duşakabin modellerini, cam ve profil seçeneklerini görselleştiren; yerinde keşif ve montaj randevusu toplamaya odaklanmış yüksek dönüşümlü web sitesi.',
    metrics: 'Yerel görünürlük ve montaj talepleri',
    year: '2022',
    category: 'Corporate / SEO',
    techStack: ['Product Showcase', 'Local SEO', 'Responsive Design', 'Lead Generation'],
    architecture: 'Dönüşüm Odaklı Landing Page ve Katalog Mimarisi',
    features: [
      'Özel Ölçü ve Model Filtreleme: Köşe, düz ve sürgülü modeller için profil ve cam renklerine göre seçim imkanı.',
      'Ücretsiz Keşif & Randevu Formu: Lokasyon bazlı servis talebi ve WhatsApp doğrudan danışmanlık bağlantısı.',
      'Uygulama Referans Galerisi: Tamamlanan gerçek müşteri montaj fotoğraflarıyla güven inşa eden referans modülü.',
    ],
    liveUrl: 'https://eflaldusakabin.com.tr/',
    cardBg: '#d5e1fa',
  },
  {
    id: 'wander-turkiye',
    no: '13',
    title: 'Wander Türkiye',
    tagline: 'Kültür ve seyahat rehber platformu',
    description: 'Türkiye’nin 81 ilindeki tarihi, kültürel ve doğal güzellikleri interaktif rotalar, gezi rehberleri ve zengin fotoğraf galerileriyle keşfetmeye açan dijital turizm portalı.',
    metrics: 'Zengin içerik ve interaktif keşif',
    year: '2022',
    category: 'Travel / Content',
    techStack: ['Content Platform', 'Interactive Maps', 'SEO Architecture', 'Image Optimization'],
    architecture: 'Bölgesel Rota ve Zengin Medya Dağıtım Mimarisi',
    features: [
      'İnteraktif Şehir & Rota Rehberi: Bölge ve temalara (tarih, doğa, gastronomi) göre ayrılmış detaylı seyahat rehberleri.',
      'Yüksek Performanslı Medya Galerisi: Hızlı yüklenen responsive fotoğraflar ve gezi rotası harita işaretçileri.',
      'Kullanıcı İpuçları & Ziyaret Bilgileri: Müzekart geçerliliği, en uygun ziyaret saati ve ulaşım detaylarını içeren bilgi kartları.',
    ],
    liveUrl: 'https://www.wanderturkiye.com.tr/',
    cardBg: '#e7e5dd',
  },
];

export interface Education {
  id: string;
  period: string;
  degree: string;
  institution: string;
  field?: string;
}

export const EDUCATION_LIST: Education[] = [
  {
    id: 'edu-samsun',
    period: 'Eyl 2022 — May 2026',
    degree: 'Lisans Derecesi',
    institution: 'Samsun Üniversitesi',
    field: 'Yazılım Mühendisliği',
  },
  {
    id: 'edu-bayburt',
    period: 'Oca 2018 — Oca 2022',
    degree: 'Lise',
    institution: 'Bayburt Fen Lisesi',
    field: 'Sayısal / Fen Bilimleri',
  },
];

export const CAREER_EXPERIENCES: Experience[] = [
  {
    id: 'exp-virelonsoft',
    period: '2024 — Günümüz',
    role: 'Kurucu & Yazılım Mühendisi',
    company: 'VirelonSoft (Mobil & Web Yazılım Şirketi)',
    location: 'Bayburt / Samsun, Türkiye • Uzaktan',
    description: 'iOS, Android ve kurumsal web platformları geliştiren; yapay zeka, derin öğrenme ve modern mobil teknolojilere odaklı bağımsız yazılım stüdyosu.',
    highlights: [
      '50+ yayında mobil uygulamanın ve kurumsal platformların uçtan uca mimari tasarımı ve yayını',
      'YOLO ve ResNet tabanlı derin öğrenme ve mobil görüntü işleme AR-GE çalışmaları',
      'Google İşletme / Harita profili entegrasyonu ve kurumsal müşteri çözümleri',
    ],
    techStack: ['React Native', 'Flutter', 'ASP.NET Core', 'Node.js', 'YOLO', 'ResNet', 'PyTorch'],
  },
  {
    id: 'exp-crudfab-intern-30',
    period: 'Ara 2025 — Oca 2026',
    role: 'Yazılım Mühendisliği Stajyeri',
    company: 'Crudfab',
    location: 'Ankara, Türkiye • Hibrit',
    description: 'Mikrodenetleyici mimarileri, telemetri testleri ve donanım kontrol süreçleri üzerine 30 günlük yazılım mühendisliği stajı.',
    highlights: [
      'Mikrodenetleyici programlama ve çevre birimi testleri',
      'Gömülü C yazılım geliştirme ve donanım haberleşme testleri',
    ],
    techStack: ['Gömülü Sistemler', 'Microcontrollers', 'C/C++', 'Telemetri', 'Donanım Testi'],
  },
  {
    id: 'exp-crudfab-intern-75',
    period: 'Eyl 2025 — Ara 2025',
    role: 'Yazılım Mühendisliği Stajyeri',
    company: 'Crudfab',
    location: 'Ankara, Türkiye • Hibrit',
    description: 'Savunma Sanayii Başkanlığı projeleri kapsamında Flight Controller mimarisi, sensör füzyonu ve otonom görev algoritmaları üzerine 75 günlük yoğun staj dönemi.',
    highlights: [
      'Uçuş kontrol sistemleri ve donanım test senaryolarının işletilmesi',
      'Sensör haberleşme protokolleri ve telemetri akış entegrasyonu',
    ],
    techStack: ['Savunma Sanayii Başkanlığı', 'Flight Controller', 'Gömülü Yazılım', 'C/C++', 'Python'],
  },
  {
    id: 'exp-cumhurbaskanligi',
    period: 'Tem 2025 — Eyl 2025',
    role: 'Stajyer Mühendis',
    company: 'T.C. Cumhurbaşkanlığı',
    location: 'Ankara, Türkiye • Ofiste',
    description: 'Büyük ölçekli kurumsal altyapılarda DevOps süreçleri, Large Language Model Operations (LLMOps), yapay zeka model servis mimarileri ve güvenli sistem yönetimi üzerine mühendislik stajı.',
    highlights: [
      'Large Language Model Operations (LLMOps) ve yapay zeka model servisleri',
      'DevOps süreçleri, konteynerleştirme ve CI/CD boru hatları',
      'Kritik kurumsal bilişim standartlarında yüksek güvenlikli altyapı operasyonu',
    ],
    techStack: ['DevOps', 'LLMOps', 'AI / ML Ops', 'Docker', 'Kubernetes', 'CI/CD Pipelines'],
  },
  {
    id: 'exp-independent',
    period: '2018 — Devam ediyor',
    role: 'Mobil & Web Yazılım Mühendisi',
    company: 'Bağımsız Üretim & Danışmanlık',
    location: 'Türkiye / Uzaktan',
    description: 'App Store ve Google Play üzerinde 50+ üretim mobil uygulaması ile kurumsal B2B web sistemlerinin mimarisini, arayüz jestlerini ve altyapısını uçtan uca tasarlayıp yayına alma.',
    highlights: [
      '50+ mağazada yayında mobil uygulama (React Native, Flutter, Swift, Kotlin)',
      'B2B eczacılık ve hizmet sektörlerinde kurumsal ERP entegrasyonlu web portalları',
      '60 FPS akıcı jest fiziği, mikroservis mimarileri ve dağıtık veri altyapıları',
    ],
    techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Next.js', 'ASP.NET Core', 'PostgreSQL'],
  },
];

export const CV_METADATA = {
  name: 'Muhammet Atmaca — Özgeçmiş',
  fileName: 'Muhammet_Atmaca_CV.pdf',
  fileSize: 'PDF • 252 KB',
  lastUpdated: 'Güncel 2025',
  downloadUrl: '/muhammetatmacacv.pdf',
  requestEmailUrl: 'mailto:muhammetatmaca79@gmail.com?subject=Özgeçmiş Talebi - Muhammet Atmaca',
};
