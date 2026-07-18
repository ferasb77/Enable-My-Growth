/*
 * analytics.js
 * Loads Google Analytics 4 and Microsoft Clarity.
 * Replace the IDs below with your own before deploying.
 *
 *   GA4_ID      — found in Google Analytics → Admin → Data Streams → your stream → Measurement ID
 *                 Format: G-XXXXXXXXXX
 *
 *   CLARITY_ID  — found in Microsoft Clarity → Settings → Overview → Project ID
 *                 Format: a short alphanumeric string, e.g. "abc123def4"
 */

(function () {

  /* ── CONFIGURATION ─────────────────────────────────────────────────────── */
  var GA4_ID     = 'G-ER7V2L9SGK';  // Google Analytics 4
  var CLARITY_ID = 'xj94a9ak5a';     // Microsoft Clarity
  /* ─────────────────────────────────────────────────────────────────────── */

  /* ── GOOGLE ANALYTICS 4 ─────────────────────────────────────────────── */
  var gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src   = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_ID;
  document.head.appendChild(gaScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', GA4_ID, {
    // Anonymise IPs (good practice, GDPR-friendly)
    anonymize_ip: true
  });

  /* ── MICROSOFT CLARITY ──────────────────────────────────────────────── */
  (function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
    t = l.createElement(r);
    t.async = 1;
    t.src   = 'https://www.clarity.ms/tag/' + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, 'clarity', 'script', CLARITY_ID);

})();
