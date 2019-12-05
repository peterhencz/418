import { doA } from "../utils";
import "../styles/cursor.css";

const body = document.body;

const cursor = () => {
  const circleCursor = doA("div");
  circleCursor.classList.add("circle-cursor");
  document.addEventListener("mousemove", e => {
    const pageX = e.pageX;
    const pageY = e.pageY;
    circleCursor.style.top = `${pageY - 15}px`;
    circleCursor.style.left = `${pageX - 15}px`;
  });
  body.appendChild(circleCursor);
};

export default cursor;
