$(document).ready(function(){
   

   $('.parallax').parallax();
    
    $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    $('.intro').css({
        'opacity': ((height - scrollTop) / height)
    });
});




});