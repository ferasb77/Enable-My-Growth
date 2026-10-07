import React from 'react';
import { GlobalNav } from '../global/GlobalNav';

const features = [
  ['01', 'Automatic page detection', 'Detect document pages before capture begins.'],
  ['02', 'Multi-page capture', 'Capture pages in sequence without repeated manual screenshots.'],
  ['03', 'Document assembly', 'Bring captured pages together as one document.'],
  ['04', 'Review and annotation', 'Review captured content and add annotations before export.'],
  ['05', 'PDF export', 'Export the finished document as a polished PDF.'],
  ['06', 'Image export', 'Export the finished document as images.'],
];

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
              <p className="ap-hero-title">Capture multi-page documents from the web and turn them into clean PDFs or images.</p>
              <p className="ap-lead">AutoPaginate automatically detects document pages, captures them in sequence, assembles them into one document, and gives you tools to review, annotate, and export the result.</p>
              <div className="ap-actions">
                <a className="ap-button ap-button-primary" href="#get-autopaginate">Get AutoPaginate</a>
                <a className="ap-button ap-button-quiet" href="/autopaginate/support">Get Support <span aria-hidden="true">→</span></a>
              </div>
            </div>
            <div className="ap-hero-art"><img src="/assets/autopaginate/marquee-promo-tile-1400x560.png" alt="AutoPaginate product artwork showing page capture and browser support" width="1400" height="560" /></div>
          </div>
        </section>

        <section className="ap-section ap-gallery" aria-labelledby="gallery-title">
          <div className="ap-container"><div className="ap-section-head"><div><p className="ap-eyebrow">Product walkthrough</p><h2 id="gallery-title">See AutoPaginate in action.</h2></div><p className="ap-gallery-intro">A closer look at the capture, editing, redaction, export, and browser-support surfaces in the production extension.</p></div>
            <div className="ap-gallery-grid">
              <figure><img src="/assets/autopaginate/screenshot-1-smart-capture.png" alt="AutoPaginate Smart Capture panel detecting an article and estimating pages" width="1280" height="800" loading="lazy" /><figcaption><b>01 / Smart Capture</b><span>Detects article content, estimates pages, and offers clean-article or entire-page capture.</span></figcaption></figure>
              <figure><img src="/assets/autopaginate/screenshot-2-document-editor.png" alt="AutoPaginate document editor showing three pages and page properties" width="1280" height="800" loading="lazy" /><figcaption><b>02 / Document Editor</b><span>Review a multi-page document with page thumbnails, properties, and export controls.</span></figcaption></figure>
              <figure><img src="/assets/autopaginate/screenshot-3-pii-redaction.png" alt="AutoPaginate redaction mode showing redacted fields and sanitization checks" width="1280" height="800" loading="lazy" /><figcaption><b>03 / PII Redaction</b><span>Redaction mode shows sanitized fields alongside checks for pixels, text tokens, and hyperlinks.</span></figcaption></figure>
              <figure><img src="/assets/autopaginate/screenshot-4-export-formats.png" alt="AutoPaginate export screen showing PDF, PNG, JPG, and WebP options" width="1280" height="800" loading="lazy" /><figcaption><b>04 / Export Formats</b><span>Choose from PDF, PNG, JPG, or WebP output formats in the export surface.</span></figcaption></figure>
              <figure><img src="/assets/autopaginate/screenshot-5-cross-browser.png" alt="AutoPaginate compatibility screen for Chrome, Edge, and Firefox" width="1280" height="800" loading="lazy" /><figcaption><b>05 / Cross-browser</b><span>Shows the extension’s compatibility surfaces for Chrome, Edge, and Firefox.</span></figcaption></figure>
            </div>
          </div>
        </section>

        <section className="ap-section" aria-labelledby="features-title">
          <div className="ap-container"><div className="ap-section-head"><p className="ap-eyebrow">Capture, review, export</p><h2 id="features-title">A clearer way to capture documents from the web.</h2></div>
            <div className="ap-feature-grid">{features.map(([number, title, text]) => <article className="ap-feature" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
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

        <section className="ap-section ap-usecases" aria-labelledby="usecases-title"><div className="ap-container ap-split"><div><p className="ap-eyebrow">Useful when you need the whole document</p><h2 id="usecases-title">Designed for paginated content that should stay together.</h2></div><ul><li>Web-hosted documents</li><li>Paginated reports</li><li>Online manuals</li><li>Multi-page reference material</li><li>Content that would otherwise require repeated screenshots</li></ul></div></section>

        <section className="ap-section ap-trust" aria-labelledby="trust-title"><div className="ap-container ap-trust-inner"><div><p className="ap-eyebrow">Privacy and permissions</p><h2 id="trust-title">Focused on the capture you request.</h2></div><p>AutoPaginate is designed to process the content needed to perform the functions you request. For more information about data handling and extension permissions, see the <a href="/autopaginate/privacy">Privacy Policy</a>.</p></div></section>

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
