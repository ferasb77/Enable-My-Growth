'use client';

import React from 'react';

const progression = [
  { num: '01', state: 'Isolated', label: 'Fragmented Inputs' },
  { num: '02', state: 'Connected', label: 'Structural Context' },
  { num: '03', state: 'Interpreted', label: 'Critical Inquiry' },
  { num: '04', state: 'Actionable', label: 'Defensible Judgment' },
];

export function PerspectiveStepper() {
  return (
    <section id="perspective-journey" className="tech-section perspective-transition-section">
      <div className="container">
        <div className="perspective-transition-frame">
          <div className="perspective-transition-header">
            <p className="eyebrow mb-xs" style={{ color: 'var(--gold)', letterSpacing: '0.22em' }}>
              Core Creative Metaphor
            </p>
            <h2 className="perspective-transition-h2">Perspective changes what becomes possible.</h2>
            <p className="perspective-transition-sub">
              In consequential decisions, raw information is almost never enough. Real clarity occurs when
              isolated data points, operating context, and human judgment are brought into structured,
              auditable relationships.
            </p>
          </div>

          <div className="perspective-rail" aria-label="Perspective progression sequence">
            {progression.map((item, idx) => (
              <React.Fragment key={item.state}>
                <div className="perspective-rail-node">
                  <span className="rail-node-num">{item.num}</span>
                  <div className="rail-node-content">
                    <span className="rail-node-state">{item.state}</span>
                    <span className="rail-node-label">{item.label}</span>
                  </div>
                </div>
                {idx < progression.length - 1 && (
                  <div className="perspective-rail-connector" aria-hidden="true">
                    <span className="rail-arrow">→</span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

