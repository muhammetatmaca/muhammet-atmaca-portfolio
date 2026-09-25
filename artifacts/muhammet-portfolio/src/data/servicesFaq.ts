export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  tech: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'mobile' | 'web' | 'process';
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'mobile-app-development',
    title: 'Mobil Uygulama Geliştirme (iOS & Android)',
    tagline: 'Fikrinizi App Store ve Google Play’de 60 FPS çalışan canlı bir ürüne dönüştürün.',
    description:
      'Mobil uygulama yaptırmak isteyen girişimler, şirketler ve bireysel projeler için sıfırdan anahtar teslim geliştirme. React Native ve Flutter ile tek kod tabanından hem iOS hem Android için yerel performanslı uygulamalar inşa ediyorum.',
    deliverables: [
      'iOS & Android Uyumlu Çift Platform Çıktısı',
      'App Store ve Google Play Mağaza Yükleme ve Onay Süreçleri',
      'Bildirim (Push Notification), Ödeme (IAP / Stripe / İyzico) ve Harita Entegrasyonları',
      'Canlı Sonrası Hata Takibi (Sentry), Analitik ve Performans Optimizasyonu',
    ],
    tech: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo', 'Firebase', 'Zustand', 'TypeScript'],
  },
  {
    id: 'web-platform-development',
    title: 'Web Sitesi & Kurumsal Platform Geliştirme',
    tagline: 'Arama motorlarında zirveye oynayan, ultra hızlı ve modern web sistemleri.',
    description:
      'Web sitesi yaptırmak veya karmaşık bir SaaS/B2B platformu kurmak isteyenler için Next.js, React ve ASP.NET Core / Node.js mimarisiyle ölçeklenebilir, SEO uyumlu ve yüksek güvenlikli web çözümleri sunuyorum.',
    deliverables: [
      'Google SEO Uyumlu, 100/100 Lighthouse Performanslı Web Sitesi',
      'Yönetim Paneli (Admin Dashboard) ve Veri Analitiği',
      'Mikroservis Mimarisi, REST / GraphQL API Geliştirme',
      'Veritabanı Modellemesi (PostgreSQL, SQL Server, Redis) ve Bulut Dağıtımı (Docker, AWS, Azure)',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'ASP.NET Core', 'Node.js', 'PostgreSQL', 'Docker', 'Tailwind CSS'],
  },
  {
    id: 'tech-consultancy-architecture',
    title: 'Yazılım Mimarisi & Teknik Danışmanlık',
    tagline: 'Mevcut projelerinizi hızlandırın, kod kalitesini ve ölçeklenebilirliği garantiye alın.',
    description:
      'Daha önce başlanmış ancak performans sorunları yaşayan, mağazadan reddedilen veya ölçeklenemeyen mobil uygulama ve web projelerinize doğrudan müdahale ederek kod kalitesini uluslararası standartlara yükseltiyorum.',
    deliverables: [
      'Kod Tabanı Denetimi (Code Audit) ve Güvenlik/Performans Raporu',
      'Uygulama İçi Satın Alma (IAP) ve Mağaza Reddi Çözümleri',
      'Mimari Refactoring ve CI/CD Dağıtım Otomasyonu',
    ],
    tech: ['System Architecture', 'CI/CD', 'Code Review', 'Cloud Optimization', 'Performance Tuning'],
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'mobile',
    question: 'Mobil uygulama yaptırmak istiyorum, süreç nasıl işliyor?',
    answer:
      'Süreç 4 temel aşamadan oluşur: 1) İhtiyaç Analizi & Mimari Taslak: Fikrinizi dinler, gerekli ekranları ve fonksiyonları netleştiririz. 2) Prototip & Arayüz Geliştirme: Modern ve kullanıcı dostu arayüzleri hazırlarım. 3) Kodlama & Test: React Native veya Flutter ile çift platforma eş zamanlı olarak temiz ve test edilebilir kod yazarız. 4) Canlıya Alma: Uygulamanızı Apple App Store ve Google Play Store hesaplarınıza yükler, onay sürecini baştan sona yönetirim.',
  },
  {
    id: 'faq-2',
    category: 'mobile',
    question: 'Mobil uygulama hem iPhone (iOS) hem de Android cihazlarda çalışır mı?',
    answer:
      'Evet. Geliştirdiğim uygulamalarda React Native ve Flutter teknolojilerini kullanarak tek bir sağlam kod tabanından hem iOS (iPhone, iPad) hem de Android (Samsung, Xiaomi vb.) cihazlarda yerel (native) hızda çalışan ürünler teslim ediyorum. Bu sayede iki ayrı ekip maliyetinden tasarruf edersiniz.',
  },
  {
    id: 'faq-3',
    category: 'process',
    question: 'Mobil uygulama ve web sitesi yaptırma fiyatları nasıl belirlenir?',
    answer:
      'Projenin kapsamı, ekran sayısı, entegrasyonlar (ödeme sistemleri, harita, yapay zeka API’leri, özel yönetim paneli) ve teslim süresi belirleyicidir. Net bir iş listesi çıkardıktan sonra sürpriz maliyetler içermeyen, şeffaf ve sabit bir teklif sunuyorum. İletişime geçerek projeniz için ücretsiz ön değerlendirme ve fiyat teklifi alabilirsiniz.',
  },
  {
    id: 'faq-4',
    category: 'web',
    question: 'Web sitesi yaptırmak istiyorum, Google’da üst sıralarda çıkar mı (SEO)?',
    answer:
      'Kesinlikle. Geliştirdiğim web siteleri Next.js ve modern sunucu taraflı render (SSR/SSG) teknolojileriyle hazırlanır. Schema.org yapısal verileri, OpenGraph etiketleri, sitemap.xml, robots.txt ve 100/100 Google Core Web Vitals performans kriterlerine uygun kodlanır; böylece arama motorları sitenizi hızla dizine ekler ve üst sıralara taşır.',
  },
  {
    id: 'faq-5',
    category: 'mobile',
    question: 'Uygulama App Store ve Google Play Store onayından geçer mi?',
    answer:
      'Evet. Bugüne kadar 50’den fazla mobil uygulamayı başarıyla mağazalara yüklemiş bir mühendis olarak, Apple Human Interface Guidelines ve Google Play Developer Policy kurallarına %100 uyumlu kod yazıyorum. Gizlilik politikası, izinler, hesap silme kuralları ve uygulama içi satın alma gereksinimlerini eksiksiz uygulayarak ret riskini sıfıra indiriyorum.',
  },
  {
    id: 'faq-6',
    category: 'process',
    question: 'Bayburt ve Samsun’da mısınız? İstanbul, Ankara, İzmir veya diğer illerden çalışabiliyor muyuz?',
    answer:
      'Evet. Samsun ve Bayburt merkezli olarak çalışıyorum; başta İstanbul, Ankara, İzmir, Bursa, Antalya olmak üzere Türkiye’nin 81 ilindeki ve yurt dışındaki müşterilerimle %100 uzaktan (remote) kusursuz iş birlikleri yürütüyorum. Düzenli video toplantılar, haftalık canlı test sürümleri (TestFlight / APK) ve şeffaf ilerleme raporları ile fiziksel mesafe fark etmeksizin projenin her anında doğrudan yanınızdayım.',
  },
  {
    id: 'faq-7',
    category: 'process',
    question: 'Bayburt’ta yazılım, bilgisayar ve web tasarım hizmeti veriyor musunuz?',
    answer:
      'Evet. Bayburt Fen Lisesi mezunu olarak memleketim Bayburt’taki yerel işletmeler, kobiler, esnaflar ve kamu kurumları için özel bilgisayar yazılımları, kurumsal web sitesi tasarımı, e-ticaret sistemleri, teknik veritabanı çözümleri ve iOS & Android mobil uygulama geliştirme hizmetlerini doğrudan yerinde veya online olarak sunuyorum.',
  },
];
