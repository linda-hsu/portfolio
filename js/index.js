$(document).ready(function() {
	$('body').css('display', 'none');
	$('body').fadeIn(1500);

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 600, 'swing', function () {
	        window.location.hash = target;

	    });
	    $('html, body').stop().animate({
     		'scrollTop': $target.offset().top
		}, 600, 'swing');
	});
});