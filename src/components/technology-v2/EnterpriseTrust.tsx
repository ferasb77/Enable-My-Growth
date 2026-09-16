import React from 'react';

const trustPillars = [
  {
    num: '01',
    title: 'Tenant Separation',
    desc: 'CapabilityOS Standard uses database-level tenant policies to separate organizational workspaces and restrict records to authorized access. Dedicated instances can be considered where enterprise or regional requirements demand stronger infrastructure separation.',
  },
  {
    num: '02',
    title: 'AI & Data Governance',
    desc: 'AI integrations are handled server-side, with sensitive context minimized before model calls where the product workflow permits. Provider training, retention, and data-handling requirements are governed by the commercial API and deployment agreement in use.',
  },
  {
    num: '03',
    title: 'Deterministic Controls',
    desc: 'Where physical and operational limits are involved, Phys-Valid™ evaluates declared conditions against deterministic engineering rules and constraint thresholds rather than probabilistic model inference.',
  },
  {
    num: '04',
    title: 'Deployment Flexibility',
    desc: 'CapabilityOS is designed to support dedicated regional and private deployment models where data residency, infrastructure isolation, or client governance requirements justify them.',
  },
];

export function EnterpriseTrust() {
  return (
    <section id="tv2-trust" className="tv2-section" aria-label="Enterprise Trust & Deployment Architecture">
      <div className="tv2-container">
        <div className="tv2-header-block">
          <p className="tv2-eyebrow">
            <span className="tv2-eyebrow-dot" /> Enterprise Trust &amp; Deployment
          </p>
          <h2 className="tv2-heading-xl">Engineered for control, accountability, and deployment flexibility.</h2>
          <p className="tv2-lead">
            Enterprise environments require clear organizational boundaries, explicit data governance,
            deterministic controls where consequences demand them, and deployment models aligned to operational
            and residency requirements.
          </p>
        </div>

        <div className="tv2-trust-spec-matrix">
          {trustPillars.map((p) => (
            <div key={p.num} className="tv2-trust-spec-cell">
              <div className="tv2-trust-cell-header">
                <span className="tv2-index-tag">SPEC {p.num}</span>
                <span className="tv2-index-divider">/</span>
                <h3 className="tv2-trust-title">{p.title}</h3>
              </div>
              <p className="tv2-trust-desc">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Restrained Scope Note: Technical Specification Notice */}
        <div className="tv2-trust-notice">
          <div className="tv2-trust-notice-tag">
            <span className="tv2-index-tag">DEPLOYMENT NOTICE</span>
          </div>
          <p className="tv2-trust-notice-text">
            Architecture and deployment controls vary by platform and engagement.
            Dedicated or regional infrastructure is not the default configuration for every Enable My Growth system.
          </p>
        </div>
      </div>
    </section>
  );
}
