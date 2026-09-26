import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://muhammetatmaca.com.tr';
const PUBLIC_DIR = path.resolve(process.cwd(), 'artifacts/muhammet-portfolio/public');
const OUTPUT_FILE = path.join(PUBLIC_DIR, 'image-sitemap.xml');

console.log('================================================================');
console.log('🖼️ GOOGLE IMAGE SITEMAP GENERATOR (xmlns:image)');
console.log('================================================================');

function escapeXml(unsafe) {
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const entries = [];

// 1. Homepage & General Brand Images
entries.push({
  url: `${SITE_URL}/`,
  images: [
    {
      loc: `${SITE_URL}/og-image.png`,
      title: 'Muhammet Atmaca — Mobil & Web Yazılım Mühendisi',
      caption: 'Muhammet Atmaca 50+ mobil uygulama geliştiren yazılım mühendisi portfolyosu.',
    },
    {
      loc: `${SITE_URL}/images/bayburt-software-office.jpg`,
      title: 'VirelonSoft Bayburt Yazılım & Bilgisayar Mühendisliği AR-GE Ofisi',
      caption: 'Muhammet Atmaca yönetimindeki VirelonSoft Bayburt merkezi.',
      geo_location: 'Bayburt, Türkiye',
    },
    {
      loc: `${SITE_URL}/images/bayburt-office-reception.jpg`,
      title: 'Bayburt Yazılım Danışmanlığı ve Mobil Uygulama Geliştirme Karşılama Alanı',
      caption: 'Bayburt merkezli kurumsal yazılım ve bilişim danışmanlığı ofis alanı.',
      geo_location: 'Bayburt, Türkiye',
    },
  ],
});

// 2. Apps Directory & Individual App Screenshots
const appsDir = path.join(PUBLIC_DIR, 'apps');
if (fs.existsSync(appsDir)) {
  const appFolders = fs.readdirSync(appsDir).filter((item) => {
    return fs.statSync(path.join(appsDir, item)).isDirectory();
  });

  console.log(`[Image Sitemap] ${appFolders.length} adet mobil uygulama klasörü bulundu.`);

  for (const slug of appFolders) {
    const appPath = path.join(appsDir, slug);
    const files = fs.readdirSync(appPath);
    const appImages = [];

    const formattedTitle = slug
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

    for (const file of files) {
      if (/\.(webp|png|jpg|jpeg)$/i.test(file)) {
        const fileUrl = `${SITE_URL}/apps/${slug}/${file}`;
        const isIcon = file.startsWith('icon');
        appImages.push({
          loc: fileUrl,
          title: isIcon ? `${formattedTitle} Mobil Uygulama Logosu` : `${formattedTitle} Ekran Görüntüsü`,
          caption: `${formattedTitle} — Muhammet Atmaca tarafından geliştirilen iOS & Android mobil uygulama görseli.`,
        });
      }
    }

    if (appImages.length > 0) {
      entries.push({
        url: `${SITE_URL}/apps/${slug}`,
        images: appImages,
      });
    }
  }
}

// Generate XML
let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
xml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

let totalImages = 0;

for (const entry of entries) {
  xml += `  <url>\n`;
  xml += `    <loc>${escapeXml(entry.url)}</loc>\n`;
  for (const img of entry.images) {
    totalImages++;
    xml += `    <image:image>\n`;
    xml += `      <image:loc>${escapeXml(img.loc)}</image:loc>\n`;
    if (img.title) {
      xml += `      <image:title>${escapeXml(img.title)}</image:title>\n`;
    }
    if (img.caption) {
      xml += `      <image:caption>${escapeXml(img.caption)}</image:caption>\n`;
    }
    if (img.geo_location) {
      xml += `      <image:geo_location>${escapeXml(img.geo_location)}</image:geo_location>\n`;
    }
    xml += `    </image:image>\n`;
  }
  xml += `  </url>\n`;
}

xml += `</urlset>\n`;

fs.writeFileSync(OUTPUT_FILE, xml, 'utf8');

console.log(`✅ [Tamamlandı] image-sitemap.xml üretildi:`);
console.log(`   - Toplam Sayfa URL'si: ${entries.length}`);
console.log(`   - Toplam İndekslenen Görsel: ${totalImages}`);
console.log(`   - Dosya Yolu: ${OUTPUT_FILE}`);
