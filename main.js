const btnMenu = document.getElementById("btn-menu");
const navbar = document.querySelector(".header__nav-list");

btnMenu.addEventListener("click", () => {
  navbar.classList.toggle("open");
  btnMenu.classList.toggle("active-menu");
});
