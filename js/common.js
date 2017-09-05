$(document).ready(function () {

    $('.collapse-menu').on('click', function () {

        $(this).parent().toggleClass('collapsed-menu');
        $(this).find('i').toggleClass('fa-angle-down');
        $(this).next().toggleClass('d-flex fadeInUp');

    });

    $('.slider').slick({
        arrows: false,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        fade: true,
        asNavFor: '.slider-thumbs'
    });
    $('.slider-thumbs').slick({
        autoplay: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider',
        dots: false,
        focusOnSelect: true,
        vertical: true,
        centerMode: true
    });

    $('.slider-thumbs .slick-slide').removeClass('slick-active');

    //set active class to first thumbnail slides
    $('.slider-thumbs .slick-slide').eq(0).addClass('slick-active');

    // On before slide change match active thumbnail to current slide
    $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var mySlideNumber = nextSlide;
        $('.slider-thumbs .slick-slide').removeClass('slick-active');
        $('.slider-thumbs .slick-slide').eq(mySlideNumber).addClass('slick-active');
    });

});