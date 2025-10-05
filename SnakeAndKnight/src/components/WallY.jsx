import { tileSize } from "../data/constants";
import { Brick } from "./Brick";
export function WallY({rowIndex, height}) {
  return (
    <group position-y={rowIndex * tileSize} >
        <Brick height = {height} inclength = {0}/>
    </group>
  );
}