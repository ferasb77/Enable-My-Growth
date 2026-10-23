import React from 'react';
import { GlobalNav } from '../global/GlobalNav';

const workflow = [
  ['01', 'Detect', 'Identify document pages and estimate the capture.'],
  ['02', 'Capture', 'Capture the pages in sequence from the active tab.'],
  ['03', 'Assemble', 'Bring the captured pages together as one document.'],
  ['04', 'Edit / Redact', 'Review, annotate, and redact before export.'],
  ['05', 'Export', 'Create a PDF or image output for the finished document.'],
];

const freeBenefits = ['Unlimited ordinary webpage capture', 'Visible-area capture', 'Selected-area capture', 'Full scrolling capture', 'PNG export', 'Clipboard copy', 'Basic crop', 'View documents created during trial', 'No login required', 'No watermark', 'No usage quotas'];
const personalBenefits = ['Automatic document/page detection', 'Virtualized or next-page capture', 'Page ranges', 'Scrollable/element capture', 'Advanced paper/layout options', 'Searchable PDFs and links', 'WebP export', 'Document assembly', 'Advanced editing', 'Annotations', 'Pixelation / secure redaction', 'Extended history and recovery', 'Advanced settings'];

export function AutoPaginatePage() {
  return (
    <div className="ap-page">
      <GlobalNav currentPath="autopaginate" />
      <main id="main-content">
        <section className="ap-hero" aria-labelledby="autopaginate-title">
          <div className="ap-container ap-hero-grid">
            <div>
              <div className="ap-brand-lockup"><img src="/assets/autopaginate/store-icon-512.png" alt="AutoPaginate icon" width="64" height="64" /><span>AutoPaginate 1.6</span></div>
              <p className="ap-eyebrow">Enable My Growth / Chrome extension</p>
              <h1 id="autopaginate-title">Auto<span>Paginate</span></h1>
              <p className="ap-hero-title">Capture the document, not just the webpage.</p>
              <p className="ap-lead">AutoPaginate detects multi-page web documents, captures them in sequence, assembles them correctly, and lets you review, redact, and export them as clean PDFs or images.</p>
              <p className="ap-positioning-line">Free captures webpages. Personal understands documents.</p>
              <div className="ap-actions">
                <a className="ap-button ap-button-primary" href="https://chromewebstore.google.com/detail/autopaginate/aelphfappkhhegholojnkfmpgkehmkic" target="_blank" rel="noopener noreferrer">Add to Chrome</a>
                <a className="ap-button ap-button-quiet" href="/autopaginate/support">Get Support <span aria-hidden="true">→</span></a>
              </div>
            </div>
            <div className="ap-hero-art"><img src="/assets/autopaginate/marquee-promo-tile-1400x560.png" alt="AutoPaginate product artwork showing page capture and browser support" width="1400" height="560" /></div>
          </div>
        </section>

        <section className="ap-section ap-trust ap-trust-early" aria-labelledby="trust-title"><div className="ap-container ap-trust-inner"><div><p className="ap-eyebrow">Local-first by design</p><h2 id="trust-title">Your documents stay on your device.</h2></div><p>AutoPaginate processes captures locally in your browser. Captured pages are not uploaded to Enable My Growth or a third-party service as part of the core capture workflow. <a href="/autopaginate/privacy">Read the Privacy Policy</a>.</p></div></section>

        <section className="ap-section ap-gallery" aria-labelledby="gallery-title">
          <div className="ap-container"><div className="ap-section-head"><div><p className="ap-eyebrow">Product walkthrough</p><h2 id="gallery-title">See AutoPaginate in action.</h2></div><p className="ap-gallery-intro">A closer look at the capture, editing, redaction, export, and browser-support surfaces in the production extension.</p></div>
            <div className="ap-gallery-grid">
              <figure><img src="/assets/autopaginate/screenshot-1-smart-capture.png" alt="AutoPaginate Smart Capture panel detecting an article and estimating pages" width="1280" height="800" loading="lazy" /><figcaption><b>01 / Smart Capture</b><span>Detects article content, estimates pages, and offers clean-article or entire-page capture.</span></figcaption></figure>
              <figure><img src="/assets/autopaginate/screenshot-2-document-editor.png" alt="AutoPaginate document editor showing three pages and page properties" width="1280" height="800" loading="lazy" /><figcaption><b>02 / Document Editor</b><span>Review a multi-page document with page thumbnails, properties, and export controls.</span></figcaption></figure>
              <figure><img src="/assets/autopaginate/screenshot-3-pii-redaction.png" alt="AutoPaginate redaction mode showing redacted fields and sanitization checks" width="1280" height="800" loading="lazy" /><figcaption><b>03 / PII Redaction</b><span>Redaction mode shows sanitized fields alongside checks for pixels, text tokens, and hyperlinks.</span></figcaption></figure>
              <figure><img src="/assets/autopaginate/screenshot-4-export-formats.png" alt="AutoPaginate export screen showing PDF, PNG, JPG, and WebP options" width="1280" height="800" loading="lazy" /><figcaption><b>04 / Export Formats</b><span>Choose from PDF, PNG, JPG, or WebP output formats in the export surface.</span></figcaption></figure>
              <figure><img src="/assets/autopaginate/screenshot-5-cross-browser.png" alt="AutoPaginate compatibility screen showing support across multiple desktop browsers" width="1280" height="800" loading="lazy" /><figcaption><b>05 / Browser compatibility</b><span>Shows the extension’s compatibility surfaces across multiple desktop browsers.</span></figcaption></figure>
            </div>
          </div>
        </section>

        <section className="ap-section" aria-labelledby="workflow-title">
          <div className="ap-container"><div className="ap-section-head"><div><p className="ap-eyebrow">Document workflow</p><h2 id="workflow-title">AutoPaginate understands documents.</h2></div><p className="ap-gallery-intro">A capture workflow built around the document you want to keep, review, and use.</p></div>
            <div className="ap-feature-grid ap-workflow-grid">{workflow.map(([number, title, text]) => <article className="ap-feature" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
          </div>
        </section>

        <section className="ap-section ap-how" aria-labelledby="how-title">
          <div className="ap-container"><p className="ap-eyebrow">How it works</p><h2 id="how-title">From page to finished document.</h2>
            <ol className="ap-steps">
              <li><b>01</b><p>Open the document or paginated content you want to capture.</p></li>
              <li><b>02</b><p>Launch AutoPaginate from Chrome.</p></li>
              <li><b>03</b><p>Let AutoPaginate detect and capture the pages.</p></li>
              <li><b>04</b><p>Review and annotate the captured content.</p></li>
              <li><b>05</b><p>Export the finished document as PDF or images.</p></li>
            </ol>
          </div>
        </section>

        <section className="ap-section ap-difference" aria-labelledby="difference-title"><div className="ap-container ap-split"><div><p className="ap-eyebrow">The document difference</p><h2 id="difference-title">More than a long screenshot.</h2></div><p>Traditional screenshot tools capture what is on the page. AutoPaginate is designed to understand document structure, capture pages in sequence, preserve the workflow, and produce a usable document.</p></div></section>

        <section className="ap-section ap-usecases" aria-labelledby="usecases-title"><div className="ap-container ap-split"><div><p className="ap-eyebrow">Built for document-heavy work</p><h2 id="usecases-title">Built for real documents.</h2></div><ul><li>Multi-page reports</li><li>Research and reference material</li><li>Online manuals</li><li>Tender and procurement documents</li><li>Legal or compliance records</li><li>Web-hosted document viewers</li><li>Long paginated content that would otherwise require repeated screenshots</li></ul></div></section>

        <section className="ap-section ap-pricing" aria-labelledby="pricing-title"><div className="ap-container"><div className="ap-section-head"><div><p className="ap-eyebrow">Choose your workflow</p><h2 id="pricing-title">Free captures webpages. Personal understands documents.</h2></div><p className="ap-gallery-intro">Start with everyday capture. Upgrade when the work calls for document-aware tools.</p></div><div className="ap-plan-grid"><article className="ap-plan"><p className="ap-plan-label">Free</p><h3>Everyday webpage capture</h3><ul>{freeBenefits.map(item => <li key={item}>{item}</li>)}</ul></article><article className="ap-plan ap-plan-featured"><p className="ap-plan-label">Personal</p><h3>Document capture and reconstruction</h3><p className="ap-plan-price">$12/year <span>or</span> $29 lifetime</p><p className="ap-plan-note">7-day Personal trial · No card required · Coming soon</p><ul>{personalBenefits.map(item => <li key={item}>{item}</li>)}</ul></article></div></div></section>

        <section className="ap-cta" id="get-autopaginate" aria-labelledby="get-title"><div className="ap-container"><p className="ap-eyebrow">AutoPaginate</p><h2 id="get-title">Ready when you need the whole document.</h2><p>AutoPaginate is available now in the Chrome Web Store.</p><a className="ap-button ap-button-primary" href="https://chromewebstore.google.com/detail/autopaginate/aelphfappkhhegholojnkfmpgkehmkic" target="_blank" rel="noopener noreferrer">Add to Chrome</a></div></section>
        <section className="ap-support-strip"><div className="ap-container"><div><h2>Need help with AutoPaginate?</h2><p>Find support for page capture, exports, permissions, bug reports, and feature requests.</p></div><a className="ap-button ap-button-quiet" href="/autopaginate/support">AutoPaginate Support <span aria-hidden="true">→</span></a></div></section>
      </main>
      <AutoPaginateFooter />
    </div>
  );
}

export function AutoPaginateSupportPage() {
  const topics = ['AutoPaginate is not detecting all pages', 'A page is not being captured correctly', 'PDF export issues', 'Image export issues', 'Annotation or editing questions', 'Extension permissions', 'Bug reports', 'Feature requests'];
  return <div className="ap-page"><GlobalNav currentPath="autopaginate" /><main id="main-content">
    <section className="ap-support-hero"><div className="ap-container"><div className="ap-title-lockup"><img src="/assets/autopaginate/store-icon-512.png" alt="AutoPaginate icon" width="72" height="72" /><div><p className="ap-eyebrow">Enable My Growth / Chrome extension</p><h1>AutoPaginate <span>Support</span></h1></div></div><p>Need help using AutoPaginate? We’re here to help.</p><a className="ap-button ap-button-quiet" href="/autopaginate">← Back to AutoPaginate</a></div></section>
    <section className="ap-section"><div className="ap-container"><p className="ap-eyebrow">Support topics</p><h2>What can we help with?</h2><ul className="ap-topic-list">{topics.map((topic, index) => <li key={topic}><span>{String(index + 1).padStart(2, '0')}</span>{topic}</li>)}</ul></div></section>
    <section className="ap-section ap-before"><div className="ap-container ap-split"><div><p className="ap-eyebrow">Before contacting support</p><h2>Please include enough context to help us reproduce the issue.</h2></div><ul><li>The website where the issue occurred</li><li>Your Chrome version</li><li>Your AutoPaginate version</li><li>A short description of what happened</li><li>A screenshot, if relevant</li></ul></div></section>
    <section className="ap-cta"><div className="ap-container"><p className="ap-eyebrow">Contact</p><h2>For support, bug reports, or feature requests, contact:</h2><a className="ap-email" href="mailto:feras@enablemygrowth.com">feras@enablemygrowth.com</a><p>AutoPaginate is developed by Enable My Growth.</p></div></section>
  </main><AutoPaginateFooter /></div>;
}

export function AutoPaginatePrivacyPage() {
  return <div className="ap-page"><GlobalNav currentPath="autopaginate" /><main id="main-content">
    <section className="ap-support-hero" aria-labelledby="privacy-title"><div className="ap-container"><div className="ap-title-lockup"><img src="/assets/autopaginate/store-icon-512.png" alt="AutoPaginate icon" width="72" height="72" /><div><p className="ap-eyebrow">Enable My Growth / AutoPaginate</p><h1 id="privacy-title">Privacy Policy for <span>AutoPaginate</span></h1></div></div><p>How AutoPaginate handles information when you use the Chrome extension.</p><p className="ap-policy-effective">Effective date: October 2026 · Extension version: 1.7.0</p><a className="ap-button ap-button-quiet" href="/autopaginate">← Back to AutoPaginate</a></div></section>
    <section className="ap-section ap-policy"><div className="ap-container">
      <p className="ap-eyebrow">The short version</p><h2>Your captures stay on your device.</h2>
      <p>AutoPaginate separates local document processing from optional online account services. It only communicates with our account services when you choose to sign in, activate a trial, verify a Personal license, or begin a purchase.</p>
      <div className="ap-policy-grid">
        <article><h3>1. Privacy-first design</h3><p>Core webpage and document capture can be used without an AutoPaginate account. Optional Google authentication is required only for features such as Personal trial activation, Personal entitlement verification, and paid Personal access.</p></article>
        <article><h3>2. Local document processing</h3><p>Document and webpage content is processed locally on your device. The following are not uploaded to AutoPaginate, Enable My Growth, Supabase, Paddle, or other servers:</p><ul><li>Webpage screenshots, captured page images, captured images, and webpage layout information</li><li>DOM/webpage text used during capture and OCR/searchable text information</li><li>Reference Index links, annotations, redactions, pixelation, and generated PDFs or PNG/JPEG files</li><li>Exported documents, page titles, and active-page URLs used as capture metadata</li></ul></article>
        <article><h3>Active pages and Reference Index</h3><p>When you initiate or manage a capture, AutoPaginate may read the URL and title of the active page and store that metadata with your local capture. It does not read your Chrome browsing history, monitor browsing in the background, track navigation across websites, or transmit captured URLs or page titles to AutoPaginate servers.</p><p>AutoPaginate can extract links contained in a captured page or document for your local Reference Index. It does not automatically visit, crawl, or transmit those linked destinations.</p></article>
        <article><h3>3. Optional Google Sign-In &amp; account data</h3><p>AutoPaginate Free can be used without signing in. If you choose Google Sign-In for Personal or trial access, AutoPaginate uses Google OAuth and Supabase Auth. The account information processed may include your Google account email address, Supabase user UUID, and authentication/session information. Authentication begins only after your action; AutoPaginate does not silently authenticate you in the background.</p></article>
        <article><h3>4. Authentication token storage</h3><p>Authentication credentials, including a Supabase access token, refresh token, and expiration information, are stored in session-scoped Chrome extension storage during the active browser session. They are cleared when the browser session ends and when you sign out. Non-authoritative account display information, such as an email address or user identifier, may be stored in extension storage restricted to trusted extension contexts for interface purposes. Cached identity or entitlement information cannot independently authorize Personal access; server verification remains authoritative.</p></article>
        <article><h3>5. Personal trial &amp; entitlement verification</h3><p>Signed-in users communicate with AutoPaginate&apos;s Supabase backend to check current entitlement, start the 7-day Personal trial, confirm Personal Annual or Lifetime access, and initiate checkout. These requests use authentication credentials and account identifiers. They never include webpage screenshots, captured text, document content, captured URLs, Reference Index links, or exported PDFs.</p><p>The Personal trial starts only under the product&apos;s qualifying trial behavior. Entitlement status is maintained server-side.</p></article>
        <article><h3>6. Payment &amp; billing</h3><p>AutoPaginate uses Paddle as its Merchant of Record and payment processor. When a signed-in user chooses an AutoPaginate Personal plan, AutoPaginate&apos;s backend creates the checkout transaction and opens Paddle&apos;s checkout in a regular browser page.</p><p>The Chrome extension does not collect, receive, process, or store credit card numbers, CVV/security codes, bank account information, or payment card credentials. Payment information is entered directly into Paddle&apos;s checkout environment and handled under Paddle&apos;s own privacy and security practices. The extension communicates only the information necessary to establish the selected plan and associate the resulting entitlement with the authenticated account.</p></article>
        <article><h3>7. Telemetry &amp; analytics</h3><p>AutoPaginate v1.7 does not transmit extension usage analytics to AutoPaginate servers. The production extension runtime prevents telemetry network dispatch. It does not transmit capture events or upload usage statistics.</p></article>
        <article><h3>8. Data selling &amp; advertising</h3><p>AutoPaginate does not sell personal data or captured webpage/document data. It does not use captured content or authentication data for advertising, create advertising profiles from browsing information, determine creditworthiness, or use personal information for lending decisions.</p></article>
        <article><h3>9. Chrome extension permissions</h3><ul><li><strong>identity</strong> — used only for user-initiated Google authentication through <code>chrome.identity.launchWebAuthFlow</code> for Personal trial and account access.</li><li><strong>activeTab</strong> — provides temporary access to the page you choose to capture.</li><li><strong>scripting</strong> — allows AutoPaginate&apos;s packaged content script to inspect the active page for capture boundaries and coordinate capture.</li><li><strong>offscreen</strong> — provides DOM and Canvas functionality required for document/image processing in Manifest V3.</li><li><strong>storage</strong> — stores preferences, non-authoritative account UI information, and extension state.</li><li><strong>unlimitedStorage</strong> — supports large multi-page captures stored locally in IndexedDB.</li><li><strong>clipboardWrite</strong> — allows you to explicitly copy captured content to the clipboard.</li></ul><p>These permissions are used only for AutoPaginate functionality.</p></article>
        <article><h3>10. Third-party services</h3><p><strong>Google</strong> is used for optional Google authentication. <strong>Supabase</strong> is used for authentication, trial management, and entitlement verification. <strong>Paddle</strong> is used as Merchant of Record and payment provider for paid AutoPaginate Personal purchases. These services do not receive captured webpage or document content.</p></article>
        <article><h3>11. Data retention &amp; sign out</h3><p>Captured documents remain locally until you delete them or browser data is removed. Authentication session credentials exist only for the browser session and are removed on sign-out or browser-session termination. Server-side account, entitlement, subscription, transaction, and required billing records may be retained where necessary to provide the service and comply with applicable financial or legal obligations.</p></article>
        <article><h3>12. Your choices</h3><p>You can use AutoPaginate&apos;s standard Free capture functionality without signing in. Google Sign-In is optional unless you choose functionality requiring Personal or trial entitlement. You can sign out from AutoPaginate and delete captured local documents through its local capture and history functionality.</p></article>
        <article><h3>13. Contact</h3><p>AutoPaginate is developed by Enable My Growth. For privacy questions, contact <a href="mailto:feras@enablemygrowth.com">feras@enablemygrowth.com</a>.</p></article>
      </div>
    </div></section>
    <section className="ap-cta"><div className="ap-container"><p className="ap-eyebrow">Questions?</p><h2>Contact Enable My Growth.</h2><a className="ap-email" href="mailto:feras@enablemygrowth.com">feras@enablemygrowth.com</a></div></section>
  </main><AutoPaginateFooter /></div>;
}

function AutoPaginateFooter() { return <footer className="ap-footer"><div className="ap-container"><span>© {new Date().getFullYear()} Enable My Growth</span><div><a href="/index.html">Enable My Growth</a><a href="/autopaginate/support">AutoPaginate Support</a><a href="/autopaginate/privacy">Privacy Policy</a></div></div></footer>; }
