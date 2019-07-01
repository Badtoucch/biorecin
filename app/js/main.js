window.addEventListener("DOMContentLoaded", function() {
	var allSectXY = [];
	var currentS = 1;
	let initSect = function () {
			allSectXY = [0];
			$("main > section").each(function (i, el) {
					let xx = $(el).offset().top;
					allSectXY.push(xx);
			});
	};
	initSect();
	$(".sec-counter__all").text(allSectXY.length);
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
	let initCircle = function () {
			var winScrollTop = $(this).scrollTop();
			for (let i = 0 ; i < allSectXY.length; i++) {
					if (i === allSectXY.length - 1 && winScrollTop > allSectXY[i] - 200) {
							$('.sec-counter__current').text(allSectXY.length);
							diagramChange(allSectXY.length,allSectXY.length);
							currentS = allSectXY.length;
					}
					if (winScrollTop > allSectXY[i] - 200 && winScrollTop < allSectXY[i + 1]) {
							$('.sec-counter__current').text(i + 1);
							diagramChange(i + 1,allSectXY.length);
							currentS = i + 1;
					}
			}
	};
	initCircle();
	$( window ).resize(function() {
			initSect();
	});
	$( window ).scroll(function() {
			initCircle();
			if (currentS === 1) {
					$(".toTop").addClass("top-disable");
			} else {
					$(".toTop").removeClass("top-disable");
			}
			if (currentS === allSectXY.length) {
					$(".toBot").addClass("bottom-disable");
			} else {
					$(".toBot").removeClass("bottom-disable");
			}
	});
	let movingSpeed = 500;
	$(".toTop").click(function () {
			let that = $(this);
			that.addClass("moving");
			$('html, body').animate({
					scrollTop: allSectXY[currentS - 2] - 0
			}, movingSpeed);
			setTimeout(function () {
					that.removeClass("moving");
			}, movingSpeed)
	});
	$(".toBot").click(function () {
			let that = $(this);
			that.addClass("moving");
			$('html, body').animate({
					scrollTop: allSectXY[currentS] - 0
			}, movingSpeed);
			setTimeout(function () {
					that.removeClass("moving");
			}, movingSpeed)
	});
});



var sliderSelector = ".swiper-container",
options = {
	loop: true,
	speed: 700,
	slidesPerView: "auto", // or 'auto'
	centeredSlides: true,
	effect: "coverflow", // 'cube', 'fade', 'coverflow',
	coverflowEffect: {
		rotate: 178, // Slide rotate in degrees
		stretch: 180, // Stretch space between slides (in px)
		depth: 170, // Depth offset in px (slides translate in Z axis)
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
				depth: 170,
				stretch: 130
			}
		},
		1023: {
			coverflowEffect: {
				depth: 450,
				stretch: 40
			}
		},
		767: {
			coverflowEffect: {
				depth: 0,
				stretch: 0,
				rotate: 0
			}
		},
		479: {
			autoHeight: true,
			coverflowEffect: {
				depth: 0,
				stretch: 0,
				rotate: 0				
			}
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
	}, 2500);
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
/*mobile navbar*/
var rightMenu = document.querySelector(".header__navigation");
var burgerButton = document.querySelector(".header__navbar");
var closeMenu = document.querySelector(".header__close-mobile");
var menuBg = document.querySelector(".header__mobile-menu-bg");

burgerButton.onclick = function () {
	rightMenu.classList.toggle("-show");
    menuBg.classList.toggle("-enabled");
};
closeMenu.onclick = function () {
    this.parentNode.classList.remove("-enabled");
    rightMenu.classList.toggle("-show");
};
menuBg.onclick = function () {
    rightMenu.classList.remove("-show");
    menuBg.classList.toggle("-enabled");
};


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcblxuXHR2YXIgYWxsU2VjdCA9ICQoXCJtYWluID4gc2VjdGlvblwiKS5sZW5ndGggKyAxO1xuXHQkKFwiLnNlYy1jb3VudGVyX19hbGxcIikudGV4dChhbGxTZWN0KTtcblx0JChcImJvZHkgPiBoZWFkZXI6Zmlyc3Qtb2YtdHlwZVwiKS5hdHRyKFwiZGF0YS1pdGVtXCIsIDEpO1xuXHRjaGFuZ2VTZWN0aW9uKFwiYm9keSA+IGhlYWRlcjpmaXJzdC1vZi10eXBlXCIsIGFsbFNlY3QpO1xuXG5cdCQoXCJtYWluID4gc2VjdGlvblwiKS5lYWNoKGZ1bmN0aW9uIChpLCBlbCkge1xuXHRcdCQoZWwpLmF0dHIoXCJkYXRhLWl0ZW1cIiwgaSArIDIpO1xuXHRcdGNoYW5nZVNlY3Rpb24oZWwsIGFsbFNlY3QpO1xuXHR9KTtcblx0ZnVuY3Rpb24gY2hhbmdlU2VjdGlvbihlbCwgY291bnQpIHtcblx0XHR2YXIgdGFyZ2V0ID0gJChlbCk7XG5cdFx0dmFyIHRhcmdldFBvcyA9IHRhcmdldC5vZmZzZXQoKS50b3A7XG5cdFx0dmFyIHdpbkhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcblx0XHR2YXIgc2Nyb2xsVG9FbGVtID0gdGFyZ2V0UG9zIC0gMjAwO1xuXHRcdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcblx0XHRcdHZhciB3aW5TY3JvbGxUb3AgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xuXHRcdFx0aWYod2luU2Nyb2xsVG9wID4gc2Nyb2xsVG9FbGVtKXtcblx0XHRcdFx0JChcIi5zZWMtY291bnRlcl9fY3VycmVudFwiKS50ZXh0KCQoZWwpLmF0dHIoXCJkYXRhLWl0ZW1cIikpO1xuXHRcdFx0XHRkaWFncmFtQ2hhbmdlKCQoZWwpLmF0dHIoXCJkYXRhLWl0ZW1cIiksIGNvdW50KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXHRcblx0ZnVuY3Rpb24gZGlhZ3JhbUNoYW5nZShjdXJyZW50LCBhbGwpIHtcblx0XHR2YXIgb25lU2VjdG9yID0gMzYwIC8gYWxsO1xuXHRcdHZhciBjdXJyZW50U2VjdG9yID0gb25lU2VjdG9yICogY3VycmVudDtcblx0XG5cdFx0aWYgKGN1cnJlbnRTZWN0b3IgPD0gMTgwKXtcblx0XHRcdCQoXCIuc2VjLWNvdW50ZXJfX3JpZ2h0XCIpLmNzcyhcInRyYW5zZm9ybVwiLCBcInJvdGF0ZShcIiArIGN1cnJlbnRTZWN0b3IgKyBcImRlZylcIik7XG5cdFx0XHQkKFwiLnNlYy1jb3VudGVyX19sZWZ0XCIpLnJlbW92ZUNsYXNzKFwic2VjLWNvdW50ZXJfX2xlZnRfZnVsbFwiKTtcblx0XHRcdCQoXCIuc2VjLWNvdW50ZXJfX3JpZ2h0XCIpLnJlbW92ZUNsYXNzKFwic2VjLWNvdW50ZXJfX3JpZ2h0X2Z1bGxcIik7XG5cdFx0XHQkKFwiLnNlYy1jb3VudGVyLWJsb2NrXCIpLnJlbW92ZUNsYXNzKFwic2VjLWNvdW50ZXItYmxvY2tfZnVsbFwiKTtcblx0XHR9ZWxzZXtcblx0XHRcdCQoXCIuc2VjLWNvdW50ZXJfX3JpZ2h0XCIpLmNzcyhcInRyYW5zZm9ybVwiLCBcInJvdGF0ZShcIiArICgoMTgwIC0gY3VycmVudFNlY3RvcikgKiAtMSkgKyBcImRlZylcIik7XG5cdFx0XHQkKFwiLnNlYy1jb3VudGVyX19sZWZ0XCIpLmFkZENsYXNzKFwic2VjLWNvdW50ZXJfX2xlZnRfZnVsbFwiKTtcblx0XHRcdCQoXCIuc2VjLWNvdW50ZXJfX3JpZ2h0XCIpLmFkZENsYXNzKFwic2VjLWNvdW50ZXJfX3JpZ2h0X2Z1bGxcIik7XG5cdFx0XHQkKFwiLnNlYy1jb3VudGVyLWJsb2NrXCIpLmFkZENsYXNzKFwic2VjLWNvdW50ZXItYmxvY2tfZnVsbFwiKTtcblx0XHR9XG5cdH1cbiAgIFxufSk7XG52YXIgYXJyb3dDbGljayA9ICQoJy5zZWMtY291bnRlcl9fY3VycmVudCcpLnRleHQoKTtcblxuXG5cbnZhciBzbGlkZXJTZWxlY3RvciA9IFwiLnN3aXBlci1jb250YWluZXJcIixcbiAgb3B0aW9ucyA9IHtcbiAgICBsb29wOiB0cnVlLFxuICAgIHNwZWVkOiA3MDAsXG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsIC8vIG9yICdhdXRvJ1xuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgIGVmZmVjdDogXCJjb3ZlcmZsb3dcIiwgLy8gJ2N1YmUnLCAnZmFkZScsICdjb3ZlcmZsb3cnLFxuICAgIGNvdmVyZmxvd0VmZmVjdDoge1xuICAgICAgcm90YXRlOiAwLCAvLyBTbGlkZSByb3RhdGUgaW4gZGVncmVlc1xuICAgICAgc3RyZXRjaDogMCwgLy8gU3RyZXRjaCBzcGFjZSBiZXR3ZWVuIHNsaWRlcyAoaW4gcHgpXG4gICAgICBkZXB0aDogNzIwLCAvLyBEZXB0aCBvZmZzZXQgaW4gcHggKHNsaWRlcyB0cmFuc2xhdGUgaW4gWiBheGlzKVxuICAgICAgbW9kaWZpZXI6IDEsIC8vIEVmZmVjdCBtdWx0aXBsZXJcbiAgICAgIHNsaWRlU2hhZG93czogZmFsc2VcbiAgICB9LFxuICAgIGdyYWJDdXJzb3I6IHRydWUsXG4gICAgLy8gcGFyYWxsYXg6IHRydWUsXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uIFwiLFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSxcblxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogXCIuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiXG4gICAgfSxcblxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAxMTg5OiB7XG4gICAgICAgIGNvdmVyZmxvd0VmZmVjdDoge1xuICAgICAgICAgIGRlcHRoOiA3MjAgLy8gRGVwdGggb2Zmc2V0IGluIHB4IChzbGlkZXMgdHJhbnNsYXRlIGluIFogYXhpcylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIDEwMjM6IHtcbiAgICAgICAgY292ZXJmbG93RWZmZWN0OiB7XG4gICAgICAgICAgZGVwdGg6IDkwMCAvLyBEZXB0aCBvZmZzZXQgaW4gcHggKHNsaWRlcyB0cmFuc2xhdGUgaW4gWiBheGlzKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgNzY3OiB7XG4gICAgICAgIGNvdmVyZmxvd0VmZmVjdDoge1xuXHRcdFx0XHRcdGRlcHRoOiAwXG5cdFx0XHRcdFx0XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICA0Nzk6IHtcbiAgICAgICAgYXV0b0hlaWdodDogdHJ1ZVxuICAgICAgfVxuICAgIH0sXG4gICAgLy8gRXZlbnRzXG4gICAgb246IHtcbiAgICAgIGltYWdlc1JlYWR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG52YXIgbXlTd2lwZXIgPSBuZXcgU3dpcGVyKHNsaWRlclNlbGVjdG9yLCBvcHRpb25zKTtcblxuZnVuY3Rpb24gdG90YWxTd2lwZXJTbGlkZSgpIHtcbiAgdmFyIGFsbFNsaWRlcyA9ICQoXCIuc3dpcGVyLXNsaWRlXCIpLmxlbmd0aCAvIDM7XG4gICQoXCIubnMtdG90YWxcIikuaHRtbChcIi9cIiArIGFsbFNsaWRlcyk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2ZVN3aXBlclNsaWRlKCkge1xuICB2YXIgYWN0aXZlU2xpZGUgPSBteVN3aXBlci5yZWFsSW5kZXggKyAxO1xuICAkKFwiLm5zLWFjdGl2ZVwiKS5odG1sKGFjdGl2ZVNsaWRlKTtcbn1cblxubXlTd2lwZXIub24oXCJzbGlkZUNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgYWN0aXZlU3dpcGVyU2xpZGUoKTtcbn0pO1xuXG50b3RhbFN3aXBlclNsaWRlKCk7XG5hY3RpdmVTd2lwZXJTbGlkZSgpO1xuXG4vKl9fX19fX3Ntb290aCBzY3JvbGxfX19fXyovXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnYVtocmVmXj1cIiNcIl0nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICBzY3JvbGxUb3A6ICQoJC5hdHRyKHRoaXMsICdocmVmJykpLm9mZnNldCgpLnRvcCArIDBcbiAgICB9LCAyNTAwKTtcbn0pO1xuJCh3aW5kb3cpLm9uKCdtb3VzZW1vdmUnLCBmdW5jdGlvbihlKSB7XG5cdHZhciB3aCA9ICQod2luZG93KS53aWR0aCgpO1xuXHR2YXIgaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG5cdHZhciBvZmZzZXRYID0gMC41IC0gZS5wYWdlWCAvIHdoO1xuXHR2YXIgb2Zmc2V0WSA9IDAuNSAtIGUucGFnZVkgLyBodDtcblxuXHQkKFwiLnBhcmFsbGF4XCIpLmVhY2goZnVuY3Rpb24oaSwgZWwpIHtcblx0XHR2YXIgb2Zmc2V0ID0gcGFyc2VJbnQoJChlbCkuZGF0YSgnb2Zmc2V0JykpO1xuXHRcdHZhciB0cmFuc2xhdGUgPSBcInRyYW5zbGF0ZTNkKFwiICsgTWF0aC5yb3VuZChvZmZzZXRYICogb2Zmc2V0KSArIFwicHgsXCIgKyBNYXRoLnJvdW5kKG9mZnNldFkgKiBvZmZzZXQpICsgXCJweCwgMHB4KVwiO1xuXG5cdFx0JChlbCkuY3NzKHtcblx0XHRcdCctd2Via2l0LXRyYW5zZm9ybSc6IHRyYW5zbGF0ZSxcblx0XHRcdCd0cmFuc2Zvcm0nOiB0cmFuc2xhdGUsXG5cdFx0XHQnbW96LXRyYW5zZm9ybSc6IHRyYW5zbGF0ZVxuXHRcdH0pO1xuXHR9KTtcbn0pO1xuIl0sImZpbGUiOiJtYWluLmpzIn0=
