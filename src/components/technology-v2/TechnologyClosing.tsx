import React from 'react';

export function TechnologyClosing() {
  return (
    <section id="tv2-contact" className="tv2-section tv2-closing" aria-label="Begin Conversation">
      <div className="tv2-container tv2-container-narrow">
        <div className="tv2-closing-content">
          <p className="tv2-eyebrow">
            <span className="tv2-eyebrow-dot" /> Better Judgment in Action
          </p>
          <h2 className="tv2-heading-xl">Perspective changes what becomes possible.</h2>
          <p className="tv2-lead" style={{ margin: '0 auto' }}>
            Begin a conversation about your technology requirements. Whether you are coordinating an enterprise capability academy,
            seeking a pilot of AI Thinking Studio, or exploring custom decision architecture, we are ready to listen.
          </p>

          <div className="tv2-closing-actions">
            <a href="contact.html?enquiry=Technology+Requirement" className="tv2-btn tv2-btn-gold">
              Discuss a Project <span>→</span>
            </a>
            <a href="capability-os.html" className="tv2-btn tv2-btn-outline">
              Explore CapOS™
            </a>
            <a href="ai-thinking-studio.html" className="tv2-btn tv2-btn-outline">
              Thinking Studio™ Briefing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
