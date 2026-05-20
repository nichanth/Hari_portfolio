import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function AnimatedSphere() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.x += 0.001;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2, 1]} />

      <meshStandardMaterial
        color="#22d3ee"
        wireframe
        emissive="#0891b2"
      />
    </mesh>
  );
}

function Particles() {
  const points = [];

  for (let i = 0; i < 200; i++) {
    points.push(
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 15
    );
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={new Float32Array(points)}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.03}
        color="#22d3ee"
      />
    </points>
  );
}

export default function HeroCanvas() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={1.5} />

        <pointLight position={[10, 10, 10]} />

        <AnimatedSphere />

        <Particles />
      </Canvas>
    </div>
  );
}