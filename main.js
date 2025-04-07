import { swiperHome } from "./assets/Js/carrosselPrincipal.js";
import { swiperProducts } from "./assets/Js/swiperProducts.js";
import { swiperStory } from "./assets/Js/swiperStory.js";
import { defineModos } from "./assets/Js/defineModos.js";

const btnMenu = document.getElementById("btn-menu");
const navbar = document.querySelector(".header__nav");
const menuItens = document.querySelectorAll(".menu-item__header");

btnMenu.addEventListener("click", (event) => {
  navbar.classList.toggle("open");
  btnMenu.classList.toggle("active-menu");
});

menuItens.forEach((item) => {
  item.addEventListener("click", () => {
    navbar.classList.remove("open");
    btnMenu.classList.remove("active-menu");
  });
});

// ===== Modos Dark e Light =====

defineModos();
swiperHome();
swiperProducts();
swiperStory();

// ===== Descrição dos Produtos =====

const verMais = document.querySelector(".product-see");
const verMenos = document.querySelector(".product-see-output");
const productContent = document.querySelector(".product__content");
const productOutput = document.querySelector(".product__output");

verMais.addEventListener("click", () => {
  productContent.classList.remove("product-close");
  productContent.classList.add("product-open");
  productOutput.classList.remove("product-close");
  productOutput.classList.add("product-open");
});

verMenos.addEventListener("click", () => {
  productContent.classList.remove("product-open");
  productContent.classList.add("product-close");
  productOutput.classList.remove("product-open");
  productOutput.classList.add("product-close");
});
