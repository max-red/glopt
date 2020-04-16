$(document).ready(function(){
    $('.carousel__slide').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        dotsClass: 'slick-dots'
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('.body'),
        menu = document.querySelector('.header__menu'),
        menuItem = document.querySelectorAll('.header__item'),
        burger = document.querySelector('.header__burger');

    burger.addEventListener('click', () => {
        body.classList.toggle('body_active');
        burger.classList.toggle('header__burger_active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            body.classList.toggle('body_active');
            burger.classList.toggle('header__burger_active');
            menu.classList.toggle('header__menu_active');
        });
    });
});