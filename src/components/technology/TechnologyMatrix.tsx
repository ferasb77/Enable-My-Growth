import React from 'react';

export function TechnologyMatrix() {
  const routes = [
    {
      challenge: 'Fragmented capability delivery, uncoordinated cohort execution, and lost operational follow-through.',
      product: 'CapOS™',
      users: 'Capability Providers · Enterprise Academies · Event Organizers',
      outcome: 'Coordinated execution, verifiable participant records, and structured institutional memory across programs.',
    },
    {
      challenge: 'Premature executive consensus, unexamined strategic assumptions, and unvetted risk exposure before commitments are made.',
      product: 'AI Thinking Studio™',
      users: 'Executive Teams · Strategy Groups · Facilitators',
      outcome: 'Disciplined deliberation, structured reasoning trees, and defensible decision rationale.',
    },
    {
      challenge: 'Uncontextualized psychometric data, generic debrief reports, and evaluations isolated from actual operating pressures.',
      product: 'Contextual™',
      users: 'Certified Leadership Assessors · Executive Coaches',
      outcome: 'Nuanced debrief posture placing psychometric evidence alongside real role demands and operating pressures.',
    },
    {
      challenge: 'Unverified assumptions entering high-consequence operational models.',
      product: 'Phys-Valid™',
      users: 'Integrity Engineers · Operational Risk Teams',
      outcome: 'Deterministic mathematical constraint evaluation, physical limit validation, and auditable admissibility gates.',
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

        {/* Desktop 3-Column Decision Routing Ledger */}
        <div className="matrix-table-container">
          <div className="matrix-grid" role="table" aria-label="Decision environment matrix">
            <div className="matrix-header-row" role="row">
              <div className="matrix-col-th col-challenge" role="columnheader">Operating Challenge</div>
              <div className="matrix-col-th col-platform" role="columnheader">Technology System</div>
              <div className="matrix-col-th col-outcome" role="columnheader">Decision / Operational Outcome</div>
            </div>

            {routes.map((r, i) => (
              <div key={i} className="matrix-row" role="row">
                <div className="matrix-cell col-challenge" role="cell">
                  <p className="matrix-challenge-text">{r.challenge}</p>
                </div>
                <div className="matrix-cell col-platform" role="cell">
                  <span className="matrix-platform-name">{r.product}</span>
                  <span className="matrix-user-meta">{r.users}</span>
                </div>
                <div className="matrix-cell col-outcome" role="cell">
                  <p className="matrix-outcome-text">{r.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Decision Routing Sequence (Zero Horizontal Scrolling) */}
        <div className="matrix-mobile-routes" aria-label="Decision routing guide">
          {routes.map((r, i) => (
            <div key={i} className="matrix-mobile-card">
              <div className="mobile-route-tier">
                <span className="mobile-tier-label">Challenge</span>
                <p className="mobile-challenge-text">{r.challenge}</p>
              </div>
              <div className="mobile-route-tier">
                <span className="mobile-tier-label">Relevant System</span>
                <div className="mobile-platform-group">
                  <span className="mobile-platform-name">{r.product}</span>
                  <span className="mobile-user-meta">{r.users}</span>
                </div>
              </div>
              <div className="mobile-route-tier">
                <span className="mobile-tier-label">Outcome</span>
                <p className="mobile-outcome-text">{r.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
