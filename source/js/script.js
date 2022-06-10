$(function () {

	let header = $('#header');
	let intro = $('#intro');
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	
	checkScroll(scrollPos, introH)
	

	$(window).on('scroll resize', function () {
		let introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

	});

	function checkScroll(scrollPos, introH) {
		if (scrollPos > introH) { header.addClass('fixed'); } else {
			header.removeClass('fixed');
		}
	}

	let nav = $('#nav');
	let burger = $('#burger');

	burger.on('click', function (event) {
		event.preventDefault();

		nav.addClass('show');
	});


});