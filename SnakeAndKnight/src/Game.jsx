
import { tileSize } from "./data/constants";
import { Apple } from "./components/Apple";
import { Player } from "./components/Player";

import { Arena } from "./components/Arena";
// import { Controls } from "./components/Controls";
import { Scene } from "./components/Scene";
import { state } from "./stores/player"; // where you store current position
import { Snake } from "./components/Snake"
import { Controls } from "./components/Controls";
import { useEffect, useState } from "react";
import useEventListeners from "./hooks/PlayerHooks/useEventListeners";
import "./Game.css";

export default function Game() {
  const [apples, setApples] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  useEffect(() => {
    const handler = () => setGameOver(true);
    window.addEventListener("gameOver", handler);
    return () => window.removeEventListener("gameOver", handler);
  }, []);

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

    const newApple = {
      start: [state.currentTile * tileSize, state.currentRow * tileSize, 10],
      end: [newTile * tileSize, newRow * tileSize, 10],
    };
    setApples((prev) => [...prev, newApple]);
  }

  // attach to keyboard listener
  useEventListeners({ throwApple });

  return (
    <div className="game">
      {
        !gameOver ? 
        <>
        <Scene>
          <Arena />
          <Snake/>
          <Player />
                {apples.map((apple, i) => (
            <Apple key={i} start={apple.start} end={apple.end} />
          ))}
        </Scene>
        </>
        :

        <div>
          <h1>GAME OVER</h1>
          <input type = "button" onClick = {()=>{window.location.reload()}} value = "RESTART" />
        </div>
      
        }
    </div>
  )
}
