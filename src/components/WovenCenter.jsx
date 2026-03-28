import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const WovenParticles = () => {
  const pointsRef = useRef(null);
  const { size } = useThree();
  const compactScale = Math.min(
    1.35,
    Math.max(0.95, Math.min(size.width, size.height) / 760),
  );
  const pointSize = Math.min(0.024, Math.max(0.016, compactScale * 0.018));
  const mouse = useRef({ x: 0, y: 0 });
  const lastMoveAt = useRef(0);

  const velocities = useMemo(() => new Float32Array(18000 * 3), []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -((event.clientY / window.innerHeight) * 2 - 1);
      lastMoveAt.current = performance.now();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const { base, positions, count } = useMemo(() => {
    const knots = new THREE.TorusKnotGeometry(1.35, 0.42, 320, 30);
    const source = knots.attributes.position;
    const count = 18000;

    const base = new Float32Array(count * 3);
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const sourceIndex = i % source.count;
      const ix = i * 3;

      const x = source.getX(sourceIndex);
      const y = source.getY(sourceIndex);
      const z = source.getZ(sourceIndex);

      base[ix] = x;
      base[ix + 1] = y;
      base[ix + 2] = z;

      positions[ix] = x;
      positions[ix + 1] = y;
      positions[ix + 2] = z;
    }

    knots.dispose();

    return { base, positions, count };
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;

    const elapsed = clock.getElapsedTime();
    const attribute = pointsRef.current.geometry.attributes.position;
    const arr = attribute.array;

    const isMouseActive = performance.now() - lastMoveAt.current < 160;
    const mouseX = (mouse.current.x * 3) / compactScale;
    const mouseY = (mouse.current.y * 3 - 0.2) / compactScale;
    const mouseZ = 0;
    const influenceRadius = 1.5;

    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const wave = Math.sin(elapsed * 1.35 + i * 0.035) * 0.018;
      const targetX = base[ix] + wave;
      const targetY = base[ix + 1] + wave * 0.62;
      const targetZ = base[ix + 2] + Math.cos(elapsed + i * 0.02) * 0.011;

      const currentX = arr[ix];
      const currentY = arr[ix + 1];
      const currentZ = arr[ix + 2];

      if (isMouseActive) {
        const dx = currentX - mouseX;
        const dy = currentY - mouseY;
        const dz = currentZ - mouseZ;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < influenceRadius) {
          const force = (influenceRadius - dist) * 0.01;
          const safe = Math.max(dist, 0.001);

          velocities[ix] += (dx / safe) * force;
          velocities[ix + 1] += (dy / safe) * force;
          velocities[ix + 2] += (dz / safe) * force;
        }
      }

      velocities[ix] += (targetX - currentX) * 0.001;
      velocities[ix + 1] += (targetY - currentY) * 0.001;
      velocities[ix + 2] += (targetZ - currentZ) * 0.001;

      velocities[ix] *= 0.95;
      velocities[ix + 1] *= 0.95;
      velocities[ix + 2] *= 0.95;

      arr[ix] += velocities[ix];
      arr[ix + 1] += velocities[ix + 1];
      arr[ix + 2] += velocities[ix + 2];
    }

    attribute.needsUpdate = true;

    pointsRef.current.rotation.y = elapsed * 0.11;
    pointsRef.current.rotation.x = Math.sin(elapsed * 0.3) * 0.06;
  });

  return (
    <points ref={pointsRef} position={[0, 0.2, 0]} scale={compactScale}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        opacity={0.92}
        size={pointSize}
        transparent
        color="#ffffff"
      />
    </points>
  );
};

export const WovenCenter = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[1]"
    >
      <Canvas camera={{ fov: 42, position: [0, 0.35, 7.4] }}>
        <WovenParticles />
      </Canvas>
    </div>
  );
};
