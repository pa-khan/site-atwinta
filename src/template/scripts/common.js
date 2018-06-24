$(document).ready(function($) {

	$('.input_tel .input__wrap').mask('+7 (000) 000-00-00');


	var fullpageWrap = $('#fullpage');
	fullpageWrap.fullpage({
		scrollOverflow: true,
		navigation: true,
		responsiveWidth: 992,
		responsiveHeight: 710,
		touchSensitivity: 100
	});


	var navBtn = $('.mobile-btn'),
			nav = $('.nav'),
			bgLeft = $('.bg-left'),
			bgRight = $('.bg-right'),
			fpNav = $('#fp-nav'),
			hiddenNav = $('.hidden-nav'),
			order = $('.order'),
			body = $('body');

	function popupToggle() {
		bgLeft.toggleClass('w50p');
		bgRight.toggleClass('w50p');
		nav.toggle();
		fpNav.toggle();
		fullpageWrap.toggleClass('blur');
		body.toggleClass('body_open-nav');
	}

	navBtn.click(function(event) {
		body.removeClass('body_open-order');
		if (order.hasClass('order_toggle')) {
			order.removeClass('order_toggle');
		} else{
			popupToggle(navBtn);
		}
		$(this).toggleClass('mobile-btn_toggle');
		
		hiddenNav.toggleClass('hidden-nav_toggle');
	});
	
	$('.order-btn').click(function(event) {
		body.toggleClass('body_open-order');
		if (navBtn.hasClass('mobile-btn_toggle')) {
			navBtn.removeClass('mobile-btn_toggle');
			hiddenNav.removeClass('hidden-nav_toggle')
		} else {
			popupToggle(navBtn);
		}
		
		order.toggleClass('order_toggle');
	});

	$('.citys-phones__nav li').click(function(event) {
		var attr = $(this).attr('data-target');
		if (!($(this).hasClass('selected'))) {
			$('.citys-phones__nav li').removeClass('selected');
			$(this).addClass('selected');
			$('.citys-phones__tab').removeClass('selected');
			$('.citys-phones__tab[data-target=' + attr + ']').addClass('selected');
		} 
	});

	$('.input .input__wrap').change(function(event) {
		var inputValue = $(this).val(),
				input = $(this).parents('.input');
		if (inputValue != "" || inputValue != null) {
			input.addClass('input_completed');
		} else{
			input.removeClass('input_completed')
		}
	});
	function valueElementForm(nameElement) {
		var newNameElement = '.' + nameElement;
				element = $(newNameElement);
		element.each(function(index, el) {
			var elementInput = $(this).find($('input')),
				elementLabel = $(this).find($('label')),
				elementValue = index + 1;
			elementInput.attr('id', nameElement + '-' + elementValue);
			elementLabel.attr('for', nameElement + '-' + elementValue);
		});
		
	}
	valueElementForm('input');
	valueElementForm('file');


});
