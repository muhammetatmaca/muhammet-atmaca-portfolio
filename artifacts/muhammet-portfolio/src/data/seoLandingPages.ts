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
  // =========================================================================
  // 1. BAYBURT ULTRA DOMINASYON SERİSİ (15 HEDEF SAYFA)
  // =========================================================================
  'bayburt-yazilim': {
    slug: 'bayburt-yazilim',
    title: 'Bayburt Yazılım & Bilgisayar Mühendisliği — Muhammet Atmaca (VirelonSoft)',
    metaDescription: 'Bayburt merkezli yazılım ve bilgisayar mühendisliği çözümleri. Bayburt Fen Lisesi mezunu Muhammet Atmaca ile mobil uygulama, web platformu ve otomasyon sistemleri.',
    keywords: ['Bayburt yazılım', 'Bayburt yazılımcı', 'Bayburt yazılım şirketi', 'Bayburt bilgisayar mühendisi', 'Bayburt yazılım ofisi', 'Bayburt VirelonSoft', 'Muhammet Atmaca Bayburt'],
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
      { title: 'Doğrudan Bayburt İçi İletişim', description: 'Bayburt merkezde yüz yüze toplantı imkanı, yerinde analiz ve sıfır aracı ile doğrudan mühendis iletişimi.' },
      { title: '50+ Canlı Mobil Uygulama Güvencesi', description: 'Teorik vaatler değil; Apple App Store ve Google Play’de aktif yüz binlerce kullanıcıya ulaşan gerçek ürünler.' },
      { title: 'Kurumsal Faturalandırma ve Destek', description: 'Sözleşmeli, faturalı, teslim sonrası kesintisiz teknik destek ve sürüm güncelleme garantisi.' },
      { title: 'Uluslararası Yazılım Standartları', description: 'React Native, Flutter, Next.js ve bulut mimarileri ile geleceğe hazır, yüksek güvenlikli kod tabanı.' },
    ],
    featuredAppIds: ['teleflow-prompter', 'virelon-wifi', 'toplualarm', 'tick-shopping'],
    processSteps: [
      { step: '01', title: 'Bayburt İçi Analiz & Teklif', desc: 'İşletmenizin ihtiyaçlarını masaya yatırır, net kapsam ve sabit fiyat teklifi çıkarırız.' },
      { step: '02', title: 'Modern UI/UX Tasarım', desc: 'Kullanımı kolay, prestijli ve kurumsal kimliğinize uygun ekran prototipleri hazırlarız.' },
      { step: '03', title: 'Hızlı & Güvenli Kodlama', desc: 'React Native ve Next.js ile yüksek performanslı, hatasız yazılım geliştirilir.' },
      { step: '04', title: 'Canlıya Alma & Yerinde Eğitim', desc: 'Yazılımınız kurulur, test edilir ve personeliniz için yerinde kullanım eğitimi verilir.' },
    ],
    faqs: [
      { question: 'Bayburt’ta yüz yüze görüşebilir miyiz?', answer: 'Evet. Bayburt merkezde veya ofisinizde doğrudan bir araya gelerek projenizi detaylıca planlayabiliriz.' },
      { question: 'Yazılım tesliminden sonra destek veriyor musunuz?', answer: 'Kesinlikle. Tüm projelerimiz teslim sonrası garanti ve teknik destek kapsamındadır; bakım ve güncellemeler düzenli olarak sağlanır.' },
    ],
  },

  'bayburt-yazilim-sirketi': {
    slug: 'bayburt-yazilim-sirketi',
    title: 'Bayburt Yazılım Şirketi & Ofisi — VirelonSoft (Muhammet Atmaca)',
    metaDescription: 'Bayburt yazılım şirketi ve teknoloji ofisi arayanlar için kurumsal çözümler. Özel web, mobil uygulama, otomasyon ve veritabanı yazılımları.',
    keywords: ['Bayburt yazılım şirketi', 'Bayburt yazılım firmaları', 'Bayburt yazılım ofisi', 'Bayburt yazılım ajansı', 'Bayburt VirelonSoft', 'Bayburt bilişim firması'],
    eyebrow: 'Kurumsal Yazılım Şirketi & Ofisi',
    heroHeading: 'Bayburt’un Güvenilir',
    heroHighlight: 'Yazılım Şirketi',
    heroSubheading: 'Kurumsal sözleşme, faturalı teslimat ve 50’den fazla canlı mobil uygulama referansıyla Bayburt’un öncü yazılım teknoloji ortağı.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'Kurumsal Sözleşme & Fatura',
    targetAudience: 'Bayburt’ta kurumsal bir yazılım şirketiyle çalışarak işini garantiye almak isteyen müteahhitler, fabrikalar, toptancılar ve esnaflar.',
    introParagraph: 'VirelonSoft çatısı altında; Bayburt merkezli işletmelere kurumsal yazılım şirketi ciddiyetiyle hizmet veriyoruz. İşi yarım bırakma riski olmadan, sözleşmeli ve faturalı mühendislik hizmeti sunuyoruz.',
    whyChooseUs: [
      { title: 'Kurumsal Sözleşme Güvencesi', description: 'Tüm teslimat tarihleri, fonksiyonel gereksinimler ve fiyatlar resmi sözleşmeyle garanti altına alınır.' },
      { title: 'Bayburt Fen Lisesi Mühendislik Kültürü', description: 'Analitik düşünce, yüksek disiplin ve savunma sanayii standartlarında kod kalitesi.' },
      { title: '7/24 Teknik Destek & Bakım', description: 'Olası sistem aksamalarında Bayburt içinde anında müdahale ve kesintisiz çalışma güvencesi.' },
      { title: 'Geniş Sektörel Yelpaze', description: 'İnşaat, tarım, gıda, tekstil, perakende ve sağlık sektörlerine özel çözümler.' },
    ],
    featuredAppIds: ['virelon-wifi', 'teleflow-prompter', 'toplualarm', 'tick-shopping'],
    processSteps: [
      { step: '01', title: 'Ofis Toplantısı', desc: 'Bayburt’ta yüz yüze ihtiyaç belirleme.' },
      { step: '02', title: 'Sözleşme & Yol Haritası', desc: 'Net iş teslim planı ve sabit bütçe.' },
      { step: '03', title: 'Aşamalı Geliştirme', desc: 'Haftalık demolarla onaylı ilerleme.' },
      { step: '04', title: 'Canlı Teslim & Garanti', desc: 'Kaynak kodlar ve tam kullanım hakkı teslimi.' },
    ],
    faqs: [
      { question: 'Faturalı çalışıyor musunuz?', answer: 'Evet, kurumsal tüm projelerimiz faturalı ve resmi sözleşmeli olarak gerçekleştirilir.' },
    ],
  },

  'bayburt-bilgisayar': {
    slug: 'bayburt-bilgisayar',
    title: 'Bayburt Bilgisayar & Özel Otomasyon Sistemleri — Muhammet Atmaca',
    metaDescription: 'Bayburt bilgisayar yazılımları, stok takip, özel otomasyon, veritabanı yönetimi ve kurumsal bilişim danışmanlığı. 7+ yıl mühendislik deneyimi.',
    keywords: ['Bayburt bilgisayar', 'Bayburt bilgisayar yazılımı', 'Bayburt otomasyon sistemleri', 'Bayburt bilişim', 'Bayburt bilgisayar mühendisi', 'Bayburt veritabanı yazılımı'],
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
      { step: '01', title: 'İş Süreci Analizi', desc: 'İş yerinizdeki mevcut işleyiş incelenir.' },
      { step: '02', title: 'Yazılım Mimarisi', desc: 'Hızlı veritabanı ve sade ekran tasarımı.' },
      { step: '03', title: 'Geliştirme & Test', desc: 'Mevcut verileriniz aktarılır.' },
      { step: '04', title: 'Kurulum & Eğitim', desc: 'Bilgisayarlarınıza kurulur, personele eğitim verilir.' },
    ],
    faqs: [
      { question: 'Eski verilerimi yeni programa aktarabilir misiniz?', answer: 'Evet, Excel veya eski veritabanlarınızdaki kayıtları yeni sisteme hatasız aktarıyoruz.' },
    ],
  },

  'bayburt-bilgisayar-muhendisi': {
    slug: 'bayburt-bilgisayar-muhendisi',
    title: 'Bayburt Bilgisayar Mühendisi & Yazılım Danışmanı — Muhammet Atmaca',
    metaDescription: 'Bayburt’ta bilgisayar mühendisliği ve teknik danışmanlık hizmeti. Bayburt Fen Lisesi mezunu kıdemli mühendis Muhammet Atmaca ile projelerinizi hayata geçirin.',
    keywords: ['Bayburt bilgisayar mühendisi', 'Bayburt yazılım mühendisi', 'Bayburt bilişim uzmanı', 'Bayburt teknik danışman', 'Muhammet Atmaca bilgisayar mühendisi'],
    eyebrow: 'Kıdemli Bilgisayar Mühendisi',
    heroHeading: 'Bayburt’ta Doğrudan',
    heroHighlight: 'Mühendislik Güvencesi',
    heroSubheading: 'Aracı ajanslar veya stajyerler değil; savunma sanayii, kamu bulut ve 50+ mobil uygulama tecrübesine sahip kıdemli bilgisayar mühendisiyle çalışın.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'Kıdemli Yazılım Mühendisi',
    targetAudience: 'Yazılım projesini şansa bırakmak istemeyen, doğrudan uzman bir bilgisayar mühendisiyle çalışmak isteyen vizyoner iş insanları.',
    introParagraph: 'Bayburt Fen Lisesi kökenli analitik altyapım ve 7 yılı aşkın profesyonel mühendislik kariyerimle; Bayburt’taki işletmelerin teknolojik altyapısını güçlendiriyor, verimliliklerini artıran modern yazılımlar geliştiriyorum.',
    whyChooseUs: [
      { title: 'Birebir Mühendis İletişimi', description: 'Teknik detayları doğrudan kodlayan kişiye anlatır, anında doğru çözümü alırsınız.' },
      { title: 'UHUK & Savunma Sanayii Tecrübesi', description: 'Ulusal Havacılık Kongresi bildirisi ve kamu bulut altyapısı kalitesinde mühendislik.' },
      { title: 'Tasarım + Kodlama + Mağaza Yayını', description: 'Tüm aşamaları tek elden, koordinasyon sorunu yaşamadan profesyonelce tamamlayın.' },
    ],
    featuredAppIds: ['teleflow-prompter', 'virelon-wifi', 'geode-cutter-3d', 'truelevel'],
    processSteps: [
      { step: '01', title: 'Teknik Değerlendirme', desc: 'Fikrinizin mühendislik fizibilitesi çıkarılır.' },
      { step: '02', title: 'Mimari Planlama', desc: 'Doğru teknolojiler seçilerek sağlam zemin kurulur.' },
      { step: '03', title: 'Uygulama & Geliştirme', desc: 'Performanslı ve güvenli kodlama.' },
      { step: '04', title: 'Tam Teslimat', desc: 'Sistem devreye alınır ve çalışır teslim edilir.' },
    ],
    faqs: [
      { question: 'Hangi teknolojileri kullanıyorsunuz?', answer: 'React Native, Flutter, Next.js, TypeScript, Node.js, ASP.NET Core, PostgreSQL, SQLite ve bulut teknolojilerini kullanıyorum.' },
    ],
  },

  'bayburt-mobil-uygulama': {
    slug: 'bayburt-mobil-uygulama',
    title: 'Bayburt Mobil Uygulama Geliştirme (iOS & Android) — Anahtar Teslim',
    metaDescription: 'Bayburt’ta mobil uygulama yaptırmak isteyenler için React Native ve Flutter ile App Store & Google Play onay garantili anahtar teslim geliştirme.',
    keywords: ['Bayburt mobil uygulama', 'Bayburt mobil yazılımcı', 'Bayburt ios uygulama', 'Bayburt android yazılım', 'Bayburt uygulama yaptırma', 'Bayburt mobil yazılım ajansı'],
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
    ],
  },

  'bayburt-web-tasarim': {
    slug: 'bayburt-web-tasarim',
    title: 'Bayburt Web Tasarım & Kurumsal Web Siteleri — SEO Uyumlu Next.js',
    metaDescription: 'Bayburt kurumsal web tasarım, e-ticaret ve Google SEO uyumlu web siteleri. Ultra hızlı, mobil uyumlu, Google’da üst sıralara çıkan modern siteler.',
    keywords: ['Bayburt web tasarım', 'Bayburt web sitesi yaptırma', 'Bayburt kurumsal web sitesi', 'Bayburt e-ticaret sitesi', 'Bayburt seo uzmanı', 'Bayburt internet sitesi'],
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
    ],
  },

  'bayburt-web-sitesi-yaptirma': {
    slug: 'bayburt-web-sitesi-yaptirma',
    title: 'Bayburt Web Sitesi Yaptırma & Fiyatları — Şeffaf & Sabit Bütçe',
    metaDescription: 'Bayburt’ta web sitesi yaptırmak kaça mal olur? 2026 güncel fiyatlar, mobil uyumlu kurumsal tasarımlar ve Google ilk sayfa garantili çözümler.',
    keywords: ['Bayburt web sitesi yaptırma', 'Bayburt web sitesi fiyatları', 'Bayburt internet sitesi kurma', 'Bayburt ucuz web sitesi', 'Bayburt kaliteli web tasarım'],
    eyebrow: 'Şeffaf Web Tasarım Fiyatları',
    heroHeading: 'Bayburt’ta Web Sitesi',
    heroHighlight: 'Yaptırmak İsteyenlere Özel',
    heroSubheading: 'Sürpriz yıllık yenileme faturaları olmadan, net fiyat ve teslim garantisiyle modern kurumsal internet sitenizi yayına alın.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'Şeffaf & Sabit Fiyat',
    targetAudience: 'Yeni dükkan açan, şirket kuran ya da eski web sitesini yenilemek isteyen Bayburt esnafları ve işletme sahipleri.',
    introParagraph: 'Bayburt’ta web sitesi yaptırırken paranızın karşılığını tam olarak almak istiyorsanız, modası geçmiş hantal şablonlar yerine Google’ın en sevdiği modern yazılım teknolojileriyle çalışmalısınız.',
    whyChooseUs: [
      { title: 'Domain + Hosting Dahil', description: '.com.tr alan adı, SSL güvenlik sertifikası ve yüksek hızlı bulut sunucu kurulumu fiyata dahildir.' },
      { title: 'Google Haritalar & Rehber Kaydı', description: 'İşletmenizin Google Haritalar’da doğru çıkması için gerekli teknik doğrulama adımları.' },
      { title: 'WhatsApp Doğrudan Sipariş Butonu', description: 'Sitenize giren ziyaretçiler tek tıkla WhatsApp hattınıza mesaj atsın, satışa dönüşsün.' },
    ],
    featuredAppIds: ['teleflow-prompter', 'virelon-wifi', 'tick-shopping', 'aura-weather-widget'],
    processSteps: [
      { step: '01', title: 'İçeriklerin Toplanması', desc: 'Logo, resim ve hizmet bilgileriniz alınır.' },
      { step: '02', title: 'Tasarım Hazırlığı', desc: 'Mobil uyumlu ekranlar hazırlanır ve onayınıza sunulur.' },
      { step: '03', title: 'Yayınlama', desc: 'Web siteniz internette açılır ve Google’a bildirilir.' },
    ],
    faqs: [
      { question: 'Sitemi kendim güncelleyebilir miyim?', answer: 'Evet, yönetim panelinden dilediğiniz zaman resim ve yazı ekleyebilirsiniz.' },
    ],
  },

  'bayburt-yazilimci': {
    slug: 'bayburt-yazilimci',
    title: 'Bayburt Yazılımcı & Mobil/Web Geliştirici — Muhammet Atmaca',
    metaDescription: 'Bayburt’ta güvenilir, tecrübeli yazılımcı arayanlar için doğrudan kıdemli mühendis desteği. 7+ yıl deneyim, 50+ mobil uygulama referansı.',
    keywords: ['Bayburt yazılımcı', 'Bayburt yazılımcı arayanlar', 'Bayburt freelance yazılımcı', 'Bayburt kod yazarı', 'Bayburt yazılım uzmanı'],
    eyebrow: 'Doğrudan Yazılımcı İletişimi',
    heroHeading: 'Bayburt’ta Güvenilir Bir',
    heroHighlight: 'Yazılımcı mı Arıyorsunuz?',
    heroSubheading: 'İşi yarıda bırakmayan, telefonunuza her an çıkan, söz verdiği tarihte teslim eden kıdemli yazılımcı Muhammet Atmaca.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'Doğrudan Mühendis Güvencesi',
    targetAudience: 'Daha önce yazılımcılarla sorun yaşamış veya projesini ehil ellere teslim etmek isteyen tüm işletmeler.',
    introParagraph: 'Yazılım dünyasında en büyük sorun güven ve sürdürülebilirliktir. Bayburt Fen Lisesi mezunu olarak memleketimde yürüttüğüm her projede dürüstlük, şeffaflık ve üstün kaliteyi ilke edindim.',
    whyChooseUs: [
      { title: 'Ulaşılabilirlik', description: 'Günün her saatinde telefonla veya WhatsApp ile doğrudan teknik destek.' },
      { title: 'Zamanında Teslimat', description: 'Gecikme olmadan, söz verilen takvimde çalışan ürün teslimi.' },
      { title: 'Temiz & Belgelenmiş Kod', description: 'Gelecekte rahatça genişletilebilecek uluslararası standartta kod altyapısı.' },
    ],
    featuredAppIds: ['teleflow-prompter', 'geode-cutter-3d', 'virelon-wifi', 'tempoeat'],
    processSteps: [
      { step: '01', title: 'Tanışma & Dinleme', desc: 'Projenizi yüz yüze ya da telefonla dinleriz.' },
      { step: '02', title: 'Doğru Yönlendirme', desc: 'Bütçenizi en verimli kullanacak teknolojiyi öneririm.' },
      { step: '03', title: 'Düzenli Bilgilendirme', desc: 'Geliştirme sürecinde haftalık durum raporları.' },
    ],
    faqs: [
      { question: 'Küçük projeler için de bakıyor musunuz?', answer: 'Evet, tek sayfalık bir web sitesinden yüzlerce ekranlı mobil uygulamaya kadar her ölçekte destek sağlıyorum.' },
    ],
  },

  'bayburt-e-ticaret-yazilimi': {
    slug: 'bayburt-e-ticaret-yazilimi',
    title: 'Bayburt E-Ticaret Sitesi & Online Satış Yazılımları — Yerel Üreticiler İçin',
    metaDescription: 'Bayburt’tan tüm Türkiye’ye ve dünyaya online satış yapın. Komisyonsuz e-ticaret siteleri, kredi kartı entegrasyonu ve kargo otomasyonu.',
    keywords: ['Bayburt e-ticaret', 'Bayburt online satış', 'Bayburt sanal mağaza', 'Bayburt e-ticaret sitesi kurma', 'Bayburt organik ürün satış sitesi'],
    eyebrow: 'E-Ticaret & Dijital Satış',
    heroHeading: 'Bayburt’un Ürünlerini',
    heroHighlight: 'Tüm Türkiye’ye Satın',
    heroSubheading: 'Bayburt balı, pestili, tarım ürünleri ve yerel üreticileri için pazaryeri komisyonlarına mahkum olmadan kendi e-ticaret siteniz üzerinden satış yapın.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'Komisyonsuz Kendi Mağazanız',
    targetAudience: 'Bayburt’ta yerel lezzetler, el sanatları, tekstil veya imalat ürünlerini internetten Türkiye’ye satmak isteyen üreticiler.',
    introParagraph: 'Trendyol, Hepsiburada gibi platformlar %20-30’lara varan fahiş komisyonlar keser. Kendi e-ticaret sitenizle tüm kâr size kalır. Kredi kartı, kargo barkodu ve stok yönetimini tek tuşla halledin.',
    whyChooseUs: [
      { title: '%0 Komisyon ile Kendi Siteniz', description: 'Pazaryerlerine komisyon ödemeden net kazanç elde edin.' },
      { title: 'İyzico / PayTR Kredi Kartı Entegrasyonu', description: 'Tüm banka kartlarından 12 aya varan taksitle güvenli ödeme alma.' },
      { title: 'Otomatik Kargo Entegrasyonu', description: 'Sipariş geldiğinde tek tıkla kargo fişi çıkarma kolaylığı.' },
    ],
    featuredAppIds: ['tick-shopping', 'teleflow-prompter', 'virelon-wifi', 'toplualarm'],
    processSteps: [
      { step: '01', title: 'Ürün & Kategori Düzeni', desc: 'Ürünleriniz ve fiyatlarınız sisteme girilir.' },
      { step: '02', title: 'Ödeme & Kargo Bağlantısı', desc: 'Banka ve kargo anlaşmalarınız entegre edilir.' },
      { step: '03', title: 'Test Siparişleri & Lansman', desc: 'Gerçek kart testleri yapılır ve satışa başlanır.' },
    ],
    faqs: [
      { question: 'Sanal POS başvurusu nasıl yapılıyor?', answer: 'İyzico veya PayTR gibi güvenli ödeme sağlayıcılarına başvuruyu sizin adınıza birlikte tamamlıyoruz.' },
    ],
  },

  'bayburt-otomasyon-yazilimlari': {
    slug: 'bayburt-otomasyon-yazilimlari',
    title: 'Bayburt Özel Stok, Fatura & İşletme Otomasyonu — Muhammet Atmaca',
    metaDescription: 'Bayburt esnafı ve fabrikaları için özel masaüstü ve bulut otomasyon yazılımları. Barkodlu satış, stok sayımı, cari takip ve anlık raporlama.',
    keywords: ['Bayburt otomasyon yazılımları', 'Bayburt stok takip programı', 'Bayburt barkodlu satış', 'Bayburt cari takip yazılımı', 'Bayburt özel muhasebe programı'],
    eyebrow: 'Özel İşletme Otomasyonu',
    heroHeading: 'Bayburt İşletmelerine Özel',
    heroHighlight: 'Sıfır Hata Otomasyon',
    heroSubheading: 'Defter karmaşasını ve stok kaçaklarını bitirin. Barkodlu hızlı satış, cari hesaplar ve anlık kâr/zarar raporları tek ekranda.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'Hızlı & Hatasız Operasyon',
    targetAudience: 'Depo, toptan, perakende satış yapan ve işini bilgisayardan anlık takip etmek isteyen Bayburt firmaları.',
    introParagraph: 'Karmaşık muhasebe programlarında kaybolmayın. Sadece sizin işinize yarayan butonların olduğu, personelin kolayca kullanabildiği sade ve güçlü otomasyon yazılımları tasarlıyoruz.',
    whyChooseUs: [
      { title: 'Dokunmatik Ekran Uyumlu Hızlı Satış', description: 'Market, şarküteri veya mağazanızda saniyeler içinde fiş ve barkod basımı.' },
      { title: 'Cepten Anlık Ciro Takibi', description: 'İş yerinde olmasanız bile telefonunuzdan bugünkü satışları ve stokları canlı görün.' },
      { title: 'Müşteri Borç / Alacak Hatırlatması', description: 'Vadesi gelen müşterilere otomatik SMS ve bildirim ile tahsilat kolaylığı.' },
    ],
    featuredAppIds: ['virelon-wifi', 'toplualarm', 'tick-shopping', 'truelevel'],
    processSteps: [
      { step: '01', title: 'İşyeri İncelemesi', desc: 'Dükkanınızdaki iş akışını yerinde inceleriz.' },
      { step: '02', title: 'Özel Ekran Tasarımı', desc: 'Kullanımı çocuk oyuncağı olan arayüz.' },
      { step: '03', title: 'Yerinde Kurulum', desc: 'Bilgisayar ve barkod okuyucunuza kurulum.' },
    ],
    faqs: [
      { question: 'Bilgisayarım bozulursa verilerim silinir mi?', answer: 'Hayır, veritabanı her gece otomatik olarak güvenli bulut sunucuya yedeklenir.' },
    ],
  },

  'bayburt-seo-uzmani': {
    slug: 'bayburt-seo-uzmani',
    title: 'Bayburt SEO Uzmanı & Google Sıralama Yükseltme — Muhammet Atmaca',
    metaDescription: 'Bayburt’ta Google aramalarında 1. sıraya çıkmak isteyenler için profesyonel teknik SEO, yerel harita optimizasyonu ve Schema.org mimarisi.',
    keywords: ['Bayburt seo uzmanı', 'Bayburt google ilk sıra', 'Bayburt seo danışmanı', 'Bayburt arama motoru optimizasyonu', 'Bayburt google harita kaydı'],
    eyebrow: 'Google 1. Sıra & Yerel SEO',
    heroHeading: 'Google’da Bayburt Aramalarında',
    heroHighlight: 'En Tepede Siz Çıkın',
    heroSubheading: 'Rakiplerinizi geride bırakın. Biri Bayburt’ta sizin sektörünüzü arattığında ilk sırada web siteniz ve Google Harita profiliniz çıksın.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'Teknik SEO & Yerel Harita',
    targetAudience: 'Web sitesi olan ama Google’da çıkmayan ya da daha çok müşteri çekmek isteyen Bayburt işletmeleri.',
    introParagraph: 'SEO sadece kelime tekrarı değildir; teknik altyapı, Schema.org mikro verileri, site açılış hızı ve yerel otoritedir. Google algoritmalarını derinlemesine bilen bir mühendis olarak sitenizi hak ettiği zirveye taşıyorum.',
    whyChooseUs: [
      { title: 'Teknik SEO Denetimi (Audit)', description: 'Sitenizdeki kodlama hatalarını ve Google’ın okuyamadığı alanları düzeltme.' },
      { title: 'Google Haritalar 3-Pack Hedefi', description: 'Harita aramalarında ilk 3’e girerek doğrudan telefon araması çekme.' },
      { title: 'Kalıcı ve Güvenli (White-Hat)', description: 'Google cezası riski olmayan, tamamen kılavuzlara uygun organik yükselme.' },
    ],
    featuredAppIds: ['teleflow-prompter', 'virelon-wifi', 'toplualarm', 'aura-weather-widget'],
    processSteps: [
      { step: '01', title: 'Mevcut Durum Analizi', desc: 'Sitenizin ve rakiplerinizin sıralama analizi.' },
      { step: '02', title: 'Teknik Altyapı Düzeltmesi', desc: 'Hız, mobil uyum ve şema kodları entegrasyonu.' },
      { step: '03', title: 'Düzenli Raporlama', desc: 'Google Search Console sıralama artış raporları.' },
    ],
    faqs: [
      { question: 'SEO çalışması ne kadar sürer?', answer: 'Genellikle ilk teknik düzeltmelerin ardından 2 ila 4 hafta içinde gözle görülür sıralama yükselişleri başlar.' },
    ],
  },

  'bayburt-bilisim-hizmetleri': {
    slug: 'bayburt-bilisim-hizmetleri',
    title: 'Bayburt Bilişim, Ağ Altyapısı & Bilgisayar Çözümleri — Muhammet Atmaca',
    metaDescription: 'Bayburt bilişim hizmetleri, yerel ağ güvenliği, kurumsal e-posta, sunucu kurulumu ve teknik yazılım desteği. Cisco ve K8s tecrübeli mühendislik.',
    keywords: ['Bayburt bilişim', 'Bayburt bilişim hizmetleri', 'Bayburt bilgisayar servisi', 'Bayburt ağ kurulumu', 'Bayburt sunucu kurulumu', 'Bayburt kurumsal bilişim'],
    eyebrow: 'Kurumsal Bilişim & Ağ Güvenliği',
    heroHeading: 'Bayburt Kurumlarına Özel',
    heroHighlight: 'Bilişim & Altyapı Çözümleri',
    heroSubheading: 'Cisco ağ simülasyonu ve kamu bulut tecrübesiyle; şirketinizin bilgisayar ağını, veritabanını ve veri güvenliğini profesyonelce yönetin.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'Cisco & Bulut Standartları',
    targetAudience: 'Bayburt’taki kamu binaları, okullar, fabrikalar, şantiyeler ve çok personelli şirketler.',
    introParagraph: 'Bilişim altyapınız çöktüğünde işletmeniz durur. Güvenli ağ anahtarları (switch), yedekli internet hatları, kurumsal e-posta ve şifreli sunucu mimarileriyle Bayburt’ta bilişim sorunlarınızı kökten çözüyoruz.',
    whyChooseUs: [
      { title: 'Taktik Ağ & Cisco Tecrübesi', description: 'Polis ve kamu haberleşme standartlarında güvenli ağ topolojileri.' },
      { title: 'Veri Güvenliği ve Fidye Yazılım Koruması', description: 'Şirket dosyalarınızın çalınmasına veya şifrelenmesine karşı zırhlı yedekleme.' },
      { title: 'Hızlı Yerinde Müdahale', description: 'Bayburt içi arızalarda saatler içinde yerinde çözüm.' },
    ],
    featuredAppIds: ['virelon-wifi', 'toplualarm', 'tick-shopping', 'truelevel'],
    processSteps: [
      { step: '01', title: 'Altyapı Keşfi', desc: 'Mevcut kablo, modem ve cihazların kontrolü.' },
      { step: '02', title: 'Güvenlik İyileştirmesi', desc: 'Açıkların kapatılması ve güvenlik duvarı kurulumu.' },
      { step: '03', title: 'Düzenli Bakım', desc: 'Periyodik sistem kontrolleri ve yedekleme takibi.' },
    ],
    faqs: [
      { question: 'Aylık kurumsal bakım anlaşması yapıyor musunuz?', answer: 'Evet, işletmenizin bilişim sistemlerini sürekli güvende tutan aylık bakım sözleşmeleri sunuyoruz.' },
    ],
  },

  'demirozu-yazilim-web-tasarim': {
    slug: 'demirozu-yazilim-web-tasarim',
    title: 'Demirözü Yazılım & Web Tasarım — Bayburt Demirözü Mobil Çözümler',
    metaDescription: 'Bayburt Demirözü ilçesinde web tasarım, mobil uygulama ve yazılım hizmetleri. Demirözü esnafı ve işletmeleri için modern dijital çözümler.',
    keywords: ['Demirözü yazılım', 'Demirözü web tasarım', 'Demirözü bilgisayar', 'Demirözü mobil uygulama', 'Bayburt Demirözü yazılımcı'],
    eyebrow: 'Demirözü Yerel Yazılım Çözümleri',
    heroHeading: 'Demirözü İşletmeleri İçin',
    heroHighlight: 'Modern Web & Yazılım',
    heroSubheading: 'Demirözü ilçemizdeki tarım, hayvancılık, turizm ve perakende işletmeleri için Google uyumlu web siteleri ve özel mobil uygulamalar.',
    cityOrRegion: 'Bayburt / Demirözü',
    category: 'local',
    badge: 'Demirözü & Bayburt',
    targetAudience: 'Demirözü’nde faaliyet gösteren kooperatifler, işletmeler, tesisler ve üreticiler.',
    introParagraph: 'Demirözü Barajı tesislerinden yerel üreticilere kadar Demirözü’ndeki tüm girişimlerin dijital dünyada parlaması için anahtar teslim yazılım ve web tasarım hizmeti veriyoruz.',
    whyChooseUs: [
      { title: 'Yerinde Demirözü Ziyareti', description: 'İlçemize doğrudan gelerek projenizi yüz yüze konuşma kolaylığı.' },
      { title: 'Mobil Uyumlu Modern Web Siteleri', description: 'Google’da Demirözü aramalarında ilk sırada çıkma güvencesi.' },
    ],
    featuredAppIds: ['teleflow-prompter', 'tick-shopping', 'virelon-wifi', 'toplualarm'],
    processSteps: [
      { step: '01', title: 'İlçe Ziyareti / Görüşme', desc: 'Taleplerinizi dinleriz.' },
      { step: '02', title: 'Hızlı Kurulum', desc: '1-2 hafta içinde web siteniz ve yazılımınız hazır.' },
    ],
    faqs: [
      { question: 'Demirözü’ne geliyor musunuz?', answer: 'Evet, Bayburt merkezden Demirözü’ne yerinde analiz ve destek için geliyorum.' },
    ],
  },

  'aydintepe-yazilim-web-tasarim': {
    slug: 'aydintepe-yazilim-web-tasarim',
    title: 'Aydıntepe Yazılım & Web Tasarım — Bayburt Aydıntepe Dijital Sistemler',
    metaDescription: 'Bayburt Aydıntepe web tasarım, bilgisayar yazılımları ve mobil uygulama geliştirme. Aydıntepe Yeraltı Şehri turizm ve yerel işletme çözümleri.',
    keywords: ['Aydıntepe yazılım', 'Aydıntepe web tasarım', 'Aydıntepe bilgisayar', 'Bayburt Aydıntepe yazılımcı', 'Aydıntepe internet sitesi'],
    eyebrow: 'Aydıntepe Yerel Çözümleri',
    heroHeading: 'Aydıntepe İçin Özel',
    heroHighlight: 'Web & Bilgisayar Yazılımları',
    heroSubheading: 'Aydıntepe’deki işletmeler, turizm tesisleri ve yerel üreticiler için kurumsal web tasarım ve özel otomasyon sistemleri.',
    cityOrRegion: 'Bayburt / Aydıntepe',
    category: 'local',
    badge: 'Aydıntepe & Bayburt',
    targetAudience: 'Aydıntepe ilçemizdeki işletmeler, esnaflar ve yerel üreticiler.',
    introParagraph: 'Aydıntepe’nin zengin tarihine ve yerel ticaretine yakışır modern dijital platformlar kuruyoruz. Web sitenizle hem Türkiye’ye hem de yurt dışına ulaşın.',
    whyChooseUs: [
      { title: 'Bölgeye Hakimiyet', description: 'Aydıntepe’nin yerel dinamiklerini bilerek en doğru tasarımı üretme.' },
      { title: 'Google Harita & Arama Uyumu', description: 'Aydıntepe aramalarında işletmenizin doğrudan bulunması.' },
    ],
    featuredAppIds: ['teleflow-prompter', 'aura-weather-widget', 'virelon-wifi', 'toplualarm'],
    processSteps: [
      { step: '01', title: 'İhtiyaç Belirleme', desc: 'Hizmetlerinizin listelenmesi.' },
      { step: '02', title: 'Canlıya Alma', desc: 'Alan adı ve web sitenizin açılışı.' },
    ],
    faqs: [
      { question: 'Aydıntepe için ne kadar sürede hazır olur?', answer: 'Standart kurumsal web projelerimiz 7 ila 10 gün içinde eksiksiz teslim edilir.' },
    ],
  },

  'bayburt-qr-menu-adisyon': {
    slug: 'bayburt-qr-menu-adisyon',
    title: 'Bayburt QR Menü & Restoran Adisyon Yazılımı — Kafe ve Lokantalar İçin',
    metaDescription: 'Bayburt kafe, restoran ve lokantaları için temassız QR kodlu dijital menü ve garson sipariş adisyon yazılımları. Fiyatları anında güncelleyin.',
    keywords: ['Bayburt qr menü', 'Bayburt restoran adisyon programı', 'Bayburt kafe sipariş sistemi', 'Bayburt dijital menü', 'Bayburt lokanta yazılımı'],
    eyebrow: 'Kafe & Restoran Teknolojileri',
    heroHeading: 'Bayburt Restoranları İçin',
    heroHighlight: 'Akıllı QR Menü & Adisyon',
    heroSubheading: 'Baskı maliyetlerini sıfırlayın. Masadaki QR kodu okutan müşteriniz resimli menüyü görsün, garson tek dokunuşla siparişi mutfağa göndersin.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'Kafe & Restoranlara Özel',
    targetAudience: 'Bayburt merkezdeki dönerciler, kafeler, lokantalar, pastaneler ve otel restoranları.',
    introParagraph: 'Enflasyon ve fiyat değişimlerinde sürekli menü bastırmaktan yoruldunuz mu? Bayburt’taki işletmeniz için anında fiyat değiştirebileceğiniz, cep telefonundan çalışan modern QR menü ve adisyon sistemi kuruyoruz.',
    whyChooseUs: [
      { title: 'Baskı Masrafı Sıfır', description: 'Fiyatları ve ürünleri telefonunuzdan saniyeler içinde güncelleyin.' },
      { title: 'Masa Bazlı Sipariş Takibi', description: 'Hangi masa ne sipariş verdi, hesap ne kadar anlık ekranda.' },
      { title: 'İnternet Hızında ve Sade', description: 'Müşterinin uygulama indirmesine gerek yok; kamera açıldığında menü anında açılır.' },
    ],
    featuredAppIds: ['tick-shopping', 'tempoeat', 'toplualarm', 'virelon-wifi'],
    processSteps: [
      { step: '01', title: 'Menü Aktarımı', desc: 'Yemek ve içecekleriniz fotoğraflarıyla yüklenir.' },
      { step: '02', title: 'QR Kod Baskıları', desc: 'Masalarınıza özel pleksi veya şık QR etiketleri verilir.' },
      { step: '03', title: 'Kullanım Başlangıcı', desc: 'Ekibinizle hemen sipariş almaya başlarsınız.' },
    ],
    faqs: [
      { question: 'Aylık kira ücreti var mı?', answer: 'İsteğe bağlı olarak tek seferlik ödemeyle ömür boyu kullanabileceğiniz paketlerimiz mevcuttur.' },
    ],
  },

  // =========================================================================
  // 2. SAMSUN & BÖLGESEL MERKEZLER
  // =========================================================================
  'samsun-mobil-uygulama': {
    slug: 'samsun-mobil-uygulama',
    title: 'Samsun Mobil Uygulama Geliştirme — React Native & Flutter Uzmanı',
    metaDescription: 'Samsun’da mobil uygulama yaptırmak isteyen şirket ve girişimcilere özel React Native ve Flutter çözümleri. 50+ canlı uygulama tecrübesi.',
    keywords: ['Samsun mobil uygulama', 'Samsun yazılımcı', 'Samsun mobil yazılım şirketi', 'Samsun react native', 'Samsun yazılım mühendisi', 'Samsun mobil ajans'],
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
    ],
  },

  // =========================================================================
  // 3. BÜYÜKŞEHİRLER (İSTANBUL, ANKARA, İZMİR, BURSA)
  // =========================================================================
  'istanbul-mobil-uygulama': {
    slug: 'istanbul-mobil-uygulama',
    title: 'İstanbul Mobil Uygulama Geliştirici & React Native Uzmanı — Muhammet Atmaca',
    metaDescription: 'İstanbul merkezli girişim ve şirketler için uzaktan kesintisiz mobil uygulama geliştirme. 50+ canlı uygulama, React Native ve Flutter uzmanlığı.',
    keywords: ['İstanbul mobil uygulama', 'İstanbul react native geliştirici', 'İstanbul flutter yazılımcı', 'İstanbul mobil yazılım ajansı', 'İstanbul freelance mobil yazılımcı'],
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
      { question: 'İstanbul’da fiziksel toplantı gerekiyor mu?', answer: 'Gerekmiyor; online toplantılar ve haftalık canlı test sürümleriyle fiziksel mesafeyi sıfıra indiriyoruz.' },
    ],
  },

  'ankara-mobil-yazilim': {
    slug: 'ankara-mobil-yazilim',
    title: 'Ankara Mobil Yazılım & Savunma Mimarisi — Muhammet Atmaca',
    metaDescription: 'Ankara merkezli savunma, kamu ve kurumsal sistemlere uygun yüksek güvenlikli mobil uygulama ve bulut çözümleri. T.C. Kamu & SSB tecrübesi.',
    keywords: ['Ankara mobil yazılım', 'Ankara mobil uygulama geliştirme', 'Ankara react native', 'Ankara savunma sanayii yazılım', 'Ankara yazılım danışmanlığı'],
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
    keywords: ['İzmir mobil yazılım', 'İzmir mobil uygulama geliştirici', 'İzmir react native', 'İzmir yazılım şirketi', 'İzmir mobil ajans'],
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
    keywords: ['Bursa mobil uygulama', 'Bursa yazılım şirketi', 'Bursa mobil yazılımcı', 'Bursa e-ticaret mobil uygulama', 'Bursa kurumsal yazılım'],
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

  // =========================================================================
  // 4. TİCARİ ARAMA NİYETİ ODAKLI SAYFALAR (HIGH INTENT)
  // =========================================================================
  'mobil-uygulama-yaptirmak-istiyorum': {
    slug: 'mobil-uygulama-yaptirmak-istiyorum',
    title: 'Mobil Uygulama Yaptırmak İstiyorum — 2026 Süreç, Fiyat & Adımlar',
    metaDescription: 'Mobil uygulama yaptırmak isteyenler için eksiksiz rehber. React Native ve Flutter ile çift platform, App Store & Google Play onay garantisi ve şeffaf fiyatlandırma.',
    keywords: ['mobil uygulama yaptırmak istiyorum', 'uygulama yaptırma fiyatları', 'mobil uygulama geliştirme süreci', 'uygulama yaptırmak kaça mal olur', 'freelance mobil yazılımcı', 'anahtar teslim mobil uygulama'],
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
    ],
  },

  'react-native-gelistirici': {
    slug: 'react-native-gelistirici',
    title: 'Kıdemli React Native Geliştirici Türkiye — Muhammet Atmaca (50+ Uygulama)',
    metaDescription: 'Türkiye geneli kıdemli React Native geliştirici. iOS ve Android için 60 FPS yerel performanslı, Redux/Zustand, TypeScript ve Expo tecrübeli uzman mühendis.',
    keywords: ['react native geliştirici', 'react native yazılımcı türkiye', 'react native developer', 'kıdemli mobil yazılımcı', 'react native danışmanlık'],
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
    keywords: ['mobil uygulama fiyatları', 'uygulama yaptırma maliyeti', 'mobil yazılım ücretleri', 'uygulama kaça mal olur', 'mobil uygulama fiyat hesaplama'],
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
    ],
  },
};
