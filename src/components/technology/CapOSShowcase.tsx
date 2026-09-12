'use client';

import React, { useState } from 'react';

const caposSteps = {
  1: {
    num: 'Pillar 01',
    title: 'Experience & Participation across the organizational lifecycle',
    text: 'Rather than treating sessions or programs as isolated events, CapOS coordinates participants, facilitators, leadership sponsors, and cohorts in a shared, transparent environment with real-time operational visibility across Provider, Enterprise, and Event environments.',
    lineX2: 100,
    metrics: [
      { val: '3 Environments', lbl: 'Provider · Enterprise · Events' },
      { val: '100%', lbl: 'Session Traceability' },
    ],
  },
  2: {
    num: 'Pillar 02',
    title: 'Verifiable Evidence collected continuously in practice',
    text: 'Action projects, capability artifacts, feedback loops, and observed behavioral shifts are captured continuously as structured proof rather than buried in static evaluation spreadsheets.',
    lineX2: 320,
    metrics: [
      { val: 'Artifact-Led', lbl: 'Authentic Work Evidence' },
      { val: 'Zero', lbl: 'LMS Generic Friction' },
    ],
  },
  3: {
    num: 'Pillar 03',
    title: 'Accountable Follow-Through & behavioral compounding',
    text: 'Capability fails when program momentum evaporates. CapOS institutionalizes structured peer coaching check-ins, application milestones, and supervisor alignment cadences over 6–18 months.',
    lineX2: 560,
    metrics: [
      { val: '6-18 Mo', lbl: 'Longitudinal Compounding' },
      { val: 'Human-Led', lbl: 'Supervisory Alignment' },
    ],
  },
  4: {
    num: 'Pillar 04',
    title: 'Strategic Intelligence & institutional memory',
    text: 'Synthesizes enterprise-wide capability signals into actionable executive dashboards. Leaders see where capability is compounding, where friction persists, and how capability investments translate into real performance.',
    lineX2: 780,
    metrics: [
      { val: 'Continuous', lbl: 'Capability Telemetry' },
      { val: 'Executive', lbl: 'Strategic Memory' },
    ],
  },
};

export function CapOSShowcase() {
  const [activeStep, setActiveStep] = useState<1 | 2 | 3 | 4>(1);
  const current = caposSteps[activeStep];

  return (
    <section id="capos-showcase" className="tech-section capos-deep-dive-section">
      <div className="container">
        <div className="tech-section-header">
          <p className="eyebrow mb-xs" style={{ color: 'var(--gold)' }}>
            Capability Operating Infrastructure
          </p>
          <h2 className="tech-section-h2">CapOS™: Connecting programs, evidence, and intelligence.</h2>
          <p className="tech-section-sub">
            CapOS connects what happens across programs and experiences—participation, evidence,
            follow-through, and intelligence—into one coherent operating layer. Serving capability
            providers, enterprise academies, and high-impact events from a shared foundation.
          </p>
        </div>

        <div className="capos-interactive-wrapper spotlight-card" id="capos-flow-container">
          <div className="capos-flow-header">
            <div className="capos-flow-badge">
              <span className="tech-dot-pulse" />
              <span>Shared CapOS Capability Pipeline</span>
            </div>
            <div className="capos-step-indicators" aria-label="Capability flow steps">
              {([1, 2, 3, 4] as const).map((step) => (
                <button
                  key={step}
                  type="button"
                  className={'capos-step-btn' + (activeStep === step ? ' active' : '')}
                  onClick={() => setActiveStep(step)}
                >
                  {step === 1 && '01 Participation'}
                  {step === 2 && '02 Evidence'}
                  {step === 3 && '03 Follow-Through'}
                  {step === 4 && '04 Intelligence'}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic SVG Pipeline Graphic */}
          <div className="capos-pipeline-graphic">
            <svg className="capos-svg" viewBox="0 0 880 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Connecting Backplane Track */}
              <line x1="80" y1="90" x2="800" y2="90" stroke="var(--tech-border-light)" strokeWidth="2" />
              <line
                className="capos-progress-line"
                id="capos-line-fill"
                x1="80"
                y1="90"
                x2={current.lineX2}
                stroke="var(--tech-gold)"
                strokeWidth="2.5"
              />

              {/* Pipeline Node 1 */}
              <g
                className={'cap-flow-node-g' + (activeStep === 1 ? ' active' : '')}
                transform="translate(100, 90)"
                onClick={() => setActiveStep(1)}
              >
                <circle cx="0" cy="0" r="28" fill="var(--tech-surface-raised)" stroke={activeStep === 1 ? 'var(--tech-gold)' : 'var(--tech-border-light)'} strokeWidth="2" />
                <circle cx="0" cy="0" r="34" fill="none" stroke="rgba(201, 169, 110, 0.3)" strokeWidth="1" strokeDasharray="3 3" />
                <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontFamily="'JetBrains Mono', monospace" fontSize="11" fontWeight="600">01</text>
                <text x="0" y="-42" textAnchor="middle" fill="#FFFFFF" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="15" fontWeight="600">Participation</text>
                <text x="0" y="48" textAnchor="middle" fill="var(--tech-text-muted)" fontFamily="'JetBrains Mono', monospace" fontSize="8.5">Cohort Engagement</text>
              </g>

              {/* Pipeline Node 2 */}
              <g
                className={'cap-flow-node-g' + (activeStep === 2 ? ' active' : '')}
                transform="translate(320, 90)"
                onClick={() => setActiveStep(2)}
              >
                <circle cx="0" cy="0" r="24" fill="var(--tech-surface)" stroke={activeStep === 2 ? 'var(--tech-gold)' : 'var(--tech-border-light)'} strokeWidth="1.5" />
                <text x="0" y="4" textAnchor="middle" fill={activeStep === 2 ? '#fff' : 'var(--tech-text-muted)'} fontFamily="'JetBrains Mono', monospace" fontSize="11" fontWeight="500">02</text>
                <text x="0" y="-38" textAnchor="middle" fill="var(--tech-text)" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="15">Evidence</text>
                <text x="0" y="46" textAnchor="middle" fill="var(--tech-text-muted)" fontFamily="'JetBrains Mono', monospace" fontSize="8.5">Artifacts & Work</text>
              </g>

              {/* Pipeline Node 3 */}
              <g
                className={'cap-flow-node-g' + (activeStep === 3 ? ' active' : '')}
                transform="translate(560, 90)"
                onClick={() => setActiveStep(3)}
              >
                <circle cx="0" cy="0" r="24" fill="var(--tech-surface)" stroke={activeStep === 3 ? 'var(--tech-gold)' : 'var(--tech-border-light)'} strokeWidth="1.5" />
                <text x="0" y="4" textAnchor="middle" fill={activeStep === 3 ? '#fff' : 'var(--tech-text-muted)'} fontFamily="'JetBrains Mono', monospace" fontSize="11" fontWeight="500">03</text>
                <text x="0" y="-38" textAnchor="middle" fill="var(--tech-text)" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="15">Follow-Through</text>
                <text x="0" y="46" textAnchor="middle" fill="var(--tech-text-muted)" fontFamily="'JetBrains Mono', monospace" fontSize="8.5">Accountable Practice</text>
              </g>

              {/* Pipeline Node 4 */}
              <g
                className={'cap-flow-node-g' + (activeStep === 4 ? ' active' : '')}
                transform="translate(780, 90)"
                onClick={() => setActiveStep(4)}
              >
                <circle cx="0" cy="0" r="24" fill="var(--tech-surface)" stroke={activeStep === 4 ? 'var(--tech-gold)' : 'var(--tech-border-light)'} strokeWidth="1.5" />
                <text x="0" y="4" textAnchor="middle" fill={activeStep === 4 ? '#fff' : 'var(--tech-text-muted)'} fontFamily="'JetBrains Mono', monospace" fontSize="11" fontWeight="500">04</text>
                <text x="0" y="-38" textAnchor="middle" fill="var(--tech-text)" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="15">Intelligence</text>
                <text x="0" y="46" textAnchor="middle" fill="var(--tech-gold)" fontFamily="'JetBrains Mono', monospace" fontSize="8.5">Institutional Memory</text>
              </g>
            </svg>
          </div>

          {/* Active Step Explanation Box */}
          <div className="capos-step-card-active" id="capos-active-desc">
            <div className="step-card-col">
              <span className="step-card-num" id="capos-desc-num">{current.num}</span>
              <h4 className="step-card-title" id="capos-desc-title">{current.title}</h4>
              <p className="step-card-text" id="capos-desc-text">{current.text}</p>
            </div>
            <div className="step-card-outcomes">
              {current.metrics.map((m, idx) => (
                <div key={idx} className="capos-metric-badge">
                  <span className="capos-metric-val">{m.val}</span>
                  <span className="capos-metric-lbl">{m.lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
