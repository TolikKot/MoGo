$(function () {

	
	/*   Fixed Header */
	let header = $('#header');
	let intro = $('#intro');
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();

	checkScroll(scrollPos, introH);
   
	$(window).on('scroll resize', function () {
		let introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();
		checkScroll(scrollPos, introH);
	});

	function checkScroll(scrollPos, introH) {
		if (scrollPos > introH) { header.addClass('fixed'); } else {
			header.removeClass('fixed');
		}
	};

	/* Smooth Scroll */
	$('[data-scroll]').on('click', function (event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		$('#nav a').removeClass('link-active');
		$(this).addClass('link-active');
		nav.removeClass('show');

		$('html, body').animate({scrollTop: elementOffset - 69}, 1000)
	});


	/* Burger Menu */
	let nav = $('#nav');
	let burger = $('#burger');

	burger.on('click', function (event) {
		event.preventDefault();
		nav.toggleClass('show');
	});


	/* Collapse */
	$('[data-collapse]').on('click', function (event) {
		event.preventDefault();
		let elementId = $(this).data('collapse');
		$(this).toggleClass('active');
	});

	
	
	/* Slider */
	$('[data-slider]').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true
	});



});
