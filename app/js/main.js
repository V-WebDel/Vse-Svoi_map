'use strict';

$(function() {

	// Mask form
	$('input[name="Lead[phone]"]').mask('8 (999) 999 - 99 - 99');

	// Section modal
	$(".btn-modal").click(function(evt){
		evt.preventDefault();
		$(".modal_form").removeClass("hidden");
		$(".overlay").removeClass("hidden");
	});
	$(".attention").click(function(evt){
		evt.preventDefault();
		$(".modal_attention").removeClass("hidden");
		$(".overlay").removeClass("hidden");
	});
	$(".overlay, .modal__close").click(function(){
		$(".modal").addClass("hidden");
		$(".overlay").addClass("hidden");
	});
	$(document).keyup(function(e) {
		if (e.keyCode === 27) { 
			$(".modal").addClass("hidden");
			$(".overlay").addClass("hidden");
		}
	});

	// WOW
	const wow = new WOW({
		boxClass: 'wow',
		offset: 120,
		mobile: false
	});
	
	wow.init();

	$('.top__subtitle, .top__title, .top__price').addClass('animated lightSpeedIn');
	$('.title-text').addClass('animated fadeInRight');
	$('.btn').addClass('animated heartBeat');
	$('.advantages__item, .step__title').addClass('animated bounceIn');

	$('.step__block_form, .step__block_phone-call').addClass('animated fadeInRight');
	$('.step__block_top, .step__block_coming').addClass('animated fadeInLeft');
	$('.step__lst-item').addClass('animated fadeInUp');
	$('.step__image').addClass('animated flash');

	$('.reviews__block_text').addClass('animated fadeInRight');
	$('.reviews__block_foto').addClass('animated zoomIn');
	

	// Slider steps
	$(".reviews__item").hide();
	$(".reviews__item:first-child").show();
	var steps = $(".reviews__wrap").children(".reviews__item");
	var current_step = 0;
	var slide_count = steps.length-1;
		
	$(".navigation__slide_summ").text(slide_count + 1); // Общее количество слайдов
	$(".navigation__prev").addClass("navigation__prev_noactive").prop("disabled", true); // Не активная кнопка

	$(".reviews__wrap .reviews__item").each(function () { // Добавление элемента в пагинацию (создание булета)
		$(".pagination").append($('<div class="pagination__item"></div>'));
	});

	var bullets = $(".pagination").children(".pagination__item");
	$(".pagination__item:first-child").addClass("pagination__item_active"); // Добавление класса для активного элемента пагинации

	$(".navigation__next").click(function(){ // Клик по кнопке "Следующий"

		if (current_step == steps.length-2) {
			$(this).addClass("navigation__next_noactive").prop("disabled", true);
		} else if (current_step !== 1) {
			$(this).siblings(".navigation__prev").removeClass("navigation__prev_noactive").prop("disabled", false);
		}

		current_step++;
		changeStep(current_step);
		$(".navigation__slide_current").text(current_step + 1); // Номер текущего слайда
	});

	$(".navigation__prev").click(function(){ // Клик по кнопке "Предыдущий"

		if (current_step == 1) {
			$(this).addClass("navigation__prev_noactive").prop("disabled", true);
		} else if (current_step !== steps.length-2) {
			$(this).siblings(".navigation__next").removeClass("navigation__next_noactive").prop("disabled", false);
		}

		current_step--;
		changeStep(current_step);
		$(".navigation__slide_current").text(current_step + 1); // Номер текущего слайда
	});


	function changeStep(i) { // Функция изменения слайдов
		$(steps).hide();
		$(steps[i]).show();
		$(bullets).removeClass("pagination__item_active");
		$(bullets[i]).addClass("pagination__item_active");
	}
});

// Slider images
document.querySelectorAll('.cocoen').forEach(function(element){
	new Cocoen(element);
});

// Swiper slider
var swiper_clinic = new Swiper('.swiper-clinic', {
	speed: 1500,
	spaceBetween: 0,
	loop: true,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	pagination: {
        el: '.swiper-pagination',
    },

	breakpoints: {
		992: { 
			slidesPerView: 3,
			centeredSlides: true,
			touchRatio: 0,
		}, 
		768: { 
			slidesPerView: 2,
			centeredSlides: false,
			touchRatio: 1,
		},
		320: { 
			slidesPerView: 1,
			centeredSlides: true,
		}, 
	},
});
