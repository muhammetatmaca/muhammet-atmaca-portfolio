export interface SeoLandingPageData {
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  heroHeading: string;
  heroHighlight: string;
  heroSubheading: string;
  cityOrRegion?: string;
  category: 'local' | 'service' | 'technology';
  badge: string;
  targetAudience: string;
  introParagraph: string;
  whyChooseUs: Array<{
    title: string;
    description: string;
  }>;
  featuredAppIds: string[];
  processSteps: Array<{
    step: string;
    title: string;
    desc: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const SEO_LANDING_PAGES: Record<string, SeoLandingPageData> = {
  // ==========================================
  // 1. BAYBURT ÖZEL YEREL SERİSİ
  // ==========================================
  'bayburt-yazilim': {
    slug: 'bayburt-yazilim',
    title: 'Bayburt Yazılım & Bilgisayar Mühendisliği — Muhammet Atmaca (VirelonSoft)',
    metaDescription: 'Bayburt merkezli yazılım ve bilgisayar mühendisliği çözümleri. Bayburt Fen Lisesi mezunu Muhammet Atmaca ile mobil uygulama, web platformu ve otomasyon sistemleri.',
    keywords: [
      'Bayburt yazılım',
      'Bayburt yazılımcı',
      'Bayburt yazılım şirketi',
      'Bayburt bilgisayar mühendisi',
      'Bayburt yazılım ofisi',
      'Bayburt VirelonSoft',
      'Muhammet Atmaca Bayburt',
    ],
    eyebrow: 'Bayburt Yerel Yazılım Mühendisliği',
    heroHeading: 'Bayburt İçin Profesyonel',
    heroHighlight: 'Yazılım & Mühendislik',
    heroSubheading: 'Bayburt Fen Lisesi mezunu kıdemli yazılım mühendisi Muhammet Atmaca öncülüğünde; Bayburt’taki şirketler, KOBİ’ler ve kurumlar için dünya standartlarında yazılım çözümleri.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'Bayburt Merkez & Doğu Karadeniz',
    targetAudience: 'Bayburt ve çevre illerde faaliyet gösteren, işini dijitale taşımak veya özel yazılımla hızlandırmak isteyen işletmeler.',
    introParagraph: 'Bayburt’ta yerel işletmelerin ve kamu kuruluşlarının ihtiyaç duyduğu özel bilgisayar yazılımları, mobil uygulamalar ve web platformlarını, 7+ yıllık sektör tecrübemiz ve mağazalarda 50’den fazla canlı uygulamamız ile anahtar teslim geliştiriyoruz.',
    whyChooseUs: [
      {
        title: 'Doğrudan Bayburt İçi İletişim',
        description: 'Bayburt merkezde yüz yüze toplantı imkanı, yerinde analiz ve sıfır aracı ile doğrudan mühendis iletişimi.',
      },
      {
        title: '50+ Canlı Mobil Uygulama Güvencesi',
        description: 'Teorik vaatler değil; Apple App Store ve Google Play’de aktif yüz binlerce kullanıcıya ulaşan gerçek ürünler.',
      },
      {
        title: 'Kurumsal Faturalandırma ve Destek',
        description: 'Sözleşmeli, faturalı, teslim sonrası kesintisiz teknik destek ve sürüm güncelleme garantisi.',
      },
      {
        title: 'Uluslararası Yazılım Standartları',
        description: 'React Native, Flutter, Next.js ve bulut mimarileri ile geleceğe hazır, yüksek güvenlikli kod tabanı.',
      },
    ],
    featuredAppIds: ['teleflow-prompter', 'virelon-wifi', 'toplualarm', 'tick-shopping'],
    processSteps: [
      { step: '01', title: 'Bayburt İçi Analiz & Teklif', desc: 'İşletmenizin ihtiyaçlarını masaya yatırır, net kapsam ve sabit fiyat teklifi çıkarırız.' },
      { step: '02', title: 'Modern UI/UX Tasarım', desc: 'Kullanımı kolay, prestijli ve kurumsal kimliğinize uygun ekran prototipleri hazırlarız.' },
      { step: '03', title: 'Hızlı & Güvenli Kodlama', desc: 'React Native ve Next.js ile yüksek performanslı, hatasız yazılım geliştirilir.' },
      { step: '04', title: 'Canlıya Alma & Yerinde Eğitim', desc: 'Yazılımınız kurulur, test edilir ve personeliniz için yerinde kullanım eğitimi verilir.' },
    ],
    faqs: [
      {
        question: 'Bayburt’ta yüz yüze görüşebilir miyiz?',
        answer: 'Evet. Bayburt merkezde veya ofisinizde doğrudan bir araya gelerek projenizi detaylıca planlayabiliriz.',
      },
      {
        question: 'Yazılım tesliminden sonra destek veriyor musunuz?',
        answer: 'Kesinlikle. Tüm projelerimiz teslim sonrası garanti ve teknik destek kapsamındadır; bakım ve güncellemeler düzenli olarak sağlanır.',
      },
      {
        question: 'Fiyatlandırma nasıl yapılıyor?',
        answer: 'İhtiyaç duyulan özellikler ve teslim süresi belirlendikten sonra sürpriz ek masraf içermeyen, şeffaf ve sabit bir sözleşme teklifi sunuyoruz.',
      },
    ],
  },

  'bayburt-bilgisayar': {
    slug: 'bayburt-bilgisayar',
    title: 'Bayburt Bilgisayar & Özel Otomasyon Sistemleri — Muhammet Atmaca',
    metaDescription: 'Bayburt bilgisayar yazılımları, stok takip, özel otomasyon, veritabanı yönetimi ve kurumsal bilişim danışmanlığı. 7+ yıl mühendislik deneyimi.',
    keywords: [
      'Bayburt bilgisayar',
      'Bayburt bilgisayar yazılımı',
      'Bayburt otomasyon sistemleri',
      'Bayburt bilişim',
      'Bayburt bilgisayar mühendisi',
      'Bayburt veritabanı yazılımı',
    ],
    eyebrow: 'Bilişim & Bilgisayar Sistemleri',
    heroHeading: 'Bayburt Bilgisayar &',
    heroHighlight: 'Özel Otomasyon Yazılımları',
    heroSubheading: 'İşletmenizin operasyonel yükünü sıfırlayan, stok, müşteri ve muhasebe süreçlerini tek panelden yöneten özel bilgisayar yazılımları.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'Bayburt & Çevre İller',
    targetAudience: 'Manuel defter tutmaktan veya hantal paket programlardan sıkılıp kendine özel hızlı yazılım isteyen Bayburt esnafı ve kobileri.',
    introParagraph: 'Hazır paket programlar genellikle işletmenize tam uymaz ve her ay yüksek lisans ücretleri talep eder. Bayburt’taki işletmeniz için sıfırdan, size özel bilgisayar yazılımları ve yönetim panelleri inşa ediyoruz.',
    whyChooseUs: [
      { title: 'İşletmenize %100 Uyumlu', description: 'Gereksiz karmaşıklıktan arındırılmış, personelin 5 dakikada öğrenebileceği sade ekranlar.' },
      { title: 'Aylık Lisans Ücreti Yok', description: 'Yazılım size ait olur; her yıl veya her ay fahiş lisans yenileme bedelleri ödemezsiniz.' },
      { title: 'Bulut ve Yerel Yedekleme', description: 'Verileriniz şifreli olarak yedeklenir; bilgisayar arızalarında veri kaybı riski yaşamazsınız.' },
      { title: 'Mobil Uyum', description: 'İş yerinizde bilgisayardan, dışarıdayken cep telefonunuzdan işletmenizi anlık takip edin.' },
    ],
    featuredAppIds: ['virelon-wifi', 'toplualarm', 'tick-shopping', 'geode-cutter-3d'],
    processSteps: [
      { step: '01', title: 'İş Süreci Analizi', desc: 'İş yerinizdeki mevcut işleyişi inceler, hangi alanların otomatikleştirileceğini belirleriz.' },
      { step: '02', title: 'Yazılım Mimarisi', desc: 'Hızlı, güvenli veritabanı ve masaüstü/web arayüz mimarisi kurgulanır.' },
      { step: '03', title: 'Geliştirme & Test', desc: 'Verileriniz aktarılır, gerçek operasyon testleri yapılır.' },
      { step: '04', title: 'Kurulum & Eğitim', desc: 'Bilgisayarlarınıza kurulum yapılır, ekibinize kullanım eğitimi verilir.' },
    ],
    faqs: [
      { question: 'Eski verilerimi yeni programa aktarabilir misiniz?', answer: 'Evet, Excel veya eski veritabanlarınızdaki kayıtları yeni sisteme hatasız aktarıyoruz.' },
      { question: 'İnternet kesildiğinde çalışır mı?', answer: 'İsteğinize göre hem çevrimdışı (offline-first) hem de bulut senkronizasyonlu hibrit mimariler kuruyoruz.' },
    ],
  },

  'bayburt-mobil-uygulama': {
    slug: 'bayburt-mobil-uygulama',
    title: 'Bayburt Mobil Uygulama Geliştirme (iOS & Android) — Anahtar Teslim',
    metaDescription: 'Bayburt’ta mobil uygulama yaptırmak isteyenler için React Native ve Flutter ile App Store & Google Play onay garantili anahtar teslim geliştirme.',
    keywords: [
      'Bayburt mobil uygulama',
      'Bayburt mobil yazılımcı',
      'Bayburt ios uygulama',
      'Bayburt android yazılım',
      'Bayburt uygulama yaptırma',
      'Bayburt mobil yazılım ajansı',
    ],
    eyebrow: 'iOS & Android Çözümleri',
    heroHeading: 'Bayburt’ta Kendi',
    heroHighlight: 'Mobil Uygulamanızı Kurun',
    heroSubheading: 'İşletmenizi müşterilerinizin cebine taşıyın. Bildirimler, randevu, e-ticaret ve sadakat sistemiyle cironuzu katlayın.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'iOS & Android Tek Kod Tabanı',
    targetAudience: 'Bayburt’ta müşteri kitlesini büyütmek, randevu veya siparişlerini mobil uygulama üzerinden almak isteyen vizyoner işletmeler.',
    introParagraph: '50’den fazla canlı mobil uygulamanın mimarı olarak; Bayburt’taki işletmeniz için Apple App Store ve Google Play Store’da 60 FPS hızda çalışan anahtar teslim mobil uygulamalar geliştiriyorum.',
    whyChooseUs: [
      { title: 'Çift Mağaza Onay Garantisi', description: 'Apple ve Google mağaza politikalarına %100 uyum; onay süreci baştan sona yönetilir.' },
      { title: 'Tek Dokunuşla Bildirim (Push)', description: 'Müşterilerinize kampanyalarınızı ve duyurularınızı anında ücretsiz bildirim olarak gönderin.' },
      { title: 'Entegre Ödeme Sistemleri', description: 'Kredi kartı, İyzico, Stripe veya yerel POS entegrasyonu ile güvenli tahsilat.' },
      { title: 'Modern UI/UX Tasarım', description: 'Büyük teknoloji şirketlerinin standartlarında, estetik ve akıcı kullanıcı deneyimi.' },
    ],
    featuredAppIds: ['teleflow-prompter', 'aura-weather-widget', 'tempoeat', 'truelevel'],
    processSteps: [
      { step: '01', title: 'Fikir & Akış Tasarımı', desc: 'Uygulamanızın tüm ekranları ve fonksiyonları adım adım projelendirilir.' },
      { step: '02', title: 'Tasarım Onayı', desc: 'Telefonunuzda birebir test edebileceğiniz interaktif tasarım sunulur.' },
      { step: '03', title: 'React Native Geliştirme', desc: 'Tek kod tabanından hem iPhone hem Android için yerel kodlama yapılır.' },
      { step: '04', title: 'App Store & Play Store Yayını', desc: 'Hesaplarınıza yüklenir, onay alınır ve canlıya çıkarılır.' },
    ],
    faqs: [
      { question: 'Uygulama hem iPhone hem Samsung telefonlarda çalışır mı?', answer: 'Evet, tek geliştirme ile tüm iOS ve Android cihazlarda kusursuz çalışır.' },
      { question: 'Yıllık mağaza ücreti var mı?', answer: 'Apple Developer hesabı yıllık 99$, Google Play hesabı ise tek seferlik 25$ resmi mağaza harcına sahiptir. Kurulumları birlikte yapıyoruz.' },
    ],
  },

  'bayburt-web-tasarim': {
    slug: 'bayburt-web-tasarim',
    title: 'Bayburt Web Tasarım & Kurumsal Web Siteleri — SEO Uyumlu Next.js',
    metaDescription: 'Bayburt kurumsal web tasarım, e-ticaret ve Google SEO uyumlu web siteleri. Ultra hızlı, mobil uyumlu, Google’da üst sıralara çıkan modern siteler.',
    keywords: [
      'Bayburt web tasarım',
      'Bayburt web sitesi yaptırma',
      'Bayburt kurumsal web sitesi',
      'Bayburt e-ticaret sitesi',
      'Bayburt seo uzmanı',
      'Bayburt internet sitesi',
    ],
    eyebrow: 'SEO & Web Platformları',
    heroHeading: 'Google’da Zirveye Çıkan',
    heroHighlight: 'Bayburt Web Siteleri',
    heroSubheading: 'Hantal WordPress temaları değil; Next.js ve TypeScript ile kodlanmış, 100/100 hız puanlı, Google’da ilk sayfada çıkan kurumsal web siteleri.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: '100/100 Core Web Vitals',
    targetAudience: 'Google’da "Bayburt" aramalarında rakiplerinin önüne geçmek isteyen şirketler, klinikler, oteller, üreticiler ve profesyoneller.',
    introParagraph: 'Bir web sitesinin sadece güzel görünmesi yetmez; Google’da aratıldığında ilk sıralarda çıkması ve ziyaretçiyi müşteriye dönüştürmesi gerekir. En son SEO ve Next.js teknolojileriyle Bayburt’un en hızlı web sitelerini kuruyoruz.',
    whyChooseUs: [
      { title: 'Google SEO ve Şema Optimizasyonu', description: 'Schema.org yapısal verileriyle Google’da zengin kart ve yerel aramalarda 1. sıra hedefi.' },
      { title: 'Işık Hızında Açılan Sayfalar', description: 'Sayfalar 1 saniyenin altında açılır; ziyaretçi beklemeden doğrudan teklif verir.' },
      { title: 'Kolay Yönetim Paneli', description: 'Fotoğraf, ürün ve yazılarınızı kod bilmeden kolayca güncelleyebileceğiniz modern panel.' },
      { title: 'Mobil ve Tablet Uyumlu (Responsive)', description: 'Tüm telefon, tablet ve masaüstü ekran boyutlarına otomatik uyum sağlayan akıcı tasarım.' },
    ],
    featuredAppIds: ['teleflow-prompter', 'tick-shopping', 'virelon-wifi', 'toplualarm'],
    processSteps: [
      { step: '01', title: 'Hedef & Rakip Analizi', desc: 'Sektörünüzü ve Google’da aranan anahtar kelimeleri analiz ederiz.' },
      { step: '02', title: 'Özel Arayüz Tasarımı', desc: 'Markanıza prestij katacak modern kurumsal tasarım hazırlanır.' },
      { step: '03', title: 'Next.js ile Kodlama', desc: 'Dünya standartlarında, temiz ve güvenlik açığı olmayan modern web kodlaması.' },
      { step: '04', title: 'SEO İndeksleme & Canlı Yayın', desc: 'Google Search Console’a kaydedilir, hızlı indeksleme talebi yapılır ve yayına alınır.' },
    ],
    faqs: [
      { question: 'Sitem Google’da ne zaman çıkar?', answer: 'Doğru Schema.org ve sitemap kurulumu ile Search Console üzerinden öncelikli indeksleme isteyerek 24-72 saat içinde Google aramalarına dahil ediyoruz.' },
      { question: 'Alan adı ve hosting işlemlerini siz mi yapıyorsunuz?', answer: 'Evet; .com.tr alan adı tescili, SSL güvenlik sertifikası ve bulut sunucu kurulumlarını anahtar teslim yürütüyorum.' },
    ],
  },

  // ==========================================
  // 2. SAMSUN & BÖLGESEL MERKEZLER
  // ==========================================
  'samsun-mobil-uygulama': {
    slug: 'samsun-mobil-uygulama',
    title: 'Samsun Mobil Uygulama Geliştirme — React Native & Flutter Uzmanı',
    metaDescription: 'Samsun’da mobil uygulama yaptırmak isteyen şirket ve girişimcilere özel React Native ve Flutter çözümleri. 50+ canlı uygulama tecrübesi.',
    keywords: [
      'Samsun mobil uygulama',
      'Samsun yazılımcı',
      'Samsun mobil yazılım şirketi',
      'Samsun react native',
      'Samsun yazılım mühendisi',
      'Samsun mobil ajans',
    ],
    eyebrow: 'Samsun Mobil Yazılım',
    heroHeading: 'Samsun’da Profesyonel',
    heroHighlight: 'Mobil Uygulama Çözümleri',
    heroSubheading: 'Samsun Üniversitesi mezunu kıdemli yazılım mühendisi Muhammet Atmaca ile App Store ve Google Play onaylı anahtar teslim mobil projeler.',
    cityOrRegion: 'Samsun',
    category: 'local',
    badge: 'Samsun Merkezli Mühendislik',
    targetAudience: 'Samsun ve Karadeniz bölgesinde yenilikçi mobil ürünler üretmek isteyen girişimler ve kurumsal firmalar.',
    introParagraph: 'Samsun teknoloji ekosisteminde ve Karadeniz bölgesinde 50’den fazla mobil uygulamaya imza atmış bir mühendis olarak, fikirlerinizi yüksek performanslı ürünlere dönüştürüyorum.',
    whyChooseUs: [
      { title: 'Samsun İçi Doğrudan İletişim', description: 'Yüz yüze proje toplantıları ve haftalık canlı test sürümleri.' },
      { title: 'Geniş Portfolyo Kanıtı', description: '50+ canlı mağaza uygulaması, gerçek kullanıcı yorumları ve kanıtlanmış başarı.' },
      { title: 'Yapay Zeka ve Uç Cihaz Deneyimi', description: 'Mobil cihaz üzerinde çalışan yapay zeka (YOLO, ResNet) ve sensör entegrasyonları.' },
      { title: 'Uçtan Uca Teslimat', description: 'Fikirden mağaza onayına, bildirim altyapısından ödeme sistemlerine tam kapsam.' },
    ],
    featuredAppIds: ['teleflow-prompter', 'geode-cutter-3d', 'aura-weather-widget', 'virelon-wifi'],
    processSteps: [
      { step: '01', title: 'İhtiyaç Analizi', desc: 'Proje hedefleri ve ekran mimarisi belirlenir.' },
      { step: '02', title: 'UI/UX Prototip', desc: 'Modern mobil arayüzler tasarlanır ve test edilir.' },
      { step: '03', title: 'React Native Kodlama', desc: '60 FPS akıcı ve performanslı çift platform kodlaması.' },
      { step: '04', title: 'Mağaza Yayını', desc: 'App Store ve Google Play hesaplarınıza yüklenir.' },
    ],
    faqs: [
      { question: 'Samsun’da ofisinizde görüşebilir miyiz?', answer: 'Evet, Samsun’da projenizi detaylıca konuşmak için dilediğiniz zaman bir araya gelebiliriz.' },
      { question: 'Mevcut uygulamamızı yenileyebilir misiniz?', answer: 'Evet, performans sorunları yaşayan veya tasarımı eskiyen uygulamaları modern mimariyle baştan inşa ediyoruz.' },
    ],
  },

  // ==========================================
  // 3. BÜYÜKŞEHİRLER (İSTANBUL, ANKARA, İZMİR, BURSA)
  // ==========================================
  'istanbul-mobil-uygulama': {
    slug: 'istanbul-mobil-uygulama',
    title: 'İstanbul Mobil Uygulama Geliştirici & React Native Uzmanı — Muhammet Atmaca',
    metaDescription: 'İstanbul merkezli girişim ve şirketler için uzaktan kesintisiz mobil uygulama geliştirme. 50+ canlı uygulama, React Native ve Flutter uzmanlığı.',
    keywords: [
      'İstanbul mobil uygulama',
      'İstanbul react native geliştirici',
      'İstanbul flutter yazılımcı',
      'İstanbul mobil yazılım ajansı',
      'İstanbul freelance mobil yazılımcı',
    ],
    eyebrow: 'İstanbul & Global Uzaktan Çalışma',
    heroHeading: 'İstanbul Girişimleri İçin',
    heroHighlight: 'Ölçeklenebilir Mobil Çözümler',
    heroSubheading: 'İstanbul ajanslarının fahiş fiyatlarına girmeden; kıdemli mühendis kalitesinde, hızlı teslimatlı ve 50+ uygulama referanslı mobil geliştirme.',
    cityOrRegion: 'İstanbul',
    category: 'local',
    badge: 'İstanbul KOBİ & Startup Odaklı',
    targetAudience: 'İstanbul’da hızlı, kaliteli ve bütçe dostu anahtar teslim mobil ürün geliştirmek isteyen şirketler ve start-up kurucuları.',
    introParagraph: 'İstanbul’daki onlarca startup ve kurumsal müşteri ile %100 uzaktan, şeffaf Jira/Trello iş takibi, haftalık TestFlight demoları ve doğrudan video görüşmelerle kusursuz projeler teslim ediyoruz.',
    whyChooseUs: [
      { title: 'Ajans Masraflarından Tasarruf', description: 'Gereksiz aracı maliyetleri olmadan doğrudan kıdemli yazılımcı ile çalışmanın hız ve bütçe avantajı.' },
      { title: 'Haftalık Canlı Test Sürümleri', description: 'TestFlight ve Android APK ile her hafta çalışan yeni özellikleri telefonunuzda test edin.' },
      { title: '7 Yıllık Savunma ve Kurumsal Refleks', description: 'Sıfır kesinti, yüksek güvenlik ve temiz mimari disiplini.' },
      { title: 'App Store / Play Store Onay Garantisi', description: 'Katı mağaza politikalarına tam uyum ve sıfır ret riski.' },
    ],
    featuredAppIds: ['teleflow-prompter', 'geode-cutter-3d', 'virelon-wifi', 'tempoeat'],
    processSteps: [
      { step: '01', title: 'Online Keşif Toplantısı', desc: 'Google Meet üzerinden projenizi dinler, teknik yol haritasını çıkarırız.' },
      { step: '02', title: 'Figma UI/UX Tasarımı', desc: 'Global trendlere uygun, kullanıcıyı bağlayan modern arayüzler.' },
      { step: '03', title: 'Sprint Bazlı Kodlama', desc: 'Haftalık aşamalar halinde çalışan sürümlerle ilerlenir.' },
      { step: '04', title: 'Mağaza Lansmanı', desc: 'Apple ve Google mağazalarında canlıya çıkış ve analitik kurulumu.' },
    ],
    faqs: [
      { question: 'İstanbul’da fiziksel toplantı gerekiyor mu?', answer: 'Gerekmiyor; online toplantılar ve haftalık canlı test sürümleriyle fiziksel mesafeyi sıfıra indiriyoruz. İhtiyaç halinde İstanbul ziyaretlerimizde yüz yüze de görüşebiliyoruz.' },
    ],
  },

  'ankara-mobil-yazilim': {
    slug: 'ankara-mobil-yazilim',
    title: 'Ankara Mobil Yazılım & Savunma Mimarisi — Muhammet Atmaca',
    metaDescription: 'Ankara merkezli savunma, kamu ve kurumsal sistemlere uygun yüksek güvenlikli mobil uygulama ve bulut çözümleri. T.C. Kamu & SSB tecrübesi.',
    keywords: [
      'Ankara mobil yazılım',
      'Ankara mobil uygulama geliştirme',
      'Ankara react native',
      'Ankara savunma sanayii yazılım',
      'Ankara yazılım danışmanlığı',
    ],
    eyebrow: 'Ankara & Kamu / Savunma Standartları',
    heroHeading: 'Ankara İçin Güvenli &',
    heroHighlight: 'Yüksek Performanslı Yazılım',
    heroSubheading: 'Cumhurbaşkanlığı Dijital Dönüşüm Ofisi ve Savunma Sanayii Başkanlığı tecrübesiyle; askeri seviyede güvenlikli mobil ve web sistemleri.',
    cityOrRegion: 'Ankara',
    category: 'local',
    badge: 'Kamu & Savunma Güvenlik Standartları',
    targetAudience: 'Ankara’daki teknokent şirketleri, savunma sanayii paydaşları ve güvenliğe önem veren kurumsal firmalar.',
    introParagraph: 'Ankara’nın mühendislik ağırlıklı ekosisteminde; askeri ve kamu tecrübemizden gelen DevSecOps, veri gizliliği, offline-first mimariler ve mikroservis standartlarıyla mobil uygulamalar geliştiriyoruz.',
    whyChooseUs: [
      { title: 'Kamu & Savunma Tecrübesi', description: 'K8s, kriptolu ağlar ve UHUK uzay bildirisi gibi kritik sistem tecrübesi.' },
      { title: 'Offline-First & Güvenli Depolama', description: 'İnternet olmayan ortamlarda dahi çalışan SQLite ve yerel şifreleme katmanları.' },
      { title: 'Sözleşmeli & NDA Korumalı', description: 'Fikri mülkiyet haklarınız ve ticari sırlarınız gizlilik sözleşmesiyle korunur.' },
      { title: '50+ Canlı Mobil Uygulama Referansı', description: 'Geniş portfolyo ve her ölçekte kanıtlanmış mobil ürün başarısı.' },
    ],
    featuredAppIds: ['virelon-wifi', 'teleflow-prompter', 'truelevel', 'toplualarm'],
    processSteps: [
      { step: '01', title: 'Teknik Mimari & Güvenlik Planı', desc: 'Veri akışları ve güvenlik katmanları planlanır.' },
      { step: '02', title: 'Prototip & Kodlama', desc: 'React Native veya Flutter ile yerel güvenlik testleri eşliğinde kodlama.' },
      { step: '03', title: 'Güvenlik & Penetrasyon Testleri', desc: 'Açıklar taranır, statik ve dinamik kod analizi tamamlanır.' },
      { step: '04', title: 'Onaylı Yayın & Devir', desc: 'Mağazalara yükleme ve kaynak kodların eksiksiz teslimi.' },
    ],
    faqs: [
      { question: 'Gizlilik Sözleşmesi (NDA) imzalıyor musunuz?', answer: 'Evet, kurumsal tüm projelerimizde tarafların haklarını koruyan gizlilik sözleşmesi (NDA) imzalamaktayız.' },
    ],
  },

  'izmir-mobil-yazilim': {
    slug: 'izmir-mobil-yazilim',
    title: 'İzmir Mobil Uygulama & React Native Geliştirici — Muhammet Atmaca',
    metaDescription: 'İzmir’deki şirket ve girişimler için kullanıcı odaklı, modern iOS & Android mobil uygulama geliştirme. 50+ canlı uygulama referansı.',
    keywords: [
      'İzmir mobil yazılım',
      'İzmir mobil uygulama geliştirici',
      'İzmir react native',
      'İzmir yazılım şirketi',
      'İzmir mobil ajans',
    ],
    eyebrow: 'İzmir & Ege Bölgesi',
    heroHeading: 'İzmir İşletmelerine Özel',
    heroHighlight: 'Akıcı Mobil Deneyimler',
    heroSubheading: 'Modern arayüzler, kusursuz animasyonlar ve yüksek dönüşüm oranlı mobil uygulamalarla işletmenizi büyütün.',
    cityOrRegion: 'İzmir',
    category: 'local',
    badge: 'Ege & İzmir Girişimleri',
    targetAudience: 'İzmir ve Ege bölgesindeki e-ticaret markaları, turizm işletmeleri ve dijital girişimciler.',
    introParagraph: 'İzmir’in dinamik iş dünyası için hem App Store hem Google Play’de 60 FPS hızında çalışan, kullanıcıların bayılarak kullanacağı modern mobil uygulamalar tasarlayıp kodluyoruz.',
    whyChooseUs: [
      { title: 'Hızlı ve Akıcı Arayüzler', description: 'Kullanıcının takılmadan gezindiği, terk etme oranını düşüren optimize ekranlar.' },
      { title: 'Çift Platformda Eşit Performans', description: 'Tek kod tabanından hem iPhone hem Android için maksimum performans.' },
      { title: 'Şeffaf Süreç ve Fiyatlandırma', description: 'Her aşamada canlı demolar, net teslim tarihleri ve sabit bütçe garantisi.' },
      { title: '50+ Mağaza Uygulaması', description: 'Sıfırdan zirveye çıkarılmış 50’den fazla gerçek mobil uygulama tecrübesi.' },
    ],
    featuredAppIds: ['teleflow-prompter', 'aura-weather-widget', 'tempoeat', 'geode-cutter-3d'],
    processSteps: [
      { step: '01', title: 'Görüşme & Kapsam', desc: 'Hedef kitle ve özellikler netleştirilir.' },
      { step: '02', title: 'UI/UX Deneyimi', desc: 'Kullanıcı dostu ekran tasarımları oluşturulur.' },
      { step: '03', title: 'Kodlama & Entegrasyon', desc: 'Ödeme, bildirim ve harita servisleri bağlanır.' },
      { step: '04', title: 'Mağaza Yayını', desc: 'App Store ve Play Store onaylı lansman.' },
    ],
    faqs: [
      { question: 'İzmir’deki müşterilerinizle nasıl iletişim kuruyorsunuz?', answer: 'Google Meet, Slack ve haftalık TestFlight sürümleriyle projenin her aşamasında anlık iletişim sağlıyoruz.' },
    ],
  },

  'bursa-mobil-uygulama': {
    slug: 'bursa-mobil-uygulama',
    title: 'Bursa Mobil Uygulama & Sanayi / E-Ticaret Yazılımları — Muhammet Atmaca',
    metaDescription: 'Bursa’daki sanayi, otomotiv, tekstil ve e-ticaret firmaları için özel mobil uygulamalar ve kurumsal yönetim yazılımları.',
    keywords: [
      'Bursa mobil uygulama',
      'Bursa yazılım şirketi',
      'Bursa mobil yazılımcı',
      'Bursa e-ticaret mobil uygulama',
      'Bursa kurumsal yazılım',
    ],
    eyebrow: 'Bursa Sanayi & E-Ticaret',
    heroHeading: 'Bursa Şirketleri İçin',
    heroHighlight: 'Güçlü Mobil Sistemler',
    heroSubheading: 'Saha operasyonlarınızı, siparişlerinizi ve B2B/B2C satışlarınızı cebinizden yönetmenizi sağlayan kurumsal mobil çözümler.',
    cityOrRegion: 'Bursa',
    category: 'local',
    badge: 'Sanayi & B2B/B2C Odaklı',
    targetAudience: 'Bursa’daki üreticiler, fabrikalar, toptancılar ve perakende markaları.',
    introParagraph: 'Bursa’nın güçlü üretim ve ticaret kapasitesine uygun; sahadaki personelin işini kolaylaştıran, sipariş ve stok takibini hızlandıran ve müşterilerinize doğrudan satış yapmanızı sağlayan mobil uygulamalar geliştiriyoruz.',
    whyChooseUs: [
      { title: 'Saha ve Depo Operasyonlarına Uygun', description: 'Barkod okuma, çevrimdışı çalışma ve hızlı veri girişi optimizasyonu.' },
      { title: 'ERP ve Muhasebe Entegrasyonu', description: 'Mikro, Logo, Nebim veya özel veritabanlarınızla senkronize çalışabilme.' },
      { title: '7/24 Kesintisiz Çalışma', description: 'Yüksek trafik ve yoğun veri girişine dayanıklı bulut ve mobil mimari.' },
      { title: '50+ Uygulama Referansı', description: 'Farklı sektörlerde test edilmiş ve başarısı kanıtlanmış hazır mimari bileşenler.' },
    ],
    featuredAppIds: ['virelon-wifi', 'tick-shopping', 'toplualarm', 'teleflow-prompter'],
    processSteps: [
      { step: '01', title: 'İş Akışı Tespiti', desc: 'Saha veya satış sürecindeki tıkanıklıklar analiz edilir.' },
      { step: '02', title: 'Mobil Çözüm Mimarisi', desc: 'Entegre çalışacak mobil arayüz ve API tasarımı.' },
      { step: '03', title: 'Geliştirme & Pilot Test', desc: 'Fabrika/saha personeliyle gerçek ortamda pilot deneme.' },
      { step: '04', title: 'Tam Canlıya Alma', desc: 'Tüm ekibin kullanımına açılış ve teknik eğitim.' },
    ],
    faqs: [
      { question: 'Uygulama mevcut muhasebe programımızla konuşabilir mi?', answer: 'Evet, REST API veya ara katman servisleriyle mevcut ERP ve veritabanlarınıza güvenli entegrasyon sağlıyoruz.' },
    ],
  },

  // ==========================================
  // 4. TİCARİ ARAMA NİYETİ ODAKLI SAYFALAR (HIGH INTENT)
  // ==========================================
  'mobil-uygulama-yaptirmak-istiyorum': {
    slug: 'mobil-uygulama-yaptirmak-istiyorum',
    title: 'Mobil Uygulama Yaptırmak İstiyorum — 2026 Süreç, Fiyat & Adımlar',
    metaDescription: 'Mobil uygulama yaptırmak isteyenler için eksiksiz rehber. React Native ve Flutter ile çift platform, App Store & Google Play onay garantisi ve şeffaf fiyatlandırma.',
    keywords: [
      'mobil uygulama yaptırmak istiyorum',
      'uygulama yaptırma fiyatları',
      'mobil uygulama geliştirme süreci',
      'uygulama yaptırmak kaça mal olur',
      'freelance mobil yazılımcı',
      'anahtar teslim mobil uygulama',
    ],
    eyebrow: 'Eksiksiz Rehber & Doğrudan Mühendis',
    heroHeading: 'Mobil Uygulama Yaptırmak',
    heroHighlight: 'İsteyenler İçin Rehber',
    heroSubheading: 'Fikrinizi App Store ve Google Play’de 60 FPS hızında çalışan, milyonlara ulaşabilecek canlı bir ürüne dönüştürmenin 4 adımlı güvenli yolu.',
    category: 'service',
    badge: '2026 Güncel Rehber & Teklif',
    targetAudience: 'Bir mobil uygulama fikri olan ve bunu kime, nasıl, hangi bütçeyle ve hangi risklerle yaptıracağını bilmek isteyen herkes.',
    introParagraph: 'Bir mobil uygulama yaptırırken en büyük risk; işi yarım bırakan acemilerle çalışmak veya fahiş fiyatlar isteyen hantal ajanslar arasında kaybolmaktır. 50’den fazla canlı mobil uygulamayı başarıyla yayınlamış kıdemli bir mühendis olarak, sürecin her aşamasını şeffaf ve garantili yönetiyorum.',
    whyChooseUs: [
      { title: 'Sıfırdan Canlıya 4 Aşamalı Yol Haritası', description: 'Analiz, modern UI/UX tasarım, çift platform kodlama ve mağaza onayı.' },
      { title: 'Tek Kod Tabanı, Çift Kazanç', description: 'React Native ve Flutter ile iki ayrı ekibe para ödemeden tek bütçeyle hem iPhone hem Android sahibi olun.' },
      { title: 'Mağaza Reddi Yaşamama Garantisi', description: 'Apple ve Google’ın binlerce sayfalık geliştirici kurallarına %100 uyum.' },
      { title: 'Sözleşmeli ve Sabit Fiyatlı', description: 'Sonradan "bu da ek ücrete tabi" sürprizi olmayan, net iş tanımlı sabit teklif.' },
    ],
    featuredAppIds: ['teleflow-prompter', 'geode-cutter-3d', 'virelon-wifi', 'aura-weather-widget'],
    processSteps: [
      { step: '01', title: 'İhtiyaç Analizi & Bütçe Planı', desc: 'Fikrinizi dinler, hangi ekranlara ve özelliklere ihtiyaç olduğunu netleştiririz.' },
      { step: '02', title: 'Tıklanabilir UI/UX Prototip', desc: 'Telefonunuzda birebir dokunup gezebileceğiniz modern ekran tasarımları.' },
      { step: '03', title: 'Hızlı & Temiz Kodlama', desc: 'React Native ile yüksek performanslı, hatasız ve ölçeklenebilir kod geliştirme.' },
      { step: '04', title: 'App Store & Play Store Onayı', desc: 'Gerekli tüm izinler, hesap ayarları yapılarak mağazalarda onaylı yayın.' },
    ],
    faqs: [
      { question: 'Bir mobil uygulama yaptırmak ne kadar sürer?', answer: 'Projenin kapsamına göre basit ve orta ölçekli projeler 3 ila 6 hafta arasında, kapsamlı e-ticaret veya pazar yeri projeleri ise 8 ila 12 hafta arasında canlıya alınır.' },
      { question: 'Uygulamanın kaynak kodları bana mı ait olacak?', answer: 'Evet; proje tamamlandığında tüm kaynak kodlar, GitHub deposu ve mağaza hesapları eksiksiz olarak size devredilir.' },
      { question: 'Yayınlandıktan sonra güncelleme yapabilir miyim?', answer: 'Evet; yönetim paneli üzerinden içeriklerinizi güncelleyebilir, yeni özellikler için ise sürekli bakım desteğimizden faydalanabilirsiniz.' },
    ],
  },

  'react-native-gelistirici': {
    slug: 'react-native-gelistirici',
    title: 'Kıdemli React Native Geliştirici Türkiye — Muhammet Atmaca (50+ Uygulama)',
    metaDescription: 'Türkiye geneli kıdemli React Native geliştirici. iOS ve Android için 60 FPS yerel performanslı, Redux/Zustand, TypeScript ve Expo tecrübeli uzman mühendis.',
    keywords: [
      'react native geliştirici',
      'react native yazılımcı türkiye',
      'react native developer',
      'kıdemli mobil yazılımcı',
      'react native danışmanlık',
    ],
    eyebrow: 'React Native & Cross-Platform Uzmanlığı',
    heroHeading: 'Kıdemli React Native',
    heroHighlight: 'Geliştirici & Mimari',
    heroSubheading: 'Meta’nın dünya devi framework’ü React Native ile hem iPhone hem Android’de akıcı, 60 FPS hızında çalışan yüksek kaliteli uygulamalar.',
    category: 'technology',
    badge: 'React Native & TypeScript & Expo',
    targetAudience: 'React Native ile sıfırdan proje başlatmak veya mevcut kod tabanındaki performans/bellek sorunlarını çözmek isteyen şirketler.',
    introParagraph: '7 yılı aşkın yazılım mühendisliği geçmişimde React Native ekosisteminin evrimine tanıklık ettim. Expo, Fabric yeni mimari, TurboModules ve yerel köprü optimizasyonlarıyla dünya standartlarında uygulamalar kodluyorum.',
    whyChooseUs: [
      { title: '60 FPS Yerel Hız ve Akıcılık', description: 'Ağır animasyonlarda ve listelerde takılmayan, GPU hızlandırmalı modern bileşenler.' },
      { title: 'Temiz Mimari & TypeScript', description: 'Katı tipli, test edilebilir ve gelecekte başka yazılımcıların da kolayca geliştirebileceği modüler mimari.' },
      { title: 'Offline-First ve Yerel SQLite', description: 'İnternet kopsa dahi verileri kaybetmeyen, anlık senkronizasyon yeteneği.' },
      { title: '50+ Başarılı Lansman', description: 'App Store ve Google Play’de aktif yüz binlerce indirmeye sahip canlı referanslar.' },
    ],
    featuredAppIds: ['teleflow-prompter', 'virelon-wifi', 'toplualarm', 'tick-shopping'],
    processSteps: [
      { step: '01', title: 'Mimari Tasarım', desc: 'State yönetimi (Zustand/Redux), navigasyon ve API katmanı kurgusu.' },
      { step: '02', title: 'Bileşen Tabanlı Kodlama', desc: 'Yeniden kullanılabilir, optimize ve katı tipli TypeScript kodlama.' },
      { step: '03', title: 'Cihaz Testleri', desc: 'Farklı ekran boyutlarında, iOS ve Android fiziksel cihazlarda performans testleri.' },
      { step: '04', title: 'Store Yayını & CI/CD', desc: 'Fastlane veya EAS Build ile otomatik mağaza dağıtım boru hatları.' },
    ],
    faqs: [
      { question: 'React Native yerel (Native Swift/Kotlin) kadar hızlı mı?', answer: 'Doğru mimari ve yeni Fabric motoru ile yazılmış bir React Native uygulaması, gözle görülür hiçbir hız farkı olmadan tam yerel hızda 60 FPS çalışır.' },
    ],
  },

  'mobil-uygulama-fiyatlari': {
    slug: 'mobil-uygulama-fiyatlari',
    title: 'Mobil Uygulama Fiyatları ve Maliyet Hesaplama — 2026 Şeffaf Rehber',
    metaDescription: 'Mobil uygulama yaptırma fiyatları nasıl hesaplanır? 2026 ortalama maliyetler, sürpriz masraflardan kaçınma yolları ve ücretsiz ön fiyat teklifi.',
    keywords: [
      'mobil uygulama fiyatları',
      'uygulama yaptırma maliyeti',
      'mobil yazılım ücretleri',
      'uygulama kaça mal olur',
      'mobil uygulama fiyat hesaplama',
    ],
    eyebrow: 'Şeffaf Maliyet & Fiyat Rehberi',
    heroHeading: 'Mobil Uygulama Fiyatları',
    heroHighlight: 'Nasıl Belirlenir?',
    heroSubheading: 'Sürpriz ek maliyetler olmadan; ekran sayısı, entegrasyonlar ve teslim süresine göre şeffaf, adil ve sabit fiyatlı bütçeleme rehberi.',
    category: 'service',
    badge: '2026 Şeffaf Bütçeleme',
    targetAudience: 'Bütçesini doğru planlamak, ajansların şişirilmiş fiyatlarına yakalanmadan doğrudan mühendis teklifi almak isteyenler.',
    introParagraph: 'Mobil uygulama geliştirme fiyatları projenin karmaşıklığına göre değişkenlik gösterir. Bir landing page ya da randevu uygulaması ile devasa bir pazar yeri uygulamasının iş gücü farklıdır. İşte maliyetleri belirleyen şeffaf kriterler:',
    whyChooseUs: [
      { title: 'Sabit Fiyat Güvencesi', description: 'İşin başında belirlenen bütçe ne ise teslimatta o geçerlidir; sonradan sürpriz ek faturalar çıkmaz.' },
      { title: 'Çift Platform Maliyet Avantajı', description: 'React Native sayesinde iOS ve Android için iki ayrı ekibe para ödemez, %40 bütçe tasarrufu sağlarsınız.' },
      { title: 'Ücretsiz Ön Analiz ve Danışmanlık', description: 'Fikrinizi dinleyip hangi özelliklerin ilk versiyon (MVP) için zorunlu olduğunu birlikte belirleriz.' },
      { title: 'Taksitli / Aşama Bazlı Ödeme', description: 'Tasarım onayı, test sürümü ve canlıya çıkış şeklinde aşamalı ve güvenli ödeme takvimi.' },
    ],
    featuredAppIds: ['teleflow-prompter', 'geode-cutter-3d', 'tempoeat', 'truelevel'],
    processSteps: [
      { step: '01', title: 'Ücretsiz Ön Görüşme', desc: 'Fikriniz dinlenir, gerekli özellik listesi çıkarılır.' },
      { step: '02', title: 'Detaylı Teklif & Sözleşme', desc: 'Ekranlar, teslim tarihi ve sabit fiyat yazılı olarak sunulur.' },
      { step: '03', title: 'Aşamalı Geliştirme', desc: 'Her onaylanan aşamada ilerleme kaydedilir ve demo sunulur.' },
      { step: '04', title: 'Eksiksiz Teslimat', desc: 'Tüm haklar ve kaynak kodlar devredilerek proje tamamlanır.' },
    ],
    faqs: [
      { question: 'Ortalama bir mobil uygulama kaça mal olur?', answer: 'Giriş seviyesi kurumsal ve randevu uygulamaları genellikle uygun bütçelerle başlarken; canlı takip, ödeme ve yapay zeka içeren gelişmiş projeler daha kapsamlı bütçelendirilir. Ücretsiz ön analiz için hemen iletişime geçebilirsiniz.' },
      { question: 'Ödemeler nasıl yapılıyor?', answer: 'Genellikle %30 başlangıç, %40 test sürümü onayı ve %30 mağazada canlıya çıkış şeklinde 3 vadeli güvenli modelle çalışıyoruz.' },
    ],
  },
};
