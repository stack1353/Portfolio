import React, { useMemo, useRef, memo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const GlobeMesh: React.FC = memo(() => {
  const meshRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0025;
    }
  });

  const points = useMemo(() => {
    const count = 200; // Reduced from 300 for better performance
    const pts: Array<[number, number, number]> = [];
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = 1.02; // slightly above surface
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      pts.push([x, y, z]);
    }
    return pts;
  }, []);

  return (
    <group ref={meshRef}>
      {/* Core sphere with neon gradient */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#0ea5e9" emissive="#00d4ff" emissiveIntensity={0.25} metalness={0.2} roughness={0.4} />
      </mesh>

      {/* Wireframe overlay */}
      <mesh>
        <sphereGeometry args={[1.01, 16, 16]} />
        <meshBasicMaterial color="#a855f7" wireframe opacity={0.3} transparent />
      </mesh>

      {/* Glowing points */}
      {points.map((p, i) => (
        <mesh key={i} position={p as any}>
          <sphereGeometry args={[0.01, 4, 4]} />
          <meshBasicMaterial color="#22d3ee" />
        </mesh>
      ))}
    </group>
  );
});

const ThreeGlobe: React.FC = memo(() => {
  return (
    <div className="absolute inset-0 -z-0">
      <Canvas 
        camera={{ position: [0, 0, 2.6], fov: 50 }}
        performance={{ min: 0.5 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#7c3aed" />
        <pointLight position={[-5, -5, -5]} intensity={0.6} color="#22d3ee" />
        <Suspense fallback={null}>
          <GlobeMesh />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} autoRotate={false} />
      </Canvas>
    </div>
  );
});

export default ThreeGlobe;


