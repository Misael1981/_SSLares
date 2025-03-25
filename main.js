import { swiperHome } from "./assets/Js/carrosselPrincipal.js";

const btnMenu = document.getElementById("btn-menu");
const navbar = document.querySelector(".header__nav-list");

btnMenu.addEventListener("click", () => {
  navbar.classList.toggle("open");
  btnMenu.classList.toggle("active-menu");
});

swiperHome();

var swiper = new Swiper(".swiper-products", {
  effect: "coverflow",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
