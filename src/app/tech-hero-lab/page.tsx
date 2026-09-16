import React from 'react';
import type { Metadata } from 'next';
import { GlobalNav } from '../../components/global/GlobalNav';
import { GlobalFooter } from '../../components/global/GlobalFooter';
import { PerspectiveEngineHero } from '../../components/technology-lab/PerspectiveEngineHero';

export const metadata: Metadata = {
  title: 'Perspective Engine Prototype - Enable My Growth Tech Lab',
  description: 'Neo-tech Perspective Engine experimental hero prototype centered on precision synthesis and better human judgment.',
};

export default function TechHeroLabPage() {
  return (
    <div className="pel-page">
      <GlobalNav currentPath="tech-hero-lab.html" />
      <main id="main-content">
        <PerspectiveEngineHero />
      </main>
      <GlobalFooter />
    </div>
  );
}
