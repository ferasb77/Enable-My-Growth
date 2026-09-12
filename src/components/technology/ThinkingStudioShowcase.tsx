'use client';

import React, { useState } from 'react';

type BranchKey = 'assumptions' | 'evidence' | 'alternatives' | 'risks' | 'implications';

const branches: Record<
  BranchKey,
  {
    num: string;
    stageLabel: string;
    inquiry: string;
    examination: string;
    finding: string;
  }
> = {
  assumptions: {
    num: '01',
    stageLabel: 'Assumptions',
    inquiry: 'What is being taken for granted as true before execution begins?',
    examination:
      'Are operational readiness timelines assuming standard rollout cycles without factoring external partner dependency delays and compliance reviews?',
    finding: 'High sensitivity to partner approval turnarounds. Unbuffered critical paths pose deployment risks.',
  },
  evidence: {
    num: '02',
    stageLabel: 'Evidence',
    inquiry: 'What documented, auditable proof exists today?',
    examination:
      'Distinguish verified enterprise commitments and signed letters of intent from early exploratory inquiries and anecdotal pipeline signals.',
    finding: 'Documented commitments verified for core capabilities; regulated tier demand remains preliminary.',
  },
  alternatives: {
    num: '03',
    stageLabel: 'Alternatives',
    inquiry: 'What alternative pathways achieve capability without immediate organizational lock-in?',
    examination:
      'Evaluate whether a phased pilot deployment or accredited partner network can validate readiness before committing internal engineering bandwidth.',
    finding: 'Phased pilot deployment via audited partner network identified as a lower-friction validation route.',
  },
  risks: {
    num: '04',
    stageLabel: 'Risks',
    inquiry: 'If this choice encounters friction, is downside exposure containable or structural?',
    examination:
      'Assess financial downside, contractual penalty exposure, and whether delivery strain impairs core practice continuity.',
    finding: 'Direct cost exposure is containable; organizational reputation risk requires an explicit mitigation framework.',
  },
  implications: {
    num: '05',
    stageLabel: 'Consequences',
    inquiry: 'What second-order consequences will this decision create across the operating horizon?',
    examination:
      'Identify which executive priorities will lose focus and how senior engineering attention will be diverted from existing commitments.',
    finding: 'Technical lead capacity diverted from core product roadmap continuity for at least two quarters.',
  },
};

const branchOrder: BranchKey[] = ['assumptions', 'evidence', 'alternatives', 'risks', 'implications'];

export function ThinkingStudioShowcase() {
  const [activeBranch, setActiveBranch] = useState<BranchKey>('assumptions');
  const active = branches[activeBranch];

  return (
    <section
      id="thinking-studio-showcase"
      className="tech-section thinking-studio-deep-dive"
      style={{ background: 'var(--surface)' }}
    >
      <div className="container">
        <div className="tech-section-header">
          <p className="eyebrow mb-xs" style={{ color: 'var(--gold)' }}>
            Disciplined Deliberation Architecture
          </p>
          <h2 className="tech-section-h2">AI Thinking Studio™: Thinking becoming structured.</h2>
          <p className="tech-section-sub">
            The Studio slows down premature certainty. A consequential question is deliberately decomposed across five
            reasoning dimensions before synthesizing into defensible judgment.
          </p>
        </div>

        <div className="deliberation-studio-card spotlight-card" id="thinking-tree-container">
          {/* Top Control Bar with 5-Stage Stepper Navigation */}
          <div className="deliberation-topbar">
            <div className="deliberation-meta">
              <span className="delib-dot" />
              <span className="delib-label">Disciplined Inquiry Workspace</span>
            </div>
            <div className="deliberation-actions" aria-label="Deliberation stages">
              {branchOrder.map((key) => {
                const b = branches[key];
                return (
                  <button
                    key={key}
                    type="button"
                    className={'delib-branch-btn' + (activeBranch === key ? ' active' : '')}
                    onClick={() => setActiveBranch(key)}
                  >
                    <span className="delib-btn-num">{b.num}</span>
                    <span>{b.stageLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Focused Deliberation Workspace: Question Anchor + Active Reasoning Stage */}
          <div className="deliberation-workspace-grid">
            {/* Left Column: Consequential Question Anchor */}
            <div className="deliberation-anchor-card">
              <span className="inquiry-tag">Illustrative Question</span>
              <h3 className="inquiry-question">
                &ldquo;Should we expand into the regulated enterprise tier this fiscal quarter?&rdquo;
              </h3>
              <p className="inquiry-hint">
                Human-led deliberation deconstructing high-stakes strategic choices before commitments are made.
              </p>
              <div className="inquiry-meta-row">
                <span className="inquiry-status-pill">Active Inquiry</span>
                <span className="inquiry-stage-count">Stage {active.num} of 05</span>
              </div>
            </div>

            {/* Right Column: Active Stage In-Depth Focus */}
            <div className="deliberation-stage-card" key={activeBranch}>
              <div className="stage-card-header">
                <div className="stage-card-badge">
                  <span className="stage-badge-num">{active.num}</span>
                  <span className="stage-badge-label">Stage: {active.stageLabel}</span>
                </div>
                <div className="stage-nav-controls">
                  {branchOrder.map((key) => (
                    <button
                      key={key}
                      type="button"
                      className={'stage-dot-btn' + (activeBranch === key ? ' active' : '')}
                      onClick={() => setActiveBranch(key)}
                      aria-label={`Switch to ${branches[key].stageLabel}`}
                    />
                  ))}
                </div>
              </div>

              {/* Inquiry Question */}
              <div className="stage-block stage-inquiry-block">
                <span className="stage-subhead">Inquiry Focus</span>
                <p className="stage-inquiry-text">{active.inquiry}</p>
              </div>

              {/* What is Being Examined */}
              <div className="stage-block stage-examination-block">
                <span className="stage-subhead">Critical Examination</span>
                <p className="stage-examination-text">{active.examination}</p>
              </div>

              {/* Auditable Finding / Note */}
              <div className="stage-finding-strip">
                <span className="stage-finding-label">Examination Note</span>
                <p className="stage-finding-text">{active.finding}</p>
              </div>
            </div>
          </div>

          {/* Structured Judgment Resolution Strip */}
          <div className="deliberation-convergence">
            <div className="convergence-badge">Deliberation Synthesis</div>
            <div className="convergence-content">
              <strong>Structured Judgment:</strong> The question is reframed from <em>&ldquo;Can we build it?&rdquo;</em> to{' '}
              <em>&ldquo;Can we defend the risk posture while protecting core focus?&rdquo;</em> The decision becomes
              deliberate, explicit, and accountable.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
