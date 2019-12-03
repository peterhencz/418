import { doA } from "../utils";
import "../styles/cursor.css";

const body = document.body;

const cursor = e => {
  e = e || window.event;
  const circleCursor = doA("div");
  circleCursor.classList.add("circle-cursor");

  const pageX = e.pageX;
  const pageY = e.pageY;

  console.log("cursor");
  console.log(e.pageX);
  body.appendChild(circleCursor);
};

body.addEventListener("mousemove", cursor);

export default cursor;
