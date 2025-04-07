import { swiperHome } from "./assets/Js/carrosselPrincipal.js";
import { swiperProducts } from "./assets/Js/swiperProducts.js";
import { swiperStory } from "./assets/Js/swiperStory.js";

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

const btnModos = document.getElementById("modos-btn");
const themeSystem = localStorage.getItem("themeSystem") || "dark";

btnModos.addEventListener("click", () => {
  let oldTheme = localStorage.getItem("themeSystem") || "dark";
  let newTheme = oldTheme == "dark" ? "light" : "dark";

  localStorage.setItem("themeSystem", newTheme);
  defineCorrentTheme(newTheme);
});

function defineCorrentTheme(theme) {
  const darkSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16" style="color: #ffc107;">
  <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5.5 0 0 1 0 .708"/>
</svg>`;
  const lightSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16" style="color: #f0f8ff;">
  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
</svg>`;
  document.documentElement.setAttribute("data-theme", theme);

  if (theme == "dark") {
    btnModos.innerHTML = darkSvg;
  } else {
    btnModos.innerHTML = lightSvg;
  }
}

defineCorrentTheme(themeSystem);

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
