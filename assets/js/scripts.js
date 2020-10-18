jQuery(document).ready(function($) {
	jQuery('#nav-icon3').click(function(){
		jQuery(this).toggleClass('open');
		jQuery(".nav-container").slideToggle(500);

		jQuery('body','html').toggleClass("overflow-hidden");
	});
});

