import { FloorTile } from "./FloorTile";
import {WallX} from "./WallX"
import {WallY} from "./WallY"

import { floorHeight, floorWidth} from "../data/constants";

export function Arena() {
    const floor = () => {
        const tiles = [];
        for (let i = -floorHeight/2; i <= floorHeight/2; i++) {
          tiles.push(<FloorTile key={i} rowIndex={i} />);
        }
        return tiles;
      };
      
    return (
    <>
        <WallX height = {80} rowIndex={-1*floorHeight/2} />

        <WallY height = {80} rowIndex={-1*floorHeight/2-1} />
        {floor()}
        <WallY height = {80} rowIndex={floorHeight/2+1} />

        <WallX height = {80} rowIndex={floorHeight/2} />
    </>
  );
}