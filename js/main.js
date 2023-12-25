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


// scroll to top btn
if (document.getElementById("up-btn")) {
  const upBtn = document.getElementById("up-btn");
  window.addEventListener("scroll", () =>
    window.scrollY >= 300
      ? upBtn.classList.add("show")
      : upBtn.classList.remove("show")
  );
  upBtn.addEventListener("click", () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  );
}