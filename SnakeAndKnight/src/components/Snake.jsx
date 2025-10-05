import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { tileSize } from "../data/constants";
import useSnakeAnimation from "../hooks/SnakeHooks/useSnakeAnimation";



export function Snake() {
  const ref = useRef(null);
  const headHistory = useRef([]);
  const [, force] = useState(0);
  const tick = useRef(0);
  useFrame(() => {
    if ((tick.current = (tick.current + 1) % 4) === 0) force(v => v + 1);
  });

  useSnakeAnimation(ref, headHistory);

  const body = headHistory.current.map((pos, i) => (
    <mesh key={i} position={[pos.x, pos.y, 14]}>
      <boxGeometry args={[30, 30, 28]} />
      <meshLambertMaterial color={0x4caf50} flatShading />
    </mesh>
  ));

  return (
    <>
      <mesh ref={ref} position={[2 * tileSize, 2 * tileSize, 14]}>
        <boxGeometry args={[30, 30, 28]} />
        <meshLambertMaterial color={0x4caf50} flatShading />
      </mesh>
      {body}
    </>
  );
}