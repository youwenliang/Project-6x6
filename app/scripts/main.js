
var contents = [
     ["1-1","1-2","1-3","1-4","1-5","1-6"],
     ["2-1","2-2","2-3","2-4","2-5","2-6"],
     ["3-1","3-2","3-3","3-4","3-5","3-6"],
     ["4-1","4-2","4-3","4-4","4-5","4-6"],
     ["5-1","5-2","5-3","5-4","5-5","5-6"],
     ["6-1","6-2","6-3","6-4","6-5","6-6"],
];

var colors = ["rgb(208,191,158)","rgb(253,233,201)","rgb(180,219,202)","rgb(113,164,160)","rgb(154,186,199)","rgb(96,165,182)"];
var i = 0;
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    parallax: true,
    speed: 600,
    onSlideChangeEnd: function(swiper) {
      i = swiper.activeIndex;
      $('.parallax-bg').css('background',colors[i]);
    }
});

var swiper2 = new Swiper('.swiper-contents', {
    paginationClickable: true,
    parallax: true,
    speed: 600,
    // loop: true,
});

var stage = 0;
var current;
var currentH;
var currentCH;

$(document).ready(function() {
    $('#enter').click(function(){
    	TweenLite.to($('.home-screen'), 1, {
    		marginTop: -$(window).height(),
    		ease: Power3.easeInOut
    	});
    });

    $('.hexagon').click(function(){
        if(stage == 0){
        	TweenLite.to($('.home-screen'), 1, {
        		marginTop: 0,
        		ease: Power3.easeInOut
        	});
        }
        else if(stage == 1){
            TweenLite.to($('.swiper-contents'), 1, {
                marginTop: 0,
                ease: Power3.easeInOut,
                onComplete: function(){
                    swiper2.slideTo(0);
                }
            });
            TweenLite.to(current.children(), .5, {
                scale: 1,
                delay: .5,
                ease: Power1.easeInOut
            });
            stage = 0;
            TweenLite.to(current, .5, {
                top:"100px",
                width: "330px",
                height: currentH,
                delay: .5,
                ease: Power1.easeInOut
            });
            TweenLite.to(current.children().first(), .5, {
                marginTop: currentCH,
                delay: .5,
                ease: Power1.easeInOut
            });
            swiper.unlockSwipes();
            $('.hexagon').removeClass('add-color-'+parseInt(i+1));
        }
    });

    $('.expand').click(function(){
        current = $(this).parent();
        currentH = $(this).parent().height();
        currentCH = $(this).parent().children().first().css("margin-top");
        TweenLite.to($(this).parent().children(), .5, {
            scale: 0.8,
            ease: Power1.easeInOut
        });
        TweenLite.to($(this).parent(), .5, {
            top:0,
            width: "100%",
            height: "100%",
            ease: Power1.easeInOut
        });
        TweenLite.to($(this).parent().children().first(), .5, {
            marginTop: "100px",
            ease: Power1.easeInOut
        });
        swiper.lockSwipes();
        stage = 1;
        TweenLite.to($('.swiper-contents'), 1, {
            marginTop: -$(window).height()+120,
            ease: Power3.easeInOut
        });
        $('.hexagon').addClass('add-color-'+parseInt(i+1));
        $('#slide1').text(contents[i][0]);
        $('#slide2').text(contents[i][1]);
        $('#slide3').text(contents[i][2]);
    });
});