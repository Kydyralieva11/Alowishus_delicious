// var swiper = new Swiper(".mySwiper", {
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     mousewheel: true,
//     keyboard: true,
// });

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 30,
  breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      720: {
        slidesPerView: 1,
        spaceBetween: 30
      },
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});