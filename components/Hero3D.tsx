import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Generate random points on a sphere
function generateSpherePoints(count: number, radius: number) {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = THREE.MathUtils.randFloatSpread(360);
    const phi = THREE.MathUtils.randFloatSpread(360);
    
    const x = radius * Math.sin(theta) * Math.cos(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(theta);
    
    points[i * 3] = x;
    points[i * 3 + 1] = y;
    points[i * 3 + 2] = z;
  }
  return points;
}

const Globe = () => {
  const pointsRef = useRef<THREE.Points>(null!);
  const sphereRef = useRef<THREE.Mesh>(null!);

  const points = useMemo(() => generateSpherePoints(2000, 2.5), []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.1;
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.1;
      // Pulse effect
      const scale = 1 + Math.sin(state.clock.elapsedTime) * 0.02;
      sphereRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 6]}>
      {/* Wireframe Core */}
      <Sphere ref={sphereRef} args={[2.4, 32, 32]}>
        <meshBasicMaterial 
          color="#00f3ff" 
          wireframe 
          transparent 
          opacity={0.15} 
        />
      </Sphere>

      {/* Floating Particles */}
      <Points ref={pointsRef} positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#bc13fe"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const Hero3D: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <Globe />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default Hero3D;