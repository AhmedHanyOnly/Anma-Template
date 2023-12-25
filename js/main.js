// Initialize Swiper Slider
// Set Landing Page Slider
const swiperElement = document.querySelector(".landing-swiper")
new Swiper(swiperElement, {
  // Optional parameters
  loop: true,
  centeredSlides: true,
  parallax: true,
  speed: 1400,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  
});

new Swiper(".customers-slider", {
  slidesPerView: 1,
  spaceBetween: 21,
  loop: true,
  speed: 1300,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});