import { calculateFinalPosition } from "./calculateFinalPosition";
// import { minTileIndex, maxTileIndex } from "../data/constants";
// import { rows } from "../data/metadata";
export const invalidPositions = new Map();

export default function addInvalidPosition(type, position){
  console.log(position);
  invalidPositions.set(position, type);
}
export function endsUpInValidPosition(currentPosition, moves) {
  const finalPosition = calculateFinalPosition(
    currentPosition,
    moves
  );
  const position = invalidPositions.get(finalPosition);
  if(position){
    return false;
  }
  return true

}