import React from 'react';

export function GlobalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <span
            aria-hidden="true"
            style={{
              display: 'block',
              width: '54px',
              height: '50px',
              flex: '0 0 54px',
              background: "url('/emg-mobius-hero.png') right center / auto 50px no-repeat",
            }}
          />
          <div>
            <div className="footer-name">
              Enable My <span>Growth</span>
            </div>
            <div className="footer-creds">
              Perspective changes what becomes possible.
              <br />
              Founded and led by Feras Banna.
            </div>
          </div>
        </div>

        <div className="footer-links-group">
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li>
                <a href="philosophy.html">Philosophy</a>
              </li>
              <li>
                <a href="conditions-before-conviction.html">Conditions Before Conviction</a>
              </li>
              <li>
                <a href="ideas.html">Insights &amp; Essays</a>
              </li>
              <li>
                <a href="about.html">About Feras</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Tech &amp; Platforms</h4>
            <ul>
              <li>
                <a href="tech.html">
                  <strong>Enable My Growth Tech</strong>
                </a>
              </li>
              <li>
                <a href="capability-os.html">CapabilityOS™</a>
              </li>
              <li>
                <a href="ai-thinking-studio.html">Thinking Studio™</a>
              </li>
              <li>
                <a href="contextual.html">Contextual™</a>
              </li>
              <li>
                <a href="phys-valid.html">Phys-Valid™</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Engage</h4>
            <ul>
              <li>
                <a href="work.html">Work with Feras</a>
              </li>
              <li>
                <a href="training.html">Workshops &amp; Facilitation</a>
              </li>
              <li>
                <a href="tech.html#custom-solutions">Custom Technology Solutions</a>
              </li>
              <li>
                <a href="contact.html">Begin a conversation</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>More</h4>
            <ul>
              <li>
                <a href="books.html">Books</a>
              </li>
              <li>
                <a href="resources.html">Resources</a>
              </li>
              <li>
                <a href="privacy.html">Privacy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copy">
        <span>&copy; {currentYear} Enable My Growth. All rights reserved.</span>
        <span>Perspective changes what becomes possible.</span>
      </div>
    </footer>
  );
}
