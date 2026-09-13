import React from 'react';

export function TechnologyPortfolio() {
  return (
    <section id="portfolio" className="tech-section" style={{ background: 'var(--surface)' }}>
      <div id="platforms" style={{ position: 'relative', top: '-80px' }} />
      <div id="ai-digital-solutions" style={{ position: 'relative', top: '-80px' }} />

      <div className="container">
        <div className="tech-section-header">
          <p className="eyebrow mb-xs">The Technology Ecosystem</p>
          <h2 className="tech-section-h2">Platforms built for high-consequence environments.</h2>
          <p className="tech-section-sub">
            Four specialized systems engineered to strengthen organizational judgment, operational capability, and defensible decision-making.
          </p>
        </div>

        {/* Ecosystem Architecture Connector Bar */}
        <div className="portfolio-ecosystem-bar" role="region" aria-label="Ecosystem architecture overview">
          <span className="eco-purpose-tag">Four systems. One purpose: better organizational judgment and capability.</span>
          <div className="eco-pillar-links">
            <span className="eco-pillar-item">
              <strong>CapOS™</strong> Operational Core
            </span>
            <span className="eco-pillar-item">
              <strong>Thinking Studio™</strong> Deliberation
            </span>
            <span className="eco-pillar-item">
              <strong>Contextual™</strong> Assessment
            </span>
            <span className="eco-pillar-item">
              <strong>Phys-Valid™</strong> Verification
            </span>
          </div>
        </div>

        {/* 2x2 Portfolio Grid */}
        <div className="portfolio-grid-2x2">
          {/* Product Card 1: CapabilityOS (Flagship Operational Infrastructure) */}
          <article className="tech-product-card card-flagship spotlight-card" id="card-capos">
            <div className="card-top">
              <div className="card-status-bar">
                <span className="tech-badge badge-operational">
                  <span className="badge-dot" aria-hidden="true" />
                  Active · Multi-Environment
                </span>
                <div className="card-tags">
                  <span className="tech-meta-tag">Provider</span>
                  <span className="tech-meta-tag">Enterprise</span>
                  <span className="tech-meta-tag">Events</span>
                </div>
              </div>

              <h3 className="product-title">CapabilityOS™</h3>
              <p className="product-summary">Operational infrastructure for capability programs, enterprise academies, and live learning operations.</p>
            </div>

            <div className="product-signals">
              <div className="product-signal-row">
                <span><strong>Delivery Architecture:</strong> Connects participants, facilitators, and sponsors in one operational layer.</span>
              </div>
              <div className="product-signal-row">
                <span><strong>Institutional Memory:</strong> Verifiable participation records and real work-product evidence over time.</span>
              </div>
              <div className="product-signal-row">
                <span><strong>Environments:</strong> Facilitated provider cohorts, strategic enterprise academies, and live event coordination.</span>
              </div>
            </div>

            <div className="product-actions-footer">
              <a href="#capos-showcase" className="btn btn-outline btn-sm">
                Explore CapOS Flow <span className="btn-arrow">↓</span>
              </a>
              <a href="capability-os.html" className="btn btn-gold btn-sm">
                Platform Briefing
              </a>
            </div>
          </article>

          {/* Product Card 2: AI Thinking Studio */}
          <article className="tech-product-card spotlight-card" id="card-thinking-studio">
            <div className="card-top">
              <div className="card-status-bar">
                <span className="tech-badge badge-available">
                  <span className="badge-dot" aria-hidden="true" />
                  Available · Pilot
                </span>
                <div className="card-tags">
                  <span className="tech-meta-tag">Executive</span>
                  <span className="tech-meta-tag">Strategy</span>
                  <span className="tech-meta-tag">Facilitation</span>
                </div>
              </div>

              <h3 className="product-title">AI Thinking Studio™</h3>
              <p className="product-summary">Disciplined deliberation environment for stress-testing decisions before commitments are made.</p>
            </div>

            <div className="product-signals">
              <div className="product-signal-row">
                <span><strong>Deliberation Tree:</strong> Deconstructs questions into assumptions, evidence, alternatives, and risks.</span>
              </div>
              <div className="product-signal-row">
                <span><strong>Disciplined Inquiry:</strong> Scaffolds rigorous human examination rather than generating rushed consensus.</span>
              </div>
              <div className="product-signal-row">
                <span><strong>Primary Users:</strong> Executive teams, strategy groups, and leadership workshop cohorts.</span>
              </div>
            </div>

            <div className="product-actions-footer">
              <a href="#thinking-studio-showcase" className="btn btn-outline btn-sm">
                Explore Deliberation Tree <span className="btn-arrow">↓</span>
              </a>
              <a href="ai-thinking-studio.html" className="btn btn-outline btn-sm">
                Studio Briefing <span className="btn-arrow">→</span>
              </a>
            </div>
          </article>

          {/* Product Card 3: Contextual */}
          <article className="tech-product-card spotlight-card" id="card-contextual">
            <div className="card-top">
              <div className="card-status-bar">
                <span className="tech-badge badge-available">
                  <span className="badge-dot" aria-hidden="true" />
                  Available · Approved Access
                </span>
                <div className="card-tags">
                  <span className="tech-meta-tag">Assessor Prep</span>
                  <span className="tech-meta-tag">Human Judgment</span>
                </div>
              </div>

              <h3 className="product-title">Contextual™</h3>
              <p className="product-summary">Professional preparation environment for certified assessors examining evidence in context.</p>
            </div>

            <div className="product-signals">
              <div className="product-signal-row">
                <span><strong>Situational Mapping:</strong> Places psychometric evidence alongside role demands and operating pressures.</span>
              </div>
              <div className="product-signal-row">
                <span><strong>Debrief Posture:</strong> Equips practitioners to form nuanced, defensible interpretation before the conversation.</span>
              </div>
              <div className="product-signal-row">
                <span><strong>Primary Users:</strong> Certified leadership assessors, executive debriefers, and leadership coaches.</span>
              </div>
            </div>

            <div className="product-actions-footer">
              <a href="contextual.html" className="btn btn-outline btn-sm">
                Explore Contextual <span className="btn-arrow">→</span>
              </a>
              <a href="contact.html?enquiry=Contextual+Practitioner+Access" className="btn btn-outline btn-sm">
                Inquire Access
              </a>
            </div>
          </article>

          {/* Product Card 4: Phys-Valid */}
          <article className="tech-product-card spotlight-card" id="card-phys-valid">
            <div className="card-top">
              <div className="card-status-bar">
                <span className="tech-badge badge-pilot">
                  <span className="badge-dot" aria-hidden="true" />
                  Active Pilot
                </span>
                <div className="card-tags">
                  <span className="tech-meta-tag">Deterministic</span>
                  <span className="tech-meta-tag">Engineering</span>
                </div>
              </div>

              <h3 className="product-title">Phys-Valid™</h3>
              <p className="product-summary">Deterministic constraint validation and operational governance screening for asset environments.</p>
            </div>

            <div className="product-signals">
              <div className="product-signal-row">
                <span><strong>Boundary Gates:</strong> Evaluates operating assumptions against declared physical and operational limits.</span>
              </div>
              <div className="product-signal-row">
                <span><strong>Mathematical Verification:</strong> Auditable rule-based screening with clear human review and escalation.</span>
              </div>
              <div className="product-signal-row">
                <span><strong>Primary Users:</strong> Integrity engineers, operational risk specialists, and governance reviewers.</span>
              </div>
            </div>

            <div className="product-actions-footer">
              <a href="phys-valid.html" className="btn btn-outline btn-sm">
                Explore Phys-Valid <span className="btn-arrow">→</span>
              </a>
              <a href="contact.html?enquiry=Phys-Valid+Pilot" className="btn btn-outline btn-sm">
                Discuss Pilot Access
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
