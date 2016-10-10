var dropMenu = function() {
    $('a[href*="#"]:not([href="#"])').on('click', function (event){
        var target = $(this).attr('href'),
            parent = $(this).parent();
        $(target).toggleClass('open');
        $(parent).toggleClass('open');

        event.preventDefault();
    });
};

$(document).ready(dropMenu);
