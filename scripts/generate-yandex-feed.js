import fs from 'node:fs';
import path from 'node:path';

function escapeXml(unsafe) {
  if (typeof unsafe !== 'string') return unsafe;
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

const categories = [
  { id: '1', name: 'Mobil Uygulama ve Mobil Yazılım' },
  { id: '2', name: 'Kurumsal Web ve Platform Geliştirme' },
  { id: '3', name: 'E-Ticaret ve B2B Sistemleri' },
  { id: '4', name: 'Kurumsal Bilgisayar, Sunucu ve Donanım' },
  { id: '5', name: 'Ağ Sistemleri, Network ve Siber Güvenlik' },
  { id: '6', name: 'Yapay Zeka, Görüntü İşleme ve AR-GE' },
  { id: '7', name: 'Savunma Sanayii, IoT ve Simülasyon' },
  { id: '8', name: 'İşletme Otomasyonu ve Muhasebe Entegrasyonu' },
  { id: '9', name: 'Bulut Altyapı, DevOps ve IT Danışmanlığı' },
  { id: '10', name: 'Bilgisayar Temizleme, Format ve Telefon Veri Kurtarma' }
];

const services = [
  // --- 1. MOBİL UYGULAMA ---
  {
    id: '1',
    categoryId: '1',
    category: 'Mobil Uygulama ve Mobil Yazılım',
    name: 'Özel iOS ve Android Mobil Uygulama Geliştirme',
    price: '75000',
    description: 'React Native ve Flutter teknolojileriyle App Store ve Google Play Store için yüksek performanslı, native hızında, 50+ uygulama tecrübesiyle anahtar teslim mobil uygulama.',
    url: 'https://muhammetatmaca.com.tr/mobil-uygulama-gelistirme',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '2',
    categoryId: '1',
    category: 'Mobil Uygulama ve Mobil Yazılım',
    name: 'B2B Saha Satış ve Plasiyer Mobil Uygulaması',
    price: '95000',
    description: 'Saha satış ekipleri için internetsiz çalışma (offline-first), anlık sipariş toplama, araçta faturalandırma ve merkez ERP/muhasebe entegrasyonlu saha mobil yazılımı.',
    url: 'https://muhammetatmaca.com.tr/apps',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '3',
    categoryId: '1',
    category: 'Mobil Uygulama ve Mobil Yazılım',
    name: 'E-Ticaret Mobil Uygulaması (iOS & Android)',
    price: '85000',
    description: 'Push bildirimleriyle satışları artıran, tek tıkla ödeme destekli, sepet terk azaltma algoritmalarına sahip kurumsal mobil alışveriş uygulaması.',
    url: 'https://muhammetatmaca.com.tr/bayburt-mobil-uygulama',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '4',
    categoryId: '1',
    category: 'Mobil Uygulama ve Mobil Yazılım',
    name: 'Mobil Uygulama UI/UX Tasarım ve Prototipleme',
    price: '35000',
    description: 'Figma üzerinde modern kullanıcı deneyimi, ergonomik mobil arayüz tasarımı, interaktif prototipler ve tasarım sistemi (Design System) mimarisi.',
    url: 'https://muhammetatmaca.com.tr/apps',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '5',
    categoryId: '1',
    category: 'Mobil Uygulama ve Mobil Yazılım',
    name: 'Mobil Uygulama Yıllık Bakım, SLA ve Güncelleme',
    price: '45000',
    description: 'Apple ve Google mağaza politika güncellemeleri, yeni iOS/Android sürümlerine uyum, çökme (crash) izleme ve kesintisiz bakım anlaşması.',
    url: 'https://muhammetatmaca.com.tr/apps',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },

  // --- 2. KURUMSAL WEB & PLATFORM ---
  {
    id: '6',
    categoryId: '2',
    category: 'Kurumsal Web ve Platform Geliştirme',
    name: 'Özel Kurumsal Web Platformu ve Yönetim Paneli',
    price: '45000',
    description: 'React, Next.js ve Vite altyapısıyla geliştirilen, Google PageSpeed 95+ puanlı, ultra hızlı ve tam donanımlı kurumsal web sitesi.',
    url: 'https://muhammetatmaca.com.tr/web',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '7',
    categoryId: '2',
    category: 'Kurumsal Web ve Platform Geliştirme',
    name: 'Özel CRM ve Müşteri İlişkileri Yönetim Sistemi',
    price: '95000',
    description: 'Şirketinizin satış süreçlerini, müşteri görüşmelerini, teklif yönetimini ve satış ekibi performansını takip eden web tabanlı özel CRM.',
    url: 'https://muhammetatmaca.com.tr/bayburt-yazilim',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '8',
    categoryId: '2',
    category: 'Kurumsal Web ve Platform Geliştirme',
    name: 'Özel ERP ve Kurumsal Kaynak Planlama Yazılımı',
    price: '160000',
    description: 'Stok, üretim, finans, satın alma ve insan kaynakları süreçlerini tek merkezden yöneten, şirketinize özel mimaride kodlanmış ERP sistemi.',
    url: 'https://muhammetatmaca.com.tr/bayburt-ozel-yazilim',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '9',
    categoryId: '2',
    category: 'Kurumsal Web ve Platform Geliştirme',
    name: 'SaaS ve Bulut Tabanlı Çok Kiracılı Yazılım (Multi-tenant)',
    price: '180000',
    description: 'Abonelik tabanlı, ölçeklenebilir, stripe/iyzico ödeme entegrasyonlu ve mikroservis mimarisinde global SaaS platformu geliştirme.',
    url: 'https://muhammetatmaca.com.tr/web',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },

  // --- 3. E-TİCARET & B2B ---
  {
    id: '10',
    categoryId: '3',
    category: 'E-Ticaret ve B2B Sistemleri',
    name: 'B2B Bayi ve Toptan Sipariş Portalı',
    price: '90000',
    description: 'Bayilere özel iskonto oranları, cari hesap ekstre takibi, kredi limitleri ve toptan sipariş altyapısına sahip kapalı devre B2B yazılımı.',
    url: 'https://muhammetatmaca.com.tr/bayburt-e-ticaret',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '11',
    categoryId: '3',
    category: 'E-Ticaret ve B2B Sistemleri',
    name: 'Pazaryeri Entegrasyonlu E-Ticaret Platformu',
    price: '70000',
    description: 'Trendyol, Hepsiburada, Amazon ve Çiçeksepeti ile anlık çift yönlü stok, fiyat ve sipariş senkronizasyonlu modern e-ticaret sitesi.',
    url: 'https://muhammetatmaca.com.tr/bayburt-e-ticaret',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '12',
    categoryId: '3',
    category: 'E-Ticaret ve B2B Sistemleri',
    name: 'Özel Sanal POS ve Ödeme Ağ Geçidi Entegrasyonu',
    price: '30000',
    description: 'Tüm bankaların sanal POS altyapıları, İyzico, PayTR ve Paratika ile 3D Secure güvenli tahsilat entegrasyonu.',
    url: 'https://muhammetatmaca.com.tr/bayburt-e-ticaret',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },

  // --- 4. BİLGİSAYAR & DONANIM & SUNUCU ---
  {
    id: '13',
    categoryId: '4',
    category: 'Kurumsal Bilgisayar, Sunucu ve Donanım',
    name: 'Kurumsal Sunucu (Server) Kurulumu ve Active Directory',
    price: '45000',
    description: 'Windows Server / Linux tabanlı şirket içi sunucu kurulumu, Active Directory etki alanı mimarisi, kullanıcı yetkilendirme ve merkezi yönetim.',
    url: 'https://muhammetatmaca.com.tr/bayburt-bilgisayar',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '14',
    categoryId: '4',
    category: 'Kurumsal Bilgisayar, Sunucu ve Donanım',
    name: 'İş İstasyonu (Workstation) ve Yüksek Performans Donanım',
    price: '30000',
    description: 'Mühendislik, 3D render, yapay zeka ve mimari çizim ofisleri için özel iş istasyonu tasarımı, donanım montajı ve stres testleri.',
    url: 'https://muhammetatmaca.com.tr/bayburt-bilgisayar',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '15',
    categoryId: '4',
    category: 'Kurumsal Bilgisayar, Sunucu ve Donanım',
    name: 'Profesyonel Veri Kurtarma ve Güvenli Yedekleme (NAS)',
    price: '40000',
    description: 'Fidye yazılımlarına (Ransomware) karşı izole otomatik NAS yedekleme sistemleri, arızalı disklerden profesyonel veri kurtarma hizmeti.',
    url: 'https://muhammetatmaca.com.tr/bayburt-bilgisayar-tamiri',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '16',
    categoryId: '4',
    category: 'Kurumsal Bilgisayar, Sunucu ve Donanım',
    name: 'Kurumsal Bilgisayar Filosu Periyodik Bakım ve Onarım',
    price: '35000',
    description: 'Şirket bilgisayarlarının periyodik termal bakımları, donanım arıza tespiti, SSD/RAM yükseltmeleri ve sistem performans optimizasyonu.',
    url: 'https://muhammetatmaca.com.tr/bayburt-bilgisayar-tamiri',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '17',
    categoryId: '4',
    category: 'Kurumsal Bilgisayar, Sunucu ve Donanım',
    name: 'Restoran ve Kafe Dokunmatik POS Adisyon Donanımı',
    price: '45000',
    description: 'Dokunmatik POS terminalleri, termal mutfak yazıcıları, el terminalleri ve garson çağrı sistemleri anahtar teslim kurulumu.',
    url: 'https://muhammetatmaca.com.tr/bayburt-restoran-otomasyonu',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '18',
    categoryId: '4',
    category: 'Kurumsal Bilgisayar, Sunucu ve Donanım',
    name: 'Barkodlu Mağaza ve Market Hızlı Satış Donanım Paketi',
    price: '50000',
    description: 'Barkod okuyucular, terazi entegrasyonu, para çekmeceleri, etiket yazıcıları ve dokunmatik kasa donanım altyapısı.',
    url: 'https://muhammetatmaca.com.tr/bayburt-otomasyon',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },

  // --- 5. NETWORK & SİBER GÜVENLİK ---
  {
    id: '19',
    categoryId: '5',
    category: 'Ağ Sistemleri, Network ve Siber Güvenlik',
    name: 'Kurumsal Yapısal Kablolama ve Ağ (Network) Kurulumu',
    price: '55000',
    description: 'Cat6/Cat7 yapısal kablolama, fiber sonlandırma, yönetilebilir gigabit switchler, patch panel montajı ve şirket içi intranet ağı.',
    url: 'https://muhammetatmaca.com.tr/bayburt-teknoloji',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '20',
    categoryId: '5',
    category: 'Ağ Sistemleri, Network ve Siber Güvenlik',
    name: 'Donanımsal Güvenlik Duvarı (Firewall / UTM) ve VPN',
    price: '50000',
    description: 'Fortinet / pfSense donanımsal güvenlik duvarı kurulumu, şubeler arası güvenli IPsec VPN tüneli ve internet içerik filtreleme altyapısı.',
    url: 'https://muhammetatmaca.com.tr/bayburt-teknoloji',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '21',
    categoryId: '5',
    category: 'Ağ Sistemleri, Network ve Siber Güvenlik',
    name: 'IP Kamera ve Akıllı Güvenlik Görüntüleme Sistemi',
    price: '40000',
    description: 'PoE IP kamera altyapısı, NVR kayıt cihazı entegrasyonu, uzaktan canlı mobil izleme ve gece görüşlü kurumsal çevre güvenliği.',
    url: 'https://muhammetatmaca.com.tr/bayburt-otomasyon',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '22',
    categoryId: '5',
    category: 'Ağ Sistemleri, Network ve Siber Güvenlik',
    name: 'Siber Güvenlik Sızma Testi ve Zafiyet Taraması (Pentest)',
    price: '70000',
    description: 'Şirket sunucuları, web uygulamaları ve ağ altyapısının siber saldırılara karşı güvenlik testleri ve kapsamlı sızma testi raporlaması.',
    url: 'https://muhammetatmaca.com.tr/services',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },

  // --- 6. YAPAY ZEKA & GÖRÜNTÜ İŞLEME ---
  {
    id: '23',
    categoryId: '6',
    category: 'Yapay Zeka, Görüntü İşleme ve AR-GE',
    name: 'Yapay Zeka ile Endüstriyel Kalite Kontrol Sistemi',
    price: '145000',
    description: 'Üretim bantlarında kamera tabanlı hatalı parça tespiti, mikroskobik çatlak/boya hatası analizi ve endüstriyel kamera yapay zekası.',
    url: 'https://muhammetatmaca.com.tr/academic',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '24',
    categoryId: '6',
    category: 'Yapay Zeka, Görüntü İşleme ve AR-GE',
    name: 'YOLOv8 Nesne Tespiti, Sayım ve İzleme Sistemleri',
    price: '115000',
    description: 'Özel eğitilmiş YOLO derin öğrenme modelleri ile canlı kamera yayınlarında araç, insan, ekipman ve nesne tanıma/sayım otomasyonu.',
    url: 'https://muhammetatmaca.com.tr/academic',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '25',
    categoryId: '6',
    category: 'Yapay Zeka, Görüntü İşleme ve AR-GE',
    name: 'Plaka Tanıma (ANPR) ve Akıllı Otopark Bariyer Sistemi',
    price: '90000',
    description: 'Yüksek doğruluklu araç plaka tanıma yazılımı, site/otopark bariyer tetikleme, abone araç yönetimi ve misafir araç loglama.',
    url: 'https://muhammetatmaca.com.tr/bayburt-otomasyon',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '26',
    categoryId: '6',
    category: 'Yapay Zeka, Görüntü İşleme ve AR-GE',
    name: 'Kurumsal Özel LLM ve Yapay Zeka Asistanı Entegrasyonu',
    price: '95000',
    description: 'Şirketinizin kendi dökümanları ve veritabanı üzerinde eğitilmiş yerel yapay zeka asistanı (RAG mimarisi), veri güvenliği garantili.',
    url: 'https://muhammetatmaca.com.tr/academic',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },

  // --- 7. SAVUNMA SANAYİİ & SİMÜLASYON ---
  {
    id: '27',
    categoryId: '7',
    category: 'Savunma Sanayii, IoT ve Simülasyon',
    name: 'Uydu Yörünge ve Pasif Çarpışma Önleme Simülasyonu',
    price: '260000',
    description: 'UHUK İMECE uydusu pasif kaçınma bildirisi temelli, orbital mekanik ve fizik simülasyonları için görev kritik mühendislik yazılımları.',
    url: 'https://muhammetatmaca.com.tr/academic',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '28',
    categoryId: '7',
    category: 'Savunma Sanayii, IoT ve Simülasyon',
    name: 'Savunma Sanayii Yer Kontrol ve Telemetri Yazılımı',
    price: '340000',
    description: 'İHA, SİHA ve otonom araçlar için düşük gecikmeli veri iletişimi, MIL-STD standartlarına uyumlu yer istasyonu arayüz mimarisi.',
    url: 'https://muhammetatmaca.com.tr/academic',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '29',
    categoryId: '7',
    category: 'Savunma Sanayii, IoT ve Simülasyon',
    name: 'Endüstriyel IoT ve Gömülü Sensör Veri Toplama Yazılımı',
    price: '130000',
    description: 'Modbus, MQTT ve RS485 protokolleri üzerinden endüstriyel sensörlerden gerçek zamanlı veri toplama ve SCADA arayüz geliştirme.',
    url: 'https://muhammetatmaca.com.tr/bayburt-otomasyon',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },

  // --- 8. İŞLETME OTOMASYONU ---
  {
    id: '30',
    categoryId: '8',
    category: 'İşletme Otomasyonu ve Muhasebe Entegrasyonu',
    name: 'Emlak ve Gayrimenkul Portföy Yönetim Platformu',
    price: '60000',
    description: 'Emlak ofisleri için ilan yönetimi, harita üzerinde filtreleme, müşteri talep eşleştirme ve otomatik sosyal medya paylaşım sistemi.',
    url: 'https://muhammetatmaca.com.tr/bayburt-emlak-web-sitesi',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '31',
    categoryId: '8',
    category: 'İşletme Otomasyonu ve Muhasebe Entegrasyonu',
    name: 'Otel ve Konaklama Rezervasyon Otomasyonu',
    price: '70000',
    description: 'Oda müsaitlik takibi, online rezervasyon motoru, kimlik bildirim sistemi entegrasyonu ve resepsiyon kasa yazılımı.',
    url: 'https://muhammetatmaca.com.tr/bayburt-otomasyon',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '32',
    categoryId: '8',
    category: 'İşletme Otomasyonu ve Muhasebe Entegrasyonu',
    name: 'Özel Muhasebe Entegrasyonu (Logo, Zirve, Mikro)',
    price: '55000',
    description: 'Web siteniz ve e-ticaret siparişlerinizin doğrudan Logo, Zirve, Mikro veya Luca muhasebe programlarına e-fatura olarak işlenmesi.',
    url: 'https://muhammetatmaca.com.tr/bayburt-muhasebe-yazilimi',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },

  // --- 9. CLOUD & DEVOPS & DANIŞMANLIK ---
  {
    id: '33',
    categoryId: '9',
    category: 'Bulut Altyapı, DevOps ve IT Danışmanlığı',
    name: 'Kubernetes ve Docker Bulut Mikroservis Mimarisi',
    price: '90000',
    description: 'AWS, Google Cloud veya şirket içi sunucularda Docker ve Kubernetes orkestrasyonu, CI/CD hatları ve kesintisiz sıfır duruş dağıtımı.',
    url: 'https://muhammetatmaca.com.tr/services',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '34',
    categoryId: '9',
    category: 'Bulut Altyapı, DevOps ve IT Danışmanlığı',
    name: 'Kurumsal Microsoft 365 / Google Workspace Göçü',
    price: '35000',
    description: 'Şirket e-postalarının kesintisiz taşınması, SPF, DKIM, DMARC e-posta güvenlik kayıtları ve bulut döküman yedekleme mimarisi.',
    url: 'https://muhammetatmaca.com.tr/bayburt-bilgisayar',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '35',
    categoryId: '9',
    category: 'Bulut Altyapı, DevOps ve IT Danışmanlığı',
    name: 'Kurumsal Teknik SEO ve Programmatic Arama Motoru Hakimiyeti',
    price: '50000',
    description: 'Google, Yandex ve Bing ilk sıra hedefli Programmatic SEO motoru, Schema JSON-LD yapılandırması ve Indexing API otomasyonu.',
    url: 'https://muhammetatmaca.com.tr/bayburt-seo-ajansi',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },

  // --- 10. BİLGİSAYAR TEMİZLEME, FORMAT & TELEFON VERİ KURTARMA ---
  {
    id: '36',
    categoryId: '10',
    category: 'Bilgisayar Temizleme, Format ve Telefon Veri Kurtarma',
    name: 'Laptop ve Masaüstü Detaylı Fan Temizliği ve Termal Macun',
    price: '2000',
    description: 'Aşırı ısınma, fan sesi ve donma sorunlarını gideren komple iç toz temizliği, fan yağlaması ve Arctic MX-4 yüksek iletkenlikli termal macun yenilemesi.',
    url: 'https://muhammetatmaca.com.tr/bayburt-bilgisayar-tamiri',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '37',
    categoryId: '10',
    category: 'Bilgisayar Temizleme, Format ve Telefon Veri Kurtarma',
    name: 'Akıllı Telefondan Silinen Verileri Kurtarma (Fotoğraf, WhatsApp)',
    price: '6500',
    description: 'iPhone ve Android telefonlardan yanlışlıkla silinen fotoğraflar, videolar, ses kayıtları, rehber ve WhatsApp sohbet geçmişinin profesyonel laboratuvar kurtarımı.',
    url: 'https://muhammetatmaca.com.tr/bayburt-bilgisayar',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '38',
    categoryId: '10',
    category: 'Bilgisayar Temizleme, Format ve Telefon Veri Kurtarma',
    name: 'Açılmayan, Kırık veya Hasarlı Telefondan Çip Veri Kurtarma',
    price: '12500',
    description: 'Sıvı temaslı, anakartı yanan, ekranı kırık veya hiç açılmayan akıllı telefonlardan eMMC/UFS bellek çipi seviyesinde doğrudan veri çıkarma hizmeti.',
    url: 'https://muhammetatmaca.com.tr/bayburt-bilgisayar',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '39',
    categoryId: '10',
    category: 'Bilgisayar Temizleme, Format ve Telefon Veri Kurtarma',
    name: 'Harici Disk, Flash Bellek (USB) ve SD Kart Veri Kurtarma',
    price: '8500',
    description: 'Biçimlendirilen, RAW formata dönen, bilgisayarın tanımadığı bozuk harici harddisk ve USB belleklerden sıfır kayıpla dosya kurtarma.',
    url: 'https://muhammetatmaca.com.tr/bayburt-bilgisayar-tamiri',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '40',
    categoryId: '10',
    category: 'Bilgisayar Temizleme, Format ve Telefon Veri Kurtarma',
    name: 'Bilgisayar Format, Orijinal Windows Kurulumu ve Hızlandırma',
    price: '1800',
    description: 'Yavaşlayan veya çöken bilgisayarları fabrika hızına döndüren temiz Windows 10/11 kurulumu, orijinal sürücü (driver) optimizasyonu ve temel program paketi.',
    url: 'https://muhammetatmaca.com.tr/bayburt-bilgisayar-tamiri',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '41',
    categoryId: '10',
    category: 'Bilgisayar Temizleme, Format ve Telefon Veri Kurtarma',
    name: 'SSD ve RAM Donanım Yükseltme ile 10 Kat Hızlandırma',
    price: '3500',
    description: 'Eski sabit diski (HDD) çıkarıp yüksek hızlı NVMe SSD takılması, RAM artırımı ve eski Windows ile tüm verilerin sıfır kayıpla yeni diske klonlanması.',
    url: 'https://muhammetatmaca.com.tr/bayburt-bilgisayar',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '42',
    categoryId: '10',
    category: 'Bilgisayar Temizleme, Format ve Telefon Veri Kurtarma',
    name: 'Virüs, Truva Atı, Reklam Virüsü ve Casus Yazılım Temizliği',
    price: '2200',
    description: 'Tarayıcıyı kilitleyen reklamlar, arka planda çalışan Bitcoin madencilik virüsleri ve sistemi kilitleyen zararlı yazılımların garantili temizliği.',
    url: 'https://muhammetatmaca.com.tr/bayburt-bilgisayar-tamiri',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '43',
    categoryId: '10',
    category: 'Bilgisayar Temizleme, Format ve Telefon Veri Kurtarma',
    name: 'Laptop Kasa Onarımı, Kırık Menteşe Tamiri ve Ekran Değişimi',
    price: '4500',
    description: 'Kapağı zor açılan, kırılan menteşe yuvalarının özel mukavemetli dolgu malzemesiyle garantili onarımı ve çatlak laptop ekranlarının değişimi.',
    url: 'https://muhammetatmaca.com.tr/bayburt-bilgisayar-tamiri',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '44',
    categoryId: '10',
    category: 'Bilgisayar Temizleme, Format ve Telefon Veri Kurtarma',
    name: 'Kablosuz Wi-Fi Yazıcı, Tarayıcı ve Ağ Cihazı Kurulumu',
    price: '2500',
    description: 'Lazer ve mürekkepli yazıcıların ofisteki tüm bilgisayar ve cep telefonlarına kablosuz tanıtılması, ortak ağ tarama ayarlarının yapılması.',
    url: 'https://muhammetatmaca.com.tr/bayburt-bilgisayar',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '45',
    categoryId: '10',
    category: 'Bilgisayar Temizleme, Format ve Telefon Veri Kurtarma',
    name: 'Telefon Yazılım Kurtarma, ROM Yükleme ve Sistem Onarımı',
    price: '3000',
    description: 'Açılış logosunda kalan, çöken, bootloop olan veya şifresi unutulan akıllı telefonların orijinal üretici yazılımıyla kurtarılması ve sıfırlanması.',
    url: 'https://muhammetatmaca.com.tr/bayburt-bilgisayar',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  }
];

// 1. Build YML (Yandex Market Language)
let yml = `<?xml version="1.0" encoding="UTF-8"?>
<yml_catalog date="2026-09-26 00:25">
  <shop>
    <name>Muhammet Atmaca — Mobil Uygulama ve Yazılım Mühendisliği</name>
    <company>Muhammet Atmaca / VirelonSoft</company>
    <url>https://muhammetatmaca.com.tr/</url>
    <currencies>
      <currency id="TRY" rate="1"/>
    </currencies>
    <categories>
`;

for (const c of categories) {
  yml += `      <category id="${c.id}">${escapeXml(c.name)}</category>\n`;
}

yml += `    </categories>
    <offers>
`;

for (const s of services) {
  yml += `      <offer id="${s.id}" available="true">
        <name>${escapeXml(s.name)}</name>
        <url>${escapeXml(s.url)}</url>
        <price>${s.price}</price>
        <currencyId>TRY</currencyId>
        <categoryId>${s.categoryId}</categoryId>
        <picture>${escapeXml(s.picture)}</picture>
        <description>${escapeXml(s.description)}</description>
        <param name="Kategori">${escapeXml(s.category)}</param>
      </offer>
`;
}

yml += `    </offers>
  </shop>
</yml_catalog>
`;

// 2. Build CSV with UTF-8 BOM
const bom = '\uFEFF';
let csv = bom + 'Kategori;Ürün/Hizmet Adı;Fiyat;Para Birimi;Açıklama;URL;Görsel URL\r\n';
for (const s of services) {
  csv += `"${s.category}";"${s.name}";"${s.price}";"TRY";"${s.description}";"${s.url}";"${s.picture}"\r\n`;
}

// 3. Save to Desktop, Downloads, and Project Root
const desktopDir = 'C:\\Users\\muham\\Desktop';
const downloadsDir = 'C:\\Users\\muham\\Downloads';

fs.writeFileSync(path.join(desktopDir, 'yandex_hizmetler.yml'), yml, 'utf8');
fs.writeFileSync(path.join(downloadsDir, 'yandex_hizmetler.yml'), yml, 'utf8');
fs.writeFileSync('yandex_hizmetler.yml', yml, 'utf8');

fs.writeFileSync(path.join(desktopDir, 'yandex_hizmetler.csv'), csv, 'utf8');
fs.writeFileSync(path.join(downloadsDir, 'yandex_hizmetler.csv'), csv, 'utf8');
fs.writeFileSync('yandex_hizmetler.csv', csv, 'utf8');

console.log(`SUCCESS: ${services.length} services generated in YML and CSV!`);
