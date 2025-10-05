import { Bounds } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import usePlayerAnimation from "../hooks/PlayerHooks/usePlayerAnimation";

export function Player() {
  const player = useRef(null);
  const camera = useThree((state) => state.camera);

  usePlayerAnimation(player);

  useEffect(() => {
    if (!player.current) return;
    player.current.add(camera);
  });

  return (
    <Bounds fit clip margin={15}>
      <group ref={player}>
        <group>

          <mesh position={[0, 0, 10]} castShadow receiveShadow>
            <boxGeometry args={[15, 15, 20]} />
            <meshLambertMaterial color={0xffffff} flatShading />
          </mesh>
          <mesh position={[0, 0, 21]} castShadow receiveShadow>
            <boxGeometry args={[2, 4, 2]} />
            <meshLambertMaterial color={0xf0619a} flatShading />
          </mesh>
        </group>
      </group>
    </Bounds>
  );
}