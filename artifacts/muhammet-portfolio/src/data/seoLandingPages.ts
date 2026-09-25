import { TURKISH_CITIES, TurkishCity } from './turkishCities';

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

// =========================================================================
// 1. BAYBURT ULTRA DOMİNASYON SERİSİ (40+ HİPER ÖZELLEŞTİRİLMİŞ SAYFA)
// =========================================================================
export const BAYBURT_SPECIALIZED_PAGES: Record<string, SeoLandingPageData> = {
  'bayburt-yazilim': {
    slug: 'bayburt-yazilim',
    title: 'Bayburt Yazılım & Bilgisayar Mühendisliği — Muhammet Atmaca (VirelonSoft)',
    metaDescription: 'Bayburt merkezli yazılım ve bilgisayar mühendisliği çözümleri. Bayburt Fen Lisesi mezunu Muhammet Atmaca ile mobil uygulama, web platformu ve otomasyon sistemleri.',
    keywords: ['Bayburt yazılım', 'Bayburt yazılımcı', 'Bayburt yazılım şirketi', 'Bayburt bilgisayar mühendisi', 'Bayburt yazılım ofisi', 'Bayburt VirelonSoft', 'Muhammet Atmaca Bayburt'],
    eyebrow: 'Bayburt Yerel Yazılım Mühendisliği',
    heroHeading: 'Bayburt İçin Profesyonel',
    heroHighlight: 'Yazılım & Mühendislik',
    heroSubheading: 'Bayburt Fen Lisesi mezunu yazılım mühendisi Muhammet Atmaca öncülüğünde; Bayburt’taki şirketler, KOBİ’ler ve kurumlar için dünya standartlarında yazılım çözümleri.',
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

  'bayburt-yazilim-sirketleri': {
    slug: 'bayburt-yazilim-sirketleri',
    title: 'Bayburt Yazılım Şirketleri & Ajansları Rehberi — Muhammet Atmaca',
    metaDescription: 'Bayburt yazılım şirketleri ve bilişim ajansları arayışınızda en güvenilir mühendislik çözümleri. Mobil app, ERP, web sitesi geliştirme.',
    keywords: ['Bayburt yazılım şirketleri', 'Bayburt bilişim ajansı', 'Bayburt yazılım ajansları', 'Bayburt yazılım ekipleri'],
    eyebrow: 'Bayburt Yazılım Şirketleri',
    heroHeading: 'Bayburt Yazılım Şirketleri Arasında',
    heroHighlight: 'Öncü Mühendislik',
    heroSubheading: 'Bayburt’ta yazılım şirketi arayan kurumlara savunma sanayii deneyimli yazılım mühendisi desteği.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'Savunma Sanayii Deneyimi',
    targetAudience: 'Bayburt’ta yazılım firması seçimi yapmak isteyen işletme sahipleri ve yöneticiler.',
    introParagraph: 'Bayburt yazılım şirketleri arasında, mağazalarda 50’den fazla canlı mobil uygulaması, TÜBİTAK ve T.C. Cumhurbaşkanlığı Dijital Dönüşüm Ofisi projelerindeki altyapı tecrübesiyle Muhammet Atmaca fark yaratıyor.',
    whyChooseUs: [
      { title: 'Gerçek Portfolyo', description: 'Yayında olan gerçek uygulamalar ve test edilebilir projeler.' },
      { title: 'Zamanında Teslim', description: 'Gecikme olmadan sözleşme süresinde anahtar teslim proje.' },
    ],
    featuredAppIds: ['teleflow-prompter', 'virelon-wifi', 'toplualarm'],
    processSteps: [
      { step: '01', title: 'Danışmanlık', desc: 'Proje analizi ve strateji.' },
      { step: '02', title: 'Geliştirme', desc: 'Modern kodlama.' },
      { step: '03', title: 'Teslimat', desc: 'Eğitim ve lansman.' },
    ],
    faqs: [
      { question: 'Neden sizi tercih etmeliyim?', answer: 'Çünkü vaat değil, 50’den fazla aktif yayınlanmış uygulama ve savunma sanayii seviyesinde mühendislik sunuyoruz.' },
    ],
  },

  'bayburt-bilgisayar': {
    slug: 'bayburt-bilgisayar',
    title: 'Bayburt Bilgisayar & Bilişim Çözümleri — Muhammet Atmaca',
    metaDescription: 'Bayburt bilgisayar, bilişim, yazılım geliştirme, veritabanı yönetimi ve kurumsal sistem entegrasyonu hizmetleri.',
    keywords: ['Bayburt bilgisayar', 'Bayburt bilgisayarcı', 'Bayburt bilişim', 'Bayburt bilgisayar sistemleri', 'Bayburt IT'],
    eyebrow: 'Bayburt Bilgisayar & Bilişim',
    heroHeading: 'Bayburt’ta İleri Düzey',
    heroHighlight: 'Bilgisayar & Bilişim',
    heroSubheading: 'Bayburt’taki işletmeler için bilgisayar sistemleri, ağ kurulumu, veritabanı mimarisi ve özel yazılım çözümleri.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'Bilgisayar Sistemleri & Bilişim',
    targetAudience: 'Bayburt’ta güvenilir bir bilgisayar ve bilişim uzmanı arayan tüm esnaf, şirket ve kamu birimleri.',
    introParagraph: 'Bayburt genelinde bilgisayar altyapıları, ağ sistemleri, veri güvenliği ve özel otomasyon yazılımlarıyla işinizi güvenceye alın.',
    whyChooseUs: [
      { title: 'Tam Donanımlı Mühendislik', description: 'Hem donanım hem yazılım mimarisinde üst düzey hakimiyet.' },
      { title: 'Bayburt İçi Hızlı Servis', description: 'Aksaklıklara hızlı ve etkili yerinde müdahale.' },
    ],
    featuredAppIds: ['virelon-wifi', 'kredi-hesaplayici', 'tick-shopping'],
    processSteps: [
      { step: '01', title: 'Keşif', desc: 'Mevcut bilişim altyapısının incelenmesi.' },
      { step: '02', title: 'Optimizasyon', desc: 'Hızlı ve modern sistemlerin entegrasyonu.' },
    ],
    faqs: [
      { question: 'Kurumsal bakım anlaşması yapıyor musunuz?', answer: 'Evet, Bayburt’taki şirketlerle aylık ve yıllık bilişim bakım anlaşmaları yapıyoruz.' },
    ],
  },

  'bayburt-bilgisayar-muhendisi': {
    slug: 'bayburt-bilgisayar-muhendisi',
    title: 'Bayburt Bilgisayar Mühendisi — Muhammet Atmaca (Yazılım Mühendisi)',
    metaDescription: 'Bayburt bilgisayar mühendisi Muhammet Atmaca. Bayburt Fen Lisesi mezunu, savunma sanayii ve bulut altyapısı deneyimli yazılım mühendisi.',
    keywords: ['Bayburt bilgisayar mühendisi', 'Bayburt yazılım mühendisi', 'Bayburt yazılımcı', 'Muhammet Atmaca', 'Bayburt Fen Lisesi yazılımcı'],
    eyebrow: 'Bilgisayar Mühendisi',
    heroHeading: 'Bayburt’ta Doğrudan',
    heroHighlight: 'Bilgisayar Mühendisi',
    heroSubheading: 'Aracı ajanslar olmadan, projenizi doğrudan mimarisine hakim bilgisayar mühendisiyle hayata geçirin.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: '7+ Yıl Mühendislik Tecrübesi',
    targetAudience: 'Ciddi, ölçeklenebilir ve yüksek performanslı yazılım projesi olan işletmeler ve girişimciler.',
    introParagraph: 'Bayburt Fen Lisesi kökenli Muhammet Atmaca; savunma sanayii, TÜBİTAK 2209-A uydudan veri toplama ve Cumhurbaşkanlığı K8s altyapılarında edindiği derin tecrübeyi Bayburt’a taşıyor.',
    whyChooseUs: [
      { title: 'Gerçek Mühendislik Disiplini', description: 'Gelişigüzel değil, test odaklı ve modüler yazılım mimarisi.' },
      { title: 'Yüksek Performans & Güvenlik', description: 'Siber güvenlik ve KVKK uyumlu veritabanı tasarımı.' },
    ],
    featuredAppIds: ['teleflow-prompter', 'virelon-wifi', 'toplualarm'],
    processSteps: [
      { step: '01', title: 'Gereksinim Analizi', desc: 'Hedeflerin matematiksel modellenmesi.' },
      { step: '02', title: 'Mimari Tasarım', desc: 'Ölçeklenebilir bulut ve veritabanı şeması.' },
    ],
    faqs: [
      { question: 'Mühendislik danışmanlığı veriyor musunuz?', answer: 'Evet, mevcut yazılım sistemlerinizin kod incelemesi, optimizasyonu ve modernizasyonunda danışmanlık sağlıyorum.' },
    ],
  },

  'bayburt-mobil-uygulama': {
    slug: 'bayburt-mobil-uygulama',
    title: 'Bayburt Mobil Uygulama Geliştirme (iOS & Android) — Muhammet Atmaca',
    metaDescription: 'Bayburt mobil uygulama yaptırmak isteyenler için React Native ve Flutter ile App Store & Google Play onaylı profesyonel mobil yazılımlar.',
    keywords: ['Bayburt mobil uygulama', 'Bayburt iOS uygulama', 'Bayburt Android uygulama', 'Bayburt mobil yazılım', 'Bayburt uygulama geliştirici'],
    eyebrow: 'App Store & Google Play',
    heroHeading: 'Bayburt’ta Profesyonel',
    heroHighlight: 'Mobil Uygulama',
    heroSubheading: '50’den fazla canlı mobil uygulama tecrübesiyle mağaza onay garantili, akıcı ve yüksek puanlı mobil uygulamalar.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: '%100 Mağaza Onay Garantisi',
    targetAudience: 'Bayburt’taki işletmesini cep telefonlarına taşımak veya global bir mobil girişim başlatmak isteyenler.',
    introParagraph: 'Bayburt’ta işletmeniz için sipariş, randevu, sadakat kartı veya kurumsal takip mobil uygulamalarını tek kod tabanında (iOS ve Android) eşzamanlı geliştiriyoruz.',
    whyChooseUs: [
      { title: '50+ Yayında Uygulama', description: 'Store politikalarına ve Apple/Google yönergelerine tam hakimiyet.' },
      { title: 'Hızlı ve Akıcı Arayüz', description: '60 FPS akıcılıkta React Native performansı.' },
    ],
    featuredAppIds: ['teleflow-prompter', 'toplualarm', 'tick-shopping', 'virelon-wifi'],
    processSteps: [
      { step: '01', title: 'Ekran Çizimleri', desc: 'Figma ile mobil prototipleme.' },
      { step: '02', title: 'Kodlama', desc: 'iOS ve Android için derleme.' },
      { step: '03', title: 'Mağaza Yayını', desc: 'Apple ve Google onay süreçlerinin yönetimi.' },
    ],
    faqs: [
      { question: 'Uygulama App Store ve Google Play’e nasıl yükleniyor?', answer: 'Tüm mağaza hesap açılışları, ekran görüntüleri, gizlilik politikaları ve onay süreçlerini baştan sona biz yönetiyoruz.' },
    ],
  },

  'bayburt-web-tasarim': {
    slug: 'bayburt-web-tasarim',
    title: 'Bayburt Web Tasarım & Kurumsal Web Sitesi — Muhammet Atmaca',
    metaDescription: 'Bayburt web tasarım, kurumsal web sitesi, SEO uyumlu ve mobil uyumlu modern web çözümleri. Hızlı açılan, Google dostu web siteleri.',
    keywords: ['Bayburt web tasarım', 'Bayburt web sitesi', 'Bayburt internet sitesi', 'Bayburt web yazılım', 'Bayburt web ajansı'],
    eyebrow: 'Modern Web Tasarım & SEO',
    heroHeading: 'Bayburt İçin Hızlı ve Prestijli',
    heroHighlight: 'Kurumsal Web Sitesi',
    heroSubheading: 'Google aramalarında rakiplerinizin önüne geçiren, cep telefonlarına kusursuz uyumlu, yüksek hızlı kurumsal web siteleri.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'Google PageSpeed 95+',
    targetAudience: 'Bayburt’ta dijitalde prestij kazanmak ve Google’dan yeni müşteriler çekmek isteyen işletmeler.',
    introParagraph: 'Hazır hantal şablonlar değil; Next.js ve modern teknolojilerle sıfırdan kodlanan, Google’da yıldırım hızında açılan kurumsal web siteleri tasarlıyoruz.',
    whyChooseUs: [
      { title: 'Maksimum Hız ve SEO', description: 'Google arama motoru kriterlerine tam uyumlu teknik altyapı.' },
      { title: 'Kolay Yönetim Paneli', description: 'İçeriklerinizi, haberlerinizi ve ürünlerinizi tek tıkla güncelleyin.' },
    ],
    featuredAppIds: ['virelon-wifi', 'tick-shopping', 'kredi-hesaplayici'],
    processSteps: [
      { step: '01', title: 'Konsept Tasarım', desc: 'Markanıza özel arayüz tasarımı.' },
      { step: '02', title: 'SEO Uyumlu Kodlama', desc: 'Temiz, hafif ve hızlı web sitesi.' },
      { step: '03', title: 'Yayın ve Google Kaydı', desc: 'Search Console ve Analytics kurulumu.' },
    ],
    faqs: [
      { question: 'Sitem Google’da ilk sayfada çıkar mı?', answer: 'Evet, geliştirdiğimiz tüm siteler teknik SEO kurallarına, semantik HTML etiketlerine ve Google Core Web Vitals kriterlerine göre optimize edilir.' },
    ],
  },

  'bayburt-e-ticaret': {
    slug: 'bayburt-e-ticaret',
    title: 'Bayburt E-Ticaret Sitesi & Online Satış Sistemleri — Muhammet Atmaca',
    metaDescription: 'Bayburt e-ticaret sitesi kurmak isteyenler için Sanal POS, kargo entegrasyonu, pazaryeri (Trendyol, Hepsiburada) entegrasyonlu online satış siteleri.',
    keywords: ['Bayburt e-ticaret', 'Bayburt online satış', 'Bayburt sanal pos', 'Bayburt e-ticaret sitesi', 'Bayburt internetten satış'],
    eyebrow: 'E-Ticaret & Pazaryeri',
    heroHeading: 'Bayburt’tan Tüm Türkiye’ye',
    heroHighlight: 'E-Ticaret & Satış',
    heroSubheading: 'Bayburt balı, taşı, tarım ürünleri ve yerel ticaretinizi tüm Türkiye’ye ve dünyaya ulaştıracak profesyonel e-ticaret altyapısı.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'Sanal POS & Kargo Entegre',
    targetAudience: 'Ürünlerini internetten satarak cirosunu 10 katına çıkarmak isteyen Bayburtlu üreticiler ve tüccarlar.',
    introParagraph: 'İyzico, PayTR ve tüm bankaların Sanal POS entegrasyonlarını, Yurtiçi/Aras/PTT Kargo api entegrasyonlarını anahtar teslim kuruyoruz.',
    whyChooseUs: [
      { title: 'Sıfır Komisyonlu Altyapı', description: 'Yıllık fahiş komisyonlar ödemeden kendi bağımsız e-ticaret mağazanıza sahip olun.' },
      { title: 'Güvenli Ödeme Altyapısı', description: '3D Secure, SSL ve PCI-DSS standartlarında güvenli alışveriş.' },
    ],
    featuredAppIds: ['tick-shopping', 'kredi-hesaplayici', 'virelon-wifi'],
    processSteps: [
      { step: '01', title: 'Katalog Tasarımı', desc: 'Kategori ve ürün yapılandırması.' },
      { step: '02', title: 'Ödeme & Kargo Kurulumu', desc: 'Banka ve kargo API bağlantıları.' },
    ],
    faqs: [
      { question: 'Trendyol ve Hepsiburada entegrasyonu oluyor mu?', answer: 'Evet, e-ticaret sitenizdeki stok ve siparişleri pazaryerleriyle otomatik senkronize eden sistemler kuruyoruz.' },
    ],
  },

  'bayburt-otomasyon': {
    slug: 'bayburt-otomasyon',
    title: 'Bayburt Kurumsal Otomasyon & İş Takip Yazılımları — Muhammet Atmaca',
    metaDescription: 'Bayburt fabrikaları, atölyeleri ve şirketleri için özel iş takip, stok takip, sipariş ve muhasebe otomasyon yazılımları.',
    keywords: ['Bayburt otomasyon', 'Bayburt iş takip yazılımı', 'Bayburt stok takip', 'Bayburt ERP', 'Bayburt CRM'],
    eyebrow: 'Kurumsal Otomasyon & ERP',
    heroHeading: 'Bayburt Şirketleri İçin',
    heroHighlight: 'Özel İş Otomasyonu',
    heroSubheading: 'Hatasız stok, anlık personel takibi, sipariş yönetimi ve patron raporlama panelleriyle operasyonel maliyetleri düşürün.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'Operasyonel Verimlilik',
    targetAudience: 'İşlerini kağıt kalemden veya karmaşık Excel tablolarından kurtarıp tek tıkla yönetmek isteyen Bayburtlu işletmeler.',
    introParagraph: 'Her işletmenin işleyişi farklıdır. İşinize tam uyan, gereksiz karmaşıklıktan uzak, sade ve hızlı kurumsal otomasyonlar geliştiriyoruz.',
    whyChooseUs: [
      { title: 'İşinize Özel Tasarım', description: 'Standart paket programlara sıkışmayın, sürecinize tam uyan modüller.' },
      { title: 'Mobil ve Webden Erişim', description: 'İşletmenizi ofiste olmasanız bile cep telefonunuzdan canlı takip edin.' },
    ],
    featuredAppIds: ['virelon-wifi', 'kredi-hesaplayici', 'teleflow-prompter'],
    processSteps: [
      { step: '01', title: 'Süreç Analizi', desc: 'İş akışınızın yerinde incelenmesi.' },
      { step: '02', title: 'Yazılım Geliştirme', desc: 'Modüllerin test edilerek kurulması.' },
    ],
    faqs: [
      { question: 'Eski verilerimizi yeni sisteme aktarabilir miyiz?', answer: 'Evet, Excel veya eski veritabanlarındaki tüm müşteri ve stok geçmişinizi eksiksiz aktarıyoruz.' },
    ],
  },

  'bayburt-bilgisayar-tamiri': {
    slug: 'bayburt-bilgisayar-tamiri',
    title: 'Bayburt Bilgisayar Servisi & Donanım Danışmanlığı — Muhammet Atmaca',
    metaDescription: 'Bayburt bilgisayar servisi, donanım optimizasyonu, kurumsal sunucu kurulumu ve işletmeler için bilişim altyapı danışmanlığı.',
    keywords: ['Bayburt bilgisayar tamiri', 'Bayburt bilgisayar servisi', 'Bayburt bilgisayar format', 'Bayburt donanım', 'Bayburt laptop tamir'],
    eyebrow: 'Bilgisayar Servisi & Altyapı',
    heroHeading: 'Bayburt’ta Güvenilir',
    heroHighlight: 'Bilgisayar & Sistem Servisi',
    heroSubheading: 'Kurumsal ofis bilgisayarları, sunucular ve veri güvenliği için profesyonel mühendislik seviyesinde teknik destek.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'Mühendislik Güvencesi',
    targetAudience: 'Ofis ve işletmelerindeki bilgisayar aksaklıklarını kalıcı olarak çözmek isteyen işletmeler.',
    introParagraph: 'Bilgisayar mühendisliği vizyonuyla; sıradan tamir anlayışının ötesinde, veri kaybı riski olmadan sistemlerinizin performansını maksimuma çıkarıyoruz.',
    whyChooseUs: [
      { title: 'Veri Güvenliği Önceliği', description: 'Biçimlendirme öncesi tam yedekleme ve veri kaybı önleme.' },
      { title: 'Hızlı Çözüm', description: 'İşinizin aksamaması için aynı gün müdahale.' },
    ],
    featuredAppIds: ['virelon-wifi', 'kredi-hesaplayici'],
    processSteps: [
      { step: '01', title: 'Arıza Tespiti', desc: 'Hassas donanım ve yazılım testi.' },
      { step: '02', title: 'Çözüm & Teslim', desc: 'Stabil ve hızlandırılmış sistem teslimi.' },
    ],
    faqs: [
      { question: 'Şirketler için yerinde servisiniz var mı?', answer: 'Evet, Bayburt merkez ve ilçelerindeki şirketlere yerinde teknik müdahale hizmeti sunuyoruz.' },
    ],
  },

  'bayburt-yazilim-kursu': {
    slug: 'bayburt-yazilim-kursu',
    title: 'Bayburt Yazılım Kursu & Kodlama Eğitimi — Muhammet Atmaca',
    metaDescription: 'Bayburt’ta birebir ve grup yazılım eğitimi. Python, React Native, Web geliştirme ve algoritma eğitimleri ile sektöre hazır yazılımcılar.',
    keywords: ['Bayburt yazılım kursu', 'Bayburt kodlama eğitimi', 'Bayburt bilgisayar kursu', 'Bayburt Python kursu', 'Bayburt yazılım mentörlük'],
    eyebrow: 'Birebir Mentörlük & Eğitim',
    heroHeading: 'Bayburt’ta Sıfırdan İleri Düzeye',
    heroHighlight: 'Yazılım & Kodlama Eğitimi',
    heroSubheading: 'Mağazalarda 50’den fazla uygulaması olan yazılım mühendisinden; teorik değil, gerçek projeler üreten yazılım mentörlüğü.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'Gerçek Projelerle Eğitim',
    targetAudience: 'Yazılıma başlamak isteyen öğrenciler, üniversiteliler ve kariyer değiştirmek isteyen profesyoneller.',
    introParagraph: 'Sıkıcı slaytlar değil; ilk günden itibaren kendi mobil uygulamasını ve web sitesini kodlayarak öğrenen yeni nesil yazılımcılar yetiştiriyoruz.',
    whyChooseUs: [
      { title: 'Birebir İlgi', description: 'Ezberci kurslar yerine kişiye özel öğrenme temposu.' },
      { title: 'GitHub ve Portfolyo Odaklı', description: 'Eğitim sonunda iş başvurularında fark yaratacak gerçek projeler.' },
    ],
    featuredAppIds: ['paragraf-soru-bankasi', 'kelime-ezber', 'toplualarm'],
    processSteps: [
      { step: '01', title: 'Algoritma & Temeller', desc: 'Mantıksal düşünme ve kodlama temelleri.' },
      { step: '02', title: 'Proje Geliştirme', desc: 'Canlı bir mobil/web uygulaması inşa etme.' },
    ],
    faqs: [
      { question: 'Hiç kodlama bilmeyenler katılabilir mi?', answer: 'Evet, müfredatımız sıfırdan başlayanlar için adım adım ve tamamen uygulamalı olarak kurgulanmıştır.' },
    ],
  },

  'bayburt-teknoloji': {
    slug: 'bayburt-teknoloji',
    title: 'Bayburt Teknoloji Çözümleri & Dijital Dönüşüm — Muhammet Atmaca',
    metaDescription: 'Bayburt’ta teknoloji danışmanlığı, bulut entegrasyonu, yapay zeka ve dijital dönüşüm projeleri.',
    keywords: ['Bayburt teknoloji', 'Bayburt dijital dönüşüm', 'Bayburt teknoloji firması', 'Bayburt inovasyon'],
    eyebrow: 'Teknoloji & Dijital Dönüşüm',
    heroHeading: 'Bayburt’ta Geleceğin',
    heroHighlight: 'Teknoloji Çözümleri',
    heroSubheading: 'İşletmenizi modern çağın dijital hızına ulaştıran ileri teknoloji altyapıları ve bulut sistemleri.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'İleri Teknoloji & İnovasyon',
    targetAudience: 'Geleceğe yatırım yaparak rakiplerini geride bırakmak isteyen Bayburt şirketleri.',
    introParagraph: 'Savunma sanayiinde kullanılan modern teknolojileri Bayburt iş dünyasının hizmetine sunuyoruz.',
    whyChooseUs: [
      { title: 'Yüksek İnovasyon', description: 'En güncel yapay zeka ve bulut teknolojilerini uygulama kabiliyeti.' },
      { title: 'Stratejik Planlama', description: 'Gereksiz teknoloji harcamalarını engelleyen verimli çözümler.' },
    ],
    featuredAppIds: ['teleflow-prompter', 'virelon-wifi'],
    processSteps: [
      { step: '01', title: 'Teknoloji Denetimi', desc: 'Mevcut araçların verimlilik analizi.' },
      { step: '02', title: 'Dönüşüm Planı', desc: 'Adım adım dijitalleşme süreci.' },
    ],
    faqs: [
      { question: 'Dijital dönüşüm ne kadar sürer?', answer: 'İşletmenizin büyüklüğüne göre 2 ila 6 hafta arasında anahtar teslim geçiş tamamlanır.' },
    ],
  },

  'bayburt-yapay-zeka': {
    slug: 'bayburt-yapay-zeka',
    title: 'Bayburt Yapay Zeka & Makine Öğrenmesi — Muhammet Atmaca',
    metaDescription: 'Bayburt’ta yapay zeka çözümleri, LLM entegrasyonları, görüntü işleme ve veri analitiği sistemleri.',
    keywords: ['Bayburt yapay zeka', 'Bayburt makine öğrenmesi', 'Bayburt AI', 'Bayburt derin öğrenme', 'Bayburt veri analizi'],
    eyebrow: 'Yapay Zeka & Derin Öğrenme',
    heroHeading: 'Bayburt’ta Akıllı Sistemler &',
    heroHighlight: 'Yapay Zeka Çözümleri',
    heroSubheading: 'Akademik bildirilerle (UHUK İMECE) tescilli derin öğrenme tecrübesiyle kurumunuza özel yapay zeka modelleri.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'Akademik & Endüstriyel Yapay Zeka',
    targetAudience: 'Verisini akıllı kararlara dönüştürmek, otomatik sohbet botları veya görüntü tanıma kullanmak isteyen işletmeler.',
    introParagraph: 'Bayburt’ta işletmenizin müşteri hizmetlerini otomatikleştiren yapay zeka asistanları ve satış tahminleme algoritmaları kuruyoruz.',
    whyChooseUs: [
      { title: 'Bilimsel Uzmanlık', description: 'Uzay yörüngeleri ve uydu sistemleri üzerine yayımlanmış akademik yapay zeka bildirileri.' },
      { title: 'Pratik Uygulanabilirlik', description: 'Laboratuvarda kalan değil, işletmenize anında ciro kazandıran AI çözümleri.' },
    ],
    featuredAppIds: ['teleflow-prompter', 'kelime-ezber'],
    processSteps: [
      { step: '01', title: 'Veri Toplama', desc: 'Şirket verilerinin modellenmesi.' },
      { step: '02', title: 'Model Eğitimi', desc: 'İhtiyaca özel AI algoritması.' },
    ],
    faqs: [
      { question: 'Yapay zeka bize nasıl para kazandırır?', answer: 'Müşteri yanıt sürelerini sıfıra indirir, stok kayıplarını öngörür ve personel verimliliğini en az %40 artırır.' },
    ],
  },

  'bayburt-merkez-yazilim': {
    slug: 'bayburt-merkez-yazilim',
    title: 'Bayburt Merkez Yazılım & Bilişim Ofisi — Muhammet Atmaca',
    metaDescription: 'Bayburt Merkez ilçesinde yazılım, web ve mobil uygulama projeleriniz için yerinde mühendislik desteği.',
    keywords: ['Bayburt Merkez yazılım', 'Bayburt Merkez bilgisayar', 'Bayburt Merkez bilişim', 'Cumhuriyet Caddesi yazılım'],
    eyebrow: 'Bayburt Merkez Lokasyonu',
    heroHeading: 'Bayburt Merkezde Doğrudan',
    heroHighlight: 'Yazılım & Bilişim Çözümleri',
    heroSubheading: 'Cumhuriyet Caddesi, Çoruh kıyısı ve tüm Bayburt Merkez esnafı ve kurumları için hızlı, yerinde yazılım geliştirme.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'Bayburt Merkez',
    targetAudience: 'Bayburt Merkezde faaliyet gösterip doğrudan yüz yüze çalışmak isteyen yerel kurum ve esnaflar.',
    introParagraph: 'Bayburt Merkez sınırları içindeki tüm işletmelere aynı gün keşif ve yüz yüze proje danışmanlığı sağlıyoruz.',
    whyChooseUs: [
      { title: 'Bayburtlu Mühendis Güvencesi', description: 'Bölgeyi, insanını ve ticaret dinamiklerini yakından tanıyan yerel bağ.' },
      { title: 'Anında Görüşme', description: 'Telefonla veya çay eşliğinde projenizi konuşma imkanı.' },
    ],
    featuredAppIds: ['virelon-wifi', 'teleflow-prompter', 'tick-shopping'],
    processSteps: [
      { step: '01', title: 'Yerinde Ziyaret', desc: 'Merkezdeki işletmenizde görüşme.' },
      { step: '02', title: 'Hızlı Teslimat', desc: 'Gecikmesiz canlıya alma.' },
    ],
    faqs: [
      { question: 'Merkezde yerimize gelebilir misiniz?', answer: 'Evet, aradığınız gün işletmenizi ziyaret edip ihtiyaçlarınızı yerinde analiz edebiliriz.' },
    ],
  },

  'bayburt-demirozu-yazilim': {
    slug: 'bayburt-demirozu-yazilim',
    title: 'Demirözü Yazılım & Bilgisayar Hizmetleri — Bayburt (Muhammet Atmaca)',
    metaDescription: 'Bayburt Demirözü ilçesinde tarım, hayvancılık, sulama otomasyonu ve yerel işletmeler için yazılım ve web çözümleri.',
    keywords: ['Demirözü yazılım', 'Demirözü bilgisayar', 'Bayburt Demirözü bilişim', 'Demirözü web sitesi'],
    eyebrow: 'Demirözü / Bayburt',
    heroHeading: 'Demirözü İçin Modern',
    heroHighlight: 'Yazılım & Web Çözümleri',
    heroSubheading: 'Demirözü Barajı çevresi, tarımsal işletmeler ve yerel esnaflar için dijital otomasyon ve web altyapıları.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'Demirözü & Çevre Köyler',
    targetAudience: 'Demirözü’nde işini dijitalleştirmek, e-ticarete açılmak veya otomasyon kurmak isteyenler.',
    introParagraph: 'Demirözü ilçemizdeki tarım ve ticaret işletmelerine modern yazılım, stok takip ve kurumsal web siteleri kazandırıyoruz.',
    whyChooseUs: [
      { title: 'Yerel Destek', description: 'Demirözü’ne özel yerinde teknik destek.' },
      { title: 'Kolay Kullanım', description: 'Herkesin rahatça kullanabileceği sade arayüzler.' },
    ],
    featuredAppIds: ['tick-shopping', 'virelon-wifi'],
    processSteps: [
      { step: '01', title: 'İhtiyaç Belirleme', desc: 'Demirözü işletmelerine özel analiz.' },
      { step: '02', title: 'Kurulum & Eğitim', desc: 'Yazılımın kurulup öğretilmesi.' },
    ],
    faqs: [
      { question: 'Demirözü’ne servisiniz var mı?', answer: 'Evet, Demirözü ilçemizdeki tüm işletmelere yerinde destek veriyoruz.' },
    ],
  },

  'bayburt-aydintepe-yazilim': {
    slug: 'bayburt-aydintepe-yazilim',
    title: 'Aydıntepe Yazılım & Web Tasarım — Bayburt (Muhammet Atmaca)',
    metaDescription: 'Bayburt Aydıntepe ilçesi için web tasarım, yazılım geliştirme, turizm ve yerel esnaf bilişim çözümleri.',
    keywords: ['Aydıntepe yazılım', 'Aydıntepe web tasarım', 'Bayburt Aydıntepe bilgisayar', 'Aydıntepe bilişim'],
    eyebrow: 'Aydıntepe / Bayburt',
    heroHeading: 'Aydıntepe İçin Profesyonel',
    heroHighlight: 'Yazılım & Web Hizmetleri',
    heroSubheading: 'Aydıntepe Yeraltı Şehri turizmi, pansiyonlar ve ilçe esnafı için modern web siteleri ve yazılımlar.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'Aydıntepe Bölgesi',
    targetAudience: 'Aydıntepe ilçesindeki işletmeler ve turizm tesisleri.',
    introParagraph: 'Aydıntepe’nin tarihi ve ticari potansiyelini dijital dünyaya taşıyan modern web siteleri ve otomasyon yazılımları geliştiriyoruz.',
    whyChooseUs: [
      { title: 'Turizm ve Tanıtım Odaklı', description: 'Aydıntepe’nin değerlerini öne çıkaran çok dilli web altyapıları.' },
      { title: 'Hızlı Kurulum', description: 'Kısa sürede yayına giren anahtar teslim projeler.' },
    ],
    featuredAppIds: ['virelon-wifi', 'tick-shopping'],
    processSteps: [
      { step: '01', title: 'Görüşme', desc: 'Proje hedeflerinin belirlenmesi.' },
      { step: '02', title: 'Yayın', desc: 'Canlıya alma ve teslim.' },
    ],
    faqs: [
      { question: 'Aydıntepe projelerinde destek nasıl sağlanıyor?', answer: 'Hem uzaktan anlık bağlantıyla hem de periyodik yerinde ziyaretlerle destek sunuyoruz.' },
    ],
  },

  'bayburt-universitesi-yazilim': {
    slug: 'bayburt-universitesi-yazilim',
    title: 'Bayburt Üniversitesi Yazılım & Proje Geliştirme — Muhammet Atmaca',
    metaDescription: 'Bayburt Üniversitesi öğrencileri, akademisyenleri ve teknopark girişimcileri için yazılım danışmanlığı, TÜBİTAK ve TEKNOFEST proje mentörlüğü.',
    keywords: ['Bayburt Üniversitesi yazılım', 'Bayburt Üniversitesi bilgisayar mühendisliği', 'Bayburt teknokent yazılım', 'Bayburt TEKNOFEST', 'Bayburt TÜBİTAK proje'],
    eyebrow: 'Akademi & Teknoloji',
    heroHeading: 'Bayburt Üniversitesi İçin',
    heroHighlight: 'Yazılım & Proje Mentörlüğü',
    heroSubheading: 'Bâberdî ve Dede Korkut yerleşkelerindeki araştırmacılar ve girişimciler için savunma sanayii ve TÜBİTAK 2209 düzeyinde mühendislik.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'TÜBİTAK & TEKNOFEST Danışmanlığı',
    targetAudience: 'Akademisyenler, yüksek lisans/doktora öğrencileri ve girişimci gençler.',
    introParagraph: 'Bayburt Üniversitesi bünyesindeki bilimsel projelere, mobil uygulamalara ve yapay zeka araştırmalarına profesyonel kodlama ve mimari desteği veriyoruz.',
    whyChooseUs: [
      { title: 'Akademik Yayın Geçmişi', description: 'UHUK ve uluslararası konferanslarda bildirisi olan mühendis vizyonu.' },
      { title: 'Donanım & Yazılım Entegrasyonu', description: 'Mikrodenetleyici, IoT ve bulut veritabanlarını birleştiren uzmanlık.' },
    ],
    featuredAppIds: ['teleflow-prompter', 'toplualarm', 'virelon-wifi'],
    processSteps: [
      { step: '01', title: 'Metodoloji Tasarımı', desc: 'Akademik veya girişim odaklı kurgu.' },
      { step: '02', title: 'Prototip & Kodlama', desc: 'Çalışan sistemin üretilmesi.' },
    ],
    faqs: [
      { question: 'Öğrenci projelerine destek veriyor musunuz?', answer: 'Evet; mezuniyet projeleri, TEKNOFEST yarışmaları ve TÜBİTAK burslu projelerinde kodlama mentörlüğü sağlıyoruz.' },
    ],
  },

  'bayburt-organize-sanayi-yazilim': {
    slug: 'bayburt-organize-sanayi-yazilim',
    title: 'Bayburt OSB Yazılım & Endüstriyel Otomasyon — Muhammet Atmaca',
    metaDescription: 'Bayburt Organize Sanayi Bölgesi (OSB) fabrikaları için üretim takip, barkod, depo, sevkiyat ve kurumsal ERP yazılımları.',
    keywords: ['Bayburt OSB yazılım', 'Bayburt organize sanayi otomasyon', 'Bayburt fabrika yazılımı', 'Bayburt üretim takip'],
    eyebrow: 'Endüstriyel & Fabrika Otomasyonu',
    heroHeading: 'Bayburt OSB İçin Kesintisiz',
    heroHighlight: 'Üretim & Takip Yazılımları',
    heroSubheading: 'Bayburt Organize Sanayi Bölgesindeki üretim tesislerinin fire oranlarını düşüren, barkodlu izlenebilirlik sağlayan özel yazılımlar.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'Sanayi & Üretim Entegrasyonu',
    targetAudience: 'Bayburt OSB’de faaliyet gösteren fabrika sahipleri, üretim müdürleri ve işletmeciler.',
    introParagraph: 'Hammadde girişinden sevkiyat aşamasına kadar tüm üretim bandınızı dijitalleştiren dayanıklı ve güvenilir endüstriyel yazılımlar kuruyoruz.',
    whyChooseUs: [
      { title: 'Sıfır Duruş Prensibi', description: 'Endüstriyel hatların 7/24 kesintisiz çalışmasına uygun yüksek dayanıklılık.' },
      { title: 'Barkod & El Terminali Uyumu', description: 'Depo personeli için hatasız, hızlı barkodlu sayım ve kontrol.' },
    ],
    featuredAppIds: ['virelon-wifi', 'kredi-hesaplayici'],
    processSteps: [
      { step: '01', title: 'Üretim Hattı Keşfi', desc: 'Fabrikada birebir işleyiş analizi.' },
      { step: '02', title: 'Sistem Entegrasyonu', desc: 'Yazılım ve donanım kurulumu.' },
    ],
    faqs: [
      { question: 'Mevcut makinelerimizle iletişim kurabilir mi?', answer: 'Evet, PLC ve sensör verilerini toplayarak merkezi ekranda görselleştirebiliyoruz.' },
    ],
  },

  'bayburt-muhasebe-yazilimi': {
    slug: 'bayburt-muhasebe-yazilimi',
    title: 'Bayburt Ön Muhasebe & Cari Takip Yazılımı — Muhammet Atmaca',
    metaDescription: 'Bayburt esnafı ve KOBİ’leri için kullanımı son derece kolay ön muhasebe, fatura kesme, cari ve kasa takip programı.',
    keywords: ['Bayburt muhasebe yazılımı', 'Bayburt ön muhasebe', 'Bayburt cari takip programı', 'Bayburt veresiye defteri programı'],
    eyebrow: 'KOBİ & Esnaf Yazılımları',
    heroHeading: 'Bayburt Esnafına Özel Kolay',
    heroHighlight: 'Ön Muhasebe & Kasa Programı',
    heroSubheading: 'Karmaşık terimler olmadan, 10 dakikada öğrenilen, cep telefonundan da çalışan pratik muhasebe yazılımı.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'Esnafa Özel Pratik Arayüz',
    targetAudience: 'Müşteri borç-alacaklarını, stoklarını ve günlük cirolarını güvenle takip etmek isteyen tüm esnaflar.',
    introParagraph: 'Veresiye defterlerindeki karışıklıklara son verin. Bayburt esnafının hızına hız katan bulut tabanlı ön muhasebe çözümlerimiz hizmetinizde.',
    whyChooseUs: [
      { title: 'Telefondan Takip', description: 'Dükkanda değilken bile kasanızı ve yapılan satışları anında görün.' },
      { title: 'Otomatik Yedekleme', description: 'Bilgisayarınız bozulsa bile verileriniz asla kaybolmaz.' },
    ],
    featuredAppIds: ['kredi-hesaplayici', 'tick-shopping'],
    processSteps: [
      { step: '01', title: 'Hızlı Kurulum', desc: 'Aynı gün içinde kullanıma hazır.' },
      { step: '02', title: 'Birebir Eğitim', desc: 'Tüm çalışanlara yerinde öğretim.' },
    ],
    faqs: [
      { question: 'İnternet kesilirse ne olur?', answer: 'Yazılımlarımız çevrimdışı (offline) çalışma desteğine sahiptir; internet gelince otomatik senkronize olur.' },
    ],
  },

  'bayburt-restoran-otomasyonu': {
    slug: 'bayburt-restoran-otomasyonu',
    title: 'Bayburt Restoran & Kafe Adisyon Otomasyonu — Muhammet Atmaca',
    metaDescription: 'Bayburt restoranları, kafeleri ve lokantaları için dokunmatik masa sipariş, mutfak ekranı, adisyon ve QR menü yazılımları.',
    keywords: ['Bayburt restoran otomasyonu', 'Bayburt adisyon programı', 'Bayburt kafe otomasyonu', 'Bayburt QR menü', 'Bayburt masa sipariş'],
    eyebrow: 'Gastronomi & Hizmet Sektörü',
    heroHeading: 'Bayburt Restoran & Kafeleri İçin',
    heroHighlight: 'Hızlı Adisyon & Masa Takibi',
    heroSubheading: 'Garson hatalarını sıfıra indiren, mutfakla anlık haberleşen ve patrona canlı ciro gösteren modern adisyon sistemi.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'Dokunmatik & QR Menülü',
    targetAudience: 'Bayburt merkez ve ilçelerindeki tüm lokanta, kafe, fırın ve restoran işletmecileri.',
    introParagraph: 'Siparişlerin gecikmesini önleyin, kaçakları engelleyin. Dokunmatik ekranlar ve cep telefonlarıyla uyumlu yeni nesil adisyon sistemiyle işletmenizi büyütün.',
    whyChooseUs: [
      { title: 'Mutfak Ekranı Entegrasyonu', description: 'Garsonun aldığı sipariş saniyesinde mutfaktaki ekrana ve yazıcıya düşer.' },
      { title: 'QR Menü ile Temassız Sipariş', description: 'Müşterileriniz masadaki QR kodu okutarak menüyü görsün ve sipariş versin.' },
    ],
    featuredAppIds: ['tick-shopping', 'virelon-wifi'],
    processSteps: [
      { step: '01', title: 'Masa Düzeni Kurulumu', desc: 'Mekanınıza özel masa planının çıkarılması.' },
      { step: '02', title: 'Eğitim & Canlıya Geçiş', desc: 'Garson ve mutfak personelinin eğitimi.' },
    ],
    faqs: [
      { question: 'Aylık kira ödemek zorunda mıyım?', answer: 'Hayır, tek seferlik anahtar teslim lisans seçeneğimizle sürekli kira ödemeden sistemi ömür boyu kullanabilirsiniz.' },
    ],
  },

  'bayburt-emlak-web-sitesi': {
    slug: 'bayburt-emlak-web-sitesi',
    title: 'Bayburt Emlak Web Sitesi & İlan Portalı — Muhammet Atmaca',
    metaDescription: 'Bayburt emlakçıları ve gayrimenkul ofisleri için haritalı satılık-kiralık ilan sitesi, Sahibinden entegrasyonu ve mobil uyumlu emlak yazılımı.',
    keywords: ['Bayburt emlak web sitesi', 'Bayburt gayrimenkul sitesi', 'Bayburt satılık daire sitesi', 'Bayburt emlakçı yazılımı'],
    eyebrow: 'Emlak & Gayrimenkul',
    heroHeading: 'Bayburt Emlak Ofislerine Özel',
    heroHighlight: 'Prestijli İlan & Portföy Sitesi',
    heroSubheading: 'Daire, arsa ve dükkan ilanlarınızı fotoğraflı ve haritalı sergileyin, komisyonlarınızı ve portföyünüzü tek panelden yönetin.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'Harita & Fotoğraf Galerili',
    targetAudience: 'Bayburt’ta gayrimenkul danışmanlığı yapan ve kurumsal kimliğini internete taşımak isteyen emlak ofisleri.',
    introParagraph: 'Sosyal medya paylaşımlarıyla sınırlı kalmayın; kurumsal alan adınızla müşterilerinize güven veren, Google’da arandığında çıkan profesyonel bir emlak portalına sahip olun.',
    whyChooseUs: [
      { title: 'Google’da Çıkan İlanlar', description: 'Her eklediğiniz ilan Google arama sonuçlarına anında girer.' },
      { title: 'WhatsApp’tan Tek Tıkla Mesaj', description: 'İlanı beğenen müşteri tek tıkla doğrudan ilan danışmanına bağlanır.' },
    ],
    featuredAppIds: ['tick-shopping', 'kredi-hesaplayici'],
    processSteps: [
      { step: '01', title: 'Tasarım Onayı', desc: 'Kurumsal logonuz ve renklerinizle şık arayüz.' },
      { step: '02', title: 'İlan Yükleme & Teslim', desc: 'İlk ilanların girilmesi ve sistem teslimi.' },
    ],
    faqs: [
      { question: 'İlanları cep telefonumdan ekleyebilir miyim?', answer: 'Evet, gelişmiş yönetim panelimiz cep telefonuyla tamamen uyumludur; yerindeyken fotoğraf çekip anında ilan yayınlayabilirsiniz.' },
    ],
  },

  'bayburt-kamu-yazilimi': {
    slug: 'bayburt-kamu-yazilimi',
    title: 'Bayburt Kamu & Kurumsal Yazılım Hizmetleri — Muhammet Atmaca',
    metaDescription: 'Bayburt ilindeki kamu kurumları, belediyeler ve özel idareler için KVKK uyumlu, yüksek güvenlikli yerel yazılım ve portal çözümleri.',
    keywords: ['Bayburt kamu yazılımı', 'Bayburt belediye yazılım', 'Bayburt özel idare yazılım', 'Bayburt kurumsal portal'],
    eyebrow: 'Kamu & Devlet Kurumları',
    heroHeading: 'Bayburt Kamu Kurumları İçin',
    heroHighlight: 'Güvenli & KVKK Uyumlu Yazılımlar',
    heroSubheading: 'T.C. Kamu ve Savunma Sanayii projelerinde test edilmiş bilgi güvenliği standartlarıyla kamuya özel yazılım mühendisliği.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'T.C. Kamu & Savunma Referanslı',
    targetAudience: 'Belediyeler, kaymakamlıklar, il müdürlükleri ve kamu iştirakleri.',
    introParagraph: 'T.C. Cumhurbaşkanlığı Dijital Dönüşüm Ofisi ve Savunma Sanayii projelerinde yer almış bir mühendis olarak kamu bilişim standartlarına tam hakimiyet sunuyoruz.',
    whyChooseUs: [
      { title: 'Yüksek Veri Güvenliği', description: 'Kurum içi (on-premise) sunucularda çalışan, dışarı sızdırmaz güvenli mimari.' },
      { title: 'KVKK ve Mevzuat Uyumu', description: 'Kamu bilgi sistemleri rehberine %100 uyumlu kod yapısı.' },
    ],
    featuredAppIds: ['virelon-wifi', 'teleflow-prompter'],
    processSteps: [
      { step: '01', title: 'Mevzuat & Güvenlik Analizi', desc: 'Kamu gereksinimlerinin belirlenmesi.' },
      { step: '02', title: 'Geliştirme & Denetim', desc: 'Sızma testlerinden geçmiş güvenli teslimat.' },
    ],
    faqs: [
      { question: 'Yazılım yerel sunucumuzda barındırılabilir mi?', answer: 'Evet, tüm sistemler kurumunuzun kendi bünyesindeki fiziksel sunuculara kurulabilir.' },
    ],
  },

  'bayburt-ozel-yazilim': {
    slug: 'bayburt-ozel-yazilim',
    title: 'Bayburt Özel Yazılım Geliştirme — Muhammet Atmaca (VirelonSoft)',
    metaDescription: 'Bayburt’ta hazır paket programların yetersiz kaldığı durumlarda işinize %100 uyarlanan terzi usulü özel yazılım geliştirme.',
    keywords: ['Bayburt özel yazılım', 'Bayburt butik yazılım', 'Bayburt terzi usulü yazılım', 'Bayburt yazılım projesi'],
    eyebrow: 'Butik & Özel Yazılım',
    heroHeading: 'Bayburt’ta İşinize Birebir Uyan',
    heroHighlight: 'Terzi Usulü Özel Yazılım',
    heroSubheading: 'Kalıplara girmeyin. Şirketinizin tam ihtiyacına göre baştan sona sıfırdan kodlanan benzersiz yazılım çözümleri.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: '%100 İhtiyaca Özel',
    targetAudience: 'Piyasadaki paket yazılımları kendi iş akışına uyduramayan vizyoner işletmeler.',
    introParagraph: 'Hiçbir fazlalığı olmayan, tam istediğiniz gibi çalışan, şirketinize özel algoritma ve raporlama sistemleri inşa ediyoruz.',
    whyChooseUs: [
      { title: 'Sınırsız Özelleştirme', description: 'İstediğiniz an yeni modül ve özellik ekleme özgürlüğü.' },
      { title: 'Telif & Mülkiyet Sizin', description: 'Geliştirilen yazılımın tüm fikri mülkiyeti ve kaynak kodları size aittir.' },
    ],
    featuredAppIds: ['teleflow-prompter', 'virelon-wifi', 'toplualarm'],
    processSteps: [
      { step: '01', title: 'Süreç Tasarımı', desc: 'Şirketinizin mantığının kod diline dökülmesi.' },
      { step: '02', title: 'Adım Adım Geliştirme', desc: 'Geri bildirimlerle mükemmelleştirme.' },
    ],
    faqs: [
      { question: 'İleride yeni özellikler ekletebilir miyiz?', answer: 'Evet, modüler mimarimiz sayesinde işiniz büyüdükçe yazılımınız da kolayca genişletilebilir.' },
    ],
  },

  'bayburt-seo-ajansi': {
    slug: 'bayburt-seo-ajansi',
    title: 'Bayburt SEO & Google İlk Sıra Danışmanlığı — Muhammet Atmaca',
    metaDescription: 'Bayburt SEO ajansı ve arama motoru optimizasyonu. Web sitenizi Google aramalarında ilk sıraya taşıyan teknik SEO ve yerel harita optimizasyonu.',
    keywords: ['Bayburt SEO', 'Bayburt SEO ajansı', 'Bayburt Google ilk sıra', 'Bayburt web sitesi yükseltme', 'Bayburt harita kaydı'],
    eyebrow: 'Google İlk Sıra & Yerel SEO',
    heroHeading: 'Bayburt’ta Google Aramalarında',
    heroHighlight: 'Zirveye Oturun',
    heroSubheading: 'Rakipleriniz değil siz tıklanın. Google Arama ve Google Haritalar’da Bayburt merkezli aramalarda 1. sırayı garantileyen teknik SEO.',
    cityOrRegion: 'Bayburt',
    category: 'local',
    badge: 'Garantili Teknik SEO',
    targetAudience: 'Google’da arama yapıldığında müşterilerin doğrudan kendisine ulaşmasını isteyen işletmeler.',
    introParagraph: 'Boş vaatler değil; semantik HTML, Schema microdata ve programatik SEO teknikleriyle sitenizi Google’ın en sevdiği yapıya dönüştürüyoruz.',
    whyChooseUs: [
      { title: 'Google Standartlarında Kod', description: 'Sitenizin arama motorları tarafından milisaniyeler içinde taranması.' },
      { title: 'Google Haritalar 3-Pack', description: 'Telefon aramalarını ve dükkan ziyaretlerini artıran yerel optimizasyon.' },
    ],
    featuredAppIds: ['virelon-wifi', 'teleflow-prompter'],
    processSteps: [
      { step: '01', title: 'Rakip & Kelime Analizi', desc: 'En çok aranan kelimelerin bulunması.' },
      { step: '02', title: 'Teknik Optimizasyon', desc: 'Kod ve içerik düzeyinde tam uyum.' },
    ],
    faqs: [
      { question: 'Google’da çıkmak ne kadar sürer?', answer: 'Teknik SEO altyapımızla yapılan iyileştirmelerin sonuçları 2 ila 4 hafta içinde net olarak yükselişle görülür.' },
    ],
  },
};

// =========================================================================
// 2. TEKNOLOJİ & MÜHENDİSLİK ÖZEL SAYFALARI (14 SAYFA)
// =========================================================================
export const TECH_SPECIALIZED_PAGES: Record<string, SeoLandingPageData> = {
  'mobil-uygulama-gelistirme': {
    slug: 'mobil-uygulama-gelistirme',
    title: 'Mobil Uygulama Geliştirme Hizmetleri (React Native & iOS & Android) — Muhammet Atmaca',
    metaDescription: 'React Native ve Native çözümlerle App Store ve Google Play için yüksek performanslı mobil uygulamalar. 50+ canlı uygulama referansı.',
    keywords: ['Mobil uygulama geliştirme', 'React Native geliştirici', 'iOS uygulama yapımı', 'Android uygulama ajansı', 'Freelance mobil geliştirici'],
    eyebrow: 'Mobil Mühendislik & Mimari',
    heroHeading: 'Uçtan Uca Profesyonel',
    heroHighlight: 'Mobil Uygulama Geliştirme',
    heroSubheading: 'Milyonlarca kullanıcıya hitap eden, 60 FPS performansında, mağaza kurallarına %100 uyumlu birinci sınıf mobil uygulamalar.',
    category: 'service',
    badge: '50+ Canlı App Store & Play Store Projesi',
    targetAudience: 'Uluslararası standartlarda mobil ürün geliştirmek isteyen girişimciler ve kurumsal markalar.',
    introParagraph: 'Yalnızca arayüz çizmiyoruz; çevrimdışı önbellekleme, WebSocket, push bildirimler, in-app purchase (RevenueCat) ve derin analitik altyapılarını eksiksiz kuruyoruz.',
    whyChooseUs: [
      { title: '50+ Canlı Referans', description: 'Canlıda yüz binlerce indirmeye sahip çalışan kanıtlar.' },
      { title: 'Store Onay Garantisi', description: 'Apple ve Google redlerine karşı tam danışmanlık ve revizyon.' },
    ],
    featuredAppIds: ['teleflow-prompter', 'toplualarm', 'tick-shopping', 'virelon-wifi'],
    processSteps: [
      { step: '01', title: 'Mimari', desc: 'State yönetimi ve API planlaması.' },
      { step: '02', title: 'Kodlama', desc: 'React Native & TypeScript.' },
    ],
    faqs: [
      { question: 'Hangi teknolojiyi kullanıyorsunuz?', answer: 'Ana uzmanlığımız React Native, Expo, TypeScript ve yerel modüllerdir (Swift/Kotlin entegrasyonu).' },
    ],
  },

  'react-native-gelistirici': {
    slug: 'react-native-gelistirici',
    title: 'React Native Geliştirici & Mobil Yazılım Mühendisi — Muhammet Atmaca',
    metaDescription: 'React Native mühendisi Muhammet Atmaca. iOS ve Android için cross-platform, yüksek performanslı ve modüler mobil uygulama geliştirme.',
    keywords: ['React Native geliştirici', 'React Native uzmanı', 'Cross-platform mobil geliştirici', 'Mobil uygulama mühendisi'],
    eyebrow: 'Mobil Yazılım Mühendisi',
    heroHeading: 'İleri Seviyede',
    heroHighlight: 'React Native Uzmanlığı',
    heroSubheading: 'Tek kod tabanından hem iOS hem Android için native hızında çalışan, hatasız ve ölçeklenebilir mobil mimariler.',
    category: 'technology',
    badge: 'React Native Mühendisi',
    targetAudience: 'Ekibine yetkin mobil mühendis arayan start-up’lar ve büyük ölçekli şirketler.',
    introParagraph: '7 yıllık deneyimle; Expo Config Plugins, Native Modules, JSI, Reanimated 3 ve offline-first mimarilerinde derinlemesine uzmanlık.',
    whyChooseUs: [
      { title: 'İleri Seviye Optimizasyon', description: 'Bellek sızıntılarını önleyen, batarya dostu mimari.' },
      { title: 'Temiz Kod Prensipleri', description: 'SOLID, Clean Architecture ve eksiksiz TypeScript tiplendirmesi.' },
    ],
    featuredAppIds: ['teleflow-prompter', 'toplualarm', 'virelon-wifi'],
    processSteps: [
      { step: '01', title: 'Code Review & Mimari', desc: 'Mevcut yapının analizi ve sağlam temel.' },
      { step: '02', title: 'Sprint Teslimatları', desc: 'Haftalık düzenli PR ve sürümler.' },
    ],
    faqs: [
      { question: 'Uzaktan (Remote) çalışıyor musunuz?', answer: 'Evet, ulusal ve uluslararası ekiplerle tam zamanlı veya proje bazlı uzaktan çalışıyorum.' },
    ],
  },

  'yapay-zeka-muhendisligi': {
    slug: 'yapay-zeka-muhendisligi',
    title: 'Yapay Zeka & Derin Öğrenme Mühendisliği — Muhammet Atmaca',
    metaDescription: 'Derin öğrenme, yörünge kestirimi, LLM asistanları, PyTorch ve bilgisayarlı görü projeleri. UHUK bildirisi sahibi araştırmacı mühendis.',
    keywords: ['Yapay zeka mühendisliği', 'Derin öğrenme uzmanı', 'Makine öğrenmesi danışmanı', 'PyTorch', 'LLM entegrasyonu'],
    eyebrow: 'Araştırma & Geliştirme',
    heroHeading: 'Endüstriyel Düzeyde',
    heroHighlight: 'Yapay Zeka & Derin Öğrenme',
    heroSubheading: 'İMECE uydusu ve uzay yörünge kestirimlerinde kanıtlanmış matematiksel ve algoritmik yapay zeka mühendisliği.',
    category: 'technology',
    badge: 'UHUK Bildirisi & İMECE Uydusu',
    targetAudience: 'İleri düzey veri analitiği, tahminleme ve üretken yapay zeka ürünleri inşa etmek isteyen kuruluşlar.',
    introParagraph: 'Yapay zeka modellerini prototipten çıkarıp saniyeler içinde yanıt veren canlı API ve mobil uygulamalara dönüştürüyoruz.',
    whyChooseUs: [
      { title: 'Yüksek Matematiksel Derinlik', description: 'Sadece hazır kütüphaneleri çağıran değil, algoritmanın kalbine hakim yaklaşım.' },
      { title: 'Mobil Cihazda Çalışan AI', description: 'ONNX ve TensorFlow Lite ile internet olmadan cihaz üzerinde çalışan modeller.' },
    ],
    featuredAppIds: ['teleflow-prompter', 'kelime-ezber'],
    processSteps: [
      { step: '01', title: 'Veri Modelleme', desc: 'Öznitelik mühendisliği ve temizleme.' },
      { step: '02', title: 'Eğitim & Dağıtım', desc: 'Bulut ve uç cihaz optimizasyonu.' },
    ],
    faqs: [
      { question: 'Özel şirket verilerimizle AI eğitebilir miyiz?', answer: 'Evet; şirket içi dokümanlarınızla beslenen ve dışarıya veri sızdırmayan yerel LLM modelleri kurabiliyoruz.' },
    ],
  },

  'savunma-sanayii-yazilim': {
    slug: 'savunma-sanayii-yazilim',
    title: 'Savunma Sanayii & Kritik Sistemler Yazılım Danışmanlığı — Muhammet Atmaca',
    metaDescription: 'T.C. Savunma Sanayii Başkanlığı projeleri, uydu sistemleri ve askeri standartlarda güvenli yazılım geliştirme.',
    keywords: ['Savunma sanayii yazılım', 'Kritik sistemler mühendisliği', 'SSB projeleri', 'Askeri yazılım standartları'],
    eyebrow: 'Kritik Sistemler & Savunma',
    heroHeading: 'Maksimum Güvenlikli',
    heroHighlight: 'Savunma Sanayii Yazılımları',
    heroSubheading: 'Hata toleransı sıfır olan kritik görev sistemlerinde yüksek dayanıklılık ve sıkı güvenlik protokolleri.',
    category: 'technology',
    badge: 'T.C. Savunma Sanayii Deneyimi',
    targetAudience: 'Savunma sanayii yüklenicileri, havacılık ve uzay şirketleri.',
    introParagraph: 'SSB projeleri ve uydu veri toplama sistemlerinde edindiğimiz tecrübeyle en zorlu gereksinimleri karşılıyoruz.',
    whyChooseUs: [
      { title: 'Hatasız Kod Standartları', description: 'Kritik sistemler için sıfır toleranslı test ve doğrulama süreçleri.' },
      { title: 'Milli & Yerli Vizyon', description: 'Dışa bağımlılığı azaltan yerli yazılım mimarileri.' },
    ],
    featuredAppIds: ['virelon-wifi', 'teleflow-prompter'],
    processSteps: [
      { step: '01', title: 'Sistem Gereksinimleri', desc: 'Askeri standartlarda analiz.' },
      { step: '02', title: 'Doğrulama & Test', desc: 'Kapsamlı simülasyon ve testler.' },
    ],
    faqs: [
      { question: 'Gizlilik sözleşmesi (NDA) imzalanıyor mu?', answer: 'Evet, tüm projelerimiz en katı gizlilik ve bilgi güvenliği protokolleri çerçevesinde yürütülür.' },
    ],
  },

  'kubernetes-devops-uzmani': {
    slug: 'kubernetes-devops-uzmani',
    title: 'Kubernetes & Bulut DevOps Danışmanlığı — Muhammet Atmaca',
    metaDescription: 'Cumhurbaşkanlığı K8s projeleri deneyimiyle mikroservis mimarileri, CI/CD pipeline, Docker ve yüksek erişilebilirlik çözümleri.',
    keywords: ['Kubernetes uzmanı', 'DevOps danışmanı', 'Bulut mimarisi', 'Mikroservis', 'Docker CI CD'],
    eyebrow: 'DevOps & Cloud Architecture',
    heroHeading: 'Kesintisiz Çalışan',
    heroHighlight: 'Kubernetes & Bulut Altyapısı',
    heroSubheading: 'T.C. Cumhurbaşkanlığı Dijital Dönüşüm Ofisi K8s projeleri deneyimiyle milyonlarca isteği kaldıran bulut mimarisi.',
    category: 'technology',
    badge: 'T.C. Cumhurbaşkanlığı K8s Deneyimi',
    targetAudience: 'Sistem kesintilerinden bıkan, trafiği hızla artan büyük platformlar ve SaaS şirketleri.',
    introParagraph: 'Sunucularınızın çökmesini tarihe gömüyoruz. Otomatik ölçeklenen, yük dağıtan ve anlık felaket kurtarma senaryolarına sahip modern Kubernetes kümeleri kuruyoruz.',
    whyChooseUs: [
      { title: 'Sıfır Kesinti (Zero-Downtime)', description: 'Yeni sürümleri kullanıcılar fark etmeden canlıya alma imkanı.' },
      { title: 'Maliyet Optimizasyonu', description: 'Bulut sunucu faturalarınızı gereksiz kaynakları budayarak %50’ye varan oranda düşürün.' },
    ],
    featuredAppIds: ['virelon-wifi', 'teleflow-prompter'],
    processSteps: [
      { step: '01', title: 'Altyapı Denetimi', desc: 'Mevcut sunucu haritasının çıkarılması.' },
      { step: '02', title: 'K8s Geçişi', desc: 'Konteynerleştirme ve CI/CD otomasyonu.' },
    ],
    faqs: [
      { question: 'AWS, Google Cloud ve Hetzner desteğiniz var mı?', answer: 'Evet; AWS, GCP, Azure, DigitalOcean ve Hetzner üzerinde anahtar teslim Kubernetes kurulumu yapıyoruz.' },
    ],
  },

  'turkiye-yazilim': {
    slug: 'turkiye-yazilim',
    title: 'Türkiye Geneli 81 İl Yazılım & Mobil Uygulama Hizmetleri — Muhammet Atmaca',
    metaDescription: 'Türkiye’nin 81 iline anahtar teslim kurumsal yazılım, mobil uygulama, web tasarım ve yapay zeka mühendisliği hizmetleri.',
    keywords: ['Türkiye yazılım', 'Türkiye mobil uygulama', 'Türkiye web tasarım', '81 il yazılım hizmeti', 'Türk yazılımcı'],
    eyebrow: '81 İl Ulusal Hizmet Ağı',
    heroHeading: 'Türkiye’nin Her Köşesine',
    heroHighlight: 'Dünya Standardında Yazılım',
    heroSubheading: 'İstanbul’dan Bayburt’a, İzmir’den Diyarbakır’a tüm Türkiye’deki işletmelere uzaktan ve yerinde kurumsal mühendislik.',
    category: 'local',
    badge: '81 İl Kapsama Alanı',
    targetAudience: 'Türkiye’nin her yerinden kaliteli, güvenilir ve dürüst yazılım mühendisliği arayan tüm kurumlar.',
    introParagraph: 'Gelişmiş uzaktan çalışma altyapımız, anlık iletişim kanallarımız ve düzenli online toplantılarımızla Türkiye’nin her iline sanki yan ofisinizdeymiş gibi hizmet veriyoruz.',
    whyChooseUs: [
      { title: 'Kesintisiz İletişim', description: 'Haftalık demolar, Slack/WhatsApp kanalları ve şeffaf proje takibi.' },
      { title: 'Resmi Sözleşme ve Fatura', description: 'Tüm Türkiye’ye yasal güvenceli ve faturalı hizmet.' },
    ],
    featuredAppIds: ['teleflow-prompter', 'toplualarm', 'virelon-wifi', 'tick-shopping'],
    processSteps: [
      { step: '01', title: 'Online Keşif', desc: 'Video konferans ile proje analizi.' },
      { step: '02', title: 'Sözleşme & Başlangıç', desc: 'Hızlı proje lansmanı.' },
    ],
    faqs: [
      { question: 'Farklı bir şehirde olmamız sorun yaratır mı?', answer: 'Kesinlikle hayır. Müşterilerimizin büyük çoğunluğuyla uzaktan %100 memnuniyetle çalışıyoruz; gerektiğinde yerinde ziyaretler de gerçekleştiriyoruz.' },
    ],
  },
};

// =========================================================================
// 3. PROGRAMMATİK İL & HİZMET MOTORU (81 İL x 5 HİZMET = 405 SAYFA)
// =========================================================================
interface ServiceArchetype {
  suffix: string;
  categoryName: string;
  heroHighlightTemplate: (cityName: string) => string;
  metaDescTemplate: (cityName: string, region: string) => string;
  introTemplate: (cityName: string, region: string) => string;
  keywordsTemplate: (cityName: string) => string[];
  featuredAppIds: string[];
  badgeTemplate: (cityName: string, plate: number) => string;
  whyChooseUsTemplate: (cityName: string) => Array<{ title: string; description: string }>;
  faqsTemplate: (cityName: string) => Array<{ question: string; answer: string }>;
}

const SERVICE_ARCHETYPES: Record<string, ServiceArchetype> = {
  'yazilim': {
    suffix: 'yazilim',
    categoryName: 'Yazılım & Bilişim Çözümleri',
    heroHighlightTemplate: (city) => `${city} Yazılım & Mühendislik`,
    metaDescTemplate: (city, reg) => `${city} merkezli kurumsal yazılım, mobil uygulama ve web platformu çözümleri. ${city} şirketleri için profesyonel mühendislik ve otomasyon.`,
    introTemplate: (city, reg) => `${city} ve ${reg} bölgesindeki işletmelerin dijitalleşme ihtiyaçlarını, mağazalarda 50’den fazla canlı uygulaması ve savunma sanayii tecrübesi bulunan yazılım mühendisi Muhammet Atmaca güvencesiyle karşılıyoruz.`,
    keywordsTemplate: (city) => [`${city} yazılım`, `${city} yazılımcı`, `${city} yazılım şirketi`, `${city} yazılım firmaları`, `${city} bilişim`, `${city} bilgisayar mühendisi`],
    featuredAppIds: ['teleflow-prompter', 'virelon-wifi', 'toplualarm', 'tick-shopping'],
    badgeTemplate: (city, plate) => `${city} (Plaka: ${plate}) & Çevre İller`,
    whyChooseUsTemplate: (city) => [
      { title: `${city} İçin Doğrudan Mühendis İletişimi`, description: 'Aracı ajans komisyonları olmadan projenizi doğrudan kodu yazan uzman mühendisle planlayın.' },
      { title: '50+ Canlı Referans Güvencesi', description: 'Teorik vaatler değil; App Store ve Google Play’de aktif yüz binlerce kullanıcısı olan kanıtlanmış ürünler.' },
      { title: 'Resmi Sözleşme ve Fatura', description: 'Teslimat tarihleri ve teknik isterler noter onaylı sözleşme disipliniyle garanti altına alınır.' },
    ],
    faqsTemplate: (city) => [
      { question: `${city} lokasyonundaki projelerde süreç nasıl işliyor?`, answer: `İlk görüşmemizi online veya yerinde gerçekleştirip gereksinimleri netleştiriyoruz. Ardından haftalık test sürümleriyle şeffaf şekilde ilerliyoruz.` },
      { question: 'Teslim sonrası destek sağlıyor musunuz?', answer: 'Evet, teslim edilen tüm yazılımlar 1 yıl ücretsiz teknik bakım ve hata düzeltme garantisi kapsamındadır.' },
    ],
  },

  'mobil-uygulama': {
    suffix: 'mobil-uygulama',
    categoryName: 'Mobil Uygulama Geliştirme (iOS & Android)',
    heroHighlightTemplate: (city) => `${city} Mobil Uygulama`,
    metaDescTemplate: (city) => `${city} için iOS ve Android mobil uygulama geliştirme hizmetleri. React Native ile App Store ve Google Play onay garantili projeler.`,
    introTemplate: (city) => `${city} pazarındaki müşterilerinize cep telefonları kadar yakın olun. React Native ve Flutter ile tek kod tabanından hem iPhone hem Android için yıldırım hızında mobil uygulamalar üretiyoruz.`,
    keywordsTemplate: (city) => [`${city} mobil uygulama`, `${city} iOS uygulama`, `${city} Android uygulama`, `${city} mobil yazılım firması`, `${city} uygulama yaptırma`],
    featuredAppIds: ['teleflow-prompter', 'toplualarm', 'tick-shopping', 'virelon-wifi'],
    badgeTemplate: (city) => `${city} Mobil & App Store Onaylı`,
    whyChooseUsTemplate: (city) => [
      { title: 'Mağaza Reddi Yaşamama Garantisi', description: 'Apple App Store ve Google Play politikalarına tam uyumlu mimari.' },
      { title: '60 FPS Akıcı Performans', description: 'Kullanıcıları kendine bağlayan modern animasyonlar ve çevrimdışı çalışma desteği.' },
    ],
    faqsTemplate: (city) => [
      { question: `${city} işletmemiz için mobil uygulama ne kadar sürede biter?`, answer: 'Kapsama bağlı olarak tipik bir kurumsal mobil uygulama 3 ila 6 hafta içinde mağazalarda yayına hazır hale gelir.' },
    ],
  },

  'web-tasarim': {
    suffix: 'web-tasarim',
    categoryName: 'Web Tasarım & Kurumsal Web Sitesi',
    heroHighlightTemplate: (city) => `${city} Web Tasarım & SEO`,
    metaDescTemplate: (city) => `${city} web tasarım, kurumsal web sitesi ve Google SEO uyumlu internet sayfası çözümleri. Hızlı açılan modern web siteleri.`,
    introTemplate: (city) => `${city} bölgesindeki müşterilerin Google aramalarında sizi ilk sırada bulmasını sağlayın. Next.js ve modern teknolojilerle kodlanmış yüksek performanslı kurumsal web siteleri tasarlıyoruz.`,
    keywordsTemplate: (city) => [`${city} web tasarım`, `${city} web sitesi`, `${city} kurumsal web sitesi`, `${city} internet sitesi yapanlar`, `${city} web ajansı`],
    featuredAppIds: ['virelon-wifi', 'tick-shopping', 'kredi-hesaplayici'],
    badgeTemplate: (city) => `${city} Web & Google PageSpeed 95+`,
    whyChooseUsTemplate: (city) => [
      { title: 'Google’da Üst Sıralar', description: 'Semantik HTML, Schema microdata ve programatik SEO uyumlu altyapı.' },
      { title: 'Mobil Uyumlu & Ultra Hızlı', description: 'Akıllı telefonlarda 1 saniyenin altında açılan hafif sayfalar.' },
    ],
    faqsTemplate: (city) => [
      { question: `${city} web sitesi fiyatları neye göre belirlenir?`, answer: 'Sayfa sayısı, özel yönetim paneli gereksinimleri ve entegrasyonlara göre sabit ve şeffaf fiyat teklifi sunuyoruz.' },
    ],
  },

  'bilgisayar-muhendisi': {
    suffix: 'bilgisayar-muhendisi',
    categoryName: 'Bilgisayar Mühendisliği & Danışmanlık',
    heroHighlightTemplate: (city) => `${city} Bilgisayar Mühendisi`,
    metaDescTemplate: (city) => `${city} bilgisayar mühendisi ve yazılım danışmanı arayanlar için profesyonel sistem mimarisi, kod optimizasyonu ve bilişim çözümleri.`,
    introTemplate: (city) => `${city} sınırlarında kurumsal düzeyde yazılım mimarisi, veritabanı optimizasyonu ve bulut sistemleri için savunma sanayii ve TÜBİTAK deneyimli bilgisayar mühendisi desteği.`,
    keywordsTemplate: (city) => [`${city} bilgisayar mühendisi`, `${city} yazılım danışmanı`, `${city} sistem analisti`, `${city} yazılım mühendisi`],
    featuredAppIds: ['teleflow-prompter', 'virelon-wifi', 'toplualarm'],
    badgeTemplate: (city) => `${city} Profesyonel Mühendislik`,
    whyChooseUsTemplate: (city) => [
      { title: 'Teori Değil Gerçek Tecrübe', description: 'Akademik bildiriler ve canlıda çalışan yüz binlerce kullanıcılı sistemler.' },
      { title: 'Yüksek Sistem Güvenliği', description: 'Siber saldırılara ve veri sızıntılarına karşı kurumsal güvenlik protokolleri.' },
    ],
    faqsTemplate: (city) => [
      { question: 'Mevcut yazılım ekibimize danışmanlık verebilir misiniz?', answer: 'Evet, kod incelemesi (code review), mimari rehberlik ve sprint yönetimi süreçlerinde danışmanlık sağlıyorum.' },
    ],
  },

  'e-ticaret': {
    suffix: 'e-ticaret',
    categoryName: 'E-Ticaret Sitesi & Satış Sistemleri',
    heroHighlightTemplate: (city) => `${city} E-Ticaret & Sanal POS`,
    metaDescTemplate: (city) => `${city} e-ticaret sitesi kurmak isteyenler için Sanal POS, kargo ve pazaryeri entegrasyonlu güvenli online mağaza yazılımları.`,
    introTemplate: (city) => `${city} şehrindeki ürünlerinizi tüm Türkiye’ye ve dünyaya satın. Sıfır komisyonlu, Sanal POS ve kargo entegrasyonlu bağımsız e-ticaret siteleri kuruyoruz.`,
    keywordsTemplate: (city) => [`${city} e-ticaret`, `${city} online satış sitesi`, `${city} sanal pos entegrasyonu`, `${city} e-ticaret yazılımı`],
    featuredAppIds: ['tick-shopping', 'kredi-hesaplayici', 'virelon-wifi'],
    badgeTemplate: (city) => `${city} E-Ticaret & Pazaryeri`,
    whyChooseUsTemplate: (city) => [
      { title: 'Yıllık Komisyonsuz Altyapı', description: 'Kendi mağazanızın sahibi olun, aracı platformlara sürekli komisyon kaptırmayın.' },
      { title: 'Tüm Bankalarla Uyumlu Sanal POS', description: 'İyzico, PayTR ve banka POS’ları ile 3D Secure güvenli ödeme.' },
    ],
    faqsTemplate: (city) => [
      { question: 'Trendyol ve Hepsiburada ile entegre çalışabilir mi?', answer: 'Evet, ürün stoklarınızı ve siparişlerinizi pazaryerleriyle otomatik senkronize eden modüller kuruyoruz.' },
    ],
  },
};

function generateProvincialPages(): Record<string, SeoLandingPageData> {
  const pages: Record<string, SeoLandingPageData> = {};

  for (const city of TURKISH_CITIES) {
    for (const [key, archetype] of Object.entries(SERVICE_ARCHETYPES)) {
      const slug = `${city.slug}-${archetype.suffix}`;

      // If Bayburt has a hyper-specialized page for this slug, we let Bayburt specialized take precedence
      if (city.slug === 'bayburt' && BAYBURT_SPECIALIZED_PAGES[slug]) {
        pages[slug] = BAYBURT_SPECIALIZED_PAGES[slug];
        continue;
      }

      pages[slug] = {
        slug,
        title: `${city.name} ${archetype.categoryName} — Muhammet Atmaca`,
        metaDescription: archetype.metaDescTemplate(city.name, city.region),
        keywords: archetype.keywordsTemplate(city.name),
        eyebrow: `${city.name} / ${city.region} Bölgesi`,
        heroHeading: `${city.name} İşletmeleri İçin`,
        heroHighlight: archetype.heroHighlightTemplate(city.name),
        heroSubheading: `${city.name} genelinde faaliyet gösteren şirketler için sözleşmeli, garantili ve yüksek performanslı ${archetype.categoryName.toLowerCase()}.`,
        cityOrRegion: city.name,
        category: 'local',
        badge: archetype.badgeTemplate(city.name, city.plate),
        targetAudience: `${city.name} ve çevre illerde işini dijitale taşımak, cirosunu artırmak ve güvenilir bir yazılım ortağı edinmek isteyen işletmeler.`,
        introParagraph: archetype.introTemplate(city.name, city.region),
        whyChooseUs: archetype.whyChooseUsTemplate(city.name),
        featuredAppIds: archetype.featuredAppIds,
        processSteps: [
          { step: '01', title: 'İhtiyaç & Kapsam Analizi', desc: `${city.name} işletmeniz için hedefleri ve bütçeyi netleştiririz.` },
          { step: '02', title: 'UI/UX & Mimari Tasarım', desc: 'Modern, prestijli ve kullanıcı dostu arayüzler tasarlarız.' },
          { step: '03', title: 'Hızlı & Güvenli Geliştirme', desc: 'React Native ve Next.js ile yüksek performanslı kodlama.' },
          { step: '04', title: 'Canlıya Alma & Destek', desc: 'Sistemleriniz kurulur, test edilir ve sürekli teknik destek sağlanır.' },
        ],
        faqs: archetype.faqsTemplate(city.name),
      };
    }
  }

  return pages;
}

// Compile all pages into one master record
const provincialPages = generateProvincialPages();

export const SEO_LANDING_PAGES: Record<string, SeoLandingPageData> = {
  ...provincialPages,
  ...BAYBURT_SPECIALIZED_PAGES,
  ...TECH_SPECIALIZED_PAGES,
};

// =========================================================================
// 4. YARDIMCI VE ERİŞİM METOTLARI
// =========================================================================
export function getAllSeoLandingPages(): SeoLandingPageData[] {
  return Object.values(SEO_LANDING_PAGES);
}

export function getAllSeoSlugs(): string[] {
  return Object.keys(SEO_LANDING_PAGES);
}

export function getBayburtSeoPages(): SeoLandingPageData[] {
  return Object.values(SEO_LANDING_PAGES).filter(
    (p) => p.cityOrRegion === 'Bayburt' || p.slug.startsWith('bayburt-')
  );
}

export function getMajorCitySeoPages(): SeoLandingPageData[] {
  const majorSlugs = ['istanbul', 'ankara', 'izmir', 'bursa', 'samsun', 'antalya', 'trabzon', 'erzurum', 'gaziantep', 'kocaeli'];
  return Object.values(SEO_LANDING_PAGES).filter((p) =>
    majorSlugs.some((city) => p.slug.startsWith(`${city}-`))
  );
}

export function getTechSpecializationPages(): SeoLandingPageData[] {
  return Object.values(TECH_SPECIALIZED_PAGES);
}
