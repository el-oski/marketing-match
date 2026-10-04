/* ==========================================================================
   MarketingMatch — lógica de la aplicación
   Vanilla JS, sin dependencias. El progreso vive en localStorage.
   ========================================================================== */
(function () {
'use strict';

const STORE_KEY = 'mm.progress.v1';
const XP_PER_LEVEL = 200;
const SWIPE_THRESHOLD = 88;     // px horizontales para confirmar la respuesta
const SKIP_THRESHOLD  = 110;    // px hacia arriba para pedir explicación

/* ------------------------------------------------------------- estado --- */

const defaultState = () => ({
  xp: 0,
  streak: 0,
  bestStreak: 0,
  answered: 0,
  correct: 0,
  mastery: {},       // "deckId:index" -> caja Leitner (0..3)
  lastDeck: null,
  theme: null
});

let state = load();
let session = null;   // partida en curso

function load() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    return raw ? Object.assign(defaultState(), JSON.parse(raw)) : defaultState();
  } catch (e) { return defaultState(); }
}
function save() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) {}
}

const key = (deckId, i) => deckId + ':' + i;
const box = k => state.mastery[k] ?? -1;          // -1 = nunca vista
const deckById = id => DECKS.find(d => d.id === id);

/* Cartas que conviene repasar: ya vistas pero no dominadas. */
function dueCards() {
  const out = [];
  DECKS.forEach(d => d.cards.forEach((c, i) => {
    const b = box(key(d.id, i));
    if (b >= 0 && b < 2) out.push({ deck: d, card: c, i: i });
  }));
  return out;
}
function deckProgress(d) {
  const done = d.cards.reduce((n, _, i) => n + (box(key(d.id, i)) >= 2 ? 1 : 0), 0);
  return { done: done, total: d.cards.length, pct: Math.round(done / d.cards.length * 100) };
}

/* --------------------------------------------------------------- utils --- */
const $  = s => document.querySelector(s);
const $$ = s => Array.prototype.slice.call(document.querySelectorAll(s));
const shuffle = a => { const r = a.slice(); for (let i = r.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [r[i], r[j]] = [r[j], r[i]]; } return r; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function show(screen) {
  $$('.screen').forEach(s => s.classList.remove('is-active'));
  $('#screen-' + screen).classList.add('is-active');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

/* ---------------------------------------------------------------- tema --- */
function applyTheme(t) {
  if (t) document.documentElement.setAttribute('data-theme', t);
  else document.documentElement.removeAttribute('data-theme');
  const dark = t !== 'light';
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', dark ? '#120d1c' : '#f6f3fb');
}
applyTheme(state.theme);
$('#theme-btn').addEventListener('click', () => {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  applyTheme(state.theme); save();
});

/* ====================================================== PANTALLA INICIO = */

function renderHome() {
  const level = Math.floor(state.xp / XP_PER_LEVEL) + 1;
  const into  = state.xp % XP_PER_LEVEL;
  const acc   = state.answered ? Math.round(state.correct / state.answered * 100) + '%' : '—';

  $('#st-level').textContent  = level;
  $('#st-xp').textContent     = state.xp;
  $('#st-streak').textContent = state.streak;
  $('#st-acc').textContent    = acc;
  $('#level-fill').style.width = (into / XP_PER_LEVEL * 100) + '%';
  $('#level-hint').textContent = 'Nivel ' + level + ' · ' + into + ' / ' + XP_PER_LEVEL + ' XP';

  const due = dueCards().length;
  $('#qa-review-sub').textContent = due
    ? due + (due === 1 ? ' carta por reforzar' : ' cartas por reforzar')
    : 'Sin pendientes — vas al día';

  const last = state.lastDeck && deckById(state.lastDeck);
  if (last) {
    const p = deckProgress(last);
    $('#qa-continue-title').textContent = 'Continuar: ' + last.name;
    $('#qa-continue-sub').textContent   = p.done + ' de ' + p.total + ' cartas dominadas';
  } else {
    $('#qa-continue-title').textContent = 'Empezar a entrenar';
    $('#qa-continue-sub').textContent   = DECKS.length + ' barajas · ' +
      DECKS.reduce((n, d) => n + d.cards.length, 0) + ' cartas';
  }

  ['guia', 'extra'].forEach(src => {
    $('#decks-' + src).innerHTML = DECKS.filter(d => d.src === src).map(d => {
      const p = deckProgress(d);
      return '<button class="deck' + (p.pct === 100 ? ' is-mastered' : '') + '" data-deck="' + d.id + '">' +
        (p.pct === 100 ? '<span class="deck-crown">👑</span>' : '') +
        '<span class="deck-emoji">' + d.emoji + '</span>' +
        '<span class="deck-name">' + esc(d.name) + '</span>' +
        '<span class="deck-blurb">' + esc(d.blurb) + '</span>' +
        '<span class="deck-meter"><i style="width:' + p.pct + '%"></i></span>' +
        '<span class="deck-meta"><span>' + p.done + '/' + p.total + '</span><span>' + p.pct + '%</span></span>' +
        '</button>';
    }).join('');
  });
}

document.addEventListener('click', e => {
  const deckBtn = e.target.closest('[data-deck]');
  if (deckBtn) return startDeck(deckBtn.dataset.deck);

  const nav = e.target.closest('[data-nav]');
  if (nav) { renderHome(); return show(nav.dataset.nav); }

  const act = e.target.closest('[data-action]');
  if (!act) return;
  switch (act.dataset.action) {
    case 'continue': startDeck(state.lastDeck || DECKS[0].id); break;
    case 'review':   startReview(); break;
    case 'exam':     startExam(); break;
    case 'glossary': renderGlossary(); show('glossary'); break;
  }
});

$('#reset-btn').addEventListener('click', () => {
  if (!confirm('¿Seguro que quieres borrar todo tu progreso? Esto no se puede deshacer.')) return;
  const theme = state.theme;
  state = defaultState(); state.theme = theme; save(); renderHome();
});

/* ======================================================= PARTIDAS ====== */

function startDeck(deckId) {
  const d = deckById(deckId) || DECKS[0];
  state.lastDeck = d.id; save();
  begin({
    title: d.name,
    brief: d.brief,
    queue: shuffle(d.cards.map((c, i) => ({ deck: d, card: c, i: i }))),
    mode: 'deck'
  });
}

function startReview() {
  const due = dueCards();
  if (!due.length) {
    alert('No tienes cartas pendientes. Entra a una baraja para seguir practicando.');
    return;
  }
  begin({
    title: 'Repaso inteligente',
    brief: 'Estas son las cartas que has fallado o que todavía no dominas, juntas de todas las barajas. Una carta se considera dominada cuando la respondes bien dos veces seguidas.',
    queue: shuffle(due),
    mode: 'review'
  });
}

function startExam() {
  const all = [];
  DECKS.forEach(d => d.cards.forEach((c, i) => all.push({ deck: d, card: c, i: i })));
  begin({
    title: 'Modo examen',
    brief: 'Doce cartas al azar de todo el temario, sin ayudas. Al final verás tu calificación y el detalle de lo que falles.',
    queue: shuffle(all).slice(0, EXAM_SIZE),
    mode: 'exam'
  });
}

function begin(cfg) {
  session = {
    title: cfg.title, brief: cfg.brief, mode: cfg.mode,
    queue: cfg.queue, idx: 0, ok: 0, bad: 0, xp: 0, missed: [], total: cfg.queue.length
  };
  $('#play-deck-name').textContent = cfg.title;
  $('#brief-text').textContent = cfg.brief;
  $('#brief-box').classList.remove('is-open');
  $('#brief-toggle').setAttribute('aria-expanded', 'false');
  show('play');
  renderStack();
}

$('#brief-toggle').addEventListener('click', () => {
  const b = $('#brief-box'), open = b.classList.toggle('is-open');
  $('#brief-toggle').setAttribute('aria-expanded', String(open));
});

/* --------------------------------------------------- pila de cartas ----- */

function renderStack() {
  const s = session;
  if (!s) return;

  if (s.idx >= s.queue.length) return finish();

  $('#play-counter').textContent = (s.idx + 1) + ' / ' + s.total;
  $('#play-score').textContent   = s.ok + ' ✓';
  $('#progress-fill').style.width = (s.idx / s.total * 100) + '%';

  const upcoming = s.queue.slice(s.idx, s.idx + 3).reverse();
  $('#card-stack').innerHTML = upcoming.map((item, n) => {
    const depth = upcoming.length - 1 - n;   // 0 = la de encima
    const c = item.card;
    return '<article class="card" data-depth="' + depth + '" style="' +
        'transform:translateY(' + (depth * 9) + 'px) scale(' + (1 - depth * 0.035) + ');' +
        'z-index:' + (10 - depth) + '; opacity:' + (depth > 1 ? 0 : 1) + '">' +
      '<div class="card-topic"><span>' + item.deck.emoji + '</span><span>' + esc(item.deck.name) + '</span></div>' +
      '<div class="card-stamp stamp-l">' + esc(c.left)  + '</div>' +
      '<div class="card-stamp stamp-r">' + esc(c.right) + '</div>' +
      '<p class="card-q">' + esc(c.q) + '</p>' +
      '<div class="card-options">' +
        '<span class="card-opt card-opt-l">' + esc(c.left) + '</span>' +
        '<span class="card-arrows">↔</span>' +
        '<span class="card-opt card-opt-r">' + esc(c.right) + '</span>' +
      '</div>' +
      '<span class="card-deco" aria-hidden="true">' + item.deck.emoji + '</span>' +
      '</article>';
  }).join('');

  const cur = s.queue[s.idx].card;
  $('#btn-left-label').textContent  = cur.left;
  $('#btn-right-label').textContent = cur.right;
  $('#hint-left').textContent  = cur.left;
  $('#hint-right').textContent = cur.right;

  attachDrag($('#card-stack .card[data-depth="0"]'));
}

/* ------------------------------------------------------ arrastrar ------- */

function attachDrag(el) {
  if (!el) return;
  let startX = 0, startY = 0, dx = 0, dy = 0, dragging = false, pid = null;
  const stampL = el.querySelector('.stamp-l'), stampR = el.querySelector('.stamp-r');

  el.addEventListener('pointerdown', e => {
    if (e.button) return;
    dragging = true; pid = e.pointerId;
    startX = e.clientX; startY = e.clientY; dx = dy = 0;
    el.classList.add('is-dragging');
    try { el.setPointerCapture(pid); } catch (err) {}
  });

  el.addEventListener('pointermove', e => {
    if (!dragging || e.pointerId !== pid) return;
    dx = e.clientX - startX; dy = e.clientY - startY;
    el.style.transform = 'translate(' + dx + 'px,' + dy + 'px) rotate(' + (dx * 0.055) + 'deg)';
    const t = Math.min(Math.abs(dx) / SWIPE_THRESHOLD, 1);
    stampR.style.opacity = dx > 0 ? t : 0;
    stampL.style.opacity = dx < 0 ? t : 0;
  });

  const release = e => {
    if (!dragging || (e.pointerId !== undefined && e.pointerId !== pid)) return;
    dragging = false;
    el.classList.remove('is-dragging');
    try { el.releasePointerCapture(pid); } catch (err) {}

    if (dy < -SKIP_THRESHOLD && Math.abs(dx) < SWIPE_THRESHOLD) return commit('skip', el);
    if (dx >  SWIPE_THRESHOLD) return commit('right', el);
    if (dx < -SWIPE_THRESHOLD) return commit('left', el);

    el.style.transition = 'transform .34s var(--ease)';
    el.style.transform  = 'translateY(0) scale(1)';
    stampL.style.opacity = stampR.style.opacity = 0;
    setTimeout(() => { el.style.transition = ''; }, 340);
  };
  el.addEventListener('pointerup', release);
  el.addEventListener('pointercancel', release);
}

/* ------------------------------------------------------ responder ------- */

let locked = false;

function commit(side, el) {
  if (locked || !session) return;
  locked = true;

  const item = session.queue[session.idx];
  const c = item.card;
  const k = key(item.deck.id, item.i);

  el = el || $('#card-stack .card[data-depth="0"]');
  if (el) { el.style.transition = ''; el.classList.add('fly-' + (side === 'skip' ? 'up' : side)); }

  let verdict;
  if (side === 'skip') {
    verdict = 'skip';
    state.mastery[k] = 0;
    state.streak = 0;
    session.missed.push(item);
  } else if (side === c.a) {
    verdict = 'ok';
    state.mastery[k] = Math.min(box(k) < 0 ? 1 : box(k) + 1, 3);
    state.answered++; state.correct++;
    state.streak++;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    const gain = 10 + Math.min(Math.floor(state.streak / 3) * 2, 10);
    state.xp += gain; session.xp += gain; session.ok++;
  } else {
    verdict = 'bad';
    state.mastery[k] = 0;
    state.answered++;
    state.streak = 0;
    session.bad++; session.missed.push(item);
    if (session.mode !== 'exam') session.queue.push(item);  // vuelve al final
  }
  save();
  showFeedback(verdict, c);
}

function showFeedback(verdict, c) {
  const correctLabel = c.a === 'left' ? c.left : c.right;
  const badge = $('#fb-badge');

  badge.className = 'fb-badge ' + verdict;
  badge.textContent = verdict === 'ok'  ? '¡Correcto! +' + (10 + Math.min(Math.floor(state.streak / 3) * 2, 10)) + ' XP'
                    : verdict === 'bad' ? 'No era esa'
                    : 'Te lo explico';

  $('#fb-answer').textContent = 'Respuesta: ' + correctLabel;
  $('#fb-why').textContent    = c.why;
  $('#fb-tip').innerHTML      = c.tip ? '<b>★ Para recordarlo:</b> ' + esc(c.tip) : '';

  const isLast = session.idx + 1 >= session.queue.length;
  $('#fb-next').textContent = isLast ? 'Ver resultados' : 'Siguiente carta';
  $('#feedback').classList.add('is-open');
  $('#fb-next').focus({ preventScroll: true });
}

$('#fb-next').addEventListener('click', () => {
  $('#feedback').classList.remove('is-open');
  session.idx++;
  locked = false;
  renderStack();
});

$('#btn-left').addEventListener('click',  () => commit('left'));
$('#btn-right').addEventListener('click', () => commit('right'));
$('#btn-skip').addEventListener('click',  () => commit('skip'));

document.addEventListener('keydown', e => {
  if ($('#feedback').classList.contains('is-open')) {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') { e.preventDefault(); $('#fb-next').click(); }
    return;
  }
  if (!$('#screen-play').classList.contains('is-active')) return;
  if (e.key === 'ArrowLeft')  { e.preventDefault(); commit('left'); }
  if (e.key === 'ArrowRight') { e.preventDefault(); commit('right'); }
  if (e.key === 'ArrowUp' || e.key === '?') { e.preventDefault(); commit('skip'); }
  if (e.key === 'Escape') { renderHome(); show('home'); }
});

/* ------------------------------------------------------ resultados ------ */

function finish() {
  const s = session;
  const total = s.ok + s.bad;
  const pct = total ? Math.round(s.ok / total * 100) : 0;

  $('#result-ring').style.setProperty('--pct', pct);
  $('#result-pct').textContent = pct + '%';
  $('#rg-ok').textContent  = s.ok;
  $('#rg-bad').textContent = s.bad;
  $('#rg-xp').textContent  = '+' + s.xp;

  let title, sub;
  if (s.mode === 'exam') {
    title = pct >= 80 ? '¡Examen aprobado!' : pct >= 60 ? 'Casi lo tienes' : 'Toca repasar';
    sub = 'Acertaste ' + s.ok + ' de ' + total + ' cartas. ' +
          (pct >= 80 ? 'Dominas el temario: repite el examen en unos días para fijarlo.'
                     : 'Entra a las barajas de los temas que fallaste y vuelve a intentarlo.');
  } else if (pct === 100) {
    title = '¡Perfecto!'; sub = 'Pasaste toda la ronda sin un solo error. Racha máxima: ' + state.bestStreak + '.';
  } else {
    title = '¡Ronda completada!';
    sub = 'Acertaste ' + s.ok + ' de ' + total + '. Las cartas que fallaste vuelven a aparecer en el repaso inteligente.';
  }
  $('#result-title').textContent = title;
  $('#result-sub').textContent = sub;

  const uniq = [];
  s.missed.forEach(m => { if (!uniq.some(u => u.deck.id === m.deck.id && u.i === m.i)) uniq.push(m); });
  $('#result-missed').innerHTML = uniq.length
    ? '<p class="rm-title">Para repasar</p>' + uniq.map(m =>
        '<div class="rm-item"><b>' + esc(m.card.q) + '</b><span>' + m.deck.emoji + ' ' +
        esc(m.deck.name) + ' · Respuesta: ' + esc(m.card.a === 'left' ? m.card.left : m.card.right) +
        '</span></div>').join('')
    : '';

  const again = $('#result-again');
  if (uniq.length) {
    again.style.display = '';
    again.textContent = 'Reforzar las ' + uniq.length + ' falladas';
    again.onclick = () => begin({
      title: 'Refuerzo', brief: 'Solo las cartas que fallaste en la ronda anterior.',
      queue: shuffle(uniq), mode: 'review'
    });
  } else {
    again.style.display = 'none';
  }

  locked = false;
  renderHome();
  show('result');
}

/* ======================================================== GLOSARIO ===== */

function renderGlossary(q) {
  const term = (q || '').trim().toLowerCase();
  const rows = GLOSSARY.filter(g =>
    !term || g[0].toLowerCase().includes(term) || g[1].toLowerCase().includes(term)
  );
  $('#gl-count').textContent = rows.length + (rows.length === 1 ? ' término' : ' términos');

  const hl = txt => {
    if (!term) return esc(txt);
    const i = txt.toLowerCase().indexOf(term);
    if (i < 0) return esc(txt);
    return esc(txt.slice(0, i)) + '<mark>' + esc(txt.slice(i, i + term.length)) + '</mark>' + esc(txt.slice(i + term.length));
  };

  $('#gl-list').innerHTML = rows.length
    ? rows.map(g => {
        const d = deckById(g[2]);
        return '<div class="gl-item"><p class="gl-term">' + hl(g[0]) + '</p>' +
          '<p class="gl-def">' + hl(g[1]) + '</p>' +
          (d ? '<span class="gl-tag">' + d.emoji + ' ' + esc(d.name) + '</span>' : '') + '</div>';
      }).join('')
    : '<p class="gl-empty">No encontré nada con «' + esc(q) + '».<br>Prueba con otra palabra.</p>';
}

let glTimer;
$('#gl-search').addEventListener('input', e => {
  clearTimeout(glTimer);
  const v = e.target.value;
  glTimer = setTimeout(() => renderGlossary(v), 120);
});

/* =========================================================== arranque == */
renderHome();
show('home');

})();
