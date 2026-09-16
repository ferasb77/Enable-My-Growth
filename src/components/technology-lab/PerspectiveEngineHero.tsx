"use client";
import React, { useState, useEffect } from "react";
import "./perspective-engine.css";

interface SignalInput {
  id: string;
  label: string;
  sub: string;
  posClass: string;
}

const SIGNALS: SignalInput[] = [
  { id: "context", label: "Context", sub: "Operating Reality", posClass: "pel-node-context" },
  { id: "people", label: "People", sub: "Agency & Participation", posClass: "pel-node-people" },
  { id: "programs", label: "Programs", sub: "Delivery Structure", posClass: "pel-node-programs" },
  { id: "evidence", label: "Evidence", sub: "Verifiable Telemetry", posClass: "pel-node-evidence" },
  { id: "decisions", label: "Decisions", sub: "Defensible Action", posClass: "pel-node-decisions" },
];

export function PerspectiveEngineHero() {
  const [activeSignal, setActiveSignal] = useState<string | null>(null);
  const [cycleIndex, setCycleIndex] = useState(0);
  const [isReplaying, setIsReplaying] = useState(false);

  useEffect(() => {
    if (activeSignal) return;
    const interval = setInterval(() => {
      setCycleIndex((prev) => (prev + 1) % SIGNALS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeSignal]);

  const handleReplay = () => {
    setIsReplaying(true);
    setActiveSignal(null);
    setCycleIndex(0);
    setTimeout(() => setIsReplaying(false), 1200);
  };

  const highlightedSignal = activeSignal || SIGNALS[cycleIndex].id;

  return (
    <section className="pel-hero" aria-label="Perspective Engine Prototype Hero">
      <div className="pel-ambient-grid" aria-hidden="true" />
      <div className="pel-spectral-bloom" aria-hidden="true" />

      <div className="pel-container">
        <header className="pel-crest">
          <div className="pel-badge">
            <span className="pel-badge-dot" />
            <span className="pel-badge-text">Enable My Growth Technology · Lab Prototype</span>
          </div>

          <h1 className="pel-headline">
            Technology designed around <em>better human judgment.</em>
          </h1>

          <p className="pel-subhead">
            We build technology that connects participation, evidence, context, and intelligence—helping
            organizations see more clearly and act with greater confidence.
          </p>
        </header>

        <div className="pel-stage" role="region" aria-label="Perspective Synthesis Engine">
          <svg
            className="pel-instrument-svg"
            viewBox="0 0 960 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="pelCoreAura" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.35" />
                <stop offset="40%" stopColor="#C9A96E" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#050507" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="pelLensAura" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#1AAA28" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#0D0D14" stopOpacity="0.4" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </radialGradient>
            </defs>

            <g opacity="0.2">
              <line x1="480" y1="40" x2="480" y2="540" stroke="#C9A96E" strokeWidth="0.8" strokeDasharray="4 8" />
              <line x1="160" y1="290" x2="800" y2="290" stroke="#C9A96E" strokeWidth="0.8" strokeDasharray="4 8" />
              <circle cx="480" cy="290" r="260" stroke="rgba(255,255,255,0.06)" strokeWidth="0.75" />
            </g>

            <circle cx="480" cy="290" r="220" fill="url(#pelCoreAura)" />

            <g className="pel-orbit-ring pel-ring-outer">
              <circle cx="480" cy="290" r="230" stroke="rgba(201, 169, 110, 0.2)" strokeWidth="1" strokeDasharray="3 9" />
              <circle cx="480" cy="290" r="240" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.5" />
              <line x1="480" y1="50" x2="480" y2="60" stroke="#C9A96E" strokeWidth="1.5" />
              <line x1="480" y1="520" x2="480" y2="530" stroke="#C9A96E" strokeWidth="1.5" />
              <line x1="240" y1="290" x2="250" y2="290" stroke="#C9A96E" strokeWidth="1.5" />
              <line x1="710" y1="290" x2="720" y2="290" stroke="#C9A96E" strokeWidth="1.5" />
            </g>
            <g className="pel-orbit-ring pel-ring-mid">
              <circle cx="480" cy="290" r="170" stroke="rgba(201, 169, 110, 0.35)" strokeWidth="1" strokeDasharray="6 6" />
              <circle cx="480" cy="290" r="155" stroke="rgba(255, 255, 255, 0.07)" strokeWidth="0.75" />
            </g>
            <g className="pel-orbit-ring pel-ring-inner">
              <circle cx="480" cy="290" r="115" stroke="rgba(201, 169, 110, 0.45)" strokeWidth="1.2" />
              <circle cx="480" cy="290" r="95" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="0.75" strokeDasharray="2 4" />
            </g>

            <g className="pel-convergence-group">
              <line x1="480" y1="100" x2="480" y2="290" stroke="#C9A96E" strokeWidth={highlightedSignal === "context" ? 2 : 1} strokeOpacity={highlightedSignal === "context" ? 0.9 : 0.25} className="pel-tracer" />
              <line x1="210" y1="190" x2="480" y2="290" stroke="#C9A96E" strokeWidth={highlightedSignal === "people" ? 2 : 1} strokeOpacity={highlightedSignal === "people" ? 0.9 : 0.25} className="pel-tracer" />
              <line x1="750" y1="190" x2="480" y2="290" stroke="#C9A96E" strokeWidth={highlightedSignal === "programs" ? 2 : 1} strokeOpacity={highlightedSignal === "programs" ? 0.9 : 0.25} className="pel-tracer" />
              <line x1="240" y1="400" x2="480" y2="290" stroke="#C9A96E" strokeWidth={highlightedSignal === "evidence" ? 2 : 1} strokeOpacity={highlightedSignal === "evidence" ? 0.9 : 0.25} className="pel-tracer" />
              <line x1="720" y1="400" x2="480" y2="290" stroke="#C9A96E" strokeWidth={highlightedSignal === "decisions" ? 2 : 1} strokeOpacity={highlightedSignal === "decisions" ? 0.9 : 0.25} className="pel-tracer" />
            </g>

            <g className="pel-core-ring">
              <circle cx="480" cy="290" r="75" fill="url(#pelLensAura)" stroke="#C9A96E" strokeWidth="1.5" />
              <circle cx="480" cy="290" r="82" stroke="rgba(201, 169, 110, 0.4)" strokeWidth="1" strokeDasharray="3 5" />
            </g>

            <g>
              <line x1="480" y1="360" x2="480" y2="500" stroke="#C9A96E" strokeWidth="1.8" />
              <polygon points="474,498 486,498 480,510" fill="#C9A96E" />
            </g>
          </svg>

          <div className="pel-center-hub" aria-hidden="true">
            <span className="pel-center-hub-title">PERSPECTIVE</span>
            <span className="pel-center-hub-subtitle">SYNTHESIS ENGINE</span>
            <span className="pel-center-hub-status">CONVERGENCE ACTIVE</span>
          </div>

          {SIGNALS.map((s) => {
            const isHighlighted = highlightedSignal === s.id;
            return (
              <div
                key={s.id}
                className={"pel-portal-node " + s.posClass + (isHighlighted ? " active" : "")}
                onMouseEnter={() => setActiveSignal(s.id)}
                onMouseLeave={() => setActiveSignal(null)}
                tabIndex={0}
                role="button"
                aria-label={s.label + " signal input: " + s.sub}
                onFocus={() => setActiveSignal(s.id)}
                onBlur={() => setActiveSignal(null)}
              >
                <div className="pel-chip">
                  <span className="pel-chip-indicator" />
                  <span className="pel-chip-title">{s.label}</span>
                </div>
                <span className="pel-chip-desc">{s.sub}</span>
              </div>
            );
          })}

          <div className="pel-judgment-anchor">
            <div className="pel-judgment-plaque" role="status">
              <span className="pel-chip-indicator" />
              <span className="pel-judgment-text">BETTER JUDGMENT</span>
            </div>
            <span className="pel-judgment-sub">DEFENSIBLE ORGANIZATIONAL ACTION</span>
          </div>
        </div>

        <div className="pel-action-tier">
          <a href="#explore-engine" className="pel-btn pel-btn-gold">
            Explore Perspective Engine <span>&darr;</span>
          </a>
          <a href="contact.html?enquiry=Perspective+Engine+Briefing" className="pel-btn pel-btn-outline">
            Request Technical Briefing <span>&rarr;</span>
          </a>
        </div>

        <div className="pel-controller">
          <button
            type="button"
            className="pel-replay-btn"
            onClick={handleReplay}
            disabled={isReplaying}
            aria-label="Replay Perspective Engine synthesis calibration"
          >
            <span style={{ display: "inline-block", transform: isReplaying ? "rotate(360deg)" : "none", transition: "transform 0.8s ease" }}>
              &#8634;
            </span>{" "}
            Re-Calibrate Engine
          </button>
        </div>
      </div>
    </section>
  );
}
