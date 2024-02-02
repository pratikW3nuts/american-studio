// sticky header
$(document).ready(function(){
    $(window).scroll(function(){
        var sticky = $('.main-header'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 1) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
});

// mobile menu
	jQuery(".pc_hamburger").on('click', function(e){
		e.preventDefault();
		jQuery('body').toggleClass("is_menu_active");
        jQuery("body").toggleClass("scrolldesable");
	});



$('.bnr_slider').owlCarousel({
    loop: true,
    nav: true,
    // autoplay : true,
    autoplaySpeed : 2000,
    smartSpeed: 2000,
    nav: true,
    dots: false,
    navText: ['<img src="images/bn_slide_lft.svg" alt="arrow">', '<img src="images/bn_slide_rght.svg" alt="arrow">'],
    responsive : {
		0: {
			items : 1,
		},
		768: {
			items : 1,
		},
		992: {
			items : 1,
		},
		1200: {
			items : 1,
		},
		1300: {
			items : 1,
		}
    }
})




$('.podcast_slider').owlCarousel({
    center: true,
    items:5,
    loop:true,
    margin:32,
    autoplay : false,
    nav:true,
    dots:false,
    // autoplaySpeed : 2000,
    smartSpeed: 2000,
    responsiveClass: true,
    stagePadding: 81,
    navText: ['<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1L1 9L9 17" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L9 9L1 17" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
    responsive : {
		0: {
			items : 1,
		},
		768: {
			items : 2,
		},
		992: {
			items : 3,
		},
		1200: {
			items : 4,
		},
		1300: {
			items : 3,
		},
        1500: {
			items : 4,
		},
    }
});


$('.podCategory_slider').owlCarousel({
    center: false,
    // items:5,
    loop:true,
    margin:32,
    autoplay : true,
    nav:false,
    dots:false,
    autoplaySpeed : 2000,
    smartSpeed: 2000,
    responsiveClass: true,
    stagePadding: 50,
    responsive : {
		0: {
			items : 1,
		},
		768: {
			items : 3,
		},
		992: {
			items : 3,
		},
		1200: {
			items : 4,
		},
		1300: {
			items : 4,
		},
        1500:{
            items:5,
        }
    }
});



$('.client_wordbox').owlCarousel({
    center: false,
    items:2,
    slideBy : 2,
    loop:false,
    margin:33,
    // autoplay : true,
    nav:true,
    dots:false,
    // autoplaySpeed : 2000,
    smartSpeed: 1000,
    responsiveClass: true,
    navText: ['<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1L1 9L9 17" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L9 9L1 17" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
    // stagePadding: 50,
    responsive : {
		0: {
			items : 1,
		},
		768: {
			items : 1,
		},
		992: {
			items : 2,
		},
		1200: {
			items : 2,
		},
		1300: {
			items : 2,
		}
    }
});