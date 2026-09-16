"use client";
import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import './perspective-engine-3d.css';

interface SignalItem {
  id: string;
  code: string;
  title: string;
  sub: string;
  posClass: string;
  angleDeg: number;
}

const SIGNALS: SignalItem[] = [
  { id: 'context', code: 'SIG-01', title: 'Context', sub: 'Operating Reality', posClass: 'pe3-sig-context', angleDeg: 90 },
  { id: 'people', code: 'SIG-02', title: 'People', sub: 'Agency & Participation', posClass: 'pe3-sig-people', angleDeg: 160 },
  { id: 'programs', code: 'SIG-03', title: 'Programs', sub: 'Delivery Structure', posClass: 'pe3-sig-programs', angleDeg: 20 },
  { id: 'evidence', code: 'SIG-04', title: 'Evidence', sub: 'Verifiable Telemetry', posClass: 'pe3-sig-evidence', angleDeg: 220 },
  { id: 'decisions', code: 'SIG-05', title: 'Decisions', sub: 'Defensible Action', posClass: 'pe3-sig-decisions', angleDeg: 320 },
];

export interface PerspectiveEngine3DProps {
  sectionId?: string;
  systemsTargetId?: string;
  contactHref?: string;
}

export function PerspectiveEngine3D({
  sectionId = 'tv2-hero',
  systemsTargetId = '#tv2-systems',
  contactHref = 'contact.html?enquiry=Technology+Requirement',
}: PerspectiveEngine3DProps = {}) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeSignal, setActiveSignal] = useState<string | null>(null);
  const [isReplaying, setIsReplaying] = useState(false);
  const [enginePhase, setEnginePhase] = useState<'distributed' | 'calibration' | 'synthesis' | 'resolution'>('synthesis');

  const activeSignalRef = useRef<string | null>(null);
  activeSignalRef.current = activeSignal;

  // Replay trigger mechanism shared with animation loop
  const replayStartRef = useRef<number | null>(null);

  const handleReplay = useCallback(() => {
    setIsReplaying(true);
    replayStartRef.current = performance.now();
    setTimeout(() => {
      setIsReplaying(false);
    }, 4500);
  }, []);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let canvas: HTMLCanvasElement;
    try {
      canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) return;
    } catch {
      return;
    }

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x040406, 0.035);

    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    // Initial camera position will be updated by handleResize
    camera.position.set(0, 0.05, 11.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x181826, 2.0);
    scene.add(ambientLight);

    const goldKeyLight = new THREE.DirectionalLight(0xc9a96e, 3.8);
    goldKeyLight.position.set(4, 5, 6);
    scene.add(goldKeyLight);

    const rimLight = new THREE.DirectionalLight(0x606085, 2.2);
    rimLight.position.set(-5, -4, -2);
    scene.add(rimLight);

    const coreLight = new THREE.PointLight(0xe5c998, 4.2, 9, 1.4);
    coreLight.position.set(0, 0, 0.3);
    scene.add(coreLight);

    const engineGroup = new THREE.Group();
    scene.add(engineGroup);

    // Dark titanium outer ring
    const outerTorusGeo = new THREE.TorusGeometry(3.5, 0.042, 24, 120);
    const darkTitaniumMat = new THREE.MeshStandardMaterial({
      color: 0x181822,
      metalness: 0.94,
      roughness: 0.22,
    });
    const outerRing = new THREE.Mesh(outerTorusGeo, darkTitaniumMat);
    outerRing.position.z = -0.4;
    engineGroup.add(outerRing);

    // Gold mid chassis ring
    const midTorusGeo = new THREE.TorusGeometry(2.9, 0.026, 20, 100);
    const goldChassisMat = new THREE.MeshStandardMaterial({
      color: 0x8e764a,
      metalness: 0.9,
      roughness: 0.3,
    });
    const midRing = new THREE.Mesh(midTorusGeo, goldChassisMat);
    midRing.position.z = -0.2;
    engineGroup.add(midRing);

    // Calibration tick marks
    const tickCount = 64;
    const ticksGroup = new THREE.Group();
    const tickGeoMajor = new THREE.BoxGeometry(0.018, 0.14, 0.02);
    const tickGeoMinor = new THREE.BoxGeometry(0.012, 0.08, 0.015);
    const tickMat = new THREE.MeshBasicMaterial({ color: 0xc9a96e });
    const tickMatDim = new THREE.MeshBasicMaterial({ color: 0x796440 });

    for (let i = 0; i < tickCount; i++) {
      const isMajor = i % 8 === 0;
      const tick = new THREE.Mesh(isMajor ? tickGeoMajor : tickGeoMinor, isMajor ? tickMat : tickMatDim);
      const angle = (i / tickCount) * Math.PI * 2;
      tick.position.x = Math.cos(angle) * 2.9;
      tick.position.y = Math.sin(angle) * 2.9;
      tick.position.z = -0.18;
      tick.rotation.z = angle + Math.PI / 2;
      ticksGroup.add(tick);
    }
    engineGroup.add(ticksGroup);

    // Smoked optical refractive glass disc
    const glassDiscGeo = new THREE.CylinderGeometry(2.25, 2.25, 0.055, 64, 1, false);
    const glassDiscMat = new THREE.MeshPhysicalMaterial({
      color: 0x0c0b16,
      metalness: 0.08,
      roughness: 0.1,
      transmission: 0.85,
      thickness: 0.95,
      ior: 1.54,
      reflectivity: 0.7,
      transparent: true,
      opacity: 0.88,
    });
    const glassDisc = new THREE.Mesh(glassDiscGeo, glassDiscMat);
    glassDisc.rotation.x = Math.PI / 2;
    glassDisc.position.z = 0.0;
    engineGroup.add(glassDisc);

    // Glass disc bevel
    const glassBevelGeo = new THREE.TorusGeometry(2.28, 0.03, 24, 90);
    const glassBevel = new THREE.Mesh(glassBevelGeo, goldChassisMat);
    glassBevel.position.z = 0.04;
    engineGroup.add(glassBevel);

    // Aperture retaining ring
    const apertureRingGeo = new THREE.TorusGeometry(1.48, 0.035, 24, 80);
    const apertureRing = new THREE.Mesh(apertureRingGeo, darkTitaniumMat);
    apertureRing.position.z = 0.28;
    engineGroup.add(apertureRing);

    // Iris aperture blades/fins
    const finCount = 8;
    const apertureFinGroup = new THREE.Group();
    const finGeo = new THREE.BoxGeometry(0.52, 0.02, 0.015);
    for (let i = 0; i < finCount; i++) {
      const angle = (i / finCount) * Math.PI * 2;
      const fin = new THREE.Mesh(finGeo, goldChassisMat);
      fin.position.x = Math.cos(angle) * 1.28;
      fin.position.y = Math.sin(angle) * 1.28;
      fin.position.z = 0.3;
      fin.rotation.z = angle + 0.52;
      apertureFinGroup.add(fin);
    }
    engineGroup.add(apertureFinGroup);

    // Convex optical core lens
    const coreLensGeo = new THREE.SphereGeometry(0.88, 48, 48);
    const coreLensMat = new THREE.MeshPhysicalMaterial({
      color: 0x161420,
      metalness: 0.12,
      roughness: 0.06,
      transmission: 0.85,
      thickness: 1.5,
      ior: 1.62,
      transparent: true,
      opacity: 0.88,
      reflectivity: 0.85,
    });
    const coreLens = new THREE.Mesh(coreLensGeo, coreLensMat);
    coreLens.position.z = 0.52;
    coreLens.scale.set(1, 1, 0.32);
    engineGroup.add(coreLens);

    // Inner gold bezel
    const innerBezelGeo = new THREE.TorusGeometry(0.89, 0.022, 24, 72);
    const innerBezel = new THREE.Mesh(innerBezelGeo, goldChassisMat);
    innerBezel.position.z = 0.55;
    engineGroup.add(innerBezel);

    // Precision reticle rings
    const reticleRingGeo = new THREE.TorusGeometry(0.52, 0.014, 16, 64);
    const reticleRingMat = new THREE.MeshBasicMaterial({ color: 0xecd7ae, transparent: true, opacity: 0.85 });
    const reticleRing = new THREE.Mesh(reticleRingGeo, reticleRingMat);
    reticleRing.position.z = 0.58;
    engineGroup.add(reticleRing);

    // Precision reticle crosshairs
    const crossHairMat = new THREE.LineBasicMaterial({ color: 0xc9a96e, transparent: true, opacity: 0.75 });
    const crossHairGeoH = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-0.45, 0, 0.59), new THREE.Vector3(0.45, 0, 0.59)]);
    const crossHairGeoV = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, -0.45, 0.59), new THREE.Vector3(0, 0.45, 0.59)]);
    const crossHairH = new THREE.Line(crossHairGeoH, crossHairMat);
    const crossHairV = new THREE.Line(crossHairGeoV, crossHairMat);
    engineGroup.add(crossHairH);
    engineGroup.add(crossHairV);

    // Central luminous nucleus
    const innerNucleusGeo = new THREE.SphereGeometry(0.2, 32, 32);
    const innerNucleusMat = new THREE.MeshStandardMaterial({
      color: 0xffe6b8,
      emissive: 0xc9a96e,
      emissiveIntensity: 1.8,
      roughness: 0.1,
      metalness: 0.3,
    });
    const innerNucleus = new THREE.Mesh(innerNucleusGeo, innerNucleusMat);
    innerNucleus.position.z = 0.52;
    innerNucleus.scale.set(1, 1, 0.4);
    engineGroup.add(innerNucleus);

    // Convergence signal vectors
    const signalVectorsGroup = new THREE.Group();
    engineGroup.add(signalVectorsGroup);
    const signalVectorLines: { line: THREE.Line; id: string; baseOpacity: number }[] = [];
    const beads: THREE.Mesh[] = [];

    SIGNALS.forEach((sig) => {
      const rad = (sig.angleDeg * Math.PI) / 180;
      const outerR = 3.5;
      const innerR = 0.88;

      const p1 = new THREE.Vector3(Math.cos(rad) * outerR, Math.sin(rad) * outerR, -0.2);
      const p2 = new THREE.Vector3(Math.cos(rad) * innerR, Math.sin(rad) * innerR, 0.5);

      const curve = new THREE.LineCurve3(p1, p2);
      const points = curve.getPoints(24);
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);

      const lineMat = new THREE.LineDashedMaterial({
        color: 0xc9a96e,
        dashSize: 0.15,
        gapSize: 0.1,
        transparent: true,
        opacity: 0.4,
      });

      const lineMesh = new THREE.Line(lineGeo, lineMat);
      lineMesh.computeLineDistances();
      signalVectorsGroup.add(lineMesh);
      signalVectorLines.push({ line: lineMesh, id: sig.id, baseOpacity: 0.4 });

      const beadGeo = new THREE.SphereGeometry(0.045, 12, 12);
      const beadMat = new THREE.MeshBasicMaterial({ color: 0xecd7ae });
      const bead = new THREE.Mesh(beadGeo, beadMat);
      bead.position.copy(p1);
      signalVectorsGroup.add(bead);
      beads.push(bead);
    });

    // Exit beam down to BETTER JUDGMENT
    const exitPoints = [
      new THREE.Vector3(0, -0.88, 0.52),
      new THREE.Vector3(0, -3.7, -0.2),
    ];
    const exitGeo = new THREE.BufferGeometry().setFromPoints(exitPoints);
    const exitMat = new THREE.LineBasicMaterial({
      color: 0xc9a96e,
      transparent: true,
      opacity: 0.8,
    });
    const exitBeam = new THREE.Line(exitGeo, exitMat);
    engineGroup.add(exitBeam);

    // Parallax
    let targetRotX = 0;
    let targetRotY = 0;
    let currRotX = 0;
    let currRotY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = (e.clientY / window.innerHeight) * 2 - 1;
      targetRotY = normX * 0.1;
      targetRotX = -normY * 0.08;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    // Responsive camera and layout
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || window.innerWidth;
      const newH = container.clientHeight || window.innerHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      if (newW <= 430) {
        // Mobile viewport (375x812, 390x844, 430x932): pull camera back and lift center to fit instrument and safe margin annotations
        camera.position.set(0, 0.45, 18.5);
        engineGroup.scale.setScalar(0.72);
      } else if (newW <= 768) {
        camera.position.set(0, 0.25, 14.5);
        engineGroup.scale.setScalar(0.88);
      } else if (newW <= 1200) {
        camera.position.set(0, 0.1, 12.2);
        engineGroup.scale.setScalar(1.0);
      } else {
        camera.position.set(0, 0.05, 11.2);
        engineGroup.scale.setScalar(1.0);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Motion preference check
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = motionQuery.matches;
    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
    };
    if (motionQuery.addEventListener) {
      motionQuery.addEventListener('change', handleMotionChange);
    } else {
      motionQuery.addListener(handleMotionChange);
    }

    // Visibility-aware rendering
    let isDocumentVisible = !document.hidden;
    const handleVisibilityChange = () => {
      isDocumentVisible = !document.hidden;
      if (isDocumentVisible) {
        lastTime = performance.now();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    let animationFrameId: number;
    let globalStartTime = performance.now();
    let lastTime = globalStartTime;

    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);

      // Visibility check
      if (!isDocumentVisible) return;

      // Reduced motion mode: render clean static resolved state
      if (prefersReducedMotion) {
        outerRing.rotation.z = 0;
        ticksGroup.rotation.z = 0;
        midRing.rotation.z = 0;
        glassDisc.rotation.z = 0;
        apertureFinGroup.rotation.z = 0;
        apertureRing.rotation.z = 0;
        coreLight.intensity = 3.6;
        innerNucleus.scale.set(1, 1, 0.4);
        exitMat.opacity = 0.85;
        renderer.render(scene, camera);
        return;
      }

      // Handle genuine Re-Calibrate restart cycle
      let sequenceTime: number;
      let isCalibrating = false;

      if (replayStartRef.current !== null) {
        const replayElapsed = (time - replayStartRef.current) * 0.001;
        if (replayElapsed < 4.5) {
          sequenceTime = replayElapsed;
          isCalibrating = true;
        } else {
          replayStartRef.current = null;
          globalStartTime = time;
          sequenceTime = (time - globalStartTime) * 0.001;
        }
      } else {
        sequenceTime = (time - globalStartTime) * 0.001;
      }

      // Parallax smooth interpolation
      currRotX += (targetRotX - currRotX) * 0.05;
      currRotY += (targetRotY - currRotY) * 0.05;
      engineGroup.rotation.x = currRotX;
      engineGroup.rotation.y = currRotY;

      // Real 4-stage synthesis sequence
      if (isCalibrating) {
        // Stage 1: 0.0s - 1.0s (Distributed signal surge)
        if (sequenceTime < 1.0) {
          const t = sequenceTime / 1.0;
          setEnginePhase('distributed');
          outerRing.rotation.z += 0.002 * (1 + t * 4);
          ticksGroup.rotation.z += 0.002 * (1 + t * 4);
          midRing.rotation.z -= 0.003 * (1 + t * 4);
          glassDisc.rotation.z += 0.0015;
          apertureFinGroup.rotation.z -= 0.005 * (1 + t * 3);
          coreLight.intensity = 1.8 + Math.sin(t * Math.PI) * 1.5;
          innerNucleus.scale.setScalar(0.7 + t * 0.2);
          exitMat.opacity = 0.2;
        }
        // Stage 2: 1.0s - 2.2s (Calibration lock & iris alignment)
        else if (sequenceTime < 2.2) {
          const t = (sequenceTime - 1.0) / 1.2;
          setEnginePhase('calibration');
          outerRing.rotation.z += 0.008 * (1 - t * 0.5);
          ticksGroup.rotation.z += 0.008 * (1 - t * 0.5);
          midRing.rotation.z -= 0.01 * (1 - t * 0.5);
          glassDisc.rotation.z += 0.003;
          apertureFinGroup.rotation.z = -0.5 * Math.sin(t * Math.PI);
          coreLight.intensity = 3.0 + Math.sin(t * Math.PI * 3) * 0.8;
          innerNucleus.scale.setScalar(0.9 + Math.sin(t * Math.PI * 2) * 0.2);
          exitMat.opacity = 0.4 * t;
        }
        // Stage 3: 2.2s - 3.4s (High-energy synthesis pulse)
        else if (sequenceTime < 3.4) {
          const t = (sequenceTime - 2.2) / 1.2;
          setEnginePhase('synthesis');
          outerRing.rotation.z += 0.004;
          ticksGroup.rotation.z += 0.004;
          midRing.rotation.z -= 0.006;
          glassDisc.rotation.z += 0.002;
          apertureFinGroup.rotation.z -= 0.004;
          const flash = Math.sin(t * Math.PI);
          coreLight.intensity = 4.2 + flash * 3.5;
          innerNucleus.scale.setScalar(1.0 + flash * 0.45);
          exitMat.opacity = 0.4 + flash * 0.6;
        }
        // Stage 4: 3.4s - 4.5s (Resolution & coherent decision beam)
        else {
          const t = (sequenceTime - 3.4) / 1.1;
          setEnginePhase('resolution');
          outerRing.rotation.z += 0.001;
          ticksGroup.rotation.z += 0.001;
          midRing.rotation.z -= 0.0015;
          glassDisc.rotation.z += 0.0008;
          coreLight.intensity = THREE.MathUtils.lerp(5.0, 3.8, t);
          innerNucleus.scale.setScalar(THREE.MathUtils.lerp(1.3, 1.0, t));
          exitMat.opacity = THREE.MathUtils.lerp(1.0, 0.8, t);
        }
      } else {
        // Continuous organic rotation & gentle pulse
        outerRing.rotation.z += 0.0006;
        ticksGroup.rotation.z += 0.0006;
        midRing.rotation.z -= 0.0009;
        glassDisc.rotation.z += 0.00035;
        apertureFinGroup.rotation.z -= 0.0012;
        apertureRing.rotation.z -= 0.0012;

        const pulse = 1.0 + 0.18 * Math.sin(sequenceTime * 2.2);
        coreLight.intensity = 3.6 * pulse;
        innerNucleus.scale.setScalar(0.95 + 0.1 * Math.sin(sequenceTime * 2.2));
        exitMat.opacity = 0.75 + 0.15 * Math.sin(sequenceTime * 1.8);
      }

      // Signal line hover highlighting
      const currentActive = activeSignalRef.current;
      signalVectorLines.forEach((item) => {
        const mat = item.line.material as THREE.LineDashedMaterial;
        if (currentActive === item.id) {
          mat.opacity = 0.95;
          mat.color.setHex(0xffe2a8);
        } else {
          mat.opacity = item.baseOpacity;
          mat.color.setHex(0xc9a96e);
        }
      });

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener('change', handleMotionChange);
      } else {
        motionQuery.removeListener(handleMotionChange);
      }
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <section id={sectionId} className="pe3-hero" aria-label="Enable My Growth Technology">
      <div className="pe3-ambient-glow" aria-hidden="true" />
      <div className="pe3-canvas-container" ref={mountRef} aria-hidden="true" />

      <div className="pe3-container">
        <header className="pe3-crest">
          <div className="pe3-badge">
            <span className="pe3-badge-dot" />
            <span className="pe3-badge-text pe3-badge-text-desktop">ENABLE MY GROWTH TECHNOLOGY</span>
            <span className="pe3-badge-text pe3-badge-text-mobile">ENABLE MY GROWTH TECHNOLOGY</span>
          </div>

          <h1 className="pe3-headline">
            Technology designed around <em>better human judgment.</em>
          </h1>

          <p className="pe3-subhead">
            We build technology that connects participation, evidence, context, and intelligence—helping
            organizations see more clearly and act with greater confidence.
          </p>
        </header>

        <div className="pe3-instrument-viewport" role="region" aria-label="Interactive 3D Engine Signals">
          {/* Central reticle readout: PERSPECTIVE is the primary central label, SYNTHESIS CORE is the technical descriptor */}
          <div className="pe3-core-readout" aria-hidden="true">
            <span className="pe3-core-tag">PERSPECTIVE</span>
            <span className="pe3-core-status">SYNTHESIS CORE</span>
          </div>

          {SIGNALS.map((s) => {
            const isActive = activeSignal === s.id;
            return (
              <div
                key={s.id}
                className={"pe3-signal-beacon " + s.posClass + (isActive ? " active" : "")}
                onMouseEnter={() => setActiveSignal(s.id)}
                onMouseLeave={() => setActiveSignal(null)}
                tabIndex={0}
                role="button"
                aria-label={s.title + " signal: " + s.sub}
                onFocus={() => setActiveSignal(s.id)}
                onBlur={() => setActiveSignal(null)}
              >
                <div className="pe3-calib-annotation">
                  <span className="pe3-calib-tick" />
                  <div className="pe3-calib-meta">
                    <span className="pe3-calib-code">{s.code}</span>
                    <span className="pe3-calib-label">{s.title}</span>
                  </div>
                  <span className="pe3-calib-leader" />
                </div>
                <span className="pe3-calib-sub">{s.sub}</span>
              </div>
            );
          })}

          <div className="pe3-judgment-anchor">
            <div className="pe3-judgment-plaque" role="status">
              <span className="pe3-beacon-dot" />
              <span className="pe3-judgment-text">BETTER JUDGMENT</span>
            </div>
            <span className="pe3-judgment-sub">DEFENSIBLE ORGANIZATIONAL ACTION</span>
          </div>
        </div>

        <div className="pe3-action-tier">
          <a href={systemsTargetId} className="pe3-btn pe3-btn-gold">
            Explore the Systems <span>&darr;</span>
          </a>
          <a href={contactHref} className="pe3-btn pe3-btn-outline">
            Discuss a Requirement <span>&rarr;</span>
          </a>
        </div>

        <div className="pe3-controller">
          <button
            type="button"
            className="pe3-replay-btn"
            onClick={handleReplay}
            disabled={isReplaying}
            aria-label="Replay synthesis animation"
          >
            <span
              style={{
                display: 'inline-block',
                transform: isReplaying ? 'rotate(360deg)' : 'none',
                transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              &#8634;
            </span>{' '}
            {isReplaying ? `CALIBRATING...` : 'REPLAY'}
          </button>
        </div>
      </div>
      <div className="pe3-transition-fade" aria-hidden="true" />
    </section>
  );
}

