// Apple.jsx
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Apple({ start, end }) {
  const meshRef = useRef();
  const [elapsed, setElapsed] = useState(0);
  const duration = 0.6;

  const startVec = new THREE.Vector3(...start);
  const endVec = new THREE.Vector3(...end);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    const newElapsed = Math.min(elapsed + delta, duration);
    setElapsed(newElapsed);
    const t = newElapsed / duration;
    const height = Math.sin(t * Math.PI) * 30;
    const current = new THREE.Vector3().lerpVectors(startVec, endVec, t);
    current.z += height;
    meshRef.current.position.copy(current);
  });

  return (
    <mesh ref={meshRef} position={start}>
      <sphereGeometry args={[5, 16, 16]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}
