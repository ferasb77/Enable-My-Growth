'use client';

import React, { useState } from 'react';

type PortfolioFilter = 'all' | 'capos' | 'thinking-studio' | 'contextual' | 'phys-valid';

export function TechnologyPortfolio() {
  const [filter, setFilter] = useState<PortfolioFilter>('all');

  return (
    <section id="portfolio" className="tech-section" style={{ background: 'var(--surface)' }}>
      <div id="platforms" style={{ position: 'relative', top: '-80px' }} />
      <div id="ai-digital-solutions" style={{ position: 'relative', top: '-80px' }} />

      <div className="container">
        <div className="tech-section-header">
          <p className="eyebrow mb-xs">The Technology Ecosystem</p>
          <h2 className="tech-section-h2">Platforms built for high-consequence environments.</h2>
          <p className="tech-section-sub">
            Four specialized systems, each engineered to transform raw inputs into structured clarity across
            governance, leadership deliberation, assessor enablement, and capability delivery.
          </p>
        </div>

        {/* Ecosystem Filter & Satellite Focus Switcher */}
        <div className="ecosystem-nav-bar" role="tablist" aria-label="Ecosystem platform selector">
          <button
            type="button"
            className={'ecosystem-nav-btn' + (filter === 'all' ? ' active' : '')}
            onClick={() => setFilter('all')}
            role="tab"
            aria-selected={filter === 'all'}
          >
            <span className="eco-nav-dot" aria-hidden="true" />
            Complete Ecosystem (All 4)
          </button>
          <button
            type="button"
            className={'ecosystem-nav-btn' + (filter === 'capos' ? ' active' : '')}
            onClick={() => setFilter('capos')}
            role="tab"
            aria-selected={filter === 'capos'}
          >
            <span className="eco-nav-dot" aria-hidden="true" />
            CapabilityOS™
          </button>
          <button
            type="button"
            className={'ecosystem-nav-btn' + (filter === 'thinking-studio' ? ' active' : '')}
            onClick={() => setFilter('thinking-studio')}
            role="tab"
            aria-selected={filter === 'thinking-studio'}
          >
            <span className="eco-nav-dot" aria-hidden="true" />
            AI Thinking Studio™
          </button>
          <button
            type="button"
            className={'ecosystem-nav-btn' + (filter === 'contextual' ? ' active' : '')}
            onClick={() => setFilter('contextual')}
            role="tab"
            aria-selected={filter === 'contextual'}
          >
            <span className="eco-nav-dot" aria-hidden="true" />
            Contextual™
          </button>
          <button
            type="button"
            className={'ecosystem-nav-btn' + (filter === 'phys-valid' ? ' active' : '')}
            onClick={() => setFilter('phys-valid')}
            role="tab"
            aria-selected={filter === 'phys-valid'}
          >
            <span className="eco-nav-dot" aria-hidden="true" />
            Phys-Valid™
          </button>
        </div>

        {/* 2x2 Portfolio Grid */}
        <div className="portfolio-grid-2x2">
          {/* Product Card 1: CapabilityOS */}
          <article
            className={
              'tech-product-card spotlight-card' +
              (filter === 'all' || filter === 'capos' ? ' focused' : ' dimmed')
            }
            id="card-capos"
          >
            <div className="card-top">
              <div className="card-status-bar">
                <span className="tech-badge badge-operational">Active Platform</span>
                <div className="card-tags">
                  <span className="tech-meta-tag">Provider</span>
                  <span className="tech-meta-tag">Enterprise</span>
                  <span className="tech-meta-tag">Events</span>
                </div>
              </div>

              <h3 className="product-title">CapabilityOS™</h3>
              <p className="product-summary">People → Participation → Evidence → Intelligence</p>
              <p className="product-body">
                A purpose-built delivery infrastructure for capability organizations, enterprise academies, and events. Connects cohorts, facilitators, client stakeholders, and verifiable evidence in one unified operational layer.
              </p>
            </div>

            {/* Product Visual Motif */}
            <div className="product-visual-motif motif-capos">
              <div className="motif-header">
                <span className="motif-title">Operating Architecture</span>
                <span className="motif-tag">Shared Core</span>
              </div>
              <div className="motif-graphic-wrapper">
                <svg viewBox="0 0 380 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="motif-svg">
                  <line x1="30" y1="60" x2="350" y2="60" stroke="var(--border2)" strokeWidth="1" />
                  <circle cx="60" cy="60" r="16" fill="var(--surface2)" stroke="var(--gold)" strokeWidth="1.5" />
                  <text x="60" y="63" textAnchor="middle" fill="var(--gold)" fontSize="9" fontFamily="'JetBrains Mono', monospace">01</text>
                  <text x="60" y="95" textAnchor="middle" fill="var(--muted)" fontSize="8" fontFamily="'JetBrains Mono', monospace">People</text>

                  <line x1="76" y1="60" x2="134" y2="60" stroke="var(--gold)" strokeWidth="1.5" />

                  <circle cx="150" cy="60" r="16" fill="var(--surface2)" stroke="var(--gold)" strokeWidth="1.5" />
                  <text x="150" y="63" textAnchor="middle" fill="var(--gold)" fontSize="9" fontFamily="'JetBrains Mono', monospace">02</text>
                  <text x="150" y="95" textAnchor="middle" fill="var(--muted)" fontSize="8" fontFamily="'JetBrains Mono', monospace">Evidence</text>

                  <line x1="166" y1="60" x2="224" y2="60" stroke="var(--gold)" strokeWidth="1.5" />

                  <circle cx="240" cy="60" r="16" fill="var(--surface2)" stroke="var(--gold)" strokeWidth="1.5" />
                  <text x="240" y="63" textAnchor="middle" fill="var(--gold)" fontSize="9" fontFamily="'JetBrains Mono', monospace">03</text>
                  <text x="240" y="95" textAnchor="middle" fill="var(--muted)" fontSize="8" fontFamily="'JetBrains Mono', monospace">Follow-Through</text>

                  <line x1="256" y1="60" x2="314" y2="60" stroke="var(--gold)" strokeWidth="1.5" />

                  <circle cx="330" cy="60" r="16" fill="var(--surface2)" stroke="var(--gold-light)" strokeWidth="2" />
                  <text x="330" y="63" textAnchor="middle" fill="var(--gold-light)" fontSize="9" fontFamily="'JetBrains Mono', monospace">04</text>
                  <text x="330" y="95" textAnchor="middle" fill="var(--gold-light)" fontSize="8" fontFamily="'JetBrains Mono', monospace">Intelligence</text>
                </svg>
              </div>
            </div>

            <div className="product-highlights">
              <div className="highlight-item">
                <strong style={{ color: 'var(--text)' }}>Shared Core:</strong> Spans Provider, Enterprise, and Event environments with traceable participation and structured evidence.
              </div>
              <div className="highlight-item">
                <strong style={{ color: 'var(--text)' }}>Core Distinction:</strong> Not an LMS. An operating layer built around delivery realities, participant proof, and institutional memory.
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
          <article
            className={
              'tech-product-card spotlight-card' +
              (filter === 'all' || filter === 'thinking-studio' ? ' focused' : ' dimmed')
            }
            id="card-thinking-studio"
          >
            <div className="card-top">
              <div className="card-status-bar">
                <span className="tech-badge badge-available">Available · Pilot</span>
                <div className="card-tags">
                  <span className="tech-meta-tag">AI-Assisted</span>
                  <span className="tech-meta-tag">Human-Led</span>
                  <span className="tech-meta-tag">Deliberation</span>
                </div>
              </div>

              <h3 className="product-title">AI Thinking Studio™</h3>
              <p className="product-summary">Question → Structured reasoning → Better judgment</p>
              <p className="product-body">
                A disciplined environment for examining decisions before conclusions harden. Helps leaders and teams unpack assumptions, perspectives, and consequences.
              </p>
            </div>

            {/* Product Visual Motif */}
            <div className="product-visual-motif motif-thinking">
              <div className="motif-header">
                <span className="motif-title">Deliberation Architecture</span>
                <span className="motif-tag">Disciplined Inquiry</span>
              </div>
              <div className="motif-graphic-wrapper">
                <svg viewBox="0 0 380 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="motif-svg">
                  <path d="M30 60 H110" stroke="var(--gold-dim)" strokeWidth="1.5" />
                  <path d="M110 60 C150 60, 160 25, 200 25 H270" stroke="var(--gold)" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M110 60 C150 60, 160 60, 200 60 H270" stroke="var(--gold-light)" strokeWidth="1.5" />
                  <path d="M110 60 C150 60, 160 95, 200 95 H270" stroke="var(--gold-dim)" strokeWidth="1.5" strokeDasharray="3 3" />

                  <circle cx="30" cy="60" r="5" fill="var(--gold)" />
                  <circle cx="110" cy="60" r="4" fill="var(--surface3)" stroke="var(--gold)" strokeWidth="1.5" />
                  <circle cx="270" cy="25" r="4" fill="var(--surface3)" stroke="var(--gold-dim)" strokeWidth="1.5" />
                  <circle cx="270" cy="60" r="5" fill="var(--gold-light)" />
                  <circle cx="270" cy="95" r="4" fill="var(--surface3)" stroke="var(--gold-dim)" strokeWidth="1.5" />

                  <text x="30" y="80" fill="var(--muted)" fontSize="9" fontFamily="'JetBrains Mono', monospace">Challenge</text>
                  <text x="100" y="45" fill="var(--gold)" fontSize="9" fontFamily="'JetBrains Mono', monospace">Branch</text>
                  <text x="280" y="28" fill="var(--muted)" fontSize="9" fontFamily="'JetBrains Mono', monospace">Perspectives</text>
                  <text x="280" y="63" fill="var(--gold-light)" fontSize="9" fontFamily="'JetBrains Mono', monospace">Synthesis</text>
                  <text x="280" y="98" fill="var(--muted)" fontSize="9" fontFamily="'JetBrains Mono', monospace">Consequences</text>
                </svg>
              </div>
            </div>

            <div className="product-highlights">
              <div className="highlight-item">
                <strong style={{ color: 'var(--text)' }}>Primary Users:</strong> Senior executives, strategy teams, facilitators, workshop cohorts.
              </div>
              <div className="highlight-item">
                <strong style={{ color: 'var(--text)' }}>Core Distinction:</strong> Not a chatbot. AI supports disciplined inquiry and better examination rather than generating rushed answers.
              </div>
            </div>

            <div className="product-actions-footer">
              <a href="#thinking-studio-showcase" className="btn btn-outline btn-sm">
                Explore Deliberation Tree <span className="btn-arrow">↓</span>
              </a>
              <a href="ai-thinking-studio.html" className="btn-text">
                Studio Overview ↗
              </a>
            </div>
          </article>

          {/* Product Card 3: Contextual */}
          <article
            className={
              'tech-product-card spotlight-card' +
              (filter === 'all' || filter === 'contextual' ? ' focused' : ' dimmed')
            }
            id="card-contextual"
          >
            <div className="card-top">
              <div className="card-status-bar">
                <span className="tech-badge badge-available">Available · Approved Access</span>
                <div className="card-tags">
                  <span className="tech-meta-tag">Assessor Prep</span>
                  <span className="tech-meta-tag">Interpretation</span>
                  <span className="tech-meta-tag">Human Judgment</span>
                </div>
              </div>

              <h3 className="product-title">Contextual™</h3>
              <p className="product-summary">Evidence + Role Demands → Nuanced Assessment Debrief</p>
              <p className="product-body">
                A professional preparation environment for certified assessors who want to examine assessment evidence alongside real role demands and situational pressures before forming a debrief posture.
              </p>
            </div>

            <div className="product-visual-motif motif-contextual">
              <div className="motif-header">
                <span className="motif-title">Assessor Preparation Mapping</span>
                <span className="motif-tag">Non-Diagnostic</span>
              </div>
              <div className="motif-graphic-wrapper">
                <svg viewBox="0 0 380 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="motif-svg">
                  <line x1="40" y1="20" x2="340" y2="20" stroke="var(--border2)" strokeWidth="1" />
                  <line x1="40" y1="60" x2="340" y2="60" stroke="var(--border2)" strokeWidth="1" />
                  <line x1="40" y1="100" x2="340" y2="100" stroke="var(--border2)" strokeWidth="1" />
                  <rect x="110" y="25" width="160" height="70" fill="rgba(201,169,110,0.06)" stroke="var(--border-gold)" strokeWidth="1" strokeDasharray="4 4" rx="2" />
                  <circle cx="80" cy="60" r="4" fill="var(--muted)" />
                  <circle cx="160" cy="40" r="5" fill="var(--gold)" />
                  <circle cx="210" cy="80" r="5" fill="var(--gold-light)" />
                  <circle cx="300" cy="60" r="4" fill="var(--muted)" />
                  <line x1="160" y1="40" x2="210" y2="80" stroke="var(--gold)" strokeWidth="1.2" />

                  <text x="40" y="15" fill="var(--muted)" fontSize="8" fontFamily="'JetBrains Mono', monospace">Scale Evidence</text>
                  <text x="165" y="15" fill="var(--gold)" fontSize="8" fontFamily="'JetBrains Mono', monospace">Role Pressures</text>
                  <text x="260" y="15" fill="var(--muted)" fontSize="8" fontFamily="'JetBrains Mono', monospace">Debrief Posture</text>
                </svg>
              </div>
            </div>

            <div className="product-highlights">
              <div className="highlight-item">
                <strong style={{ color: 'var(--text)' }}>Primary Users:</strong> Certified leadership assessors, executive debriefers, coaches.
              </div>
              <div className="highlight-item">
                <strong style={{ color: 'var(--text)' }}>Core Distinction:</strong> Strictly non-diagnostic and non-automated. Supports human practitioner preparation rather than replacing the debrief conversation.
              </div>
            </div>

            <div className="product-actions-footer">
              <a href="contextual.html" className="btn btn-outline btn-sm">
                Explore Contextual <span className="btn-arrow">→</span>
              </a>
              <a href="contact.html?enquiry=Contextual+Practitioner+Access" className="btn-text">
                Inquire Access
              </a>
            </div>
          </article>

          {/* Product Card 4: Phys-Valid */}
          <article
            className={
              'tech-product-card spotlight-card' +
              (filter === 'all' || filter === 'phys-valid' ? ' focused' : ' dimmed')
            }
            id="card-phys-valid"
          >
            <div className="card-top">
              <div className="card-status-bar">
                <span className="tech-badge badge-pilot">Active Pilot</span>
                <div className="card-tags">
                  <span className="tech-meta-tag">Deterministic</span>
                  <span className="tech-meta-tag">Governance</span>
                  <span className="tech-meta-tag">Engineering</span>
                </div>
              </div>

              <h3 className="product-title">Phys-Valid™</h3>
              <p className="product-summary">Declared Conditions + Deterministic Rules → Auditable Bounds</p>
              <p className="product-body">
                A deterministic constraint-validation and operational governance screening platform for engineering and asset environments. Verifies that operating assumptions stay strictly within physical and regulatory limits.
              </p>
            </div>

            <div className="product-visual-motif motif-phys-valid">
              <div className="motif-header">
                <span className="motif-title">Constraint Verification Engine</span>
                <span className="motif-tag">Zero Probabilistic AI</span>
              </div>
              <div className="motif-graphic-wrapper">
                <svg viewBox="0 0 380 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="motif-svg">
                  <path d="M40 90 L110 90 L170 30 L280 30 L340 90" stroke="var(--border2)" strokeWidth="1" />
                  <rect x="110" y="20" width="170" height="80" fill="rgba(201,169,110,0.04)" stroke="var(--gold-dim)" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="110" y1="60" x2="280" y2="60" stroke="var(--gold)" strokeWidth="1.5" />
                  <circle cx="195" cy="60" r="6" fill="var(--surface)" stroke="var(--gold)" strokeWidth="2" />
                  <text x="195" y="64" textAnchor="middle" fill="var(--gold)" fontSize="9" fontFamily="'JetBrains Mono', monospace">✓</text>

                  <text x="50" y="110" fill="var(--muted)" fontSize="8" fontFamily="'JetBrains Mono', monospace">Declared Envelope</text>
                  <text x="165" y="110" fill="var(--gold)" fontSize="8" fontFamily="'JetBrains Mono', monospace">Deterministic Gate</text>
                  <text x="290" y="110" fill="var(--muted)" fontSize="8" fontFamily="'JetBrains Mono', monospace">Sign-off</text>
                </svg>
              </div>
            </div>

            <div className="product-highlights">
              <div className="highlight-item">
                <strong style={{ color: 'var(--text)' }}>Primary Users:</strong> Integrity engineers, operational risk teams, governance reviewers.
              </div>
              <div className="highlight-item">
                <strong style={{ color: 'var(--text)' }}>Core Distinction:</strong> Deterministic mathematical screening with auditable evidence and accountable human escalation; it does not replace licensed engineering standards.
              </div>
            </div>

            <div className="product-actions-footer">
              <a href="phys-valid.html" className="btn btn-outline btn-sm">
                Explore Phys-Valid <span className="btn-arrow">→</span>
              </a>
              <a href="contact.html?enquiry=Phys-Valid+Pilot" className="btn-text">
                Discuss Pilot Access
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
