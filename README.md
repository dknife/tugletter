# 동명대학교 게임학부 게임그래픽전공 뉴스레터 (tugletter)

게임챌린지 소식과 게임학부 분기별 소식지를 모아 보여주는 정적 웹사이트입니다.

**🌐 배포 주소: https://dknife.github.io/tugletter/**

GitHub Pages(`main` 브랜치 루트)로 서비스됩니다. `main` 에 푸시하면 자동 반영됩니다.
`.nojekyll` 로 Jekyll 처리를 끄고, 모든 경로를 상대경로로 작성해 `/tugletter/` 하위에서 동작합니다.

## 게임학부 소식 자동 갱신
학과 공지 게시판 제목은 `.github/workflows/update-news.yml` 이 **매일 06:00(KST)** `scrape-news.js` 를
실행해 `news.js` 를 갱신·커밋합니다. (저장소 Actions 탭에서 수동 실행도 가능)
정적 페이지는 브라우저에서 tu.ac.kr 을 직접 호출할 수 없어(CORS), 이렇게 서버 밖에서 수집해 반영합니다.

## 구성 파일
- `index.html` — 메인 홈페이지 (게임챌린지 2026 · 게임학부 소식 · 소식지 아카이브)
- `newsletter.html` — 소식지 1개를 보여주는 템플릿. `newsletter.html?id=<호ID>` 로 열립니다.
- `data.js` — 소식/소식지 **공통 데이터**. 내용 수정은 여기만 고치면 됩니다.
- `assets/cover-*.jpg` — 각 소식지 대표 이미지(Sway에서 추출).

바로 쓰려면 `index.html` 을 더블클릭해 브라우저로 열면 됩니다.

## Sway 소식지 내용 갱신 방법
Sway는 자바스크립트로 렌더링되어 일반 요청으로는 본문을 가져올 수 없어,
헤드리스 브라우저(Microsoft Edge + Playwright)로 추출합니다.

```powershell
npm install            # 최초 1회 (playwright-core)
node scrape.js         # 본문/이미지 URL 추출 → scraped.json
node dl.js             # 각 호 대표(커버) 이미지 → assets/cover-*.jpg
node dl-gallery.js     # 각 호 포토 갤러리(최대 12장) → assets/<id>/NN.jpg
```

- 커버는 `data.js` 각 항목의 `cover`, 갤러리는 `window.GALLERY` 에 연결됩니다.

- 추출 대상 URL은 `scrape.js` 의 `TARGETS` 배열에 있습니다. 새 호가 생기면 여기에 추가하세요.
- 추출된 원문은 `scraped.json` 에서 확인할 수 있고, 이를 바탕으로 `data.js` 의 해당 호 내용을 다듬습니다.

## 데이터 출처
- 게임챌린지 2026: https://dknife.github.io/GameChallenge2026/
  - 메인 화면의 **제4회 현장 사진**은 이 사이트의 시상식/수상/전시 이미지를 받아 `assets/gc2026/` 에 저장하고 `index.html` 의 `GC2026` 배열에 연결했습니다.
- 학과 공지: https://www.tu.ac.kr/gart/sub05_01.do
- 소식지 원본(Sway): 각 `data.js` 항목의 `sourceSway` 참고
