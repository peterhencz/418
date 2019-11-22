const doA = what => {
  const element = document.createElement(what);
  return element;
};

const colors = [
  "#ef431f",
  "#e8ae42",
  "#7bbda1",
  "#29a7c0",
  "#f9cd4a",
  "#517f97",
];

const randomColor = () => {
  const color = colors[Math.floor(Math.random() * colors.length)];
  return color;
};

export { doA, randomColor };
