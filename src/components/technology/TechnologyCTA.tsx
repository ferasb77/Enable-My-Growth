import React from 'react';

export function TechnologyCTA() {
  return (
    <>
      {/* Enterprise Architecture & Governance Note */}
      <section id="architecture" className="tech-section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="tech-section-header">
            <p className="eyebrow mb-xs">Enterprise Architecture</p>
            <h2 className="tech-section-h2">Engineered for privacy, isolation, and control.</h2>
            <p className="tech-section-sub">
              Enable My Growth systems are deployed with single-tenant isolation, rigorous zero-retention data
              boundaries, and auditable governance by design.
            </p>
          </div>

          <div className="pipeline-steps-grid">
            <div className="pipeline-card spotlight-card">
              <div className="pipeline-num">01</div>
              <h3 className="pipeline-headline">Tenant Isolation</h3>
              <p className="pipeline-desc">
                Dedicated database partitioning and encryption per enterprise client. Cohort and deliberation data
                never co-mingle across organizations.
              </p>
            </div>

            <div className="pipeline-card spotlight-card">
              <div className="pipeline-num">02</div>
              <h3 className="pipeline-headline">Zero Training Ingestion</h3>
              <p className="pipeline-desc">
                Enterprise sessions, reasoning transcripts, and assessment evidence are never fed back to train
                commercial foundation models.
              </p>
            </div>

            <div className="pipeline-card spotlight-card">
              <div className="pipeline-num">03</div>
              <h3 className="pipeline-headline">Deterministic Safety</h3>
              <p className="pipeline-desc">
                Where physical and operational bounds are involved, automated evaluation uses deterministic logic
                rather than ungrounded probability.
              </p>
            </div>

            <div className="pipeline-card spotlight-card">
              <div className="pipeline-num">04</div>
              <h3 className="pipeline-headline">Sovereign Deployment</h3>
              <p className="pipeline-desc">
                Platforms can be provisioned in regional enterprise cloud VPCs (AWS/GCP/Azure) to adhere to internal
                data residency mandates.
              </p>
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
