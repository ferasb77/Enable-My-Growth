'use client';

import React, { useState } from 'react';
import { ConceptNode } from './ConceptNode';

type NetworkState = 'isolated' | 'connected' | 'resolved';

export function PerspectiveNetwork() {
  const [state, setState] = useState<NetworkState>('connected');

  return (
    <div className="perspective-network-card spotlight-card" id="perspective-network" data-state={state}>
      {/* State Switcher Controls */}
      <div className="network-controls-bar">
        <span className="net-status-label">Conceptual State:</span>
        <div className="network-state-toggles" role="group" aria-label="Perspective relationship state">
          <button
            type="button"
            className={'network-state-btn' + (state === 'isolated' ? ' active' : '')}
            data-state-target="isolated"
            aria-pressed={state === 'isolated'}
            onClick={() => setState('isolated')}
          >
            01 Isolated
          </button>
          <button
            type="button"
            className={'network-state-btn' + (state === 'connected' ? ' active' : '')}
            data-state-target="connected"
            aria-pressed={state === 'connected'}
            onClick={() => setState('connected')}
          >
            02 Connected
          </button>
          <button
            type="button"
            className={'network-state-btn' + (state === 'resolved' ? ' active' : '')}
            data-state-target="resolved"
            aria-pressed={state === 'resolved'}
            onClick={() => setState('resolved')}
          >
            03 Resolved
          </button>
        </div>
      </div>

      {/* SVG Canvas & Node Layout */}
      <div className="network-stage-canvas">
        <svg
          className="network-svg-canvas"
          viewBox="0 0 500 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="network-connectors" aria-hidden="true">
            {/* Peripheral Relationship Polygon */}
            <line className="net-wire wire-ring" x1="80" y1="75" x2="250" y2="45" />
            <line className="net-wire wire-ring" x1="250" y1="45" x2="420" y2="75" />
            <line className="net-wire wire-ring" x1="420" y1="75" x2="400" y2="315" />
            <line className="net-wire wire-ring" x1="400" y1="315" x2="95" y2="315" />
            <line className="net-wire wire-ring" x1="95" y1="315" x2="80" y2="75" />

            {/* Core Synthesizing Rays */}
            <line className="net-wire wire-core" x1="80" y1="75" x2="250" y2="190" />
            <line className="net-wire wire-core" x1="250" y1="45" x2="250" y2="190" />
            <line className="net-wire wire-core" x1="420" y1="75" x2="250" y2="190" />
            <line className="net-wire wire-core" x1="95" y1="315" x2="250" y2="190" />
            <line className="net-wire wire-core" x1="400" y1="315" x2="250" y2="190" />
          </g>

          {/* Central Synthesis Perspective Node */}
          <g className="network-central-node" transform="translate(250, 190)">
            <circle cx="0" cy="0" r="42" fill="var(--tech-surface-raised)" stroke="var(--tech-gold)" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="52" fill="none" stroke="rgba(201, 169, 110, 0.35)" strokeWidth="1" strokeDasharray="3 4" className="core-rotate-ring" />
            <text x="0" y="-6" textAnchor="middle" fill="#FFFFFF" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="14" fontWeight="600">
              Perspective
            </text>
            <text x="0" y="11" textAnchor="middle" fill="var(--tech-gold)" fontFamily="'JetBrains Mono', monospace" fontSize="8" letterSpacing="0.1em">
              BETTER JUDGMENT
            </text>
          </g>
        </svg>

        {/* Concept Nodes Floating Overlay */}
        <ConceptNode
          id="people"
          title="People"
          subtitle="Capability & Action"
          positionClass="node-pos-people"
          isActive={state !== 'isolated'}
        />

        <ConceptNode
          id="context"
          title="Context"
          subtitle="Operational Reality"
          positionClass="node-pos-context"
          isActive={state !== 'isolated'}
        />

        <ConceptNode
          id="programs"
          title="Programs"
          subtitle="Delivery Structure"
          positionClass="node-pos-programs"
          isActive={state !== 'isolated'}
        />

        <ConceptNode
          id="evidence"
          title="Evidence"
          subtitle="Empirical Telemetry"
          positionClass="node-pos-evidence"
          isActive={state !== 'isolated'}
        />

        <ConceptNode
          id="decisions"
          title="Decisions"
          subtitle="Defensible Action"
          positionClass="node-pos-decisions"
          isActive={state !== 'isolated'}
        />
      </div>

      {/* Metaphor Legend */}
      <div className="network-footer">
        <span className="network-legend-tag">
          Isolated Information → Connected Perspective → Better Decisions
        </span>
      </div>
    </div>
  );
}
