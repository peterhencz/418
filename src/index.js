import _ from "lodash";
import { doA, randomColor } from "./utils.js";
import { createSquares } from "./components/square.js";
import "./styles/main.css";

function component() {
  const element = doA("div");
  const squareContainer = doA("div", "square-container");

  const squares = createSquares();
  element.innerHTML = _.join(["Hello", "YOO"], " ");

  squares.forEach(square => squareContainer.appendChild(square));
  element.appendChild(squareContainer);
  return element;
}

document.body.appendChild(component());

const squareHover = document.querySelectorAll(".square");
for (let i = 0; i < squareHover.length; i++) {
  squareHover[i].addEventListener("mouseenter", function() {
    squareHover[i].classList.add("squareHover");
    squareHover[i].style.backgroundColor = randomColor();
  });
}
