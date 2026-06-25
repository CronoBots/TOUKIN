/* TOUKIN — premium interactions */
(() => {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ---- Preloader ---- */
  const pre = $('.preload');
  const hidePre = () => pre && pre.classList.add('done');
  window.addEventListener('load', () => setTimeout(hidePre, 350));
  setTimeout(hidePre, 2200); // safety

  /* ---- Year ---- */
  const y = $('#year'); if (y) y.textContent = new Date().getFullYear();

  /* ---- Scroll progress ---- */
  const bar = $('.progress');
  const onProgress = () => {
    if (!bar) return;
    const h = document.documentElement;
    const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
    bar.style.width = (p * 100) + '%';
  };

  /* ---- Header: shadow + hide on scroll down ---- */
  const header = $('.header');
  let lastY = 0;
  const onHeader = () => {
    const yy = window.scrollY;
    header.classList.toggle('scrolled', yy > 24);
    if (yy > 420 && yy > lastY + 4) header.classList.add('hide');
    else if (yy < lastY - 4 || yy < 420) header.classList.remove('hide');
    lastY = yy;
  };

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => { onProgress(); onHeader(); parallax(); ticking = false; });
  }, { passive: true });
  onHeader();

  /* ---- Mobile menu ---- */
  const burger = $('.burger'), links = $('.nav-links');
  const setMenu = (open) => {
    const o = open ?? !links.classList.contains('open');
    links.classList.toggle('open', o);
    document.body.classList.toggle('menu-open', o);
    burger.setAttribute('aria-expanded', String(o));
  };
  burger && burger.addEventListener('click', () => setMenu());
  links && $$('a', links).forEach(a => a.addEventListener('click', () => setMenu(false)));

  /* ---- Reveal (anim + stagger) ---- */
  const revealEls = $$('[data-anim], [data-stagger]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((es) => {
      es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.14, rootMargin: '0px 0px -7% 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ---- Hero photo zoom-in ---- */
  const hp = $('.hero-photo img');
  if (hp) requestAnimationFrame(() => setTimeout(() => hp.classList.add('in'), 200));

  /* ---- Manifesto word reveal ---- */
  const man = $('.manifesto .big');
  if (man && !reduce) {
    const html = man.innerHTML;
    // wrap plain words in spans, keep <em> intact
    man.innerHTML = html.replace(/(<em>.*?<\/em>)|([^\s<]+)/g, (m, em, word) =>
      em ? `<span class="w">${em}</span>` : `<span class="w">${word}</span>`);
    const words = $$('.w', man);
    const mo = new IntersectionObserver((es) => {
      es.forEach(e => {
        if (!e.isIntersecting) return;
        words.forEach((w, i) => setTimeout(() => w.classList.add('lit'), i * 55));
        mo.disconnect();
      });
    }, { threshold: 0.4 });
    mo.observe(man);
  }

  /* ---- Active nav link ---- */
  const navAnchors = $$('.nav-links a[href^="#"]');
  const map = new Map();
  navAnchors.forEach(a => { const t = document.getElementById(a.getAttribute('href').slice(1)); if (t) map.set(t, a); });
  if (map.size) {
    const so = new IntersectionObserver((es) => {
      es.forEach(e => {
        if (e.isIntersecting) {
          navAnchors.forEach(a => a.classList.remove('active'));
          map.get(e.target)?.classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    map.forEach((_, sec) => so.observe(sec));
  }

  /* ---- Count up ---- */
  const fmt = (v, d) => v.toFixed(d);
  const animateCount = (el) => {
    const target = parseFloat(el.dataset.count);
    const d = (el.dataset.count.split('.')[1] || '').length;
    const suf = el.dataset.suffix || '';
    const dur = 1500, start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(target * e, d) + suf;
      if (p < 1) requestAnimationFrame(step); else el.textContent = fmt(target, d) + suf;
    };
    requestAnimationFrame(step);
  };
  const counters = $$('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    const co = new IntersectionObserver((es) => {
      es.forEach(e => { if (e.isIntersecting) { animateCount(e.target); co.unobserve(e.target); } });
    }, { threshold: 0.6 });
    counters.forEach(c => co.observe(c));
  } else counters.forEach(c => { c.textContent = c.dataset.count + (c.dataset.suffix || ''); });

  /* ---- Parallax ---- */
  const pxEls = $$('[data-parallax]');
  function parallax() {
    if (reduce || !pxEls.length) return;
    const vh = window.innerHeight;
    pxEls.forEach(el => {
      const r = el.getBoundingClientRect();
      const speed = parseFloat(el.dataset.parallax) || 0.1;
      const offset = (r.top + r.height / 2 - vh / 2) * -speed;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    });
  }
  parallax();

  /* ---- Magnetic buttons ---- */
  if (fine && !reduce) {
    $$('[data-magnetic]').forEach(el => {
      const s = 0.3;
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * s}px, ${(e.clientY - r.top - r.height / 2) * s}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  /* ---- Custom cursor ---- */
  if (fine && !reduce) {
    const ring = document.createElement('div'); ring.className = 'cursor';
    const dot = document.createElement('div'); dot.className = 'cursor-d';
    document.body.append(ring, dot);
    document.documentElement.classList.add('cursor-on');
    let rx = 0, ry = 0, mx = 0, my = 0;
    window.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
    });
    const loop = () => {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    };
    loop();
    $$('a, button, .svc, .g-item, .member, .social-card, [data-magnetic]').forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('hover'));
      el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
    });
  }
})();
