import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Chip() {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#00E5FF" wireframe />
    </mesh>
  );
}