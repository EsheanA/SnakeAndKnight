import { calculateFinalPosition } from "./calculateFinalPosition";

export function endsUpInValidPosition(currentPosition, moves) {
  const finalPosition = calculateFinalPosition(
    currentPosition,
    moves
  );
  if((finalPosition.rowIndex <= -7 || finalPosition.rowIndex >= 8) || (finalPosition.tileIndex <= -7 || finalPosition.tileIndex >= 7)){
    console.log(finalPosition);
    return false;
  }
  console.log(finalPosition);

  return true;
}
