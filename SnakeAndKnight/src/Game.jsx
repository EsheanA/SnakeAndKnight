import { Scene } from "./components/Scene"
import { Arena } from "./components/Arena"
import { Player } from "./components/Player";
import { Snake } from "./components/Snake"
import { Controls } from "./components/Controls";
import { useEffect, useState } from "react";
import "./Game.css";

export default function Game() {
  const [gameOver, setGameOver] = useState(false);
  useEffect(() => {
    const handler = () => setGameOver(true);
    window.addEventListener("gameOver", handler);
    return () => window.removeEventListener("gameOver", handler);
  }, []);
  return (
    <div className="game">
      {
        !gameOver ?
      <>
        <Scene>
        <Snake/>
        <Player />
        <Arena/>
        </Scene>
        <Controls />
      </> :
      <div>
        <h1>GAME OVER</h1>
        <input type = "button" onClick = {()=>{window.location.reload()}} value = "RESTART" />
      </div>
      }
    </div>
    
  );
}

