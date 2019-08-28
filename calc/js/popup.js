$(document).ready(function () {

    $(".header_top_back_call_trigger").click(function (e) {
        e.preventDefault();
        $(".popup--callback").fadeIn();
        $(".overlay").addClass('overlay--active');
    });

    $(".cabinet-link").click(function (e) {
        e.preventDefault();
        $(".popup--login").fadeIn();
        $(".overlay").addClass('overlay--active');
    });

    $(".popup__close").click(function (e) {
        e.preventDefault();
        $(".pop_wrapper").fadeOut();
        $(".popup").fadeOut();
        $(".overlay").removeClass('overlay--active');
    });

    $('.overlay').on('click', function () {
        $('.popup').fadeOut();
        $('.overlay').removeClass('overlay--active');
    });
});
