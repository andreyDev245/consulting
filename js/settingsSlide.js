$(function(){

    // https://owlcarousel2.github.io/OwlCarousel2/index.html
    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: true,
        touchDrag: true,
        loop: true,
        animateOut: 'fadeOut',
        lazyLoad: true
    });

});