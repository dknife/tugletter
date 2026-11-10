/* ============================================================
   동명대학교 게임학부 게임그래픽전공 뉴스레터 — 공통 데이터
   index.html 과 newsletter.html 이 함께 사용합니다.
   내용은 각 호의 Sway 소식지에서 추출해 정리했습니다.
   발행: 동명대학교 게임학부 강영민 교수 (ymkang@tu.ac.kr)
   ============================================================ */

window.MONTHS = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

/* ---------- 게임학부 소식 (학과 공지 기반) ---------- */
window.NEWS = [
  { date:'2026-11-05', cat:'봉사·모집', title:'「나를 담고, 안심을 잇다」 봉사활동 참여학생 모집', desc:'지역사회와 함께하는 게임학부 봉사활동 참여 학생을 모집합니다.' },
  { date:'2026-11-02', cat:'G-STAR', title:'G-STAR 2026 초대권 배부 및 등록 매뉴얼 안내', desc:'벡스코 G-STAR 2026 관람을 위한 초대권 배부 및 등록 방법 안내.' },
  { date:'2026-10-16', cat:'특강', title:'Mach Academy 4차 전문가 특강 안내', desc:'“게임의 첫인상을 디자인하다 – AI로 설계하는 게임 네이밍과 타이틀 디자인”' },
  { date:'2026-10-02', cat:'챌린지', title:'「2026 틔움띄움 챌린지」 참여 안내', desc:'학생 성장형 챌린지 프로그램 참여 안내.' },
  { date:'2026-09-01', cat:'장학', title:'2027학년도 신입생 장학 안내', desc:'게임그래픽전공 2027학년도 신입생 대상 장학 혜택 안내.' },
  { date:'2026-05-21', cat:'교과', title:'2026학년도 2학기 Mach Game Sprint2 교과목 안내', desc:'집중 게임 제작 스프린트 · 11/13(금)~11/15(일) 진행.' },
];

/* ---------- 게임학부 소식지 아카이브 (최신호 → 과거호 순서) ----------
   각 호는 사이트 내부 페이지(newsletter.html?id=...)로 연결됩니다.
   sourceSway 는 추출 원본 주소(참고용)이며 페이지에 링크로 노출되지 않습니다.
*/
window.ARCHIVE = [
  {
    id:'2026-special', issue:'2026 특별호', title:'제4회 TU 게임챌린지 2026',
    period:'2026 · 공식 사이트', pub:'TU 게임챌린지 2026', cover:'assets/gc2026/ceremony-ceremony-2.jpg',
    external:'https://dknife.github.io/GameChallenge2026/', latest:true,
  },
  {
    id:'2025-q4', issue:'2025 · 4분기', title:"동명대 게임학부 '25-4분기 소식지",
    period:'2025.10 – 12', pub:'2025.11.22 발행 · 강영민 교수', cover:'assets/cover-2025-q4.jpg',
    sourceSway:'https://sway.cloud.microsoft/JPasLtlByjTwysGH?ref=Link',
    intro:'G-Star 2025 전시와 잇따른 언론 조명으로 한 해의 결실이 빛난 4분기. 수상작들이 벡스코 무대에서 관람객을 만났습니다.',
    sections:[
      { heading:'G-Star 2025 전시 & 언론 보도', lead:'TU 게임챌린지 수상작 13편이 벡스코 동명대 부스에서 시연되었습니다.', items:[
        { cat:'게임메카', title:"〈파일 타워 디펜스〉, '미래 기대되는 인디게임 10선' 선정", desc:"게임메카 ‘지스타 2025서 만난 인디게임 10선’(11.16)에 소개. 컴퓨터의 파일·폴더·압축 시스템을 소재로 한 타워 디펜스로, 윈도우 95~98 감성과 ‘삭제 마법사’ 키워드로 향수를 자극합니다." },
        { cat:'게임동아', title:'“부산 지역 게임인재 양성에 앞장서는 동명대학교”', desc:'지스타2025(11.12~16) BTC관 웹젠 부스 뒤편에 부스를 열고 TU게임챌린지 수상 13개 작품을 시연. 윤장원 게임그래픽학과 교수는 “컨셉아트 부문을 포함해 플레이 가능한 13개 작품을 선별 시연했다”고 밝혔습니다.' },
        { cat:'현장', title:'4일간 뜨거웠던 동명대 부스', desc:'게임 굿즈(엽서·포토카드) 배포와 학생들의 적극적인 홍보로 행사 4일 내내 부스가 관람객으로 가득 찼습니다.' },
      ]},
      { heading:'행사 & 산업체 특강', lead:'연말 교육 성과를 공유하는 행사들이 이어졌습니다.', items:[
        { cat:'Conference', title:'제1회 Mach Academy Conference (12.11)', desc:'게임학부 교육 성과 논문 발표 및 게임 시연 · 15호관 210호.' },
        { cat:'RISE', title:'제1회 RISE-Edu Highlights Day (12.11)', desc:'RISE 기반 교육 성과 전시와 미래 교육 혁신 간담회, 학생 논문 성과 발표.' },
        { cat:'특강', title:'Mach Academy 2차 특강 — “게임의 완성, 플레이어와 만나는 순간” (11.19)', desc:'부산 모바일 게임 개발사 에버스톤 최경욱 대표·신승엽 프로그래머가 퍼블리싱·스토어 페이지·마케팅 전 과정을 강연. 동명관 210호 다목적홀.' },
      ]},
    ],
  },
  {
    id:'special', issue:'특별호', title:'게임학부 소식지 특별호 — TU 게임 챌린지',
    period:'2025.11', pub:'2025.11.04 발행 · 강영민 교수', cover:'assets/cover-special.jpg',
    sourceSway:'https://sway.cloud.microsoft/4PpAiwGK3vnc9XkW?ref=Link',
    intro:'제3회 TU 게임 챌린지 시상식을 집중 조명한 특별호. 중앙일보·국제신문·부산일보 등 다수 언론이 대회를 보도했습니다.',
    sections:[
      { heading:'제3회 TU 게임 챌린지 시상식 (10.24)', lead:'IEEE 부산섹션과 함께한 시상식에서 3개 트랙 20편이 수상했습니다.', items:[
        { cat:'게임시스템 대상', title:'〈푸드 앤 싱크홀〉 — 이효근 (게임공학과 3학년)', desc:'동명대학교 총장상과 상금 수상.' },
        { cat:'게임시스템 최우수상', title:'〈마음을 담아〉 — 김겸 (게임그래픽학과 2학년)', desc:'부산게임협회장상 수상.' },
        { cat:'그래픽 최우수상', title:'〈페로니스〉 — 플레소프스키흐 예카테리나 (게임그래픽학과 2학년)', desc:'러시아 유학생이 단독 최우수상을 차지했습니다.' },
        { cat:'IEEE 트랙 대상', title:'〈매직 브릭 인피니티〉 — 울산대 정예림·정현우', desc:'신설된 IEEE 트랙의 첫 대상.' },
        { cat:'집계', title:'대상 2 · 최우수 3 · 우수 8 · 장려 7 = 총 20편 수상', desc:'모든 수상작은 G-Star 2025(11.13~16, 벡스코)에서 전시되었습니다.' },
      ]},
      { heading:'수상 소감 & 전망', lead:'', items:[
        { cat:'게임그래픽학과 학과장', title:'서미라 교수', desc:'“RISE 체계 전환 이후 TU 게임 챌린지가 더욱 내실 있는 대회로 자리 잡고 있으며, 올해 작품 완성도가 지난해보다 크게 향상됐다.”' },
        { cat:'IEEE 부산섹션', title:'박동규 교수 (창원대)', desc:'“학생들이 스스로의 성과를 공개하고 인정받는 경험은 매우 의미 있는 교육 과정이다. 지역 청년들이 동등한 기회를 갖도록 트랙을 지원했다.”' },
      ]},
    ],
  },
  {
    id:'2025-q3', issue:'2025 · 3분기', title:'25-3 동명대학교 게임학부 소식지',
    period:'2025.07 – 09', pub:'강영민 교수', cover:'assets/cover-2025-q3.jpg',
    sourceSway:'https://sway.cloud.microsoft/tQIOEZ2r1ga8diCJ',
    intro:'제3회 TU 게임 챌린지 수상작 발표와 AI 기반 게임 제작 특강으로 분주했던 3분기 소식입니다.',
    sections:[
      { heading:'제3회 TU 게임 챌린지 수상작 발표', lead:'8월 29일 공고, 9월 1~5일 접수. 총 37편이 접수되어 수상작은 G-Star 2025에 전시됩니다.', items:[
        { cat:'Track1-A 대상', title:'〈Food And Sinkhole〉 — 이효근, 이주현, 서한결', desc:'게임시스템 분야 대상작.' },
        { cat:'Track1-A 최우수상', title:'〈마음을 담아〉 — 김겸, 김나영, 유현수, 강다현, 강래준', desc:'' },
        { cat:'Track1-B', title:'〈페로니스〉 — 플레소프스키흐 예카트리나 외 그래픽 분야 수상작', desc:'RE:BORN, 지옥청사666, 옛날 옛적에, 모이라이 등 다수 수상.' },
        { cat:'IEEE 트랙', title:'〈매직 브릭 인피니티〉(정예림·정현우), 〈Cross Wordle〉(유현수)', desc:'부울경 지역 대학생 대상 IEEE 트랙 수상작.' },
      ]},
      { heading:'AI 기반 게임 제작 특강 — Verse8', lead:'TU-RISE 마하 아카데미의 일환으로 진행되었습니다.', items:[
        { cat:'특강', title:'버스에잇(Verse8)과 함께하는 AI 게임 제작 특강', desc:'프롬프트 입력만으로 게임 제작·배포가 가능한 AI 플랫폼. 최재현 콘텐츠 매니저·태학용 매니저 강연 후 학생들이 직접 개발·퍼블리싱을 실습했습니다.' },
        { cat:'협약', title:'Verse8 발전기금 및 인재육성 협력 협약', desc:'Verse8이 게임학부에 기부금을 제공하고, 게임잼·집중교육·공모전 지원 등 지속 협력을 약속했습니다. 강영민 학과장은 내년 챌린지에 미래기술 적용 경쟁부문 신설을 예고했습니다.' },
      ]},
    ],
  },
  {
    id:'2025-q2', issue:'2025 · 2분기', title:'동명대학교 게임학부 소식지 2025-2분기',
    period:'2025.04 – 06', pub:'2025.07.01 발행 · 강영민 교수', cover:'assets/cover-2025-q2.jpg',
    sourceSway:'https://sway.cloud.microsoft/hGYsB85tFNQAQOts?ref=Link',
    intro:'제3회 TU 게임 챌린지 예고와 함께 산학협력·취업지원 활동이 활발했던 2분기입니다.',
    sections:[
      { heading:'성큼 다가온 제3회 TU 게임 챌린지', lead:'', items:[
        { cat:'챌린지', title:'IEEE 부산섹션과 함께하는 [제3회 TU 게임 챌린지]', desc:'20년 전통의 게임학부 재학생과 부울경 지역 대학생이 겨루는 공모전. 올해는 IEEE 부산섹션 트랙을 공동 신설해 문호를 크게 개방했습니다. 수상팀에는 표창·시상금과 G-Star 전시 자격이 부여됩니다.' },
      ]},
      { heading:'산학협력 MOU & 취업캠프', lead:'게임 교육의 실무화를 위한 협력이 이어졌습니다.', items:[
        { cat:'MOU', title:'SBS게임아카데미(6.13) · 부산게임협회(5.16) 업무협약', desc:'게임협회·예일아카데미·SBS게임아카데미 등과 협약을 맺고 RISE 사업과 연계한 실무 중심 교육을 강화합니다.' },
        { cat:'취업캠프', title:'게임 산업체와 함께하는 취업캠프 (5.16)', desc:'부산게임협회 주최로 게임공학과 4학년 12개 팀이 프로젝트를 발표하고 현업 전문가 5인에게 즉석 피드백을 받았습니다.' },
        { cat:'수상', title:'동기유발 프렌즈 활동 — 은상 수상', desc:'' },
      ]},
    ],
  },
  {
    id:'2025-q1', issue:'2025 · 1분기', title:'동명대학교 게임학부 소식지 (2025-1분기)',
    period:'2025.01 – 03', pub:'2025.05.08 발행 · 강영민 교수', cover:'assets/cover-2025-q1.jpg',
    sourceSway:'https://sway.cloud.microsoft/rYZfrSgUnXarDkCj?ref=Link',
    intro:'게임공학과와 게임그래픽학과가 함께하는 게임학부의 2025학년도 첫 소식입니다.',
    sections:[
      { heading:'이번 호 주요 소식', lead:'', items:[
        { cat:'전시', title:'스마일게이트 오렌지플래닛 대학생 게임 개발자 캠프 (2.20)', desc:'학부 3개 팀이 전시. TU 게임 챌린지 수상작 중 〈MBTI 박사〉, 〈풍문으로 들었소〉, 〈학교탈출〉이 선정되었습니다.' },
        { cat:'오리엔테이션', title:'게임학부 선후배 만남 오리엔테이션 (3.13)', desc:'2024년 TU 게임 챌린지 성과·G-Star 전시를 공유하고 2025 게임잼 계획을 발표. 부산 유망기업 SeePlay 창업 선배(김경원 대표·김성환 이사)의 특강이 진행되었습니다.' },
        { cat:'채용', title:'펄어비스 채용설명회 (4.28)', desc:'‘검은사막’으로 유명한 펄어비스가 본관 106호에서 채용설명회를 열었습니다. 동명대 선배 8명이 재직 중입니다.' },
      ]},
    ],
  },
  {
    id:'newsletter-12', issue:'2024 · 12월호', title:'동명대학교 게임학부 Newsletter 12월',
    period:'2024.12', pub:'2024.12.11 발행 · 강영민 교수', cover:'assets/cover-newsletter-12.jpg',
    sourceSway:'https://sway.cloud.microsoft/OLBkHWE0q6N9xHAE?ref=Link',
    intro:'겨울 방학을 앞둔 게임학부의 12월 소식. 2024년을 결산하고 2025년 계획을 나눴습니다.',
    sections:[
      { heading:'이번 호 주요 소식', lead:'', items:[
        { cat:'평가', title:'동명대학교 QS 5 Star 획득', desc:'권위 있는 QS 대학평가에서 5 Star를 획득하며 실용교육 분야 혁신 대학으로 다시 인정받았습니다.' },
        { cat:'성과보고', title:'TU 게임 챌린지 성과보고회', desc:'게임시스템 68명·게임그래픽 36명 등 총 103명 참여, 장학 수혜 27명(발전기금 400만원·대학혁신지원사업 150만원). 대상 150만원 등 트랙별 상금을 시상했습니다.' },
        { cat:'졸업·멘토링', title:'졸업논문 심사 & 선배 멘토링', desc:'게임공학과 졸업예정자 38명이 논문을 제출. 위메이드커넥트(12학번 이황래), 씨플레이 창업 선배(04학번 김경원·김성환)의 멘토링이 이어졌습니다.' },
        { cat:'이벤트', title:'기말고사 이벤트 — 힘내라 게임학부!', desc:'기말고사 기간 화·수요일 간식 지원.' },
      ]},
    ],
  },
  {
    id:'newsletter-b', issue:'2024 · 11월호', title:'동명대학교 게임학부 Newsletter 11월',
    period:'2024.11', pub:'2024.11.15 발행 · 강영민 교수', cover:'assets/cover-newsletter-b.jpg',
    sourceSway:'https://sway.cloud.microsoft/6Xof9pBhGgbdZeKp?ref=Link',
    intro:'풍성한 결실의 가을. 제2회 TU 게임 챌린지와 G-Star 2024 전시, 그리고 청소년 해커톤까지 이어진 11월 소식입니다.',
    sections:[
      { heading:'TU 게임 챌린지 & G-Star 2024', lead:'', items:[
        { cat:'챌린지', title:'제2회 TU 게임 챌린지 수상작 발표', desc:'게임 시스템·게임 그래픽 분야 수상작을 선정하고 G-Star 2024에 대거 전시했습니다.' },
        { cat:'언론', title:'중앙일보·동아일보·부산일보·아시아경제·베리타스알파 보도', desc:'“지스타에서 TU 게임 챌린지 수상작 선보인다” 등 다수 매체가 전시 소식을 전했습니다.' },
      ]},
      { heading:'Counterspell 부산 게임잼', lead:'전 세계 고교생 해커들의 게임잼을 게임학부가 공동주관했습니다.', items:[
        { cat:'게임잼', title:'Counterspell Busan (11.23~24)', desc:'비영리 Hack Club과 공동 개최한 중·고등학생 해커톤. 동명대 ICT 1관·동명관에서 진행되었으며, 게임학부 학생들의 멘토 참여를 모집했습니다. (행사: counterspellbusan.com)' },
      ]},
    ],
  },
  {
    id:'newsletter-a', issue:'2024 · 10월호', title:'동명대 게임학부 Newsletter 10월',
    period:'2024.10', pub:'2024.10.01 발행 · 강영민 교수', cover:'assets/cover-newsletter-a.jpg',
    sourceSway:'https://sway.cloud.microsoft/JyG4YuqvjXgXIaay',
    intro:'풍성한 가을만큼 풍성한 게임학부 소식. 2025 신입생 특별장학과 여름 수상 소식, TU 게임챌린지 2024 공모를 전합니다.',
    sections:[
      { heading:'2025학년도 신입생 특별 장학', lead:'', items:[
        { cat:'장학', title:'Do-ing 설계 장학금 300만원 + 최초합격 100만원', desc:'게임공학과·게임그래픽학과 입학생 전원에게 등록금 장학과 별도로 Do-ing 설계 장학 300만원 지원. 전형별 최초 합격자에게는 100만원 등록금 감면을 추가합니다.' },
      ]},
      { heading:'여름 수상 소식 & 게임챌린지 2024', lead:'재학생들이 전국 게임잼에서 성과를 거뒀습니다.', items:[
        { cat:'게임잼', title:'스마일게이트 오렌지플래닛 게임잼 우수상 — 〈Sprit Possession〉', desc:'전재우·전차현·강명준·최용준·손준호·김승의 (2024.8). 2023 동명 게임챌린지 수상자들로 구성된 팀.' },
        { cat:'게임잼', title:'NC와 함께하는 울산 게임잼 최우수상 — 이종진', desc:'팀명 ‘일요일이 좋다’ (2024.8.29).' },
        { cat:'선정', title:'크래프톤 정글 게임랩 — 김지훈 학생 선정', desc:'〈카와이좀비헌터〉 유니티 기반 게임 개발 참여.' },
        { cat:'챌린지', title:'TU 게임챌린지 2024 — 총상금 600만원', desc:'대상 150만원 등 푸짐한 상금. 타 학과에도 개방한 트랙 2 신설, 수상자에게 G-Star 전시 기회 제공. 접수 10.1~10.15.' },
      ]},
    ],
  },
];

/* ---------- 호별 포토 갤러리 (Sway에서 추출) ---------- */
window.GALLERY = {
  "2025-q4": ["assets/2025-q4/01.jpg", "assets/2025-q4/02.jpg", "assets/2025-q4/03.jpg", "assets/2025-q4/04.jpg", "assets/2025-q4/05.jpg", "assets/2025-q4/06.jpg", "assets/2025-q4/07.jpg"],
  "2025-q3": ["assets/2025-q3/01.jpg", "assets/2025-q3/02.jpg", "assets/2025-q3/03.jpg", "assets/2025-q3/04.jpg", "assets/2025-q3/05.jpg"],
  "2025-q2": ["assets/2025-q2/01.jpg", "assets/2025-q2/02.jpg", "assets/2025-q2/03.jpg", "assets/2025-q2/04.jpg", "assets/2025-q2/05.jpg", "assets/2025-q2/06.jpg", "assets/2025-q2/07.jpg"],
  "2025-q1": ["assets/2025-q1/01.jpg", "assets/2025-q1/02.jpg", "assets/2025-q1/03.jpg", "assets/2025-q1/04.jpg", "assets/2025-q1/05.jpg", "assets/2025-q1/06.jpg", "assets/2025-q1/07.jpg", "assets/2025-q1/08.jpg", "assets/2025-q1/09.jpg", "assets/2025-q1/10.jpg", "assets/2025-q1/11.jpg", "assets/2025-q1/12.jpg"],
  "special": ["assets/special/01.jpg", "assets/special/02.jpg", "assets/special/03.jpg", "assets/special/04.jpg", "assets/special/05.jpg", "assets/special/06.jpg", "assets/special/07.jpg", "assets/special/08.jpg", "assets/special/09.jpg", "assets/special/10.jpg", "assets/special/11.jpg", "assets/special/12.jpg"],
  "newsletter-12": ["assets/newsletter-12/01.jpg", "assets/newsletter-12/02.jpg", "assets/newsletter-12/03.jpg", "assets/newsletter-12/04.jpg", "assets/newsletter-12/05.jpg", "assets/newsletter-12/06.jpg", "assets/newsletter-12/07.jpg", "assets/newsletter-12/08.jpg", "assets/newsletter-12/09.jpg", "assets/newsletter-12/10.jpg", "assets/newsletter-12/11.jpg", "assets/newsletter-12/12.jpg"],
  "newsletter-a": ["assets/newsletter-a/01.jpg", "assets/newsletter-a/02.jpg", "assets/newsletter-a/03.jpg", "assets/newsletter-a/04.jpg", "assets/newsletter-a/05.jpg", "assets/newsletter-a/06.jpg"],
  "newsletter-b": ["assets/newsletter-b/01.jpg", "assets/newsletter-b/02.jpg", "assets/newsletter-b/03.jpg", "assets/newsletter-b/04.jpg", "assets/newsletter-b/05.jpg", "assets/newsletter-b/06.jpg", "assets/newsletter-b/07.jpg", "assets/newsletter-b/08.jpg", "assets/newsletter-b/09.jpg", "assets/newsletter-b/10.jpg", "assets/newsletter-b/11.jpg", "assets/newsletter-b/12.jpg"],
};
