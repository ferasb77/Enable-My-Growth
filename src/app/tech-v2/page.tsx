import React from 'react';
import type { Metadata } from 'next';
import { GlobalNav } from '../../components/global/GlobalNav';
import { GlobalFooter } from '../../components/global/GlobalFooter';
import { TechnologyExperience } from '../../components/technology-v2/TechnologyExperience';

export const metadata: Metadata = {
  title: 'Enable My Growth Tech (Preview v2) — Decision Intelligence & Capability Platforms',
  description: 'Clean-sheet technology experience designed around better human judgment, operational capability, and disciplined inquiry.',
};

export default function TechV2PreviewPage() {
  return (
    <>
      <GlobalNav currentPath="tech-v2.html" />
      <TechnologyExperience />
      <GlobalFooter />
    </>
  );
}
