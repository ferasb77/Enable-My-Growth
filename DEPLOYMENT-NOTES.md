# Enable My Growth website

This is a static website and does not require a build step. Upload the contents of this folder to the web root for `enablemygrowth.com`.

## Core public journey

- `index.html` — philosophy-first homepage
- `philosophy.html` — the broader philosophy and five commitments
- `ideas.html` — insights and existing essays
- `work.html` — founder-led engagement model
- `about.html` — Feras Banna and the origin of the work
- `contact.html` — contextual enquiry form

## Integrations preserved from the current site

- The contact form continues to use the existing Formspree endpoint.
- The existing Google Analytics 4 and Microsoft Clarity configuration remains in `analytics.js`.

Before launch, submit one test enquiry and verify that the Formspree confirmation redirect and notification email both arrive as expected.

## Identity assets

- `emg-mobius-hero.png` — primary website hero image
- `emg-symbol.png` — navigation and footer symbol
- `favicon.svg`, `favicon.ico`, `favicon-32.png` — browser icons

Legacy service pages remain in the package for continuity, but they have been intentionally removed from the primary navigation. The public journey now begins with the philosophy and the visitor's context rather than a service catalogue.
