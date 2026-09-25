import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import cities directly
const CITIES = [
  'adana', 'adiyaman', 'afyonkarahisar', 'agri', 'amasya', 'ankara', 'antalya', 'artvin', 'aydin',
  'balikesir', 'bilecik', 'bingol', 'bitlis', 'bolu', 'burdur', 'bursa', 'canakkale', 'cankiri',
  'corum', 'denizli', 'diyarbakir', 'edirne', 'elazig', 'erzincan', 'erzurum', 'eskisehir',
  'gaziantep', 'giresun', 'gumushane', 'hakkari', 'hatay', 'isparta', 'mersin', 'istanbul',
  'izmir', 'kars', 'kastamonu', 'kayseri', 'kirklareli', 'kirsehir', 'kocaeli', 'konya',
  'kutahya', 'malatya', 'manisa', 'kahramanmaras', 'mardin', 'mugla', 'mus', 'nevsehir',
  'nigde', 'ordu', 'rize', 'sakarya', 'samsun', 'siirt', 'sinop', 'sivas',
  'tekirdag', 'tokat', 'trabzon', 'tunceli', 'sanliurfa', 'usak', 'van', 'yozgat',
  'zonguldak', 'aksaray', 'bayburt', 'karaman', 'kirikkale', 'batman', 'sirnak', 'bartin',
  'ardahan', 'igdir', 'yalova', 'karabuk', 'kilis', 'osmaniye', 'duzce'
];

const SERVICES = ['yazilim', 'mobil-uygulama', 'web-tasarim', 'bilgisayar-muhendisi', 'e-ticaret'];

const BAYBURT_SPECIALIZED_SLUGS = [
  'bayburt-yazilim',
  'bayburt-yazilim-sirketi',
  'bayburt-yazilim-sirketleri',
  'bayburt-bilgisayar',
  'bayburt-bilgisayar-muhendisi',
  'bayburt-mobil-uygulama',
  'bayburt-web-tasarim',
  'bayburt-e-ticaret',
  'bayburt-otomasyon',
  'bayburt-bilgisayar-tamiri',
  'bayburt-yazilim-kursu',
  'bayburt-teknoloji',
  'bayburt-yapay-zeka',
  'bayburt-merkez-yazilim',
  'bayburt-demirozu-yazilim',
  'bayburt-aydintepe-yazilim',
  'bayburt-universitesi-yazilim',
  'bayburt-organize-sanayi-yazilim',
  'bayburt-muhasebe-yazilimi',
  'bayburt-restoran-otomasyonu',
  'bayburt-emlak-web-sitesi',
  'bayburt-kamu-yazilimi',
  'bayburt-ozel-yazilim',
  'bayburt-seo-ajansi',
];

const TECH_SLUGS = [
  'mobil-uygulama-gelistirme',
  'react-native-gelistirici',
  'yapay-zeka-muhendisligi',
  'savunma-sanayii-yazilim',
  'kubernetes-devops-uzmani',
  'turkiye-yazilim',
];

// Collect all unique slugs
const allSlugs = new Set();

// 1. Bayburt specialized
for (const s of BAYBURT_SPECIALIZED_SLUGS) {
  allSlugs.add(s);
}

// 2. Tech specialized
for (const s of TECH_SLUGS) {
  allSlugs.add(s);
}

// 3. 81 cities x 5 services
for (const city of CITIES) {
  for (const svc of SERVICES) {
    allSlugs.add(`${city}-${svc}`);
  }
}

console.log(`Total Programmatic SEO slugs: ${allSlugs.size}`);

const today = '2026-09-25';

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

  <!-- ========================================== -->
  <!-- ANA SAYFALAR & TEMEL PORTFOLYO ROTALARI    -->
  <!-- ========================================== -->
  <url>
    <loc>https://muhammetatmaca.com.tr/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://muhammetatmaca.com.tr/academic</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://muhammetatmaca.com.tr/apps</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://muhammetatmaca.com.tr/web</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://muhammetatmaca.com.tr/services</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://muhammetatmaca.com.tr/career</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://muhammetatmaca.com.tr/contact</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.80</priority>
  </url>

  <!-- ========================================== -->
  <!-- BAYBURT ÖNCELİKLİ HEDEF SAYFALARI (TR-69) -->
  <!-- ========================================== -->
`;

for (const s of BAYBURT_SPECIALIZED_SLUGS) {
  xml += `  <url>
    <loc>https://muhammetatmaca.com.tr/${s}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>\n`;
}

xml += `
  <!-- ========================================== -->
  <!-- TEKNOLOJİ & İLERİ DÜZEY MÜHENDİSLİK       -->
  <!-- ========================================== -->
`;

for (const s of TECH_SLUGS) {
  xml += `  <url>
    <loc>https://muhammetatmaca.com.tr/${s}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.90</priority>
  </url>\n`;
}

xml += `
  <!-- ========================================== -->
  <!-- TÜRKİYE GENELİ 81 İL PROGRAMMATİK SEO      -->
  <!-- ========================================== -->
`;

// Major cities get 0.90 priority, others get 0.85
const majorCities = new Set(['istanbul', 'ankara', 'izmir', 'bursa', 'samsun', 'antalya', 'trabzon', 'erzurum', 'gaziantep', 'kocaeli', 'konya']);

for (const city of CITIES) {
  if (city === 'bayburt') continue; // already added above
  const isMajor = majorCities.has(city);
  const prio = isMajor ? '0.90' : '0.85';

  xml += `\n  <!-- ${city.toUpperCase()} -->\n`;
  for (const svc of SERVICES) {
    const slug = `${city}-${svc}`;
    xml += `  <url>
    <loc>https://muhammetatmaca.com.tr/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${prio}</priority>
  </url>\n`;
  }
}

xml += `</urlset>\n`;

const targetPath = path.resolve(__dirname, '../artifacts/muhammet-portfolio/public/sitemap.xml');
fs.writeFileSync(targetPath, xml, 'utf8');
console.log(`Generated sitemap.xml at ${targetPath} successfully!`);
