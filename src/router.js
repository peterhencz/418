import doSomething from "./utils.js";

const routes = {
  route1: "kiscica",
  route2: "<3",
};

const createMenu = () => {
  console.table(routes);
  const links = Object.entries(routes);
  console.table(links);
  links.forEach(link => {
    let key = link[0];
    let value = link[1];
    console.log(key);
    console.log(value);
    const cica = doSomething("div", "link");
    cica.innerHTML = key;
    document.body.appendChild(cica);
    // console.log(cica);
  });
};

export default createMenu;
