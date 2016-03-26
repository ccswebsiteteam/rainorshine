$.fn.parallax = function ( resistance, mouse ) 
{
	$el = $( this );
	TweenMax.to( $el, 0.2, 
	{
		x : -(( mouse.clientX - (window.innerWidth/2) ) / resistance ),
		y : -(( mouse.clientY - (window.innerHeight/2) ) / resistance ),
		z : 0.001 ,
		rotation:0.001
	});

};