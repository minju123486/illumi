"use strict";

//Rage Template
//Designerd by: http://bootstrapthemes.co

jQuery(document).ready(function ($) {

//for Preloader

    $(window).load(function () {
        $("#loading").fadeOut(500);
    });


    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#navbar-menu').find('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 80)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });



    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

    var wow = new WOW({
        mobile: false // trigger animations on mobile devices (default is true)
    });
    wow.init();

// magnificPopup

    $('.popup-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.video-link').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        iframe: {
  markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
          '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

  patterns: {
    youtube: {
      index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

      id: 'v=', // String that splits URL in a two parts, second part should be %id%
      // Or null - full URL will be returned
      // Or a function that should return %id%, for example:
      // id: function(url) { return 'parsed id'; }

      src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
    }
    // you may add here more sources

  },

  srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
}
 
    });



// slick slider active Home Page Tow
    $(".testimonial_slid").slick({
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<i class='fa fa-angle-left nextprevleft'></i>",
        nextArrow: "<i class='fa fa-angle-right nextprevright'></i>",
        autoplay: true,
        autoplaySpeed: 2000
    });



//    featured slider
document.addEventListener('DOMContentLoaded', function () {
    const sliderContainer = document.getElementById('featured_slider');
    const slides = Array.from(sliderContainer.children);

    // 슬라이더 중앙으로 이동하는 함수
    function moveToCenter(index) {
        // 각 슬라이드의 너비와 슬라이더 컨테이너의 중앙 위치를 계산
        const slideWidth = slides[0].offsetWidth + 20; // 이미지 너비와 간격 포함
        const containerCenter = sliderContainer.offsetWidth / 2;

        // 클릭한 이미지의 위치가 중앙으로 오도록 오프셋 계산
        const offset = (slideWidth * index + slideWidth / 2) - containerCenter;
        
        // 슬라이더 컨테이너 이동
        sliderContainer.style.transform = `translateX(-${offset}px)`;
    }

    // 각 슬라이드에 클릭 이벤트 추가 및 로그 확인
    slides.forEach((slide, index) => {
        slide.addEventListener('click', function () {
            console.log("클릭되었습니다"); // 콘솔에 메시지 출력
            moveToCenter(index); // 클릭된 슬라이드를 중앙으로 이동
        });
    });
});






//---------------------------------------------
// Counter 
//---------------------------------------------

    $('.statistic-counter').counterUp({
        delay: 10,
        time: 2000
    });

//---------------------------------------------
// Scroll Up 
//---------------------------------------------

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });





//About us accordion 

    $("#faq_main_content").collapse({
        accordion: true,
        open: function () {
            this.addClass("open");
            this.css({height: this.children().outerHeight()});
        },
        close: function () {
            this.css({height: "0px"});
            this.removeClass("open");
        }
    });





//Team Skillbar active js

    jQuery('.teamskillbar').each(function () {
        jQuery(this).find('.teamskillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 6000);
    });



//Span Menu toggle
	$(".navbar-header button").on('click', function(){
		$('.navbar-header button').toggleClass('active');
	});

  

    //End

});














