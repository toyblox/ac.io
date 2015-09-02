$(document).ready(function(){
   

   $('.parallax').parallax();
    
    $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    $('.intro').css({
        'opacity': ((height - scrollTop) / height)
    });
});

    $(window).bind('scroll', function() {
	   var navHeight = $( window ).height() - 0;
			 if ($(window).scrollTop() > navHeight) {
				 $('nav').addClass('fixed');
			 }
			 else {
				 $('nav').removeClass('fixed');
			 }
		});

    $('.scrollspy').scrollSpy();

    $(".button-collapse").sideNav({
        closeOnClick: true
    });


});