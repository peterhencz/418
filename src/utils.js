const doSomething = (what, cl) => {
  const element = document.createElement(what);
  element.classList.add(`${cl}`);
  return element;
};

const colors = [
  "#b2a1ce",
  "#2a5150",
  "#4a8b9d",
  "#d7c7ae",
  "#837e94",
  "#fad763",
  "#839b9b",
  "#90504e",
  "#d6856a",
  "#a69ee9",
  "#cbdae1",
  "#d2d4c9",
  "#d8d7d2",
  "#dadde6",
  "#dad7d2",
  "#dad4d6",
  "#c7a991",
  "#d7a350",
  "#484e2a",
  "#c1a4a9",
  "#a99690",
  "#d5a448",
];

const randomColor = () => {
  const color = colors[Math.floor(Math.random() * colors.length)];
  return color;
};

const createPage = wrapperClass => {
  document.body.innerHTML = "";
  const wrapper = doSomething("div", `${wrapperClass}`);
  document.body.appendChild(wrapper);
  console.log(`hello ${wrapperClass}`);
  wrapper.innerHTML = `hello ${wrapperClass}`;
};

export { doSomething, randomColor, createPage };
