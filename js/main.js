$(function () {

    /* section1 */
    $('#section1 .slick').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('#section1 .main_text_box').removeClass('active').fadeOut();

        $('#section1 .count').fadeOut(200);
    });
    $('#section1 .slick').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        $('#section1 .main_text_box').addClass('active').fadeIn();
        $('#section1 .count').fadeIn(200);
    });

    var $slick_carousel = $('#section1 .slick');
    $slick_carousel.on('init', function (event, slick) {
        $slick_carousel.find('.slick-current').removeClass('slick-active');
        setTimeout(function () {
            $slick_carousel.find('.slick-current').addClass('slick-active');
        }, 100);
    });

    $('#section1 .slick').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('#section1 .count').html('<em>' + i + '</em> ' + slick.slideCount);
    });
    $('#section1 .slick').slick({
        autoplay: false,
        arrows: false,
        accessibility: false,
        draggable: true,
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        zIndex: 1000,
        pauseOnHover: false,
        autoplaySpeed: 5000,
        speed: 500,
    });

    /* section3 */
    $('.solution_img').hide();
    $('.solution_img').first().show();
    $('#section3 .solution_list li').mouseover(function () {
        $('#section3 .solution_list li').children().removeClass('active');
        $(this).children().addClass('active');
        var Idx = $(this).index();
        $('.solution_img').hide();
        $('.solution_img').eq(Idx).stop().fadeIn(800);
    });

    $('#section3').mouseleave(function () {
        $('#section3 .solution_list li').children().removeClass('active');
        $('.solution_img').hide();
        $('.solution_img').first().show();
    });



    /* section5 */
    $('#section5 .slick').slick({
        autoplay: true,
        arrows: true,
        accessibility: false,
        draggable: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        zIndex: 1000,
        prevArrow: $('#section5 .control .prev'),
        nextArrow: $('#section5 .control .next'),
        pauseOnHover: false,
        autoplaySpeed: 3000,
        speed: 1000,
    });

    /* section6 */
    $('.review_box').hide();
    $('.review_box').first().show();

    $('#section6 .review_tab li').click(function () {
        $('#section6 .review_tab li').children().removeClass('active');
        $(this).children().addClass('active');
        var Idx = $(this).index();
        $('.review_box').hide();
        $('.review_box').eq(Idx).show();
        return false;
    });

    $('.video').hide();
    $('.video').first().show();

    $('#section6 .video_list li').click(function () {
        $('#section6 .video_list li').children().removeClass('active');
        $(this).children().addClass('active');
        var Idx = $(this).index();
        $('.video').hide();
        $('.video').eq(Idx).show();
        return false;
    });

    /* section7 */
    $('#section7 .slick').slick({
        variableWidth: true,
        autoplay: false,
        arrows: true,
        accessibility: false,
        draggable: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        zIndex: 1000,
        prevArrow: $('#section7 .control .prev'),
        nextArrow: $('#section7 .control .next'),
        pauseOnHover: false,
        autoplaySpeed: 5000,
        speed: 500,
    });

    $('.count_text').counterUp({
        delay: 20,
        time: 2000,
    });


});