
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface AnimatedSphereProps {
  position: [number, number, number];
  color: string;
  scale?: number;
}

const AnimatedSphere = ({ position, color, scale = 1 }: AnimatedSphereProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.z += delta * 0.4;
      meshRef.current.position.x += Math.sin(state.clock.elapsedTime * 1.5) * 0.01;
      meshRef.current.position.z += Math.cos(state.clock.elapsedTime * 1.5) * 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={[scale, scale, scale]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.7}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
};

export default AnimatedSphere;
