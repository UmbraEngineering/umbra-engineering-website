
$(function() {

	var navigation = new NavMenu('#navigation');

// --------------------------------------------------------

	var $slider = $('.slider');
	if ($slider.length) {
		var slider = window.slider = new Slider({
			elem: $slider,
			dimsRatio: 584 / 2000,  // height/width
			transitionDuration: 2000,
			autorun: true,
			autorunDuration: 5000,
			pauseOnHover: false,
			manualControls: true,
			slides: [
				
				// What do you need to know about Healthcare Reform?
				{	images: {1000: '/images/slider/new/1-lo.png', 2000: '/images/slider/new/1-hi.png'},
					beforeDraw: slideInBefore('left'),
					afterDraw: slideInAfter('left')
				},
				
				// Is the insurance exchange right for you?
				{	images: {1000: '/images/slider/new/2-lo.png', 2000: '/images/slider/new/2-hi.png'},
					beforeDraw: slideInBefore('right'),
					afterDraw: slideInAfter('right')
				},
				
				// Are you paying too much for group benefits?
				{	images: {1000: '/images/slider/new/3-lo.png', 2000: '/images/slider/new/3-hi.png'},
					beforeDraw: slideInBefore('left'),
					afterDraw: slideInAfter('left')
				},
				
				// Are you or your employees covered while traveling? Travel insurance may be right for you
				{	images: {1000: '/images/slider/new/4-lo.png', 2000: '/images/slider/new/4-hi.png'},
					beforeDraw: slideInBefore('right'),
					afterDraw: slideInAfter('right')
				},
				
				// Are your HR tools ready for the 21st Century?
				{	images: {1000: '/images/slider/new/5-lo.png', 2000: '/images/slider/new/5-hi.png'},
					beforeDraw: slideInBefore('left'),
					afterDraw: slideInAfter('left')
				},
				
				// Are you taking advantage of the IRS tax savings plans?
				{	images: {1000: '/images/slider/new/6-lo.png', 2000: '/images/slider/new/6-hi.png'},
					beforeDraw: slideInBefore('right'),
					afterDraw: slideInAfter('right')
				}
			]
		});
	}

	// 
	// Slider content animations
	// 

	function slideInBefore(dir) {
		return function(slide, currentSlide) {
			slide.$content = slide.$content || slide.$elem.find('.slide-content');
			slide.$content.css(dir, '-' + slide.$content.outerWidth() + 'px');
		};
	}

	function slideInAfter(dir) {
		return function(slide, currentSlide) {
			var obj = { }; obj[dir] = '0px';
			setTimeout(function() { slide.$content.animate(obj, 500); }, 500);
		};
	}
	
});
