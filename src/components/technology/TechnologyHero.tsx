import React from 'react';

export function TechnologyHero() {
  return (
    <section className="tech-hero" id="hero" aria-label="Enable My Growth Technology Hero">
      {/* ── FULL-BLEED LIVING PERSPECTIVE FIELD (No outer borders, panels, or frames) ── */}
      <div className="perspective-field is-running" id="perspective-field" aria-hidden="true">
        {/* Ambient background glows */}
        <div className="pf-bg-glow-center" />
        <div className="pf-bg-glow-lens" />

        {/* Full-bleed SVG Animation Surface */}
        <svg
          className="pf-svg-surface"
          viewBox="0 0 1440 820"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="heroCoreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#C9A96E" stopOpacity="0.06" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="judgmentBeamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#dfca9e" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Phase 1 — Scattered background points (quiet, unlabeled) */}
          <g className="pf-scatter-group">
            <circle cx="120" cy="180" r="1.5" className="pf-faint-dot" />
            <circle cx="280" cy="120" r="2" className="pf-faint-dot" />
            <circle cx="440" cy="240" r="1.5" className="pf-faint-dot" />
            <circle cx="680" cy="110" r="2" className="pf-faint-dot" />
            <circle cx="920" cy="160" r="1.5" className="pf-faint-dot" />
            <circle cx="1180" cy="130" r="2" className="pf-faint-dot" />
            <circle cx="1340" cy="220" r="1.5" className="pf-faint-dot" />
            <circle cx="180" cy="540" r="2" className="pf-faint-dot" />
            <circle cx="340" cy="680" r="1.5" className="pf-faint-dot" />
            <circle cx="620" cy="600" r="2" className="pf-faint-dot" />
            <circle cx="1060" cy="620" r="1.5" className="pf-faint-dot" />
            <circle cx="1280" cy="530" r="2" className="pf-faint-dot" />
            <circle cx="1380" cy="680" r="1.5" className="pf-faint-dot" />
            <path d="M 860 140 L 860 160 M 860 620 L 860 640" className="pf-faint-reticle" />
            <path d="M 580 390 L 600 390 M 1120 390 L 1140 390" className="pf-faint-reticle" />
          </g>

          {/* Phase 2 — Central Perspective Geometry */}
          <g className="pf-lens-group">
            <circle cx="880" cy="390" r="210" fill="url(#heroCoreGlow)" className="pf-core-aura" />
            <circle cx="880" cy="390" r="200" className="pf-lens-orbit pf-orbit-1" />
            <circle cx="880" cy="390" r="145" className="pf-lens-orbit pf-orbit-2" />
            <circle cx="880" cy="390" r="95" className="pf-lens-orbit pf-orbit-3" />
            <line x1="880" y1="180" x2="880" y2="195" className="pf-axis-mark" />
            <line x1="880" y1="585" x2="880" y2="600" className="pf-axis-mark" />
            <line x1="670" y1="390" x2="685" y2="390" className="pf-axis-mark" />
            <line x1="1075" y1="390" x2="1090" y2="390" className="pf-axis-mark" />
          </g>

          {/* Phase 3 — Convergence Relationship Paths & Focal Beams */}
          <g className="pf-paths-group">
            <path d="M 640 220 C 720 190, 790 170, 880 170" className="pf-curve pf-c1" />
            <path d="M 880 170 C 970 170, 1040 190, 1120 220" className="pf-curve pf-c2" />
            <path d="M 1120 220 C 1160 320, 1140 440, 1080 540" className="pf-curve pf-c3" />
            <path d="M 1080 540 C 980 610, 780 610, 680 540" className="pf-curve pf-c4" />
            <path d="M 680 540 C 620 440, 600 320, 640 220" className="pf-curve pf-c5" />

            {/* Inward Focal Rays */}
            <line x1="640" y1="220" x2="880" y2="390" className="pf-ray pf-ray-people" />
            <line x1="880" y1="170" x2="880" y2="390" className="pf-ray pf-ray-context" />
            <line x1="1120" y1="220" x2="880" y2="390" className="pf-ray pf-ray-programs" />
            <line x1="680" y1="540" x2="880" y2="390" className="pf-ray pf-ray-evidence" />
            <line x1="1080" y1="540" x2="880" y2="390" className="pf-ray pf-ray-decisions" />
          </g>

          {/* Phase 3 & 4 — PERSPECTIVE Center & BETTER JUDGMENT Directional Alignment */}
          <g className="pf-center-hub">
            <circle cx="880" cy="390" r="62" className="pf-hub-bg" />
            <circle cx="880" cy="390" r="70" className="pf-hub-ring" />
            <text x="880" y="385" textAnchor="middle" className="pf-text-perspective">
              PERSPECTIVE
            </text>
            <text x="880" y="404" textAnchor="middle" className="pf-text-clarity">
              SYNTHESIS CORE
            </text>

            {/* Downward Vector toward Defensible Action */}
            <line x1="880" y1="460" x2="880" y2="520" className="pf-vector-line" />
            <polygon points="875,518 885,518 880,528" className="pf-vector-head" />

            {/* Settled Plaque: BETTER JUDGMENT */}
            <g className="pf-plaque-node" transform="translate(880, 558)">
              <rect x="-105" y="-18" width="210" height="36" rx="3" className="pf-plaque-rect" />
              <text x="0" y="6" textAnchor="middle" className="pf-plaque-label">
                BETTER JUDGMENT
              </text>
            </g>
          </g>
        </svg>

        {/* 5 Named Signals — Positioned Spatially across the Living Field (No rectangular cards) */}
        <div className="pf-nodes-field" aria-hidden="true">
          <div className="pf-spatial-node pf-node-people">
            <span className="pf-node-dot" />
            <span className="pf-node-label">People</span>
            <span className="pf-node-sub">Participation &amp; Agency</span>
          </div>

          <div className="pf-spatial-node pf-node-context">
            <span className="pf-node-dot" />
            <span className="pf-node-label">Context</span>
            <span className="pf-node-sub">Operational Reality</span>
          </div>

          <div className="pf-spatial-node pf-node-programs">
            <span className="pf-node-dot" />
            <span className="pf-node-label">Programs</span>
            <span className="pf-node-sub">Delivery Structure</span>
          </div>

          <div className="pf-spatial-node pf-node-evidence">
            <span className="pf-node-dot" />
            <span className="pf-node-label">Evidence</span>
            <span className="pf-node-sub">Verifiable Telemetry</span>
          </div>

          <div className="pf-spatial-node pf-node-decisions">
            <span className="pf-node-dot" />
            <span className="pf-node-label">Decisions</span>
            <span className="pf-node-sub">Defensible Action</span>
          </div>
        </div>
      </div>

      {/* ── HERO CONTENT LAYER: Sits cleanly over the full-bleed field ── */}
      <div className="container tech-hero-container">
        <div className="tech-hero-editorial">
          {/* Top Tag & Replay Bar */}
          <div className="tech-hero-topline">
            <div className="tech-hero-badge">
              <span className="tech-dot-pulse" />
              <span className="eyebrow" style={{ color: 'var(--gold)', letterSpacing: '0.22em' }}>
                Enable My Growth Technology
              </span>
              <span className="tech-meta-tag">Decision Systems &amp; Platforms</span>
            </div>

            <button
              type="button"
              className="pf-replay-btn"
              id="pf-replay-btn"
              title="Replay synthesis animation"
              aria-label="Replay synthesis animation"
            >
              <span className="pf-replay-icon" aria-hidden="true">↺</span>
              <span>Replay</span>
            </button>
          </div>

          <h1 className="tech-hero-h1">
            Technology designed around better human judgment.
          </h1>

          <p className="tech-hero-lead">
            We build technology that connects participation, evidence, context, and intelligence—helping
            organizations see more clearly and act with greater confidence.
          </p>

          <div className="tech-hero-actions">
            <a href="#portfolio" className="btn btn-gold tech-btn-hero">
              Explore the Portfolio <span className="btn-arrow">→</span>
            </a>
            <a href="contact.html?enquiry=Technology+Requirement" className="btn btn-outline tech-btn-outline">
              Discuss a Requirement
            </a>
          </div>

          {/* Section Jump Shortcuts Bar */}
          <nav className="tech-jump-bar" id="tech-jump-bar" aria-label="Section shortcuts">
            <a href="#perspective-journey" className="tech-jump-link">Perspective</a>
            <a href="#portfolio" className="tech-jump-link">Portfolio</a>
            <a href="#capos-showcase" className="tech-jump-link">CapOS™</a>
            <a href="#thinking-studio-showcase" className="tech-jump-link">Thinking Studio™</a>
            <a href="#philosophy" className="tech-jump-link">Philosophy</a>
            <a href="#matrix" className="tech-jump-link">Matrix</a>
            <a href="#architecture" className="tech-jump-link">Enterprise Trust</a>
          </nav>
        </div>
      </div>
    </section>
  );
}
