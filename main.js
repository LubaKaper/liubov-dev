(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canHover = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const dot = document.querySelector('.dot');
  const wedge = document.querySelector('.wedge');

  let mx = innerWidth * .78, my = innerHeight * .32, dx = mx, dy = my;
  addEventListener('pointermove', e => {
    mx = e.clientX; my = e.clientY;
    if (wedge) wedge.style.setProperty('--rot', (-24 + (e.clientX / innerWidth) * 20).toFixed(1) + 'deg');
  }, { passive: true });

  function tick(t) {
    if (!canHover) {
      mx = innerWidth * (.6 + .28 * Math.sin(t / 3200));
      my = innerHeight * (.35 + .22 * Math.cos(t / 4100));
    }
    dx += (mx - dx) * .07; dy += (my - dy) * .07;
    if (dot) dot.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    requestAnimationFrame(tick);
  }
  if (dot) {
    if (reduce) dot.style.transform = `translate3d(${innerWidth * .82}px, 200px, 0)`;
    else requestAnimationFrame(tick);
  }

  // copy email
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const text = btn.getAttribute('data-copy');
      try { await navigator.clipboard.writeText(text); btn.textContent = 'Copied'; }
      catch { const r = document.createRange(); const el = document.querySelector('.email'); if (el) { r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); } btn.textContent = 'Selected'; }
      setTimeout(() => { btn.textContent = 'Copy email'; }, 1800);
    });
  });

  // case study table of contents highlight
  const toc = document.querySelectorAll('.toc a');
  if (toc.length && 'IntersectionObserver' in window) {
    const map = new Map([...toc].map(a => [a.getAttribute('href').slice(1), a]));
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) { toc.forEach(a => a.classList.remove('on')); const a = map.get(en.target.id); if (a) a.classList.add('on'); }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    map.forEach((a, id) => { const el = document.getElementById(id); if (el) io.observe(el); });
  }


  const top = document.querySelector('.top');
  if (top) {
    const onScroll = () => top.classList.toggle('scrolled', scrollY > 8);
    addEventListener('scroll', onScroll, { passive: true }); onScroll();
  }

  const y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
