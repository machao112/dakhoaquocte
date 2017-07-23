$(function(){

	// $('a').on('click', function(e){
	// 	e.preventDefault();
	// });

	var dots = $('#carousel-example-generic .item').length;
	for(var i = 0; i < dots; i++) {
		var textDot = '<li data-target="#carousel-example-generic" data-slide-to="' + i + '"></li>';
		$('#carousel-example-generic ol').append(textDot);
	}

	$('.carousel').carousel({
		interval: 3000,
	});


	// menu mobile so ra
	$('#btn-menu').click(function(){
		$('ul.menu').slideToggle(400, function(){
			$(this).toggleClass('expand').css('display','');
		});
	});


	// menu sidebar
	$('.menu > ul > li > a').click(function(e) {
		e.preventDefault();
	});
	// $('.menu').find('.sub-menu').hide();
	$('.menu > ul > li').on('click', function(){
		var $this = $(this);
		var siblings= $this.parent().children();
		if ($this.hasClass('active')) {
			$this.find('.sub-menu').slideUp();
			$this.removeClass('active');
			$this.removeClass('arrow-bottom');

		} else {
			$('.sub-menu').slideUp();
			$this.find('.sub-menu').slideDown();
			siblings.removeClass('active');
			siblings.removeClass('arrow-bottom')
			$this.addClass('active');
			$(this).addClass('arrow-bottom');

		}
	});
	
	// $('.menu').find('a').click(function(){
	// 	var next = $(this).next();
	// 	next.slideToggle('fast');
	// 	$('.sub-menu').not(next).slideUp('fast');
	// });




	// menu fixed
	var menuOffset = $('.mega-menu').offset();
	$(document).on('scroll', function() {
		var scrollTop = $(document).scrollTop();
		if(scrollTop > menuOffset.top) {
			$('.mega-menu').addClass('fixed');
		} else {
			$('.mega-menu').removeClass('fixed');
		}
	});
});