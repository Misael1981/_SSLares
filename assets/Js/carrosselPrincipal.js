export function swiperHome() {
  var swiper = new Swiper(".swiper-home", {
    spaceBetween: 0,
    effect: "fade",
    grabCursor: true,
    loop: true,
    // autoplay: {
    //   delay: 4000,
    // },
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
  });
}
