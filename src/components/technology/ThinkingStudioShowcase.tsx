'use client';

import React, { useState } from 'react';

type BranchKey = 'assumptions' | 'evidence' | 'alternatives' | 'risks' | 'implications';

const branches: Record<
  BranchKey,
  {
    num: string;
    title: string;
    body: string;
    verdict: string;
    lineIndex: number;
  }
> = {
  assumptions: {
    num: '01',
    title: 'Declared Assumptions',
    body: 'What is being taken for granted as true? Are operational readiness timelines assuming standard rollout cycles without external dependency delays?',
    verdict: 'Examination note: High sensitivity to partner approval turnarounds.',
    lineIndex: 1,
  },
  evidence: {
    num: '02',
    title: 'Available Evidence',
    body: 'What documented proof exists today? Distinguish between early exploratory interest and formal enterprise commitments.',
    verdict: 'Examination note: Documented commitments verified; pipeline inquiries remain exploratory.',
    lineIndex: 2,
  },
  alternatives: {
    num: '03',
    title: 'Viable Alternatives',
    body: 'What alternative pathways exist to establish capability without taking on immediate full organizational commitment?',
    verdict: 'Examination note: Phased pilot deployment via audited partner network identified.',
    lineIndex: 3,
  },
  risks: {
    num: '04',
    title: 'Asymmetric Risks',
    body: 'If this choice encounters friction, is the downside containable or structural? Does delivery failure impact core practice focus?',
    verdict: 'Examination note: Containable cost exposure; reputation impact requires explicit mitigation.',
    lineIndex: 4,
  },
  implications: {
    num: '05',
    title: 'Second-Order Consequences',
    body: 'What team capacity will this commitment absorb over the horizon? Which existing priorities will lose leadership focus?',
    verdict: 'Examination note: Technical lead attention diverted from core product continuity.',
    lineIndex: 5,
  },
};

export function ThinkingStudioShowcase() {
  const [activeBranch, setActiveBranch] = useState<BranchKey>('assumptions');

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
            The Studio slows down premature certainty. A consequential question branches into its component
            assumptions, evidence, alternatives, risks, and implications before synthesizing into defensible judgment.
          </p>
        </div>

        <div className="deliberation-studio-card spotlight-card" id="thinking-tree-container">
          <div className="deliberation-topbar">
            <div className="deliberation-meta">
              <span className="delib-dot" />
              <span className="delib-label">Illustrative Scenario · Deliberation Tree</span>
            </div>
            <div className="deliberation-actions">
              {(Object.keys(branches) as BranchKey[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  className={'delib-branch-btn' + (activeBranch === key ? ' active' : '')}
                  onClick={() => setActiveBranch(key)}
                >
                  {branches[key].num} {branches[key].title}
                </button>
              ))}
            </div>
          </div>

          <div className="deliberation-layout">
            {/* Root Inquiry */}
            <div className="inquiry-root-card">
              <span className="inquiry-tag">Illustrative Question</span>
              <h3 className="inquiry-question">
                &ldquo;Should we expand into the regulated enterprise tier this fiscal quarter?&rdquo;
              </h3>
              <p className="inquiry-hint">Demonstrating structured inquiry before reaching premature consensus.</p>
            </div>

            {/* Visual Branching SVG Tree */}
            <div className="inquiry-tree-graphic">
              <svg viewBox="0 0 100 240" preserveAspectRatio="none" className="tree-svg-connectors">
                <path
                  className={'tree-branch-line' + (activeBranch === 'assumptions' ? ' active' : '')}
                  d="M10 120 C 50 120, 50 30, 90 30"
                />
                <path
                  className={'tree-branch-line' + (activeBranch === 'evidence' ? ' active' : '')}
                  d="M10 120 C 50 120, 50 75, 90 75"
                />
                <path
                  className={'tree-branch-line' + (activeBranch === 'alternatives' ? ' active' : '')}
                  d="M10 120 C 50 120, 50 120, 90 120"
                />
                <path
                  className={'tree-branch-line' + (activeBranch === 'risks' ? ' active' : '')}
                  d="M10 120 C 50 120, 50 165, 90 165"
                />
                <path
                  className={'tree-branch-line' + (activeBranch === 'implications' ? ' active' : '')}
                  d="M10 120 C 50 120, 50 210, 90 210"
                />
              </svg>
            </div>

            {/* Deliberation Branch Breakdown Details */}
            <div className="deliberation-branches-container">
              {(Object.keys(branches) as BranchKey[]).map((key) => {
                const b = branches[key];
                return (
                  <div
                    key={key}
                    className={'branch-node-card' + (activeBranch === key ? ' active' : '')}
                    onClick={() => setActiveBranch(key)}
                  >
                    <div className="branch-card-header">
                      <span className="branch-idx">{b.num}</span>
                      <h4 className="branch-title">{b.title}</h4>
                    </div>
                    <p className="branch-body">{b.body}</p>
                    <div className="branch-verdict">{b.verdict}</div>
                  </div>
                );
              })}
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
