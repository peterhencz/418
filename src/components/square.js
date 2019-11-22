import { doA } from "../utils";

const size = window.innerWidth / 20;
console.log(size);

const makeSquare = () => {
  const square = doA("div", "square");

  square.style.width = `${size}px`;
  square.style.height = `${size}px`;
  // square.style.borderRadius = `${Math.floor(Math.random() * 50) +
  //   50}px ${Math.floor(Math.random() * 50) + 50}px ${Math.floor(
  //   Math.random() * 50
  // ) + 50}px ${Math.floor(Math.random() * 50) + 50}px `;

  return square;
};

const createSquares = () => {
  let squares = [];
  for (let i = 0; i <= 1000; i++) {
    const square = makeSquare();
    squares.push(square);
  }
  return squares;
};

export { makeSquare, createSquares };
