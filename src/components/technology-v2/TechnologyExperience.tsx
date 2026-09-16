'use client';

import React from 'react';
import './technology-v2.css';
import { TechnologyNavigation } from './TechnologyNavigation';
import { PerspectiveEngine3D } from '../technology-3d/PerspectiveEngine3D';
import { PerspectiveStory } from './PerspectiveStory';
import { TechnologySystems } from './TechnologySystems';
import { CapOSExperience } from './CapOSExperience';
import { ThinkingStudioExperience } from './ThinkingStudioExperience';
import { TechnologyPrinciples } from './TechnologyPrinciples';
import { DecisionRouter } from './DecisionRouter';
import { EnterpriseTrust } from './EnterpriseTrust';
import { TechnologyClosing } from './TechnologyClosing';

export function TechnologyExperience() {
  return (
    <main className="tv2-experience">
      <TechnologyNavigation />
      <PerspectiveEngine3D
        sectionId="tv2-hero"
        systemsTargetId="#tv2-systems"
        contactHref="contact.html?enquiry=Technology+Requirement"
      />
      <PerspectiveStory />
      <TechnologySystems />
      <CapOSExperience />
      <ThinkingStudioExperience />
      <TechnologyPrinciples />
      <DecisionRouter />
      <EnterpriseTrust />
      <TechnologyClosing />
    </main>
  );
}
