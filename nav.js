/* nav.js — injects shared nav + footer, sets active link */
(function () {
  const pages = [
    { href: 'index.html',    label: 'Home' },
    { href: 'ideas.html',    label: 'Ideas' },
    { href: 'hogan.html',    label: 'Hogan Assessment' },
    { href: 'advisory.html', label: 'Advisory' },
    { href: 'speaking.html', label: 'Speaking' },
    { href: 'books.html',    label: 'Books' },
    { href: 'resources.html',label: 'Resources' },
    { href: 'contact.html',  label: 'Contact', cta: true },
  ];

  const current = location.pathname.split('/').pop() || 'index.html';

  const navHTML = `
  <nav id="site-nav">
    <a class="nav-logo" href="index.html">Feras <span>Banna</span></a>
    <ul class="nav-links" id="nav-links">
      ${pages.map(p => `
        <li><a href="${p.href}" class="${p.cta ? 'nav-cta' : ''}${current === p.href ? ' active' : ''}">${p.label}</a></li>
      `).join('')}
    </ul>
    <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </nav>`;

  const footerHTML = `
  <footer>
    <div class="footer-inner">
      <div>
        <div class="footer-name">Feras <span>Banna</span></div>
        <div class="footer-creds">
          Certified Hogan Assessor &nbsp;·&nbsp; Leadership Consultant &nbsp;·&nbsp; Facilitator<br/>
          Author of <em>The Inner Conversation</em> (forthcoming)
        </div>
      </div>
      <div class="footer-links-group">
        <div class="footer-col">
          <h4>Ideas</h4>
          <ul>
            <li><a href="ideas.html#cbc">Conditions Before Conviction</a></li>
            <li><a href="ideas.html#inner">The Inner Conversation</a></li>
            <li><a href="ideas.html#assessment">Leadership & Assessment</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Work</h4>
          <ul>
            <li><a href="hogan.html">Hogan Assessment</a></li>
            <li><a href="advisory.html">Advisory</a></li>
            <li><a href="speaking.html">Speaking</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>More</h4>
          <ul>
            <li><a href="books.html">Books</a></li>
            <li><a href="resources.html">Resources</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copy">
      <span>&copy; ${new Date().getFullYear()} Feras Banna — EnableMyGrowth.com</span>
      <span>All rights reserved.</span>
    </div>
  </footer>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Mobile toggle
  document.getElementById('nav-toggle').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('open');
  });
})();
