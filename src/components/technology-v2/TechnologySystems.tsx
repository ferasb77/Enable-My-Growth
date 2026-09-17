import React from 'react';

export function TechnologySystems() {
  return (
    <section id="tv2-systems" className="tv2-section" aria-label="Technology Ecosystem">
      <div className="tv2-container">
        <div className="tv2-header-block">
          <p className="tv2-eyebrow">
            <span className="tv2-eyebrow-dot" /> The Technology Ecosystem
          </p>
          <h2 className="tv2-heading-xl">Platforms engineered for high-consequence environments.</h2>
          <p className="tv2-lead">
            Four specialized systems built to strengthen organizational judgment, operational capability,
            and defensible decision-making across distinct operating domains.
          </p>
        </div>

        <div className="tv2-ecosystem-grid">
          {/* Flagship System: CapabilityOS */}
          <article className="tv2-system-panel tv2-system-capos">
            <div className="tv2-panel-inner">
              <div className="tv2-card-meta">
                <div className="tv2-system-index">
                  <span className="tv2-index-tag">SYS-01</span>
                  <span className="tv2-index-divider">/</span>
                  <span className="tv2-eyebrow" style={{ margin: 0 }}>Core Operating Platform</span>
                </div>
                <span className="tv2-status-badge active">
                  <span className="tv2-status-dot" /> Active · Multi-Environment
                </span>
              </div>

              <h3 className="tv2-system-title">CapabilityOS™</h3>
              <p className="tv2-system-role">Operational infrastructure for capability programs &amp; enterprise academies</p>
              <p className="tv2-system-summary">
                Connects participants, facilitators, leadership sponsors, and cohorts in a shared, transparent environment.
                Organizes action deliverables and participant artifacts as verifiable proof of work over time.
              </p>

              <div className="tv2-feature-spec-grid">
                <div className="tv2-spec-item">
                  <span className="tv2-spec-key">DELIVERY ARCHITECTURE</span>
                  <span className="tv2-spec-val">Coordinates participants, facilitators, and sponsors in one operational layer.</span>
                </div>
                <div className="tv2-spec-item">
                  <span className="tv2-spec-key">INSTITUTIONAL MEMORY</span>
                  <span className="tv2-spec-val">Verifiable participation records and real work-product evidence over time.</span>
                </div>
                <div className="tv2-spec-item">
                  <span className="tv2-spec-key">THREE OPERATING CONTEXTS</span>
                  <span className="tv2-spec-val">Facilitated provider cohorts, strategic enterprise academies, and live event coordination.</span>
                </div>
              </div>
            </div>

            <div className="tv2-card-actions">
              <a href="capability-os.html" className="tv2-btn tv2-btn-gold">
                Explore CapabilityOS <span>→</span>
              </a>
              <a href="contact.html?enquiry=CapabilityOS+Demonstration" className="tv2-btn tv2-btn-outline">
                Platform Briefing
              </a>
            </div>
          </article>

          {/* System 2: AI Thinking Studio */}
          <article className="tv2-system-panel">
            <div className="tv2-panel-inner">
              <div className="tv2-card-meta">
                <div className="tv2-system-index">
                  <span className="tv2-index-tag">SYS-02</span>
                  <span className="tv2-index-divider">/</span>
                  <span className="tv2-eyebrow" style={{ margin: 0 }}>Strategy &amp; Executive</span>
                </div>
                <span className="tv2-status-badge">
                  <span className="tv2-status-dot" /> Available · Pilot
                </span>
              </div>

              <h3 className="tv2-system-title">AI Thinking Studio™</h3>
              <p className="tv2-system-role">Disciplined deliberation environment for stress-testing decisions</p>
              <p className="tv2-system-summary">
                Deconstructs high-stakes questions into assumptions, evidence, alternatives, and risks before commitments harden.
                Scaffolds disciplined human examination rather than rushing toward premature consensus.
              </p>

              <div className="tv2-feature-spec-grid">
                <div className="tv2-spec-item">
                  <span className="tv2-spec-key">DELIBERATION ARCHITECTURE</span>
                  <span className="tv2-spec-val">Single-focus reasoning across five distinct inquiry dimensions.</span>
                </div>
                <div className="tv2-spec-item">
                  <span className="tv2-spec-key">TARGET GROUPS</span>
                  <span className="tv2-spec-val">Executive leadership teams, strategy groups, and workshop cohorts.</span>
                </div>
              </div>
            </div>

            <div className="tv2-card-actions">
              <a href="ai-thinking-studio.html" className="tv2-btn tv2-btn-gold">
                Explore Thinking Studio <span>→</span>
              </a>
              <a href="https://studio.enablemygrowth.com/" target="_blank" rel="noopener noreferrer" className="tv2-btn tv2-btn-outline">
                Enter Studio <span>↗</span>
              </a>
            </div>
          </article>

          {/* System 3: Contextual */}
          <article className="tv2-system-panel">
            <div className="tv2-panel-inner">
              <div className="tv2-card-meta">
                <div className="tv2-system-index">
                  <span className="tv2-index-tag">SYS-03</span>
                  <span className="tv2-index-divider">/</span>
                  <span className="tv2-eyebrow" style={{ margin: 0 }}>Human Judgment</span>
                </div>
                <span className="tv2-status-badge">
                  <span className="tv2-status-dot" /> Approved Access
                </span>
              </div>

              <h3 className="tv2-system-title">Contextual™</h3>
              <p className="tv2-system-role">Professional preparation environment for certified assessors</p>
              <p className="tv2-system-summary">
                Places psychometric evidence directly alongside role demands and operating pressures, equipping
                practitioners to form nuanced, defensible interpretations before the debrief conversation begins.
              </p>

              <div className="tv2-feature-spec-grid">
                <div className="tv2-spec-item">
                  <span className="tv2-spec-key">SITUATIONAL MAPPING</span>
                  <span className="tv2-spec-val">Contextualizes psychometric telemetry with operating realities.</span>
                </div>
                <div className="tv2-spec-item">
                  <span className="tv2-spec-key">PRIMARY USERS</span>
                  <span className="tv2-spec-val">Certified leadership assessors, executive debriefers, and leadership coaches.</span>
                </div>
              </div>
            </div>

            <div className="tv2-card-actions">
              <a href="contextual.html" className="tv2-btn tv2-btn-outline">
                Explore Contextual <span>→</span>
              </a>
              <a href="contact.html?enquiry=Contextual+Practitioner+Access" className="tv2-btn tv2-btn-outline">
                Inquire Access
              </a>
            </div>
          </article>

          {/* System 4: Phys-Valid */}
          <article className="tv2-system-panel tv2-system-physvalid">
            <div className="tv2-panel-inner">
              <div className="tv2-card-meta">
                <div className="tv2-system-index">
                  <span className="tv2-index-tag">SYS-04</span>
                  <span className="tv2-index-divider">/</span>
                  <span className="tv2-eyebrow" style={{ margin: 0 }}>Deterministic Engineering</span>
                </div>
                <span className="tv2-status-badge">
                  <span className="tv2-status-dot" /> Active Pilot
                </span>
              </div>

              <h3 className="tv2-system-title">Phys-Valid™</h3>
              <p className="tv2-system-role">Deterministic constraint validation &amp; operational governance</p>
              <p className="tv2-system-summary">
                Evaluates operating assumptions against declared physical and operational boundaries in safety-critical asset environments.
                Applies auditable rule-based constraint screening where probabilistic model inference is insufficient.
              </p>
            </div>

            <div className="tv2-card-actions">
              <a href="phys-valid.html" className="tv2-btn tv2-btn-outline">
                Explore Phys-Valid <span>→</span>
              </a>
              <a href="contact.html?enquiry=Phys-Valid+Pilot" className="tv2-btn tv2-btn-outline">
                Discuss Pilot Access
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
