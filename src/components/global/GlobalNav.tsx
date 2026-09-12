'use client';

import React, { useState } from 'react';

interface GlobalNavProps {
  currentPath?: string;
}

export function GlobalNav({ currentPath = 'tech.html' }: GlobalNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { href: 'philosophy.html', label: 'Philosophy' },
    { href: 'conditions-before-conviction.html', label: 'The Book' },
    { href: 'tech.html', label: 'Enable My Growth Tech' },
    { href: 'ideas.html', label: 'Insights' },
    { href: 'training.html', label: 'Workshops' },
    { href: 'about.html', label: 'About' },
    { href: 'contact.html', label: 'Begin a Conversation', cta: true },
  ];

  return (
    <nav id="site-nav" aria-label="Primary navigation">
      <a className="nav-logo nav-brand" href="index.html" aria-label="Enable My Growth home">
        <span
          aria-hidden="true"
          style={{
            display: 'block',
            width: '48px',
            height: '42px',
            flex: '0 0 48px',
            background: "url('/emg-mobius-hero.png') right center / auto 42px no-repeat",
          }}
        />
        <span className="nav-brand-copy">
          <b>
            Enable My <span style={{ color: '#C9A96E' }}>Growth</span>
          </b>
          <small>Feras Banna</small>
        </span>
      </a>

      <ul className={'nav-links' + (isOpen ? ' open' : '')} id="nav-links">
        {pages.map((p) => {
          const isActive = currentPath === p.href || (p.href === 'tech.html' && currentPath.includes('tech'));
          const ctaClass = p.cta ? 'nav-cta ' : '';
          const activeClass = isActive ? 'active' : '';
          return (
            <li key={p.href}>
              <a
                href={p.href}
                className={(ctaClass + activeClass).trim()}
              >
                {p.label}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="nav-right">
        <a href="contact.html" className="nav-cta-mobile btn btn-gold">
          Talk
        </a>
        <button
          className="nav-toggle"
          id="nav-toggle"
          type="button"
          aria-label="Open menu"
          aria-expanded={isOpen}
          aria-controls="nav-links"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
