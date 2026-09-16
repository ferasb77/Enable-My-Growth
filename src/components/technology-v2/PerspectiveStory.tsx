import React from 'react';

const progression = [
  {
    num: '01',
    state: 'Isolated',
    label: 'Fragmented Inputs',
    desc: 'People, evidence, programs, and context operate in separate silos without shared connective tissue.',
  },
  {
    num: '02',
    state: 'Connected',
    label: 'Structural Context',
    desc: 'Operational architecture and delivery environments link participants directly to verified work artifacts.',
  },
  {
    num: '03',
    state: 'Interpreted',
    label: 'Critical Inquiry',
    desc: 'Disciplined inquiry and situational framing deconstruct assumptions before commitments harden.',
  },
  {
    num: '04',
    state: 'Actionable',
    label: 'Defensible Judgment',
    desc: 'Empirical telemetry and institutional memory converge to support sound, defensible organizational decisions.',
  },
];

export function PerspectiveStory() {
  return (
    <section id="tv2-perspective" className="tv2-section tv2-bridge" aria-label="Perspective Progression">
      <div className="tv2-container">
        <div className="tv2-header-block centered">
          <p className="tv2-eyebrow">
            <span className="tv2-eyebrow-dot" /> The Creative Metaphor
          </p>
          <h2 className="tv2-heading-xl">Perspective changes what becomes possible.</h2>
          <p className="tv2-lead">
            In consequential decisions, raw information is rarely the bottleneck. Real clarity emerges when
            isolated signals, operating context, and human judgment are brought into structured, auditable relationships.
          </p>
        </div>

        <div className="tv2-bridge-flow" role="list">
          {progression.map((item) => (
            <div key={item.num} className="tv2-bridge-step" role="listitem">
              <span className="tv2-bridge-num">{item.num}</span>
              <h3 className="tv2-bridge-state">{item.state}</h3>
              <span className="tv2-bridge-label">{item.label}</span>
              <p className="tv2-bridge-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
