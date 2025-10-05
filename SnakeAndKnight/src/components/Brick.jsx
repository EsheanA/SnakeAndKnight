import { floorWidth,tileSize } from "../data/constants";

export function Brick({height, inclength}) {
  return (
     <mesh position-z={height / 2 }>
       <boxGeometry args={[floorWidth*tileSize+inclength, tileSize, height]} />
       <meshLambertMaterial color={0xA12B1B} flatShading />
     </mesh>
  );
}