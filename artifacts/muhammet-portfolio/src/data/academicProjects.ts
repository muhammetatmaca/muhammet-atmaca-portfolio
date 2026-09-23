export interface AcademicProject {
  id: string;
  no: string;
  title: string;
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
}

export const ACADEMIC_PROJECTS: AcademicProject[] = [
  {
    id: 'deep-learning-cv-yolo-resnet',
    no: 'A01',
    title: 'YOLO & ResNet Tabanlı Derin Öğrenme ve Nesne Tespiti Sistemi',
    tagline: 'Bilgisayarlı görü, gerçek zamanlı nesne tespiti ve sınıflandırma modeli',
    category: 'Computer Vision / Deep Learning',
    technologies: ['YOLO (v8/v11)', 'ResNet-50', 'PyTorch', 'OpenCV', 'Python', 'CUDA / GPU'],
    description: 'Yüksek doğruluklu nesne tespiti ve çok sınıflı görüntü sınıflandırması için YOLO ve derin artık ağlar (ResNet) mimarilerinin entegrasyonuyla geliştirilen uçtan uca bilgisayarlı görü ve model eğitimi çalışması.',
    methodology: 'Evrişimli Sinir Ağları (CNN), Transfer Learning, Veri Artırma (Data Augmentation) ve Hiperparametre Optimizasyonu ile gerçek zamanlı çıkarım (inference) performansı sağlandı.',
    results: [
      'Gerçek zamanlı video ve yüksek çözünürlüklü karelerde yüksek mAP (Mean Average Precision) skoru',
      'ResNet derin katmanları ile karmaşık arka planlarda sıfıra yakın yanlış pozitif oranı',
      'Mobil ve kenar (edge) cihazlara dağıtım için model kuantalama ve hafifletme çalışmaları',
    ],
    dataset: 'Özel etiketli görüntü veri seti ve kıyaslama (benchmark) kütüphaneleri',
    year: '2025',
    cardBg: '#e9eef7',
  },
];
