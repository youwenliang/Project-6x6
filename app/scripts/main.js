console.log('\'Allo \'Allo!');

$(document).ready(function() {
    $('#enter').click(function(){
    	TweenLite.to($('.home-screen'), 1, {
    		marginTop: -$(window).height(),
    		ease: Power3.easeInOut
    	});
    });

    $('.hexagon').click(function(){
    	TweenLite.to($('.home-screen'), 1, {
    		marginTop: 0,
    		ease: Power3.easeInOut
    	});
    });
});