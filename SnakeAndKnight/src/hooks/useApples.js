import * as THREE from "three";
import { useRef } from "react";
import { useThree } from "@react-three/fiber";
import { state } from "../stores/player";
import { tileSize } from "../data/constants";
import { useAppleAnimation } from "./useAppleAnimation";

export function useApples() {
  const applesRef = useRef([]);
  const { scene } = useThree(); 
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

    // grid coordinates of where the apple lands
    const newRow = currentRow + dy;
    const newTile = currentTile + dx;

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

    console.log("Apple added at:", { row: newRow, tile: newTile });
  }

  function getApplePositions() {
    return applesRef.current.map(a => ({
      row: a.row,
      tile: a.tile,
    }));
  }

  return { throwApple, getApplePositions }; 
}