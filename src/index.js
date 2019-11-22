import _ from "lodash";
import { doA } from "./utils.js";
import { createSquares } from "./components/square.js";
import "./styles/main.css";

function component() {
  const element = doA("div");
  const squares = createSquares();
  element.innerHTML = _.join(["Hello", "YOO"], " ");

  squares.forEach(square => element.appendChild(square));

  return element;
}

document.body.appendChild(component());
