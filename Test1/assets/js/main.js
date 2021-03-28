$(function() {
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('#preloader').delay(500).fadeOut(500);
    });
    
    
    //===== Search
    
    $('a[href="#search"]').on('click', function(){
        $("#search").fadeIn(600);
    });
    $('.closebtn').on('click', function(){
        $("#search").fadeOut(600);
    });
    
    
    //===== Meanmenu
    
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
        meanMenuClose: '<span></span><span></span></span><span></span>',
        meanMenuCloseSize: "0px",
    });
    
    //===== Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 110) {
            $(".navigation").removeClass("sticky");
        } else{
            $(".navigation").addClass("sticky");
        }
    });
    
    
    //===== Isotope Project 1
    
    $('.container').imagesLoaded(function () {
        var $grid = $('.grid').isotope({
        // options
            transitionDuration: '1s'
        });
        
        // filter items on button click
        $('.cases-menu ul').on( 'click', 'li', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });
        
        //for menu active class
        $('.cases-menu ul li').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
    });
    
    
    //====== Magnific Popup
    
    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });
    
    
    //=====  Slick Testimonial
    
    $('.testimonial-active').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 2,
              }
            },
            {
              breakpoint: 992,
              settings: {
                  slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
              }
            }
          ]
    });
    
    
    //=====  Slick Patnear
    
    $('.partner-active').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                  slidesToShow: 4,
              }
            },
            {
              breakpoint: 768,
              settings: {
                  slidesToShow: 3,
              }
            },
            {
              breakpoint: 576,
              settings: {
                  slidesToShow: 2,
              }
            }
          ]
    });
    
    
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    
    
    //=====  Slick Testimonial
    
    $('.testimonial-active-2').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 2,
              }
            },
            {
              breakpoint: 992,
              settings: {
                  slidesToShow: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
              }
            }
          ]
    });
    
    
    //===== Counter Up
    
    $('.counter').counterUp({
        delay: 10,
        time: 2500,
    });
    
    
    //===== Nice Select
    
    $('select').niceSelect();
    
    
    //===== Magnific Popup
    
    $('.shop-items').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });
    
    
    //===== Nice Number
    
    $('input[type="number"]').niceNumber({
       // custom button text
        buttonDecrement: "<i class='fa fa-sort-asc' ></i>",
        buttonIncrement: "<i class='fa fa-sort-desc' ></i>",

    });

    
    //=====  Rating selection
    
    var $star_rating = $('.star-rating .fa');

    var SetRatingStar = function() {
        return $star_rating.each(function() {
            if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
              return $(this).removeClass('fa-star-o').addClass('fa-star');
            } else {
              return $(this).removeClass('fa-star').addClass('fa-star-o');
            }
        });
    };
    
    $star_rating.on('click', function() {
      $star_rating.siblings('input.rating-value').val($(this).data('rating'));
      return SetRatingStar();
    });

    SetRatingStar();
    
    
    //===== WOW
    
    new WOW().init();
    

    
    
    
    
    
    
    
    
    
    
    
    
});