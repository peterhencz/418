import { doA } from "../utils";

const makeSquare = () => {
  const square = doA("div", "square");

  return square;
};

const createSquares = () => {
  let squares = [];
  for (let i = 0; i < 600; i++) {
    const square = makeSquare();
    squares.push(square);
  }
  return squares;
};

export { makeSquare, createSquares };
