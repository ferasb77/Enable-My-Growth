'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ConceptNode } from './ConceptNode';

export type NetworkState = 'isolated' | 'connected' | 'interpreted' | 'resolved';

const stateLabels: Record<NetworkState, { title: string; subtitle: string }> = {
  isolated: {
    title: 'Isolated Information',
    subtitle: 'Fragmented data without operational relationships',
  },
  connected: {
    title: 'Connected Structure',
    subtitle: 'Active links forming between people, programs & evidence',
  },
  interpreted: {
    title: 'Structured Interpretation',
    subtitle: 'High-signal pathways distilled from complex inputs',
  },
  resolved: {
    title: 'Resolved Perspective',
    subtitle: 'Synthesized intelligence enabling defensible decisions',
  },
};

export function PerspectiveNetwork() {
  const [state, setState] = useState<NetworkState>('connected');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startSequence = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsPlaying(true);
    setState('isolated');

    timerRef.current = setTimeout(() => {
      setState('connected');
      timerRef.current = setTimeout(() => {
        setState('interpreted');
        timerRef.current = setTimeout(() => {
          setState('resolved');
          setIsPlaying(false);
        }, 1800);
      }, 1800);
    }, 1600);
  };

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setState('resolved');
      return;
    }

    // Auto-advance once on initial view after subtle delay
    const initialTimer = setTimeout(() => {
      startSequence();
    }, 900);

    return () => {
      clearTimeout(initialTimer);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleManualState = (target: NetworkState) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsPlaying(false);
    setState(target);
  };

  return (
    <div
      className="perspective-network-card spotlight-card"
      id="perspective-network"
      data-state={state}
      aria-label="Interactive Perspective Relationship Network"
    >
      {/* Header with state indicator & controls */}
      <div className="network-header">
        <div className="network-status-indicator">
          <span className="network-pulse-dot" aria-hidden="true" />
          <span className="network-state-text" aria-live="polite">
            State: {state}
          </span>
        </div>

        <div className="network-controls" role="group" aria-label="Perspective relationship states">
          <button
            type="button"
            className={'net-ctrl-btn' + (state === 'isolated' ? ' active' : '')}
            onClick={() => handleManualState('isolated')}
            aria-pressed={state === 'isolated'}
          >
            01 Isolated
          </button>
          <button
            type="button"
            className={'net-ctrl-btn' + (state === 'connected' ? ' active' : '')}
            onClick={() => handleManualState('connected')}
            aria-pressed={state === 'connected'}
          >
            02 Connected
          </button>
          <button
            type="button"
            className={'net-ctrl-btn' + (state === 'interpreted' ? ' active' : '')}
            onClick={() => handleManualState('interpreted')}
            aria-pressed={state === 'interpreted'}
          >
            03 Interpreted
          </button>
          <button
            type="button"
            className={'net-ctrl-btn' + (state === 'resolved' ? ' active' : '')}
            onClick={() => handleManualState('resolved')}
            aria-pressed={state === 'resolved'}
          >
            04 Resolved
          </button>

          <button
            type="button"
            className="net-replay-btn"
            onClick={startSequence}
            title="Replay visual transformation sequence"
            aria-label="Replay sequence"
          >
            ↺ Replay
          </button>
        </div>
      </div>

      {/* SVG Canvas & Node Layout */}
      <div className="perspective-stage">
        <svg
          className="network-svg-canvas"
          viewBox="0 0 500 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="network-connectors" aria-hidden="true">
            {/* Peripheral Structure Polygon */}
            <line className="net-wire wire-ring" x1="105" y1="105" x2="250" y2="70" />
            <line className="net-wire wire-ring" x1="250" y1="70" x2="395" y2="105" />
            <line className="net-wire wire-ring" x1="395" y1="105" x2="385" y2="305" />
            <line className="net-wire wire-ring" x1="385" y1="305" x2="115" y2="305" />
            <line className="net-wire wire-ring" x1="115" y1="305" x2="105" y2="105" />

            {/* High-Signal Interpreted Triad */}
            <line className="net-wire wire-interpret" x1="105" y1="105" x2="385" y2="305" />
            <line className="net-wire wire-interpret" x1="395" y1="105" x2="115" y2="305" />

            {/* Core Synthesizing Rays to Central Node */}
            <line className="net-wire wire-core" x1="105" y1="105" x2="250" y2="190" />
            <line className="net-wire wire-core" x1="250" y1="70" x2="250" y2="190" />
            <line className="net-wire wire-core" x1="395" y1="105" x2="250" y2="190" />
            <line className="net-wire wire-core" x1="115" y1="305" x2="250" y2="190" />
            <line className="net-wire wire-core" x1="385" y1="305" x2="250" y2="190" />
          </g>

          {/* Central Synthesis Perspective Node */}
          <g className="network-central-node" transform="translate(250, 190)">
            <circle
              cx="0"
              cy="0"
              r="44"
              fill="var(--tech-surface-raised)"
              stroke="var(--tech-gold)"
              strokeWidth="1.5"
            />
            <circle
              cx="0"
              cy="0"
              r="54"
              fill="none"
              stroke="rgba(201, 169, 110, 0.35)"
              strokeWidth="1"
              strokeDasharray="3 4"
              className="core-rotate-ring"
            />
            <text
              x="0"
              y="-6"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="'Cormorant Garamond', Georgia, serif"
              fontSize="14"
              fontWeight="600"
            >
              Perspective
            </text>
            <text
              x="0"
              y="12"
              textAnchor="middle"
              fill="var(--tech-gold)"
              fontFamily="'JetBrains Mono', monospace"
              fontSize="8"
              letterSpacing="0.1em"
            >
              BETTER JUDGMENT
            </text>
          </g>
        </svg>

        {/* Concept Nodes with Coordinate Class Names */}
        <ConceptNode
          id="people"
          title="People"
          subtitle="Capability & Action"
          positionClass="node-pos-people"
          isActive={state !== 'isolated'}
          onClick={() => handleManualState('connected')}
        />

        <ConceptNode
          id="context"
          title="Context"
          subtitle="Operational Reality"
          positionClass="node-pos-context"
          isActive={state !== 'isolated'}
          onClick={() => handleManualState('connected')}
        />

        <ConceptNode
          id="programs"
          title="Programs"
          subtitle="Delivery Structure"
          positionClass="node-pos-programs"
          isActive={state !== 'isolated'}
          onClick={() => handleManualState('connected')}
        />

        <ConceptNode
          id="evidence"
          title="Evidence"
          subtitle="Empirical Telemetry"
          positionClass="node-pos-evidence"
          isActive={state !== 'isolated'}
          onClick={() => handleManualState('connected')}
        />

        <ConceptNode
          id="decisions"
          title="Decisions"
          subtitle="Defensible Action"
          positionClass="node-pos-decisions"
          isActive={state !== 'isolated'}
          onClick={() => handleManualState('connected')}
        />
      </div>

      {/* Narrative Legend */}
      <div className="network-footer">
        <span className="network-legend-tag">
          {stateLabels[state].title}: {stateLabels[state].subtitle}
        </span>
      </div>
    </div>
  );
}
