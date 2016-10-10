$(document).ready(function() {
    var status = $("#owl-status");

    $('.owl-carousel').on('initialized.owl.carousel changed.owl.carousel resized.owl.carousel', function(e) {
        afterAction(e);
    });

    $('.owl-carousel').owlCarousel({
        loop:false,
        dots: false,
        nav: true,
        navText: ["",""],
        mergefit: false,
        items: 1,
        info: true
    });

    //inline carousel
    $('.inline-carousel').on('initialized.owl.carousel changed.owl.carousel resized.owl.carousel', function(e) {
        afterAction(e);
    });

    $('.inline-carousel').owlCarousel({
        loop: false,
        nav: true,
        navText: ["",""],
        margin: 30,
        items: 1,
        info: true,
        responsiveClass: true,
        responsive: {
            750: {
                items: 2,
                nav: true,
            }
        }
    });



    function afterAction(event) {
        var carousel = $('.inline-carousel');
        //single carousel
        var item      = event.item.index + 1;
        var items     = event.item.count;

        //inline carousel
        console.log(event.page.index);
        var page      = event.page.index < 1 ? 1 : event.page.index + 1;
        var pageSize      = event.page.size;
        var pageNumber = Math.floor((items/pageSize) + 1)
        console.log(page);


        status.find('#item').text(item);
        status.find('#items').text(items);
        status.find('#page').text(page)
        status.find('#number-pages').text(pageNumber);
    }
});
