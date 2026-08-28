/* ============================================
   9A NOTÍCIAS — Animações no scroll
   - Reveal on scroll (IntersectionObserver)
   - Barra de progresso do scroll
   - Botão "voltar ao topo"
   - Parallax leve nas fotos do hero
   ============================================ */

(function () {
  'use strict';

  // ---------- Barra de progresso ----------
  const progresso = document.createElement('div');
  progresso.className = 'progress-scroll';
  document.body.appendChild(progresso);

  function atualizarProgresso() {
    const h = document.documentElement;
    const scroll = h.scrollTop || document.body.scrollTop;
    const altura = h.scrollHeight - h.clientHeight;
    const pct = altura > 0 ? (scroll / altura) * 100 : 0;
    progresso.style.width = pct + '%';
  }

  // ---------- Botão voltar ao topo ----------
  const btnTopo = document.getElementById('voltar-topo');
  function atualizarBotao() {
    if (!btnTopo) return;
    if (window.scrollY > 500) btnTopo.classList.add('visivel');
    else btnTopo.classList.remove('visivel');
  }
  if (btnTopo) {
    btnTopo.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---------- Reveal on scroll ----------
  const reveals = document.querySelectorAll('.reveal');
  const staggersTl = document.querySelectorAll('.stagger-tl');

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visivel');
        io.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => io.observe(el));
  staggersTl.forEach(el => io.observe(el));

  // ---------- Parallax leve (via CSS var, não sobrescreve hover) ----------
  const parallaxEls = document.querySelectorAll('.reportagem .foto-dupla img');
  function aplicarParallax() {
    parallaxEls.forEach((img) => {
      const rect = img.getBoundingClientRect();
      const visivel = rect.top < window.innerHeight && rect.bottom > 0;
      if (visivel) {
        const offset = (rect.top - window.innerHeight / 2) * -0.05;
        img.style.setProperty('--py', offset + 'px');
        img.style.transform = `translateY(var(--py))`;
      }
    });
  }

  // ---------- Contador animado da enquete ----------
  // Quando enquete entra na tela, anima a barra do vencedor com um "warmup"
  const enquete = document.querySelector('.enquete');
  if (enquete) {
    const enqObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // toque estético: um leve pulse no selo
          const selo = enquete.querySelector('.selo-enquete');
          if (selo) {
            selo.animate([
              { transform: 'scale(1)' },
              { transform: 'scale(1.08)' },
              { transform: 'scale(1)' }
            ], { duration: 600, easing: 'ease-out' });
          }
          enqObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    enqObs.observe(enquete);
  }

  // ---------- Throttle helper ----------
  let ticking = false;
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        atualizarProgresso();
        atualizarBotao();
        aplicarParallax();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', atualizarProgresso, { passive: true });

  // primeira medição
  atualizarProgresso();
  atualizarBotao();

  // ---------- Efeito de "typewriter" na tagline do masthead ----------
  // (bem sutil — apenas em cargas de tela cheias)
  const tagline = document.querySelector('.masthead .tagline');
  if (tagline && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const texto = tagline.textContent;
    tagline.textContent = '';
    tagline.style.minHeight = '1.4em';
    tagline.style.opacity = '1';
    let i = 0;
    const velocidade = 22;
    function digita() {
      if (i < texto.length) {
        tagline.textContent += texto.charAt(i);
        i++;
        setTimeout(digita, velocidade);
      }
    }
    setTimeout(digita, 500);
  }

})();
