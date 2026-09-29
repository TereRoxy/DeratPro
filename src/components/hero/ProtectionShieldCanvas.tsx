import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function MolecularShield() {
  const shieldRef = useRef<THREE.Group>(null);
  const pointerTarget = useRef(new THREE.Vector2());
  const particlePositions = useMemo(() => {
    const points: number[] = [];
    const count = 72;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let index = 0; index < count; index += 1) {
      const y = 1 - (index / (count - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const angle = goldenAngle * index;
      points.push(
        Math.cos(angle) * radius * 1.42,
        y * 1.42,
        Math.sin(angle) * radius * 1.42,
      );
    }

    return new Float32Array(points);
  }, []);

  const plexusGeometry = useMemo(() => {
    const points = Array.from({ length: particlePositions.length / 3 }, (_, index) => {
      return new THREE.Vector3(
        particlePositions[index * 3],
        particlePositions[index * 3 + 1],
        particlePositions[index * 3 + 2],
      );
    });
    const linePositions: number[] = [];

    points.forEach((point, index) => {
      points.slice(index + 1).forEach((otherPoint) => {
        if (point.distanceTo(otherPoint) < 0.67) {
          linePositions.push(
            point.x, point.y, point.z,
            otherPoint.x, otherPoint.y, otherPoint.z,
          );
        }
      });
    });

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(linePositions, 3),
    );
    return geometry;
  }, [particlePositions]);

  useFrame(({ pointer }, delta) => {
    if (!shieldRef.current) return;

    pointerTarget.current.set(pointer.y * 0.12, pointer.x * 0.18);
    shieldRef.current.rotation.x = THREE.MathUtils.damp(
      shieldRef.current.rotation.x,
      pointerTarget.current.x + Math.sin(performance.now() * 0.00025) * 0.04,
      3,
      delta,
    );
    shieldRef.current.rotation.y = THREE.MathUtils.damp(
      shieldRef.current.rotation.y,
      pointerTarget.current.y,
      3,
      delta,
    );
  });

  return (
    <group ref={shieldRef}>
      <mesh>
        <icosahedronGeometry args={[1.42, 2]} />
        <meshBasicMaterial
          color="#0284c7"
          wireframe
          transparent
          opacity={0.17}
        />
      </mesh>
      <lineSegments geometry={plexusGeometry}>
        <lineBasicMaterial color="#38bdf8" transparent opacity={0.5} />
      </lineSegments>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
            count={particlePositions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#0d9488"
          size={0.045}
          sizeAttenuation
          transparent
          opacity={0.9}
        />
      </points>
      <mesh>
        <sphereGeometry args={[0.92, 32, 32]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.035} />
      </mesh>
      {[0, 1, 2].map((index) => (
        <mesh
          key={index}
          rotation={[
            (Math.PI / 3) * index,
            (Math.PI / 4) * index,
            (Math.PI / 5) * index,
          ]}
        >
          <torusGeometry args={[1.66 + index * 0.08, 0.006, 8, 120]} />
          <meshBasicMaterial color={index === 1 ? '#0d9488' : '#0284c7'} transparent opacity={0.5} />
        </mesh>
      ))}
      <mesh position={[0, 0, 0.04]}>
        <sphereGeometry args={[0.12, 24, 24]} />
        <meshBasicMaterial color="#38bdf8" />
      </mesh>
    </group>
  );
}

export function ProtectionShieldCanvas() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
        fallback={
          <div className="absolute inset-0 grid place-items-center">
            <div className="size-56 rounded-full border border-sky-400/30 bg-sky-400/5 shadow-glow sm:size-72" />
          </div>
        }
      >
        <ambientLight intensity={0.8} />
        <Float speed={1} rotationIntensity={0.1} floatIntensity={0.18}>
          <MolecularShield />
        </Float>
      </Canvas>
    </div>
  );
}
