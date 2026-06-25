/* TOUKIN — interactions (robust & progressive) */
(() => {
  'use strict';
  const root = document.documentElement;
  root.classList.add('js'); // enables reveal animations; without JS everything stays visible

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const safe = (fn) => { try { fn(); } catch (e) { /* never let one feature break the page */ } };

  /* ---- Preloader (also self-hides via CSS) ---- */
  const pre = $('.preload');
  const hidePre = () => pre && pre.classList.add('done');
  document.addEventListener('DOMContentLoaded', () => setTimeout(hidePre, 250));
  window.addEventListener('load', hidePre);
  setTimeout(hidePre, 1500);

  /* ---- Reveal on scroll (+ safety: reveal everything after a while) ---- */
  const revealEls = $$('[data-anim], [data-stagger]');
  const revealAll = () => revealEls.forEach(el => el.classList.add('in'));
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((es) => {
      es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });
    revealEls.forEach(el => io.observe(el));
    setTimeout(revealAll, 3500); // safety net so content can never stay hidden
  } else revealAll();

  /* ---- Mobile menu (with scroll lock) ---- */
  safe(() => {
    const burger = $('.burger'), links = $('.nav-links');
    if (!burger || !links) return;
    const setMenu = (open) => {
      const o = open ?? !links.classList.contains('open');
      links.classList.toggle('open', o);
      document.body.classList.toggle('menu-open', o);
      burger.setAttribute('aria-expanded', String(o));
    };
    burger.addEventListener('click', () => setMenu());
    $$('a', links).forEach(a => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  });

  /* ---- Year ---- */
  safe(() => { const y = $('#year'); if (y) y.textContent = new Date().getFullYear(); });

  /* ---- Hero photo zoom-in ---- */
  safe(() => { const hp = $('.hero-photo img'); if (hp) setTimeout(() => hp.classList.add('in'), 220); });

  /* ---- Scroll progress + header behaviour + parallax ---- */
  safe(() => {
    const bar = $('.progress'), header = $('.header');
    const pxEls = $$('[data-parallax]');
    let lastY = 0, ticking = false;
    const onScroll = () => {
      const yy = window.scrollY;
      if (bar) {
        const p = yy / ((root.scrollHeight - root.clientHeight) || 1);
        bar.style.width = (p * 100) + '%';
      }
      if (header) {
        header.classList.toggle('scrolled', yy > 24);
        if (yy > 440 && yy > lastY + 4) header.classList.add('hide');
        else if (yy < lastY - 4 || yy < 440) header.classList.remove('hide');
      }
      if (!reduce) pxEls.forEach(el => {
        const r = el.getBoundingClientRect();
        const sp = parseFloat(el.dataset.parallax) || 0.08;
        el.style.transform = `translate3d(0, ${(((r.top + r.height / 2) - innerHeight / 2) * -sp).toFixed(1)}px, 0)`;
      });
      lastY = yy; ticking = false;
    };
    window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
    onScroll();
  });

  /* ---- Active nav link ---- */
  safe(() => {
    const anchors = $$('.nav-links a[href^="#"]');
    const map = new Map();
    anchors.forEach(a => { const t = document.getElementById(a.getAttribute('href').slice(1)); if (t) map.set(t, a); });
    if (!map.size || !('IntersectionObserver' in window)) return;
    const so = new IntersectionObserver((es) => {
      es.forEach(e => {
        if (!e.isIntersecting) return;
        anchors.forEach(a => a.classList.remove('active'));
        map.get(e.target)?.classList.add('active');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    map.forEach((_, sec) => so.observe(sec));
  });

  /* ---- Animated counters ---- */
  safe(() => {
    const counters = $$('[data-count]');
    if (!counters.length) return;
    const run = (el) => {
      const target = parseFloat(el.dataset.count);
      const d = (el.dataset.count.split('.')[1] || '').length;
      const suf = el.dataset.suffix || '';
      const dur = 1500, start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / dur, 1), e = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * e).toFixed(d) + suf;
        if (p < 1) requestAnimationFrame(step); else el.textContent = target.toFixed(d) + suf;
      };
      requestAnimationFrame(step);
    };
    if ('IntersectionObserver' in window) {
      const co = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { run(e.target); co.unobserve(e.target); } }), { threshold: 0.6 });
      counters.forEach(c => co.observe(c));
    } else counters.forEach(c => c.textContent = c.dataset.count + (c.dataset.suffix || ''));
  });

  /* ---- Manifesto word reveal (with fallback) ---- */
  safe(() => {
    const man = $('.manifesto .big');
    if (!man || reduce) return;
    man.innerHTML = man.innerHTML.replace(/(<em>.*?<\/em>)|([^\s<]+)/g, (m, em, w) => `<span class="w">${em || w}</span>`);
    const words = $$('.w', man);
    const lightAll = () => words.forEach(w => w.classList.add('lit'));
    if (!('IntersectionObserver' in window)) { lightAll(); return; }
    const mo = new IntersectionObserver((es) => {
      es.forEach(e => { if (e.isIntersecting) { words.forEach((w, i) => setTimeout(() => w.classList.add('lit'), i * 50)); mo.disconnect(); } });
    }, { threshold: 0.35 });
    mo.observe(man);
    setTimeout(lightAll, 4000); // fallback
  });

  /* ---- Magnetic buttons (desktop only) ---- */
  safe(() => {
    if (!fine || reduce) return;
    $$('[data-magnetic]').forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.25}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  });
})();
