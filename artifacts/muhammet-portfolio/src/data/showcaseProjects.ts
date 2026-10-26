export interface ShowcaseProject {
  id: string;
  title: string;
  client: string;
  year: string;
  category: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
  internalRoute?: string;
  externalUrl?: string;
  accent: string;
  tags: string[];
}

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  /* --- 1. ÇÖZÜM MİMARİLERİ & PLATFORM SİSTEMLERİ --- */
  {
    id: "b2b-bayi",
    title: "Modern B2B Bayi Portalı — Kademeli İskonto, Cari Bakiye ve Toptan Sipariş Ağı",
    client: "B2B Bayi Portalı",
    year: "2026",
    category: "B2B Ticaret & Sipariş Portalı",
    description:
      "Telefon ve mesaj trafiğini sıfırlayan kurumsal B2B ticaret altyapısı. Bayi ve müşteri gruplarına özel dinamik kademeli iskonto matrisi, açık hesap/çek/senet cari risk ve limit kontrolü, vadeli sipariş onay ve plasiyer yetkilendirme zinciri. ERP sistemleriyle çift yönlü canlı stok senkronizasyonu, 7/24 kesintisiz DBS (Doğrudan Borçlandırma Sistemi) ve 3D Secure sanal POS e-tahsilat entegrasyonu sunan uçtan uca toptan satış platformu.",
    desktopImage: "/showcase/.webp",
    mobileImage: "/showcase/.webp",
    accent: "#5FCDFF",
    tags: ["B2B Bayi Portalı", "Kademeli İskonto Matrisi", "Cari Risk & DBS", "Canlı ERP Stok Entegre", "Vadeli Sipariş Onayı", "Plasiyer Saha Ağı", "Next.js"],
  },
  {
    id: "crm-yonetim",
    title: "Modern Karanlık CRM & Çok Kanallı Müşteri Operasyon Dashboard'u",
    client: "CRM Dashboard",
    year: "2026",
    category: "Kurumsal CRM & Analitik",
    description:
      "Dağınık Excel tabloları ve kaybolan müşteri verilerini tek ekranda toplayan kurumsal CRM mimarisi. Aday müşteriden satışa kadar dinamik Kanban satış hunisi (pipeline), çok kanallı iletişim geçmişi (WhatsApp, E-posta, Telefon entegrasyonu), otomatik teklif ve sözleşme PDF motoru. Departman bazlı hedef takibi, anlık ciro ve kârlılık metrikleri ile saha ekipleri için rol bazlı granular yetkilendirme sistemi.",
    desktopImage: "/showcase/.webp",
    mobileImage: "/showcase/.webp",
    accent: "#00F59B",
    tags: ["Kurumsal CRM", "Satış Hunisi (Pipeline)", "Otomatik Teklif PDF", "WhatsApp / E-Posta Entegre", "Granular Yetkilendirme", "Canlı Ciro Metrikleri", "TypeScript"],
  },
  {
    id: "erp-sistemleri",
    title: "Modüler Bulut ERP Yönetim Paneli & Kurumsal Kaynak Planlama",
    client: "ERP Paneli",
    year: "2026",
    category: "ERP & Kaynak Planlama",
    description:
      "Departmanlar arası kopuklukları ortadan kaldıran şirket içi modüler ERP omurgası. GİB onaylı e-Fatura, e-Arşiv ve e-İrsaliye entegrasyonu; çoklu depo, şube ve dövizli cari hesap yönetimi. Satın alma talebinden onay zincirine kadar tam denetim mekanizması, personel bordro ve izin takip modülleri ile finansal nakit akışını milisaniyeler içinde simüle eden canlı raporlama motoru.",
    desktopImage: "/showcase/.webp",
    mobileImage: "/showcase/.webp",
    accent: "#5FCDFF",
    tags: ["Modüler ERP Omurgası", "e-Dönüşüm (GİB e-Fatura)", "Satın Alma Onay Zinciri", "Dövizli Cari Yönetimi", "Nakit Akış Simülasyonu", "PostgreSQL"],
  },
  {
    id: "seo-analitik",
    title: "Kurumsal SEO Analitik Platformu & Yapay Zeka Destekli Sıralama Radarı",
    client: "SEO Analitik",
    year: "2026",
    category: "SEO & Organik Büyüme Analitiği",
    description:
      "Organik arama motoru trafiğini ve anahtar kelime sıralamalarını 7/24 otonom izleyen analitik motoru. Google Search Console API ve PageSpeed Core Web Vitals doğrudan veri akışı; kırık link, indexleme ve schema markup açıklarını tespit eden teknik SEO tarayıcısı. Sektörel rakip sıralama değişimlerini anlık bildiren ve hedeflenen kelimelerde içerik boşluklarını haritalandıran otomatik raporlama platformu.",
    desktopImage: "/showcase/.webp",
    mobileImage: "/showcase/.webp",
    accent: "#bef264",
    tags: ["SEO Sıralama Radarı", "GSC / Search Console API", "Core Web Vitals Analizi", "Teknik SEO Tarayıcı", "Rakip GAP Analizi", "Otomatik Raporlama"],
  },
  {
    id: "e-ticaret",
    title: "Headless E-Ticaret Platformu — Yüksek Hızlı Checkout & Pazaryeri Entegrasyonu",
    client: "E-Ticaret Mağazası",
    year: "2026",
    category: "Modern E-Ticaret & Ödeme Altyapısı",
    description:
      "Milisaniyelik sayfa yüklenme hızına sahip, dönüşüm odaklı headless e-ticaret altyapısı. Sepette terk oranını düşüren tek tıkla ödeme akışı, PayTR, İyzico ve banka sanal POS entegrasyonları. Trendyol, Hepsiburada ve Amazon pazaryerleriyle iki yönlü canlı ürün, fiyat ve stok senkronizasyonu; kargo API'leri (Yurtiçi, Aras, MNG) ile otomatik barkod basımı ve sipariş takip sistemi.",
    desktopImage: "/showcase/.webp",
    mobileImage: "/showcase/.webp",
    accent: "#ff645b",
    tags: ["Headless E-Ticaret", "Pazaryeri API Senkronu", "Tek Tık Checkout", "Sanal POS & Taksit", "Otomatik Kargo Entegre", "Next.js / Redis"],
  },
  {
    id: "depo-sistemleri",
    title: "Akıllı Depo Stok Yönetim Sistemi (WMS) & El Terminali Altyapısı",
    client: "Depo Stok WMS",
    year: "2026",
    category: "Depo Yönetim Sistemleri",
    description:
      "Fiziksel depo operasyonlarında insan hatasını sıfıra indiren kurumsal WMS yazılımı. Android el terminalleri ve barkod/karekod okuyucularla canlı stok sayımı, koridor-raf-kat lokasyon optimizasyonu, FIFO/LIFO kurallı akıllı ürün toplama rotaları. Tedarikçi mal kabulünden sevkiyat irsaliyesine kadar barkod kontrollü çift doğrulama ve depo personeli KPI performans takip motoru.",
    desktopImage: "/showcase/.webp",
    mobileImage: "/showcase/.webp",
    accent: "#ff9d69",
    tags: ["WMS Depo Omurgası", "El Terminali Android", "Koridor / Raf Lokasyon", "Barkod / QR Doğrulama", "FIFO/LIFO Toplama", "Hatasız Sevkiyat"],
  },
  {
    id: "ai-otomasyon",
    title: "WhatsApp AI Kurumsal Asistan & Otonom İş Akışı Entegrasyonu",
    client: "AI Otomasyon",
    year: "2026",
    category: "Yapay Zeka & Entegre Bot Sistemleri",
    description:
      "İşletmenizin kurumsal bilgi tabanı (RAG) ve ürün kataloğuyla doğrudan eğitilen yapay zeka ajanları. 7/24 resmi WhatsApp Business API ve web sitenizde müşterileri insan doğallığında karşılayan, sipariş alan, randevu planlayan ve soruları yanıtlayan otonom sistem. Gelen fatura, PDF ve irsaliyeleri OCR ile okuyup muhasebe veya CRM sisteminize otomatik işleyen hatasız süreç otomasyonu.",
    desktopImage: "/showcase/.webp",
    mobileImage: "/showcase/.webp",
    accent: "#5FCDFF",
    tags: ["WhatsApp Business API", "Kurumsal RAG Mimarisi", "LLM / Claude & GPT", "Otonom Randevu & Sipariş", "Evrak & Belge OCR", "Süreç Otomasyonu"],
  },
  {
    id: "mikroservis",
    title: "Dağıtık Mikroservis Mimarisi & Yüksek Trafikli Bulut Altyapısı",
    client: "Mikroservis",
    year: "2026",
    category: "Mikroservis & Dağıtık Bulut",
    description:
      "Ani trafik patlamalarında ve yüksek eşzamanlı isteklerde sıfır kesinti (Zero-Downtime) sağlayan dağıtık servis mimarisi. Docker ve Kubernetes (K8s) orkestrasyonu, Ocelot / Envoy API Gateway üzerinden akıllı yük dengeleme. RabbitMQ ve Apache Kafka mesaj kuyruklarıyla gevşek bağlı (loosely coupled) asenkron mimari, Redis önbellekleme katmanı ve Prometheus/Grafana ile uçtan uca canlı sistem izleme.",
    desktopImage: "/showcase/.webp",
    mobileImage: "/showcase/.webp",
    accent: "#E1E0CC",
    tags: ["Docker & Kubernetes", "API Gateway (Ocelot)", "RabbitMQ / Kafka Kuyruk", "Redis Dağıtık Cache", "Prometheus & Grafana", "99.99% Uptime"],
  },
  {
    id: "mobil-uygulama",
    title: "Cross-Platform Mobil Mühendislik & App Store / Play Store Dağıtımı",
    client: "Mobil Uygulama",
    year: "2026",
    category: "Mobil Mühendislik & Sanal POS",
    description:
      "iOS ve Android platformlarında yerel (native) performans ve 60/120 FPS akıcılık sunan React Native mobil mimarisi. Güvenli biyometrik giriş (Face ID / Parmak İzi), çevrimdışı (offline-first) yerel veri senkronizasyonu, Firebase ve OneSignal anlık push bildirim motoru. In-App Purchase (Uygulama içi satın alma) ve 3D Secure sanal POS ödeme akışları dahil, App Store ve Google Play onay süreçleri uçtan uca tamamlanmış anahtar teslim mobil çözümler.",
    desktopImage: "/showcase/.webp",
    mobileImage: "/showcase/.webp",
    accent: "#5FCDFF",
    tags: ["React Native", "iOS & Android", "Biyometrik Kimlik", "Offline-First Senkron", "Push Notification", "In-App Purchase", "Store Yayını"],
  },

  /* --- 2. CANLI MÜŞTERİ & ÜRETİM PROJELERİ --- */
  {
    id: "doganlar-eczacilik",
    title: "Doğanlar Eczacılık — B2B Dağıtım Ağı ve Logo ERP Entegre E-Ticaret Platformu",
    client: "Doğanlar Eczacılık",
    year: "2025",
    category: "B2B / E-Ticaret & Logo ERP Entegrasyonu",
    description:
      "100'den fazla eczane ile ecza deposu arasındaki tüm sipariş ve faturalandırma trafiğini dijitalleştiren kurumsal B2B platformu. Logo Tiger ERP ile milisaniyelik canlı stok, depocu-plasiyer iskonto oranları ve cari risk limitleri senkronizasyonu. ASP.NET Core mikroservis altyapısı, Redis önbellekleme ve RabbitMQ kuyruk yönetimiyle yüksek sipariş hacminde sıfır gecikmeli kesintisiz operasyon.",
    desktopImage: "/showcase/.webp",
    mobileImage: "/showcase/.webp",
    externalUrl: "https://www.doganlarecza.com/",
    accent: "#5FCDFF",
    tags: ["ASP.NET Core", "Microservices Mimari", "Logo Tiger ERP Entegre", "Redis Önbellek", "RabbitMQ", "SQL Server", "100+ Eczane Ağı"],
  },
  {
    id: "lcyikar",
    title: "LCYıkar — Endüstriyel Temizlik Hizmetleri & Saha Operasyon Portalı",
    client: "LCYıkar",
    year: "2025",
    category: "Service Platform & Saha Operasyon Yönetimi",
    description:
      "Bireysel ve kurumsal temizlik taleplerini tek merkezde toplayan, bölge ve uzman ekiplere göre akıllı görev yönlendirmesi yapan saha yönetim platformu. Müşteriler için online randevu ve SMS onay akışı; saha ekipleri için rota, iş başlangıç/bitiş onayı ve mobil operasyon arayüzü. Yönetim kadrosu için anlık hakediş hesaplama, müşteri memnuniyet skoru ve canlı gelir analitiği sunan merkezi dashboard.",
    desktopImage: "/showcase/.webp",
    mobileImage: "/showcase/.webp",
    externalUrl: "https://lcyikar.com/",
    accent: "#00F59B",
    tags: ["React", "Node.js & Express", "Saha Ekip Dağıtım", "SMS Bildirim Motoru", "PostgreSQL", "Canlı Hakediş Paneli", "Türkiye Geneli"],
  },
  {
    id: "multishop",
    title: "MultiShop — Dağıtık Mikroservis Mimarili Ölçeklenebilir E-Ticaret Motoru",
    client: "MultiShop",
    year: "2023",
    category: "E-Commerce / Dağıtık Mikroservis Mimarisi",
    description:
      "Katalog, sepet, sipariş, kargo ve ödeme işlevlerinin birbirinden bağımsız çalışan servislerle yönetildiği yeni nesil e-ticaret omurgası. Ocelot API Gateway üzerinden yönlendirilen istekler, IdentityServer ile merkezi JWT kimlik doğrulama, RabbitMQ ile asenkron sipariş kuyrukları. Yüksek sezon indirimlerinde çökmeyen, her mikroservisin kendi veri tabanıyla (Database-per-Service) bağımsız ölçeklendiği kurumsal altyapı.",
    desktopImage: "/showcase/.webp",
    mobileImage: "/showcase/.webp",
    externalUrl: "https://mobilia.com.tr/",
    accent: "#ff9d69",
    tags: ["ASP.NET Core", "Microservices", "Ocelot API Gateway", "Database-per-Service", "RabbitMQ", "Stripe & Iyzico", "SQL Server"],
  },
  {
    id: "ham-sandalye",
    title: "Ham Sandalye — Özel Varyant Motorlu E-Ticaret ve Dijital Mobilya Mağazası",
    client: "Ham Sandalye",
    year: "2023",
    category: "E-Commerce & Varyant Seçim Motoru",
    description:
      "Mobilya sektörünün karmaşık ürün varyasyonlarını (kumaş türü, ahşap cila rengi, ayak modeli, özel ölçü) dinamik olarak fiyata yansıtan akıllı varyant seçim motoru. Next.js ile Google aramalarında ilk sıraları hedefleyen üstün teknik SEO mimarisi, yüksek çözünürlüklü ürün sunumu ve 1 saniyenin altında sayfa açılış hızı. Güvenli online ödeme altyapısı ve kargo entegrasyonuyla uçtan uca çalışan modern e-ticaret deneyimi.",
    desktopImage: "/showcase/.webp",
    mobileImage: "/showcase/.webp",
    externalUrl: "https://hamsandalye.com/",
    accent: "#bef264",
    tags: ["Next.js", "Dinamik Varyant Motoru", "Teknik SEO Mimarisi", "Responsive UI", "PayTR / Sanal POS", "Görsel Optimizasyonu"],
  },
  {
    id: "servisciler",
    title: "Servisciler — Personel ve Okul Taşımacılığı Sektörel Araç Pazaryeri",
    client: "Servisciler",
    year: "2023",
    category: "Pazaryeri Platformu & İlan Yönetimi",
    description:
      "Personel ve okul servisi taşımacılığı sektöründeki plaka sahipleri, şoförler ve araç arayan kurumsal firmaları bir araya getiren iki taraflı dijital pazaryeri. Hat/rota ilanı oluşturma, plaka alım-satım ve kiralama modülleri, doğrulanan kullanıcılar arası anlık şifreli mesajlaşma. Lokasyon bazlı servis güzergah araması ve filtrelenebilir ilan yapısıyla sektörün dijital buluşma noktası.",
    desktopImage: "/showcase/.webp",
    mobileImage: "/showcase/.webp",
    externalUrl: "https://servisciler.com/",
    accent: "#ff645b",
    tags: ["İki Taraflı Pazaryeri", "React & Node.js", "Canlı Mesajlaşma Motoru", "Rota & Güzergah Arama", "Plaka İlan Sistemi", "Mobil Uyumlu UI"],
  },
  {
    id: "babayigit-yamen",
    title: "Babayiğit Yamen — Hukuk Bürosu Kurumsal Dijital Platformu ve İçerik Portalı",
    client: "Babayiğit Yamen",
    year: "2022",
    category: "Kurumsal CMS & Hukuk İçerik Platformu",
    description:
      "Hukuk profesyonelleri ve müvekkiller için geliştirilen kurumsal içerik ve dijital iletişim platformu. Güncel Yargıtay içtihatları, mevzuat bültenleri, hukuki makaleler ve sektörel analizlerin dinamik yayını. Google yerel arama motoru optimizasyonu (Local SEO), kurumsal kimliği yansıtan asil tipografi ve güvenli müvekkil ön başvuru formu ile kurumsal prestiji en üst düzeye çıkaran web mimarisi.",
    desktopImage: "/showcase/.webp",
    mobileImage: "/showcase/.webp",
    externalUrl: "https://babayigityamen.av.tr/",
    accent: "#5FCDFF",
    tags: ["Kurumsal Hukuk Portalı", "Next.js", "Hukuki İçerik CMS", "Local SEO & Optimizasyon", "Asil Tipografi", "Müvekkil Başvuru Sistemi"],
  },
  {
    id: "global-depo",
    title: "Global Depo — Çok Kanallı B2B Entegre Depo ve Sevkiyat Yönetim Platformu",
    client: "Global Depo",
    year: "2022",
    category: "B2B & Depo Operasyon Altyapısı",
    description:
      "Pazaryeri satışları (Trendyol, Hepsiburada, Amazon), kurumsal B2B toptan siparişler ve fiziki antrepo stok hareketlerini tek merkezden yöneten bulut depo sistemi. El terminalleriyle barkodlu mal kabul, çapraz sevkiyat (cross-docking), anlık koli/palet bazında stok takibi ve kargo API entegrasyonları. Depo içi raf doluluk oranları ve lojistik KPI metriklerini anlık sunan analitik yönetim ekranı.",
    desktopImage: "/showcase/.webp",
    mobileImage: "/showcase/.webp",
    externalUrl: "https://globaldepo.com/",
    accent: "#00F59B",
    tags: ["B2B Depo Omurgası", "Pazaryeri API Senkronu", "El Terminali Barkod", "Çapraz Sevkiyat (Cross-dock)", "Antrepo Takip", "SQL & Node.js"],
  },
  {
    id: "lexicallayer",
    title: "LexicalLayer — Real-Time Representation Engineering & LoRA Steering Ağ Geçidi",
    client: "LexicalLayer",
    year: "2026",
    category: "AI / Representation Engineering & Edge Gateway",
    description:
      "Büyük dil modellerindeki (LLM) sentetik slop, yapay klişeler ve kurumsal laf kalabalığını prompt mühendisliğiyle değil; kaynakta model ağırlıkları seviyesinde arındıran yeni nesil yapay zeka ağ geçidi. Rank-16 LoRA (.safetensors), residual activation steering ve pre-softmax logit warping algoritmalarıyla doğrudan model aktivasyonlarını yönlendirir. Cloudflare Pages ve Edge Workers üzerinde ultra düşük gecikmeyle (edge latency) çalışan ters vekil (reverse proxy) ve resmi npm SDK kütüphanesi.",
    desktopImage: "/showcase/.webp",
    mobileImage: "/showcase/.webp",
    externalUrl: "https://lexicallayer.muhammetatmaca.com.tr",
    accent: "#5FCDFF",
    tags: ["Next.js 16", "TypeScript", "Tailwind v4", "Representation Engineering", "Rank-16 LoRA", "Residual Steering", "Cloudflare Pages"],
  },
];
