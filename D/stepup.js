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
    phonics: null
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
    phonics: null,
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


/* ===== 파닉스 총정리 (책마다, 엘레나 2026-10-22): STEP 1 소리 듣기 → STEP 2 듣고 분류하기 → STEP 3 듣고 골라 쓰기 ===== */
const PH_DATA = {"1-1":{"s":"Long A","ti":"🔊 파닉스 Long A 총정리","hi":"ai · ay · a_e 모으기","so":"Long A는 알파벳 A의 이름처럼 '에이~' 하고 길게 소리 나요. 카드를 눌러 소리를 들어 보세요. 빨간 글자가 Long A 철자예요.","r":[["ai","ai","ai 소리"],["ay","ay","ay 소리"],["a_e","a_e","a + e (마법의 e)"]],"w":[["paint","ai","칠하다, 페인트","🎨"],["mail","ai","우편","📬"],["nail","ai","손톱","💅"],["rain","ai","비","🌧️"],["snail","ai","달팽이","🐌"],["train","ai","기차","🚂"],["tray","ay","쟁반","🍽️"],["lay","ay","놓다",""],["hay","ay","건초","🌾"],["pay","ay","돈을 내다","💰"],["name","a_e","이름","📛"],["maze","a_e","미로","🧩"],["mane","a_e","(동물의) 갈기","🦁"],["cape","a_e","망토","🦸"],["tape","a_e","테이프","📼"]],"q":["rain","snail","train","tray","hay","name","cape","tape"]},"1-2":{"s":"Long E","ti":"🔊 파닉스 Long E 총정리","hi":"ea · ee 모으기","so":"Long E는 알파벳 E의 이름처럼 '이~' 하고 길게 소리 나요. 카드를 눌러 소리를 들어 보세요. 빨간 글자가 Long E 철자예요.","r":[["ea","ea","ea 소리"],["ee","ee","ee 소리"]],"w":[["read","ea","읽다","📖"],["meat","ea","고기","🥩"],["tea","ea","차","🍵"],["team","ea","팀","👥"],["peas","ea","완두콩","🟢"],["peach","ea","복숭아","🍑"],["feet","ee","발 (두 발)","🦶"],["tree","ee","나무","🌳"],["seed","ee","씨앗","🌰"],["bee","ee","벌","🐝"],["heel","ee","발뒤꿈치",""],["beet","ee","비트",""],["weed","ee","잡초","🌿"],["peel","ee","껍질을 벗기다","🍌"],["three","ee","셋","3️⃣"]],"q":["meat","tea","peas","peach","feet","tree","seed","bee"]},"2-1":{"s":"Long I","ti":"🔊 파닉스 Long I 총정리","hi":"ie · igh · y 모으기","so":"Long I는 알파벳 I의 이름처럼 '아이~' 하고 길게 소리 나요. 카드를 눌러 소리를 들어 보세요. 빨간 글자가 Long I 철자예요.","r":[["ie","ie","ie 소리"],["igh","igh","igh 소리"],["y","y","y 소리"]],"w":[["tie","ie","넥타이, 묶다","👔"],["fried","ie","튀긴","🍳"],["dried","ie","말린",""],["lie","ie","눕다, 거짓말",""],["die","ie","죽다",""],["pie","ie","파이","🥧"],["night","igh","밤","🌙"],["tight","igh","꽉 끼는",""],["high","igh","높은","⬆️"],["fight","igh","싸우다","🥊"],["light","igh","빛, 불","💡"],["cry","y","울다","😭"],["dry","y","마른","🌵"],["shy","y","부끄럼 타는","🙈"],["fly","y","날다","🕊️"]],"q":["tie","fried","pie","night","light","fight","cry","shy"]},"2-2":{"s":"Long O","ti":"🔊 파닉스 Long O 총정리","hi":"o_e · oa · oe · ow 모으기","so":"Long O는 알파벳 O의 이름처럼 '오우~' 하고 길게 소리 나요. 카드를 눌러 소리를 들어 보세요. 빨간 글자가 Long O 철자예요.","r":[["o_e","o_e","o + e (마법의 e)"],["oa","oa","oa 소리"],["oe","oe","oe 소리"],["ow","ow","ow 소리 (snow)"]],"w":[["robe","o_e","가운","👘"],["hole","o_e","구멍","🕳️"],["vote","o_e","투표하다","🗳️"],["goat","oa","염소","🐐"],["boat","oa","배","⛵"],["coat","oa","외투","🧥"],["soap","oa","비누","🧼"],["road","oa","길","🛣️"],["toast","oa","토스트","🍞"],["toe","oe","발가락","🦶"],["doe","oe","암사슴","🦌"],["bow","ow","리본","🎀"],["grow","ow","자라다","🌱"],["snow","ow","눈","❄️"],["bowl","ow","그릇","🥣"]],"q":["robe","hole","goat","boat","coat","toe","snow","bowl"]},"3-1":{"s":"Long U","ti":"🔊 파닉스 Long U 총정리","hi":"ew · u_e · ue · ui 모으기","so":"Long U는 알파벳 U의 이름처럼 소리 나요 (우~ / 유~). 카드를 눌러 소리를 들어 보세요. 빨간 글자가 Long U 철자예요.","r":[["ew","ew","ew 소리"],["u_e","u_e","u + e (마법의 e)"],["ue","ue","ue 소리"],["ui","ui","ui 소리"]],"w":[["tune","u_e","곡조","🎵"],["dune","u_e","모래 언덕","🏜️"],["tube","u_e","관, 튜브",""],["cube","u_e","정육면체","🧊"],["cute","u_e","귀여운","🥰"],["huge","u_e","거대한","🐘"],["flew","ew","날았다 (fly의 과거)",""],["new","ew","새로운","🆕"],["grew","ew","자랐다 (grow의 과거)","🌿"],["cue","ue","신호",""],["blue","ue","파란색","🔵"],["glue","ue","풀","🧴"],["juice","ui","주스","🧃"],["fruit","ui","과일","🍎"],["suit","ui","정장","🤵"]],"q":["tune","cube","cute","new","grew","blue","juice","fruit"]},"3-2":{"s":"L 블렌드","ti":"🔊 파닉스 L 블렌드 총정리","hi":"bl · cl · fl · pl/gl/sl 모으기","so":"L 블렌드는 자음 뒤에 l이 붙어서 두 소리가 이어져 나요 (bl, cl, fl, pl, gl, sl). 카드를 눌러 소리를 들어 보세요. 빨간 글자가 블렌드예요.","r":[["bl","bl","blue"],["cl","cl","clap"],["fl","fl","flag"],["pgs","pl · gl · sl","plane · glass · slide"]],"w":[["blend","bl","섞다",""],["block","bl","블록","🧱"],["blue","bl","파란색","🔵"],["clap","cl","박수 치다","👏"],["clean","cl","깨끗한, 청소하다","🧹"],["clip","cl","클립","📎"],["fly","fl","날다","🕊️"],["float","fl","(물에) 뜨다","🛟"],["flame","fl","불꽃","🔥"],["plane","pgs","비행기","✈️","pl"],["plum","pgs","자두","","pl"],["plate","pgs","접시","🍽️","pl"],["slide","pgs","미끄럼틀","🛝","sl"],["glass","pgs","유리잔","🥛","gl"],["glove","pgs","장갑","🧤","gl"]],"q":["clap","flame","float","block","blue","plane","glove","slide"],"c":["bl","cl","fl","pl","gl","sl"]},"4-1":{"s":"R 블렌드","ti":"🔊 파닉스 R 블렌드 총정리","hi":"br · cr · dr · fr/gr/pr/tr 모으기","so":"R 블렌드는 자음 뒤에 r이 붙어서 두 소리가 이어져 나요 (br, cr, dr, fr, gr, pr, tr). 카드를 눌러 소리를 들어 보세요. 빨간 글자가 블렌드예요.","r":[["br","br","bread"],["cr","cr","crab"],["dr","dr","drum"],["fgpt","fr · gr · pr · tr","frog · green · prize · train"]],"w":[["brush","br","솔","🖌️"],["brown","br","갈색","🟤"],["bread","br","빵","🍞"],["crib","cr","아기 침대","🍼"],["crab","cr","게","🦀"],["crown","cr","왕관","👑"],["dream","dr","꿈","💭"],["drum","dr","북","🥁"],["dress","dr","원피스","👗"],["drop","dr","방울, 떨어뜨리다","💧"],["frog","fgpt","개구리","🐸","fr"],["frame","fgpt","액자, 틀","🖼️","fr"],["green","fgpt","초록색","🟢","gr"],["prize","fgpt","상","🏆","pr"],["train","fgpt","기차","🚂","tr"]],"q":["bread","crab","crown","drum","dress","frog","green","train"],"c":["br","cr","dr","fr","gr","pr","tr"]},"4-2":{"s":"S 블렌드","ti":"🔊 파닉스 S 블렌드 총정리","hi":"sc/sk · sl/sm/sn · sp · st/sw 모으기","so":"S 블렌드는 s 뒤에 자음이 붙어서 두 소리가 이어져 나요 (sc, sk, sl, sm, sn, sp, st, sw). 카드를 눌러 소리를 들어 보세요. 빨간 글자가 블렌드예요.","r":[["scsk","sc · sk","scarf · skirt"],["slsmsn","sl · sm · sn","sleep · smile · snake"],["sp","sp","spoon"],["stsw","st · sw","stool · swan"]],"w":[["scale","scsk","저울","⚖️","sc"],["scarf","scsk","스카프","🧣","sc"],["sky","scsk","하늘","🌤️","sk"],["skirt","scsk","치마","👗","sk"],["slide","slsmsn","미끄럼틀","🛝","sl"],["sleep","slsmsn","자다","😴","sl"],["small","slsmsn","작은","🐜","sm"],["smile","slsmsn","웃다","😊","sm"],["snake","slsmsn","뱀","🐍","sn"],["spell","sp","철자를 말하다","🔤"],["spoon","sp","숟가락","🥄"],["spot","sp","점, 얼룩","🔴"],["stamp","stsw","우표","✉️","st"],["stool","stsw","등받이 없는 의자","🪑","st"],["swan","stsw","백조","🦢","sw"]],"q":["scarf","skirt","sleep","smile","snake","spoon","stool","swan"],"c":["sc","sk","sl","sm","sn","sp","st","sw"]},"5-1":{"s":"ph · wh","ti":"🔊 파닉스 ph · wh 총정리","hi":"ph · p · wh · w 모으기","so":"ph는 f 소리, wh는 w 소리가 나요. p와 w는 그냥 p, w 소리예요. 카드를 눌러 소리를 들어 보세요. 빨간 글자가 철자예요.","r":[["ph","ph","phone"],["p","p","pond"],["wh","wh","whale"],["w","w","watch"]],"w":[["phone","ph","전화기","📱"],["dolphin","ph","돌고래","🐬"],["photo","ph","사진","📷"],["graph","ph","그래프","📊"],["elephant","ph","코끼리","🐘"],["trophy","ph","트로피","🏆"],["pond","p","연못","🏞️"],["pear","p","배 (과일)","🍐"],["purse","p","지갑","👛"],["whisker","wh","(동물의) 수염","🐱"],["whistle","wh","호루라기",""],["white","wh","흰색","⚪"],["wheel","wh","바퀴","🛞"],["wheat","wh","밀","🌾"],["whale","wh","고래","🐋"],["well","w","우물",""],["worm","w","벌레","🪱"],["watch","w","손목시계","⌚"]],"q":["phone","dolphin","photo","pear","whale","wheel","worm","watch"],"c":["ph","p","wh","w"]},"5-2":{"s":"sh · ch","ti":"🔊 파닉스 sh · ch 총정리","hi":"sh · ch 모으기","so":"sh는 '쉬' 하고 조용히 하라는 소리, ch는 '취' 하고 나는 소리예요. 카드를 눌러 소리를 들어 보세요. 빨간 글자가 철자예요.","r":[["sh","sh","shark"],["ch","ch","cheese"]],"w":[["shark","sh","상어","🦈"],["shirt","sh","셔츠","👕"],["cash","sh","현금","💵"],["brush","sh","솔","🖌️"],["shell","sh","조개껍데기","🐚"],["sheep","sh","양","🐑"],["ship","sh","배","🚢"],["dish","sh","접시","🍽️"],["bush","sh","덤불","🌿"],["pouch","ch","주머니","👝"],["couch","ch","소파","🛋️"],["cheese","ch","치즈","🧀"],["bench","ch","벤치","🪑"],["peach","ch","복숭아","🍑"],["inch","ch","인치","📏"],["branch","ch","나뭇가지","🌿"],["cherry","ch","체리","🍒"],["chick","ch","병아리","🐥"]],"q":["shark","shell","sheep","ship","couch","cheese","peach","chick"],"c":["sh","ch","th","wh"]},"6-1":{"s":"ng · nk · ck","ti":"🔊 파닉스 ng · nk · ck 총정리","hi":"ng · nk · ck 모으기","so":"낱말 끝에서 ng, nk, ck가 한 덩어리 소리를 내요. 카드를 눌러 소리를 들어 보세요. 빨간 글자가 철자예요.","r":[["ng","ng","king"],["nk","nk","bank"],["ck","ck","clock"]],"w":[["king","ng","왕","👑"],["ring","ng","반지","💍"],["long","ng","긴","📏"],["sing","ng","노래하다","🎤"],["swing","ng","그네",""],["bank","nk","은행","🏦"],["sink","nk","싱크대","🚰"],["skunk","nk","스컹크","🦨"],["pink","nk","분홍색","💗"],["chick","ck","병아리","🐥"],["black","ck","검은색","⚫"],["back","ck","등, 뒤","🔙"],["stick","ck","막대기","🪵"],["truck","ck","트럭","🚚"],["neck","ck","목","🦒"],["clock","ck","시계","🕰️"],["brick","ck","벽돌","🧱"],["rock","ck","바위","🪨"]],"q":["king","ring","sing","bank","skunk","truck","clock","brick"],"c":["ng","nk","ck","ch"]},"6-2":{"s":"th","ti":"🔊 파닉스 th 두 소리 총정리","hi":"바람 소리 · 목이 울리는 소리","so":"th는 두 가지 소리가 나요. 혀를 내밀고 바람만 내보내는 소리(three)와, 목이 울리는 소리(this)예요. 카드를 눌러 소리를 들어 보세요. 빨간 글자가 th예요.","r":[["th1","th 🌬️","바람 소리 (three)"],["th2","th 🗣️","목이 울려요 (this)"]],"w":[["tooth","th1","이, 치아","🦷","th"],["three","th1","셋","3️⃣","th"],["bath","th1","목욕","🛁","th"],["wreath","th1","화환","💐","th"],["mouth","th1","입","👄","th"],["thorn","th1","가시","🌹","th"],["thief","th1","도둑","🦹","th"],["thread","th1","실","🧵","th"],["moth","th1","나방","🦋","th"],["thumb","th1","엄지손가락","👍","th"],["weather","th2","날씨","⛅","th"],["this","th2","이것","👇","th"],["father","th2","아버지","👨","th"],["mother","th2","어머니","👩","th"]],"q":["tooth","three","bath","mouth","thumb","moth","mother","father"],"c":["th","sh","ch","wh"]},"7-1":{"s":"긴 모음 복습","ti":"🔊 파닉스 긴 모음 복습","hi":"Long A · E · I · O 모으기","so":"배운 긴 모음(A · E · I · O) 낱말을 다시 만나요. 카드를 눌러 소리를 들어 보세요. 빨간 글자가 긴 모음 철자예요.","r":[["A","Long A","tail · say · chase"],["E","Long E","each · me · street"],["I","Long I","my · bye · time"],["O","Long O","go · hope · home"]],"w":[["tail","A","꼬리","","ai"],["say","A","말하다","💬","ay"],["chase","A","쫓다","🏃","a_e"],["each","E","각각","","ea"],["me","E","나를","🙋","e"],["street","E","거리","🏘️","ee"],["my","I","나의","","y"],["bye","I","안녕 (헤어질 때)","👋","ye"],["time","I","시간","⏰","i_e"],["go","O","가다","🚶","o"],["hope","O","바라다","🤞","o_e"],["home","O","집","🏠","o_e"]],"q":["chase","say","me","street","bye","time","go","home"]},"7-2":{"s":"블렌드 복습","ti":"🔊 파닉스 블렌드 복습","hi":"L · R · S · 그 밖 모으기","so":"배운 블렌드(L · R · S)와 이중자음 낱말을 다시 만나요. 카드를 눌러 소리를 들어 보세요. 빨간 글자가 블렌드예요.","r":[["L","L 블렌드","cl · fl"],["R","R 블렌드","dr · tr · gr"],["S","S 블렌드","st"],["etc","그 밖","ch · sh · th"]],"w":[["clear","L","맑은, 분명한","","cl"],["cloud","L","구름","☁️","cl"],["flag","L","깃발","🚩","fl"],["dream","R","꿈","💭","dr"],["tree","R","나무","🌳","tr"],["grow","R","자라다","🌱","gr"],["star","S","별","⭐","st"],["still","S","아직도, 가만히","","st"],["study","S","공부하다","📚","st"],["chair","etc","의자","🪑","ch"],["sheep","etc","양","🐑","sh"],["thin","etc","얇은, 마른","","th"]],"q":["cloud","flag","dream","tree","grow","star","chair","sheep"],"c":["cl","fl","dr","tr","gr","st","ch","sh","th"]},"8-1":{"s":"이중자음","ti":"🔊 파닉스 이중자음 복습","hi":"바른 철자 고르기","so":"소리를 듣고 바른 철자를 골라요. 먼저 카드를 눌러 소리와 철자를 눈과 귀로 익혀요.","w":[["brick","","벽돌","🧱"],["shadow","","그림자","🌑"],["trophy","","트로피","🏆"],["chalk","","분필","✏️"],["thumb","","엄지손가락","👍"],["pouch","","주머니","👝"],["photo","","사진","📷"],["whistle","","호루라기",""],["trash","","쓰레기","🗑️"],["wreath","","화환","💐"],["ring","","반지","💍"],["whisker","","(동물의) 수염","🐱"]],"p":{"brick":["brik","brich"],"shadow":["shado","shaddow"],"trophy":["trofy","trophie"],"chalk":["chauk","chawk"],"thumb":["thum","thumbe"],"pouch":["powch","pouche"],"photo":["foto","photoe"],"whistle":["wistle","whissle"],"trash":["trach","trasch"],"wreath":["reath","wreeth"],"ring":["rin","ringg"],"whisker":["wisker","whisler"]},"q":["brick","shadow","trophy","chalk","thumb","pouch","photo","whistle","trash","wreath","ring","whisker"]},"8-2":{"s":"ch · tch","ti":"🔊 파닉스 ch · tch 총정리","hi":"ch · tch 모으기","so":"ch와 tch는 둘 다 같은 소리(취)가 나요. 짧은 모음 뒤에서는 tch를 써요. 카드를 눌러 소리를 들어 보세요. 빨간 글자가 철자예요.","r":[["ch","ch","touch"],["tch","tch","match"]],"w":[["touch","ch","만지다","👆"],["peach","ch","복숭아","🍑"],["munch","ch","우적우적 먹다","😋"],["bunch","ch","다발, 송이","🍇"],["match","tch","성냥, 경기",""],["watch","tch","지켜보다, 손목시계","⌚"],["stretch","tch","늘이다, 쭉 펴다","🤸"],["catch","tch","잡다","🤲"]],"q":["touch","peach","munch","bunch","match","watch","stretch","catch"],"c":["ch","tch","sh","th"]}};   // 자료 원본: 개발도구_패치와_테스트/phonics_data_D.js
function phBuild(d) {
  return {
    title: d.ti, hint: d.hi, lead: d.s + ' 소리를 철자별로 정리해요.',
    sound: d.s, soundLead: d.so,
    rules: (d.r || []).map(x => ({ id: x[0], label: x[1], sub: x[2] })),
    words: d.w.map(x => ({ w: x[0], rule: x[1], ko: x[2], e: x[3], hl: x[4] })),
    chunks: d.c || null, pickWrong: d.p || null, qw: d.q, pick: !!d.p
  };
}
Object.keys(PH_DATA).forEach(function (s) {
  if (!EXTRAS[s]) EXTRAS[s] = {};
  EXTRAS[s].phonics = phBuild(PH_DATA[s]);
});
(function () {
  if (document.getElementById('phStyle')) return;
  const st = document.createElement('style');
  st.id = 'phStyle';
  st.textContent =
    '.phe{font-size:30px; line-height:1.1;}' +
    '.phcur{display:flex; flex-direction:column; align-items:center; gap:8px; margin:12px 0; padding:14px 10px; border:2px solid var(--line); border-radius:16px; background:var(--surface-2);}' +
    '.phcur .phe{font-size:56px;}' +
    '.phbig{font-family:"Andika",var(--f-ui); font-weight:800; font-size:36px; color:var(--ink);}' +
    '.phsay{font-family:inherit; font-size:15px; font-weight:700; padding:8px 16px; border-radius:999px; border:2px solid var(--accent); background:var(--surface); color:var(--accent-strong); cursor:pointer;}' +
    '.phword{display:flex; flex-wrap:wrap; justify-content:center; align-items:flex-end; gap:5px; font-family:"Andika",var(--f-ui); font-weight:800; font-size:40px; color:var(--ink);}' +
    '.phb{display:inline-flex; align-items:center; justify-content:center; min-width:36px; height:50px; border-bottom:4px solid var(--accent); color:var(--accent-strong); cursor:pointer;}' +
    '.phb.wide{min-width:70px;}.phb.good{color:var(--ok-ink,var(--accent-strong)); border-bottom-color:var(--ok,var(--accent));}' +
    '.phtiles{display:flex; flex-wrap:wrap; gap:10px; justify-content:center; margin:6px 0 2px;}' +
    '.phtile,.phopt{font-family:"Andika",var(--f-ui); font-weight:800; font-size:26px; padding:10px 18px; border-radius:12px; border:2px solid var(--line); background:var(--surface); color:var(--ink); cursor:pointer;}' +
    '.phtile.used{opacity:.3; pointer-events:none;}' +
    '.phopts{display:flex; flex-direction:column; gap:8px; width:100%; max-width:320px;}' +
    '.phopt.bad{opacity:.4; text-decoration:line-through; pointer-events:none;}.phopt.good{border-color:var(--ok,var(--accent)); background:var(--ok-soft,var(--accent-soft));}' +
    '.phans{min-height:22px; font-size:15px; color:var(--ink-soft);}' +
    '.phres{text-align:center; padding:18px 8px;}.phres .phe{font-size:48px;}.phres b{font-size:22px;}';
  document.head.appendChild(st);
})();

let phSeen = new Set(), phQueue = [], phCur = null, phPlaced = {}, phMistakes = 0, phTimer = null, phBound = false;
let phQs = [], phQi = 0, phQScore = 0, phQBad = false, phQBusy = false, phQFill = [], phQExp = [], phPass = false;

function phSp(wd) { return wd.hl || wd.rule; }   // 빨간 글자·빈칸으로 쓸 철자 (상자 id 와 다를 때 hl)

function phHighlight(w, rule) {
  if (/^[aeiou]_e$/.test(rule)) {   // u_e·o_e 등 마법의 e (D2-2 o_e 2026-10-19)
    const v = rule[0], i = w.indexOf(v);
    return w.slice(0, i) + '<span class="phl">' + v + '</span>' + w.slice(i + 1, w.length - 1) + '<span class="phl">e</span>';
  }
  const i = w.lastIndexOf(rule);
  return w.slice(0, i) + '<span class="phl">' + rule + '</span>' + w.slice(i + rule.length);
}
function phHl(wd) { return phHighlight(wd.w, phSp(wd)); }
function phEmoji(wd) { return wd.e ? '<span class="phe">' + wd.e + '</span>' : ''; }

function phShow() {
  exEl('exProgWrap').hidden = true;
  exEl('exQuiz').hidden = true;
  exEl('exDone').hidden = true;
  exEl('exLearn').hidden = false;
  exEl('exTitle').textContent = exConf.title;
}

function phBind() {
  if (phBound) return;
  phBound = true;
  exEl('exLearn').addEventListener('click', function (e) {
    if (exKind !== 'phonics') return;
    const t = e.target;
    if (t.closest('.phsay')) { const wd = exPhase === 'ph2' ? phCur : phQs[phQi]; if (wd) speak(wd.w); return; }
    const bk = t.closest('.phbucket');
    if (bk && exPhase === 'ph2') { phTryPlace(bk.dataset.rule); return; }
    const tile = t.closest('.phtile');
    if (tile && exPhase === 'ph3') { phPickTile(tile); return; }
    const opt = t.closest('.phopt');
    if (opt && exPhase === 'ph3') { phPickOpt(opt); return; }
    const blank = t.closest('.phb');
    if (blank && exPhase === 'ph3' && !phQBusy) phQReset();
  });
}

function renderPhonics() {
  phBind();
  clearTimeout(phTimer);
  phSeen = new Set(); phQueue = []; phCur = null; phPlaced = {}; phMistakes = 0;
  exPhase = 'ph1';
  phShow();
  exEl('exStage').textContent = 'STEP 1 · 소리 듣기';
  exEl('exLead').textContent = exConf.soundLead;
  exEl('exLearn').innerHTML = '<div class="phcards">' + exConf.words.map(wd =>
    '<button class="phcard" data-w="' + wd.w + '">' + phEmoji(wd) + '<span class="phw">' + wd.w + '</span><span class="phko"></span></button>').join('') + '</div>';
  exEl('exLearn').querySelectorAll('.phcard').forEach(card => card.addEventListener('click', () => {
    const wd = exConf.words.find(x => x.w === card.dataset.w);
    card.classList.add('seen');
    if (!exConf.pick) card.querySelector('.phw').innerHTML = phHl(wd);
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
  b.textContent = n < total ? '전부 눌러 보세요 (' + n + '/' + total + ')' : (exConf.pick ? '다음: 듣고 철자 고르기 →' : '다음: 듣고 분류하기 →');
}

/* ----- STEP 2 듣고 분류하기: 낱말이 한 개씩 나오며 소리가 저절로 나요 ----- */
function renderPhSort() {
  phPlaced = {}; phQueue = exShuffle(exConf.words.slice()); phCur = null;
  exPhase = 'ph2';
  phShow();
  exEl('exStage').textContent = 'STEP 2 · 듣고 분류하기';
  exEl('exLead').textContent = '낱말이 하나씩 나와요. 소리를 듣고 알맞은 상자를 눌러요. 🔊를 누르면 다시 들려요.';
  exEl('exLearn').innerHTML = '<div class="phcur" id="phCur"></div>' +
    '<div class="phbuckets">' + exConf.rules.map(r =>
      '<div class="phbucket" data-rule="' + r.id + '"><div class="phbl">' + r.label + '</div><div class="phbs">' + r.sub + '</div><div class="phdone" id="phDone_' + r.id + '"></div></div>').join('') + '</div>' +
    '<div class="phmsg" id="phMsg"></div>';
  exEl('exMainBtn').hidden = true;
  updatePhSortCount();
  phNext();
}

function phNext() {
  if (exKind !== 'phonics' || exPhase !== 'ph2') return;
  phCur = phQueue[0] || null;
  if (!phCur) return;
  exEl('phCur').innerHTML = phEmoji(phCur) + '<div class="phbig">' + phCur.w + '</div><button type="button" class="phsay">🔊 다시 듣기</button>';
  speak(phCur.w);
}

function updatePhSortCount() {
  exEl('exCount').textContent = '모은 낱말 ' + Object.keys(phPlaced).length + ' / ' + exConf.words.length;
}

function phTryPlace(rule) {
  if (!phCur || exPhase !== 'ph2') return;
  const wd = phCur, msg = exEl('phMsg');
  if (wd.rule === rule) {
    phPlaced[wd.w] = rule; phQueue.shift(); phCur = null;
    exEl('phDone_' + rule).insertAdjacentHTML('beforeend', '<div class="phplaced">' + (wd.e ? wd.e + ' ' : '') + phHl(wd) + '</div>');
    try { playCorrectSound(); } catch (e) {}
    speak(wd.w);
    msg.style.color = 'var(--accent-strong)';
    msg.textContent = '⭕ ' + wd.w + ' → ' + exConf.rules.find(r => r.id === rule).label;
    updatePhSortCount();
    if (phQueue.length === 0) {
      exEl('phCur').innerHTML = '<div class="phbig">🎉</div>';
      msg.textContent = '🎉 다 모았어요!' + (phMistakes ? ' (틀린 횟수 ' + phMistakes + ')' : ' 한 번도 안 틀렸어요!');
      const b = exEl('exMainBtn');
      b.hidden = false; b.disabled = false; b.textContent = '다음: 듣고 골라 쓰기 →';
    } else {
      clearTimeout(phTimer);
      phTimer = setTimeout(phNext, 1100);
    }
  } else {
    phMistakes++;
    const bk = exEl('exLearn').querySelector('.phbucket[data-rule="' + rule + '"]');
    if (bk) { bk.classList.add('shake'); setTimeout(() => bk.classList.remove('shake'), 400); }
    try { playWrongSound(); } catch (e) {}
    msg.style.color = 'var(--danger)';
    msg.textContent = '❌ ' + wd.w + '의 ' + exConf.sound + ' 철자는 다른 상자예요. 소리를 다시 들어 보세요!';
    speak(wd.w);
  }
}

/* ----- STEP 3 듣고 골라 쓰기: 8문제 (8-1은 바른 철자 고르기 12문제) ----- */
function startPhQuiz() {
  exPhase = 'ph3';
  phQs = exShuffle(exConf.qw.map(n => exConf.words.find(x => x.w === n)));
  phQi = 0; phQScore = 0;
  exEl('exMainBtn').hidden = true;
  renderPhQ();
}

function phLayout(wd) {   // 낱말 글자 칸들: {c: 글자, b: 빈칸 번호(-1 이면 보임), wide}
  const w = wd.w, sp = phSp(wd), cells = [];
  if (exConf.chunks) {   // 덩어리 책: 그 책의 블렌드·이중자음 한 덩어리를 비움
    const i = w.lastIndexOf(sp);
    for (let j = 0; j < i; j++) cells.push({ c: w[j], b: -1 });
    cells.push({ c: sp, b: 0, wide: true });
    for (let j = i + sp.length; j < w.length; j++) cells.push({ c: w[j], b: -1 });
    return { cells: cells, exp: [sp] };
  }
  let idx = [];   // 모음 책: 타깃 철자 안의 모음 글자만 비움 (a_e 는 a 와 끝의 e)
  if (/^[aeiou]_e$/.test(sp)) idx = [w.indexOf(sp[0]), w.length - 1];
  else { const i = w.lastIndexOf(sp); for (let j = i; j < i + sp.length; j++) if ('aeiouy'.indexOf(w[j]) >= 0) idx.push(j); }
  let k = 0;
  for (let j = 0; j < w.length; j++) cells.push(idx.indexOf(j) >= 0 ? { c: w[j], b: k++ } : { c: w[j], b: -1 });
  return { cells: cells, exp: idx.map(j => w[j]) };
}

function phTiles(exp) {   // 정답 블록 + 다른 블록, 모두 6개 이하
  const pool = exConf.chunks ? exConf.chunks : 'aeiouy'.split('');
  const others = exShuffle(pool.filter(x => exp.indexOf(x) < 0));
  const total = Math.min(6, exp.length + others.length);
  return exShuffle(exp.concat(others.slice(0, total - exp.length)));
}

function renderPhQ() {
  const wd = phQs[phQi];
  clearTimeout(phTimer);
  phQBusy = false; phQBad = false;
  phShow();
  exEl('exStage').textContent = 'STEP 3 · 듣고 골라 쓰기';
  exEl('exLead').textContent = exConf.pick ? '소리를 듣고 바른 철자를 골라요. 🔊를 누르면 다시 들려요.'
    : exConf.chunks ? '소리를 듣고, 빈칸에 들어갈 철자 덩어리를 블록에서 골라요. 🔊를 누르면 다시 들려요.'
      : '소리를 듣고, 빈칸에 들어갈 모음 블록을 골라 낱말을 완성해요. 🔊를 누르면 다시 들려요.';
  exEl('exCount').textContent = '문제 ' + (phQi + 1) + ' / ' + phQs.length;
  let h = '<div class="phcur">' + phEmoji(wd) + '<button type="button" class="phsay">🔊 다시 듣기</button>';
  if (exConf.pick) {
    h += '<div class="phopts">' + exShuffle([wd.w].concat(exConf.pickWrong[wd.w])).map(o => '<button type="button" class="phopt" data-v="' + o + '">' + o + '</button>').join('') + '</div>';
  } else {
    const L = phLayout(wd);
    phQExp = L.exp; phQFill = L.exp.map(() => '');
    h += '<div class="phword">' + L.cells.map(c => c.b >= 0 ? '<span class="phb' + (c.wide ? ' wide' : '') + '" data-k="' + c.b + '"></span>' : '<span>' + c.c + '</span>').join('') + '</div>' +
      '<div class="phtiles">' + phTiles(L.exp).map(t => '<button type="button" class="phtile" data-v="' + t + '">' + t + '</button>').join('') + '</div>';
  }
  h += '<div class="phans" id="phAns"></div></div><div class="phmsg" id="phMsg"></div>';
  exEl('exLearn').innerHTML = h;
  speak(wd.w);
}

function phQReset() {
  phQFill = phQExp.map(() => '');
  exEl('exLearn').querySelectorAll('.phb').forEach(b => { b.textContent = ''; });
  exEl('exLearn').querySelectorAll('.phtile').forEach(t => t.classList.remove('used'));
}

function phPickTile(tile) {
  if (phQBusy || tile.classList.contains('used')) return;
  const k = phQFill.findIndex(v => !v);
  if (k < 0) return;
  phQFill[k] = tile.dataset.v;
  tile.classList.add('used');
  exEl('exLearn').querySelector('.phb[data-k="' + k + '"]').textContent = tile.dataset.v;
  if (phQFill.every(Boolean)) phAnswered(phQFill.every((v, i) => v === phQExp[i]));
}

function phPickOpt(opt) {
  if (phQBusy) return;
  const ok = opt.dataset.v === phQs[phQi].w;
  if (ok) { opt.classList.add('good'); phAnswered(true); }
  else { opt.classList.add('bad'); phAnswered(false); }
}

function phAnswered(ok) {
  const wd = phQs[phQi], msg = exEl('phMsg');
  clearTimeout(phTimer);
  if (ok) {
    phQBusy = true;
    if (!phQBad) phQScore++;
    try { playCorrectSound(); } catch (e) {}
    speak(wd.w);   // 완성된 낱말을 한 번 더
    exEl('exLearn').querySelectorAll('.phb').forEach(b => b.classList.add('good'));
    msg.style.color = 'var(--accent-strong)';
    msg.textContent = '⭕ ' + wd.w + (wd.ko ? ' · ' + wd.ko : '');
    phTimer = setTimeout(phQNext, 1500);
  } else {
    if (!phQBad) { phQBad = true; phMistakes++; }
    try { playWrongSound(); } catch (e) {}
    speak(wd.w);   // 틀리면 정답 소리를 또 한 번
    msg.style.color = 'var(--danger)';
    msg.textContent = '❌ 정답은 ' + wd.w + ' 이에요. 소리를 듣고 다시 골라 보세요.';
    exEl('phAns').innerHTML = '정답: <b>' + phHl(wd) + '</b>';
    if (!exConf.pick) {
      phQBusy = true;
      phTimer = setTimeout(() => { if (exKind === 'phonics' && exPhase === 'ph3') { phQReset(); phQBusy = false; } }, 1200);
    }
  }
}

function phQNext() {
  if (exKind !== 'phonics' || exPhase !== 'ph3') return;
  phQi++;
  if (phQi >= phQs.length) renderPhResult(); else renderPhQ();
}

function renderPhResult() {
  exPhase = 'ph4';
  const n = phQs.length, need = Math.ceil(n * 0.7);
  phPass = phQScore >= need;
  phShow();
  exEl('exStage').textContent = 'STEP 3 · 결과';
  exEl('exLead').textContent = '';
  exEl('exCount').textContent = phQScore + ' / ' + n;
  exEl('exLearn').innerHTML = '<div class="phres"><div class="phe">' + (phPass ? '🎉' : '💪') + '</div><p><b>' + n + '문제 중 ' + phQScore + '개</b> 처음에 맞혔어요.</p><p>' +
    (phPass ? '잘했어요! 소리를 잘 듣고 골랐어요.' : need + '개 이상 맞히면 통과예요. 소리를 잘 듣고 한 번 더 해 봐요!') + '</p></div>';
  const b = exEl('exMainBtn');
  b.hidden = false; b.disabled = false; b.textContent = phPass ? '완료 →' : '다시 도전 →';
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
  if (exPhase === 'ph1') { if (exConf.pick) startPhQuiz(); else renderPhSort(); return; }
  if (exPhase === 'ph2') { startPhQuiz(); return; }
  if (exPhase === 'ph4') { if (phPass) finishPhonics(); else startPhQuiz(); return; }
  if (exPhase === 'ph3') return;
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
    if (window.placeFixed) placeFixed(stDrag.ghost, e.clientX, e.clientY); else { stDrag.ghost.style.left = e.clientX + 'px'; stDrag.ghost.style.top = e.clientY + 'px'; }   // 큰 화면 확대 보정 (WIDE_SCREEN)
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
