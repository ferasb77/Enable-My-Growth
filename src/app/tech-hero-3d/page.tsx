import React from 'react';
import type { Metadata } from 'next';
import { GlobalNav } from '../../components/global/GlobalNav';
import { GlobalFooter } from '../../components/global/GlobalFooter';
import { PerspectiveEngine3D } from '../../components/technology-3d/PerspectiveEngine3D';

export const metadata: Metadata = {
  title: 'Perspective Engine 3D Prototype - Enable My Growth Tech Lab',
  description: 'Neo-tech WebGL optical synthesis instrument floating in space, built with Three.js for consequential decision intelligence.',
};

export default function TechHero3DPage() {
  return (
    <div className="pe3-page">
      <GlobalNav currentPath="tech-hero-3d.html" />
      <main id="main-content">
        <PerspectiveEngine3D />
      </main>
      <GlobalFooter />
    </div>
  );
}
