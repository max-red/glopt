'use strict';

$(document).ready(function(){

    // Slide

    $('.carousel__slide').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        dotsClass: 'slick-dots'
    });

    // Burger

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

    // Modal
    
    const arr = ['order', 'calculation', 'detail'];

    function handleClick(order) {
        $(`[data-modal=${order}]`).on('click', function() {
            $(`.overlay, #${order}`).fadeIn('slow');
            $('body').css('overflow', 'hidden');
            $('.modal__close').click(function(){
                $('body').css('overflow', 'auto');
            }); 
        });
    }

    arr.forEach(item => {
      handleClick(item);
    });

    $('.modal__close').on('click', function(){
        $('.overlay, #order, #calculation, #detail, #thanks').fadeOut('slow');
    });

    $('.button_mini').each(function(i){
        $(this).on('click', function(){
            $('#detail .modal__subtitle').text($('.price__subtitle').eq(i).text());
            $('.overlay, #detail').fadeIn('slow');
            $('body').css('overflow', 'hidden');
            $('.modal__close').click(function(){
                $('body').css('overflow', 'auto');
            });
        });
    });

    // Validate

    function validateForms1(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
            }
        });
    }

    validateForms1('#order form');
    validateForms1('#calculation form');
    validateForms1('#detail form');

    function validateForms2(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "",
                    minlength: jQuery.validator.format("")
                  },
                phone: "",
                email: {
                  required: "",
                  email: ""
                }
            }
        });
    }

    validateForms2('#consultation form');
    validateForms2('#questions form');

    // Form

    $('form').submit(function(e){
        const id = e.target.id;
        const isValid = $(`#${id}`).valid();
        if (!isValid) {
            return;
        }
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#order, #calculation, #detail').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');
            $('#' + id).trigger('reset');
        });
        return false;
    });

    // Maska

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    // Scroll

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1500) {
            $('.pageup').fadeIn();
            } else {
                $('.pageup').fadeOut();
            }
    });

    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });


});

