import { doA, randomColor } from "../utils";

console.log(randomColor);
const makeSquare = () => {
  const square = doA("div");
  square.classList.add("square");
  square.style.backgroundColor = randomColor();

  return square;
};

const createSquares = () => {
  let squares = [];
  for (let i = 0; i < 6; i++) {
    const square = makeSquare();
    squares.push(square);
  }

  return squares;
};

export { makeSquare, createSquares };
