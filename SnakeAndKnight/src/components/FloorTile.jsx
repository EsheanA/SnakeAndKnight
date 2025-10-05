import { floorWidth, tileSize } from "../data/constants";
export function FloorTile({ rowIndex, children}) {
  return (
    <>
      <group position-y={rowIndex * tileSize}>
        <mesh>
          <boxGeometry args={[floorWidth*tileSize, tileSize, 0]} />
          <meshLambertMaterial color={0x000000} flatShading />
        </mesh>
        {children}
      </group>
    </>
  );
  
}