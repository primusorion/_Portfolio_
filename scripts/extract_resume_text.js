const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const pdfPath = path.join(__dirname, '..', 'public', 'Sai-Pradhun-Gudipudi_.pdf');

if (!fs.existsSync(pdfPath)) {
  console.error('PDF not found at', pdfPath);
  process.exit(2);
}

const dataBuffer = fs.readFileSync(pdfPath);

(async () => {
  try {
    const data = await pdf(dataBuffer);
    console.log('---PDF TEXT START---');
    console.log(data.text);
    console.log('---PDF TEXT END---');
  } catch (e) {
    console.error('Failed to parse PDF', e);
    process.exit(1);
  }
})();
