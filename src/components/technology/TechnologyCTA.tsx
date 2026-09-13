import React from 'react';

export function TechnologyCTA() {
  return (
    <>
      {/* Enterprise Trust & Deployment Architecture */}
      <section id="architecture" className="tech-section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="tech-section-header">
            <p className="eyebrow mb-xs">Enterprise Trust &amp; Deployment</p>
            <h2 className="tech-section-h2">Designed for control, accountability, and deployment flexibility.</h2>
            <p className="tech-section-sub">
              Enterprise environments require clear organizational boundaries, explicit data governance,
              deterministic controls where consequences demand them, and deployment models aligned to operational
              and residency requirements.
            </p>
          </div>

          <div className="trust-ledger-wrapper">
            <div className="trust-ledger-grid">
              {/* 01 · Tenant Separation */}
              <div className="trust-ledger-col">
                <div className="trust-num-row">
                  <span className="trust-num">01</span>
                  <span className="trust-pillar-tag">Tenant Separation</span>
                </div>
                <h3 className="trust-headline">Organizational boundaries enforced at the data layer</h3>
                <p className="trust-desc">
                  CapabilityOS Standard uses database-level tenant policies to separate organizational workspaces
                  and restrict records to authorized access. Dedicated instances can be considered where enterprise
                  or regional requirements demand stronger infrastructure separation.
                </p>
              </div>

              {/* 02 · AI & Data Governance */}
              <div className="trust-ledger-col">
                <div className="trust-num-row">
                  <span className="trust-num">02</span>
                  <span className="trust-pillar-tag">AI &amp; Data Governance</span>
                </div>
                <h3 className="trust-headline">Explicit boundaries around external AI use</h3>
                <p className="trust-desc">
                  AI integrations are handled server-side, with sensitive context minimized before model calls where
                  the product workflow permits. Provider training, retention, and data-handling requirements are
                  governed by the commercial API and deployment agreement in use.
                </p>
              </div>

              {/* 03 · Deterministic Controls */}
              <div className="trust-ledger-col">
                <div className="trust-num-row">
                  <span className="trust-num">03</span>
                  <span className="trust-pillar-tag">Deterministic Controls</span>
                </div>
                <h3 className="trust-headline">Rules where probability is not enough</h3>
                <p className="trust-desc">
                  Where physical and operational limits are involved, Phys-Valid™ evaluates declared conditions
                  against deterministic engineering rules and constraint thresholds rather than probabilistic model
                  inference.
                </p>
              </div>

              {/* 04 · Deployment Flexibility */}
              <div className="trust-ledger-col">
                <div className="trust-num-row">
                  <span className="trust-num">04</span>
                  <span className="trust-pillar-tag">Deployment Flexibility</span>
                </div>
                <h3 className="trust-headline">Deployment aligned to enterprise requirements</h3>
                <p className="trust-desc">
                  CapabilityOS is designed to support dedicated regional and private deployment models where data
                  residency, infrastructure isolation, or client governance requirements justify them.
                </p>
              </div>
            </div>

            {/* Restrained Scope Note */}
            <div className="trust-closing-statement">
              <span className="trust-closing-rule" />
              <p className="trust-closing-text">
                Architecture and deployment controls vary by platform and engagement. Dedicated or regional
                infrastructure is not the default configuration for every Enable My Growth system.
              </p>
              <span className="trust-closing-rule" />
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Call to Action */}
      <section id="contact" className="cta-band">
        <div id="custom-solutions" style={{ position: 'relative', top: '-80px' }} />
        <div className="container-sm">
          <p className="eyebrow mb-md">Perspective changes what becomes possible</p>
          <h2 className="display display-lg mb-md">Begin a conversation about your technology requirements.</h2>
          <p style={{ maxWidth: '560px', margin: '0 auto', color: 'var(--muted)', lineHeight: '1.9' }}>
            Whether you are coordinating an enterprise capability academy, seeking a pilot of AI Thinking Studio,
            or exploring custom decision system architecture, we are ready to listen.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2.5rem' }}>
            <a href="contact.html?enquiry=Technology+Requirement" className="btn btn-gold">
              Discuss a Project <span className="btn-arrow">→</span>
            </a>
            <a href="capability-os.html" className="btn btn-outline">
              Explore CapOS™
            </a>
            <a href="ai-thinking-studio.html" className="btn btn-outline">
              Thinking Studio™ Briefing
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
