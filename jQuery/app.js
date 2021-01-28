$(function () {
    
    let header = $("#header");
    let intro = $("#intro");
    let introH = $(intro).innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    
    /* Fixed Header */

    $(window).on("scroll resize load", function () {
        scrollPos = $(this).scrollTop();
        introH = $(intro).innerHeight();

        if  (scrollPos > introH) {
            $(header).addClass("fixed");
        } else {
            $(header).removeClass("fixed");
        }
    });

    /* Smooth Menu */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault ();   /* убирает работу ссылку по автомату (чтоб не откр в новой вкладке) */

        let elementId=$(this).data("scroll");
        let elementOffset= $(elementId).offset().top;

        nav.removeClass("show");  /* при клике на пункт меню убирается класс меню "показать"*/

        $("html, body").animate ({  /*анимированный прокрут к нужному месту*/
            scrollTop:elementOffset -62
        }), 600;
    });

    /*Nav Toggle*/

    navToggle.on("click", function (e) {   /*при клике на меню должно всплывать/прятаться содержимое*/
        e.preventDefault();
        
        nav.toggleClass("show");
    });

    /*Test.Slider    https://kenwheeler.github.io/slick/*/

    let slider = $("#testSlider");
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });

});    