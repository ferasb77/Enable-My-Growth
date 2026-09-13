'use client';

import React, { useState } from 'react';

type SystemId = 'capos' | 'thinking-studio' | 'contextual' | 'phys-valid';

interface SystemConfig {
  id: SystemId;
  name: string;
  tagline: string;
  badge: string;
  badgeClass: string;
  role: string;
  summary: string;
  primaryUsers: string;
  architecturePillars: { label: string; detail: string }[];
  actionLink: { href: string; label: string };
  secondaryLink: { href: string; label: string };
}

const systems: Record<SystemId, SystemConfig> = {
  capos: {
    id: 'capos',
    name: 'CapabilityOS™',
    tagline: 'Operational Core',
    badge: 'Active · Multi-Environment',
    badgeClass: 'badge-operational',
    role: 'Operational Delivery Infrastructure',
    summary:
      'Operational infrastructure for capability programs, enterprise academies, and live learning operations. Connects participants, facilitators, and sponsors in one auditable operational layer.',
    primaryUsers: 'Capability Providers · Enterprise Academies · Event Organizers',
    architecturePillars: [
      { label: 'Delivery Architecture', detail: 'Coordinates cohort participation, live execution, and structured facilitators.' },
      { label: 'Institutional Memory', detail: 'Preserves verifiable work-product artifacts and longitudinal capability records.' },
      { label: 'Multi-Environment', detail: 'Deploys across provider cohorts, internal enterprise academies, and executive events.' },
    ],
    actionLink: { href: 'capability-os.html', label: 'Explore CapabilityOS™' },
    secondaryLink: { href: 'contact.html?enquiry=CapabilityOS+Enterprise', label: 'Request Academy Briefing' },
  },
  'thinking-studio': {
    id: 'thinking-studio',
    name: 'AI Thinking Studio™',
    tagline: 'Disciplined Deliberation',
    badge: 'Available · Pilot',
    badgeClass: 'badge-available',
    role: 'Decision Deliberation Environment',
    summary:
      'Disciplined deliberation environment for stress-testing strategic choices before commitments are made. Deconstructs complex questions into assumptions, evidence, alternatives, and risks.',
    primaryUsers: 'Executive Teams · Strategy Groups · Leadership Facilitators',
    architecturePillars: [
      { label: 'Deliberation Tree', detail: 'Deconstructs consequential questions into explicit, auditable reasoning branches.' },
      { label: 'Disciplined Inquiry', detail: 'Scaffolds rigorous human examination rather than generating rushed consensus.' },
      { label: 'Decision Defense', detail: 'Produces traceable rationale documents that stand up to board and stakeholder scrutiny.' },
    ],
    actionLink: { href: 'ai-thinking-studio.html', label: 'Explore Thinking Studio™' },
    secondaryLink: { href: 'contact.html?enquiry=Thinking+Studio+Pilot', label: 'Discuss Pilot Cohort' },
  },
  contextual: {
    id: 'contextual',
    name: 'Contextual™',
    tagline: 'Situational Assessment',
    badge: 'Available · Approved Access',
    badgeClass: 'badge-available',
    role: 'Assessor Preparation Environment',
    summary:
      'Professional preparation environment for certified assessors examining evidence in context. Places psychometric evidence alongside role demands and operating pressures to equip practitioners before debriefs.',
    primaryUsers: 'Certified Leadership Assessors · Executive Coaches · Talent Specialists',
    architecturePillars: [
      { label: 'Situational Mapping', detail: 'Correlates psychometric evidence with role demands, organizational mandate, and pressure.' },
      { label: 'Debrief Posture', detail: 'Equips practitioners to form nuanced, defensible interpretations before the conversation.' },
      { label: 'Human Primacy', detail: 'Ensures algorithmic assessment outputs never substitute for expert clinical judgment.' },
    ],
    actionLink: { href: 'contextual.html', label: 'Explore Contextual™' },
    secondaryLink: { href: 'contact.html?enquiry=Contextual+Practitioner+Access', label: 'Inquire Assessor Access' },
  },
  'phys-valid': {
    id: 'phys-valid',
    name: 'Phys-Valid™',
    tagline: 'Deterministic Verification',
    badge: 'Active Pilot',
    badgeClass: 'badge-pilot',
    role: 'Engineering Boundary Validation',
    summary:
      'Deterministic constraint validation and operational governance screening for asset environments. Evaluates operating assumptions against declared physical limits with auditable rule-based screening.',
    primaryUsers: 'Integrity Engineers · Operational Risk Teams · Governance Reviewers',
    architecturePillars: [
      { label: 'Boundary Gates', detail: 'Evaluates operating assumptions against declared physical and operational limits.' },
      { label: 'Mathematical Verification', detail: 'Auditable rule-based screening with clear human review and escalation.' },
      { label: 'Deterministic Trust', detail: 'Operates where probabilistic inference cannot be trusted with safety-critical assets.' },
    ],
    actionLink: { href: 'phys-valid.html', label: 'Explore Phys-Valid™' },
    secondaryLink: { href: 'contact.html?enquiry=Phys-Valid+Pilot', label: 'Discuss Pilot Access' },
  },
};

export function TechEcosystemExplorer() {
  const [selectedSystem, setSelectedSystem] = useState<SystemId>('capos');
  const [activeCaposStep, setActiveCaposStep] = useState<number>(1);
  const [activeDelibBranch, setActiveDelibBranch] = useState<'assumptions' | 'evidence' | 'alternatives' | 'risks'>('assumptions');
  const [activeContextualTab, setActiveContextualTab] = useState<'psychometrics' | 'operating' | 'synthesis'>('psychometrics');
  const [activePhysGate, setActivePhysGate] = useState<'limits' | 'verification' | 'governance'>('limits');

  const current = systems[selectedSystem];

  return (
    <section id="portfolio" className="tech-ecosystem-command-deck">
      <div id="platforms" style={{ position: 'relative', top: '-80px' }} />
      <div id="ai-digital-solutions" style={{ position: 'relative', top: '-80px' }} />

      <div className="container">
        {/* Section Header */}
        <div className="deck-header">
          <div className="deck-eyebrow-wrap">
            <span className="deck-pulse-indicator" />
            <span className="eyebrow" style={{ color: 'var(--gold)', letterSpacing: '0.22em' }}>
              The Technology Ecosystem
            </span>
          </div>
          <h2 className="deck-h2">Platforms built for high-consequence environments.</h2>
          <p className="deck-sub">
            Four specialized systems engineered to strengthen organizational judgment, operational capability, and defensible decision-making.
          </p>
        </div>

        {/* Interactive Master System Switcher Tabs */}
        <div className="deck-system-nav" role="tablist" aria-label="Ecosystem System Switcher">
          {(['capos', 'thinking-studio', 'contextual', 'phys-valid'] as SystemId[]).map((id) => {
            const sys = systems[id];
            const isActive = selectedSystem === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`deck-nav-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => setSelectedSystem(id)}
              >
                <span className="deck-btn-indicator" aria-hidden="true" />
                <div className="deck-btn-meta">
                  <span className="deck-btn-name">{sys.name}</span>
                  <span className="deck-btn-tagline">{sys.tagline}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active System Interactive Command Stage */}
        <div className="deck-stage-wrapper" key={selectedSystem}>
          {/* Left Column: Architectural Overview & Factual Claims */}
          <div className="deck-stage-overview">
            <div className="deck-overview-top">
              <div className="deck-status-row">
                <span className={`tech-badge ${current.badgeClass}`}>
                  <span className="badge-dot" aria-hidden="true" />
                  {current.badge}
                </span>
                <span className="deck-role-tag">{current.role}</span>
              </div>
              <h3 className="deck-overview-title">{current.name}</h3>
              <p className="deck-overview-summary">{current.summary}</p>
            </div>

            {/* Architectural Pillars */}
            <div className="deck-pillars-list">
              {current.architecturePillars.map((p, idx) => (
                <div key={idx} className="deck-pillar-row">
                  <span className="deck-pillar-bullet">◈</span>
                  <div>
                    <strong className="deck-pillar-label">{p.label}: </strong>
                    <span className="deck-pillar-text">{p.detail}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Target Stakeholders */}
            <div className="deck-users-strip">
              <span className="deck-users-label">Primary Stakeholders</span>
              <span className="deck-users-val">{current.primaryUsers}</span>
            </div>

            {/* Action Buttons */}
            <div className="deck-actions-group">
              <a href={current.actionLink.href} className="btn btn-gold btn-sm deck-btn-main">
                {current.actionLink.label} <span className="btn-arrow">→</span>
              </a>
              <a href={current.secondaryLink.href} className="btn btn-outline btn-sm deck-btn-sub">
                {current.secondaryLink.label}
              </a>
            </div>
          </div>

          {/* Right Column: Live Interactive Workbench Simulator */}
          <div className="deck-stage-simulator">
            {/* 1. CapabilityOS Live Simulator */}
            {selectedSystem === 'capos' && (
              <div className="sim-workbench" id="capos-showcase">
                <div className="sim-header">
                  <div className="sim-title-group">
                    <span className="sim-badge">Live Operational Telemetry</span>
                    <span className="sim-env-label">Cohorts · Facilitators · Sponsors</span>
                  </div>
                  <span className="sim-sub">Select pipeline phase:</span>
                </div>

                {/* Pipeline Step Buttons */}
                <div className="sim-capos-nav">
                  {[
                    { step: 1, title: '01 People', sub: 'Participation' },
                    { step: 2, title: '02 Evidence', sub: 'Work Products' },
                    { step: 3, title: '03 Follow-Through', sub: 'Milestones' },
                    { step: 4, title: '04 Intelligence', sub: 'Institutional Memory' },
                  ].map((s) => (
                    <button
                      key={s.step}
                      type="button"
                      className={`sim-capos-btn ${activeCaposStep === s.step ? 'active' : ''}`}
                      onClick={() => setActiveCaposStep(s.step)}
                    >
                      <span className="sim-capos-btn-title">{s.title}</span>
                      <span className="sim-capos-btn-sub">{s.sub}</span>
                    </button>
                  ))}
                </div>

                {/* Interactive Simulator Screen */}
                <div className="sim-screen-card">
                  {activeCaposStep === 1 && (
                    <div className="sim-panel">
                      <div className="sim-panel-header">
                        <span className="sim-panel-num">Pillar 01 · Participation Architecture</span>
                        <h4 className="sim-panel-title">Verifiable engagement across delivery cohorts</h4>
                      </div>
                      <p className="sim-panel-text">
                        Coordinates participants, facilitators, leadership sponsors, and cohorts in a shared, transparent environment.
                        Reflects verifiable session attendance and engagement without administrative overhead.
                      </p>
                      <div className="sim-telemetry-grid">
                        <div className="sim-tele-item">
                          <span className="sim-tele-val">Verifiable</span>
                          <span className="sim-tele-lbl">Cohort Records</span>
                        </div>
                        <div className="sim-tele-item">
                          <span className="sim-tele-val">Real-Time</span>
                          <span className="sim-tele-lbl">Facilitator Roster</span>
                        </div>
                        <div className="sim-tele-item">
                          <span className="sim-tele-val">Zero-Friction</span>
                          <span className="sim-tele-lbl">Participant Check-In</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeCaposStep === 2 && (
                    <div className="sim-panel">
                      <div className="sim-panel-header">
                        <span className="sim-panel-num">Pillar 02 · Structured Evidence</span>
                        <h4 className="sim-panel-title">Tangible artifacts captured directly in context</h4>
                      </div>
                      <p className="sim-panel-text">
                        Action deliverables, participant artifacts, and completed assessments are organized as concrete proof of work rather than
                        buried in static spreadsheets. Captures only what was actually produced.
                      </p>
                      <div className="sim-telemetry-grid">
                        <div className="sim-tele-item">
                          <span className="sim-tele-val">Artifacts</span>
                          <span className="sim-tele-lbl">Work-Product Proof</span>
                        </div>
                        <div className="sim-tele-item">
                          <span className="sim-tele-val">Grounded</span>
                          <span className="sim-tele-lbl">No Speculative Claims</span>
                        </div>
                        <div className="sim-tele-item">
                          <span className="sim-tele-val">Auditable</span>
                          <span className="sim-tele-lbl">Contextual Repository</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeCaposStep === 3 && (
                    <div className="sim-panel">
                      <div className="sim-panel-header">
                        <span className="sim-panel-num">Pillar 03 · Execution Follow-Through</span>
                        <h4 className="sim-panel-title">Traceable milestone checkpoints &amp; check-ins</h4>
                      </div>
                      <p className="sim-panel-text">
                        Tracks post-session checkpoints, milestone submissions, and supervisory check-ins where established. Documents execution progress
                        without inventing causality or unverified behavior change.
                      </p>
                      <div className="sim-telemetry-grid">
                        <div className="sim-tele-item">
                          <span className="sim-tele-val">Documented</span>
                          <span className="sim-tele-lbl">Milestone Checkpoints</span>
                        </div>
                        <div className="sim-tele-item">
                          <span className="sim-tele-val">Supervisory</span>
                          <span className="sim-tele-lbl">Post-Session Check-Ins</span>
                        </div>
                        <div className="sim-tele-item">
                          <span className="sim-tele-val">Traceable</span>
                          <span className="sim-tele-lbl">Execution Integrity</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeCaposStep === 4 && (
                    <div className="sim-panel">
                      <div className="sim-panel-header">
                        <span className="sim-panel-num">Pillar 04 · Institutional Memory</span>
                        <h4 className="sim-panel-title">Portfolio visibility &amp; aggregated capability proof</h4>
                      </div>
                      <p className="sim-panel-text">
                        Aggregates structured program evidence into operational intelligence dashboards. Provides leadership with clear portfolio visibility
                        based strictly on verified records and documented follow-through.
                      </p>
                      <div className="sim-telemetry-grid">
                        <div className="sim-tele-item">
                          <span className="sim-tele-val">Portfolio</span>
                          <span className="sim-tele-lbl">Executive Visibility</span>
                        </div>
                        <div className="sim-tele-item">
                          <span className="sim-tele-val">Institutional</span>
                          <span className="sim-tele-lbl">Living Capability Bank</span>
                        </div>
                        <div className="sim-tele-item">
                          <span className="sim-tele-val">Defensible</span>
                          <span className="sim-tele-lbl">Sponsor Reporting</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 2. AI Thinking Studio Live Simulator */}
            {selectedSystem === 'thinking-studio' && (
              <div className="sim-workbench" id="thinking-studio-showcase">
                <div className="sim-header">
                  <div className="sim-title-group">
                    <span className="sim-badge">Deliberation Tree Workbench</span>
                    <span className="sim-env-label">Deconstructing Strategic Risk</span>
                  </div>
                  <span className="sim-sub">Select inquiry branch:</span>
                </div>

                <div className="sim-delib-nav">
                  {[
                    { id: 'assumptions' as const, label: '01 Assumptions' },
                    { id: 'evidence' as const, label: '02 Evidence' },
                    { id: 'alternatives' as const, label: '03 Alternatives' },
                    { id: 'risks' as const, label: '04 Downside Risks' },
                  ].map((b) => (
                    <button
                      key={b.id}
                      type="button"
                      className={`sim-delib-btn ${activeDelibBranch === b.id ? 'active' : ''}`}
                      onClick={() => setActiveDelibBranch(b.id)}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>

                <div className="sim-screen-card">
                  <div className="sim-question-anchor">
                    <span className="sim-anchor-badge">Consequential Question Anchor</span>
                    <p className="sim-anchor-text">
                      &ldquo;Should we expand into the regulated enterprise tier this fiscal quarter?&rdquo;
                    </p>
                  </div>

                  {activeDelibBranch === 'assumptions' && (
                    <div className="sim-delib-body">
                      <div className="sim-delib-row">
                        <span className="sim-delib-head">Inquiry Focus</span>
                        <p className="sim-delib-desc">What is being taken for granted as true before execution begins?</p>
                      </div>
                      <div className="sim-delib-row">
                        <span className="sim-delib-head">Critical Examination</span>
                        <p className="sim-delib-desc">
                          Are operational readiness timelines assuming standard rollout cycles without factoring external partner dependency delays?
                        </p>
                      </div>
                      <div className="sim-delib-finding">
                        <strong>Examination Note:</strong> High sensitivity to partner approval turnarounds. Unbuffered critical paths pose deployment risks.
                      </div>
                    </div>
                  )}

                  {activeDelibBranch === 'evidence' && (
                    <div className="sim-delib-body">
                      <div className="sim-delib-row">
                        <span className="sim-delib-head">Inquiry Focus</span>
                        <p className="sim-delib-desc">What documented, auditable proof exists today?</p>
                      </div>
                      <div className="sim-delib-row">
                        <span className="sim-delib-head">Critical Examination</span>
                        <p className="sim-delib-desc">
                          Distinguish verified enterprise commitments and signed letters of intent from early exploratory inquiries and anecdotal pipeline signals.
                        </p>
                      </div>
                      <div className="sim-delib-finding">
                        <strong>Examination Note:</strong> Documented commitments verified for core capabilities; regulated tier demand remains preliminary.
                      </div>
                    </div>
                  )}

                  {activeDelibBranch === 'alternatives' && (
                    <div className="sim-delib-body">
                      <div className="sim-delib-row">
                        <span className="sim-delib-head">Inquiry Focus</span>
                        <p className="sim-delib-desc">What alternative pathways achieve capability without immediate organizational lock-in?</p>
                      </div>
                      <div className="sim-delib-row">
                        <span className="sim-delib-head">Critical Examination</span>
                        <p className="sim-delib-desc">
                          Evaluate whether a phased pilot deployment or accredited partner network can validate readiness before committing internal engineering bandwidth.
                        </p>
                      </div>
                      <div className="sim-delib-finding">
                        <strong>Examination Note:</strong> Phased pilot deployment via audited partner network identified as a lower-friction validation route.
                      </div>
                    </div>
                  )}

                  {activeDelibBranch === 'risks' && (
                    <div className="sim-delib-body">
                      <div className="sim-delib-row">
                        <span className="sim-delib-head">Inquiry Focus</span>
                        <p className="sim-delib-desc">If this choice encounters friction, is downside exposure containable or structural?</p>
                      </div>
                      <div className="sim-delib-row">
                        <span className="sim-delib-head">Critical Examination</span>
                        <p className="sim-delib-desc">
                          Assess financial downside, contractual penalty exposure, and whether delivery strain impairs core practice continuity.
                        </p>
                      </div>
                      <div className="sim-delib-finding">
                        <strong>Examination Note:</strong> Direct cost exposure is containable; organizational reputation risk requires an explicit mitigation framework.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 3. Contextual Live Simulator */}
            {selectedSystem === 'contextual' && (
              <div className="sim-workbench" id="contextual-showcase">
                <div className="sim-header">
                  <div className="sim-title-group">
                    <span className="sim-badge">Assessor Prep Environment</span>
                    <span className="sim-env-label">Psychometrics in Situational Reality</span>
                  </div>
                  <span className="sim-sub">Select assessment plane:</span>
                </div>

                <div className="sim-context-nav">
                  {[
                    { id: 'psychometrics' as const, label: '01 Psychometric Markers' },
                    { id: 'operating' as const, label: '02 Operating Pressures' },
                    { id: 'synthesis' as const, label: '03 Assessor Debrief Posture' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      className={`sim-context-btn ${activeContextualTab === t.id ? 'active' : ''}`}
                      onClick={() => setActiveContextualTab(t.id)}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                <div className="sim-screen-card">
                  {activeContextualTab === 'psychometrics' && (
                    <div className="sim-context-body">
                      <h4 className="sim-panel-title">Cognitive &amp; Behavioral Baseline</h4>
                      <p className="sim-panel-text">
                        Psychometric score patterns reveal individual tendencies, behavioral preferences, and cognitive habits. On their own,
                        they represent raw indicators, not organizational destiny.
                      </p>
                      <div className="sim-indicator-row">
                        <span className="sim-marker-tag">Analytical Thoroughness: High</span>
                        <span className="sim-marker-tag">Decisive Speed: Moderate</span>
                        <span className="sim-marker-tag">Risk Tolerance: Calibrated</span>
                      </div>
                    </div>
                  )}

                  {activeContextualTab === 'operating' && (
                    <div className="sim-context-body">
                      <h4 className="sim-panel-title">Role Demands &amp; Operating Pressures</h4>
                      <p className="sim-panel-text">
                        The same behavioral tendency manifests completely differently under a high-velocity product pivot versus a regulatory crisis.
                        Contextual maps psychometric data directly against actual operating pressures.
                      </p>
                      <div className="sim-indicator-row">
                        <span className="sim-marker-tag alert">Turbulent Delivery Constraints</span>
                        <span className="sim-marker-tag alert">Multi-Stakeholder Governance</span>
                      </div>
                    </div>
                  )}

                  {activeContextualTab === 'synthesis' && (
                    <div className="sim-context-body">
                      <h4 className="sim-panel-title">Nuanced Practitioner Debrief Posture</h4>
                      <p className="sim-panel-text">
                        Equips the certified assessor with structured, contextual inquiry paths before stepping into the debrief. The practitioner
                        leads an empowering, grounded dialogue rather than reading off generic diagnostic percentages.
                      </p>
                      <div className="sim-delib-finding">
                        <strong>Debrief Guidance:</strong> Explore how analytical thoroughness serves the current mandate while identifying where
                        fast, imperfect decisions are necessary for operational momentum.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 4. Phys-Valid Live Simulator */}
            {selectedSystem === 'phys-valid' && (
              <div className="sim-workbench" id="phys-valid-showcase">
                <div className="sim-header">
                  <div className="sim-title-group">
                    <span className="sim-badge">Deterministic Constraint Engine</span>
                    <span className="sim-env-label">High-Consequence Asset Screening</span>
                  </div>
                  <span className="sim-sub">Select boundary check:</span>
                </div>

                <div className="sim-phys-nav">
                  {[
                    { id: 'limits' as const, label: '01 Declared Limits' },
                    { id: 'verification' as const, label: '02 Constraint Gate' },
                    { id: 'governance' as const, label: '03 Escalation Threshold' },
                  ].map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      className={`sim-phys-btn ${activePhysGate === g.id ? 'active' : ''}`}
                      onClick={() => setActivePhysGate(g.id)}
                    >
                      {g.label}
                    </button>
                  ))}
                </div>

                <div className="sim-screen-card">
                  {activePhysGate === 'limits' && (
                    <div className="sim-phys-body">
                      <h4 className="sim-panel-title">Operating Asset Limits &amp; Tolerances</h4>
                      <p className="sim-panel-text">
                        Declares verified physical constraints, engineering tolerances, and thermal/mechanical thresholds. These bounds are absolute,
                        auditable, and immutable to generative hallucinations.
                      </p>
                      <div className="sim-telemetry-grid">
                        <div className="sim-tele-item">
                          <span className="sim-tele-val">P_max ≤ 180 bar</span>
                          <span className="sim-tele-lbl">Operating Pressure</span>
                        </div>
                        <div className="sim-tele-item">
                          <span className="sim-tele-val">T_range: -20..85°C</span>
                          <span className="sim-tele-lbl">Thermal Boundary</span>
                        </div>
                        <div className="sim-tele-item">
                          <span className="sim-tele-val">Rule: Deterministic</span>
                          <span className="sim-tele-lbl">Verification Mode</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activePhysGate === 'verification' && (
                    <div className="sim-phys-body">
                      <h4 className="sim-panel-title">Mathematical Constraint Evaluation</h4>
                      <p className="sim-panel-text">
                        Evaluates real-time sensor streams and operating assumptions against mathematical boundary gates. Flags violations immediately
                        with mathematical certainty.
                      </p>
                      <div className="sim-delib-finding" style={{ borderLeftColor: '#4ade80' }}>
                        <strong>Constraint Status: PASS</strong> · Current operating parameters fall safely within the certified elastic envelope.
                      </div>
                    </div>
                  )}

                  {activePhysGate === 'governance' && (
                    <div className="sim-phys-body">
                      <h4 className="sim-panel-title">Human Escalation &amp; Review Trigger</h4>
                      <p className="sim-panel-text">
                        When boundary gates detect anomalous operational trends approaching threshold limits, the system triggers auditable human escalation,
                        preserving engineering accountability.
                      </p>
                      <div className="sim-delib-finding">
                        <strong>Governance Protocol:</strong> Escalation event logged to immutable audit ledger; lead integrity engineer notified for manual sign-off.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
