'use client';

import React, { useState } from 'react';

const dimensions = [
  {
    key: 'assumptions',
    num: '01',
    name: 'Assumptions',
    inquiry: 'What is being taken for granted as true before execution begins?',
    examination:
      'Are operational readiness timelines assuming standard rollout cycles without factoring external partner dependency delays and compliance reviews?',
    finding: 'High sensitivity to partner approval turnarounds. Unbuffered critical paths pose deployment risks.',
  },
  {
    key: 'evidence',
    num: '02',
    name: 'Evidence',
    inquiry: 'What documented, auditable proof exists today?',
    examination:
      'Distinguish verified enterprise commitments and signed letters of intent from early exploratory inquiries and anecdotal pipeline signals.',
    finding: 'Documented commitments verified for core capabilities; regulated tier demand remains preliminary.',
  },
  {
    key: 'alternatives',
    num: '03',
    name: 'Alternatives',
    inquiry: 'What alternative pathways achieve capability without immediate organizational lock-in?',
    examination:
      'Evaluate whether a phased pilot deployment or accredited partner network can validate readiness before committing internal engineering bandwidth.',
    finding: 'Phased pilot deployment via audited partner network identified as a lower-friction validation route.',
  },
  {
    key: 'risks',
    num: '04',
    name: 'Risks',
    inquiry: 'If this choice encounters friction, is downside exposure containable or structural?',
    examination:
      'Assess financial downside, contractual penalty exposure, and whether delivery strain impairs core practice continuity.',
    finding: 'Direct cost exposure is containable; organizational reputation risk requires an explicit mitigation framework.',
  },
  {
    key: 'consequences',
    num: '05',
    name: 'Consequences',
    inquiry: 'What second-order consequences will this decision create across the operating horizon?',
    examination:
      'Identify which executive priorities will lose focus and how senior engineering attention will be diverted from existing commitments.',
    finding: 'Technical lead capacity diverted from core product roadmap continuity for at least two quarters.',
  },
];

export function ThinkingStudioExperience() {
  const [activeKey, setActiveKey] = useState('assumptions');
  const activeDim = dimensions.find((d) => d.key === activeKey) || dimensions[0];

  return (
    <section id="tv2-thinking" className="tv2-section" aria-label="AI Thinking Studio Deliberation Environment">
      <div className="tv2-container">
        <div className="tv2-header-block">
          <p className="tv2-eyebrow">
            <span className="tv2-eyebrow-dot" /> Disciplined Deliberation Architecture
          </p>
          <h2 className="tv2-heading-xl">AI Thinking Studio™: Thinking becoming structured.</h2>
          <p className="tv2-lead">
            The Studio slows down premature certainty. A consequential strategic question is deliberately
            decomposed across five reasoning dimensions before synthesizing into defensible judgment.
          </p>
        </div>

        {/* Structured Deliberation Workspace: Single Cohesive Reasoning Surface */}
        <div className="tv2-delib-surface">
          {/* Left Rail: Illustrative Question & Dimension Nav */}
          <div className="tv2-delib-control-rail">
            <div className="tv2-delib-inquiry-block">
              <div className="tv2-system-index">
                <span className="tv2-index-tag">INQUIRY</span>
                <span className="tv2-index-divider">/</span>
                <span className="tv2-eyebrow" style={{ margin: 0 }}>Strategic Stress-Test</span>
              </div>
              <h3 className="tv2-delib-question">
                &ldquo;Should we expand into the regulated enterprise tier this fiscal quarter?&rdquo;
              </h3>
              <p className="tv2-delib-sub">
                Human-led deliberation deconstructing high-stakes choices before capital and commitments are deployed.
              </p>
            </div>

            <div className="tv2-delib-dimension-track" role="tablist" aria-label="Deliberation inquiry dimensions">
              {dimensions.map((dim) => (
                <button
                  key={dim.key}
                  type="button"
                  className={`tv2-dim-row-btn ${activeKey === dim.key ? 'active' : ''}`}
                  onClick={() => setActiveKey(dim.key)}
                  role="tab"
                  aria-selected={activeKey === dim.key}
                >
                  <div className="tv2-dim-row-left">
                    <span className="tv2-dim-marker" />
                    <span className="tv2-dim-num">{dim.num}</span>
                    <span className="tv2-dim-label">{dim.name}</span>
                  </div>
                  <span className="tv2-dim-stage-tag">Stage {dim.num}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Main: Focused Reasoning Dimension */}
          <div className="tv2-delib-canvas">
            <div className="tv2-delib-canvas-header">
              <div className="tv2-delib-active-index">
                <span className="tv2-index-tag">STAGE {activeDim.num}</span>
                <span className="tv2-index-divider">/</span>
                <h3 className="tv2-dim-title">{activeDim.name}</h3>
              </div>
              <span className="tv2-dim-fraction">{activeDim.num} / 05 REASONING DIMENSIONS</span>
            </div>

            <div className="tv2-delib-flow">
              <div className="tv2-delib-phase">
                <span className="tv2-spec-key">INQUIRY FOCUS</span>
                <p className="tv2-stage-inquiry">{activeDim.inquiry}</p>
              </div>

              <div className="tv2-delib-phase">
                <span className="tv2-spec-key">CRITICAL EXAMINATION</span>
                <p className="tv2-stage-exam">{activeDim.examination}</p>
              </div>

              <div className="tv2-delib-finding-row">
                <span className="tv2-spec-key" style={{ color: 'var(--tv2-gold)' }}>EXAMINATION NOTE</span>
                <p className="tv2-finding-text">{activeDim.finding}</p>
              </div>
            </div>

            <div className="tv2-delib-synthesis">
              <span className="tv2-spec-key">DELIBERATION SYNTHESIS</span>
              <p className="tv2-synthesis-desc">
                The inquiry reframes the strategic choice from <em>&ldquo;Can we build it?&rdquo;</em> to{' '}
                <em>&ldquo;Can we defend the risk posture while protecting core focus?&rdquo;</em> Decisions become
                deliberate, explicit, and accountable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
