import React from 'react';
import type { Metadata } from 'next';
import { GlobalNav } from '../components/global/GlobalNav';
import { GlobalFooter } from '../components/global/GlobalFooter';
import { TechnologyExperience } from '../components/technology-v2/TechnologyExperience';

export const metadata: Metadata = {
  title: 'Enable My Growth Tech — Decision Intelligence, Digital Platforms & Governance Systems',
  description: 'Enable My Growth Tech develops AI-enabled platforms, decision systems, and custom digital infrastructure that help organizations examine evidence, govern complexity, and strengthen capability.',
};

export default function TechnologyPage() {
  return (
    <>
      <GlobalNav currentPath="tech.html" />
      <TechnologyExperience />
      <GlobalFooter />
    </>
  );
}

