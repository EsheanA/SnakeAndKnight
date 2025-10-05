import { tileSize } from "../data/constants";
import { Brick } from "./Brick";
import { useRef } from "react";
import addInvalidPosition from "../hooks/usePlayerAnimation";

export function WallY({rowIndex, height}) {
  const ref = useRef();
  return (
    <group position-y={rowIndex * tileSize} >
        <Brick height = {height} inclength = {0}/>
    </group>
  );
}
