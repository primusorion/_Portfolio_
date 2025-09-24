// Utility to fetch a file and trigger a forced download in the browser.
// Works around browsers/extensions that open PDFs in a preview tab instead of downloading.
export default async function downloadResume(url, filename) {
  try {
    const resp = await fetch(url, { cache: 'no-store' });
    console.log('downloadResume: response status=', resp.status, 'content-type=', resp.headers.get('content-type'));
    if (!resp.ok) throw new Error('Network response was not ok: ' + resp.status + ' ' + resp.statusText);
    const blob = await resp.blob();
    const size = blob.size || 0;
    // If server didn't return a PDF, try to read the leading bytes as text for diagnostics
    const ct = (resp.headers.get('content-type') || '').toLowerCase();
    if (!ct.includes('pdf')) {
      try {
        const txt = await resp.clone().text();
        console.warn('downloadResume: non-pdf response snippet=', txt.slice(0, 256));
      } catch (e) {
        console.warn('downloadResume: failed to read non-pdf text');
      }
    }
    const blobUrl = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = blobUrl;
    a.download = filename || 'resume.pdf';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(blobUrl);
    a.remove();
    console.log('downloadResume: success, bytes=', size);
  } catch (err) {
    console.error('Download failed', err);
    // Fallback: open in new tab so user can at least view it
    window.open(url, '_blank');
  }
}
