$(function () {

    $('.com_img_effect').addClass('active');

    /* sitemap */
    $('#header .site_map_btn').click(function () {
        $('#sitemap_wrap').addClass('active');
    });
    $('#sitemap_wrap .site_map_close').click(function () {
        $('#sitemap_wrap').removeClass('active');
    });

    /* header */
    $('#header .link a').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next().slideUp();
        } else {
            $(this).addClass('active');
            $(this).next().slideDown();
        }
    });

    /* footer */
    $('#footer .footer_top a').mouseover(function () {
        $('#footer .footer_hover_wrap').stop().fadeIn(300);
        $('#footer .footer_top a').hide();
    });

    $('#footer .footer_hover_wrap').mouseleave(function () {
        $('#footer .footer_hover_wrap').stop().fadeOut(300);
        $('#footer .footer_top a').show();
    });
    $('#footer .inquiry_wrap .slick').slick({
        autoplay: true,
        arrows: false,
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3500,
        speed: 700,
    });
    $('#footer .site_link > a').click(function () {
        if ($(this).hasClass('active')) {
            $('#footer .site_list').slideUp();
            $(this).removeClass('active');
        } else {
            $('#footer .site_list').slideDown();
            $(this).addClass('active');
        }
        return false;
    });

});