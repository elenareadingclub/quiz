// D레벨 Step Up 코너 (숙제 아님, H-02) — 페이지에서 떼어 둔 파일. 버튼을 누를 때(또는 그 책 모드 화면에서 미리) 받는다.
// 만든 곳: 개발도구_패치와_테스트/patch_d_stepup_split.js (2026-10-19). 코너를 더할 때는 아래 EXTRAS 와 index.html 의 STEPUP_INDEX 를 같이 고친다.
/* ===== Step Up 추가 코너 (세트별) ===== */
const EXTRAS = {
  '2-1': {
    meals: {
      title: '🍽️ 하루 식사와 시간',
      hint: 'breakfast·lunch·dinner·snack',
      lead: '강아지도 사람도 하루 세 끼! 카드를 하나씩 눌러 보고, 다 누르면 퀴즈가 열려요.',
      groups: [
        { cap: '🍴 식사 MEALS', cls: '', items: [
          { en: 'breakfast', ko: '아침식사', e: '🥣' },
          { en: 'lunch', ko: '점심식사', e: '🥪' },
          { en: 'dinner', ko: '저녁식사', e: '🍽️' },
          { en: 'snack', ko: '간식', e: '🍎' } ] },
        { cap: '🕐 시간 TIMES OF DAY', cls: ' times', items: [
          { en: 'morning', ko: '아침', e: '🌅' },
          { en: 'afternoon', ko: '오후', e: '☀️' },
          { en: 'evening', ko: '저녁', e: '🌆' } ] } ]
    },
    body: {
      title: '🐾 강아지 몸',
      hint: '그림에서 찾기',
      lead: '그림에서 몸의 부분을 눌러 이름을 익혀요. 다 눌러 보면 퀴즈가 열려요.',
      parts: [
        { id: 'ears', en: 'ears', ko: '귀' },
        { id: 'eyes', en: 'eyes', ko: '눈' },
        { id: 'nose', en: 'nose', ko: '코' },
        { id: 'legs', en: 'legs', ko: '다리' },
        { id: 'paw', en: 'paw', ko: '발' },
        { id: 'tail', en: 'tail', ko: '꼬리' } ]
    }
  }, '2-2': {
    /* D2-2 Long O 총정리 (2026-10-19) */
    longo: {
      title: "🔍 긴 '오우' 골라보기",
      hint: "긴 '오우' ⭕ / 아니에요 ✖",
      lead: "긴 '오우' 소리가 나는 낱말만 골라요.",
      tip: "o_e · oa · oe · ow는 모두 길게 '오우~' 소리가 나요. o 하나만 있는 hot · dog는 짧게 '아' 소리가 나요.",
      words: [
        { w: 'boat', ko: '배', rule: 'oa' },
        { w: 'road', ko: '길', rule: 'oa' },
        { w: 'toe', ko: '발가락', rule: 'oe' },
        { w: 'snow', ko: '눈', rule: 'ow' },
        { w: 'bowl', ko: '그릇', rule: 'ow' },
        { w: 'robe', ko: '가운', rule: 'o_e' },
        { w: 'hot', ko: '뜨거운' },
        { w: 'dog', ko: '개' },
        { w: 'box', ko: '상자' },
        { w: 'top', ko: '꼭대기' },
        { w: 'pot', ko: '냄비' },
        { w: 'fox', ko: '여우' } ]
    },
    jobsyn: {   /* D2-2 직업 Is she a ~? (2026-10-19) */
      title: '👩‍⚕️ 직업 — Is she a ~?',
      hint: 'Yes, she is. / No, she isn\'t.',
      lead: '직업 이름을 듣고, 그림을 보고 Yes / No로 대답해요.',
      jobs: [
        { id: 'hairdresser', en: 'hairdresser', ko: '미용사', e: '💇', who: 'she', does: 'She cuts and curls hair.' },
        { id: 'doctor', en: 'doctor', ko: '의사', e: '👩‍⚕️', who: 'she', does: 'She helps sick people.' },
        { id: 'teacher', en: 'teacher', ko: '선생님', e: '👨‍🏫', who: 'he', does: 'He teaches kids.' },
        { id: 'busdriver', en: 'bus driver', ko: '버스 기사', e: '🚌', who: 'he', does: 'He drives a bus.' },
        { id: 'cook', en: 'cook', ko: '요리사', e: '👨‍🍳', who: 'he', does: 'He cooks food.' },
        { id: 'farmer', en: 'farmer', ko: '농부', e: '👩‍🌾', who: 'she', does: 'She grows food.' },
        { id: 'nurse', en: 'nurse', ko: '간호사', e: '💉', who: 'he', does: 'He helps the doctor.' },
        { id: 'vet', en: 'vet', ko: '수의사', e: '🐶', who: 'she', does: 'She helps sick animals.' },
        { id: 'baker', en: 'baker', ko: '제빵사', e: '🥖', who: 'he', does: 'He bakes bread.' },
        { id: 'pilot', en: 'pilot', ko: '조종사', e: '👩‍✈️', who: 'she', does: 'She flies a plane.' },
        { id: 'police', en: 'police officer', ko: '경찰관', e: '👮‍♂️', who: 'he', does: 'He keeps us safe.' },
        { id: 'firefighter', en: 'firefighter', ko: '소방관', e: '👩‍🚒', who: 'she', does: 'She puts out fires.' } ],
      // pic = 그림 속 사람의 직업, ask = 묻는 직업 (같으면 Yes)
      qs: [
        { who: 'she', pic: 'hairdresser', ask: 'hairdresser' },
        { who: 'he', pic: 'busdriver', ask: 'hairdresser' },
        { who: 'she', pic: 'doctor', ask: 'doctor' },
        { who: 'he', pic: 'teacher', ask: 'teacher' },
        { who: 'he', pic: 'cook', ask: 'farmer' },
        { who: 'she', pic: 'pilot', ask: 'pilot' },
        { who: 'he', pic: 'police', ask: 'firefighter' },
        { who: 'she', pic: 'vet', ask: 'vet' },
        { who: 'he', pic: 'baker', ask: 'nurse' },
        { who: 'they', pic: 'farmer', ask: 'farmer', e: '👩‍🌾👨‍🌾' },
        { who: 'they', pic: 'doctor', ask: 'teacher', e: '👨‍⚕️👩‍⚕️' },
        { who: 'they', pic: 'cook', ask: 'farmer', e: '👩‍🍳👨‍🍳👩‍🍳' } ]   // 여러 명 그림은 남녀 섞어서 (2026-10-19 12문제)
    },
    phonics: {
      title: '🔊 파닉스 Long O 총정리',
      hint: 'o_e · oa · oe · ow 모으기',
      lead: 'Long O 소리를 철자별로 정리해요.',
      sound: 'Long O',
      soundLead: "Long O는 알파벳 O의 이름처럼 '오우~' 하고 길게 소리 나요. 카드를 눌러 소리를 들어 보세요. 빨간 글자가 Long O 철자예요.",
      rules: [
        { id: 'o_e', label: 'o_e', sub: 'o + e (마법의 e)' },
        { id: 'oa', label: 'oa', sub: 'oa 소리' },
        { id: 'oe', label: 'oe', sub: 'oe 소리' },
        { id: 'ow', label: 'ow', sub: 'ow 소리 (snow)' } ],
      words: [
        { w: 'robe', rule: 'o_e', ko: '가운' },
        { w: 'hole', rule: 'o_e', ko: '구멍' },
        { w: 'vote', rule: 'o_e', ko: '투표하다' },
        { w: 'goat', rule: 'oa', ko: '염소' },
        { w: 'boat', rule: 'oa', ko: '배' },
        { w: 'coat', rule: 'oa', ko: '외투' },
        { w: 'soap', rule: 'oa', ko: '비누' },
        { w: 'road', rule: 'oa', ko: '길' },
        { w: 'toast', rule: 'oa', ko: '토스트' },
        { w: 'toe', rule: 'oe', ko: '발가락' },
        { w: 'doe', rule: 'oe', ko: '암사슴' },
        { w: 'bow', rule: 'ow', ko: '리본' },
        { w: 'grow', rule: 'ow', ko: '자라다' },
        { w: 'snow', rule: 'ow', ko: '눈' },
        { w: 'bowl', rule: 'ow', ko: '그릇' } ],
      bank: {
        'o_e': ['robe', 'hole', 'vote', 'home', 'rope', 'nose', 'bone', 'cone', 'hope', 'note', 'rose', 'pole', 'joke', 'stone', 'smoke', 'globe', 'close', 'those', 'code', 'mole', 'hose', 'zone', 'phone', 'woke', 'broke', 'drove', 'stove', 'froze', 'spoke', 'tone'],
        'oa': ['goat', 'boat', 'coat', 'float', 'soak', 'soap', 'coal', 'road', 'loaf', 'toast', 'load', 'toad', 'oak', 'oat', 'moan', 'groan', 'foam', 'roam', 'cloak', 'throat', 'goal', 'roast', 'coast', 'boast', 'loan', 'soar'],
        'oe': ['toe', 'doe', 'hoe', 'foe', 'woe', 'joe'],
        'ow': ['bow', 'grow', 'blow', 'snow', 'bowl', 'low', 'row', 'mow', 'tow', 'show', 'slow', 'flow', 'glow', 'know', 'throw', 'own', 'crow', 'grown', 'shown', 'yellow', 'pillow', 'window', 'elbow', 'arrow', 'rainbow'] },
      hints: {
        'o_e': ['home', 'nose', 'bone'],
        'oa': ['float', 'soak', 'coal'],
        'oe': ['toe', 'doe'],
        'ow': ['blow', 'show', 'slow'] }
    }
  }, '3-1': {
    plant: {
      title: "🌱 식물 이름 맞히기",
      hint: '그림에서 뿌리·줄기·잎 찾기',
      lead: "I'm a Seed에 나오는 식물 낱말이에요. 그림을 눌러 이름을 익히고, 다 눌러 보면 퀴즈가 열려요.",
      scenes: [
        { id: 'flower', cap: '🌼 꽃 FLOWER' },
        { id: 'tree', cap: '🌳 나무 TREE' },
        { id: 'life', cap: '🌱 자라는 순서 LIFE' } ],
      parts: [
        { id: 'root', en: 'root', ko: '뿌리', scene: 'flower' },
        { id: 'stem', en: 'stem', ko: '줄기', scene: 'flower' },
        { id: 'leaf', en: 'leaf', ko: '잎 (한 장)', scene: 'flower' },
        { id: 'petal', en: 'petal', ko: '꽃잎', scene: 'flower' },
        { id: 'trunk', en: 'trunk', ko: '나무 기둥', scene: 'tree' },
        { id: 'branch', en: 'branch', ko: '나뭇가지', scene: 'tree' },
        { id: 'leaves', en: 'leaves', ko: '잎들 (여러 장)', scene: 'tree' },
        { id: 'sprout', en: 'sprout', ko: '싹', scene: 'life' },
        { id: 'grow', en: 'grow', ko: '자라다', scene: 'life' },
        { id: 'die', en: 'die', ko: '죽다', scene: 'life' } ]
    },
    phonics: {
      title: '🔊 파닉스 Long U 총정리',
      hint: 'ew · u_e · ue 모으기',
      lead: 'Long U 소리를 철자별로 정리해요.',
      sound: 'Long U',
      soundLead: 'Long U는 알파벳 U의 이름처럼 소리 나요 (우~ / 유~). 카드를 눌러 소리를 들어 보세요. 빨간 글자가 Long U 철자예요.',
      rules: [
        { id: 'ew', label: 'ew', sub: 'ew 소리' },
        { id: 'u_e', label: 'u_e', sub: 'u + e (마법의 e)' },
        { id: 'ue', label: 'ue', sub: 'ue 소리' },
        { id: 'ui', label: 'ui', sub: 'ui 소리' } ],
      words: [
        { w: 'tune', rule: 'u_e', ko: '곡조' },
        { w: 'dune', rule: 'u_e', ko: '모래 언덕' },
        { w: 'tube', rule: 'u_e', ko: '관, 튜브' },
        { w: 'cube', rule: 'u_e', ko: '정육면체' },
        { w: 'cute', rule: 'u_e', ko: '귀여운' },
        { w: 'huge', rule: 'u_e', ko: '거대한' },
        { w: 'flew', rule: 'ew', ko: '날았다 (fly의 과거)' },
        { w: 'new', rule: 'ew', ko: '새로운' },
        { w: 'grew', rule: 'ew', ko: '자랐다 (grow의 과거)' },
        { w: 'cue', rule: 'ue', ko: '신호' },
        { w: 'juice', rule: 'ui', ko: '주스' },
        { w: 'fruit', rule: 'ui', ko: '과일' },
        { w: 'suit', rule: 'ui', ko: '정장' } ],
      bank: {
        'ew': ['new', 'flew', 'grew', 'chew', 'few', 'dew', 'blew', 'drew', 'knew', 'stew', 'threw', 'brew', 'crew', 'screw', 'pew'],
        'u_e': ['tune', 'dune', 'cube', 'cute', 'huge', 'mule', 'rule', 'june', 'tube', 'use', 'fuse', 'flute', 'rude', 'prune', 'duke', 'mute', 'fume', 'plume', 'dude', 'nude'],
        'ue': ['cue', 'blue', 'glue', 'clue', 'true', 'due', 'sue', 'hue'],
        'ui': ['juice', 'fruit', 'suit', 'cruise', 'bruise'] },
      hints: {
        'ew': ['few', 'dew', 'chew'],
        'u_e': ['mule', 'rule', 'flute'],
        'ue': ['blue', 'glue', 'true'],
        'ui': ['cruise', 'bruise'] }
    },
    jobs: {
      title: '🏆 되고 싶은 직업 월드컵',
      hint: "What are you going to be?",
      lead: '직업 이름을 배우고, 월드컵으로 되고 싶은 직업을 골라 대답해 봐요.',
      items: [
        { id: 'teacher', en: 'a teacher', ko: '선생님', e: '🧑‍🏫' },
        { id: 'doctor', en: 'a doctor', ko: '의사', e: '👨‍⚕️' },
        { id: 'nurse', en: 'a nurse', ko: '간호사', e: '👩‍⚕️' },
        { id: 'vet', en: 'a vet', ko: '수의사', e: '🐶' },
        { id: 'scientist', en: 'a scientist', ko: '과학자', e: '🔬' },
        { id: 'pilot', en: 'a pilot', ko: '조종사', e: '✈️' },
        { id: 'astronaut', en: 'an astronaut', ko: '우주비행사', e: '🧑‍🚀' },
        { id: 'police', en: 'a police officer', ko: '경찰관', e: '👮' },
        { id: 'firefighter', en: 'a firefighter', ko: '소방관', e: '🧑‍🚒' },
        { id: 'chef', en: 'a chef', ko: '요리사', e: '🧑‍🍳' },
        { id: 'baker', en: 'a baker', ko: '제빵사', e: '🥐' },
        { id: 'singer', en: 'a singer', ko: '가수', e: '🎤' },
        { id: 'dancer', en: 'a dancer', ko: '무용수', e: '💃' },
        { id: 'actor', en: 'an actor', ko: '배우', e: '🎭' },
        { id: 'artist', en: 'an artist', ko: '화가', e: '🎨' },
        { id: 'writer', en: 'a writer', ko: '작가', e: '✍️' },
        { id: 'designer', en: 'a designer', ko: '디자이너', e: '✏️' },
        { id: 'soccer', en: 'a soccer player', ko: '축구선수', e: '⚽' },
        { id: 'swimmer', en: 'a swimmer', ko: '수영선수', e: '🏊' },
        { id: 'youtuber', en: 'a YouTuber', ko: '유튜버', e: '📹' },
        { id: 'ballerina', en: 'a ballerina', ko: '발레리나', e: '🩰' },
        { id: 'fisherman', en: 'a fisherman', ko: '어부', e: '🎣' },
        { id: 'athlete', en: 'an athlete', ko: '운동선수', e: '🏅' },
        { id: 'creator', en: 'a content creator', ko: '크리에이터', e: '📱' },
        { id: 'entertainer', en: 'an entertainer', ko: '연예인', e: '🌟' },
        { id: 'gamer', en: 'a pro gamer', ko: '프로게이머', e: '🎮' },
        { id: 'attendant', en: 'a flight attendant', ko: '승무원', e: '🧳' },
        { id: 'webtoon', en: 'a webtoon artist', ko: '웹툰작가', e: '🖌️' },
        { id: 'architect', en: 'an architect', ko: '건축가', e: '🏛️' },
        { id: 'counselor', en: 'a counselor', ko: '상담사', e: '💬' },
        { id: 'programmer', en: 'a programmer', ko: '프로그래머', e: '💻' },
        { id: 'judge', en: 'a judge', ko: '판사', e: '⚖️' } ]
    },
    story: {
      title: '🎃 그림과 문장 연결하기',
      hint: 'How a pumpkin grows',
      lead: '호박이 자라는 8장면을 그림과 문장으로 연결해 봐요.',
      steps: [
        { n: 1, s: 'Put a pumpkin seed in the soil.', ko: '호박씨를 흙에 심어요.' },
        { n: 2, s: 'A little sprout comes up.', ko: '작은 싹이 올라와요.' },
        { n: 3, s: 'The vine gets longer.', ko: '덩굴이 길어져요.' },
        { n: 4, s: 'Yellow flowers open on the vine.', ko: '덩굴에 노란 꽃이 피어요.' },
        { n: 5, s: 'A small green pumpkin begins to grow.', ko: '작고 푸른 호박이 자라기 시작해요.' },
        { n: 6, s: 'The pumpkin turns orange.', ko: '호박이 주황색이 돼요.' },
        { n: 7, s: 'The big pumpkin is ready to pick.', ko: '큰 호박을 딸 준비가 됐어요.' },
        { n: 8, s: 'Bake a pumpkin pie!', ko: '호박 파이를 구워요!' } ]
    }
  }
};

function dogSvg() {
  return '<svg class="dogsvg" viewBox="0 0 300 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="강아지 그림">' +
    '<g class="part" data-part="tail"><path class="sh" d="M212 232 q46 -6 40 -48 q-2 -16 -18 -14 q-13 2 -9 16 q4 16 -16 26 z" stroke-linejoin="round"/></g>' +
    '<ellipse class="fixed" cx="150" cy="222" rx="64" ry="56"/>' +
    '<g class="part" data-part="legs">' +
      '<rect class="sh" x="108" y="258" width="26" height="42" rx="13"/>' +
      '<rect class="sh" x="166" y="258" width="26" height="42" rx="13"/></g>' +
    '<g class="part" data-part="paw">' +
      '<ellipse class="sh" cx="121" cy="304" rx="21" ry="14"/>' +
      '<ellipse class="sh" cx="179" cy="304" rx="21" ry="14"/></g>' +
    '<g class="part" data-part="ears">' +
      '<ellipse class="sh" cx="97" cy="80" rx="20" ry="34" transform="rotate(-22 97 80)"/>' +
      '<ellipse class="sh" cx="203" cy="80" rx="20" ry="34" transform="rotate(22 203 80)"/></g>' +
    '<circle class="fixed" cx="150" cy="120" r="58"/>' +
    '<g class="part" data-part="eyes">' +
      '<circle class="sh" cx="129" cy="110" r="12"/><circle class="sh" cx="171" cy="110" r="12"/>' +
      '<circle class="pupil" cx="129" cy="110" r="4.5"/><circle class="pupil" cx="171" cy="110" r="4.5"/></g>' +
    '<ellipse class="fixed" cx="150" cy="150" rx="30" ry="21"/>' +
    '<g class="part" data-part="nose"><ellipse class="sh" cx="150" cy="142" rx="14" ry="10"/></g>' +
    '<path class="fixed" d="M150 152 v8 M150 160 q-10 9 -18 2 M150 160 q10 9 18 2" fill="none" stroke-linecap="round"/>' +
  '</svg>';
}


function plantScene(id) {
  const open = '<svg class="plsvg" viewBox="0 0 300 ' + (id === 'life' ? '170' : '340') + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="식물 그림">';
  const bgH = id === 'life' ? 167 : 337;
  const bg = '<rect class="pbg" x="1.5" y="1.5" width="297" height="' + bgH + '" rx="14"/>';
  if (id === 'flower') {
    let petals = '';
    for (let a = 0; a < 360; a += 60) petals += '<ellipse class="sh p" cx="150" cy="40" rx="14" ry="25" transform="rotate(' + a + ' 150 70)"/>';
    return open + bg +
      '<path class="psoil" d="M1.5 190 H298.5 V324 a14 14 0 0 1 -14 14 H15.5 a14 14 0 0 1 -14 -14 Z"/>' +
      '<g class="part" data-part="root"><rect class="hit" x="70" y="192" width="160" height="136"/>' +
        '<path class="ln" d="M150 190 C148 230 128 250 108 292"/>' +
        '<path class="ln" d="M150 190 C152 240 170 262 196 300"/>' +
        '<path class="ln" d="M150 190 C150 235 146 270 150 318"/>' +
        '<path class="ln" d="M142 234 C126 234 112 240 98 238"/>' +
        '<path class="ln" d="M158 246 C176 246 190 250 206 246"/></g>' +
      '<g class="part" data-part="stem"><rect class="hit" x="126" y="86" width="48" height="104"/>' +
        '<rect class="sh g" x="141" y="84" width="18" height="110" rx="7"/></g>' +
      '<g class="part" data-part="leaf"><path class="sh g2" d="M142 158 C112 122 80 132 64 152 C90 178 124 176 142 158 Z"/>' +
        '<path class="vein" d="M142 158 L82 152"/></g>' +
      '<g class="part" data-part="petal">' + petals + '</g>' +
      '<circle class="pcenter" cx="150" cy="70" r="17"/>' +
    '</svg>';
  }
  if (id === 'tree') {
    let leaves = '';
    [[92, 130], [212, 114], [150, 96]].forEach(c => {
      [-55, -18, 18, 55].forEach(a => {
        leaves += '<ellipse class="sh g" cx="' + c[0] + '" cy="' + (c[1] - 14) + '" rx="13" ry="24" transform="rotate(' + a + ' ' + c[0] + ' ' + c[1] + ')"/>';
      });
    });
    return open + bg +
      '<path class="pgrass" d="M1.5 292 H298.5 V324 a14 14 0 0 1 -14 14 H15.5 a14 14 0 0 1 -14 -14 Z"/>' +
      '<g class="part" data-part="trunk"><path class="sh b" d="M114 298 C128 280 132 236 134 188 L166 188 C168 236 172 280 186 298 Z"/></g>' +
      '<g class="part" data-part="branch">' +
        '<path class="ln" d="M150 198 L98 144"/>' +
        '<path class="ln" d="M150 188 L206 128"/>' +
        '<path class="ln" d="M150 182 L150 114"/></g>' +
      '<g class="part" data-part="leaves">' + leaves + '</g>' +
    '</svg>';
  }
  // life cycle: sprout -> grow -> die
  return open + bg +
    '<path class="psoil" d="M1.5 132 H298.5 V156 a14 14 0 0 1 -14 14 H15.5 a14 14 0 0 1 -14 -14 Z"/>' +
    '<line class="divider" x1="100" y1="12" x2="100" y2="130"/><line class="divider" x1="200" y1="12" x2="200" y2="130"/>' +
    '<g class="part" data-part="sprout"><rect class="hit" x="8" y="14" width="86" height="118"/>' +
      '<rect class="sh g" x="46" y="104" width="8" height="30" rx="3"/>' +
      '<ellipse class="sh g2" cx="36" cy="100" rx="13" ry="6" transform="rotate(-28 36 100)"/>' +
      '<ellipse class="sh g2" cx="64" cy="100" rx="13" ry="6" transform="rotate(28 64 100)"/></g>' +
    '<g class="part" data-part="grow"><rect class="hit" x="108" y="14" width="86" height="118"/>' +
      '<rect class="sh g" x="142" y="62" width="9" height="72" rx="4"/>' +
      '<circle class="sh g2" cx="146" cy="56" r="8"/>' +
      '<ellipse class="sh g2" cx="124" cy="102" rx="18" ry="8" transform="rotate(-25 124 102)"/>' +
      '<ellipse class="sh g2" cx="168" cy="102" rx="18" ry="8" transform="rotate(25 168 102)"/>' +
      '<ellipse class="sh g2" cx="127" cy="78" rx="16" ry="7" transform="rotate(-30 127 78)"/>' +
      '<ellipse class="sh g2" cx="165" cy="78" rx="16" ry="7" transform="rotate(30 165 78)"/>' +
      '<path class="arrow" d="M184 122 V72 M175 83 L184 72 L193 83"/></g>' +
    '<g class="part" data-part="die"><rect class="hit" x="208" y="14" width="86" height="118"/>' +
      '<path class="ln d" d="M250 134 C250 108 252 92 270 88"/>' +
      '<ellipse class="sh d" cx="268" cy="102" rx="15" ry="6" transform="rotate(72 268 102)"/>' +
      '<ellipse class="sh d" cx="236" cy="114" rx="14" ry="6" transform="rotate(-62 236 114)"/>' +
      '<ellipse class="sh d" cx="278" cy="84" rx="12" ry="5" transform="rotate(60 278 84)"/>' +
      '<ellipse class="sh d" cx="224" cy="134" rx="10" ry="4"/><ellipse class="sh d" cx="280" cy="136" rx="9" ry="4"/></g>' +
  '</svg>';
}

function renderPlantLearn() {
  const L = exEl('exLearn');
  L.innerHTML = '<div class="dogcaption plcaption" id="plCaption"><div class="dcidle">그림의 한 곳을 눌러 보세요 👆</div></div>' +
    '<div class="plscenes">' +
    exConf.scenes.map(s => '<div><div class="plcap">' + s.cap + '</div><div class="dogwrap">' + plantScene(s.id) + '</div></div>').join('') + '</div>';
  L.querySelectorAll('.part').forEach(g => g.addEventListener('click', () => {
    const it = exConf.parts.find(x => x.id === g.dataset.part);
    g.classList.add('seen');
    exEl('plCaption').innerHTML = '<div class="dcen">' + it.en + '</div><div class="dcko">' + it.ko + '</div>';
    speak(it.en); exSeen.add(it.id); updateExLearn();
  }));
}

function renderPlantQ(q) {
  const it = q.item;
  const pic = exEl('exPicture');
  pic.hidden = false;
  pic.innerHTML = '<div class="dogwrap">' + plantScene(it.scene) + '</div>';
  exEl('exQuiz').insertBefore(pic, q.kind === 'name' ? exEl('exChoices') : exEl('exFeedback'));
  const partEl = pic.querySelector('[data-part="' + it.id + '"]');
  if (q.kind === 'pick') {
    exEl('exLead').textContent = '이 뜻에 맞는 그림을 눌러 보세요.';
    exEl('exPrompt').textContent = it.ko;
    exEl('exChoices').hidden = true;
    speak(it.en);
    pic.querySelectorAll('.part').forEach(g => g.addEventListener('click', () => {
      if (exLocked) return;
      const ok = g.dataset.part === it.id;
      g.classList.add(ok ? 'hit' : 'miss');
      if (!ok && partEl) partEl.classList.add('hit');
      answerExtra(ok, q, null);
    }));
  } else {
    exEl('exLead').textContent = '노랗게 빛나는 부분은 영어로 뭘까요?';
    exEl('exPrompt').textContent = '?';
    if (partEl) partEl.classList.add('hl');
    const box = exEl('exChoices');
    box.hidden = false;
    box.innerHTML = q.choices.map(c => '<button class="choice">' + c + '</button>').join('');
    box.querySelectorAll('.choice').forEach(b => b.addEventListener('click', () => {
      if (exLocked) return;
      if (partEl) { partEl.classList.remove('hl'); partEl.classList.add('hit'); }
      answerExtra(b.textContent === q.correct, q, b);
    }));
  }
}


/* ===== 파닉스 Long U 총정리 (3단계) ===== */
let phSeen = new Set(), phSel = null, phPlaced = {}, phMistakes = 0, phFails = 0, phDragBound = false, phDrag = null;

function phHighlight(w, rule) {
  if (/^[aeiou]_e$/.test(rule)) {   // u_e·o_e 등 마법의 e (D2-2 o_e 2026-10-19)
    const v = rule[0], i = w.indexOf(v);
    return w.slice(0, i) + '<span class="phl">' + v + '</span>' + w.slice(i + 1, w.length - 1) + '<span class="phl">e</span>';
  }
  const i = w.lastIndexOf(rule);
  return w.slice(0, i) + '<span class="phl">' + rule + '</span>' + w.slice(i + rule.length);
}

function phShow() {
  exEl('exProgWrap').hidden = true;
  exEl('exQuiz').hidden = true;
  exEl('exDone').hidden = true;
  exEl('exLearn').hidden = false;
  exEl('exTitle').textContent = exConf.title;
}

function renderPhonics() {
  phSeen = new Set(); phSel = null; phPlaced = {}; phMistakes = 0; phFails = 0;
  exPhase = 'ph1';
  phShow();
  exEl('exStage').textContent = 'STEP 1 · 소리 듣기';
  exEl('exLead').textContent = exConf.soundLead;
  exEl('exLearn').innerHTML = '<div class="phcards">' + exConf.words.map(wd =>
    '<button class="phcard" data-w="' + wd.w + '"><span class="phw">' + wd.w + '</span><span class="phko"></span></button>').join('') + '</div>';
  exEl('exLearn').querySelectorAll('.phcard').forEach(card => card.addEventListener('click', () => {
    const wd = exConf.words.find(x => x.w === card.dataset.w);
    card.classList.add('seen');
    card.querySelector('.phw').innerHTML = phHighlight(wd.w, wd.rule);
    card.querySelector('.phko').textContent = wd.ko;
    speak(wd.w); phSeen.add(wd.w); updatePhStep1();
  }));
  updatePhStep1();
}

function updatePhStep1() {
  const n = phSeen.size, total = exConf.words.length;
  exEl('exCount').textContent = n + ' / ' + total + ' 눌러봄';
  const b = exEl('exMainBtn');
  b.hidden = false; b.disabled = n < total;
  b.textContent = n < total ? '전부 눌러 보세요 (' + n + '/' + total + ')' : '다음: 같은 규칙끼리 모으기 →';
}

function renderPhSort() {
  phSel = null; phPlaced = {};
  exPhase = 'ph2';
  phShow();
  exEl('exStage').textContent = 'STEP 2 · 같은 규칙끼리 모으기';
  exEl('exLead').textContent = '같은 철자 규칙의 낱말끼리 모아요. 낱말을 끌어서 (또는 눌러서) 알맞은 상자에 넣어요.';
  exEl('exLearn').innerHTML = '<div class="phchips" id="phChips">' +
    exShuffle(exConf.words.slice()).map(wd => '<div class="phchip" data-w="' + wd.w + '">' + wd.w + '</div>').join('') + '</div>' +
    '<div class="phbuckets">' + exConf.rules.map(r =>
      '<div class="phbucket" data-rule="' + r.id + '"><div class="phbl">' + r.label + '</div><div class="phbs">' + r.sub + '</div><div class="phdone" id="phDone_' + r.id + '"></div></div>').join('') + '</div>' +
    '<div class="phmsg" id="phMsg"></div>';
  exEl('exMainBtn').hidden = true;
  updatePhSortCount();
  exEl('exLearn').querySelectorAll('.phbucket').forEach(bk => bk.addEventListener('click', () => {
    if (phSel) phTryPlace(phSel, bk.dataset.rule);
  }));
  if (!phDragBound) {
    phDragBound = true;
    document.addEventListener('pointermove', phPointerMove);
    document.addEventListener('pointerup', phPointerUp);
  }
  exEl('phChips').addEventListener('pointerdown', e => {
    const chip = e.target.closest('.phchip');
    if (!chip || chip.classList.contains('placed')) return;
    phDrag = { chip: chip, sx: e.clientX, sy: e.clientY, moved: false, ghost: null };
  });
}

function phPointerMove(e) {
  if (!phDrag) return;
  const dx = e.clientX - phDrag.sx, dy = e.clientY - phDrag.sy;
  if (!phDrag.moved && Math.hypot(dx, dy) > 8) {
    phDrag.moved = true;
    const g = phDrag.chip.cloneNode(true);
    g.className = 'phchip phghost';
    document.body.appendChild(g);
    phDrag.ghost = g;
  }
  if (phDrag.moved && phDrag.ghost) {
    phDrag.ghost.style.left = e.clientX + 'px';
    phDrag.ghost.style.top = e.clientY + 'px';
    const under = document.elementFromPoint ? document.elementFromPoint(e.clientX, e.clientY) : null;
    document.querySelectorAll('.phbucket').forEach(b => b.classList.toggle('over', !!(under && under.closest && under.closest('.phbucket') === b)));
  }
}

function phPointerUp(e) {
  if (!phDrag) return;
  const d = phDrag; phDrag = null;
  document.querySelectorAll('.phbucket').forEach(b => b.classList.remove('over'));
  if (d.moved) {
    if (d.ghost) d.ghost.remove();
    const under = document.elementFromPoint ? document.elementFromPoint(e.clientX, e.clientY) : null;
    const bk = under && under.closest ? under.closest('.phbucket') : null;
    if (bk) phTryPlace(d.chip, bk.dataset.rule);
  } else {
    const was = d.chip.classList.contains('sel');
    document.querySelectorAll('.phchip.sel').forEach(c => c.classList.remove('sel'));
    if (was) { phSel = null; } else { d.chip.classList.add('sel'); phSel = d.chip; speak(d.chip.dataset.w); }
  }
}

function updatePhSortCount() {
  exEl('exCount').textContent = '모은 낱말 ' + Object.keys(phPlaced).length + ' / ' + exConf.words.length;
}

function phTryPlace(chip, rule) {
  if (chip.classList.contains('placed')) return;
  const wd = exConf.words.find(x => x.w === chip.dataset.w);
  const msg = exEl('phMsg');
  if (wd.rule === rule) {
    chip.classList.add('placed'); chip.classList.remove('sel'); chip.style.display = 'none';
    phSel = null;
    phPlaced[wd.w] = rule;
    exEl('phDone_' + rule).insertAdjacentHTML('beforeend', '<div class="phplaced">' + phHighlight(wd.w, wd.rule) + '</div>');
    try { playCorrectSound(); } catch (e) {}
    speak(wd.w);
    msg.style.color = 'var(--accent-strong)';
    msg.textContent = '⭕ ' + wd.w + ' → ' + rule;
    updatePhSortCount();
    if (Object.keys(phPlaced).length === exConf.words.length) {
      msg.textContent = '🎉 다 모았어요!' + (phMistakes ? ' (틀린 횟수 ' + phMistakes + ')' : ' 한 번도 안 틀렸어요!');
      const b = exEl('exMainBtn');
      b.hidden = false; b.disabled = false; b.textContent = '다음: 같은 규칙 낱말 쓰기 →';
    }
  } else {
    phMistakes++;
    chip.classList.add('shake'); setTimeout(() => chip.classList.remove('shake'), 400);
    try { playWrongSound(); } catch (e) {}
    msg.style.color = 'var(--danger)';
    msg.textContent = '❌ ' + wd.w + '의 ' + exConf.sound + ' 철자는 다른 상자예요. 소리를 다시 들어 보세요!';
    speak(wd.w);
  }
}

function renderPhWrite() {
  exPhase = 'ph3'; phFails = 0;
  phShow();
  exEl('exStage').textContent = 'STEP 3 · 같은 규칙 낱말 쓰기';
  exEl('exLead').textContent = '상자마다 같은 철자 규칙을 가진 낱말을 2개씩 써 보세요. 배운 낱말도 좋고, 새로 아는 낱말도 좋아요!';
  exEl('exLearn').innerHTML = '<div class="phwrite">' + exConf.rules.map(r =>
    '<div class="phrow"><div class="phrl">' + r.label + '</div>' +
    '<input type="text" data-rule="' + r.id + '" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="낱말 1">' +
    '<input type="text" data-rule="' + r.id + '" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="낱말 2"></div>').join('') + '</div>' +
    '<div class="phmsg" id="phMsg"></div><div id="phHint"></div>';
  exEl('exCount').textContent = '';
  const b = exEl('exMainBtn');
  b.hidden = false; b.disabled = false; b.textContent = '확인하기';
}

function checkPhWrite() {
  let allOk = true; const bad = [];
  exConf.rules.forEach(r => {
    const ins = Array.prototype.slice.call(exEl('exLearn').querySelectorAll('input[data-rule="' + r.id + '"]'));
    const vals = ins.map(i => i.value.trim().toLowerCase());
    const valid = vals.map(v => !!v && exConf.bank[r.id].indexOf(v) >= 0);
    const distinct = vals[0] !== vals[1];
    ins.forEach((inp, k) => { inp.className = (valid[k] && (k === 0 || distinct)) ? 'ok' : 'bad'; });
    if (!(valid[0] && valid[1] && distinct)) { allOk = false; bad.push(r); }
  });
  const msg = exEl('phMsg');
  if (allOk) { finishPhonics(); return; }
  phFails++;
  try { playWrongSound(); } catch (e) {}
  msg.style.color = 'var(--danger)';
  msg.textContent = '빨간 칸을 다시 확인해 보세요. 상자의 철자 규칙이 같은 낱말을 서로 다르게 2개씩 써요.';
  exEl('phHint').innerHTML = '<div class="phhint">💡 힌트: ' + bad.map(r => '<b>' + r.label + '</b> → ' + exConf.hints[r.id].join(', ')).join(' &nbsp;·&nbsp; ') + '</div>';
}

async function finishPhonics() {
  exPhase = 'done';
  exEl('exLearn').hidden = true;
  exEl('exQuiz').hidden = true;
  exEl('exProgWrap').hidden = true;
  exEl('exDone').hidden = false;
  exEl('exStage').textContent = '완료';
  exEl('exLead').textContent = '';
  exEl('exScore').textContent = '🎉 완료!';
  const badge = exEl('exBadge');
  badge.className = 'passbadge pass';
  badge.textContent = '✅ ' + exConf.sound + ' 마스터!';
  exEl('exCount').textContent = '';
  const b = exEl('exMainBtn');
  b.hidden = false; b.disabled = false; b.textContent = '모드 선택으로 →';
  try { launchConfetti(); playCelebrationSound(); } catch (e) {}
  markLocalProgress(currentSet, 'phonics', true);
  if (db) {
    try {
      const id = 'r_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
      await db.doc('quiz_results/' + id).set({ name: currentName, mode: 'phonics', setNo: currentSet, ts: Date.now(), passed: true, mistakes: phMistakes });
    } catch (e) {}
  }
}

function phonicsMain() {
  if (exPhase === 'ph1') { renderPhSort(); return; }
  if (exPhase === 'ph2') { renderPhWrite(); return; }
  if (exPhase === 'ph3') { checkPhWrite(); return; }
  openModeScreen(currentSet);
}


/* ===== 긴 '오우' 골라보기 (D2-2, 2026-10-19) ===== */
let loSeen = new Set(), loOrder = [], loIdx = 0, loScore = 0, loWrong = 0, loBusy = false;
function renderLongo() {
  loSeen = new Set(); exPhase = 'lo1';
  phShow();
  exEl('exStage').textContent = 'STEP 1 · 소리 듣기';
  exEl('exLead').textContent = "카드를 눌러 소리를 들어 보세요. 길게 '오우~' 하는 소리가 있는지 잘 들어 봐요!";
  exEl('exLearn').innerHTML = '<div class="phcards">' + exConf.words.map(wd =>
    '<button class="phcard" data-w="' + wd.w + '"><span class="phw">' + wd.w + '</span><span class="phko"></span></button>').join('') + '</div>';
  exEl('exLearn').querySelectorAll('.phcard').forEach(card => card.addEventListener('click', () => {
    const wd = exConf.words.find(x => x.w === card.dataset.w);
    card.classList.add('seen');
    card.querySelector('.phko').textContent = wd.ko;
    speak(wd.w); loSeen.add(wd.w); updateLoStep1();
  }));
  updateLoStep1();
}
function updateLoStep1() {
  const n = loSeen.size, total = exConf.words.length;
  exEl('exCount').textContent = n + ' / ' + total + ' 눌러봄';
  const b = exEl('exMainBtn');
  b.hidden = false; b.disabled = n < total;
  b.textContent = n < total ? '전부 눌러 보세요 (' + n + '/' + total + ')' : "다음: 긴 '오우' 골라보기 →";
}
function startLoQuiz() {
  exPhase = 'lo2'; loOrder = exShuffle(exConf.words.slice()); loIdx = 0; loScore = 0;
  exEl('exMainBtn').hidden = true;
  renderLoQ();
}
function renderLoQ() {
  phShow(); loWrong = 0; loBusy = false;
  const wd = loOrder[loIdx], total = loOrder.length;
  exEl('exStage').textContent = 'STEP 2 · 골라보기 ' + (loIdx + 1) + ' / ' + total;
  exEl('exLead').textContent = "소리를 듣고 골라요. 긴 '오우' 소리가 날까요?";
  exEl('exProgWrap').hidden = false;
  exEl('exProg').style.width = Math.round(loIdx / total * 100) + '%';
  exEl('exLearn').innerHTML = '<div class="lobig">' + wd.w + '</div><button class="loagain" id="loAgain">🔊 다시 듣기</button>' +
    '<div class="lobtns"><button class="lobtn" data-long="1">긴 \'오우\' ⭕<small>boat · snow처럼</small></button>' +
    '<button class="lobtn" data-long="0">아니에요 ✖<small>hot · dog처럼</small></button></div><div class="lomsg" id="loMsg"></div>';
  exEl('exCount').textContent = '맞힌 낱말 ' + loScore;
  exEl('loAgain').addEventListener('click', () => speak(wd.w));
  exEl('exLearn').querySelectorAll('.lobtn').forEach(b => b.addEventListener('click', () => loPick(b)));
  speak(wd.w);
}
function loPick(btn) {
  if (loBusy) return;
  const wd = loOrder[loIdx], isLong = !!wd.rule, msg = exEl('loMsg');
  if ((btn.dataset.long === '1') === isLong) {
    loBusy = true;
    if (!loWrong) loScore++;
    btn.classList.add('ok');
    exEl('exLearn').querySelectorAll('.lobtn').forEach(b => { b.disabled = true; });
    msg.style.color = 'var(--accent-strong)';
    msg.innerHTML = '⭕ ' + (isLong ? phHighlight(wd.w, wd.rule) + " — 긴 '오우'" : wd.w + " — 짧은 '아'") + ' (' + wd.ko + ')';
    try { playCorrectSound(); } catch (e) {}
    setTimeout(() => { loIdx++; if (loIdx < loOrder.length) renderLoQ(); else finishLongo(); }, 1100);
  } else {
    loWrong++;
    btn.classList.add('no'); setTimeout(() => btn.classList.remove('no'), 450);
    try { playWrongSound(); } catch (e) {}
    msg.style.color = 'var(--danger)';
    msg.textContent = '다시 들어 봐요! 소리를 길게 늘여 말해 볼까요?';
    speak(wd.w);
  }
}
function finishLongo() {
  exPhase = 'done';
  const total = loOrder.length, passed = loScore / total >= 0.7;
  phShow();
  exEl('exStage').textContent = '결과';
  exEl('exLead').textContent = '';
  exEl('exLearn').innerHTML = '<div class="lotip">' + exConf.tip + '</div><div class="lolist">' + exConf.words.map(wd =>
    '<div class="' + (wd.rule ? 'long' : '') + '">' + (wd.rule ? phHighlight(wd.w, wd.rule) + ' ⭕' : wd.w + ' ✖') + ' <small>' + wd.ko + '</small></div>').join('') + '</div>';
  exEl('exDone').hidden = false;
  exEl('exScore').textContent = loScore + ' / ' + total;
  const badge = exEl('exBadge');
  badge.className = 'passbadge ' + (passed ? 'pass' : 'fail');
  badge.textContent = passed ? "✅ 긴 '오우' 통과!" : '아쉬워요, 다시 도전해요';
  exEl('exCount').textContent = '한 번에 맞힌 낱말';
  const b = exEl('exMainBtn');
  b.hidden = false; b.disabled = false; b.textContent = passed ? '모드 선택으로 →' : '다시 하기';
  if (passed) { try { launchConfetti(); playCelebrationSound(); } catch (e) {} markLocalProgress(currentSet, 'longo', true); }
}
function longoMain() {
  if (exPhase === 'lo1') { startLoQuiz(); return; }
  if (exPhase === 'done' && exEl('exBadge').classList.contains('pass')) { openModeScreen(currentSet); return; }
  startLoQuiz();
}

/* ===== 직업 Is she a ~? (D2-2, 2026-10-19) ===== */
let jySeen = new Set(), jyIdx = 0, jyScore = 0, jyWrong = 0, jyBusy = false;
function jyJob(id) { return exConf.jobs.find(j => j.id === id); }
function jyA(en) { return /^[aeiou]/.test(en) ? 'an ' + en : 'a ' + en; }
function jyQ(q) {   // 질문·대답 문장 (Pattern Drill과 같은 꼴)
  const ask = jyJob(q.ask), pic = jyJob(q.pic), yes = q.ask === q.pic;
  if (q.who === 'they') return { ask: 'Are they ' + ask.en + 's?', yes: yes, a1: 'Yes, they are.', a2: 'No, they aren\'t.', say: (yes ? 'Yes, they are. ' : 'No, they aren\'t. ') + 'They are ' + pic.en + 's.' };
  const W = q.who === 'she' ? 'She' : 'He';
  return { ask: 'Is ' + q.who + ' ' + jyA(ask.en) + '?', yes: yes, a1: 'Yes, ' + q.who + ' is.', a2: 'No, ' + q.who + ' isn\'t.', say: (yes ? 'Yes, ' + q.who + ' is. ' : 'No, ' + q.who + ' isn\'t. ') + W + ' is ' + jyA(pic.en) + '.' };
}
function jyPic(q) {   // 그림: 여러 명(they)이면 q.e(남녀 섞어 2~3명), 없으면 셋
  const e = jyJob(q.pic).e;
  return q.e || (q.who === 'they' ? e + e + e : e);
}
function renderJobsYn() {
  jySeen = new Set(); exPhase = 'jy1';
  phShow();
  exEl('exStage').textContent = 'STEP 1 · 직업 카드';
  exEl('exLead').textContent = '카드를 눌러 직업 이름을 들어 보세요. What does she do? — She is a hairdresser.';
  exEl('exLearn').innerHTML = '<div class="phcards">' + exConf.jobs.map(j =>
    '<button class="phcard" data-id="' + j.id + '"><span class="mcemoji" style="font-size:34px;">' + j.e + '</span><span class="phw" style="font-size:20px;">' + j.en + '</span><span class="phko"></span></button>').join('') + '</div>';
  exEl('exLearn').querySelectorAll('.phcard').forEach(card => card.addEventListener('click', () => {
    const j = jyJob(card.dataset.id);
    card.classList.add('seen');
    card.querySelector('.phko').textContent = j.ko + ' · ' + j.does;
    speak((j.who === 'she' ? 'She' : 'He') + ' is ' + jyA(j.en) + '. ' + j.does);
    jySeen.add(j.id); updateJyStep1();
  }));
  updateJyStep1();
}
function updateJyStep1() {
  const n = jySeen.size, total = exConf.jobs.length;
  exEl('exCount').textContent = n + ' / ' + total + ' 눌러봄';
  const b = exEl('exMainBtn');
  b.hidden = false; b.disabled = n < total;
  b.textContent = n < total ? '전부 눌러 보세요 (' + n + '/' + total + ')' : '다음: Yes / No로 대답하기 →';
}
function startJyQuiz() { exPhase = 'jy2'; jyIdx = 0; jyScore = 0; exEl('exMainBtn').hidden = true; renderJyQ(); }
function renderJyQ() {
  phShow(); jyWrong = 0; jyBusy = false;
  const q = exConf.qs[jyIdx], t = jyQ(q), total = exConf.qs.length;
  exEl('exStage').textContent = 'STEP 2 · 대답하기 ' + (jyIdx + 1) + ' / ' + total;
  exEl('exLead').textContent = '그림을 보고 질문에 대답해요.';
  exEl('exProgWrap').hidden = false;
  exEl('exProg').style.width = Math.round(jyIdx / total * 100) + '%';
  exEl('exLearn').innerHTML = '<div class="lobig" style="font-size:64px;">' + jyPic(q) + '</div>' +
    '<div class="jyask">' + t.ask + '</div><button class="loagain" id="jyAgain">🔊 다시 듣기</button>' +
    '<div class="lobtns"><button class="lobtn" data-yes="1">' + t.a1 + '</button><button class="lobtn" data-yes="0">' + t.a2 + '</button></div><div class="lomsg" id="jyMsg"></div>';
  exEl('exCount').textContent = '맞힌 문제 ' + jyScore;
  exEl('jyAgain').addEventListener('click', () => speak(t.ask));
  exEl('exLearn').querySelectorAll('.lobtn').forEach(b => b.addEventListener('click', () => jyPick(b)));
  speak(t.ask);
}
function jyPick(btn) {
  if (jyBusy) return;
  const q = exConf.qs[jyIdx], t = jyQ(q), msg = exEl('jyMsg');
  if ((btn.dataset.yes === '1') === t.yes) {
    jyBusy = true;
    if (!jyWrong) jyScore++;
    btn.classList.add('ok');
    exEl('exLearn').querySelectorAll('.lobtn').forEach(b => { b.disabled = true; });
    msg.style.color = 'var(--accent-strong)';
    msg.textContent = '⭕ ' + t.say;
    try { playCorrectSound(); } catch (e) {}
    speak(t.say);
    setTimeout(() => { jyIdx++; if (jyIdx < exConf.qs.length) renderJyQ(); else finishJobsYn(); }, 2200);
  } else {
    jyWrong++;
    btn.classList.add('no'); setTimeout(() => btn.classList.remove('no'), 450);
    try { playWrongSound(); } catch (e) {}
    msg.style.color = 'var(--danger)';
    msg.textContent = '그림을 다시 봐요! 무슨 일을 하는 사람일까요?';
  }
}
function finishJobsYn() {
  exPhase = 'done';
  const total = exConf.qs.length, passed = jyScore / total >= 0.7;
  phShow();
  exEl('exStage').textContent = '결과';
  exEl('exLead').textContent = '';
  exEl('exLearn').innerHTML = '<div class="lotip">What does she do? — She is a hairdresser.<br>Is he a doctor? — Yes, he is. / No, he isn\'t.</div>';
  exEl('exDone').hidden = false;
  exEl('exScore').textContent = jyScore + ' / ' + total;
  const badge = exEl('exBadge');
  badge.className = 'passbadge ' + (passed ? 'pass' : 'fail');
  badge.textContent = passed ? '✅ 직업 대답 통과!' : '아쉬워요, 다시 도전해요';
  exEl('exCount').textContent = '한 번에 맞힌 문제';
  const b = exEl('exMainBtn');
  b.hidden = false; b.disabled = false; b.textContent = passed ? '모드 선택으로 →' : '다시 하기';
  if (passed) { try { launchConfetti(); playCelebrationSound(); } catch (e) {} markLocalProgress(currentSet, 'jobsyn', true); }
}
function jobsYnMain() {
  if (exPhase === 'jy1') { startJyQuiz(); return; }
  if (exPhase === 'done' && exEl('exBadge').classList.contains('pass')) { openModeScreen(currentSet); return; }
  startJyQuiz();
}

/* ===== 되고 싶은 직업 월드컵 ===== */
let jbSeen = new Set(), jbBracket = [], jbWinners = [], jbPair = 0, jbBusy = false, jbChamp = null, jbToks = [], jbPlaced = [];

function jbCard(it, cls) {
  return '<button class="' + cls + '" data-id="' + it.id + '"><span class="jbe">' + it.e + '</span><span class="jbn">' + it.en + '</span><span class="jbk">' + (cls === 'jobcard' ? '' : it.ko) + '</span></button>';
}

function renderJobs() {
  jbSeen = new Set();
  exPhase = 'j1';
  phShow();
  exEl('exStage').textContent = 'STEP 1 · 직업 이름 배우기';
  exEl('exLead').textContent = '카드를 눌러 직업 이름을 배워요. 뜻이 나오고 소리가 들려요. 모두 눌러 보면 월드컵이 열려요!';
  exEl('exLearn').innerHTML = '<div class="jobgrid">' + exConf.items.map(it => jbCard(it, 'jobcard')).join('') + '</div>';
  exEl('exLearn').querySelectorAll('.jobcard').forEach(card => card.addEventListener('click', () => {
    const it = exConf.items.find(x => x.id === card.dataset.id);
    card.classList.add('seen');
    card.querySelector('.jbk').textContent = it.ko;
    speak(it.en); jbSeen.add(it.id); updateJobsLearn();
  }));
  updateJobsLearn();
}

function updateJobsLearn() {
  const n = jbSeen.size, total = exConf.items.length;
  exEl('exCount').textContent = n + ' / ' + total + ' 눌러봄';
  const b = exEl('exMainBtn');
  b.hidden = false; b.disabled = n < total;
  b.textContent = n < total ? '전부 눌러 보세요 (' + n + '/' + total + ')' : '월드컵 시작 🏆';
}

function startJobCup() {
  exPhase = 'j2';
  jbBracket = exShuffle(exConf.items.slice()).slice(0, 16);
  jbWinners = []; jbPair = 0; jbBusy = false;
  renderJobDuel();
}

function renderJobDuel() {
  phShow();
  exEl('exMainBtn').hidden = true;
  const size = jbBracket.length;
  const roundName = size === 2 ? '결승' : size + '강';
  const a = jbBracket[jbPair * 2], b = jbBracket[jbPair * 2 + 1];
  exEl('exStage').textContent = 'STEP 2 · 되고 싶은 직업 월드컵 · ' + roundName;
  exEl('exLead').textContent = '더 되고 싶은 직업을 눌러요! (' + (jbPair + 1) + ' / ' + (size / 2) + ')';
  exEl('exCount').textContent = '';
  exEl('exLearn').innerHTML = '<div class="jobduel">' + jbCard(a, 'jobduelcard') + '<div class="jobvs">VS</div>' + jbCard(b, 'jobduelcard') + '</div>';
  exEl('exLearn').querySelectorAll('.jobduelcard').forEach(card => card.addEventListener('click', () => {
    if (jbBusy) return;
    jbBusy = true;
    const it = exConf.items.find(x => x.id === card.dataset.id);
    card.classList.add('picked');
    speak(it.en);
    jbWinners.push(it);
    setTimeout(() => {
      jbBusy = false;
      jbPair++;
      if (jbPair * 2 >= jbBracket.length) {
        if (jbWinners.length === 1) { renderJobAnswer(jbWinners[0]); return; }
        jbBracket = jbWinners; jbWinners = []; jbPair = 0;
      }
      renderJobDuel();
    }, 450);
  }));
}

function renderJobAnswer(champ) {
  jbChamp = champ;
  exPhase = 'j3';
  phShow();
  exEl('exMainBtn').hidden = true;
  exEl('exStage').textContent = 'STEP 3 · 대답하기';
  exEl('exLead').textContent = '월드컵 우승 직업이에요! 질문에 문장으로 대답해 봐요.';
  exEl('exCount').textContent = '';
  const toks = exShuffle(["I'm", 'going', 'to', 'be', champ.en, 'am', 'go']).map((t, i) => ({ id: i, t: t }));
  jbToks = toks; jbPlaced = [];
  exEl('exLearn').innerHTML =
    '<div class="jobchamp"><div class="jbe big">' + champ.e + '</div><div class="jbn">' + champ.en + '</div><div class="jbk">' + champ.ko + '</div></div>' +
    '<div class="jobq">🗣️ What are you going to be? <button id="jbSay" aria-label="질문 듣기">🔊</button></div>' +
    '<div class="jobans" id="jbAns"></div><div class="jobtoks" id="jbToks"></div><div class="jobmsg" id="jbMsg"></div>';
  exEl('jbSay').addEventListener('click', () => speak('What are you going to be?'));
  speak('What are you going to be?');
  renderJobToks();
}

function renderJobToks() {
  exEl('jbAns').innerHTML = jbPlaced.map(id => '<button class="jobtok" data-id="' + id + '">' + jbToks.find(t => t.id === id).t + '</button>').join('');
  exEl('jbToks').innerHTML = jbToks.map(t => '<button class="jobtok' + (jbPlaced.indexOf(t.id) >= 0 ? ' used' : '') + '" data-id="' + t.id + '">' + t.t + '</button>').join('');
  exEl('jbAns').querySelectorAll('.jobtok').forEach(b => b.addEventListener('click', () => {
    if (exPhase !== 'j3') return;
    jbPlaced = jbPlaced.filter(id => id !== parseInt(b.dataset.id, 10));
    renderJobToks();
  }));
  exEl('jbToks').querySelectorAll('.jobtok').forEach(b => b.addEventListener('click', () => {
    if (exPhase !== 'j3') return;
    const id = parseInt(b.dataset.id, 10);
    if (jbPlaced.indexOf(id) >= 0 || jbPlaced.length >= 5) return;
    jbPlaced.push(id);
    renderJobToks();
    if (jbPlaced.length === 5) checkJobAnswer();
  }));
}

function checkJobAnswer() {
  const built = jbPlaced.map(id => jbToks.find(t => t.id === id).t).join(' ');
  const want = "I'm going to be " + jbChamp.en;
  const msg = exEl('jbMsg');
  if (built === want) { finishJobs(); return; }
  try { playWrongSound(); } catch (e) {}
  msg.style.color = 'var(--danger)';
  msg.textContent = '앗! 순서를 다시 생각해 봐요. I\'m going to be ... 로 시작해요.';
  exEl('jbAns').classList.add('shake');
  setTimeout(() => { exEl('jbAns').classList.remove('shake'); jbPlaced = []; renderJobToks(); }, 900);
}

async function finishJobs() {
  exPhase = 'j4';
  const sentence = "I'm going to be " + jbChamp.en + '.';
  exEl('jbToks').innerHTML = '';
  const msg = exEl('jbMsg');
  msg.style.color = 'var(--accent-strong)';
  msg.innerHTML = '🎉 Great! <b>' + sentence + '</b><br><span style="font-weight:500;">→ 나의 장래희망: ' + jbChamp.ko + '</span>';
  exEl('exLearn').insertAdjacentHTML('beforeend', '<button class="secondary" id="jbAgain" style="width:100%;margin-top:14px;">🏆 월드컵 다시 하기</button>');
  exEl('jbAgain').addEventListener('click', startJobCup);
  speak(sentence);
  const b = exEl('exMainBtn');
  b.hidden = false; b.disabled = false; b.textContent = '모드 선택으로 →';
  try { launchConfetti(); playCelebrationSound(); } catch (e) {}
  markLocalProgress(currentSet, 'jobs', true);
  if (db) {
    try {
      const id = 'r_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
      await db.doc('quiz_results/' + id).set({ name: currentName, mode: 'jobs', setNo: currentSet, ts: Date.now(), passed: true, job: jbChamp.en });
    } catch (e) {}
  }
}

function jobsMain() {
  if (exPhase === 'j1') { startJobCup(); return; }
  if (exPhase === 'j4') { openModeScreen(currentSet); return; }
}


function pkLeaf(x, y, s, r) {
  return '<g transform="translate(' + x + ' ' + y + ') rotate(' + r + ') scale(' + s + ')"><path class="pkl" d="M0 0 C-15 -9 -15 -27 0 -35 C15 -27 15 -9 0 0 Z"/><path class="pkv" d="M0 -2 L0 -28"/></g>';
}
function pkFlower(x, y, s) {
  let p = '';
  for (let a = 0; a < 360; a += 72) p += '<ellipse class="pkf" cx="0" cy="-9" rx="5.5" ry="10" transform="rotate(' + a + ')"/>';
  return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' + p + '<circle class="pkfc" r="4"/></g>';
}
function pkRidges(cx, cy, rx, ry) {
  const k = [-0.55, -0.2, 0.2, 0.55];
  return k.map(t => '<path class="pkr" d="M' + (cx + rx * t * 0.35) + ' ' + (cy - ry * 0.92) + ' C' + (cx + rx * t * 1.3) + ' ' + (cy - ry * 0.3) + ' ' + (cx + rx * t * 1.3) + ' ' + (cy + ry * 0.3) + ' ' + (cx + rx * t * 0.35) + ' ' + (cy + ry * 0.92) + '"/>').join('');
}
function pkVine(y) {
  const d = y || 0;
  return '<path class="pkvine" d="M12 ' + (80 + d) + ' C38 ' + (60 + d) + ' 58 ' + (94 + d) + ' 88 ' + (76 + d) + ' C110 ' + (62 + d) + ' 128 ' + (72 + d) + ' 148 ' + (66 + d) + '"/>' +
    '<path class="pkvine thin" d="M12 ' + (80 + d) + ' C4 ' + (72 + d) + ' 6 ' + (56 + d) + ' 20 ' + (58 + d) + ' C28 ' + (60 + d) + ' 24 ' + (70 + d) + ' 16 ' + (68 + d) + '"/>';
}
function pumpkinScene(n) {
  const open = '<svg class="pksvg" viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="호박이 자라는 그림 ' + n + '"><rect class="pkbg" x="1" y="1" width="158" height="118" rx="9"/>';
  let b = '';
  if (n === 1) {
    b = '<path class="pksoil" d="M1 94 C20 80 40 78 56 90 C70 100 90 100 104 88 C120 76 140 80 159 90 V111 a8 8 0 0 1 -8 8 H9 a8 8 0 0 1 -8 -8 Z"/>' +
      '<ellipse class="pkseed" cx="84" cy="44" rx="14" ry="9" transform="rotate(-35 84 44)"/>' +
      '<path class="pkr" d="M76 49 C82 44 88 40 94 36"/>' +
      '<path class="pkarc" d="M100 24 C112 14 124 14 134 20 M104 34 C114 28 122 28 130 32"/>';
  } else if (n === 2) {
    b = '<path class="pksoil" d="M1 98 C30 92 60 94 90 98 C120 96 140 94 159 96 V111 a8 8 0 0 1 -8 8 H9 a8 8 0 0 1 -8 -8 Z"/>' +
      '<path class="pks" d="M82 98 V60"/>' + pkLeaf(82, 66, 0.8, -62) + pkLeaf(82, 66, 0.8, 62) + pkLeaf(82, 56, 0.6, 0);
  } else if (n === 3) {
    b = pkVine(0) + pkLeaf(36, 68, 1, -55) + pkLeaf(60, 84, 1, 150) + pkLeaf(92, 74, 1.15, -25) + pkLeaf(124, 68, 0.95, 45);
  } else if (n === 4) {
    b = pkVine(0) + pkLeaf(34, 70, 0.95, -55) + pkLeaf(62, 86, 0.95, 150) + pkLeaf(124, 70, 0.95, 40) + pkFlower(70, 62, 1.15) + pkFlower(104, 56, 0.9);
  } else if (n === 5) {
    b = pkVine(-10) + pkLeaf(34, 58, 0.95, -55) + pkLeaf(66, 74, 0.95, 150) + pkLeaf(132, 56, 0.95, 40) +
      '<ellipse class="pkg" cx="98" cy="92" rx="14" ry="11"/>' + pkRidges(98, 92, 14, 11) + '<path class="pks" d="M98 82 C98 76 100 72 104 70"/>';
  } else if (n === 6) {
    b = pkVine(-14) + pkLeaf(32, 54, 0.95, -55) + pkLeaf(66, 70, 0.95, 150) + pkLeaf(134, 52, 1, 40) +
      '<ellipse class="pko" cx="100" cy="92" rx="24" ry="19"/>' + pkRidges(100, 92, 24, 19) + '<path class="pks" d="M100 74 C100 68 103 65 107 64"/>';
  } else if (n === 7) {
    b = '<path class="pkvine" d="M10 44 C40 34 70 56 100 44 C120 36 136 42 150 38"/>' + pkLeaf(34, 44, 0.95, -55) + pkLeaf(72, 62, 0.85, 150) +
      '<ellipse class="pko" cx="86" cy="84" rx="40" ry="30"/>' + pkRidges(86, 84, 40, 30) + '<path class="pks" d="M86 55 C86 48 90 44 96 43"/>' + pkLeaf(116, 66, 1.35, 35);
  } else {
    let crust = '';
    for (let i = 0; i < 9; i++) crust += '<circle class="pkcrust" cx="' + (38 + i * 10.5) + '" cy="' + (66 + (i % 2) * 1.5) + '" r="6"/>';
    b = '<path class="pktin" d="M26 70 L38 104 H122 L134 70 Z"/><path class="pkr" d="M52 76 L56 102 M72 78 L74 102 M92 78 L90 102 M110 76 L106 102"/>' +
      '<ellipse class="pkpie" cx="80" cy="68" rx="56" ry="19"/>' + crust + '<ellipse class="pkpie2" cx="80" cy="68" rx="42" ry="12"/>' +
      '<path class="pkr" d="M80 68 L80 62 M80 68 L86 65 M80 68 L74 65 M80 68 L84 73 M80 68 L76 73"/>';
  }
  return open + b + '</svg>';
}

/* ===== 그림과 문장 연결하기 (How a pumpkin grows) ===== */
let stSeen = new Set(), stSel = null, stPlaced = {}, stMistakes = 0, stDragBound = false, stDrag = null, stTimer = null;

function renderStory() {
  stSeen = new Set(); stSel = null; stPlaced = {}; stMistakes = 0;
  clearTimeout(stTimer);
  exPhase = 's1';
  phShow();
  exEl('exStage').textContent = 'STEP 1 · 그림 보고 문장 읽기';
  exEl('exLead').textContent = '호박이 자라는 이야기예요. 그림을 눌러 문장을 읽어 보세요. 소리도 들려요!';
  exEl('exLearn').innerHTML = '<div class="stgrid">' + exConf.steps.map(s =>
    '<button class="stcard" data-n="' + s.n + '"><span class="stnum">' + s.n + '</span>' + pumpkinScene(s.n) + '<div class="stcap">&nbsp;</div></button>').join('') + '</div>';
  exEl('exLearn').querySelectorAll('.stcard').forEach(card => card.addEventListener('click', () => {
    const s = exConf.steps.find(x => x.n === parseInt(card.dataset.n, 10));
    card.classList.add('seen');
    card.querySelector('.stcap').innerHTML = s.s + '<span class="stko">' + s.ko + '</span>';
    speak(s.s); stSeen.add(s.n); updateStoryLearn();
  }));
  updateStoryLearn();
}

function updateStoryLearn() {
  const n = stSeen.size, total = exConf.steps.length;
  exEl('exCount').textContent = n + ' / ' + total + ' 읽어봄';
  const b = exEl('exMainBtn');
  b.hidden = false; b.disabled = n < total;
  b.textContent = n < total ? '그림을 모두 눌러 보세요 (' + n + '/' + total + ')' : '다음: 문장과 그림 연결하기 →';
}

function renderStoryMatch() {
  stSel = null; stPlaced = {}; stMistakes = 0;
  exPhase = 's2';
  phShow();
  exEl('exStage').textContent = 'STEP 2 · 문장과 그림 연결하기';
  exEl('exLead').textContent = '문장을 끌어서 (또는 눌러서) 알맞은 그림에 놓아요.';
  exEl('exLearn').innerHTML = '<div class="stgrid">' + exConf.steps.map(s =>
    '<div class="stslot" data-n="' + s.n + '"><span class="stnum">' + s.n + '</span>' + pumpkinScene(s.n) + '<div class="stcap" id="stCap_' + s.n + '">&nbsp;</div></div>').join('') + '</div>' +
    '<div class="stchips" id="stChips">' + exShuffle(exConf.steps.slice()).map(s => '<div class="stchip" data-n="' + s.n + '">' + s.s + '</div>').join('') + '</div>' +
    '<div class="phmsg" id="stMsg"></div>';
  exEl('exMainBtn').hidden = true;
  updateStoryCount();
  exEl('exLearn').querySelectorAll('.stslot').forEach(sl => sl.addEventListener('click', () => {
    if (stSel) stTryPlace(stSel, parseInt(sl.dataset.n, 10));
  }));
  if (!stDragBound) {
    stDragBound = true;
    document.addEventListener('pointermove', stPointerMove);
    document.addEventListener('pointerup', stPointerUp);
  }
  exEl('stChips').addEventListener('pointerdown', e => {
    const chip = e.target.closest('.stchip');
    if (!chip || chip.classList.contains('placed')) return;
    stDrag = { chip: chip, sx: e.clientX, sy: e.clientY, moved: false, ghost: null };
  });
}

function stPointerMove(e) {
  if (!stDrag) return;
  if (!stDrag.moved && Math.hypot(e.clientX - stDrag.sx, e.clientY - stDrag.sy) > 8) {
    stDrag.moved = true;
    const g = stDrag.chip.cloneNode(true);
    g.className = 'stchip phghost stghost';
    document.body.appendChild(g);
    stDrag.ghost = g;
  }
  if (stDrag.moved && stDrag.ghost) {
    stDrag.ghost.style.left = e.clientX + 'px';
    stDrag.ghost.style.top = e.clientY + 'px';
    const under = document.elementFromPoint ? document.elementFromPoint(e.clientX, e.clientY) : null;
    document.querySelectorAll('.stslot').forEach(b => b.classList.toggle('over', !!(under && under.closest && under.closest('.stslot') === b)));
  }
}

function stPointerUp(e) {
  if (!stDrag) return;
  const d = stDrag; stDrag = null;
  document.querySelectorAll('.stslot').forEach(b => b.classList.remove('over'));
  if (d.moved) {
    if (d.ghost) d.ghost.remove();
    const under = document.elementFromPoint ? document.elementFromPoint(e.clientX, e.clientY) : null;
    const sl = under && under.closest ? under.closest('.stslot') : null;
    if (sl) stTryPlace(d.chip, parseInt(sl.dataset.n, 10));
  } else {
    const was = d.chip.classList.contains('sel');
    document.querySelectorAll('.stchip.sel').forEach(c => c.classList.remove('sel'));
    if (was) { stSel = null; } else {
      d.chip.classList.add('sel'); stSel = d.chip;
      const s = exConf.steps.find(x => x.n === parseInt(d.chip.dataset.n, 10));
      speak(s.s);
    }
  }
}

function updateStoryCount() {
  exEl('exCount').textContent = '연결한 문장 ' + Object.keys(stPlaced).length + ' / ' + exConf.steps.length;
}

function stTryPlace(chip, slotN) {
  if (chip.classList.contains('placed')) return;
  const n = parseInt(chip.dataset.n, 10);
  const s = exConf.steps.find(x => x.n === n);
  const msg = exEl('stMsg');
  if (n === slotN) {
    chip.classList.add('placed'); chip.classList.remove('sel'); chip.style.display = 'none';
    stSel = null;
    stPlaced[n] = true;
    const sl = exEl('exLearn').querySelector('.stslot[data-n="' + n + '"]');
    sl.classList.add('ok');
    exEl('stCap_' + n).innerHTML = s.s + '<span class="stko">' + s.ko + '</span>';
    try { playCorrectSound(); } catch (e) {}
    speak(s.s);
    msg.style.color = 'var(--accent-strong)';
    msg.textContent = '⭕ ' + n + '번 그림과 맞아요!';
    updateStoryCount();
    if (Object.keys(stPlaced).length === exConf.steps.length) finishStory();
  } else {
    stMistakes++;
    chip.classList.add('shake'); setTimeout(() => chip.classList.remove('shake'), 400);
    try { playWrongSound(); } catch (e) {}
    msg.style.color = 'var(--danger)';
    msg.textContent = '❌ 이 문장은 다른 그림이에요. 그림을 다시 살펴봐요!';
    speak(s.s);
  }
}

async function finishStory() {
  exPhase = 's3';
  const msg = exEl('stMsg');
  msg.style.color = 'var(--accent-strong)';
  msg.textContent = '🎉 이야기가 완성됐어요!' + (stMistakes ? ' (틀린 횟수 ' + stMistakes + ')' : ' 한 번도 안 틀렸어요!');
  exEl('exLearn').insertAdjacentHTML('beforeend', '<button class="secondary" id="stPlay" style="width:100%;margin-top:12px;">▶ 이야기 처음부터 들려주기</button>');
  exEl('stPlay').addEventListener('click', playStory);
  const b = exEl('exMainBtn');
  b.hidden = false; b.disabled = false; b.textContent = '모드 선택으로 →';
  try { launchConfetti(); playCelebrationSound(); } catch (e) {}
  markLocalProgress(currentSet, 'story', true);
  if (db) {
    try {
      const id = 'r_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
      await db.doc('quiz_results/' + id).set({ name: currentName, mode: 'story', setNo: currentSet, ts: Date.now(), passed: true, mistakes: stMistakes });
    } catch (e) {}
  }
}

function playStory() {
  clearTimeout(stTimer);
  let i = 0;
  const step = () => {
    document.querySelectorAll('.stslot.playing').forEach(x => x.classList.remove('playing'));
    if (i >= exConf.steps.length) return;
    const s = exConf.steps[i++];
    const sl = exEl('exLearn').querySelector('.stslot[data-n="' + s.n + '"]');
    if (sl) sl.classList.add('playing');
    speak(s.s);
    stTimer = setTimeout(step, 2800);
  };
  step();
}

function storyMain() {
  if (exPhase === 's1') { renderStoryMatch(); return; }
  if (exPhase === 's3') { clearTimeout(stTimer); openModeScreen(currentSet); return; }
}

let exKind = null, exConf = null, exPhase = 'learn', exSeen = null;
let exQs = [], exIdx = 0, exScore = 0, exLocked = false;
const exEl = id => document.getElementById(id);


function exItems() {
  return exKind === 'meals'
    ? exConf.groups.reduce((a, g) => a.concat(g.items), [])
    : exConf.parts;
}

function startExtra(kind) {
  const conf = (EXTRAS[currentSet] || {})[kind];
  if (!conf) return;
  exKind = kind; exConf = conf; exPhase = 'learn'; exSeen = new Set();
  exQs = []; exIdx = 0; exScore = 0; exLocked = false;
  exEl('modeScreen').hidden = true;
  exEl('resultCard').hidden = true;
  exEl('boardCard').hidden = true;
  hideAllModeCards();
  exEl('extraCard').hidden = false;
  renderExtraLearn();
}

function renderExtraLearn() {
  if (exKind === 'longo') { renderLongo(); return; }
  if (exKind === 'jobsyn') { renderJobsYn(); return; }
  if (exKind === 'phonics') { renderPhonics(); return; }
  if (exKind === 'jobs') { renderJobs(); return; }
  if (exKind === 'story') { renderStory(); return; }
  exEl('exStage').textContent = 'STEP 1 · 배우기';
  exEl('exTitle').textContent = exConf.title;
  exEl('exLead').textContent = exConf.lead;
  exEl('exProgWrap').hidden = true;
  exEl('exQuiz').hidden = true;
  exEl('exDone').hidden = true;
  exEl('exLearn').hidden = false;
  if (exKind === 'meals') {
    exEl('exLearn').innerHTML = exConf.groups.map(g =>
      '<div class="groupcap">' + g.cap + '</div><div class="mealgrid' + g.cls + '">' +
      g.items.map(it => '<button class="mealcard" data-en="' + it.en + '"><span class="mcemoji">' + it.e +
        '</span><span class="mcen">' + it.en + '</span><span class="mcko"></span></button>').join('') +
      '</div>').join('');
    exEl('exLearn').querySelectorAll('.mealcard').forEach(btn => {
      btn.addEventListener('click', () => {
        const it = exItems().find(x => x.en === btn.dataset.en);
        btn.classList.add('seen');
        btn.querySelector('.mcko').textContent = it.ko;
        speak(it.en); exSeen.add(it.en); updateExLearn();
      });
    });
  } else if (exKind === 'plant') {
    renderPlantLearn();
  } else {
    exEl('exLearn').innerHTML = '<div class="dogwrap">' + dogSvg() + '</div>' +
      '<div class="dogcaption" id="dogCaption"><div class="dcidle">그림의 한 곳을 눌러 보세요 👆</div></div>';
    exEl('exLearn').querySelectorAll('.part').forEach(g => {
      g.addEventListener('click', () => {
        const it = exConf.parts.find(x => x.id === g.dataset.part);
        g.classList.add('seen');
        exEl('dogCaption').innerHTML = '<div class="dcen">' + it.en + '</div><div class="dcko">' + it.ko + '</div>';
        speak(it.en); exSeen.add(it.id); updateExLearn();
      });
    });
  }
  updateExLearn();
}

function updateExLearn() {
  const all = exItems();
  const key = exKind === 'meals' ? 'en' : 'id';
  const done = all.filter(x => exSeen.has(x[key])).length;
  exEl('exCount').textContent = done + ' / ' + all.length + ' 눌러봄';
  const btn = exEl('exMainBtn');
  btn.hidden = false;
  btn.disabled = done < all.length;
  btn.textContent = done < all.length ? '전부 눌러 보세요 (' + done + '/' + all.length + ')' : '퀴즈 시작 →';
}

function exShuffle(a) {
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; }
  return a;
}

function buildExtraQuiz() {
  const all = exItems();
  if (exKind === 'plant') {
    exQs = exShuffle(all.slice()).map((it, i) => {
      if (i % 2 === 0) return { kind: 'pick', item: it };
      const others = exShuffle(all.filter(x => x.id !== it.id)).slice(0, 3).map(x => x.en);
      return { kind: 'name', item: it, correct: it.en, choices: exShuffle([it.en].concat(others)) };
    });
    exIdx = 0; exScore = 0; exPhase = 'quiz';
    return;
  }
  const pool = exShuffle(all.slice());
  exQs = pool.map((it, i) => {
    if (exKind === 'body') return { kind: 'pick', item: it };
    const en2ko = i % 2 === 0;
    const others = exShuffle(all.filter(x => x.en !== it.en));
    const correct = en2ko ? it.ko : it.en;
    const choices = exShuffle([correct].concat(others.slice(0, 3).map(x => en2ko ? x.ko : x.en)));
    return { kind: 'choice', item: it, prompt: en2ko ? it.en : it.ko, correct: correct, choices: choices, speakIt: en2ko };
  });
  exIdx = 0; exScore = 0; exPhase = 'quiz';
}

function renderExtraQ() {
  const q = exQs[exIdx];
  exLocked = false;
  exEl('exStage').textContent = 'STEP 2 · 퀴즈';
  exEl('exTitle').textContent = exConf.title;
  exEl('exLead').textContent = exKind === 'body' ? '그림에서 눌러 보세요.' : '알맞은 것을 고르세요.';
  exEl('exLearn').hidden = true;
  exEl('exDone').hidden = true;
  exEl('exQuiz').hidden = false;
  exEl('exProgWrap').hidden = false;
  exEl('exProg').style.width = Math.round(exIdx / exQs.length * 100) + '%';
  exEl('exQnum').textContent = (exIdx + 1) + ' / ' + exQs.length;
  exEl('exFeedback').hidden = true;
  exEl('exMainBtn').hidden = true;
  exEl('exCount').textContent = '맞힌 개수 ' + exScore;
  if (exKind === 'plant') { renderPlantQ(q); return; }
  if (q.kind === 'choice') {
    exEl('exPicture').hidden = true;
    exEl('exPrompt').textContent = q.prompt;
    if (q.speakIt) speak(q.item.en);
    const box = exEl('exChoices');
    box.hidden = false;
    box.innerHTML = q.choices.map(c => '<button class="choice">' + c + '</button>').join('');
    box.querySelectorAll('.choice').forEach(b => b.addEventListener('click', () => answerExtra(b.textContent === q.correct, q, b)));
  } else {
    exEl('exChoices').hidden = true;
    exEl('exPrompt').textContent = q.item.ko;
    speak(q.item.en);
    const pic = exEl('exPicture');
    pic.hidden = false;
    pic.innerHTML = '<div class="dogwrap">' + dogSvg() + '</div>';
    pic.querySelectorAll('.part').forEach(g => g.addEventListener('click', () => {
      if (exLocked) return;
      const ok = g.dataset.part === q.item.id;
      g.classList.add(ok ? 'hit' : 'miss');
      if (!ok) { const right = pic.querySelector('[data-part="' + q.item.id + '"]'); if (right) right.classList.add('hit'); }
      answerExtra(ok, q, null);
    }));
  }
}

function answerExtra(ok, q, btn) {
  if (exLocked) return;
  exLocked = true;
  try { if (ok) { playCorrectSound(); } else { playWrongSound(); } } catch (e) {}
  if (ok) exScore++;
  if (btn) {
    const box = exEl('exChoices');
    box.querySelectorAll('.choice').forEach(b => {
      b.disabled = true;
      if (b.textContent === q.correct) b.classList.add('correct');
      else if (b === btn) b.classList.add('wrong');
    });
  }
  const fb = exEl('exFeedback');
  fb.hidden = false;
  fb.className = 'spellfeedback ' + (ok ? 'correct' : 'wrong');
  fb.textContent = ok ? '⭕ 맞았어요! ' + q.item.en + ' = ' + q.item.ko : '❌ 정답은 ' + q.item.en + ' (' + q.item.ko + ')';
  exEl('exCount').textContent = '맞힌 개수 ' + exScore;
  const b = exEl('exMainBtn');
  b.hidden = false; b.disabled = false;
  b.textContent = exIdx + 1 < exQs.length ? '다음 →' : '결과 보기 →';
}

async function finishExtra() {
  const total = exQs.length;
  const pct = Math.round(exScore / total * 100);
  const passed = pct >= PASS_PCT;
  exPhase = 'done';
  exEl('exQuiz').hidden = true;
  exEl('exLearn').hidden = true;
  exEl('exProgWrap').hidden = true;
  exEl('exDone').hidden = false;
  exEl('exStage').textContent = '결과';
  exEl('exLead').textContent = '';
  exEl('exScore').textContent = exScore + ' / ' + total;
  const badge = exEl('exBadge');
  badge.className = 'passbadge ' + (passed ? 'pass' : 'fail');
  badge.textContent = passed ? '✅ 통과!' : '다시 한 번 해볼까요?';
  exEl('exCount').textContent = '';
  const b = exEl('exMainBtn');
  b.hidden = false; b.disabled = false;
  b.textContent = passed ? '모드 선택으로 →' : '다시 하기';
  if (passed) {
    try { launchConfetti(); playCelebrationSound(); } catch (e) {}
    markLocalProgress(currentSet, exKind, true);
    if (db) {
      try {
        const id = 'r_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
        await db.doc('quiz_results/' + id).set({ name: currentName, mode: exKind, setNo: currentSet, ts: Date.now(), score: exScore, total: total, pct: pct, passed: true });
      } catch (e) {}
    }
  }
}

document.getElementById('extraExitBtn').addEventListener('click', function () { openModeScreen(currentSet); });
document.getElementById('exMainBtn').addEventListener('click', function () {
  if (exKind === 'longo') { longoMain(); return; }
  if (exKind === 'jobsyn') { jobsYnMain(); return; }
  if (exKind === 'phonics') { phonicsMain(); return; }
  if (exKind === 'jobs') { jobsMain(); return; }
  if (exKind === 'story') { storyMain(); return; }
  if (exPhase === 'learn') { buildExtraQuiz(); renderExtraQ(); return; }
  if (exPhase === 'quiz') {
    if (exIdx + 1 < exQs.length) { exIdx++; renderExtraQ(); }
    else finishExtra();
    return;
  }
  if (exEl('exBadge').classList.contains('pass')) { openModeScreen(currentSet); }
  else { buildExtraQuiz(); renderExtraQ(); }
});
