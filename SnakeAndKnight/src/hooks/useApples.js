// import { useRef } from "react";
// import { tileSize } from "../data/constants";
// import { state } from "../stores/player";
// import { useAppleAnimation } from "./useAppleAnimation";
// import { dynamicBufferAttribute } from "three/tsl";
// import { useThree } from "@react-three/fiber";

// export function useApples() {
//   const applesRef = useRef([]);

//   useAppleAnimation(applesRef);
  
//   const directionOffsets = {
//     forward: [0, 1],
//     backward: [0, -1],
//     left: [-1, 0],
//     right: [1, 0],
//   };
  
//   function throwApple() {
//     const { currentRow, currentTile, facing = "forward" } = state;
//     const [dx, dy] = directionOffsets[facing];
    
//     // const newApple = {
//     //   row: currentRow + dy,
//     //   tile: currentTile + dx,
//     //   id: Date.now(), // Add unique ID for tracking
//     // };
//     const start = new THREE.Vector3(currentTile * tileSize, currentRow * tileSize, 0);
//     const end = start.clone().add(new THREE.Vector3(dx * tileSize, dy * tileSize, 0));

//     const mesh = new THREE.Mesh(
//       new THREE.SphereGeometry(2, 16, 16),
//       new THREE.MeshStandardMaterial({ color: "red" })
//     );
    
//     scene.add(mesh);

//     applesRef.current.push({mesh, 
//       start,
//       end,
//       progress: 0,
//       duration: 0.5,
//     });
//   }
  
//   return { throwApple };
// }

import * as THREE from "three";
import { useRef } from "react";
import { useThree } from "@react-three/fiber";
import { state } from "../stores/player";
import { tileSize } from "../data/constants";
import { useAppleAnimation } from "./useAppleAnimation";

export function useApples() {
  const applesRef = useRef([]);
  const { scene } = useThree();  // get scene from R3F
  useAppleAnimation(applesRef);

  const directionOffsets = {
    forward: [0, 1],
    backward: [0, -1],
    left: [-1, 0],
    right: [1, 0],
  };

  function throwApple() {
    const { currentRow, currentTile, facing = "forward" } = state;
    const [dx, dy] = directionOffsets[facing];

    const start = new THREE.Vector3(currentTile * tileSize, currentRow * tileSize, 0);
    const end = start.clone().add(new THREE.Vector3(dx * tileSize, dy * tileSize, 0));

    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(3, 16, 16),
      new THREE.MeshStandardMaterial({ color: "red" })
    );


    const newRow = currentRow + dy;
    const newTile = currentTile+dx;
    scene.add(mesh);

    



    applesRef.current.push({
      mesh,
      row: newRow,
      tile: newTile,
      start,
      end,
      progress: 0,
      duration: 0.5, // seconds
    });

  }

  function getApplePositions(){
    return applesRef.current.map(a => ({
      ro: a.row,
      title: a.title
    }));
  }

  return { throwApple, getApplePositions };
}
