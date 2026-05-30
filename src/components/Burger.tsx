import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Burger: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Animation: floating and rotating
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Bottom Bun */}
      <mesh position={[0, -0.6, 0]}>
        <sphereGeometry args={[1, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#d2a679" />
      </mesh>
      <mesh position={[0, -0.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1, 1, 0.1, 32]} />
        <meshStandardMaterial color="#d2a679" />
      </mesh>

      {/* Patty */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.95, 0.95, 0.3, 32]} />
        <meshStandardMaterial color="#4d2600" roughness={0.8} />
      </mesh>

      {/* Cheese */}
      <mesh position={[0, -0.1, 0]} rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[1.1, 0.05, 1.1]} />
        <meshStandardMaterial color="#ffcc00" />
      </mesh>

      {/* Lettuce */}
      <mesh position={[0, 0.1, 0]}>
        <torusGeometry args={[0.8, 0.15, 16, 100]} />
        <meshStandardMaterial color="#2eb82e" />
      </mesh>

      {/* Tomato */}
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 0.1, 32]} />
        <meshStandardMaterial color="#ff3300" />
      </mesh>

      {/* Top Bun */}
      <mesh position={[0, 0.4, 0]}>
        <sphereGeometry args={[1, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#d2a679" />
      </mesh>
      
      {/* Sesame Seeds */}
      {[...Array(20)].map((_, i) => (
        <mesh 
          key={i} 
          position={[
            Math.sin(i * 137.5) * 0.6 * Math.random(),
            0.9 + Math.random() * 0.1,
            Math.cos(i * 137.5) * 0.6 * Math.random()
          ]}
          rotation={[Math.random(), Math.random(), Math.random()]}
        >
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      ))}
    </group>
  );
};

export default Burger;
