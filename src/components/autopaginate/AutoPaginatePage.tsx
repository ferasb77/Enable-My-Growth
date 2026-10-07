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
                <a className="ap-button ap-button-primary" href="#get-autopaginate">Get AutoPaginate</a>
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

        <section className="ap-cta" id="get-autopaginate" aria-labelledby="get-title"><div className="ap-container"><p className="ap-eyebrow">AutoPaginate</p><h2 id="get-title">Ready when you need the whole document.</h2><p>The Chrome Web Store link will be available here.</p><a className="ap-button ap-button-primary" href="/autopaginate/support">Get Support <span aria-hidden="true">→</span></a></div></section>
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
    <section className="ap-support-hero" aria-labelledby="privacy-title"><div className="ap-container"><div className="ap-title-lockup"><img src="/assets/autopaginate/store-icon-512.png" alt="AutoPaginate icon" width="72" height="72" /><div><p className="ap-eyebrow">Enable My Growth / AutoPaginate</p><h1 id="privacy-title">AutoPaginate <span>Privacy Policy</span></h1></div></div><p>How AutoPaginate handles information when you use the Chrome extension.</p><p className="ap-policy-effective">Effective date: October 7, 2026</p><a className="ap-button ap-button-quiet" href="/autopaginate">← Back to AutoPaginate</a></div></section>
    <section className="ap-section ap-policy"><div className="ap-container">
      <p className="ap-eyebrow">The short version</p><h2>AutoPaginate is local-first by implementation.</h2>
      <p>AutoPaginate captures and assembles web documents in your browser so you can review, annotate, and export them as PDFs or images. The audited version 1.6.0 extension contains no analytics, telemetry, external API client, account system, or upload endpoint. Its code does not transmit captured images, page content, URLs, or browsing data to Enable My Growth or another server.</p>
      <div className="ap-policy-grid">
        <article><h3>What AutoPaginate does</h3><p>It detects document pages in the active tab, captures visible page areas as images, assembles those captures, and provides local review, annotation, redaction, PDF, image, and clipboard-copy tools.</p></article>
        <article><h3>Information processed</h3><p>When you request a capture, the extension processes the visible page content needed for that capture, including rendered pixels, document title, current page URL, source label, visible text, and visible link URLs used for document rendering. It can also process image files you explicitly import into the viewer and annotations or redactions you create.</p></article>
        <article><h3>Stored locally</h3><p>Capture images, rendered pages, document metadata, page and link data, annotations, redactions, export settings, capture progress, and recent-capture history are stored in the extension’s local browser storage. The viewer also stores local layout preferences such as sidebar width and collapse state.</p></article>
        <article><h3>External transmission</h3><p>None is performed by the audited implementation. The only <code>fetch()</code> call converts a locally produced capture data URL into a Blob; it is not a network request. No <code>http://</code>, <code>https://</code>, or WebSocket endpoint is called by the extension code.</p></article>
        <article><h3>Permissions</h3><p><strong>activeTab</strong> and <strong>scripting</strong> allow capture and page inspection after you invoke the extension on the active tab. <strong>offscreen</strong> supports local rendering. <strong>storage</strong> supports local preferences and progress. <strong>clipboardWrite</strong> supports copying a selected page as a PNG when you explicitly use the copy control or the viewer’s copy shortcut.</p></article>
        <article><h3>Unlimited storage</h3><p>AutoPaginate uses the <code>unlimitedStorage</code> permission because high-resolution, multi-page document captures can require substantial local storage. Captured page data and recent captures are stored locally in IndexedDB so that larger capture sessions can be completed without failing because of browser storage limits. This permission does not allow AutoPaginate to transmit or remotely store user data. Its local history code caps retained history at 50 captures or approximately 500 MB and prunes older captures first.</p></article>
        <article><h3>Retention and deletion</h3><p>Information remains in local extension storage until you delete a capture, history reaches its configured pruning limit, clear the extension’s data, or uninstall the extension. The extension provides controls to delete recent captures and clear the active capture. Exported files and clipboard contents are controlled by the destination you choose outside the extension.</p></article>
        <article><h3>Third-party sharing</h3><p>AutoPaginate does not sell, rent, or share captured information with third parties because the audited code does not transmit it externally. If you export a file, copy a page, or otherwise move content using a separate application or service, that destination’s own terms and privacy policy apply.</p></article>
        <article><h3>Personal or sensitive data</h3><p>The extension does not collect personal or sensitive data as a service. However, a web page or imported image may contain information you consider personal or sensitive, and the extension can process that content locally when you ask it to. Do not capture or import content unless you are authorized to do so.</p></article>
        <article><h3>Security</h3><p>Processing stays within Chrome’s extension and page contexts, and the extension has no remote service for this data. Local browser storage is protected by the security controls of your device, Chrome profile, and operating system. Keep those environments secure and remove captures you no longer need.</p></article>
        <article><h3>Your controls</h3><p>You choose when to invoke a capture, what page or region to capture, what to annotate or redact, what to export, and whether to copy a page. You can delete recent captures from the extension, clear extension data through Chrome, or uninstall AutoPaginate. You can also contact us about privacy questions or requests.</p></article>
        <article><h3>Contact</h3><p>AutoPaginate is developed by Enable My Growth. For privacy questions, contact <a href="mailto:feras@enablemygrowth.com">feras@enablemygrowth.com</a>.</p></article>
      </div>
    </div></section>
    <section className="ap-cta"><div className="ap-container"><p className="ap-eyebrow">Questions?</p><h2>Contact Enable My Growth.</h2><a className="ap-email" href="mailto:feras@enablemygrowth.com">feras@enablemygrowth.com</a></div></section>
  </main><AutoPaginateFooter /></div>;
}

function AutoPaginateFooter() { return <footer className="ap-footer"><div className="ap-container"><span>© {new Date().getFullYear()} Enable My Growth</span><div><a href="/index.html">Enable My Growth</a><a href="/autopaginate/support">AutoPaginate Support</a><a href="/autopaginate/privacy">Privacy Policy</a></div></div></footer>; }
