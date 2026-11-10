// Headless Edge scraper for Sway newsletters.
// Usage: node scrape.js
const { chromium } = require('playwright-core');
const fs = require('fs');

const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';

const TARGETS = [
  { id: '2025-q4',       url: 'https://sway.cloud.microsoft/JPasLtlByjTwysGH?ref=Link' },
  { id: '2025-q3',       url: 'https://sway.cloud.microsoft/tQIOEZ2r1ga8diCJ' },
  { id: '2025-q2',       url: 'https://sway.cloud.microsoft/hGYsB85tFNQAQOts?ref=Link' },
  { id: '2025-q1',       url: 'https://sway.cloud.microsoft/rYZfrSgUnXarDkCj?ref=Link' },
  { id: 'special',       url: 'https://sway.cloud.microsoft/4PpAiwGK3vnc9XkW?ref=Link' },
  { id: 'newsletter-12', url: 'https://sway.cloud.microsoft/OLBkHWE0q6N9xHAE?ref=Link' },
  { id: 'newsletter-a',  url: 'https://sway.cloud.microsoft/JyG4YuqvjXgXIaay' },
  { id: 'newsletter-b',  url: 'https://sway.cloud.microsoft/6Xof9pBhGgbdZeKp?ref=Link' },
];

async function autoScroll(page) {
  // Sway lazy-loads cards as they enter the viewport. Scroll the whole doc a few times.
  for (let pass = 0; pass < 3; pass++) {
    await page.evaluate(async () => {
      const step = Math.max(400, window.innerHeight * 0.8);
      for (let y = 0; y <= document.body.scrollHeight + 2000; y += step) {
        window.scrollTo(0, y);
        await new Promise(r => setTimeout(r, 250));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(1200);
  }
}

async function extract(page) {
  return await page.evaluate(() => {
    const clean = s => (s || '').replace(/\s+/g, ' ').trim();
    // Title
    const title = clean(document.title);
    // Headings in document order
    const headings = [...document.querySelectorAll('h1,h2,h3,h4')]
      .map(h => clean(h.innerText)).filter(Boolean);
    // All visible text blocks
    const blocks = [];
    document.querySelectorAll('p, li, h1, h2, h3, h4, blockquote, figcaption, div[role="heading"]').forEach(el => {
      const t = clean(el.innerText);
      if (t && t.length > 1) blocks.push(t);
    });
    // Dedupe consecutive / nested duplicates
    const seen = new Set();
    const text = blocks.filter(t => { if (seen.has(t)) return false; seen.add(t); return true; });
    // Images (both <img> and CSS background-image)
    const imgs = new Set();
    document.querySelectorAll('img').forEach(i => { if (i.src && i.naturalWidth > 120) imgs.add(i.src); });
    document.querySelectorAll('*').forEach(el => {
      const bg = getComputedStyle(el).backgroundImage;
      const m = bg && bg.match(/url\("?(https?:[^")]+)"?\)/);
      if (m) imgs.add(m[1]);
    });
    return { title, headings, text, images: [...imgs] };
  });
}

(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: EDGE });
  const ctx = await browser.newContext({
    viewport: { width: 1280, height: 1000 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36',
    locale: 'ko-KR',
  });
  const results = {};
  for (const t of TARGETS) {
    const page = await ctx.newPage();
    try {
      console.log(`\n▶ ${t.id}  ${t.url}`);
      await page.goto(t.url, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {});
      await page.waitForTimeout(2500);
      await autoScroll(page);
      const data = await extract(page);
      results[t.id] = { url: t.url, ...data };
      console.log(`   title: ${data.title}`);
      console.log(`   headings: ${data.headings.length}, textBlocks: ${data.text.length}, images: ${data.images.length}`);
    } catch (e) {
      console.log(`   ERROR: ${e.message}`);
      results[t.id] = { url: t.url, error: e.message };
    } finally {
      await page.close();
    }
  }
  await browser.close();
  fs.writeFileSync('scraped.json', JSON.stringify(results, null, 2), 'utf8');
  console.log('\n✔ wrote scraped.json');
})();
