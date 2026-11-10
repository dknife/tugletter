# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static newsletter site for 동명대학교 게임학부 게임그래픽전공 (Dongmyong Univ. Game Graphics major).
No build step, no framework — plain HTML/CSS/JS opened directly or served by GitHub Pages.
Live: **https://dknife.github.io/tugletter/** (GitHub Pages, `main` branch root; account `dknife`).

## Architecture

The site is **data-driven from a few globals**, not hand-written per page:

- `index.html` — home. Renders everything from `window.*` globals: the 게임학부 소식 **ticker** (from `NEWS`/`NEWS_URL`), the 소식지 아카이브 cards (from `ARCHIVE`), the 현장 스케치 photo strip (from `GALLERY`), and the 제4회 게임챌린지 2026 gallery (from the inline `GC2026` array). Also contains the shared lightbox.
- `newsletter.html` — a **single reusable template** for one 소식지, opened as `newsletter.html?id=<id>`. Reads the `id` query param, finds the matching `ARCHIVE` entry, and renders its sections + `GALLERY[id]` photos + prev/next pager. Not one file per issue.
- `data.js` — the content source of truth. Defines `window.ARCHIVE` (issue metadata + curated `sections`), `window.GALLERY` (per-issue image path arrays), `window.MONTHS`, and a now-unused `window.NEWS`. **Edit content here**, and it propagates to both pages.
- `news.js` — **generated, do not hand-edit.** Defines `window.NEWS` + `window.NEWS_URL`, overriding data.js's NEWS (loaded after it in index.html). Produced by `scrape-news.js`.

Key cross-cutting conventions:
- All asset/page paths are **relative** (e.g. `assets/...`, `newsletter.html?id=...`) so the site works under `/tugletter/` on Pages. Don't introduce leading-slash absolute paths.
- `ARCHIVE` is ordered **newest-first**; the newsletter pager treats `idx-1` as newer, `idx+1` as older.
- An `ARCHIVE` entry with an `external` URL (e.g. the `2026-special` item linking to GameChallenge2026) links out in a new tab instead of to an internal `newsletter.html` page; both the home cards and the pager special-case this.
- Images live under `assets/`: `cover-<id>.jpg` (card/hero covers), `<id>/NN.jpg` (per-issue galleries), `gc2026/*` (제4회 2026 photos).

## Data pipeline (scrapers)

Content is scraped, not authored live, because the target pages can't be fetched from a browser (Sway is JS-rendered; tu.ac.kr is cross-origin/CORS-blocked). Run from the repo root with Node:

```bash
npm install            # once — installs playwright-core
node scrape.js         # Sway 소식지 bodies+image URLs (headless Edge) -> scraped.json
node dl.js             # per-issue cover images -> assets/cover-*.jpg   (reads _covers.json)
node dl-gallery.js     # per-issue galleries (<=12 each) -> assets/<id>/  (writes _gallery.json)
node scrape-news.js    # tu.ac.kr board titles -> news.js
```

- `scrape.js` / `dl.js` / `dl-gallery.js` drive **headless Microsoft Edge** via playwright-core; they hardcode the Edge path `C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe`. After scraping, the GALLERY block in `data.js` must be regenerated/merged (see how it was appended) and curated text written by hand into `ARCHIVE[*].sections`.
- `scrape-news.js` uses only Node built-ins (no browser) — plain HTTPS fetch + HTML table parse of `https://www.tu.ac.kr/gart/sub05_01.do`. It is the one scraper that also runs in CI.
- Underscore files (`_board.html`, `_covers.json`, `_gallery.json`) and `scraped.json` are gitignored intermediates, regenerable by the scripts above.

## Deploy & automation

- Push to `main` → GitHub Pages rebuilds automatically. `.nojekyll` disables Jekyll so underscore/asset files are served verbatim.
- `.github/workflows/update-news.yml` runs `scrape-news.js` daily (06:00 KST) and `workflow_dispatch`, committing an updated `news.js` so the live ticker stays current without a server.
- To verify a Pages deploy: `gh api repos/dknife/tugletter/pages/builds/latest --jq .status` (wait for `built`).

## Adding a new 소식지

1. Add image URLs to `scrape.js` TARGETS (and `scrape-news.js` is unrelated), run the scrapers to pull body + images.
2. Add an `ARCHIVE` entry (newest-first position) in `data.js` with `id`, `issue`, `title`, `period`, `cover`, and curated `sections`; add its `GALLERY[id]` array.
3. No page wiring needed — `newsletter.html?id=<newid>` and the home card render automatically.
