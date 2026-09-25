import fs from 'node:fs';
import path from 'node:path';

const services = [
  {
    id: '1',
    category: 'Mobil Uygulama Geliştirme',
    categoryId: '1',
    name: 'iOS ve Android Mobil Uygulama Geliştirme',
    price: '25000',
    description: 'React Native ve Flutter ile App Store ve Google Play uyumlu, 50+ canlı uygulama tecrübesiyle anahtar teslim mobil yazılım geliştirme.',
    url: 'https://muhammetatmaca.com.tr/mobil-uygulama-gelistirme',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '2',
    category: 'Web Tasarım & Kurumsal Yazılım',
    categoryId: '2',
    name: 'Kurumsal Web Tasarım ve Web Sitesi Geliştirme',
    price: '15000',
    description: 'Modern, ultra hızlı, mobil uyumlu ve SEO odaklı kurumsal web platformu ve yönetim paneli tasarımı.',
    url: 'https://muhammetatmaca.com.tr/web',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '3',
    category: 'E-Ticaret Çözümleri',
    categoryId: '3',
    name: 'E-Ticaret Sitesi ve Online Satış Altyapısı',
    price: '20000',
    description: 'Güvenli ödeme altyapısı (İyzico/PayTR), sepet yönetimi, stok takibi ve mobil uyumlu modern e-ticaret platformu.',
    url: 'https://muhammetatmaca.com.tr/bayburt-e-ticaret',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '4',
    category: 'İşletme Otomasyonu',
    categoryId: '4',
    name: 'Özel İşletme Otomasyonu ve Muhasebe Entegrasyonu',
    price: '18000',
    description: 'Restoran adisyon, emlak portalları, stok-fatura otomasyonu ve işletmelere özel masaüstü/web yönetim yazılımları.',
    url: 'https://muhammetatmaca.com.tr/bayburt-otomasyon',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '5',
    category: 'Yapay Zeka & AR-GE',
    categoryId: '5',
    name: 'Yapay Zeka ve Görüntü İşleme (Computer Vision)',
    price: '35000',
    description: 'YOLOv8 ve ResNet tabanlı derin öğrenme, nesne tespiti, sınıflandırma ve kamera tabanlı endüstriyel yapay zeka sistemleri.',
    url: 'https://muhammetatmaca.com.tr/academic',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '6',
    category: 'Savunma Sanayii & Özel Yazılım',
    categoryId: '6',
    name: 'Savunma Sanayii ve Simülasyon Yazılımları',
    price: '50000',
    description: 'Uydu yörünge algoritmaları, pasif çarpışma önleme sistemleri ve görev kritik mühendislik simülasyonları.',
    url: 'https://muhammetatmaca.com.tr/academic',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '7',
    category: 'Mobil Uygulama Bakım',
    categoryId: '1',
    name: 'Mobil Uygulama Güncelleme, Bakım ve Mağaza Onayı',
    price: '10000',
    description: 'Mevcut iOS ve Android uygulamalarınızın SDK güncellemeleri, hata onarımları ve App Store/Google Play mağaza onay süreçleri.',
    url: 'https://muhammetatmaca.com.tr/apps',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  },
  {
    id: '8',
    category: 'SEO & Dijital Büyüme',
    categoryId: '5',
    name: 'Teknik SEO ve Arama Motoru Optimizasyonu Danışmanlığı',
    price: '12000',
    description: 'Google, Yandex ve Bing arama sonuçlarında ilk sayfaya çıkmak için teknik SEO, Schema yapılandırması ve indeksleme hızlandırma.',
    url: 'https://muhammetatmaca.com.tr/bayburt-seo-ajansi',
    picture: 'https://muhammetatmaca.com.tr/og-image.png'
  }
];

// 1. Build YML (Yandex Market Language)
let yml = `<?xml version="1.0" encoding="UTF-8"?>
<yml_catalog date="2026-09-26 00:15">
  <shop>
    <name>Muhammet Atmaca — Mobil Uygulama &amp; Web Yazılım</name>
    <company>Muhammet Atmaca / VirelonSoft</company>
    <url>https://muhammetatmaca.com.tr/</url>
    <currencies>
      <currency id="TRY" rate="1"/>
    </currencies>
    <categories>
      <category id="1">Mobil Uygulama Geliştirme</category>
      <category id="2">Web Tasarım &amp; Kurumsal Yazılım</category>
      <category id="3">E-Ticaret Çözümleri</category>
      <category id="4">İşletme Otomasyonu</category>
      <category id="5">Yapay Zeka &amp; AR-GE</category>
    </categories>
    <offers>
`;

for (const s of services) {
  yml += `      <offer id="${s.id}" available="true">
        <name>${s.name}</name>
        <url>${s.url}</url>
        <price>${s.price}</price>
        <currencyId>TRY</currencyId>
        <categoryId>${s.categoryId}</categoryId>
        <picture>${s.picture}</picture>
        <description>${s.description}</description>
        <param name="Kategori">${s.category}</param>
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

console.log('SUCCESS: yandex_hizmetler.yml and yandex_hizmetler.csv generated!');
