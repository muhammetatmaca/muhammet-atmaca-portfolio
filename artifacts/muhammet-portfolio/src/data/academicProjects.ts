export interface AcademicProject {
  id: string;
  no: string;
  title: string;
  institution?: string;
  tagline: string;
  category: string;
  technologies: string[];
  description: string;
  methodology?: string;
  results?: string[];
  dataset?: string;
  year: string;
  paperUrl?: string;
  githubUrl?: string;
  cardBg?: string;
  highlightBadge?: string;
}

export const ACADEMIC_PROJECTS: AcademicProject[] = [
  {
    id: 'astro-bi-lstm-collision-avoidance',
    no: '01',
    title: 'AI Destekli Otonom Yörünge Yönetimi ve Pasif Kaçınma Sistemi',
    institution: 'Samsun Üniversitesi • İMECE Uydusu Referanslı',
    highlightBadge: 'En Önemli Araştırma Projesi 🛰️',
    tagline: 'LEO ortamında uzay enkazı takibi, Kalman filtresi, SGP4 yörünge mekaniği ve Physics-Informed Bi-LSTM ile yakıtsız çarpışma önleme',
    category: 'Uzay Sistemleri / Fizik Destekli Yapay Zeka',
    technologies: [
      'Bi-LSTM',
      'Physics-Informed Loss',
      'SGP4 Orbital Propagator',
      'GMAT',
      'Kalman Filter',
      'Gauss Variation Equations (GVE)',
      'Solar Radiation Pressure (SRP)',
      'J2 Perturbation',
      'Python',
    ],
    description:
      'Alçak Dünya Yörüngesi’ndeki (LEO) artan uzay enkazı tehdidine karşı, Türkiye’nin yerli gözlem uydusu İMECE referans alınarak geliştirilen otonom yörünge yönetim ve çarpışma önleme sistemi. Geleneksel itki tabanlı ve manuel yöntemlerin aksine; doğal kuvvetleri (Güneş radyasyon basıncı SRP, J2 basıklığı, atmosferik balistik sürtünme B-DRAG) kullanarak yakıt harcamadan (%91.7 pasif başarı) yörünge kaydırma sağlar.',
    methodology:
      'SGP4 ve GMAT fizik motoruyla 7 günlük yörünge tahmini, Kalman filtresi ile sensör gürültüsü arındırma ve enerji korunumu kısıtlı (Physics-Informed) Bi-LSTM derin öğrenme sinir ağı ile kapalı döngü otonom karar mimarisi. 4 Davranış Modu: HOLD, G-SURF (Gravity Surfing), B-DRAG (Ballistic Drag) ve acil durum THRUST.',
    results: [
      'Doğruluk: %97 (Klasik SGP4 modeline göre +12 puan artış)',
      'F1-Skoru: %95, Duyarlılık (Recall): %96',
      'ROC AUC Skoru: 0.98 (SGP4: 0.82)',
      'Yakıt Tasarrufu: Çarpışma risklerinin %91.7’si sıfır yakıtla doğal pertürbasyon kuvvetleriyle bertaraf edildi.',
    ],
    dataset: 'CelesTrak TLE (Two-Line Element) katalogları, WGS72 koordinat indirgemesi ve sentetik yörünge verisi',
    year: '2026',
    cardBg: '#e5eefb',
  },
  {
    id: 'lorawan-edge-ai-kalman-lstm',
    no: '02',
    title: 'LoRaWAN Sistemlerinde Edge AI, Kalman ve LSTM ile Otonom Sinyal İyileştirme',
    institution: 'Samsun Üniversitesi • Bitirme Tezi & Projesi',
    highlightBadge: 'Lisans Bitirme Tezi ⚡',
    tagline: 'ESP32 ve Semtech LoRa donanımlarında uç birim (Edge) yapay zeka, C/C++ Kalman filtreleme ve LSTM ile Self-Healing Mesh ağı',
    category: 'Edge AI / IoT & Gömülü Sistemler',
    technologies: [
      'Edge AI',
      'TensorFlow Lite for Microcontrollers',
      'LSTM',
      'Kalman Filter',
      'C / C++',
      'ESP32 / RP2040 MCU',
      'Semtech LoRa SX1276/1262',
      'LoRaWAN Gateway',
      'Self-Healing Mesh Routing',
    ],
    description:
      'Geniş alanlı düşük güçlü kablosuz ağlarda (LoRaWAN) yüksek düğüm yoğunluğu, çevresel parazit ve paket çarpışmalarından kaynaklanan veri kayıplarını çözmek üzere geliştirilen melez (Edge-Cloud) otonom sinyal iyileştirme mimarisi. Merkezi sunucu gecikmelerini ortadan kaldırarak doğrudan mikrodenetleyici üzerinde sinyal kalitesini restore eder.',
    methodology:
      'ESP32/RP2040 donanım katmanında telemetri (RSSI/SNR) verilerini C/C++ seviyesinde filtreleyen Kalman algoritması; anomali ve çakışmaları uç birimde tespit eden optimize TFLite Micro LSTM sinir ağı; kopan bağlantıları dinamik yönlendiren Self-Healing Mesh algoritması.',
    results: [
      'Veri kayıplarında ve paket çarpışma gecikmelerinde kayda değer azalma',
      'Merkezi sunucuya bağımlı olmadan mikrodenetleyici üzerinde milisaniyeler mertebesinde otonom iyileştirme',
      'Düşük enerji profili ile sahada batarya ile yıllarca kesintisiz çalışabilen donanım prototipi',
    ],
    dataset: 'Saha ortamından toplanan gerçek zamanlı LoRa telemetri (RSSI, SNR, paket iletim oranı) veri seti',
    year: '2026',
    cardBg: '#f6f1e3',
  },
  {
    id: 'presidency-kubernetes-ceph-distributed',
    no: '03',
    title: 'Kubernetes Kümesi & Ceph Dağıtık Depolama Mimarisi',
    institution: 'T.C. Cumhurbaşkanlığı Dijital Dönüşüm Ofisi',
    highlightBadge: 'Kamu / Kurumsal Bulut Mimarisi 🏛️',
    tagline: 'Master ve worker düğümlerden oluşan Vanilla Kubernetes ortamında Ceph dağıtık depolama ve yüksek erişilebilirlikli mikroservis orkestrasyonu',
    category: 'DevOps / Dağıtık Sistemler & Bulut Mimarisi',
    technologies: [
      'Kubernetes (k8s)',
      'Ceph Distributed Storage',
      'Persistent Volume Claims (PVC)',
      'Flannel CNI',
      'Containerd',
      'Docker',
      'Python Flask API',
      'Linux Networking',
    ],
    description:
      'T.C. Cumhurbaşkanlığı Dijital Dönüşüm Ofisi bünyesinde gerçekleştirilen bu projede; yüksek erişilebilirlik (High Availability) ve dayanıklılık sunan bir Ceph dağıtık depolama kümesi, çok düğümlü bir Vanilla Kubernetes altyapısı üzerine entegre edilmiştir.',
    methodology:
      '1 Master ve 2 Worker düğümden oluşan küme topolojisi; statik IP ve ağ katmanı yapılandırmaları; Flannel CNI pod ağı; Ceph OSD/Mon blok depolama entegrasyonu; Base64 ve GUID tabanlı dosya işleme yapan Python/Flask API mikroservisinin Dockerfile ile paketlenip PVC kaynakları üzerinden dağıtılması.',
    results: [
      'Düğüm arızalarında dahi veri kaybını önleyen yüksek toleranslı Ceph kalıcı depolama (PVC) sağlandı.',
      'Containerd çalışma zamanı ve Flannel pod ağı ile tam izole ve güvenli mikroservis iletişimi kuruldu.',
      'Üretim sınıfı bare-metal ve sanal ortamlara uygun uçtan uca DevOps ve Kubernetes otomasyonu tamamlandı.',
    ],
    year: '2025',
    cardBg: '#e7f3ee',
  },
  {
    id: 'defense-industry-turkish-llm-assistant',
    no: '04',
    title: 'Türkçe Dil Modeli (LLM) Fine-Tuning & Kurumsal Asistan Platformu',
    institution: 'Savunma Sanayii / Crudfab AR-GE',
    highlightBadge: 'Savunma Sanayii AR-GE Projesi 🛡️',
    tagline: 'Transformer mimarisi, PyTorch ile Türkçe veri setlerinde LLM ince ayarı (Fine-Tuning), NestJS, FastAPI ve çok aşamalı Docker orkestrasyonu',
    category: 'Büyük Dil Modelleri (LLM) / Full-Stack AI',
    technologies: [
      'Transformer Architecture',
      'Attention Is All You Need',
      'PyTorch',
      'LLM Fine-Tuning',
      'AdamW & Warmup Scheduler',
      'FastAPI AI Engine',
      'NestJS Backend',
      'PostgreSQL & Prisma ORM',
      'Multi-Stage Docker',
    ],
    description:
      'Savunma sanayii odaklı AR-GE stajı kapsamında hayata geçirilen; modern Transformer mimarisi temelli, Türkçe konuşma ve teknik doküman anlama kabiliyetine sahip kurumsal akıllı asistan platformu. Veri güvenliğini sağlamak amacıyla tamamen yerel (on-premise) altyapıda çalışacak şekilde tasarlanmıştır.',
    methodology:
      '"Attention Is All You Need" makalesinin teorik matematiksel temelleri (Multi-Head Self-Attention, Positional Encoding, Softmax QK/V); PyTorch ile Türkçe veri seti üzerinde AdamW optimizasyonuyla LLM Fine-Tuning; NestJS mikroservis mimarisi, PostgreSQL/Prisma veritabanı, RBAC rol tabanlı yetkilendirme ve çok aşamalı Dockerfile orkestrasyonu.',
    results: [
      'Türkçe teknik sorgularda ve kurumsal diyaloglarda yüksek anlamsal doğruluk ve tutarlılık',
      'FastAPI akışkan (streaming) yanıt motoru ile düşük gecikmeli kullanıcı deneyimi',
      'Multi-stage Docker ile minimal imaj boyutu ve tam izole üretim ortamı dağıtımı',
    ],
    year: '2026',
    cardBg: '#f3e8f8',
  },
  {
    id: 'tubitak-2209-military-offline-drug-interaction',
    no: '05',
    title: 'TÜBİTAK 2209-A: Askeri ve Çevrimdışı Ortamlar İçin İlaç-İlaç ve İlaç-Gıda Etkileşim Tespit Sistemi',
    institution: 'TÜBİTAK 2209-A Üniversite Öğrencileri Araştırma Projeleri',
    highlightBadge: 'TÜBİTAK 2209-A Destekli Proje 🔬',
    tagline: 'Askeri sahra hastaneleri, operasyon alanları ve afet bölgelerinde internetsiz (offline-first) çalışan klinik karar destek ve kontrendikasyon motoru',
    category: 'Biyomedikal Bilişim / Offline-First Karar Destek',
    technologies: [
      'Offline-First Architecture',
      'Lokal SQLite / IndexedDB',
      'Klinik Etkileşim Algoritmaları',
      'React Native',
      'Node.js',
      'Veri Madenciliği',
      'İlaç-Gıda Matrisleri',
    ],
    description:
      'TÜBİTAK 2209-A programı kapsamında yürütülen; askeri operasyonlar, sahra birlikleri, sınır karakolları ve doğal afet bölgeleri gibi internet bağlantısının olmadığı veya kesildiği kriz anlarında hekimlerin ve sıhhiye personelinin güvenle kullanabileceği çevrimdışı ilaç etkileşim karar destek sistemi.',
    methodology:
      'Geniş farmakolojik veri setlerinin ve etken madde kontrendikasyonlarının cihaz üzerinde yerel (offline) ilişkisel matrislerde indekslenmesi; çoklu reçete analizinde çapraz etkileşimlerin, yan etkilerin ve gıda kombinasyonu risklerinin anlık taranarak kırmızı/sarı alarm üretilmesi.',
    results: [
      'Sıfır internet bağlantısı ile %100 çevrimdışı (offline) çalışabilen farmakolojik arama ve etkileşim motoru',
      'Kritik operasyonel sahalarda yanlış ilaç ve ölümcül etkileşim riskini minimize eden askeri tıp uyumlu arayüz',
      'TÜBİTAK 2209-A bilimsel değerlendirme ve proje kabul başarısı',
    ],
    year: '2025',
    cardBg: '#eaf4ea',
  },
  {
    id: 'r-api-plumber-shiny-statistics',
    no: '06',
    title: 'R ile İstatiksel Analiz, Plumber REST API & Shiny İnteraktif Dashboard',
    institution: 'Akademik İstatistik & Veri Analizi Çalışması',
    tagline: 'R programlama dili, Plumber API çerçevesi ve Shiny arayüzü ile dinamik istatistiksel hesaplama ve görselleştirme mikroservisi',
    category: 'Veri Bilimi / İstatistiksel Modelleme',
    technologies: [
      'R Programlama',
      'Plumber API',
      'Shiny Dashboard',
      'ggplot2',
      'İstatistiksel Testler (ANOVA, Regresyon)',
      'JSON REST API',
      'Docker',
    ],
    description:
      'R programlama dilinin güçlü istatistiksel ve matematiksel kabiliyetlerini modern mikroservis mimarisine taşıyan açık kaynaklı analitik projesi. Karmaşık istatistiksel testleri ve veri modellemelerini REST API uç noktaları olarak dış dünyaya sunar ve Shiny arayüzünde canlı simüle eder.',
    methodology:
      'Plumber kütüphanesi ile R fonksiyonlarının HTTP metodlarına (GET/POST) dönüştürülmesi; betimsel istatistikler, korelasyon, hipotez testleri ve çok değişkenli regresyon hesaplamalarının JSON formatında servis edilmesi; ggplot2 ve Shiny reaktif veri akışıyla dinamik grafikleme.',
    results: [
      'Herhangi bir web veya mobil uygulamadan R motoruna veri gönderip anlık istatistiksel sonuç alabilen RESTful mimari',
      'Shiny paneli üzerinden parametrik veri manipülasyonu ve anlık görsel raporlama',
    ],
    githubUrl: 'https://github.com/muhammetatmaca/-R-ile-API-Plumber-Shiny-Statistics-',
    year: '2024',
    cardBg: '#f8ece9',
  },
  {
    id: 'cisco-packet-tracer-police-network',
    no: '07',
    title: 'Cisco Packet Tracer ile Emniyet / Polis Güvenli Telsiz ve Veri Haberleşme Ağı',
    institution: 'Ağ Güvenliği ve Haberleşme Altyapı Tasarımı',
    tagline: 'Kritik kamu güvenliği birimleri için yedekli omurga, VLAN segmentasyonu, OSPF dinamik yönlendirme ve ACL erişim kontrolü mimarisi',
    category: 'Bilgisayar Ağları & Siber Güvenlik',
    technologies: [
      'Cisco Packet Tracer',
      'VLAN & Inter-VLAN Routing',
      'OSPF / EIGRP Protokolleri',
      'Access Control Lists (ACL)',
      'VPN Tünelleme',
      'Spanning Tree Protocol (STP)',
      'Ağ Güvenliği & Kriptografi',
    ],
    description:
      'İl emniyet müdürlüğü, ilçe amirlikleri ve mobil devriye birimleri arasındaki ses, telsiz ve kritik veri akışını simüle eden; kesintisiz ve yüksek güvenlikli kurumsal ağ altyapı tasarımı.',
    methodology:
      'Hassas departmanlar (Asayiş, Terör, Siber, İstihbarat) için katı VLAN ve alt ağ (subnetting) ayrımı; omurga routerları arasında yüksek hızlı OSPF dinamik yönlendirme; dış sızmaları engelleyen durum denetimli Access Control List (ACL) filtreleri; santraller arası yedekli hat mimarisi.',
    results: [
      'Ağda tek bir donanım veya hat kopsa bile milisaniyeler içinde alternatif rotaya geçen yedekli (redundant) topoloji',
      'Yetkisiz erişimlerin ve ağ içi sniffing saldırılarının ACL ve VLAN izolasyonu ile tamamen engellenmesi',
    ],
    year: '2024',
    cardBg: '#eef1f6',
  },
  {
    id: 'social-network-seismic-deep-learning',
    no: '08',
    title: 'Sismik Dalgaların Sosyal Ağ Yayılım Analizi & Derin Sinir Ağları ile Afet Risk Tahmini (TravelGuard AI)',
    institution: 'Yapay Zeka ve Karmaşık Ağ Dinamikleri Araştırması',
    tagline: 'Doğal afet ve sismik hareketlerin sosyal ağlardaki bilgi dalgası yayılımı analizi ve TensorFlow sinir ağları ile dinamik risk tahmini',
    category: 'Yapay Zeka / Sosyal Ağ Analizi & Doğal Afet',
    technologies: [
      'TensorFlow / Keras',
      'Derin Sinir Ağları (DNN)',
      'Sosyal Ağ Analizi (SNA)',
      'Sismik Dalga Veri Kümeleri',
      'Scikit-Learn',
      'Random Forest & Gradient Boosting',
      'Python',
      'Streamlit',
    ],
    description:
      'Deprem ve sismik sarsıntı anlarında sosyal medya ve iletişim ağlarında oluşan bilgi dalgalanmalarını, panik yayılımını ve veri anomalilerini inceleyen; küresel afet ve kriz veritabanlarını derin sinir ağları ile işleyerek gerçek zamanlı risk skorlaması ve alternatif güvenli rota oluşturan yapay zeka sistemi.',
    methodology:
      'Graf teorisi ve sismik dalga yayılım modellemesi; GTD, EM-DAT ve sismik afet veri tabanlarından beslenen özellik mühendisliği (feature engineering); TensorFlow regresyon sinir ağı ile 0-100 arası risk skoru tahmini; kriz bölgelerini bypass eden dinamik kaçınma rotaları.',
    results: [
      'Sismik şok dalgalarının sosyal ağ düğümlerindeki yayılma hızının ve anomali tepe noktalarının matematiksel tespiti',
      'TravelGuard AI ile kriz ve afet bölgelerindeki risk seviyesini yüksek doğrulukla sınıflandırma',
      'Açık kaynak araştırma deposu ve interaktif simülasyon paneli',
    ],
    githubUrl: 'https://github.com/muhammetatmaca/Derin_Sinir_Aglari',
    year: '2024',
    cardBg: '#fbf0e8',
  },
];
