import { state } from "../../stores/player";
export function trackPlayer(ownState){
    const playerState = state;
    const x_diff = playerState.currentRow - ownState.headCurrentRow;
    const y_diff = playerState.currentTile - ownState.headCurrentTile;
    if(Math.abs(x_diff) >= Math.abs(y_diff)){
        return {x: x_diff/Math.abs(x_diff), y: 0};
    }
    else{
        return {x: 0, y: y_diff/Math.abs(y_diff)};
    }

}