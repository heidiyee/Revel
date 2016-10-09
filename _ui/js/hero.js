var height;
var hero = $('.hero.home');

var heroHeight = function() {
    height = $(window).height();
    hero.css('height', height);

    $(window).resize(function() {
        height = $(window).height();
        hero.css('height', height);
    });
};

$(document).ready(heroHeight);
