import _ from "lodash";
import doA from "./utils.js";
import "./styles/main.css";

function component() {
  const element = doA("div");

  element.innerHTML = _.join(["Hello", "YOO"], " ");

  return element;
}

document.body.appendChild(component());
