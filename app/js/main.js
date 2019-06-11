var sliderSelector = ".swiper-container",
  options = {
    loop: true,
    speed: 700,
    slidesPerView: "auto", // or 'auto'
    centeredSlides: true,
    effect: "coverflow", // 'cube', 'fade', 'coverflow',
    coverflowEffect: {
      rotate: 0, // Slide rotate in degrees
      stretch: 0, // Stretch space between slides (in px)
      depth: 720, // Depth offset in px (slides translate in Z axis)
      modifier: 1, // Effect multipler
      slideShadows: false
    },
    grabCursor: true,
    // parallax: true,
    pagination: {
      el: ".swiper-pagination ",
      clickable: true
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },

    breakpoints: {
      1189: {
        coverflowEffect: {
          depth: 600 // Depth offset in px (slides translate in Z axis)
        }
      },
      1023: {
        coverflowEffect: {
          depth: 900 // Depth offset in px (slides translate in Z axis)
        }
      },
      767: {
        coverflowEffect: {
					depth: 0
					
        }
      },
      479: {
        autoHeight: true
      }
    },
    // Events
    on: {
      imagesReady: function() {
        this.el.classList.remove("loading");
      }
    }
  };
var mySwiper = new Swiper(sliderSelector, options);

function totalSwiperSlide() {
  var allSlides = $(".swiper-slide").length / 3;
  $(".ns-total").html("/" + allSlides);
}

function activeSwiperSlide() {
  var activeSlide = mySwiper.realIndex + 1;
  $(".ns-active").html(activeSlide);
}

mySwiper.on("slideChange", function() {
  activeSwiperSlide();
});

totalSwiperSlide();
activeSwiperSlide();