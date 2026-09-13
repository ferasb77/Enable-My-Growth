'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ConceptNode } from './ConceptNode';

export type NetworkState = 'fragmented' | 'connected' | 'interpreted' | 'resolved';

const stateDescriptions: Record<NetworkState, { label: string; meta: string }> = {
  fragmented: {
    label: 'Fragmented',
    meta: 'Dispersed inputs without contextual relationships',
  },
  connected: {
    label: 'Connected',
    meta: 'Active links establishing organizational structure',
  },
  interpreted: {
    label: 'Interpreted',
    meta: 'High-signal pathways distilled through disciplined examination',
  },
  resolved: {
    label: 'Perspective',
    meta: 'Synthesized intelligence enabling defensible decisions',
  },
};

export function PerspectiveNetwork() {
  const [state, setState] = useState<NetworkState>('fragmented');
  const [hasPlayed, setHasPlayed] = useState<boolean>(false);
  const [isSequenceRunning, setIsSequenceRunning] = useState<boolean>(false);
  const [devMode, setDevMode] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimers = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  // Run the 4-state transformation sequence ONCE (total duration ~6.2s)
  const runSequence = useCallback(() => {
    clearTimers();
    setIsSequenceRunning(true);
    setState('fragmented');

    // State 1 (Fragmented) -> State 2 (Connected) after 1.4s
    timerRef.current = setTimeout(() => {
      setState('connected');

      // State 2 (Connected) -> State 3 (Interpreted) after 1.8s
      timerRef.current = setTimeout(() => {
        setState('interpreted');

        // State 3 (Interpreted) -> State 4 (Resolved) after 1.8s
        timerRef.current = setTimeout(() => {
          setState('resolved');
          setIsSequenceRunning(false);
          setHasPlayed(true);
        }, 1800);
      }, 1800);
    }, 1400);
  }, []);

  // IntersectionObserver: Trigger sequence once when hero enters viewport meaningfully
  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setState('resolved');
      setHasPlayed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasPlayed && !isSequenceRunning) {
          runSequence();
        }
      },
      {
        threshold: 0.25, // Hero network is at least 25% visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      clearTimers();
    };
  }, [hasPlayed, isSequenceRunning, runSequence]);

  // Dev manual override handler
  const handleDevStateChange = (target: NetworkState) => {
    clearTimers();
    setIsSequenceRunning(false);
    setHasPlayed(true);
    setState(target);
  };

  return (
    <div
      ref={containerRef}
      className="perspective-network-card spotlight-card"
      id="perspective-network"
      data-state={state}
      aria-label="Perspective Network Visual Transformation"
    >
      {/* Network Header with Status & Replay Control */}
      <div className="network-header">
        <div className="network-status-indicator">
          <span className="network-pulse-dot" aria-hidden="true" />
          <span className="network-state-text" aria-live="polite">
            {state === 'resolved' ? 'Perspective · Better Judgment' : `State: ${stateDescriptions[state].label}`}
          </span>
        </div>

        <div className="network-actions">
          {/* Subtle Replay Control available after first playback or on demand */}
          <button
            type="button"
            className="net-replay-btn"
            onClick={runSequence}
            title="Replay the 4-stage perspective transformation"
            aria-label="Replay visual transformation sequence"
          >
            <span aria-hidden="true">↺</span> Replay
          </button>

          {/* Dev inspector toggle (discreet development review mode) */}
          {devMode && (
            <div className="network-dev-controls" role="group" aria-label="Development state inspector">
              {(['fragmented', 'connected', 'interpreted', 'resolved'] as NetworkState[]).map((stKey) => (
                <button
                  key={stKey}
                  type="button"
                  className={'net-dev-btn' + (state === stKey ? ' active' : '')}
                  onClick={() => handleDevStateChange(stKey)}
                >
                  {stKey.slice(0, 4)}
                </button>
              ))}
            </div>
          )}

          <button
            type="button"
            onClick={() => setDevMode(!devMode)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--tech-subtle)',
              fontSize: '0.6rem',
              cursor: 'pointer',
              padding: '0 0.2rem',
            }}
            title="Toggle Developer Review Mode"
            aria-label="Toggle Developer Review Mode"
          >
            {devMode ? '✕' : '⚙'}
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
            {/* Peripheral Structural Pentagon */}
            <line className="net-wire wire-ring" x1="105" y1="105" x2="250" y2="70" />
            <line className="net-wire wire-ring" x1="250" y1="70" x2="395" y2="105" />
            <line className="net-wire wire-ring" x1="395" y1="105" x2="385" y2="305" />
            <line className="net-wire wire-ring" x1="385" y1="305" x2="115" y2="305" />
            <line className="net-wire wire-ring" x1="115" y1="305" x2="105" y2="105" />

            {/* High-Signal Interpreted Triad */}
            <line className="net-wire wire-interpret" x1="105" y1="105" x2="385" y2="305" />
            <line className="net-wire wire-interpret" x1="395" y1="105" x2="115" y2="305" />

            {/* Core Synthesizing Rays */}
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

        {/* Concept Nodes Floating Overlay */}
        <ConceptNode
          id="people"
          title="People"
          subtitle="Capability & Action"
          positionClass="node-pos-people"
          isActive={state !== 'fragmented'}
        />

        <ConceptNode
          id="context"
          title="Context"
          subtitle="Operational Reality"
          positionClass="node-pos-context"
          isActive={state !== 'fragmented'}
        />

        <ConceptNode
          id="programs"
          title="Programs"
          subtitle="Delivery Structure"
          positionClass="node-pos-programs"
          isActive={state !== 'fragmented'}
        />

        <ConceptNode
          id="evidence"
          title="Evidence"
          subtitle="Empirical Telemetry"
          positionClass="node-pos-evidence"
          isActive={state !== 'fragmented'}
        />

        <ConceptNode
          id="decisions"
          title="Decisions"
          subtitle="Defensible Action"
          positionClass="node-pos-decisions"
          isActive={state !== 'fragmented'}
        />
      </div>

      {/* Narrative Metaphor Subtitle */}
      <div className="network-footer">
        <span className="network-legend-tag">
          {stateDescriptions[state].label}: {stateDescriptions[state].meta}
        </span>
      </div>
    </div>
  );
}
