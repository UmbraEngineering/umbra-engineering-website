
$(function() {

	// Hostname security
	if (! (location.hostname === 'localhost' || location.hostname === 'nw.umbraengineering.com')) {
		var css = '* { display: none; }';
		var head = document.getElementsByTagName('head')[0];
		var style = document.createElement('style');

		style.type = 'text/css';
		
		if (style.styleSheet){
			style.styleSheet.cssText = css;
		} else {
			style.appendChild(document.createTextNode(css));
		}

		head.appendChild(style);
	}

// --------------------------------------------------------

	var navigation = new NavMenu('#navigation', '.sidenav');

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

// --------------------------------------------------------
	
	// 
	// Level out row columns
	// 

	function levelColumns() {
		$('.level-cols').each(function() {
			var $row = $(this);
			var $cols = $row.children();

			$cols.css('height', 'auto');
			$cols.css('height', $row.outerHeight() + 'px');
		});
	}

	// 
	// This is a bit ugly, but it gets the job done
	// 

	levelColumns();
	setTimeout(levelColumns, 100);
	setTimeout(levelColumns, 200);
	setTimeout(levelColumns, 500);
	setTimeout(levelColumns, 1000);
	$(window).resize(levelColumns);

// --------------------------------------------------------
	
	// 
	// Make external links and documents open in a new tab
	// 

	$('a[rel~=external], a[rel~=document]').attr('target', '_blank');
	
});
