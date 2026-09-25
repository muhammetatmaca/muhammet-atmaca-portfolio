import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITEMAP_PATH = path.resolve(__dirname, '../artifacts/muhammet-portfolio/public/sitemap.xml');
const CREDENTIALS_PATH = path.resolve(__dirname, '../service_account.json');

// 1. Read URLs from sitemap
const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf8');
const urlRegex = /<loc>(https:\/\/[^<]+)<\/loc>/g;
const urls = [];
let match;
while ((match = urlRegex.exec(sitemapContent)) !== null) {
  urls.push(match[1]);
}

console.log(`================================================================`);
console.log(`🚀 GOOGLE INDEXING API & CRAWL PING ENGINE`);
console.log(`================================================================`);
console.log(`[Google Indexing] Toplam ${urls.length} adet taranacak URL bulundu.`);

// 2. Ping Google Sitemap Ping Endpoint
async function pingGoogleSitemap() {
  const pingUrl = `https://www.google.com/ping?sitemap=https://muhammetatmaca.com.tr/sitemap.xml`;
  console.log(`\n[Ping] Googlebot Sitemap Ping endpointine sinyal gönderiliyor...`);
  try {
    const res = await fetch(pingUrl);
    console.log(`[Ping] Google Ping Yanıtı: ${res.status} ${res.statusText}`);
    console.log(`[Ping] Googlebot sitemap.xml dosyasını yeniden tarama kuyruğuna aldı.`);
  } catch (err) {
    console.warn(`[Ping] Ping uyarısı:`, err.message);
  }
}

// 3. Helper: Generate Google OAuth2 JWT Token using native crypto
function generateJwtToken(serviceAccount) {
  const now = Math.floor(Date.now() / 1000);
  const header = {
    alg: 'RS256',
    typ: 'JWT',
  };

  const claimSet = {
    iss: serviceAccount.client_email,
    scope: 'https://www.googleapis.com/auth/indexing',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  };

  const base64UrlHeader = Buffer.from(JSON.stringify(header)).toString('base64url');
  const base64UrlClaimSet = Buffer.from(JSON.stringify(claimSet)).toString('base64url');
  const signatureInput = `${base64UrlHeader}.${base64UrlClaimSet}`;

  const signer = crypto.createSign('RSA-SHA256');
  signer.update(signatureInput);
  const signature = signer.sign(serviceAccount.private_key, 'base64url');

  return `${signatureInput}.${signature}`;
}

// 4. Helper: Get Google Access Token
async function getAccessToken(serviceAccount) {
  const jwt = generateJwtToken(serviceAccount);
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Google Auth Hatası (${res.status}): ${errText}`);
  }

  const data = await res.json();
  return data.access_token;
}

// 5. Submit single URL to Google Indexing API
async function notifyGoogleUrl(accessToken, url) {
  const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      url,
      type: 'URL_UPDATED',
    }),
  });

  return {
    status: res.status,
    ok: res.ok,
    data: await res.json().catch(() => null),
  };
}

const HISTORY_PATH = path.resolve(__dirname, 'indexed-history.json');

// Load already indexed URLs
let indexedHistory = [];
if (fs.existsSync(HISTORY_PATH)) {
  try {
    indexedHistory = JSON.parse(fs.readFileSync(HISTORY_PATH, 'utf8'));
  } catch {}
}

const pendingUrls = urls.filter((u) => !indexedHistory.includes(u));
console.log(`[Google Indexing] Daha önce iletilen: ${indexedHistory.length}, Kalan: ${pendingUrls.length}`);

// 6. Main Orchestrator
async function main() {
  await pingGoogleSitemap();

  if (!fs.existsSync(CREDENTIALS_PATH)) {
    console.log(`\n----------------------------------------------------------------`);
    console.log(`⚠️  GOOGLE CLOUD SERVICE ACCOUNT (service_account.json) GEREKLİ`);
    console.log(`----------------------------------------------------------------`);
    console.log(`Google Indexing API doğrudan robot gibi arka planda çalışır.`);
    console.log(`Google'a saniyeler içinde 437 sayfayı zorla taratmak için:`);
    console.log(`\nAdım 1: Google Cloud Console'a girin: https://console.cloud.google.com/`);
    console.log(`Adım 2: 'Web Search Indexing API' (veya Indexing API) servisini Etkinleştirin.`);
    console.log(`Adım 3: 'IAM & Admin' -> 'Service Accounts' bölümünden bir Hizmet Hesabı oluşturun.`);
    console.log(`Adım 4: 'Keys' -> 'Add Key' -> 'JSON' diyerek anahtarı indirin ve proje ana dizinine 'service_account.json' adıyla yapıştırın.`);
    console.log(`Adım 5: Google Search Console'a gidip bu Hizmet Hesabının e-postasını (örn: bot@project.iam.gserviceaccount.com) 'Sahip (Owner)' olarak ekleyin.`);
    console.log(`Adım 6: Bu scripti tekrar çalıştırın: node scripts/google-indexing.js\n`);
    console.log(`Tüm bu adımları tamamladığında Googlebot sayfalarına akın edecektir!`);
    return;
  }

  if (pendingUrls.length === 0) {
    console.log(`\n🎉 Harika! Sitemap'teki tüm ${urls.length} URL zaten daha önce Google Indexing API ile iletildi.`);
    return;
  }

  try {
    const serviceAccount = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));
    console.log(`\n[Auth] Service Account doğrulandı: ${serviceAccount.client_email}`);
    console.log(`[Auth] Google Access Token alınıyor...`);
    const accessToken = await getAccessToken(serviceAccount);
    console.log(`[Auth] Access Token başarıyla alındı!`);

    console.log(`\n[Indexing] Kalan URL'ler Google Indexing API'ye gönderiliyor (Günde maksimum 200 kota)...`);

    const limit = Math.min(pendingUrls.length, 200);
    let successCount = 0;

    for (let i = 0; i < limit; i++) {
      const url = pendingUrls[i];
      process.stdout.write(`[${i + 1}/${limit}] Gönderiliyor: ${url} ... `);
      const result = await notifyGoogleUrl(accessToken, url);
      if (result.ok) {
        console.log(`✅ OK (${result.status})`);
        successCount++;
        indexedHistory.push(url);
        fs.writeFileSync(HISTORY_PATH, JSON.stringify(indexedHistory, null, 2), 'utf8');
      } else {
        const errorMsg = result.data?.error?.message || 'Bilinmeyen hata';
        console.log(`❌ Hata (${result.status}):`, errorMsg);
        if (result.status === 403 && errorMsg.includes('ownership')) {
          console.log(`\n🛑 DURDURULDU: URL Mülkiyeti Doğrulanamadı (403 Permission Denied)`);
          console.log(`Google, bu Hizmet Hesabının sitenin sahibi olduğunu henüz bilmiyor.`);
          console.log(`\nÇÖZÜM:`);
          console.log(`1. Google Search Console'a girin: https://search.google.com/search-console`);
          console.log(`2. Sol alttan 'Ayarlar' -> 'Kullanıcılar ve İzinler' -> 'Kullanıcı Ekle' deyin.`);
          console.log(`3. E-posta: ${serviceAccount.client_email}`);
          console.log(`4. İzin: 'Sahip' (veya 'Tam') seçip ekleyin.`);
          console.log(`(Eğer Search Console'da 'Sahip' seçeneği çıkmıyorsa: https://www.google.com/webmasters/verification/home adresine gidip mülkünüze 'Sahip Ekle' diyerek bu e-postayı yapıştırın).`);
          console.log(`5. Ekledikten sonra bu scripti tekrar çalıştırın!`);
          break;
        }
        if (result.status === 429) {
          console.log(`\n⚠️  Bugünkü Google Indexing API kotasına (200 URL/gün) ulaşıldı.`);
          console.log(`Kalan ${pendingUrls.length - successCount} URL için yarın kotanız sıfırlandığında script kaldığı yerden otomatik olarak devam edecektir.`);
          break;
        }
      }
      // Throttling: 200ms delay between API requests
      await new Promise((resolve) => setTimeout(resolve, 200));
    }

    console.log(`\n🎉 Bu oturumda ${successCount} adet URL Google Indexing API ile doğrudan Googlebot'a iletildi!`);
    console.log(`Toplam tamamlanan: ${indexedHistory.length}/${urls.length}`);
  } catch (err) {
    console.error(`\n[Google Indexing Hatası]:`, err.message);
  }
}

main();
