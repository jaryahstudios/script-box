function initializeSwiperCards() {
    $(".swiper").each(function () {
      const swiperElement = this;
      const nextButton = $(this)
        .closest(".slider-main_component")
        .find(".swiper-next")[0];
      const prevButton = $(this)
        .closest(".slider-main_component")
        .find(".swiper-prev")[0];
  
      const swiper = new Swiper(swiperElement, {
        loop: false,
        autoHeight: false,
        allowSlideNext: true,
        breakpoints: {
          // mobile landscape
          480: {
            slidesPerView: 1
          },
          // tablet
          768: {
            slidesPerView: 2
          },
          // desktop
          992: {
            slidesPerView: 3
          }
        },
        navigation: {
          nextEl: nextButton,
          prevEl: prevButton,
          disabledClass: "is-disabled"
        },
        slideActiveClass: "is-active",
        slideDuplicateActiveClass: "is-active"
      });
    });
  }
  
  $(document).ready(function () {
    setTimeout(function () {
      initializeSwiperCards();
    }, 1000); // Adjust the delay time (in milliseconds) as needed
  });
  
  $(window).on("load", function () {
    setTimeout(function () {
      initializeSwiperCards();
    }, 1000); // Adjust the delay time (in milliseconds) as needed
  });
  