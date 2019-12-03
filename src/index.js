import _ from "lodash";
import { doA, randomColor } from "./utils.js";
import { createSquares, createSquarePage } from "./components/square.js";
import "./styles/main.css";
import cursor from "./components/cursor.js";

function component() {
  const element = doA("div");
  console.log("kiscica");

  element.appendChild(createSquarePage());
  return element;
}

document.body.onload = cursor();
document.body.appendChild(component());

const squareHover = document.querySelectorAll(".square");
for (let i = 0; i < squareHover.length; i++) {
  squareHover[i].addEventListener("mouseenter", function() {
    squareHover[i].classList.remove("square");
    squareHover[i].style.backgroundColor = randomColor();
    squareHover[i].style.animation = "squareHover";
  });

  squareHover[i].addEventListener("click", function() {});
}
