import { swiperHome } from "./assets/Js/carrosselPrincipal.js";
import { swiperProducts } from "./assets/Js/swiperProducts.js";
import { swiperStory } from "./assets/Js/swiperStory.js";

const btnMenu = document.getElementById("btn-menu");
const navbar = document.querySelector(".header__nav-list");

btnMenu.addEventListener("click", () => {
  navbar.classList.toggle("open");
  btnMenu.classList.toggle("active-menu");
});

swiperHome();
swiperProducts();
swiperStory();
