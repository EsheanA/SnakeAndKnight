import { tileSize } from "../data/constants";
import { Brick } from "./Brick";
import { useRef, useEffect} from "react"
import addInvalidPosition from "../utilities/endsUpInValidPosition";
import * as THREE from "three";
export function WallX({rowIndex, height}) {
  const ref = useRef();
  useEffect(()=>{
    if(ref.current){
      const worldPos = new THREE.Vector3();
      ref.current.getWorldPosition(worldPos);
      addInvalidPosition(worldPos, "Wall");
      // console.log("World position:", worldPos);
    }
  },[])

  return (
    <group ref={ref} rotation-z = {Math.PI/2} position-x={rowIndex * (tileSize)}>
        <Brick height = {height} inclength = {3*tileSize}/>
    </group>
  );
}