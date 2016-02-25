
var contents = [
     ["#01 Laugh a lot","#02 Never bored","#03 Easily understand","#04 Professional","#05 Believe in me","#06 Look after me"],
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
var currentCH2;
var currentCH3;
var $this;

$(document).ready(function() {
    $('#enter').click(function(){
    	TweenLite.to($('.home-screen'), 1, {
    		marginTop: -$(window).height(),
    		ease: Power3.easeInOut
    	});
        var r = Math.floor((Math.random() * 6) + 1);
        $('#photo1').css({"background-image":"url(images/6-1-"+r+".jpg)"});
        $('#photo2').css({"background-image":"url(images/6-2-"+r+".jpg)"});
        $('#photo3').css({"background-image":"url(images/6-3-"+r+".jpg)"});
        $('#photo4').css({"background-image":"url(images/6-4-"+r+".jpg)"});
        $('#photo5').css({"background-image":"url(images/6-5-"+r+".jpg)"});
        $('#photo6').css({"background-image":"url(images/6-6-"+r+".jpg)"});
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
                    TweenLite.to($this, .5, {
                        opacity: 1,
                        scale: 1,
                    });
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
                ease: Power1.easeInOut,
                onComplete: function(){
                    TweenLite.to($('.photo'), .5, {
                        opacity: 1,
                        ease: Power1.easeInOut
                    });
                }
            });
            TweenLite.to(current.children('.title'), .5, {
                marginTop: currentCH,
                delay: .5,
                ease: Power1.easeInOut
            });
            TweenLite.to(current.children('.subtitle'), .5, {
                marginTop: currentCH2,
                delay: .5,
                ease: Power1.easeInOut
            });
            TweenLite.to(current.children('.text'), .5, {
                marginTop: currentCH3,
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
        currentCH = $(this).parent().children('.title').css("margin-top");
        currentCH2 = $(this).parent().children('.subtitle').css("margin-top");
        currentCH3 = $(this).parent().children('.text').css("margin-top");
        $this = $(this);
        $('.circle').css('background-color', colors[i]);
        for(var k = 1; k <= 6; k++) {
            $('#slide'+k+' .figure').css("background-image","url(images/"+parseInt(i+1)+"-"+k+".png)");
            $('#slide'+k+' p').text(contents[i][k-1]);
        }
        TweenLite.to($('.photo'), .5, {
            opacity: 0,
            ease: Power1.easeInOut,
            onComplete: function(){
                //Randomize images!
                var r = Math.floor((Math.random() * 6) + 1);
                $('#photo1').css({"background-image":"url(images/6-1-"+r+".jpg)"});
                $('#photo2').css({"background-image":"url(images/6-2-"+r+".jpg)"});
                $('#photo3').css({"background-image":"url(images/6-3-"+r+".jpg)"});
                $('#photo4').css({"background-image":"url(images/6-4-"+r+".jpg)"});
                $('#photo5').css({"background-image":"url(images/6-5-"+r+".jpg)"});
                $('#photo6').css({"background-image":"url(images/6-6-"+r+".jpg)"});
            }
        });
        TweenLite.to($this, .5, {
            opacity: 0,
            scale: 1.2,
            ease: Power1.easeInOut,
            onComplete: function(){
                TweenLite.to($this.parent().children(), .5, {
                    scale: 0.75,
                    ease: Power1.easeInOut
                });
                TweenLite.to($this.parent(), .5, {
                    top:0,
                    width: "100%",
                    height: "100%",
                    ease: Power1.easeInOut
                });
                TweenLite.to($this.parent().children('.title'), .5, {
                    marginTop: "90px",
                    ease: Power1.easeInOut
                });
                TweenLite.to($this.parent().children('.subtitle'), .5, {
                    marginTop: "-10px",
                    ease: Power1.easeInOut
                });
                TweenLite.to($this.parent().children('.text'), .5, {
                    marginTop: "-15px",
                    ease: Power1.easeInOut
                });
                swiper.lockSwipes();
                stage = 1;
                TweenLite.to($('.swiper-contents'), 1, {
                    marginTop: -$(window).height()+120,
                    ease: Power3.easeInOut
                });
                $('.hexagon').addClass('add-color-'+parseInt(i+1));
            }
        });
    });
});