'use strict';

// $(function() {
//     const SLIDELIST = [
//         {image: '/static/img/assets/banner/banner-1.png',title: 'Устные переводы',href: '#1'},
//         {image: '/static/img/assets/banner/banner-2.png',title: 'Письменные переводы',href: '#2'},
//         {image: '/static/img/assets/banner/banner-3.jpg',title: 'Продвижение',href: '#3'},
//         {image: '/static/img/assets/banner/banner-4.png',title: 'Перевод сайтов',href: '#4'},
//     ];

//     const BANNER = $('.banner')[0];

//     let i = 0;

//     function imageChange(div, data) {
//         if (!i) { i = 0; } else if (!data[i]) { i = 0; }
//         $(div).addClass('changeback');
//         setTimeout(function() {
//             $(div).find('.banner__title').html(data[i].title);
//             $(div).find('.banner__link').attr('href', data[i].href);
//             // $(div).css('background', 'url("' + window.location.href + data[i].image + '") no-repeat right center');
//             $(div).css('background', 'url("' + data[i].image + '") no-repeat right center');
//             $(div).removeClass('changeback');
//             i++;
//         }, 500)

//     }

//     imageChange(BANNER, SLIDELIST);
//     setInterval(function() { imageChange(BANNER, SLIDELIST) }, 5000);
// });

$(function () {
    $('.banner__list').flickity({
        pageDots: false,
        prevNextButtons: false,
        draggable: false,
        autoPlay: 5000
    });
});
'use strict';

$(function () {
    if ($('.pagename').lenght !== 0) {
        $('.pagename').html($('.section__title').first().text());
        $('.pagename').css('width', $('.content_page').css('height'));
    }
});
'use strict';

$(function () {
    function validate(e) {
        e.preventDefault();
        var fieldList = $('.connect__field');
        $('.error').removeClass('error');
        $('.success').removeClass('success');

        $(fieldList).each(function (i, field) {
            field = $(field).find('input, textarea').get(0);
            if ($(field).val().trim() === '') {
                $(field).parent().addClass('error');
                $('.connect__btn').addClass('error-animate');
                setTimeout(function () {
                    $('.error-animate').removeClass('error-animate');
                }, 1000);
            } else {
                $(field).parent().addClass('success');
            }
        });

        if ($('.error').length === 0) {
            $('.connect__message').addClass('message-show');
            $('.success').removeClass('success');
            setTimeout(function () {
                $('.message-show').removeClass('message-show');
            }, 4000);
            $(fieldList).each(function (i, field) {
                field = $(field).find('input, textarea').get(0);
                $(field).val('');
            });
        }
    }

    $('.connect button[type="submit"]').on('click', validate);
});
'use strict';

$(function () {
    $('.cv__work').on('click', function () {
        $('.work').children(':not(.work__close)').remove();
        $(this).children().clone().appendTo('.work');
        $('.work').addClass('work-show');
        $('.page').addClass('shadow');
    });

    $('.work__close').on('click', function () {
        $('.work').removeClass('work-show');
        $('.page').removeClass('shadow');
    });

    $('[data-act="cv"]').on('click', function () {
        $(this).toggleClass('show');
        $('.cv-text').finish().slideToggle();
    });
});
'use strict';

$(function () {
    $('.menu__sub').hover(function () {
        $(this).prev().addClass('menu__link_active');
    }, function () {
        $('.menu__link_active').removeClass('menu__link_active');
    });
});