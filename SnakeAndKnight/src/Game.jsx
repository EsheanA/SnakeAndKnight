import { useState } from "react";
import { tileSize } from "./data/constants";
import { Apple } from "./components/Apple";
import { Player } from "./components/Player";
import { Arena } from "./components/Arena";
// import { Controls } from "./components/Controls";
import { Scene } from "./components/Scene";
import { state } from "./stores/player"; // where you store current position
import useEventListeners from "./hooks/useEventListeners";
import "./Game.css";

export default function Game() {
  const [apples, setApples] = useState([]);

  function throwApple(direction) {
  if (apples.length >= 1) return;

  const row = state.currentRow;
  const tile = state.currentTile;

  let newRow = row;
  let newTile = tile;

  if (direction === "forward") newRow += 1;
  else if (direction === "backward") newRow -= 1;
  else if (direction === "left") newTile -= 1;
  else if (direction === "right") newTile += 1;

  const start = [state.currentTile * tileSize, state.currentRow * tileSize, 10];
  const end = [newTile * tileSize, newRow * tileSize, 10];

  const newApple = { start, end };
  setApples((prev) => [...prev, newApple]);

  // ✅ You already know the location here!
  console.log("Apple thrown to:", {
    startTile: { row, tile },
    endTile: { row: newRow, tile: newTile },
    worldCoords: { start, end },
  });
}

  // attach to keyboard listener
  useEventListeners({ throwApple });

  return (
    <div className="game">
      <Scene>
        <Arena />
        <Player />
               {apples.map((apple, i) => (
          <Apple key={i} start={apple.start} end={apple.end} />
        ))}
      </Scene>
      {/* <Controls /> */}
    </div>
  );
}