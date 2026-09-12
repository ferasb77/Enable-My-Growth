import React from 'react';

export function TechnologyPhilosophy() {
  const steps = [
    {
      num: '01',
      pillar: 'Pillar I',
      headline: 'Participation Over Administration',
      desc: 'Software must reduce friction for participants and practitioners, not just generate compliance checklists for administrators.',
      platform: 'CapOS™',
    },
    {
      num: '02',
      pillar: 'Pillar II',
      headline: 'Examination Before Certainty',
      desc: 'Complex decisions require deliberate inquiry. Technology should widen the aperture, challenge assumptions, and test conditions.',
      platform: 'AI Thinking Studio™',
    },
    {
      num: '03',
      pillar: 'Pillar III',
      headline: 'Context Before Diagnosis',
      desc: 'Data without operating context distorts human reality. Assessment evidence must be interpreted alongside situational pressures.',
      platform: 'Contextual™',
    },
    {
      num: '04',
      pillar: 'Pillar IV',
      headline: 'Deterministic Over Probabilistic',
      desc: 'In safety-critical and high-consequence domains, assumptions must be mathematically validated against declared physical limits.',
      platform: 'Phys-Valid™',
    },
  ];

  return (
    <section id="philosophy" className="tech-section" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div className="tech-section-header">
          <p className="eyebrow mb-xs">Intellectual Foundation</p>
          <h2 className="tech-section-h2">One philosophy. Different systems.</h2>
          <p className="tech-section-sub">
            Every platform in our ecosystem is built on a shared commitment to human judgment, empirical
            evidence, and disciplined inquiry.
          </p>
        </div>

        <div className="philosophy-pipeline-wrapper">
          <div className="pipeline-steps-grid">
            {steps.map((st) => (
              <div key={st.num} className="pipeline-card spotlight-card">
                <div className="pipeline-num">{st.num}</div>
                <div className="pipeline-pillar">{st.pillar}</div>
                <h3 className="pipeline-headline">{st.headline}</h3>
                <p className="pipeline-desc">{st.desc}</p>
                <div className="pipeline-platform-pill">
                  Exemplified in: <strong>{st.platform}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
