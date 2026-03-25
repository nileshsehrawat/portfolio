import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import {
  AdditiveBlending,
  BufferGeometry,
  Float32BufferAttribute,
  IcosahedronGeometry,
  MathUtils,
  MeshPhysicalMaterial,
  PointsMaterial,
  SphereGeometry,
  TorusGeometry,
} from "three";

// Create multiple satellite geometries with different scales
const satelliteGeometryLarge = new IcosahedronGeometry(0.35, 1);
const satelliteGeometryMedium = new IcosahedronGeometry(0.22, 1);
const satelliteGeometrySmall = new IcosahedronGeometry(0.14, 0);
const satelliteGeometryTiny = new IcosahedronGeometry(0.08, 0);

const coreGeometry = new SphereGeometry(0.75, 32, 32);
const coreRingGeometry = new TorusGeometry(1.05, 0.03, 12, 80);

// Materials for different crystal sizes
const coreMaterial = new MeshPhysicalMaterial({
  color: "#0d0d0d",
  metalness: 0.8,
  roughness: 0.01,
  reflectivity: 1,
  clearcoat: 1,
  clearcoatRoughness: 0.01,
  transmission: 0.3,
  thickness: 0.9,
  ior: 1.25,
});

const coreRingMaterial = new MeshPhysicalMaterial({
  color: "#3a3a3a",
  metalness: 0.9,
  roughness: 0.08,
  emissive: "#2a2a2a",
  emissiveIntensity: 0.25,
  clearcoat: 1,
  clearcoatRoughness: 0.1,
});

const satelliteMaterialLarge = new MeshPhysicalMaterial({
  color: "#2a2a2a",
  metalness: 1,
  roughness: 0.06,
  clearcoat: 1,
  clearcoatRoughness: 0.04,
});

const satelliteMaterialMedium = new MeshPhysicalMaterial({
  color: "#323232",
  metalness: 0.95,
  roughness: 0.08,
  clearcoat: 1,
  clearcoatRoughness: 0.05,
});

const satelliteMaterialSmall = new MeshPhysicalMaterial({
  color: "#2e2e2e",
  metalness: 0.9,
  roughness: 0.1,
  clearcoat: 1,
});

const coreScale = 1.2;

const ambientMaterial = new PointsMaterial({
  color: "#505050",
  size: 0.018,
  transparent: true,
  opacity: 0.35,
  depthWrite: false,
  blending: AdditiveBlending,
});

export const AnimatedBoxes = () => {
  const systemRef = useRef(null);
  const coreRef = useRef(null);
  const coreRingRef = useRef(null);
  const satellitesRef = useRef([]);
  const ambientRef = useRef(null);

  const isSm = useMediaQuery({
    maxWidth: "40rem",
  });

  // Generate satellite configuration with varied sizes and orbits
  const satellites = useMemo(() => {
    const count = isSm ? 28 : 42;
    const satellites = [];

    for (let i = 0; i < count; i++) {
      const sizeCategory = i % 4; // 0: large, 1: medium, 2: small, 3: tiny
      const orbitRadius = 2.5 + (i % 7) * 1.1 + Math.random() * 0.5;
      const orbitHeight = MathUtils.randFloatSpread(3.2);

      satellites.push({
        id: i,
        sizeCategory,
        orbitRadius,
        orbitHeight,
        orbitPlane: (i % 3) * (Math.PI / 3),
        speed: MathUtils.randFloat(0.4, 1.2) * (0.8 + Math.random() * 0.4),
        rotationSpeed: MathUtils.randFloat(0.6, 1.8),
        phase: MathUtils.randFloat(0, Math.PI * 2),
        tilt: MathUtils.randFloatSpread(Math.PI / 6),
      });
    }
    return satellites;
  }, [isSm]);

  // Ambient energy particles
  const ambientCount = isSm ? 280 : 450;
  const ambientParticles = useMemo(() => {
    const particles = [];
    for (let i = 0; i < ambientCount; i++) {
      particles.push({
        radius: MathUtils.randFloat(1.8, 7.5),
        height: MathUtils.randFloatSpread(4),
        speed: MathUtils.randFloat(0.08, 0.35),
        phase: MathUtils.randFloat(0, Math.PI * 2),
        plane: Math.random() > 0.5 ? 1 : -1,
      });
    }
    return particles;
  }, [ambientCount]);

  const ambientPositions = useMemo(
    () => new Float32Array(ambientCount * 3),
    [ambientCount],
  );

  const ambientGeometry = useMemo(() => {
    const geometry = new BufferGeometry();
    geometry.setAttribute(
      "position",
      new Float32BufferAttribute(ambientPositions, 3),
    );
    return geometry;
  }, [ambientPositions]);

  useFrame((_state, delta) => {
    const elapsed = _state.clock.getElapsedTime();

    // Gentle system-wide rotation
    if (systemRef.current) {
      systemRef.current.rotation.y += delta * 0.05;
      systemRef.current.rotation.x = MathUtils.lerp(
        systemRef.current.rotation.x,
        Math.sin(elapsed * 0.15) * 0.08,
        0.015,
      );
    }

    // Core pulse and rotation
    if (coreRef.current) {
      const pulse = 1 + Math.sin(elapsed * 2.2) * 0.08;
      coreRef.current.scale.setScalar(coreScale * pulse);
      coreRef.current.rotation.y += delta * 0.4;
      coreRef.current.rotation.x += delta * 0.12;
    }

    // Core ring - subtle orbital marker
    if (coreRingRef.current) {
      coreRingRef.current.rotation.x =
        Math.PI / 2 + Math.sin(elapsed * 0.3) * 0.22;
      coreRingRef.current.rotation.z += delta * 0.38;
      const ringPulse = 1 + Math.sin(elapsed * 1.5) * 0.05;
      coreRingRef.current.scale.setScalar(ringPulse);
    }

    // Update each satellite with gravity-like orbital dynamics
    satellitesRef.current.forEach((satellite, index) => {
      if (!satellite) return;

      const sat = satellites[index];
      const t = elapsed * sat.speed + sat.phase;

      // Elliptical orbit with plane rotation
      const baseAngle = t + sat.orbitPlane;
      const eccentricity = 0.3 + Math.sin(elapsed * 0.3 + sat.phase * 2) * 0.15;
      const radiusModulated =
        sat.orbitRadius * (1 + eccentricity * Math.cos(baseAngle));

      // Multi-plane orbit for depth
      const planeRotation = Math.sin(elapsed * 0.2 + sat.tilt) * 0.25;

      satellite.position.x =
        Math.cos(baseAngle + planeRotation) * radiusModulated;
      satellite.position.y =
        sat.orbitHeight +
        Math.sin(baseAngle * 0.7) * 0.8 +
        Math.cos(elapsed * 0.4 + sat.phase) * 0.3;
      satellite.position.z =
        Math.sin(baseAngle + planeRotation) * radiusModulated;

      // Independent rotation for each crystal
      satellite.rotation.x += delta * sat.rotationSpeed * 0.5;
      satellite.rotation.y += delta * sat.rotationSpeed * 0.7;
      satellite.rotation.z += delta * sat.rotationSpeed * 0.3;
    });

    // Ambient energy field particles
    if (ambientRef.current) {
      ambientParticles.forEach((particle, index) => {
        const t = elapsed * particle.speed + particle.phase;
        const i3 = index * 3;
        ambientPositions[i3] =
          Math.cos(t) * particle.radius + Math.sin(t * 0.3) * 0.3;
        ambientPositions[i3 + 1] =
          particle.height +
          Math.sin(t * 0.6) * 0.4 +
          Math.cos(elapsed * 0.2) * 0.2;
        ambientPositions[i3 + 2] =
          Math.sin(t) * particle.radius * particle.plane +
          Math.cos(t * 0.4) * 0.25;
      });
      ambientGeometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <>
      <group position={[0, 1.8, 0]} ref={systemRef}>
        <mesh geometry={coreGeometry} material={coreMaterial} ref={coreRef} />
        <mesh
          geometry={coreRingGeometry}
          material={coreRingMaterial}
          ref={coreRingRef}
          rotation={[0, 0, 0]}
        />
        <points
          geometry={ambientGeometry}
          material={ambientMaterial}
          ref={ambientRef}
        />
        {satellites.map((satConfig, index) => {
          let geometry, material;

          switch (satConfig.sizeCategory) {
            case 0: // Large
              geometry = satelliteGeometryLarge;
              material = satelliteMaterialLarge;
              break;
            case 1: // Medium
              geometry = satelliteGeometryMedium;
              material = satelliteMaterialMedium;
              break;
            case 2: // Small
              geometry = satelliteGeometrySmall;
              material = satelliteMaterialSmall;
              break;
            case 3: // Tiny
            default:
              geometry = satelliteGeometryTiny;
              material = satelliteMaterialSmall;
          }

          return (
            <mesh
              key={`sat-${satConfig.id}`}
              geometry={geometry}
              material={material}
              ref={(element) => {
                satellitesRef.current[index] = element;
              }}
            />
          );
        })}
      </group>
    </>
  );
};
