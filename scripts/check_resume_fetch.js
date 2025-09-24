const http = require('http');
const https = require('https');

async function check(url) {
  return new Promise((resolve) => {
    const lib = url.startsWith('https') ? https : http;
    const req = lib.get(url, (res) => {
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => {
        try {
          const buf = Buffer.concat(chunks || []);
          const start = buf.slice(0, 32).toString('utf8').replace(/\n/g, '');
          resolve({ url, statusCode: res.statusCode, headers: res.headers, size: buf.length, startsWith: start });
        } catch (e) {
          resolve({ url, statusCode: res.statusCode, headers: res.headers, size: chunks.length });
        }
      });
    });
    req.on('error', (err) => resolve({ url, error: String(err && err.message ? err.message : err) }));
    req.setTimeout(10000, () => { try { req.abort(); } catch(e){}; resolve({ url, error: 'timeout' }); });
  });
}

(async () => {
  const host = 'http://localhost:3001';
  const paths = [
    '/Sai-Pradhun-Gudipudi_.pdf',
    '/_Portfolio_/Sai-Pradhun-Gudipudi_.pdf'
  ];
  for (const p of paths) {
    const url = host + p;
    const r = await check(url);
    console.log(JSON.stringify(r, null, 2));
  }
})();
