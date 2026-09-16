'use client';

import React, { useState } from 'react';

const challenges = [
  {
    id: 'capos',
    challenge: 'Fragmented capability delivery, uncoordinated cohort execution, and lost operational follow-through.',
    product: 'CapOS™',
    badge: 'Operational Infrastructure',
    users: 'Capability Providers · Enterprise Academies · Event Organizers',
    outcome: 'Coordinated execution, verifiable participant records, and structured institutional memory across programs.',
    link: 'capability-os.html',
  },
  {
    id: 'thinking-studio',
    challenge: 'Premature executive consensus, unexamined strategic assumptions, and unvetted risk exposure before commitments are made.',
    product: 'AI Thinking Studio™',
    badge: 'Deliberation Environment',
    users: 'Executive Teams · Strategy Groups · Facilitators',
    outcome: 'Disciplined deliberation, structured reasoning trees, and defensible decision rationale before capital deployment.',
    link: 'ai-thinking-studio.html',
  },
  {
    id: 'contextual',
    challenge: 'Uncontextualized psychometric data, generic debrief reports, and evaluations isolated from actual operating pressures.',
    product: 'Contextual™',
    badge: 'Assessment Debrief',
    users: 'Certified Leadership Assessors · Executive Coaches',
    outcome: 'Nuanced debrief posture placing psychometric evidence alongside real role demands and operating pressures.',
    link: 'contextual.html',
  },
  {
    id: 'phys-valid',
    challenge: 'Unverified assumptions entering safety-critical or high-consequence operational models.',
    product: 'Phys-Valid™',
    badge: 'Deterministic Verification',
    users: 'Integrity Engineers · Operational Risk Teams',
    outcome: 'Deterministic mathematical constraint evaluation, physical limit validation, and auditable admissibility gates.',
    link: 'phys-valid.html',
  },
];

export function DecisionRouter() {
  const [selectedId, setSelectedId] = useState('capos');
  const activeSolution = challenges.find((c) => c.id === selectedId) || challenges[0];

  return (
    <section id="tv2-decisions" className="tv2-section" aria-label="Decision Router">
      <div className="tv2-container">
        <div className="tv2-header-block">
          <p className="tv2-eyebrow">
            <span className="tv2-eyebrow-dot" /> Decision Alignment Router
          </p>
          <h2 className="tv2-heading-xl">What challenge are you trying to solve?</h2>
          <p className="tv2-lead">
            Select your organization&apos;s primary operational or strategic friction to surface the matched Enable My Growth technology system and defensible outcome.
          </p>
        </div>

        <div className="tv2-router-flow-matrix">
          {/* Challenge Selector Choices: Left Technical Selection Rail */}
          <div className="tv2-router-selector-rail" role="tablist" aria-label="Operating challenges">
            <span className="tv2-spec-key" style={{ marginBottom: '0.5rem' }}>IDENTIFIED FRICTION PATTERN</span>
            {challenges.map((c, idx) => (
              <button
                key={c.id}
                type="button"
                className={`tv2-router-select-row ${selectedId === c.id ? 'active' : ''}`}
                onClick={() => setSelectedId(c.id)}
                role="tab"
                aria-selected={selectedId === c.id}
              >
                <div className="tv2-router-row-marker">
                  <span className="tv2-router-tick" />
                  <span className="tv2-index-tag">0{idx + 1}</span>
                </div>
                <p className="tv2-router-challenge-text">{c.challenge}</p>
              </button>
            ))}
          </div>

          {/* Solution & Outcome Reveal: Right Technical Output Specification */}
          <div className="tv2-router-spec-panel">
            <div className="tv2-router-spec-header">
              <div className="tv2-system-index">
                <span className="tv2-index-tag">MATCHED PLATFORM</span>
                <span className="tv2-index-divider">/</span>
                <span className="tv2-eyebrow" style={{ margin: 0 }}>{activeSolution.badge}</span>
              </div>
              <h3 className="tv2-sol-system">{activeSolution.product}</h3>
            </div>

            <div className="tv2-router-spec-body">
              <div className="tv2-router-spec-row">
                <span className="tv2-spec-key">DESIGNED USERS</span>
                <p className="tv2-sol-users-text">{activeSolution.users}</p>
              </div>

              <div className="tv2-router-spec-row">
                <span className="tv2-spec-key">CONSEQUENTIAL OUTCOME</span>
                <p className="tv2-sol-outcome-text">{activeSolution.outcome}</p>
              </div>
            </div>

            <div className="tv2-router-spec-footer">
              <a href={activeSolution.link} className="tv2-btn tv2-btn-gold">
                Explore {activeSolution.product} <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
