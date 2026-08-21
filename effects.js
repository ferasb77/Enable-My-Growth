/**
 * Enable My Growth — Advanced Technology & Interaction Effects
 * Enterprise-grade, performant, restrained, and accessible.
 */
(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ═══════════════════════════════════════════════════════════
     1. HERO INTERACTIVE CONSTELLATION CANVAS
     ═══════════════════════════════════════════════════════════ */
  function initHeroCanvas() {
    if (prefersReducedMotion) return;

    const hero = document.querySelector('#hero, .tech-hero, .studio-hero, .product-hero, .phys-hero, .page-hero');
    if (!hero) return;

    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.className = 'tech-bg-canvas';
    canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:1;opacity:0.85;';
    hero.style.position = 'relative';
    hero.insertBefore(canvas, hero.firstChild);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = hero.offsetWidth);
    let height = (canvas.height = hero.offsetHeight);

    let mouse = { x: -1000, y: -1000, active: false };
    const nodes = [];
    const nodeCount = Math.min(Math.floor((width * height) / 18000), 55);

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 0.8,
        baseAlpha: Math.random() * 0.3 + 0.15,
      });
    }

    let isVisible = true;
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
      if (isVisible) requestAnimationFrame(draw);
    });
    observer.observe(hero);

    function resize() {
      if (!hero) return;
      width = canvas.width = hero.offsetWidth;
      height = canvas.height = hero.offsetHeight;
    }
    window.addEventListener('resize', resize, { passive: true });

    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    });

    hero.addEventListener('mouseleave', () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    });

    function draw() {
      if (!isVisible) return;
      ctx.clearRect(0, 0, width, height);

      // Update & Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // Mouse proximity glow
        let alpha = n.baseAlpha;
        if (mouse.active) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            alpha = Math.min(0.85, n.baseAlpha + (1 - dist / 180) * 0.6);
            // Gentle mouse attraction
            n.x += (dx / dist) * 0.2;
            n.y += (dy / dist) * 0.2;
          }
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 169, 110, ${alpha})`;
        ctx.fill();

        // Connecting lines
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n.x - n2.x;
          const dy = n.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const lineAlpha = (1 - dist / 130) * 0.18;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(201, 169, 110, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Mouse line connect
        if (mouse.active) {
          const mdx = mouse.x - n.x;
          const mdy = mouse.y - n.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 140) {
            const mlineAlpha = (1 - mdist / 140) * 0.35;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(201, 169, 110, ${mlineAlpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    }

    requestAnimationFrame(draw);
  }

  /* ═══════════════════════════════════════════════════════════
     2. MOUSE SPOTLIGHT ON CARDS (Bento-Style Luminescence)
     ═══════════════════════════════════════════════════════════ */
  function initCardSpotlights() {
    const cardSelectors = [
      '.platform-card',
      '.capability-card',
      '.step-card',
      '.stack-group',
      '.case-study-box',
      '.trust-card',
      '.principle-card',
      '.card'
    ];
    const cards = document.querySelectorAll(cardSelectors.join(','));

    cards.forEach((card) => {
      card.classList.add('spotlight-card');
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  /* ═══════════════════════════════════════════════════════════
     3. SCROLL REVEAL OBSERVER (Smooth Staggered Entrances)
     ═══════════════════════════════════════════════════════════ */
  function initScrollReveal() {
    if (prefersReducedMotion) return;
    document.documentElement.classList.add('js-reveal');

    const revealElements = document.querySelectorAll(
      'section .container > *, .capability-card, .platform-card, .step-card, .trust-card, .case-study-box, .principle-card, .split-feature, .stack-group'
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => {
      el.classList.add('reveal-item');
      revealObserver.observe(el);
    });
  }

  /* ═══════════════════════════════════════════════════════════
     4. SECTION SCROLLSPY FOR TECH JUMP BAR
     ═══════════════════════════════════════════════════════════ */
  function initScrollspy() {
    const jumpLinks = document.querySelectorAll('.tech-jump-link');
    if (!jumpLinks.length) return;

    const sectionIds = Array.from(jumpLinks)
      .map((link) => link.getAttribute('href'))
      .filter((href) => href && href.startsWith('#'));

    const sections = sectionIds
      .map((id) => document.querySelector(id))
      .filter((sec) => sec !== null);

    if (!sections.length) return;

    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            jumpLinks.forEach((link) => {
              if (link.getAttribute('href') === id) {
                link.classList.add('active-jump');
              } else {
                link.classList.remove('active-jump');
              }
            });
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-15% 0px -55% 0px',
      }
    );

    sections.forEach((sec) => spyObserver.observe(sec));
  }

  
  /* ═══════════════════════════════════════════════════════════
     5. TECH SHOWCASE INTERACTIVE TAB SWITCHER
     ═══════════════════════════════════════════════════════════ */
  function initShowcaseTabs() {
    const tabButtons = document.querySelectorAll('.showcase-tab-btn');
    const panels = document.querySelectorAll('.showcase-panel');
    if (!tabButtons.length || !panels.length) return;

    tabButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-tab');

        // Update active tab buttons
        tabButtons.forEach((b) => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        // Switch panels with smooth fade
        panels.forEach((p) => {
          if (p.id === targetId) {
            p.classList.add('active');
          } else {
            p.classList.remove('active');
          }
        });
      });
    });
  }

  /* ═══════════════════════════════════════════════════════════
     INIT ON DOM READY
     ═══════════════════════════════════════════════════════════ */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initHeroCanvas();
      initCardSpotlights();
      initScrollReveal();
      initScrollspy();
      initShowcaseTabs();
    });
  } else {
    initHeroCanvas();
    initCardSpotlights();
    initScrollReveal();
    initScrollspy();
      initShowcaseTabs();
  }
})();
