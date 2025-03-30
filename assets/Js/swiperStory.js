export function swiperStory() {
  const swiper = new Swiper(".swiperStory", {
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    freeMode: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1500: {
        slidesPerView: 3,
      },
      2000: {
        slidesPerView: 6,
      },
    },
  });
}
