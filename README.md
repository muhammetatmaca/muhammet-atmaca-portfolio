# Muhammet Atmaca - Full-Stack & Systems Engineering Portfolio

<div align="center">

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Website](https://img.shields.io/badge/Website-muhammetatmaca.com.tr-0272FC)](https://muhammetatmaca.com.tr)
[![GitHub Profile](https://img.shields.io/badge/GitHub-muhammetatmaca-181717?logo=github)](https://github.com/muhammetatmaca)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6)](https://www.typescriptlang.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)

**Kişisel portföy platformu, açık kaynaklı aviyonik/sistem kütüphaneleri, yapay zeka ters vekilleri ve kurumsal mühendislik projeleri vitrini.**

[Canlı Portföy Sitesi](https://muhammetatmaca.com.tr) • [Projeler](https://muhammetatmaca.com.tr/projects) • [Akademik & Sistem Çalışmaları](https://muhammetatmaca.com.tr/academic) • [İletişim](https://muhammetatmaca.com.tr/contact)

</div>

---

## 1. Genel Bakış

Bu monorepo; web platformları, mobil uygulamalar (React Native), aviyonik ve güvenlik-kritik gömülü sistemler (Ada/SPARK), makine öğrenimi ve bilişsel temsil mühendisliği (Representation Engineering) alanındaki mühendislik çalışmalarımı sergileyen resmi portföy sistemidir.

Proje, modern frontend mimarisi (React 19, TypeScript, Tailwind CSS, Vite) üzerinde yüksek performanslı, SEO uyumlu ve modüler bir mimariyle geliştirilmiştir.

---

## 2. Öne Çıkan Mühendislik Projeleri

### 2.1. [LexicalLayer](https://github.com/muhammetatmaca/lexicallayer) — Real-Time Representation Engineering & LoRA Steering Gateway
* **Alan:** LLM Agents, Representation Engineering, Edge Gateway, Machine Learning
* **Teknolojiler:** Next.js 16 (Turbopack), TypeScript, Python 3.11, PyTorch, Safetensors, Cloudflare Pages, npm SDK (`@lexicallayer/sdk`)
* **Canlı Yayın:** [lexicallayer.muhammetatmaca.com.tr](https://lexicallayer.muhammetatmaca.com.tr)
* **Özet:** Üretici yapay zeka modellerindeki sentetik klişeleri ("AI slop") ortadan kaldıran; kullanıcı metinlerinden Rank-16 LoRA adaptörleri (`user_steered_rank16.safetensors`), residual steering vektörleri ve pre-softmax logit warping bias matrisleri sentezleyen ters vekil (reverse proxy) platformu ve npm SDK kütüphanesi.

### 2.2. [Ada SPARK Aviyonik Veri Sıkıştırma Süiti](https://github.com/muhammetatmaca/ada-spark-compression)
* **Alan:** Aviyonik, Savunma Sanayii, Güvenlik-Kritik Gömülü Sistemler, Biçimsel Yöntemler (Formal Methods)
* **Standartlar:** DO-178C Level-A & STANAG-4586 Uyumlu
* **Teknolojiler:** Ada 2012 / SPARK, GNATprove, Formal Verification, C Embedded Binding, Deterministik Sıkıştırma
* **Özet:** İnsansız hava araçları (İHA) görev bilgisayarları ve yer kontrol istasyonları arasında dar bantlı taktik hatlarda çalışan, biçimsel yöntemlerle matematiksel olarak kanıtlanmış (AoRTE - Absence of Runtime Errors), sıfır dinamik bellek tahsisli (Zero-Heap) ve deterministik kayıpsız telemetri sıkıştırma motoru.

### 2.3. AI Destekli Otonom Yörünge Yönetimi ve Pasif Kaçınma Sistemi
* **Alan:** Uzay Sistemleri, Fizik Destekli Yapay Zeka (Physics-Informed ML)
* **Akademik Bildiri:** Ulusal Havacılık ve Uzay Kongresi (UHUK) Bildirisi • İMECE Uydusu Referanslı
* **Teknolojiler:** Bi-LSTM, Physics-Informed Loss, SGP4 Propagator, GMAT, Kalman Filter, Python
* **Özet:** Alçak Dünya Yörüngesi'nde (LEO) uzay enkazı çarpışmalarını; Güneş radyasyon basıncı (SRP), J2 basıklığı ve atmosferik balistik sürtünme (B-DRAG) gibi doğal kuvvetleri kullanarak %91.7 oranında sıfır yakıtla bertaraf eden otonom yörünge mekaniği sistemi.

### 2.4. LoRaWAN Edge AI & Sinyal İyileştirme
* **Alan:** IoT, Gömülü Sistemler, Uç Birim Yapay Zeka
* **Teknolojiler:** ESP32, Semtech LoRa, C/C++, TensorFlow Lite for Microcontrollers, Kalman Filtresi
* **Özet:** Mikrodenetleyici üzerinde çalışan Kalman filtreleme ve TFLite Micro LSTM mimarisi ile paket çarpışmalarını ve parparazitleri sahada otonom restore eden Self-Healing Mesh ağı.

---

## 3. Monorepo Mimarisi ve Paket Yapısı

```
muhammet-atmaca-portfolio/
├── artifacts/
│   ├── muhammet-portfolio/        # Ana React 19 + TypeScript portföy web uygulaması
│   │   ├── src/data/              # Web ve akademik proje veri modelleri
│   │   │   ├── careerAndWeb.ts    # Web projeleri (LexicalLayer, Ada SPARK, Doğanlar, vb.)
│   │   │   └── academicProjects.ts# Havacılık, uzay ve savunma sanayii projeleri
│   │   └── src/pages/             # Sayfa bileşenleri ve yönlendirme yapısı
│   ├── api-server/                # Arka plan servisleri ve API köprüsü
│   └── mockup-sandbox/            # Cihaz mockup ve prototip render ortamı
├── packages/
│   └── react-native-teleflow-prompter/ # Reusable React Native paketi
└── package.json                   # pnpm workspace kök konfigürasyonu
```

---

## 4. Yerel Kurulum ve Çalıştırma

### Gereksinimler
* Node.js 18+
* pnpm (`npm install -g pnpm`)

### Adımlar

1. Depoyu klonlayın:
```bash
git clone https://github.com/muhammetatmaca/muhammet-atmaca-portfolio.git
cd muhammet-atmaca-portfolio
```

2. Bağımlılıkları kurun:
```bash
pnpm install
```

3. Portföy uygulamasını başlatın:
```bash
pnpm run dev
```

4. Üretim derlemesi (Production Build):
```bash
pnpm run build
```

---

## 5. İletişim

**Muhammet Atmaca**  
* **Web Sitesi:** [muhammetatmaca.com.tr](https://muhammetatmaca.com.tr)  
* **GitHub:** [@muhammetatmaca](https://github.com/muhammetatmaca)  
* **E-posta:** info@muhammetatmaca.com.tr  

---

## 6. Lisans

Bu depo [MIT](LICENSE) lisansı altında sunulmaktadır.
