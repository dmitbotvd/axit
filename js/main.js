$(document).ready(function(){
	$("a[href*=#]").on("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 777);
		e.preventDefault();
		return false;
	});
});

$(document).ready(function(){ 
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
});

$('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});
 
});
$('.menu-btn').on('click', function(e){
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
    $('.menu-nav').toggleClass('menu-nav_active');
});
