import React from 'react';

export function TechnologyMatrix() {
  const rows = [
    {
      product: 'CapOS™',
      problem: 'Fragmented capability delivery & lost follow-through',
      primaryUser: 'Capability Providers, Enterprise Academies, Program Leads',
      decisionOutcome: 'Coordinated execution, verifiable participant evidence, compounding institutional memory',
      status: 'Active Multi-Environment',
    },
    {
      product: 'AI Thinking Studio™',
      problem: 'Premature consensus & unexamined strategic assumptions',
      primaryUser: 'Senior Executives, Strategy Teams, Facilitators',
      decisionOutcome: 'Disciplined deliberation, structured reasoning tree, defensible decision rationale',
      status: 'Available · Pilot',
    },
    {
      product: 'Contextual™',
      problem: 'Uncontextualized psychometric reports & rote debriefs',
      primaryUser: 'Certified Leadership Assessors & Coaches',
      decisionOutcome: 'Nuanced debrief posture informed by real role demands and situational pressures',
      status: 'Available · Approved Access',
    },
    {
      product: 'Phys-Valid™',
      problem: 'Unverified assumptions entering high-risk operational models',
      primaryUser: 'Integrity Engineers & Operational Risk Teams',
      decisionOutcome: 'Deterministic mathematical constraint evaluation, admissibility gates, audit log',
      status: 'Active Pilot',
    },
  ];

  return (
    <section id="matrix" className="tech-section">
      <div className="container">
        <div className="tech-section-header">
          <p className="eyebrow mb-xs">Decision Environment Matrix</p>
          <h2 className="tech-section-h2">Matching platforms to consequential challenges.</h2>
          <p className="tech-section-sub">
            How Enable My Growth systems map to distinct organizational decision environments.
          </p>
        </div>

        <div className="matrix-table-container">
          <div className="matrix-grid" role="table" aria-label="Decision environment matrix">
            <div className="matrix-header-row" role="row">
              <div className="matrix-col-th" role="columnheader">Platform</div>
              <div className="matrix-col-th" role="columnheader">Core Challenge</div>
              <div className="matrix-col-th" role="columnheader">Primary Users</div>
              <div className="matrix-col-th" role="columnheader">Decision Outcome</div>
              <div className="matrix-col-th" role="columnheader">Deployment</div>
            </div>

            {rows.map((r, i) => (
              <div key={i} className="matrix-row" role="row">
                <div className="matrix-cell font-serif font-bold text-white" role="cell">
                  {r.product}
                </div>
                <div className="matrix-cell" role="cell">
                  {r.problem}
                </div>
                <div className="matrix-cell" role="cell">
                  {r.primaryUser}
                </div>
                <div className="matrix-cell" role="cell">
                  {r.decisionOutcome}
                </div>
                <div className="matrix-cell" role="cell">
                  <span className="tech-meta-tag">{r.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
