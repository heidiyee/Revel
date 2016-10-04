var nav = function() {
	$("#nav-icon").click(function() {
        $(this).toggleClass("open");
        $("#nav-links").toggleClass("popup");
	});
};

var dropMenu = function() {
    $('a[href*="#"]:not([href="#"])').on('click', function (event){
        var target = $(this).attr('href');
        console.log(target);
    $(target).toggleClass('open');
    });
};

$(document).ready(nav);
$(document).ready(dropMenu);
