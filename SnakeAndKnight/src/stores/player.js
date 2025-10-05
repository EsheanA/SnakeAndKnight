export const state = {
    currentRow: 0,
    currentTile: 0,
    movesQueue: [],
  };
  
  export function queueMove(direction) {
    if(state.movesQueue <= 3){
      state.movesQueue.push(direction);
    }
    
  }
  
  export function stepCompleted() {
    const direction = state.movesQueue.shift();
    console.log("woo")
    if (direction === "forward") state.currentRow += 1;
    if (direction === "backward") state.currentRow -= 1;
    if (direction === "left") state.currentTile -= 1;
    if (direction === "right") state.currentTile += 1;
    // if (direction === "jump") state.currentHeight += 1;
  }