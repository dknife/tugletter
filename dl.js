// Download cover images via Edge context (so Sway CDN serves them).
const { chromium } = require('playwright-core');
const fs = require('fs');
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const covers = require('./_covers.json');

(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: EDGE });
  const ctx = await browser.newContext();
  const map = {};
  for (const [id, url] of Object.entries(covers)) {
    try {
      const resp = await ctx.request.get(url, { headers: { referer: 'https://sway.cloud.microsoft/' } });
      if (!resp.ok()) { console.log(`✗ ${id}: HTTP ${resp.status()}`); continue; }
      const buf = await resp.body();
      const file = `assets/cover-${id}.jpg`;
      fs.writeFileSync(file, buf);
      map[id] = file;
      console.log(`✓ ${id}: ${(buf.length/1024).toFixed(0)} KB -> ${file}`);
    } catch (e) { console.log(`✗ ${id}: ${e.message}`); }
  }
  await browser.close();
  console.log('\nDownloaded', Object.keys(map).length, 'covers');
})();
