const menuBurger = document.querySelector("#menuBurger");
const openMenuBurger = document.querySelector("#openMenuBurger");
const closeMenuBurger = document.querySelector("#closeMenuBurger");

openMenuBurger.addEventListener("click", () => {
  menuBurger.style.display = "flex";
});
closeMenuBurger.addEventListener("click", () => {
  menuBurger.style.display = "none";
});

addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 768px)").matches) {
    menuBurger.style.display = "none";
  }
});
