jQuery(document).ready(function($) {
	jQuery('#nav-icon3').click(function(){
		jQuery(this).toggleClass('open');
		jQuery(".nav-container").slideToggle(500);
		jQuery('body','html').toggleClass("h-full");
		jQuery(".logo").toggleClass("invisible");
	});

	jQuery(".nav-container a").click(function(){
		jQuery('#nav-icon3').toggleClass('open');
		jQuery(".nav-container").slideToggle(200);
		jQuery(".logo").toggleClass("visible");
	})

	jQuery('#home').animate({scrollTop: jQuery('#work').offset().top}, 1000);
});

