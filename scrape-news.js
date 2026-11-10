// Scrape 게임그래픽전공 공지 게시판 titles → news.js
// 정적 페이지를 file://로 열면 브라우저가 tu.ac.kr 을 직접 fetch 할 수 없어(CORS),
// 이 스크립트로 제목을 받아 news.js 에 저장합니다. 최신 소식 반영이 필요하면 다시 실행하세요.
//   node scrape-news.js
const https = require('https');
const fs = require('fs');

const BOARD = 'https://www.tu.ac.kr/gart/sub05_01.do';

function get(url) {
  return new Promise((resolve, reject) => {
    const opt = { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36', 'Accept-Language': 'ko-KR' } };
    https.get(url, opt, r => { let d = ''; r.setEncoding('utf8'); r.on('data', c => d += c); r.on('end', () => resolve(d)); }).on('error', reject);
  });
}

const decode = s => s
  .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
  .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ')
  .replace(/\s+/g, ' ').trim();

(async () => {
  const html = await get(BOARD);
  const tb = html.indexOf('<tbody'); const te = html.indexOf('</tbody>', tb);
  const body = html.slice(tb, te);
  const rows = body.split('<tr').slice(1);
  const items = [];
  for (const row of rows) {
    const a = row.match(/<a[^>]*href="([^"]+)"[^>]*title="([^"]*?)\s*자세히 보기"/);
    const dateM = row.match(/(\d{4}-\d{2}-\d{2})/);
    const nameM = row.match(/<td class="name">([^<]*)<\/td>/);
    const notice = /class="num">[\s\S]*?공지/.test(row);
    if (!a) continue;
    const title = decode(a[2]);
    if (!title) continue;
    items.push({
      title,
      date: dateM ? dateM[1] : '',
      name: nameM ? decode(nameM[1]) : '',
      notice,
      // 상세 글 주소(참고용). 요구사항에 따라 화면 링크는 게시판 목록으로 연결합니다.
      href: 'https://www.tu.ac.kr/gart/' + a[1].replace(/&amp;/g, '&').replace(/^\.?\//, ''),
    });
  }
  const out =
`/* 게임그래픽전공 공지 게시판에서 자동 수집한 제목 목록
   출처: ${BOARD}
   수집 스크립트: scrape-news.js  (갱신하려면  node scrape-news.js  재실행)
   총 ${items.length}건 */
window.NEWS_URL = ${JSON.stringify(BOARD)};
window.NEWS = ${JSON.stringify(items, null, 2)};
`;
  fs.writeFileSync('news.js', out, 'utf8');
  console.log(`✓ news.js 생성 — ${items.length}건`);
  items.slice(0, 8).forEach(i => console.log(`  · [${i.date}] ${i.title}`));
})();
