
	TweenLite.set(".preload-container", {perspective:200, transformStyle:"preserve-3d"});
	TweenLite.set(".preload-rotate", {rotationX: -269,transformOrigin:"100% 100%"});
	TweenMax.to(".preloader-img1", 2, {rotationX: -630, repeat: -1, ease: Power0.easeNone, opacity:0.8})
	TweenMax.to(".preloader-img2", 2, {rotationX: -630, repeat: -1,delay: .67, ease: Power0.easeNone, opacity:0.8})
	TweenMax.to(".preloader-img3", 2, {rotationX: -630, repeat: -1,delay: 1.33, ease: Power0.easeNone , opacity:0.8})