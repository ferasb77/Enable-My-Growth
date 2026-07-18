/* Shared navigation and footer for Enable My Growth — identity-aligned build. */
(function () {

  const pages = [
    { href: 'philosophy.html', label: 'Philosophy' },
    { href: 'ideas.html',      label: 'Insights' },
    { href: 'work.html',       label: 'Work with Feras' },
    { href: 'training.html',   label: 'Workshops' },
    { href: 'about.html',      label: 'About' },
    { href: 'contact.html',    label: 'Begin a Conversation', cta: true },
  ];

  const current      = location.pathname.split('/').pop() || 'index.html';
  const insightPages = current === 'ideas.html' || current.startsWith('essay-');

  /* Approved dimensional Möbius, cropped responsively from the brand hero asset. */
  const symbolSVG = `<span aria-hidden="true" style="display:block;width:48px;height:42px;flex:0 0 48px;background:url('emg-mobius-hero.png') right center / auto 42px no-repeat;"></span>`;

  const navHTML = `
  <nav id="site-nav" aria-label="Primary navigation">
    <a class="nav-logo nav-brand" href="index.html" aria-label="Enable My Growth home">
      ${symbolSVG}
      <span class="nav-brand-copy">
        <b>Enable My <span style="color:#C9A96E;">Growth</span></b>
        <small>Feras Banna</small>
      </span>
    </a>
    <ul class="nav-links" id="nav-links">
      ${pages.map(p => {
        const active = current === p.href || (p.href === 'ideas.html' && insightPages);
        return `<li><a href="${p.href}" class="${p.cta ? 'nav-cta ' : ''}${active ? 'active' : ''}">${p.label}</a></li>`;
      }).join('')}
    </ul>
    <div class="nav-right">
      <a href="contact.html" class="nav-cta-mobile btn btn-gold" style="display:none;">Talk</a>
      <button class="nav-toggle" id="nav-toggle" type="button"
        aria-label="Open menu" aria-expanded="false" aria-controls="nav-links">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`;

  /* Use the same approved dimensional mark in the footer lockup. */
  const footerSymbol = `<span aria-hidden="true" style="display:block;width:54px;height:50px;flex:0 0 54px;background:url('emg-mobius-hero.png') right center / auto 50px no-repeat;"></span>`;

  const footerHTML = `
  <footer>
    <div class="footer-inner">
      <div class="footer-brand">
        ${footerSymbol}
        <div>
          <div class="footer-name">Enable My <span>Growth</span></div>
          <div class="footer-creds">Perspective changes what becomes possible.<br/>Founded and led by Feras Banna.</div>
        </div>
      </div>
      <div class="footer-links-group">
        <div class="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><a href="philosophy.html">Philosophy</a></li>
            <li><a href="ideas.html">Insights</a></li>
            <li><a href="about.html">About Feras</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Engage</h4>
          <ul>
            <li><a href="work.html">Work with Feras</a></li>
            <li><a href="training.html">Workshops &amp; Facilitation</a></li>
            <li><a href="contact.html">Begin a conversation</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>More</h4>
          <ul>
            <li><a href="books.html">Books</a></li>
            <li><a href="resources.html">Resources</a></li>
            <li><a href="privacy.html">Privacy</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copy">
      <span>&copy; ${new Date().getFullYear()} Enable My Growth. All rights reserved.</span>
      <span>Perspective changes what becomes possible.</span>
    </div>
  </footer>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  /* Mobile CTA visibility */
  const mobileCta = document.querySelector('.nav-cta-mobile');
  function updateMobileCta() {
    if (mobileCta) {
      mobileCta.style.display = window.innerWidth <= 900 ? 'inline-block' : 'none';
    }
  }
  updateMobileCta();
  window.addEventListener('resize', updateMobileCta);

  /* Hamburger toggle */
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  /* Close mobile menu on link click */
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

})();
