
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
  const ref = useRef<THREE.Points>(null);
  
  const particleCount = 1500; // Increased particle count
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
      
      // Random colors for particles
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        colors[i * 3] = 0.545; // Purple
        colors[i * 3 + 1] = 0.361;
        colors[i * 3 + 2] = 0.965;
      } else if (colorChoice < 0.66) {
        colors[i * 3] = 0.024; // Cyan
        colors[i * 3 + 1] = 0.714;
        colors[i * 3 + 2] = 0.831;
      } else {
        colors[i * 3] = 0.063; // Green
        colors[i * 3 + 1] = 0.725;
        colors[i * 3 + 2] = 0.506;
      }
    }
    return [positions, colors];
  }, []);

  // Create geometry with color attribute
  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geom;
  }, [positions, colors]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.08;
      ref.current.rotation.y += delta * 0.03;
      ref.current.rotation.z += delta * 0.01;
    }
  });

  return (
    <points ref={ref} geometry={geometry} frustumCulled={false}>
      <pointsMaterial
        transparent
        vertexColors
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default ParticleField;
