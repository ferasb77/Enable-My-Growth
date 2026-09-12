'use client';

import React, { useState } from 'react';

const stages = [
  {
    step: 1,
    stage: 'Stage A',
    state: 'Isolated',
    title: 'Isolated Information',
    desc: 'Data points, evaluation scores, and feedback exist in silos. Without contextual relationships, information fragments attention and conceals root causes.',
    meta: 'Data alone is fragmented',
    visual: (
      <div className="p-stage-visual visual-isolated">
        <div className="mini-node">People</div>
        <div className="mini-node">Programs</div>
        <div className="mini-node">Evidence</div>
        <div className="mini-node">Decisions</div>
      </div>
    ),
  },
  {
    step: 2,
    stage: 'Stage B',
    state: 'Connected',
    title: 'Connected Through Structure',
    desc: 'When people, program delivery, and longitudinal evidence are actively linked, patterns appear that no isolated metric could reveal.',
    meta: 'Connection creates structure',
    visual: (
      <div className="p-stage-visual visual-connected">
        <span className="mini-conn-link">People ↔ Programs</span>
        <span className="mini-conn-link">Evidence ↔ Context</span>
      </div>
    ),
  },
  {
    step: 3,
    stage: 'Stage C',
    state: 'Interpreted',
    title: 'Structured Interpretation',
    desc: 'Disciplined examination separates declared assumptions from verified conditions, transforming ambiguous signals into coherent perspectives.',
    meta: 'Perspective creates insight',
    visual: (
      <div className="p-stage-visual visual-interpreted">
        <span className="mini-signal">Patterns</span>
        <span className="mini-arrow">→</span>
        <span className="mini-signal">Signals</span>
        <span className="mini-arrow">→</span>
        <span className="mini-signal gold">Perspective</span>
      </div>
    ),
  },
  {
    step: 4,
    stage: 'Stage D',
    state: 'Actionable',
    title: 'Defensible Action',
    desc: 'Leaders and practitioners act with verified confidence. Decisions are traceable, human accountability is preserved, and capability compounds over time.',
    meta: 'Confidence enables execution',
    visual: (
      <div className="p-stage-visual visual-action">
        <span className="mini-badge-outcome">Better Judgment</span>
        <span className="mini-badge-outcome">Better Outcomes</span>
      </div>
    ),
  },
];

export function PerspectiveStepper() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="perspective-journey" className="tech-section perspective-journey-section">
      <div className="container">
        <div className="tech-section-header">
          <p className="eyebrow mb-xs">Core Creative Metaphor</p>
          <h2 className="tech-section-h2">Perspective changes what becomes possible.</h2>
          <p className="tech-section-sub">
            In consequential decisions, raw information is almost never enough. Real clarity occurs when
            isolated data points are placed into structured relationships.
          </p>
        </div>

        <div className="perspective-stepper-wrapper" id="perspective-stepper">
          <div className="stepper-progress-track" aria-hidden="true">
            <div
              className="stepper-progress-fill"
              id="stepper-fill-bar"
              style={{ width: `${(activeStep / stages.length) * 100}%` }}
            />
          </div>

          <div className="stepper-stages-grid">
            {stages.map((st) => (
              <div
                key={st.step}
                className={'perspective-stage-card spotlight-card' + (st.step <= activeStep ? ' active' : '')}
                data-step={st.step}
                onClick={() => setActiveStep(st.step)}
                style={{ cursor: 'pointer' }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveStep(st.step);
                  }
                }}
              >
                <div className="p-stage-header">
                  <span className="p-stage-index">{st.stage}</span>
                  <span className="p-stage-state">{st.state}</span>
                </div>
                <h3 className="p-stage-title">{st.title}</h3>
                <p className="p-stage-desc">{st.desc}</p>
                {st.visual}
                <div className="p-stage-meta">{st.meta}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
