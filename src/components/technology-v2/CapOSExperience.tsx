'use client';

import React, { useState } from 'react';

const environments = [
  {
    id: 'provider',
    num: 'Context 01',
    role: 'Facilitated Cohorts',
    title: 'Provider',
    desc: 'Supports facilitated programs, advisory practices, client cohort delivery, and cross-organization development initiatives.',
    highlight: 'Unified facilitator coordination with client-sponsor transparency.',
  },
  {
    id: 'enterprise',
    num: 'Context 02',
    role: 'Internal Academies',
    title: 'Enterprise',
    desc: 'Supports internal academies, leadership pipelines, capability initiatives, and departmental transformation programs.',
    highlight: 'Long-term institutional memory aligned to corporate strategic objectives.',
  },
  {
    id: 'events',
    num: 'Context 03',
    role: 'Structured Journeys',
    title: 'Events',
    desc: 'Supports live participant journeys, intensive summit coordination, and real-time structured evidence capture.',
    highlight: 'Zero-friction participant artifact submission during live delivery.',
  },
];

const pipelineSteps = [
  {
    step: 1,
    num: '01',
    name: 'People & Participation',
    title: 'Coordinates participants, facilitators, and sponsors in one operational layer.',
    text: 'Reflects verifiable session attendance and active cohort engagement without bureaucratic friction or administrative spreadsheets. Captures presence and participation with audited accuracy.',
    telemetry: [
      { val: 'Verifiable', lbl: 'Participation Records' },
      { val: 'Direct', lbl: 'Facilitator Coordination' },
    ],
  },
  {
    step: 2,
    num: '02',
    name: 'Structured Evidence',
    title: 'Action deliverables and participant artifacts captured directly in context.',
    text: 'Completed deliverables, workshop artifacts, and assessment diagnostics are organized as verifiable proof of work rather than buried in static slide decks. Captures only what was actually produced.',
    telemetry: [
      { val: 'Artifacts', lbl: 'Work-Product Proof' },
      { val: 'Grounded', lbl: 'No Speculative Claims' },
    ],
  },
  {
    step: 3,
    num: '03',
    name: 'Follow-Through',
    title: 'Tracking application, milestone checkpoints, and supervisory check-ins.',
    text: 'Documents execution progress where established without inventing artificial causality. Tracks post-program implementation milestones and coaching touchpoints over the operating horizon.',
    telemetry: [
      { val: 'Documented', lbl: 'Milestone Progress' },
      { val: 'Traceable', lbl: 'Check-In History' },
    ],
  },
  {
    step: 4,
    num: '04',
    name: 'Intelligence & Memory',
    title: 'Aggregates structured program evidence into institutional capability memory.',
    text: 'Provides organizational sponsors with clear portfolio visibility based strictly on verified records, documented follow-through, and cumulative capability growth over time.',
    telemetry: [
      { val: 'Portfolio', lbl: 'Executive Visibility' },
      { val: 'Institutional', lbl: 'Structured Memory' },
    ],
  },
];

export function CapOSExperience() {
  const [activeContext, setActiveContext] = useState(0);
  const [activeStep, setActiveStep] = useState(1);

  const currentStepData = pipelineSteps.find((s) => s.step === activeStep) || pipelineSteps[0];

  return (
    <section id="tv2-capos" className="tv2-section tv2-capos-section" aria-label="CapabilityOS Operating Model">
      <div className="tv2-container">
        <div className="tv2-header-block">
          <p className="tv2-eyebrow">
            <span className="tv2-eyebrow-dot" /> Operating Infrastructure
          </p>
          <h2 className="tv2-heading-xl">CapOS™: Connecting people, evidence, and intelligence.</h2>
          <p className="tv2-lead">
            CapOS provides a shared operating foundation—connecting participants, structured evidence,
            and institutional memory across three distinct delivery environments.
          </p>
        </div>

        {/* 3 Distinct Operating Contexts Switcher: Architectural Track */}
        <div className="tv2-context-track" role="tablist" aria-label="Operating contexts">
          {environments.map((env, idx) => (
            <button
              key={env.id}
              type="button"
              className={`tv2-ctx-tab ${activeContext === idx ? 'active' : ''}`}
              onClick={() => setActiveContext(idx)}
              role="tab"
              aria-selected={activeContext === idx}
            >
              <div className="tv2-ctx-tab-header">
                <span className="tv2-ctx-num">{env.num}</span>
                <span className="tv2-ctx-role">{env.role}</span>
              </div>
              <h3 className="tv2-ctx-name">{env.title}</h3>
              <p className="tv2-ctx-desc">{env.desc}</p>
            </button>
          ))}
        </div>

        {/* Shared Core Pipeline: Open Architectural Spec */}
        <div className="tv2-pipeline-architecture">
          <div className="tv2-pipeline-header">
            <div className="tv2-pipeline-context-tag">
              <span className="tv2-index-tag">PIPELINE SPEC</span>
              <span className="tv2-index-divider">/</span>
              <span className="tv2-eyebrow" style={{ margin: 0 }}>
                Context: {environments[activeContext].title}
              </span>
            </div>
            <span className="tv2-pipeline-highlight">{environments[activeContext].highlight}</span>
          </div>

          <div className="tv2-pipeline-nav" role="tablist" aria-label="Core pipeline steps">
            {pipelineSteps.map((s) => (
              <button
                key={s.step}
                type="button"
                className={`tv2-pipe-btn ${activeStep === s.step ? 'active' : ''}`}
                onClick={() => setActiveStep(s.step)}
                role="tab"
                aria-selected={activeStep === s.step}
              >
                <div className="tv2-pipe-indicator">
                  <span className="tv2-pipe-num">{s.num}</span>
                  <span className="tv2-pipe-tick" />
                </div>
                <span className="tv2-pipe-name">{s.name}</span>
              </button>
            ))}
          </div>

          <div className="tv2-pipe-detail-stage">
            <div className="tv2-pipe-narrative">
              <span className="tv2-pipe-stage-label">PILLAR {currentStepData.num} ARCHITECTURE</span>
              <h3 className="tv2-pipe-title">{currentStepData.title}</h3>
              <p className="tv2-pipe-text">{currentStepData.text}</p>
            </div>

            <div className="tv2-telemetry-spec">
              <span className="tv2-spec-key">VERIFIED TELEMETRY</span>
              <div className="tv2-telemetry-row">
                {currentStepData.telemetry.map((t, i) => (
                  <div key={i} className="tv2-telemetry-item">
                    <span className="tv2-telemetry-val">{t.val}</span>
                    <span className="tv2-telemetry-lbl">{t.lbl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
