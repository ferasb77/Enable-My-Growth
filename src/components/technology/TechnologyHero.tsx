import React from 'react';
import { PerspectiveNetwork } from './PerspectiveNetwork';

export function TechnologyHero() {
  return (
    <header className="tech-hero-redesign" role="banner" id="hero">
      <div className="tech-grid-overlay" aria-hidden="true" />
      <div className="tech-ambient-glow" aria-hidden="true" />

      <div className="container tech-hero-container">
        <div className="tech-hero-layout">
          {/* Hero Left: Strategic Content */}
          <div className="tech-hero-content">
            <div className="tech-hero-badge">
              <span className="tech-dot-pulse" />
              <span className="eyebrow" style={{ color: 'var(--gold)', letterSpacing: '0.22em' }}>
                Enable My Growth Technology
              </span>
              <span className="tech-meta-tag">Decision Systems &amp; Platforms</span>
            </div>

            <h1 className="tech-hero-h1">Technology designed around better human judgment.</h1>

            <p className="tech-hero-lead">
              We build technology that connects participation, evidence, context, and intelligence—helping
              organizations see more clearly and act with greater confidence.
            </p>

            <div className="tech-hero-actions">
              <a href="#portfolio" className="btn btn-gold tech-btn-hero">
                Explore the Portfolio <span className="btn-arrow">→</span>
              </a>
              <a href="contact.html?enquiry=Technology+Requirement" className="btn btn-outline tech-btn-outline">
                Discuss a Requirement
              </a>
            </div>

            {/* Section Jump Bar */}
            <nav className="tech-jump-bar" aria-label="Section shortcuts">
              <a href="#perspective-journey" className="tech-jump-link">
                Perspective
              </a>
              <a href="#portfolio" className="tech-jump-link">
                Portfolio
              </a>
              <a href="#capos-showcase" className="tech-jump-link">
                CapOS™
              </a>
              <a href="#thinking-studio-showcase" className="tech-jump-link">
                Thinking Studio™
              </a>
              <a href="#philosophy" className="tech-jump-link">
                Philosophy
              </a>
              <a href="#matrix" className="tech-jump-link">
                Matrix
              </a>
              <a href="#architecture" className="tech-jump-link">
                Enterprise Trust
              </a>
            </nav>
          </div>

          {/* Hero Right: Interactive Perspective Network Island */}
          <div className="tech-hero-network">
            <PerspectiveNetwork />
          </div>
        </div>
      </div>
    </header>
  );
}
