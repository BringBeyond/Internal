jQuery(document).ready(function($) {
	jQuery('#nav-icon3').click(function(){
		jQuery(this).toggleClass('open');
		jQuery(".nav-container").slideToggle(500);

		// jQuery('body','html').toggleClass("overflow-hidden");
		jQuery('body','html').toggleClass("h-full");
	});

	jQuery(".nav-container a").click(function(){
		jQuery('#nav-icon3').toggleClass('open');
		jQuery(".nav-container").slideToggle(200);

	})
});

