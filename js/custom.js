;$(document).ready(function() {
/*================================
Карта
=================================*/
		ymaps.ready(function(){

	    var myMap = new ymaps.Map("my_map", {
	        center: [51.64366779, 38.95649378],
	        zoom: 15
	    });
	    var myPlacemark = new ymaps.Placemark([51.64366779, 38.95649378], {}, {
    	iconLayout: 'default#image',
    	iconImageHref: 'icons/placeholder@2x.png',
    	iconImageSize: [38, 54]
	});
		myMap.geoObjects.add(myPlacemark);
		myMap.behaviors.disable(['scrollZoom']);
	});
});

/*================================
Плавный скролл до якоря jquery
=================================*/
$("body").on('click', '[href*="#"]', function(e){
	  var fixed_offset = 100;
	  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
	  e.preventDefault();
	});


/*========================
 fixed header
 =======================*/
$(window).scroll(function() {
	if($(this).scrollTop() >= 250){
	$('.main-head').addClass('main-head_fixed');
}
else{
	$('.main-head').removeClass('main-head_fixed');
	}
});


 /*========================
mob nav
=========================*/
// $(".menu-gamburger").on("click", function() {
// 	$(".page-nav__list-mob").toggleClass('page-nav__list-mob_show');
// 	// $(".contacts").toggleClass('page-nav__list-mob_show');
// });
// $("#nav-icon").click(function(){
// 	$(this).toggleClass("open");
// });

/*========================
scropp up
 =======================*/
$(window).scroll(function() {
 
    if($(this).scrollTop() != 0) {
 
        $('#toTop').fadeIn();
 
    } else {
 
        $('#toTop').fadeOut();
 
    }
 
});
 
$('#toTop').click(function() {
 
$('body,html').animate({scrollTop:0},800);
 
});
