'use client';

import React, { useEffect, useState } from 'react';

const sections = [
  { id: 'tv2-hero', label: 'Overview' },
  { id: 'tv2-perspective', label: 'Perspective' },
  { id: 'tv2-systems', label: 'Systems' },
  { id: 'tv2-philosophy', label: 'Philosophy' },
  { id: 'tv2-trust', label: 'Trust' },
  { id: 'tv2-contact', label: 'Connect' },
];

export function TechnologyNavigation() {
  const [activeSection, setActiveSection] = useState('tv2-hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="tv2-nav-wrapper" aria-label="Technology section navigation">
      <nav className="tv2-nav-rail">
        {sections.map((sec) => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className={`tv2-nav-link ${activeSection === sec.id ? 'active' : ''}`}
          >
            {sec.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
