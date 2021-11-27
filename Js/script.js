
/*sticky nav*/
$(document).ready(function () {
    $('.js--section-feature').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    /*Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
    });
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-feature').offset().top }, 1000);
    });

    /*Animations on scroll */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%;'
    });
     $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    }, {
        offset: '50%;'
     });
     $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%;'
     });
     $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animate__animated animate__pulse');
    }, {
        offset: '50%;'
     });
    
    /*Mobile nav*/
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon')

        nav.slideToggle(200);
        if (icon.attr("name") == "menu") {
            icon.attr("name", "close");
        }
        else {
            icon.attr("name", "menu")
        }

    });
    
});