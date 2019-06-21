$(document).ready(function() {
    $("#modal-form").submit(function() {
        $.ajax({
            type: "POST",
            url: "page-mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $("#modal-form").trigger("reset");
            document.location.href = "http://www.winx.by/thanks.html";
        });
        return false;
    });

    $("#page-form").submit(function() {
        $.ajax({
            type: "POST",
            url: "page-mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $("#page-form").trigger("reset");
            document.location.href = "http://www.winx.by/thanks.html";
        });
        return false;
    });
});

function is_mobile() {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
}
// $(window).on("load", function(){
if (!is_mobile()) {
    new WOW().init()
}
// });

jQuery(document).ready(function($) {
    // $(window).on('load', function() {
    if (!is_mobile()) {
        $('.wrapper-loader').fadeOut(400);
    } else {
        $('.wrapper-loader').fadeOut(10);
    }
    // }
    var menuActive = $(".main-nav .main-nav__item.active");
    var menuHead = jQuery('.main-nav__list');
    var leftPos = menuActive.offset().left - menuHead.offset().left;
    // setTimeout(function(){
    $('.magic-line').css({
        'left': leftPos,
        'width': menuActive.outerWidth()
    });
    // }, 400);
    $('.main-nav__item').hover(function() {
        var jthis = $(this);
        var left_pos = jthis.offset().left - menuHead.offset().left;
        var el_width = jthis.outerWidth();
        $('.magic-line').stop(false, false).animate({
            'left': left_pos,
            'width': el_width
        }, 400);
    }, function() {
        $('.magic-line').stop(false, false).animate({
            'left': leftPos,
            'width': menuActive.outerWidth()
        }, 400);
    });
    // $(".main-section_unified-slider").slick({
    //   initialSlide: 0,
    //   slidesToShow: 1,
    //   dots: true,
    //   arrows: true,
    //   appendDots: $('.js-slider-tools'),
    //   appendArrows: $('.js-slider-tools'),
    //   // autoplaySpeed: 5000,
    //   // adaptiveHeight: true,
    //   slidesToScroll: 1,
    // });
    // reviews
    $('.reviews-slider').slick({
        initialSlide: 0,
        slidesToShow: 1,
        dots: true,
        arrows: true,
        // autoplaySpeed: 5000,
        // adaptiveHeight: true,
        slidesToScroll: 1,
    });

    function videoplay(button) {
        var par = $(button).closest('.review-item__image-holder');
        var val = $(button).closest('.review-item__image-holder').attr('data-video');
        par.prepend('<iframe width="300" height="261" src="' + val + '" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    }

    $('.review-item .btn-play').on('click', function(e) {
        e.preventDefault();
        videoplay($(this));
        $(this).parent().addClass('active');
    });
    $('.modal-close').on('click', function(e) {
        e.preventDefault();

        if ($(this).hasClass('modal-close_message-btn')) {
            $('#window-gratitude').fadeOut(200);
        }
    });
    $('.thanks-letter_content').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [{
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]
    });
    $('.grateful-slider').slick({
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]
    });
    if (!is_mobile()) {
        $('.carousel').carousel({
            directionNav: true,
            // buttonNav: 'index',
            frontWidth: 270,
            frontHeight: 380,
            carouselWidth: 1100,
            backZoom: .83,
            autoplay: false,
            slidesPerScroll: 5,
            hMargin: 1,
            mouse: false,
        });
    }
    $('.mobile-menu-opener, .mobile-drop__close').on('click', function(e) {
        e.preventDefault();

        $('.mobile-drop').toggleClass('active');
    });
    $(".fancybox").fancybox({
        afterShow: function() {
            $(".fancybox-image")
                .on("click", function() {
                    $.fancybox.close(true);
                });
        }
    });

    jQuery('.scrollpane-content').mCustomScrollbar({
        theme: "rounded-dark"
    });




    //   $(window).resize(function(){
    //   jQuery('.scrollpane-content').jScrollPane({
    //       // showArrows: true,
    //       verticalDragMaxHeight: 20,
    //       verticalGutter: 10,
    //       hideFocus: true
    //   });
    // });
    $('input[type="tel"]').inputmask("+7 (999) 999 99 99", {
        "clearIncomplete": true
    });
    // $(window).on('load', function() {
    // $mainNav = $(".main-nav .main-nav__list");
    // $mainNav.append("<li class='magic-line'></li>");
    // var $magicLine = $("#magic-line");

    // });
    var blockWidth = $(".main-nav .main-nav__item.active").outerWidth();
    $(window).scroll(function() {
        if (blockWidth != $(".main-nav .main-nav__item.active").outerWidth()) {
            var menuActive = $(".main-nav .main-nav__item.active");
            var menuHead = jQuery('.main-nav__list');
            var leftPos = menuActive.offset().left - menuHead.offset().left;
            $('.magic-line').css({
                'left': leftPos,
                'width': menuActive.outerWidth()
            });
        }
    });
    $('.form-textarea').on("focus", function() {
        $('.form-textarea_line').addClass('is-active');
    }).on("blur", function() {
        if ($(this).val() == 0)
            $('.form-textarea_line').removeClass('is-active');
    });

    $(window).on("scroll load resize", function() {
        if ($('.global-wrapper').hasClass('portfolio-technology-page')) {

            var w_top = $(window).scrollTop();
            var u_top = $('.tech-block_advantages_connector').offset().top;
            var t_top = $('.portfolio_text-block_connector').offset().top;
            if (w_top > u_top - 300) {
                $('.tech-block_advantages_connector').addClass('is-active');
            }
            if (w_top > t_top - 500) {
                $('.portfolio_text-block_connector').addClass('is-active');
            }
        }
    });

    if ($('.head-content').hasClass('head-content_black')) {
        $('.lang-box').addClass('is-black');
    }

    $('.inner_form-section form').submit(function(e) {
        var jhis = e.target;

        e.preventDefault();

        $(jhis).find('.requiredField').removeClass('input-error');
        var error = 0;
        $(jhis).find('.requiredField').each(function() {
            if ($(this).hasClass('callback-name')) {
                if ($(this).val().length < 3) {
                    $(this).addClass('input-error');
                    error = 1;
                }
            } else if ($(this).hasClass('callback-email')) {
                var emailReg = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                if (emailReg.test($(this).val()) == false) {
                    $(this).addClass('input-error');
                    error = 2;
                }
            } else if ($(this).hasClass('callback-phone')) {
                if ($(this).val().length < 10) {
                    $(this).addClass('input-error');
                    error = 3;
                }
            }
        });
        if (error == 0) {

            var formData = new FormData(this);

            $.ajax({
                url: '/mail.php',
                type: 'POST',
                contentType: 'multipart/form-data',
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                success: function(data) {

                    $('#window-gratitude').fadeIn(1200, function() {
                        $('.message-thanks').animate({
                            "opacity": 1,
                        }, 1200);
                        setTimeout(function() {
                            $('#window-gratitude').fadeOut();
                        }, 2000);
                    });
                    $('.form-input').each(function(i) {
                        $(this).val('');
                        $('.form-textarea').val('');
                    });
                    $('.jcf-fake-input').text('РџСЂРёРєСЂРµРїРёС‚СЊ С„Р°Р№Р»');
                }
            });
        } else {
            return false;
        }

        $('.form-callback').submit(function() {
            if ($('check').val() !== 'stopSpam') {
                return false;
            }
        });
    });
    $('.feedback-form form').submit(function(e) {
        var jhis = e.target;

        e.preventDefault();
        console.log(e);

        $(jhis).find('.requiredField').closest('.feedback-form__row').removeClass('input-error');
        var error = 0;
        $(jhis).find('.requiredField').each(function() {
            if ($(this).hasClass('callback-name')) {
                if ($(this).val().length < 3) {
                    $(this).closest('.feedback-form__row').addClass('input-error');
                    error = 1;
                }
            } else if ($(this).hasClass('callback-email')) {
                var emailReg = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                if (emailReg.test($(this).val()) == false) {
                    $(this).closest('.feedback-form__row').addClass('input-error');
                    error = 2;
                }
            } else if ($(this).hasClass('callback-phone')) {
                if ($(this).val().length < 10) {
                    $(this).closest('.feedback-form__row').addClass('input-error');
                    error = 3;
                }
            }
        });
        if (error == 0) {

            var formData = new FormData(this);

            $.ajax({
                url: '/mail.php',
                type: 'POST',
                contentType: 'multipart/form-data',
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                success: function(data) {
                    $('#window-gratitude').fadeIn(1200, function() {
                        $('.message-thanks').animate({
                            "opacity": 1,
                        }, 1200);
                        setTimeout(function() {
                            $('#window-gratitude').fadeOut();
                        }, 2000);
                    });
                    $('.text-field').each(function(i) {
                        $(this).val('');
                    });
                    $('.modal-container').removeClass('active');
                    $('.jcf-fake-input').text('РџСЂРёРєСЂРµРїРёС‚СЊ С„Р°Р№Р»');
                }
            });

        } else {
            return false;
        }
    });

});
$(document).ready(function() {
    $(".result-item-new").fancybox();

    $(".scroll").on("click", function() {
        var e = $(this).data("scroll"),
            t = $(e).offset().top;
        $("html, body").stop().animate({ scrollTop: t + "px" }, 1100, "easeInOutExpo"), $(".main-nav ul").removeClass("active"), event.preventDefault()
    }), $(".nav-bars").on("click", function() {
        $(".main-nav ul").toggleClass("active")
    })
});