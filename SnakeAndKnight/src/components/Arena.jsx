import { FloorTile } from "./FloorTile";
import {WallX} from "./WallX"
import {WallY} from "./WallY"

import { floorHeight, floorWidth} from "../data/constants";

export function Arena() {
    const height = 40;
    const floor = () => {
        const tiles = [];
        for (let i = -floorHeight/2; i <= floorHeight/2; i++) {
          tiles.push(<FloorTile key={i} rowIndex={i} />);
        }
        return tiles;
      };
      
    return (
    <>
        <WallX height = {height} rowIndex={-1*floorHeight/2 + 0.25} />

        <WallY height = {height} rowIndex={-1*floorHeight/2-1} />
        {floor()}
        <WallY height = {height} rowIndex={floorHeight/2+1} />

        <WallX height = {height} rowIndex={floorHeight/2} />
    </>
  );
}