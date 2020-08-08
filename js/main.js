$(function(){
    $('.photo__slider').slick({
        prevArrow: '<button class="slick-prev"><img src="images/prev.svg"></button>',
        nextArrow: '<button class="slick-next"><img src="images/next.svg"></button>',
    });
    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });
});