$(function(){
    $('.header__slider').slick({
        arrows: false,
        vertical: true,
        autoplay: 1000,
        dots: true,
        dotsClass: 'header-dots',
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });
});