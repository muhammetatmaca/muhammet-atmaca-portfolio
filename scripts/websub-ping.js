import https from 'https';

const HUBS = [
  'https://pubsubhubbub.appspot.com/',
  'https://pubsubhubbub.superfeedr.com/',
];

const FEED_URL = 'https://muhammetatmaca.com.tr/feed.xml';

console.log('================================================================');
console.log('⚡ GOOGLE WEBSUB (PUBSUBHUBBUB) REAL-TIME INDEXING PING');
console.log('================================================================');
console.log(`[WebSub] Feed URL: ${FEED_URL}`);

for (const hub of HUBS) {
  const url = new URL(hub);
  const postData = new URLSearchParams({
    'hub.mode': 'publish',
    'hub.url': FEED_URL,
  }).toString();

  const options = {
    hostname: url.hostname,
    port: 443,
    path: url.pathname,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData),
      'User-Agent': 'MuhammetAtmaca-WebSub-Publisher/1.0',
    },
  };

  const req = https.request(options, (res) => {
    let body = '';
    res.on('data', (chunk) => (body += chunk));
    res.on('end', () => {
      if (res.statusCode === 204 || res.statusCode === 200) {
        console.log(`✅ [WebSub SUCCESS]: ${hub} -> Status: ${res.statusCode} (Published / Dispatched to Google Index)`);
      } else {
        console.log(`⚠️  [WebSub Response]: ${hub} -> Status: ${res.statusCode} ${body}`);
      }
    });
  });

  req.on('error', (e) => {
    console.error(`❌ [WebSub Error]: ${hub} -> ${e.message}`);
  });

  req.write(postData);
  req.end();
}
