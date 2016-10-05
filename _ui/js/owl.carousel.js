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



    function afterAction(event) {
        var page      = event.item.index + 1;
        var pages     = event.item.count;     // Number of pages

        status.find('#page').text(page);
        status.find('#pages').text(pages);
    }
});
