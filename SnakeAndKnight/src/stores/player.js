import { endsUpInValidPosition } from "../utilities/endsUpInValidPosition";
export const state = {
    currentRow: 0,
    currentTile: 0,
    movesQueue: [],
  };
  
  export function queueMove(direction) {
    const validMove = endsUpInValidPosition({ rowIndex: state.currentRow, tileIndex: state.currentTile },
      [...state.movesQueue, direction]);
  if(!validMove)
      return;
    if(state.movesQueue <= 5){
      state.movesQueue.push(direction);
    }
    
  }
  
  export function stepCompleted() {
    const direction = state.movesQueue.shift();
    if (direction === "forward") state.currentRow += 1;
    if (direction === "backward") state.currentRow -= 1;
    if (direction === "left") state.currentTile -= 1;
    if (direction === "right") state.currentTile += 1;
    // if (direction === "jump") state.currentHeight += 1;
  }