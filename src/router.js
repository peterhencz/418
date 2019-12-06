import doSomething from "./utils.js";

const routes = {
  route1: "kiscica",
  route2: "<3",
};

const createMenu = () => {
  console.table(routes);

  const links = Object.entries(routes);

  console.table(links);

  const menu = links.map(object => {
    let key = object[0];
    let value = object[1];
    console.log(key, value);
    let link = document.createElement("div");
    link.classList.add(value, "link");
  });
  return menu;
};

export default createMenu;
