import _ from "lodash";
import { doA, randomColor } from "./utils.js";
import { createSquares } from "./components/square.js";
import "./styles/main.css";

function component() {
  const element = doA("div");
  const squareContainer = doA("div", "square-container");

  squareContainer.style.width = `${window.innerWidth / 2}px`;
  squareContainer.style.height = `${window.innerWidth / 2}px`;
  squareContainer.style.overflow = "hidden";
  const squares = createSquares();

  squares.forEach(square => squareContainer.appendChild(square));
  element.appendChild(squareContainer);
  return element;
}

document.body.appendChild(component());

// const cont = document.querySelector(".square-container");
// cont.addEventListener("mouseclick", function() {
//   console.log("cica");
//   cont.style.boxShadow =
//     "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.13);";
// });

const squareHover = document.querySelectorAll(".square");
for (let i = 0; i < squareHover.length; i++) {
  squareHover[i].addEventListener("mouseenter", function() {
    squareHover[i].classList.remove("square");
    squareHover[i].style.backgroundColor = randomColor();
    squareHover[i].style.animation = "squareHover";
  });
  console.log(randomColor());
  squareHover[i].addEventListener("click", function() {
  });
}
