import React from 'react';

const caposSteps = [
  {
    step: 1,
    num: 'Pillar 01',
    title: 'People & Participation across programs and experiences',
    text: 'Coordinates participants, facilitators, leadership sponsors, and cohorts in a shared, transparent environment. Reflects verifiable session attendance and engagement without administrative overhead.',
    metrics: [
      { val: 'Verifiable', lbl: 'Participation Records' },
      { val: 'Direct', lbl: 'Facilitator Coordination' },
    ],
  },
  {
    step: 2,
    num: 'Pillar 02',
    title: 'Structured Evidence captured directly in context',
    text: 'Action deliverables, participant artifacts, and completed assessments are organized as concrete proof of work rather than buried in static spreadsheets. Captures only what was actually produced.',
    metrics: [
      { val: 'Artifacts', lbl: 'Work-Product Proof' },
      { val: 'Grounded', lbl: 'No Speculative Claims' },
    ],
  },
  {
    step: 3,
    num: 'Pillar 03',
    title: 'Follow-Through & application where captured',
    text: 'Tracks post-session checkpoints, milestone submissions, and supervisory check-ins where established. Documents execution progress without inventing causality or unverified behavior change.',
    metrics: [
      { val: 'Documented', lbl: 'Milestone Progress' },
      { val: 'Traceable', lbl: 'Check-In History' },
    ],
  },
  {
    step: 4,
    num: 'Pillar 04',
    title: 'Portfolio Visibility & institutional memory',
    text: 'Aggregates structured program evidence into operational intelligence dashboards. Provides leadership with clear portfolio visibility based strictly on verified records and documented follow-through.',
    metrics: [
      { val: 'Portfolio', lbl: 'Executive Visibility' },
      { val: 'Institutional', lbl: 'Structured Memory' },
    ],
  },
];

export function CapOSShowcase() {
  return (
    <section id="capos-showcase" className="tech-section capos-deep-dive-section">
      <div className="container">
        <div className="tech-section-header">
          <p className="eyebrow mb-xs" style={{ color: 'var(--gold)' }}>
            Operating Infrastructure
          </p>
          <h2 className="tech-section-h2">CapOS™: Connecting people, evidence, and intelligence.</h2>
          <p className="tech-section-sub">
            CapOS provides a shared operating foundation—connecting participants, structured evidence,
            and institutional memory across three distinct environments.
          </p>
        </div>

        {/* 3 Distinct Operating Environments Overview */}
        <div className="capos-environments-band">
          <div className="capos-env-entry">
            <div className="capos-env-meta">
              <span className="capos-env-num">Context 01</span>
              <span className="capos-env-role">Facilitated Cohorts</span>
            </div>
            <h3 className="capos-env-title">Provider</h3>
            <p className="capos-env-desc">
              Supports facilitated programs, advisory practices, and client cohort delivery.
            </p>
          </div>

          <div className="capos-env-entry">
            <div className="capos-env-meta">
              <span className="capos-env-num">Context 02</span>
              <span className="capos-env-role">Internal Academies</span>
            </div>
            <h3 className="capos-env-title">Enterprise</h3>
            <p className="capos-env-desc">
              Supports internal academies, leadership programs, and capability initiatives.
            </p>
          </div>

          <div className="capos-env-entry">
            <div className="capos-env-meta">
              <span className="capos-env-num">Context 03</span>
              <span className="capos-env-role">Structured Journeys</span>
            </div>
            <h3 className="capos-env-title">Events</h3>
            <p className="capos-env-desc">
              Supports live participant journeys, real-time coordination, and structured evidence capture.
            </p>
          </div>
        </div>

        {/* Central Connector */}
        <div className="capos-environments-connector">
          <span className="capos-connector-rule" />
          <span className="capos-connector-text">Three operating contexts · one shared core</span>
          <span className="capos-connector-rule" />
        </div>

        {/* Shared CapOS Core Flow */}
        <div className="capos-interactive-wrapper spotlight-card" id="capos-flow-container">
          <div className="capos-flow-header">
            <div className="capos-flow-badge">
              <span className="tech-dot-pulse" />
              <span>Shared CapOS Core Pipeline</span>
            </div>
            {/* Step Indicators */}
            <div className="capos-step-indicators" role="tablist" aria-label="Capability flow steps">
              <button type="button" className="capos-step-btn active" data-capos-step="1">01 People &amp; Participation</button>
              <button type="button" className="capos-step-btn" data-capos-step="2">02 Structured Evidence</button>
              <button type="button" className="capos-step-btn" data-capos-step="3">03 Follow-Through</button>
              <button type="button" className="capos-step-btn" data-capos-step="4">04 Intelligence &amp; Memory</button>
            </div>
          </div>

          {/* Mobile Vertical Stepper */}
          <div className="capos-mobile-stepper" aria-label="Mobile pipeline steps">
            <button type="button" className="capos-mobile-step-item active" data-capos-step="1">
              <span className="capos-mobile-step-num">01</span>
              <span className="capos-mobile-step-title">People &amp; Participation</span>
            </button>
            <button type="button" className="capos-mobile-step-item" data-capos-step="2">
              <span className="capos-mobile-step-num">02</span>
              <span className="capos-mobile-step-title">Structured Evidence</span>
            </button>
            <button type="button" className="capos-mobile-step-item" data-capos-step="3">
              <span className="capos-mobile-step-num">03</span>
              <span className="capos-mobile-step-title">Follow-Through</span>
            </button>
            <button type="button" className="capos-mobile-step-item" data-capos-step="4">
              <span className="capos-mobile-step-num">04</span>
              <span className="capos-mobile-step-title">Intelligence &amp; Institutional Memory</span>
            </button>
          </div>

          {/* Dynamic SVG Graphic */}
          <div className="capos-pipeline-graphic">
            <svg className="capos-svg" viewBox="0 0 880 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="80" y1="90" x2="800" y2="90" stroke="var(--tech-border-light)" strokeWidth="2" />
              <line className="capos-progress-line" id="capos-line-fill" x1="80" y1="90" x2="100" stroke="var(--tech-gold)" strokeWidth="2.5" />

              <g className="cap-flow-node-g active" id="cap-node-1" transform="translate(100, 90)">
                <circle cx="0" cy="0" r="28" fill="var(--tech-surface-raised)" stroke="var(--tech-gold)" strokeWidth="2" />
                <circle cx="0" cy="0" r="34" fill="none" stroke="rgba(201, 169, 110, 0.3)" strokeWidth="1" strokeDasharray="3 3" />
                <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontFamily="'JetBrains Mono', monospace" fontSize="11" fontWeight="600">01</text>
                <text x="0" y="-42" textAnchor="middle" fill="#FFFFFF" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="15" fontWeight="600">People</text>
                <text x="0" y="48" textAnchor="middle" fill="var(--tech-text-muted)" fontFamily="'JetBrains Mono', monospace" fontSize="8.5">Participation Records</text>
              </g>

              <g className="cap-flow-node-g" id="cap-node-2" transform="translate(320, 90)">
                <circle cx="0" cy="0" r="24" fill="var(--tech-surface)" stroke="var(--tech-border-light)" strokeWidth="1.5" />
                <text x="0" y="4" textAnchor="middle" fill="var(--tech-text-muted)" fontFamily="'JetBrains Mono', monospace" fontSize="11" fontWeight="500">02</text>
                <text x="0" y="-38" textAnchor="middle" fill="var(--tech-text)" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="15">Evidence</text>
                <text x="0" y="46" textAnchor="middle" fill="var(--tech-text-muted)" fontFamily="'JetBrains Mono', monospace" fontSize="8.5">Work-Product Proof</text>
              </g>

              <g className="cap-flow-node-g" id="cap-node-3" transform="translate(560, 90)">
                <circle cx="0" cy="0" r="24" fill="var(--tech-surface)" stroke="var(--tech-border-light)" strokeWidth="1.5" />
                <text x="0" y="4" textAnchor="middle" fill="var(--tech-text-muted)" fontFamily="'JetBrains Mono', monospace" fontSize="11" fontWeight="500">03</text>
                <text x="0" y="-38" textAnchor="middle" fill="var(--tech-text)" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="15">Follow-Through</text>
                <text x="0" y="46" textAnchor="middle" fill="var(--tech-text-muted)" fontFamily="'JetBrains Mono', monospace" fontSize="8.5">Milestone Checkpoints</text>
              </g>

              <g className="cap-flow-node-g" id="cap-node-4" transform="translate(780, 90)">
                <circle cx="0" cy="0" r="24" fill="var(--tech-surface)" stroke="var(--tech-border-light)" strokeWidth="1.5" />
                <text x="0" y="4" textAnchor="middle" fill="var(--tech-text-muted)" fontFamily="'JetBrains Mono', monospace" fontSize="11" fontWeight="500">04</text>
                <text x="0" y="-38" textAnchor="middle" fill="var(--tech-text)" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="15">Intelligence</text>
                <text x="0" y="46" textAnchor="middle" fill="var(--tech-gold)" fontFamily="'JetBrains Mono', monospace" fontSize="8.5">Institutional Memory</text>
              </g>
            </svg>
          </div>

          {/* Step Panels */}
          <div className="capos-panels-container">
            {caposSteps.map((s) => (
              <div
                key={s.step}
                className={`capos-step-card-active ${s.step === 1 ? 'active' : ''}`}
                id={`capos-panel-${s.step}`}
                data-capos-panel={s.step}
                style={{ display: s.step === 1 ? 'grid' : 'none' }}
              >
                <div className="step-card-col">
                  <span className="step-card-num">{s.num}</span>
                  <h4 className="step-card-title">{s.title}</h4>
                  <p className="step-card-text">{s.text}</p>
                </div>
                <div className="step-card-outcomes">
                  {s.metrics.map((m, idx) => (
                    <div key={idx} className="capos-metric-badge">
                      <span className="capos-metric-val">{m.val}</span>
                      <span className="capos-metric-lbl">{m.lbl}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
