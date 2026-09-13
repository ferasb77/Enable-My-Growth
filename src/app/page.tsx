import React from 'react';
import { GlobalNav } from '../components/global/GlobalNav';
import { GlobalFooter } from '../components/global/GlobalFooter';
import { TechnologyHero } from '../components/technology/TechnologyHero';
import { PerspectiveStepper } from '../components/technology/PerspectiveStepper';
import { TechEcosystemExplorer } from '../components/technology/TechEcosystemExplorer';
import { TechnologyPhilosophy } from '../components/technology/TechnologyPhilosophy';
import { TechnologyMatrix } from '../components/technology/TechnologyMatrix';
import { TechnologyCTA } from '../components/technology/TechnologyCTA';

export default function TechnologyPage() {
  return (
    <>
      <GlobalNav currentPath="tech.html" />
      <main>
        <TechnologyHero />
        <PerspectiveStepper />
        <TechEcosystemExplorer />
        <TechnologyPhilosophy />
        <TechnologyMatrix />
        <TechnologyCTA />
      </main>
      <GlobalFooter />
    </>
  );
}

