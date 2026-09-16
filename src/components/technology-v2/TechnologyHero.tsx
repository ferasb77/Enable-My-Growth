'use client';

import React, { useState } from 'react';

export function TechnologyHero() {
  const [animationKey, setAnimationKey] = useState(0);

  const handleReplay = () => {
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <section className="tv2-hero" id="tv2-hero" aria-label="Enable My Growth Technology Hero">
      {/* ── AMBIENT BACKGROUND GLOW ── */}
      <div className="tv2-hero-ambient" aria-hidden="true" />

      {/* ── EDITORIAL CONTENT FOREGROUND & DUAL-ZONE SPATIAL CANVAS ── */}
      <div className="tv2-container tv2-hero-content">
        {/* Left: Pure Editorial Hierarchy */}
        <div className="tv2-hero-editorial">
          <div className="tv2-hero-tagline">
            <span className="tv2-eyebrow-dot" />
            <span>Enable My Growth Technology</span>
          </div>

          <h1 className="tv2-hero-h1">
            Technology designed around <em>better human judgment.</em>
          </h1>

          <p className="tv2-hero-desc">
            We build technology that connects participation, evidence, context, and intelligence—helping
            organizations see more clearly and act with greater confidence.
          </p>

          <div className="tv2-hero-actions">
            <a href="#tv2-systems" className="tv2-btn tv2-btn-gold">
              Explore Systems <span>↓</span>
            </a>
            <a href="contact.html?enquiry=Technology+Requirement" className="tv2-btn tv2-btn-outline">
              Discuss a Requirement <span>→</span>
            </a>
          </div>
        </div>

        {/* Right: Living Perspective Spatial Canvas Environment (Self-contained, full responsiveness) */}
        <div className="tv2-hero-canvas-stage tv2-anim-running" key={animationKey} aria-hidden="true">
          <svg
            className="tv2-hero-stage-svg"
            viewBox="0 0 640 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="tv2StageGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#C9A96E" stopOpacity="0.08" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Quiet Distributed Background Points & Reticles */}
            <g className="tv2-scatter-group tv2-signal-item">
              <circle cx="60" cy="80" r="1.5" fill="#8D8DA4" opacity="0.4" />
              <circle cx="180" cy="50" r="2" fill="#8D8DA4" opacity="0.5" />
              <circle cx="580" cy="70" r="1.5" fill="#8D8DA4" opacity="0.4" />
              <circle cx="80" cy="460" r="2" fill="#8D8DA4" opacity="0.5" />
              <circle cx="560" cy="440" r="2" fill="#8D8DA4" opacity="0.5" />
              <circle cx="320" cy="40" r="1.5" fill="#8D8DA4" opacity="0.3" />
              <path d="M 320 20 L 320 35 M 320 500 L 320 515" stroke="#C9A96E" strokeWidth="0.8" opacity="0.3" />
              <path d="M 40 260 L 55 260 M 585 260 L 600 260" stroke="#C9A96E" strokeWidth="0.8" opacity="0.3" />
            </g>

            {/* Geometric Perspective Orbits */}
            <g className="tv2-orbit-group">
              <circle cx="320" cy="250" r="170" fill="url(#tv2StageGlow)" className="tv2-core-aura" />
              <circle cx="320" cy="250" r="160" stroke="rgba(201, 169, 110, 0.2)" strokeWidth="1" strokeDasharray="4 6" className="tv2-orbit-line" />
              <circle cx="320" cy="250" r="115" stroke="rgba(201, 169, 110, 0.35)" strokeWidth="1" className="tv2-orbit-line" />
              <circle cx="320" cy="250" r="75" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" className="tv2-orbit-line" />
              
              {/* Cardinal ticks */}
              <line x1="320" y1="80" x2="320" y2="92" stroke="#C9A96E" strokeWidth="1.5" />
              <line x1="320" y1="408" x2="320" y2="420" stroke="#C9A96E" strokeWidth="1.5" />
              <line x1="150" y1="250" x2="162" y2="250" stroke="#C9A96E" strokeWidth="1.5" />
              <line x1="478" y1="250" x2="490" y2="250" stroke="#C9A96E" strokeWidth="1.5" />
            </g>

            {/* Convergence Vectors linking to center */}
            <g className="tv2-paths-group">
              <line x1="120" y1="120" x2="320" y2="250" stroke="#C9A96E" strokeWidth="1" className="tv2-ray-path" />
              <line x1="320" y1="75" x2="320" y2="250" stroke="#C9A96E" strokeWidth="1" className="tv2-ray-path" />
              <line x1="520" y1="120" x2="320" y2="250" stroke="#C9A96E" strokeWidth="1" className="tv2-ray-path" />
              <line x1="120" y1="370" x2="320" y2="250" stroke="#C9A96E" strokeWidth="1" className="tv2-ray-path" />
              <line x1="520" y1="370" x2="320" y2="250" stroke="#C9A96E" strokeWidth="1" className="tv2-ray-path" />

              {/* Perimeter connective curves */}
              <path d="M 120 120 C 180 80, 250 75, 320 75" stroke="rgba(201, 169, 110, 0.25)" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M 320 75 C 390 75, 460 80, 520 120" stroke="rgba(201, 169, 110, 0.25)" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M 520 120 C 565 190, 565 290, 520 370" stroke="rgba(201, 169, 110, 0.25)" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M 520 370 C 435 425, 205 425, 120 370" stroke="rgba(201, 169, 110, 0.25)" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M 120 370 C 75 290, 75 190, 120 120" stroke="rgba(201, 169, 110, 0.25)" strokeWidth="1" strokeDasharray="3 3" />
            </g>

            {/* Perspective Hub */}
            <g className="tv2-hub-group">
              <circle cx="320" cy="250" r="52" fill="#0D0D14" stroke="#C9A96E" strokeWidth="1.5" />
              <circle cx="320" cy="250" r="60" stroke="rgba(201, 169, 110, 0.3)" strokeWidth="1" strokeDasharray="2 4" />
              <text x="320" y="246" textAnchor="middle" fill="#FFFFFF" fontFamily="'Cormorant Garamond', serif" fontSize="15" letterSpacing="2">
                PERSPECTIVE
              </text>
              <text x="320" y="262" textAnchor="middle" fill="#C9A96E" fontFamily="'JetBrains Mono', monospace" fontSize="8" letterSpacing="1.5">
                SYNTHESIS
              </text>

              {/* Downward Vector toward Action */}
              <line x1="320" y1="310" x2="320" y2="440" stroke="#C9A96E" strokeWidth="1.5" />
              <polygon points="315,438 325,438 320,450" fill="#C9A96E" />
            </g>

            {/* BETTER JUDGMENT Plaque */}
            <g className="tv2-judgment-plaque" transform="translate(320, 482)">
              <rect x="-95" y="-16" width="190" height="32" rx="2" fill="#13131D" stroke="#C9A96E" strokeWidth="1" />
              <text x="0" y="5" textAnchor="middle" fill="#DEC28F" fontFamily="'JetBrains Mono', monospace" fontSize="10.5" fontWeight="600" letterSpacing="2">
                BETTER JUDGMENT
              </text>
            </g>
          </svg>

          {/* Spatial Labels inside the Stage Container */}
          <div className="tv2-stage-node tv2-snode-people">
            <div className="node-tag"><span className="node-dot" /> People</div>
            <span className="node-desc">Agency &amp; Participation</span>
          </div>

          <div className="tv2-stage-node tv2-snode-context">
            <div className="node-tag"><span className="node-dot" /> Context</div>
            <span className="node-desc">Operating Reality</span>
          </div>

          <div className="tv2-stage-node tv2-snode-programs">
            <div className="node-tag"><span className="node-dot" /> Programs</div>
            <span className="node-desc">Delivery Structure</span>
          </div>

          <div className="tv2-stage-node tv2-snode-evidence">
            <div className="node-tag"><span className="node-dot" /> Evidence</div>
            <span className="node-desc">Verifiable Telemetry</span>
          </div>

          <div className="tv2-stage-node tv2-snode-decisions">
            <div className="node-tag"><span className="node-dot" /> Decisions</div>
            <span className="node-desc">Defensible Action</span>
          </div>
        </div>
      </div>

      {/* Replay Pill */}
      <button
        type="button"
        className="tv2-replay-trigger"
        onClick={handleReplay}
        title="Replay synthesis animation"
        aria-label="Replay synthesis animation"
      >
        <span>↺</span> Replay
      </button>
    </section>
  );
}
