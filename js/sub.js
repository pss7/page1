$(function () {

    /* 공통 */
    $('.com_review_wrap .slick').slick({
        arrows: true,
        accessibility: false,
        vertical: true,
        slidesToShow: 1,
        prevArrow: $('.com_review_wrap .control .prev'),
        nextArrow: $('.com_review_wrap .control .next'),
        autoplaySpeed: 5000,
        speed: 500,
    });
    $('.com_slick_wrap .slick').slick({
        autoplay: true,
        variableWidth: true,
        arrows: false,
        centerMode: true,
        autoplaySpeed: 2000,
        speed: 700,
    });
    $('.com_rayout_right .slick').slick({
        arrows: true,
        slidesToShow: 1,
        prevArrow: $('.com_rayout_right .control .prev'),
        nextArrow: $('.com_rayout_right .control .next'),
        autoplaySpeed: 5000,
        fade: true,
        speed: 500,
    });

    $('.reservation_box .time_lsit li a').click(function () {
        $('.reservation_box .time_lsit li a').removeClass('active');
        $(this).addClass('active');
        return false;
    });

    $('.slick_wrap2 .slick2').slick({
        arrows: true,
        slidesToShow: 1,
        prevArrow: $('.slick_wrap2 .control .prev'),
        nextArrow: $('.slick_wrap2 .control .next'),
        autoplaySpeed: 5000,
        fade: true,
        speed: 500,
    });

    $('.slick_wrap3 .slick3').slick({
        arrows: true,
        slidesToShow: 1,
        prevArrow: $('.slick_wrap3 .control .prev'),
        nextArrow: $('.slick_wrap3 .control .next'),
        autoplaySpeed: 5000,
        fade: true,
        speed: 500,
    });

    /* 고객후기 */
    $('.review_content_box').hide();
    $('.review_content_box').first().show();
    $('.review_box .com_tab2 li').click(function () {
        $('.review_box .com_tab2 li').children().removeClass('active');
        $(this).children().addClass('active');
        var Idx = $(this).index();
        $('.review_content_box').hide();
        $('.review_content_box').eq(Idx).show();
        return false;
    });

    /* 생기언론보도 */
    $('.sidewalk_content').hide();
    $('.sidewalk_content').first().show();
    $('.sidewalk_box .com_tab2 li').click(function () {
        $('.sidewalk_box .com_tab2 li').children().removeClass('active');
        $(this).children().addClass('active');
        var Idx = $(this).index();
        $('.sidewalk_content').hide();
        $('.sidewalk_content').eq(Idx).show();
        return false;
    });

    /* 공통 */
    $('.com_rayout_box2 .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.com_rayout_box2 .control .prev'),
        nextArrow: $('.com_rayout_box2 .control .next'),
        asNavFor: '.slider-nav',
        infinite: true,
    });
    $('.com_rayout_box2 .slider-nav').slick({
        arrows: false,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        infinite: true,
        vertical: true,
        focusOnSelect: true,
    });
    $('.com_rayout_box2 .video_list li').click(function () {
        return false;
    });

    /* introduce_wrap */
    var swiper = new Swiper('.introduce_wrap #section1 .swiper-container', {
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 53,
    });

    /* introduce_wrap2 */
    var swiper = new Swiper('.introduce_wrap #section4 .swiper-container', {
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 29,
    });

    $(document).scroll(function () {
        if ($(document).scrollTop() < 5550) {
            $(".history_text").text('2008');
        } if ($(document).scrollTop() > 5550) {
            $(".history_text").text('2011');
        } if ($(document).scrollTop() > 5870) {
            $(".history_text").text('2012');
        } if ($(document).scrollTop() > 5900) {
            $(".history_text").text('2012');
        } if ($(document).scrollTop() > 6100) {
            $(".history_text").text('2013');
        } if ($(document).scrollTop() > 6400) {
            $(".history_text").text('2014');
        } if ($(document).scrollTop() > 7000) {
            $(".history_text").text('2015');
        } if ($(document).scrollTop() > 7500) {
            $(".history_text").text('2016');
        } if ($(document).scrollTop() > 8000) {
            $(".history_text").text('2017');
        } if ($(document).scrollTop() > 8700) {
            $(".history_text").text('2018');
        } if ($(document).scrollTop() > 9200) {
            $(".history_text").text('2019');
        } if ($(document).scrollTop() > 9800) {
            $(".history_text").text('2020');
        } if ($(document).scrollTop() > 10300) {
            $(".history_text").text('2021');
        }

    });

    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('#wrap'),
        smooth: true,
        smoothMobile: true,
        paused: true,
        onUpdate: () => {
            window.dispatchEvent(new Event('resize'));
        },
        multiplier: 1,
        smartphone: {
            smooth: true
        },
        tablet: {
            smooth: true
        },
        useKeyboard: true,

    });

    var lastScrollTop = 0;
    var delta = 0;
    locoScroll.on('scroll', (position) => {
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#wrap", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        pinType: document.querySelector('#wrap').style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();


    /*
    new fullpage('#fullpage', {
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
    });
    */

});





