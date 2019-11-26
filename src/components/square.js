import { doA } from "../utils";

const size = window.innerWidth / 20;
console.log(size);

const createSquarePage = () => {
  const squareContainer = doA("div", "square-container");

  squareContainer.style.width = `${window.innerWidth / 2}px`;
  squareContainer.style.height = `${window.innerWidth / 2}px`;
  squareContainer.style.overflow = "hidden";
  const squares = createSquares();

  squares.forEach(square => squareContainer.appendChild(square));
  return squareContainer;
};
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

export { makeSquare, createSquares, createSquarePage };
