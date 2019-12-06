import _ from "lodash";
import { doSomething, randomColor, createPage } from "./utils.js";
import { createSquares, createSquarePage } from "./components/square.js";
import cursor from "./components/cursor.js";

import "./styles/index.scss";
function app() {
  const element = doSomething("div", "main");
  console.log("kiscica");

  const link1 = doSomething("div", "link");
  link1.innerHTML = "yolo";
  console.log(link1);

  element.appendChild(link1);

  return link1;
}

document.body.onload = cursor();
document.body.appendChild(app());

const link = document.querySelector(".link");
link.addEventListener("click", () => {
  console.log("yolo");
});

// const squareHover = document.querySelectorAll(".square");
// for (let i = 0; i < squareHover.length; i++) {
//   squareHover[i].addEventListener("mouseenter", function() {
//     squareHover[i].classList.remove("square");
//     squareHover[i].style.backgroundColor = randomColor();
//     squareHover[i].style.animation = "squareHover";
//   });

//   squareHover[i].addEventListener("click", function() {});
// }
