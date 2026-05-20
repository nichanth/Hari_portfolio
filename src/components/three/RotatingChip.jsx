import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function RotatingChip() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.01;
    ref.current.rotation.x += 0.005;
  });

  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[2, 0]} />
      <meshStandardMaterial color="#00E5FF" wireframe />
    </mesh>
  );
}