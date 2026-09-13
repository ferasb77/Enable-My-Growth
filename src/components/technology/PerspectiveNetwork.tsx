'use client';

import React, { useState, useEffect } from 'react';

export interface SignalItem {
  id: string;
  title: string;
  sub: string;
  category: string;
  x: number;
  y: number;
  description: string;
}

export const primarySignals: SignalItem[] = [
  {
    id: 'people',
    title: 'People',
    sub: 'Capability & Action',
    category: 'Human Agency',
    x: 90,
    y: 110,
    description: 'Participants, facilitators, and leadership practitioners driving operational capability.',
  },
  {
    id: 'context',
    title: 'Context',
    sub: 'Operational Reality',
    category: 'Environment',
    x: 270,
    y: 60,
    description: 'Operating constraints, regulatory mandates, and organizational pressures.',
  },
  {
    id: 'programs',
    title: 'Programs',
    sub: 'Delivery Structure',
    category: 'Architecture',
    x: 450,
    y: 110,
    description: 'Structured enterprise academies, cohort sessions, and milestone governance.',
  },
  {
    id: 'evidence',
    title: 'Evidence',
    sub: 'Empirical Telemetry',
    category: 'Verifiable Proof',
    x: 120,
    y: 320,
    description: 'Concrete work products, assessment telemetry, and verifiable audit records.',
  },
  {
    id: 'decisions',
    title: 'Decisions',
    sub: 'Defensible Action',
    category: 'Outcome',
    x: 420,
    y: 320,
    description: 'Traceable executive commitments and auditable choices with preserved human accountability.',
  },
];

export function PerspectiveNetwork() {
  const [playCount, setPlayCount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [activeSignal, setActiveSignal] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleReplay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSignal(null);
    setPlayCount((prev) => prev + 1);
  };

  const selectedSig = primarySignals.find((s) => s.id === activeSignal);

  return (
    <div
      className="perspective-atmosphere-wrapper"
      id="perspective-network"
      aria-label="Perspective Field Strategic Transformation"
    >
      {/* Background ambient light fields */}
      <div className="pf-ambient-mesh" aria-hidden="true" />
      <div className="pf-ambient-lens-light" aria-hidden="true" />

      {/* Floating System HUD Header */}
      <div className="pf-hud-header">
        <div className="pf-status-badge">
          <span className="pf-pulse-core" aria-hidden="true" />
          <span className="pf-status-label">PERSPECTIVE FIELD</span>
          <span className="pf-status-state">· Living Synthesis Engine</span>
        </div>

        <button
          type="button"
          className="pf-replay-control"
          onClick={handleReplay}
          title="Restart Perspective Field synthesis"
          aria-label="Restart Perspective Field synthesis"
        >
          <span className="pf-replay-icon" aria-hidden="true">↺</span>
          <span className="pf-replay-text">Restart Field</span>
        </button>
      </div>

      {/* Primary SVG Animation & Interactive Field */}
      <div
        key={playCount}
        className={`perspective-field-canvas-wrap ${isMounted ? 'is-running' : 'is-prerender'} ${
          activeSignal ? `inspecting-${activeSignal}` : ''
        }`}
      >
        <svg
          className="perspective-fluid-svg"
          viewBox="0 0 540 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="fieldCoreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--tech-gold)" stopOpacity="0.22" />
              <stop offset="50%" stopColor="var(--tech-gold)" stopOpacity="0.06" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="fluidBeam" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--tech-gold)" stopOpacity="0.95" />
              <stop offset="100%" stopColor="var(--tech-gold-bright)" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* ── 1. AMBIENT SCATTERED PARTICLES & RETICLES ── */}
          <g className="pf-scatter-points" aria-hidden="true">
            <circle cx="45" cy="55" r="1.5" className="pf-sc-dot" />
            <circle cx="150" cy="40" r="2" className="pf-sc-dot" />
            <circle cx="390" cy="45" r="1.5" className="pf-sc-dot" />
            <circle cx="495" cy="80" r="2" className="pf-sc-dot" />
            <circle cx="30" cy="220" r="1.5" className="pf-sc-dot" />
            <circle cx="510" cy="225" r="2" className="pf-sc-dot" />
            <circle cx="55" cy="365" r="2" className="pf-sc-dot" />
            <circle cx="170" cy="390" r="1.5" className="pf-sc-dot" />
            <circle cx="370" cy="385" r="2" className="pf-sc-dot" />
            <circle cx="485" cy="355" r="1.5" className="pf-sc-dot" />

            <path d="M 270 20 L 270 40 M 270 380 L 270 400" className="pf-sc-reticle" />
            <path d="M 20 195 L 40 195 M 500 195 L 520 195" className="pf-sc-reticle" />
          </g>

          {/* ── 2. PERSPECTIVE LENS GEOMETRY ── */}
          <g className="pf-lens-structure" aria-hidden="true">
            <circle cx="270" cy="195" r="145" fill="url(#fieldCoreGlow)" className="pf-lens-aura" />
            <circle cx="270" cy="195" r="138" className="pf-lens-orbit orbit-outer" />
            <circle cx="270" cy="195" r="102" className="pf-lens-orbit orbit-mid" />
            <circle cx="270" cy="195" r="68" className="pf-lens-orbit orbit-inner" />

            {/* Compass Axis Markings */}
            <line x1="270" y1="52" x2="270" y2="62" className="pf-axis-tick" />
            <line x1="270" y1="328" x2="270" y2="338" className="pf-axis-tick" />
            <line x1="127" y1="195" x2="137" y2="195" className="pf-axis-tick" />
            <line x1="403" y1="195" x2="413" y2="195" className="pf-axis-tick" />
          </g>

          {/* ── 3. DYNAMIC TRACES & FOCAL RAYS ── */}
          <g className="pf-convergence-network" aria-hidden="true">
            <path d="M 90 110 C 160 80, 210 60, 270 60" className="pf-trace-contour contour-1" />
            <path d="M 270 60 C 330 60, 380 80, 450 110" className="pf-trace-contour contour-2" />
            <path d="M 450 110 C 475 200, 455 260, 420 320" className="pf-trace-contour contour-3" />
            <path d="M 420 320 C 340 355, 200 355, 120 320" className="pf-trace-contour contour-4" />
            <path d="M 120 320 C 85 260, 65 200, 90 110" className="pf-trace-contour contour-5" />

            <line
              x1="90"
              y1="110"
              x2="270"
              y2="195"
              className={`pf-focal-beam beam-people ${activeSignal === 'people' ? 'beam-active' : ''}`}
            />
            <line
              x1="270"
              y1="60"
              x2="270"
              y2="195"
              className={`pf-focal-beam beam-context ${activeSignal === 'context' ? 'beam-active' : ''}`}
            />
            <line
              x1="450"
              y1="110"
              x2="270"
              y2="195"
              className={`pf-focal-beam beam-programs ${activeSignal === 'programs' ? 'beam-active' : ''}`}
            />
            <line
              x1="120"
              y1="320"
              x2="270"
              y2="195"
              className={`pf-focal-beam beam-evidence ${activeSignal === 'evidence' ? 'beam-active' : ''}`}
            />
            <line
              x1="420"
              y1="320"
              x2="270"
              y2="195"
              className={`pf-focal-beam beam-decisions ${activeSignal === 'decisions' ? 'beam-active' : ''}`}
            />
          </g>

          {/* ── 4. SYNTHESIS CORE & BETTER JUDGMENT VECTOR ── */}
          <g className="pf-judgment-hub">
            <circle cx="270" cy="195" r="48" className="pf-hub-disc" />
            <circle cx="270" cy="195" r="54" className="pf-hub-ring" />

            <text x="270" y="190" textAnchor="middle" className="pf-hub-title">
              PERSPECTIVE
            </text>
            <text x="270" y="206" textAnchor="middle" className="pf-hub-meta">
              STRUCTURED CLARITY
            </text>

            <line x1="270" y1="249" x2="270" y2="295" className="pf-downward-vector" />
            <polygon points="266,293 274,293 270,301" className="pf-vector-arrowhead" />

            <g className="pf-plaque-group" transform="translate(270, 325)">
              <rect x="-95" y="-16" width="190" height="32" rx="3" className="pf-plaque-container" />
              <text x="0" y="5" textAnchor="middle" className="pf-plaque-caption">
                BETTER JUDGMENT
              </text>
            </g>
          </g>
        </svg>

        {/* ── 5. INTERACTIVE ORGANIZATIONAL SIGNAL NODES ── */}
        <div className="pf-signals-constellation">
          {primarySignals.map((sig) => {
            const isSelected = activeSignal === sig.id;
            return (
              <button
                key={sig.id}
                type="button"
                className={`pf-node-pill pf-node-${sig.id} ${isSelected ? 'is-selected' : ''}`}
                onClick={() => setActiveSignal(isSelected ? null : sig.id)}
                title={`Inspect ${sig.title}: ${sig.sub}`}
                aria-pressed={isSelected}
              >
                <div className="pf-node-status-glow" aria-hidden="true" />
                <span className="pf-node-marker" />
                <div className="pf-node-text-wrap">
                  <div className="pf-node-top">
                    <span className="pf-node-title">{sig.title}</span>
                    <span className="pf-node-tag">{sig.category}</span>
                  </div>
                  <span className="pf-node-sub">{sig.sub}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* ── 6. ACTIVE INSPECTOR DRAWER / CONTEXT CARD ── */}
        {selectedSig && (
          <div className="pf-inspect-drawer" role="region" aria-label="Signal Inspector Details">
            <div className="pf-drawer-inner">
              <div className="pf-drawer-meta">
                <span className="pf-drawer-eyebrow">Active Lens Focus</span>
                <button
                  type="button"
                  className="pf-drawer-close"
                  onClick={() => setActiveSignal(null)}
                  aria-label="Close inspector"
                >
                  ✕
                </button>
              </div>
              <h4 className="pf-drawer-title">
                {selectedSig.title} · {selectedSig.sub}
              </h4>
              <p className="pf-drawer-desc">{selectedSig.description}</p>
              <div className="pf-drawer-footer">
                <span className="pf-drawer-cue">
                  Synthesized through the <strong>Perspective Lens</strong> into defensible decision-making.
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Subtitle Caption */}
      <div className="pf-atmosphere-footer">
        <span className="pf-atmosphere-legend">
          Click any signal node to trace its convergence into the perspective core.
        </span>
      </div>
    </div>
  );
}
