'use client';

import React, { useState, useEffect } from 'react';

// The 5 key signals with their structural positions
const primarySignals = [
  { id: 'people', title: 'People', sub: 'Capability & Action' },
  { id: 'context', title: 'Context', sub: 'Operational Reality' },
  { id: 'programs', title: 'Programs', sub: 'Delivery Structure' },
  { id: 'evidence', title: 'Evidence', sub: 'Empirical Telemetry' },
  { id: 'decisions', title: 'Decisions', sub: 'Defensible Action' },
];

export function PerspectiveNetwork() {
  const [playCount, setPlayCount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleReplay = () => {
    setPlayCount((prev) => prev + 1);
  };

  return (
    <div
      className="perspective-network-card spotlight-card perspective-field-card"
      id="perspective-network"
      aria-label="Perspective Field Strategic Transformation"
    >
      {/* Network Header with Status & Replay Control */}
      <div className="network-header">
        <div className="network-status-indicator">
          <span className="network-pulse-dot" aria-hidden="true" />
          <span className="network-state-text" aria-live="polite">
            Perspective Field · Better Judgment
          </span>
        </div>

        <div className="network-actions">
          <button
            type="button"
            className="net-replay-btn"
            onClick={handleReplay}
            title="Replay the Perspective Field sequence"
            aria-label="Replay Perspective Field sequence"
          >
            <span aria-hidden="true">↺</span> Replay
          </button>
        </div>
      </div>

      {/* Animation Stage: keyed by playCount to force deterministic restart on replay */}
      <div
        key={playCount}
        className={`perspective-field-stage ${isMounted ? 'is-running' : 'is-prerender'}`}
      >
        <svg
          className="perspective-field-svg"
          viewBox="0 0 520 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Subtle background glow for lens */}
            <radialGradient id="lensGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--tech-gold)" stopOpacity="0.12" />
              <stop offset="60%" stopColor="var(--tech-gold)" stopOpacity="0.03" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>

            {/* Linear gradient for final Judgment beam */}
            <linearGradient id="judgmentBeam" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--tech-gold)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="var(--tech-gold)" stopOpacity="0.15" />
            </linearGradient>
          </defs>

          {/* ── PHASE 1: BACKGROUND SCATTERED SIGNALS (Faint noise fragments) ── */}
          <g className="pf-scatter-field" aria-hidden="true">
            <circle cx="55" cy="65" r="2" className="pf-scatter-dot dot-1" />
            <circle cx="140" cy="45" r="1.5" className="pf-scatter-dot dot-2" />
            <circle cx="410" cy="55" r="2" className="pf-scatter-dot dot-3" />
            <circle cx="475" cy="95" r="1.5" className="pf-scatter-dot dot-4" />
            <circle cx="35" cy="205" r="1.5" className="pf-scatter-dot dot-5" />
            <circle cx="490" cy="245" r="2" className="pf-scatter-dot dot-6" />
            <circle cx="65" cy="350" r="1.5" className="pf-scatter-dot dot-7" />
            <circle cx="160" cy="375" r="2" className="pf-scatter-dot dot-8" />
            <circle cx="380" cy="370" r="1.5" className="pf-scatter-dot dot-9" />
            <circle cx="465" cy="340" r="2" className="pf-scatter-dot dot-10" />

            {/* Subtle scattered stray dashes */}
            <line x1="80" y1="130" x2="105" y2="115" className="pf-scatter-line line-1" />
            <line x1="420" y1="140" x2="445" y2="160" className="pf-scatter-line line-2" />
            <line x1="70" y1="270" x2="95" y2="290" className="pf-scatter-line line-3" />
            <line x1="430" y1="280" x2="450" y2="260" className="pf-scatter-line line-4" />
          </g>

          {/* ── PHASE 2: PERSPECTIVE LENS GEOMETRY ── */}
          <g className="pf-lens-group" aria-hidden="true">
            {/* Ambient radial lens illumination */}
            <circle cx="260" cy="185" r="130" fill="url(#lensGlow)" className="pf-lens-glow" />

            {/* Outer structural geometric frame */}
            <circle cx="260" cy="185" r="126" className="pf-lens-ring ring-outer" />
            <circle cx="260" cy="185" r="92" className="pf-lens-ring ring-mid" />
            <circle cx="260" cy="185" r="60" className="pf-lens-ring ring-inner" />

            {/* Fine coordinate tick marks on lens */}
            <line x1="260" y1="55" x2="260" y2="67" className="pf-lens-tick" />
            <line x1="260" y1="303" x2="260" y2="315" className="pf-lens-tick" />
            <line x1="130" y1="185" x2="142" y2="185" className="pf-lens-tick" />
            <line x1="378" y1="185" x2="390" y2="185" className="pf-lens-tick" />
          </g>

          {/* ── PHASE 3: INTERPRETATION TRACES & RELATIONSHIPS ── */}
          <g className="pf-relationship-paths" aria-hidden="true">
            {/* Smooth curved paths linking the 5 signals through the lens */}
            {/* People (100, 95) to Center & Context (260, 65) */}
            <path d="M 100 95 C 170 75, 210 65, 260 65" className="pf-rel-path path-1" />
            {/* Context (260, 65) to Programs (420, 95) */}
            <path d="M 260 65 C 310 65, 350 75, 420 95" className="pf-rel-path path-2" />
            {/* Programs (420, 95) to Decisions (395, 295) */}
            <path d="M 420 95 C 440 180, 425 240, 395 295" className="pf-rel-path path-3" />
            {/* Decisions (395, 295) to Evidence (125, 295) */}
            <path d="M 395 295 C 320 325, 200 325, 125 295" className="pf-rel-path path-4" />
            {/* Evidence (125, 295) to People (100, 95) */}
            <path d="M 125 295 C 95 240, 80 180, 100 95" className="pf-rel-path path-5" />

            {/* Convergent focal rays connecting signals directly to the center */}
            <line x1="100" y1="95" x2="260" y2="185" className="pf-focal-ray ray-people" />
            <line x1="260" y1="65" x2="260" y2="185" className="pf-focal-ray ray-context" />
            <line x1="420" y1="95" x2="260" y2="185" className="pf-focal-ray ray-programs" />
            <line x1="125" y1="295" x2="260" y2="185" className="pf-focal-ray ray-evidence" />
            <line x1="395" y1="295" x2="260" y2="185" className="pf-focal-ray ray-decisions" />
          </g>

          {/* ── PHASE 4: JUDGMENT CORE & DIRECTIONAL VECTOR ── */}
          <g className="pf-judgment-core">
            {/* Central structured disc */}
            <circle cx="260" cy="185" r="44" className="pf-core-disc" />
            <circle cx="260" cy="185" r="50" className="pf-core-border" />

            {/* Center Label: PERSPECTIVE */}
            <text x="260" y="180" textAnchor="middle" className="pf-text-perspective">
              PERSPECTIVE
            </text>
            <text x="260" y="196" textAnchor="middle" className="pf-text-sub">
              STRUCTURED CLARITY
            </text>

            {/* Directional beam emerging toward Better Judgment */}
            <line x1="260" y1="234" x2="260" y2="280" className="pf-judgment-beam" />
            <polygon points="257,278 263,278 260,285" className="pf-judgment-arrowhead" />

            {/* Decisive Judgment Plaque / Anchor */}
            <g className="pf-judgment-plaque" transform="translate(260, 310)">
              <rect x="-85" y="-14" width="170" height="28" rx="2" className="pf-plaque-bg" />
              <text x="0" y="4" textAnchor="middle" className="pf-plaque-text">
                BETTER JUDGMENT
              </text>
            </g>
          </g>
        </svg>

        {/* ── 5 PRIMARY ORGANIZATIONAL SIGNALS ── */}
        <div className="pf-signals-layer" aria-label="Five organizational signals">
          {primarySignals.map((sig) => (
            <div
              key={sig.id}
              className={`pf-signal-pill pf-sig-${sig.id}`}
              data-signal={sig.id}
            >
              <span className="pf-sig-dot" />
              <div className="pf-sig-content">
                <span className="pf-sig-title">{sig.title}</span>
                <span className="pf-sig-sub">{sig.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Narrative Metaphor Subtitle */}
      <div className="network-footer">
        <span className="network-legend-tag">
          Scattered Signals → Perspective Lens → Disciplined Interpretation → Better Judgment
        </span>
      </div>
    </div>
  );
}

