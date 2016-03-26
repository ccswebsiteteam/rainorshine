$(document).ready(function() {
    var s           = $('.slider'),
        sWrapper    = s.find('.slide-wrapper'),
        sItem       = s.find('.slider-item'),
        btn         = s.find('.slider-link'),
        sWidth      = sItem.outerWidth(),
        sCount      = sItem.length - 1,
        sTotalWidth = sCount * sWidth;
    
    sWrapper.css('width', sTotalWidth);
    sWrapper.css('width', sTotalWidth);
    
    var clickCount  = 0;
    
    $('.slider .slider-link, .progress-button > a').on('click', function(e) {
		e.preventDefault();

		if($(this).parent().hasClass('progress-button'))
			clickCount = $(this).parent().index() - 1;

		if( $(this).hasClass('slider-link-next') ) {
			if(clickCount == sCount) clickCount = 0;
			else ++clickCount;
		} else if ( $(this).hasClass('slider-link-prev') ) {
			if(clickCount == 0) clickCount = sCount;
			else --clickCount;
		}

		TweenMax.to(sWrapper, 1, {x: '-' + ( sWidth * clickCount ) , ease: Circ.easeInOut })

		if(clickCount > 0) {
			TweenMax.to($('.fill-button'), 1, {left: 42 + ((clickCount - 1) * 10) + '%', ease: Power4.easeIn, 
			   	onComplete: function() {
			   		TweenMax.to($('.fill-button'), .3, {width: 0,
				   		onStart: function() {
				   			TweenMax.set( $('.fill-button'), {left: "120%", width: "203px"})
				   		},
				   		onComplete: function() { 
				    	// TweenMax.set( $('.fill-button'), {left: "120%", width: "203px"})
				   		} 
				   	});
			   	} 
		   	});

		   
			var clickCount_tmp  = 0
			clickCount_tmp = clickCount - 1;
			var fill_div = $('.form-progress .progress-button:eq('+clickCount_tmp+')').find('.progress-button-mask');
			var fill_div2 = $('.form-progress .progress-button:eq('+clickCount_tmp+')').find('a');
			TweenMax.to(fill_div, .5, { 
			width: "100%", 
			color: '#fff',
			ease: Power4.easeOut,
			delay: 1
			}); 
			TweenMax.to(fill_div2,.2, { 
			color: '#fff',
			delay: 1
			});
		}
    });

	var picker = new Pikaday(
	{
	    field: document.getElementById('datepicker'),
	    firstDay: 1,
	    minDate: new Date(2000, 0, 1),
	    maxDate: new Date(2020, 12, 31),
	    yearRange: [2000,2020],
	    showTime: false,
	});

	var picker1 = new Pikaday(
	{
	    field: document.getElementById('datepicker1'),
	    firstDay: 1,
	    minDate: new Date(2000, 0, 1),
	    maxDate: new Date(2020, 12, 31),
	    yearRange: [2000,2020],
	    showTime: false,
	});   

	$( document ).mousemove( function( e ) {
		$( '.banner-bg' ).parallax( -30, e );
		$( '.cloud1' )	  .parallax( 10	, e );
		$( '.cloud2' )	  .parallax( 20	, e );
		// $( '.cloud3' )	  .parallax( 30	, e );
	});

	var li_menu = $('.menu_list_menu li');
	TweenLite.set(li_menu, {perspective:200, transformStyle:"preserve-3d",transformOrigin: "50% 50%" });
	TweenLite.set(".preload-container", {perspective:200, transformStyle:"preserve-3d"});
	TweenLite.set(".preload-rotate", {rotationX: -269,transformOrigin:"100% 100%"});
	TweenMax.to(".preloader-img1", 2, {rotationX: -630, repeat: -1, ease: Power0.easeNone, opacity:0.8})
	TweenMax.to(".preloader-img2", 2, {rotationX: -630, repeat: -1,delay: .67, ease: Power0.easeNone, opacity:0.8})
	TweenMax.to(".preloader-img3", 2, {rotationX: -630, repeat: -1,delay: 1.33, ease: Power0.easeNone , opacity:0.8})

	li_menu.mouseenter(function(){
		console.log(1)
		TweenMax.to($(this), 2	, {rotationX: 360, ease: Circ.easeInOut, y: 0,onComplete:someFunction($(this))})
	});

	function someFunction(reset){
		TweenMax.set( reset, {rotationX: 0})
	}
});