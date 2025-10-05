import { tileSize } from "../data/constants";
import { Brick } from "./Brick";

export function WallX({rowIndex, height}) {
  return (
    <group rotation-z = {Math.PI/2} position-x={rowIndex * (tileSize)}>
        <Brick height = {height} inclength = {3*tileSize}/>
    </group>
  );
}