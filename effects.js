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
     6. HERO PERSPECTIVE NETWORK CONTROLLER
     ═══════════════════════════════════════════════════════════ */
  function initPerspectiveNetwork() {
    const networkEl = document.getElementById('perspective-network');
    const stateButtons = document.querySelectorAll('.network-state-btn');
    if (!networkEl || !stateButtons.length) return;

    const states = ['isolated', 'connected', 'resolved'];

    function setState(targetState) {
      if (!states.includes(targetState)) return;
      networkEl.setAttribute('data-state', targetState);

      stateButtons.forEach((btn) => {
        const isCurrent = btn.getAttribute('data-state-target') === targetState;
        btn.classList.toggle('active', isCurrent);
        btn.setAttribute('aria-pressed', isCurrent ? 'true' : 'false');
      });
    }

    stateButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-state-target');
        setState(target);
      });
    });

    // Subtle hover highlighting on concept nodes to demonstrate interconnectedness
    const conceptNodes = networkEl.querySelectorAll('.concept-node');
    conceptNodes.forEach((node) => {
      node.addEventListener('mouseenter', () => {
        if (networkEl.getAttribute('data-state') === 'isolated') {
          // Temporarily connect to reveal potential structure
          networkEl.setAttribute('data-state', 'connected');
        }
      });
    });
  }

  /* ═══════════════════════════════════════════════════════════
     7. PERSPECTIVE STEPPER SCROLL OBSERVER
     ═══════════════════════════════════════════════════════════ */
  function initPerspectiveStepper() {
    const stepperSection = document.getElementById('perspective-journey');
    const stageCards = document.querySelectorAll('.perspective-stage-card');
    const fillBar = document.getElementById('stepper-fill-bar');
    if (!stepperSection || !stageCards.length) return;

    // Interactive clicking on stage cards
    stageCards.forEach((card, idx) => {
      card.addEventListener('click', () => {
        stageCards.forEach((c) => c.classList.remove('active'));
        card.classList.add('active');
        if (fillBar) {
          fillBar.style.width = `${((idx + 1) / stageCards.length) * 100}%`;
        }
      });
    });

    // Scroll-based auto progression observer
    let currentIndex = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !prefersReducedMotion) {
            // Animate through stages progressively when the section enters viewport
            let step = 0;
            const interval = setInterval(() => {
              step++;
              if (step > stageCards.length) {
                clearInterval(interval);
                return;
              }
              stageCards.forEach((c, i) => {
                c.classList.toggle('active', i < step);
              });
              if (fillBar) {
                fillBar.style.width = `${(step / stageCards.length) * 100}%`;
              }
            }, 550);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(stepperSection);
  }

  /* ═══════════════════════════════════════════════════════════
     8. CAPOS OPERATING FLOW PIPELINE CONTROLLER
     ═══════════════════════════════════════════════════════════ */
  function initCapOSFlow() {
    const flowContainer = document.getElementById('capos-flow-container');
    if (!flowContainer) return;

    const stepButtons = flowContainer.querySelectorAll('.capos-step-btn');
    const flowNodes = flowContainer.querySelectorAll('.cap-flow-node-g');
    const lineFill = document.getElementById('capos-line-fill');
    const descNum = document.getElementById('capos-desc-num');
    const descTitle = document.getElementById('capos-desc-title');
    const descText = document.getElementById('capos-desc-text');

    const stepData = {
      1: {
        num: 'Pillar 01',
        title: 'Participation across the organizational lifecycle',
        text: 'Rather than treating learning sessions as ephemeral events, CapOS coordinates participants, facilitators, leadership sponsors, and cohorts in a shared, transparent environment with real-time operational visibility.',
        lineX2: 100,
      },
      2: {
        num: 'Pillar 02',
        title: 'Evidence collected in real time',
        text: 'Action projects, capability artifacts, feedback loops, and observed behavioral shifts are captured continuously as structured proof rather than buried in static evaluation spreadsheets.',
        lineX2: 320,
      },
      3: {
        num: 'Pillar 03',
        title: 'Accountable follow-through & behavioral practice',
        text: 'Capability fails when program momentum evaporates. CapOS institutionalizes structured peer coaching check-ins, application milestones, and supervisor alignment cadences over 6–18 months.',
        lineX2: 560,
      },
      4: {
        num: 'Pillar 04',
        title: 'Organizational intelligence & executive memory',
        text: 'Synthesizes enterprise-wide capability signals into actionable executive dashboards. Leaders see where capability is compounding, where friction persists, and how capability investments translate into business performance.',
        lineX2: 780,
      },
    };

    function activateStep(stepIdx) {
      const data = stepData[stepIdx];
      if (!data) return;

      // Update buttons
      stepButtons.forEach((btn) => {
        const isActive = parseInt(btn.getAttribute('data-flow-step'), 10) === stepIdx;
        btn.classList.toggle('active', isActive);
      });

      // Update SVG nodes
      flowNodes.forEach((node) => {
        const idx = parseInt(node.getAttribute('data-flow-idx'), 10);
        node.classList.toggle('active', idx === stepIdx);
      });

      // Update SVG connecting line
      if (lineFill) {
        lineFill.setAttribute('x2', data.lineX2.toString());
      }

      // Update copy with smooth transition
      if (descNum && descTitle && descText) {
        descNum.textContent = data.num;
        descTitle.textContent = data.title;
        descText.textContent = data.text;
      }
    }

    stepButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const step = parseInt(btn.getAttribute('data-flow-step'), 10);
        activateStep(step);
      });
    });

    flowNodes.forEach((node) => {
      node.addEventListener('click', () => {
        const step = parseInt(node.getAttribute('data-flow-idx'), 10);
        activateStep(step);
      });
    });
  }

  /* ═══════════════════════════════════════════════════════════
     9. AI THINKING STUDIO DELIBERATION TREE CONTROLLER
     ═══════════════════════════════════════════════════════════ */
  function initThinkingStudioTree() {
    const treeContainer = document.getElementById('thinking-tree-container');
    if (!treeContainer) return;

    const branchButtons = treeContainer.querySelectorAll('.delib-branch-btn');
    const branchCards = treeContainer.querySelectorAll('.branch-node-card');
    const branchLines = treeContainer.querySelectorAll('.tree-branch-line');

    const branchIndexMap = {
      assumptions: 1,
      evidence: 2,
      alternatives: 3,
      risks: 4,
      implications: 5,
    };

    function activateBranch(branchName) {
      const branchNum = branchIndexMap[branchName] || 1;

      // Update buttons
      branchButtons.forEach((btn) => {
        const isCurrent = btn.getAttribute('data-branch') === branchName;
        btn.classList.toggle('active', isCurrent);
      });

      // Update branch detail cards
      branchCards.forEach((card) => {
        const isCurrent = card.getAttribute('data-branch-name') === branchName;
        card.classList.toggle('active', isCurrent);
      });

      // Update SVG branch connector lines
      branchLines.forEach((line, idx) => {
        line.classList.toggle('active', idx + 1 === branchNum);
      });
    }

    branchButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const branchName = btn.getAttribute('data-branch');
        activateBranch(branchName);
      });
    });

    branchCards.forEach((card) => {
      card.addEventListener('click', () => {
        const branchName = card.getAttribute('data-branch-name');
        activateBranch(branchName);
      });
    });

    // Default activate first line
    activateBranch('assumptions');
  }

  /* ═══════════════════════════════════════════════════════════
     INIT ON DOM READY
     ═══════════════════════════════════════════════════════════ */
  function initAll() {
    initHeroCanvas();
    initCardSpotlights();
    initScrollReveal();
    initScrollspy();
    initShowcaseTabs();
    initPerspectiveNetwork();
    initPerspectiveStepper();
    initCapOSFlow();
    initThinkingStudioTree();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
