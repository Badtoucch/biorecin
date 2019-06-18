window.addEventListener("DOMContentLoaded", function() {

	var allSect = $("main > section").length + 1;
	$(".sec-counter__all").text(allSect);
	$("body > header:first-of-type").attr("data-item", 1);
	changeSection("body > header:first-of-type", allSect);

	$("main > section").each(function (i, el) {
		$(el).attr("data-item", i + 2);
		changeSection(el, allSect);
	});
	function changeSection(el, count) {
		var target = $(el);
		var targetPos = target.offset().top;
		var winHeight = $(window).height();
		var scrollToElem = targetPos - 200;
		$(window).scroll(function(){
			var winScrollTop = $(this).scrollTop();
			if(winScrollTop > scrollToElem){
				$(".sec-counter__current").text($(el).attr("data-item"));
				diagramChange($(el).attr("data-item"), count);
			}
		});
	}
	
	function diagramChange(current, all) {
		var oneSector = 360 / all;
		var currentSector = oneSector * current;
	
		if (currentSector <= 180){
			$(".sec-counter__right").css("transform", "rotate(" + currentSector + "deg)");
			$(".sec-counter__left").removeClass("sec-counter__left_full");
			$(".sec-counter__right").removeClass("sec-counter__right_full");
			$(".sec-counter-block").removeClass("sec-counter-block_full");
		}else{
			$(".sec-counter__right").css("transform", "rotate(" + ((180 - currentSector) * -1) + "deg)");
			$(".sec-counter__left").addClass("sec-counter__left_full");
			$(".sec-counter__right").addClass("sec-counter__right_full");
			$(".sec-counter-block").addClass("sec-counter-block_full");
		}
	}
   
});
var arrowClick = $('.sec-counter__current').text();



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
          depth: 720 // Depth offset in px (slides translate in Z axis)
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

/*______smooth scroll_____*/
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top + 0
    }, 1500);
});
$(window).on('mousemove', function(e) {
	var wh = $(window).width();
	var ht = $(window).height();
	var offsetX = 0.5 - e.pageX / wh;
	var offsetY = 0.5 - e.pageY / ht;

	$(".parallax").each(function(i, el) {
		var offset = parseInt($(el).data('offset'));
		var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";

		$(el).css({
			'-webkit-transform': translate,
			'transform': translate,
			'moz-transform': translate
		});
	});
});
if(arrowClick == 1){
	$(".nav-top__link").addClass("top-disable");
} else{
	$(".nav-top__link").removeClass("top-disable");
}
if(arrowClick == 8){
	$(".nav-bottom__link").addClass("bottom-disable");
} else{
	$(".nav-bottom__link").removeClass("bottom-disable");
}
$( window ).scroll(function() {
	var arrowClick = $('.sec-counter__current').text();
	if(arrowClick == 1){
		$(".nav-top__link").addClass("top-disable");
	} else{
		$(".nav-top__link").removeClass("top-disable");
	}
	if(arrowClick == 9){
		$(".nav-bottom__link").addClass("bottom-disable");
	} else{
		$(".nav-bottom__link").removeClass("bottom-disable");
	}
	if(arrowClick == 1){
		$(".nav-bottom__link").attr("href", "#properties");
		$(".nav-top__link").attr("href", "#");
	} else if (arrowClick == 2){
		$(".nav-top__link").attr("href", "#header");
		$(".nav-bottom__link").attr("href", "#pin");
	} else if (arrowClick == 3){
		$(".nav-top__link").attr("href", "#properties");
		$(".nav-bottom__link").attr("href", "#torder");
	} else if (arrowClick == 4){
		$(".nav-top__link").attr("href", "#pin");
		$(".nav-bottom__link").attr("href", "#about");
	}	else if (arrowClick == 5){
		$(".nav-top__link").attr("href", "#torder");
		$(".nav-bottom__link").attr("href", "#composition");
	} else if (arrowClick == 6){
		$(".nav-top__link").attr("href", "#about");
		$(".nav-bottom__link").attr("href", "#reviews");
	} else if (arrowClick == 7){
		$(".nav-top__link").attr("href", "#composition");
		$(".nav-bottom__link").attr("href", "#use");
	}	else if (arrowClick == 8){
		$(".nav-top__link").attr("href", "#reviews");
		$(".nav-bottom__link").attr("href", "#header-bottom");
	} else if (arrowClick == 9){
		$(".nav-top__link").attr("href", "#use");
		$(".nav-bottom__link").attr("href", "#");
	}

	
});