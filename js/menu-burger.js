const menuBurger = document.querySelector("#menuBurger");
const openMenuBurger = document.querySelector("#openMenuBurger");
const closeMenuBurger = document.querySelector("#closeMenuBurger");

openMenuBurger.addEventListener("click", () => {
  menuBurger.style.display = "flex";
});
closeMenuBurger.addEventListener("click", () => {
  menuBurger.style.display = "none";
});
