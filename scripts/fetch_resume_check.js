const http = require('http');
const https = require('https');
const fs = require('fs');
const urls = [
  'http://localhost:3001/Sai-Pradhun-Gudipudi_.pdf',
  'http://localhost:3001/_Portfolio_/Sai-Pradhun-Gudipudi_.pdf'
];

function fetch(url) {
  return new Promise((resolve) => {
    const lib = url.startsWith('https') ? https : http;
    lib.get(url, (res) => {
      const statusCode = res && res.statusCode;
      const headers = res && res.headers;
      let len = 0;
      const chunks = [];
      res.on('data', (c) => { len += c.length; chunks.push(c); });
      res.on('end', () => {
        const buf = Buffer.concat(chunks);
        resolve({ url, statusCode, headers, len, firstBytes: buf.slice(0, 16).toString('utf8') });
      });
    }).on('error', (e) => {
      resolve({ url, error: e.message });
    });
  });
}

(async () => {
  for (const u of urls) {
    const r = await fetch(u);
    console.log('---');
    console.log('URL:', r.url);
    if (r.error) { console.log('error:', r.error); continue; }
  console.log('statusCode:', r.statusCode ?? '<none>');
  console.log('content-type:', r.headers ? r.headers['content-type'] : '<no headers>');
  console.log('content-length header:', r.headers ? r.headers['content-length'] : '<no headers>');
  console.log('downloaded bytes:', r.len ?? 0);
  console.log('first bytes (utf8):', JSON.stringify(r.firstBytes ?? ''));
  }
})();
