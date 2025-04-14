import { swiperHome } from "./assets/Js/carrosselPrincipal.js";
import { swiperProducts } from "./assets/Js/swiperProducts.js";
import { swiperStory } from "./assets/Js/swiperStory.js";
import { defineModos } from "./assets/Js/defineModos.js";
import { activateCalculator } from "./assets/Js/activateCalculator.js";
import { modalCalculator } from "./assets/Js/modalCalculator.js";
import { searchField } from "./assets/Js/searchField.js";
import { descriptionProducts } from "./assets/Js/descriptionProducts.js";

const btnMenu = document.getElementById("btn-menu");
const navbar = document.querySelector(".header__nav");
const menuItens = document.querySelectorAll(".menu-item__header");

btnMenu.addEventListener("click", (event) => {
  navbar.classList.toggle("open");
  btnMenu.classList.toggle("active-menu");
  btnMenu.setAttribute("aria-expanded", navbar.classList.contains("open"));
});

menuItens.forEach((item) => {
  item.addEventListener("click", () => {
    navbar.classList.remove("open");
    btnMenu.classList.remove("active-menu");
    btnMenu.setAttribute("aria-expanded", false);
  });
});

// ===== Modulos =====

descriptionProducts();
defineModos();
swiperHome();
swiperProducts();
searchField();
swiperStory();
activateCalculator();
modalCalculator();
