// import { useFrame } from "@react-three/fiber";
// import { getPlayerPosition } from "../../stores/player";
// import { tileSize } from "../../data/constants";
// import { setGameState } from "../../stores/player";
// const MAX = 200; 
// export default function useSnakeAnimation(ref, historyRef) {
//   useFrame((_, delta) => {
//     const obj = ref.current;
//     if (!obj) return;

//     const { currentRow, currentTile } = getPlayerPosition();
//     const targetX = currentTile * tileSize;
//     const targetY = currentRow * tileSize;

//     const dx = targetX - obj.position.x;
//     const dy = targetY - obj.position.y;
//     if((dx == 0 && dy == 0)){
//         setGameState(false);
//         return;
//     }
//     for(let i = 1; i < historyRef.current.length; i++){
//         if(historyRef.current[i].x == targetX || historyRef.current[i].y == targetY){
//             setGameState(false);
//             return;
//         }
//     }
//     if (Math.abs(dx) < 1 && Math.abs(dy) < 1) return;

//     const speed = tileSize * delta * 2.3;

//     if (Math.abs(dx) > Math.abs(dy)) {
//       obj.position.x += Math.sign(dx) * Math.min(Math.abs(dx), speed);
//     } else {
//       obj.position.y += Math.sign(dy) * Math.min(Math.abs(dy), speed);
//     }

//     historyRef.current.push(obj.position.clone());
//     if (historyRef.current.length > MAX) historyRef.current.shift();
//   });
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { getPlayerPosition } from "../../stores/player";
import { tileSize } from "../../data/constants";
import { setGameState } from "../../stores/player";

const MAX = 200;
const EPS = 0.5;

export default function useSnakeAnimation(ref, historyRef) {
  const frozeOnce = useRef(false);

  useFrame((_, delta) => {
    const obj = ref.current;
    if (!obj) return;

    const { currentRow, currentTile } = getPlayerPosition();
    const targetX = currentTile * tileSize;
    const targetY = currentRow * tileSize;

    const dx = targetX - obj.position.x;
    const dy = targetY - obj.position.y;

    // stop if we’re basically there
    if (Math.abs(dx) < EPS && Math.abs(dy) < EPS) return;

    // freeze ONCE if player is on the same TILE as head
    const headTx = Math.round(obj.position.x / tileSize);
    const headTy = Math.round(obj.position.y / tileSize);
    if (!frozeOnce.current && headTx === currentTile && headTy === currentRow) {
      setGameState(false);
      window.dispatchEvent(new Event("resetGameState"));
      frozeOnce.current = true;
      return;
    }

    // freeze ONCE if player is on any body TILE
    for (let i = 0; i < historyRef.current.length; i++) {
      const p = historyRef.current[i];
      if (
        Math.round(p.x / tileSize) === currentTile &&
        Math.round(p.y / tileSize) === currentRow
      ) {
        if (!frozeOnce.current) {
          setGameState(false);
          frozeOnce.current = true;
        }
        return;
      }
    }

    // move (no diagonals)
    const speed = tileSize * delta * 2.3;
    if (Math.abs(dx) > Math.abs(dy)) {
      obj.position.x += Math.sign(dx) * Math.min(Math.abs(dx), speed);
    } else {
      obj.position.y += Math.sign(dy) * Math.min(Math.abs(dy), speed);
    }

    // record trail
    historyRef.current.push(obj.position.clone());
    if (historyRef.current.length > MAX) historyRef.current.shift();
  });
}