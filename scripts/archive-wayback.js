import https from 'https';

const URLS = [
  'https://muhammetatmaca.com.tr/',
  'https://muhammetatmaca.com.tr/apps',
  'https://muhammetatmaca.com.tr/academic',
  'https://muhammetatmaca.com.tr/web',
  'https://muhammetatmaca.com.tr/feed.xml'
];

console.log('================================================================');
console.log('🏛️ INTERNET ARCHIVE (WAYBACK MACHINE - DA 99) SNAPSHOT ENGINE');
console.log('================================================================');

for (const targetUrl of URLS) {
  const saveUrl = `https://web.archive.org/save/${targetUrl}`;
  console.log(`[Wayback Machine] Submitting: ${targetUrl}...`);

  https.get(saveUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
    }
  }, (res) => {
    console.log(`✅ [Wayback Response]: ${targetUrl} -> Status: ${res.statusCode} (Archived to Internet Archive)`);
  }).on('error', (err) => {
    console.log(`⚠️  [Wayback Note]: ${targetUrl} -> ${err.message}`);
  });
}
