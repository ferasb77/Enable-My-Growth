import React from 'react';

const principles = [
  {
    num: '01',
    title: 'Participation Over Administration',
    desc: 'Software must reduce friction for participants and practitioners, not just generate compliance checklists for administrators.',
    system: 'CapOS™',
  },
  {
    num: '02',
    title: 'Examination Before Certainty',
    desc: 'Complex decisions require deliberate inquiry. Technology should widen the aperture, challenge assumptions, and test conditions.',
    system: 'AI Thinking Studio™',
  },
  {
    num: '03',
    title: 'Context Before Diagnosis',
    desc: 'Data without operating context distorts human reality. Assessment evidence must be interpreted alongside situational pressures.',
    system: 'Contextual™',
  },
  {
    num: '04',
    title: 'Deterministic Over Probabilistic',
    desc: 'In safety-critical and high-consequence domains, assumptions must be mathematically validated against declared physical limits.',
    system: 'Phys-Valid™',
  },
];

export function TechnologyPrinciples() {
  return (
    <section id="tv2-philosophy" className="tv2-section" aria-label="Technology Philosophy & Principles">
      <div className="tv2-container">
        <div className="tv2-header-block centered">
          <p className="tv2-eyebrow">
            <span className="tv2-eyebrow-dot" /> Intellectual Foundation
          </p>
          <h2 className="tv2-heading-xl">One philosophy. Four distinct principles.</h2>
          <p className="tv2-lead">
            Every platform in our ecosystem is anchored in an uncompromising commitment to human judgment,
            empirical evidence, and disciplined inquiry.
          </p>
        </div>

        <div className="tv2-principles-grid">
          {principles.map((p) => (
            <div key={p.num} className="tv2-principle-col">
              <span className="tv2-principle-num">{p.num}</span>
              <h3 className="tv2-principle-title">{p.title}</h3>
              <p className="tv2-principle-desc">{p.desc}</p>
              <span className="tv2-principle-system">Embodied in {p.system}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
