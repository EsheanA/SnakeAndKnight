import { Scene } from "./components/Scene"
import { Arena } from "./components/Arena"
import { Player } from "./components/Player";
import { Controls } from "./components/Controls";
import "./Game.css";

export default function Game() {
  return (
    <div className="game">
      <Scene>
        <Player />
        <Arena/>
      </Scene>
      <Controls />
    </div>
    
  );
}