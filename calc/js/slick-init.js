$(document).ready(function() {

    $('.slider-string-top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        infinite: true,
        asNavFor: '.slider-string-nav'
    });

    $('.slider-string-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-string-top',
        dots: false,
        arrows: true,
        infinite: true,
        centerMode: true,
        focusOnSelect: true
    });

});