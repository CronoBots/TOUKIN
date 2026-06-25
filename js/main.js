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

  /* ---- Back to top ---- */
  safe(() => {
    const btn = $('.to-top');
    if (!btn) return;
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }));
  });

  /* ---- Scroll progress + header behaviour + parallax + back-to-top ---- */
  safe(() => {
    const bar = $('.progress'), header = $('.header'), toTop = $('.to-top');
    const pxEls = $$('[data-parallax]');
    let lastY = 0, ticking = false;
    const onScroll = () => {
      const yy = window.scrollY;
      if (bar) {
        const p = yy / ((root.scrollHeight - root.clientHeight) || 1);
        bar.style.width = (p * 100) + '%';
      }
      if (toTop) toTop.classList.toggle('show', yy > 600);
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

  /* ---- FAQ : un seul panneau ouvert à la fois ---- */
  safe(() => {
    const items = $$('.faq-item');
    items.forEach(d => d.addEventListener('toggle', () => {
      if (d.open) items.forEach(o => { if (o !== d) o.open = false; });
    }));
  });

  /* ---- Tilt 3D subtil des cartes (desktop, sans reduced-motion) ---- */
  safe(() => {
    if (!fine || reduce) return;
    const cards = $$('.member, .class-card, .social-card, .trust');
    cards.forEach(el => {
      el.classList.add('tiltable');
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - .5;
        const py = (e.clientY - r.top) / r.height - .5;
        el.style.transform = `perspective(800px) rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 5).toFixed(2)}deg) translateY(-5px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  });

  /* ---- Statut Ouvert / Fermé (heure suisse) + appel direct ---- */
  safe(() => {
    const TEL = '+41782401395', TELDISP = '078 240 13 95';
    const PHONE_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    const OPEN = 480; // 08:00
    const closeFor = (d) => (d >= 1 && d <= 4) ? 1110 : (d === 5 ? 1050 : null); // Lun–Jeu 18h30, Ven 17h30
    const fmt = (mins) => Math.floor(mins / 60) + 'h' + String(mins % 60).padStart(2, '0');

    const now = () => {
      try {
        const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Zurich', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
        const get = (t) => parts.find(x => x.type === t).value;
        const map = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
        let h = parseInt(get('hour'), 10); if (h === 24) h = 0;
        return { day: map[get('weekday')], cur: h * 60 + parseInt(get('minute'), 10) };
      } catch (e) {
        const d = new Date();
        return { day: d.getDay(), cur: d.getHours() * 60 + d.getMinutes() };
      }
    };

    const pill = document.createElement('a');
    pill.className = 'status-pill';
    pill.innerHTML = '<span class="sdot"></span><span class="stxt"><b class="sstate"></b><span class="ssub"></span></span>';
    document.body.appendChild(pill);
    const state = pill.querySelector('.sstate'), sub = pill.querySelector('.ssub');
    const bar = document.querySelector('.mobile-bar');
    const barState = bar && bar.querySelector('.mb-state');
    const barStatus = bar && bar.querySelector('.mb-status');

    const render = () => {
      const { day, cur } = now();
      const close = closeFor(day);
      const open = close !== null && cur >= OPEN && cur < close;
      pill.classList.toggle('open', open);
      pill.classList.toggle('closed', !open);
      let when = '';
      if (open) {
        pill.href = 'tel:' + TEL;
        pill.setAttribute('aria-label', 'Centre ouvert — appeler le ' + TELDISP);
        state.textContent = 'Ouvert · ferme à ' + fmt(close);
        sub.innerHTML = PHONE_SVG + TELDISP;
      } else {
        let target = { d: 1, ahead: 1 };
        if (close !== null && cur < OPEN) target = { d: day, ahead: 0 };
        else for (let i = 1; i <= 7; i++) { const d = (day + i) % 7; if (closeFor(d) !== null) { target = { d, ahead: i }; break; } }
        when = target.ahead === 0 ? "aujourd'hui à " + fmt(OPEN)
          : target.ahead === 1 ? 'demain à ' + fmt(OPEN)
          : days[target.d] + ' à ' + fmt(OPEN);
        pill.href = '#contact';
        pill.setAttribute('aria-label', 'Centre fermé — ouvre ' + when);
        state.textContent = 'Fermé';
        sub.textContent = 'Ouvre ' + when;
      }
      if (bar) {
        bar.classList.toggle('open', open);
        bar.classList.toggle('closed', !open);
        barState.textContent = open ? 'Ouvert' : 'Fermé';
        barStatus.setAttribute('aria-label', open ? ('Centre ouvert, ferme à ' + fmt(close)) : ('Centre fermé, ouvre ' + when));
      }
    };

    render();
    setTimeout(() => pill.classList.add('show'), 700);
    setInterval(render, 60000);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) render(); });
  });

  /* ---- Lightbox galerie (clic / Entrée pour agrandir) ---- */
  safe(() => {
    const items = $$('.gallery .g-item');
    if (!items.length) return;
    const lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.setAttribute('aria-hidden', 'true');
    lb.innerHTML = '<button class="lb-close" aria-label="Fermer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 6l12 12M18 6 6 18" stroke-linecap="round"/></svg></button><figure><img alt=""><figcaption></figcaption></figure>';
    document.body.appendChild(lb);
    const lbImg = lb.querySelector('img'), lbCap = lb.querySelector('figcaption');
    const openLb = (src, alt, cap) => { lbImg.src = src; lbImg.alt = alt || ''; lbCap.textContent = cap || ''; lb.classList.add('open'); lb.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; };
    const closeLb = () => { lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; };
    items.forEach(it => {
      const img = it.querySelector('img'); if (!img) return;
      const cap = it.querySelector('figcaption');
      it.setAttribute('tabindex', '0'); it.setAttribute('role', 'button');
      it.setAttribute('aria-label', 'Agrandir : ' + (cap ? cap.textContent : (img.alt || 'photo')));
      const go = () => openLb(img.currentSrc || img.src, img.alt, cap ? cap.textContent : '');
      it.addEventListener('click', go);
      it.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
    });
    lb.addEventListener('click', (e) => { if (e.target === lb || e.target.closest('.lb-close')) closeLb(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLb(); });
  });
})();
