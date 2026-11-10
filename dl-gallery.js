// Download per-issue image galleries via Edge context.
const { chromium } = require('playwright-core');
const fs = require('fs');
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const d = require('./scraped.json');
const CAP = 12; // max images per issue

const chrome = /story\.png|Layout\w+World\.png|traveling_dots|\/Theme|logo|avatar|162062840102_Content/i;

function pickImages(issue) {
  const imgs = (d[issue].images || []).filter(u => /\/s\/[^/]+\/images\//.test(u) && !chrome.test(u));
  const byId = new Map(); // id -> best url (first appearance order preserved)
  for (const u of imgs) {
    const id = (u.match(/\/images\/([^?]+)/) || [])[1];
    if (!id) continue;
    const q = +((u.match(/quality=(\d+)/) || [])[1] || 0);
    const cur = byId.get(id);
    if (!cur || q > cur.q) byId.set(id, { url: u, q });
  }
  return [...byId.values()].map(v => v.url).slice(0, CAP);
}

(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: EDGE });
  const ctx = await browser.newContext();
  const manifest = {};
  for (const issue of Object.keys(d)) {
    const urls = pickImages(issue);
    const dir = `assets/${issue}`;
    fs.mkdirSync(dir, { recursive: true });
    const files = [];
    for (let i = 0; i < urls.length; i++) {
      let done = false;
      for (let attempt = 1; attempt <= 4 && !done; attempt++) {
        try {
          const resp = await ctx.request.get(urls[i], { headers: { referer: 'https://sway.cloud.microsoft/' }, timeout: 30000 });
          if (!resp.ok()) { console.log(`  ✗ ${issue}[${i}] HTTP ${resp.status()}`); break; }
          const buf = await resp.body();
          if (buf.length < 3000) { console.log(`  · ${issue}[${i}] skip tiny ${buf.length}b`); break; }
          const file = `${dir}/${String(i + 1).padStart(2, '0')}.jpg`;
          fs.writeFileSync(file, buf);
          files.push(file);
          done = true;
        } catch (e) {
          if (attempt === 4) { console.log(`  ✗ ${issue}[${i}] ${e.message.split('\n')[0]}`); }
          else { await new Promise(r => setTimeout(r, 800 * attempt)); }
        }
      }
      await new Promise(r => setTimeout(r, 120)); // gentle pacing
    }
    manifest[issue] = files;
    console.log(`✓ ${issue}: ${files.length} images`);
  }
  await browser.close();
  fs.writeFileSync('_gallery.json', JSON.stringify(manifest, null, 2));
  console.log('\nwrote _gallery.json');
})();
