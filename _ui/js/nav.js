var nav = function() {
	$("#nav-icon").click(function() {
        $(this).toggleClass("open");
        $("#nav-links").toggleClass("popup");

		// if ($(this).hasClass("open")) {
		// 	$('.nav-bar').addClass('black');
		// 	$('.logo-image').attr('src','assets/fulcrumlogo-inverted.svg');
		// } else {
		// 	$('.nav-bar').removeClass('black');
		// 	$('.logo-image').attr('src','assets/fulcrumlogo.svg');
		// }
	});
};

$(document).ready(nav);
