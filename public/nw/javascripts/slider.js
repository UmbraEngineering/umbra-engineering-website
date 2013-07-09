
// 
// Responsive Image and Text Slider
// 
// Author: James Brumond <james@jbrumond.me> (http://www.jbrumond.me)
// 

(function(window, document, $, _) {
	
	// 
	// Expose the Slider class
	// 
	window.Slider = Slider;

	// 
	// Slider constructor
	// 
	function Slider(opts) {
		// Set/store options
		this.$elem                   = (typeof opts.elem === 'string') ? $(opts.elem) : opts.elem;
		this.dimsRatio               = opts.dimsRatio;
		this.transitionDuration      = opts.transitionDuration || 2000;
		this.slides                  = opts.slides;
		this.currentSlide            = 0;
		this.autorunning             = false;
		this.autorunDuration         = opts.autorunDuration || 4000;
		this.shouldAutorun           = (opts.autorun == null) ? true : opts.autorun;
		this.autorunPaused           = false;
		this.autorunPauseCleanup     = false;
		this.autorunTimeout          = null;
		this.manualControls          = (opts.manualControls == null) ? true : opts.manualControls;
		this.$manualControls         = null;
		this.manualControlsDisabled  = false;
		this.pauseOnHover            = (opts.pauseOnHover == null) ? true : opts.pauseOnHover;

		// Mark the slider as JavaScript enabled
		this.$elem.removeClass('no-js');

		// Start up the slider..
		this.prepareSlides();
		if (this.manualControls) {
			this.drawManualControls();
		}
		if (this.shouldAutorun) {
			this.autorun();
		}

		// Register auto-run hover events
		if (this.pauseOnHover) {
			this.$elem.hover(
				_.bind(function() { this.pauseAutorun(true); }, this),
				_.bind(function() { this.pauseAutorun(false); }, this)
			);
		}

		// Register resize function
		$(window).resize(_.bind(this.onresize, this));
	}

	// 
	// Renders the slide elements
	// 
	Slider.prototype.prepareSlides = function() {
		// Find the slide elements
		var $slides = this.$elem.find('.slide');

		// Get the dimensions of the slider
		var dims = this.getSliderDimensions();

		// Set the slider height
		this.$elem.css('height', dims.height + 'px');

		// Iterate through the slides, drawing each one
		_.forEach(this.slides, function(slide, index) {
			// Determine which image to use
			var widths = _.keys(slide.images);
			var imageSrc = slide.images[closest(dims.width, widths)];

			// Store references to relevant elements
			slide.index   = index;
			slide.$elem   = $($slides[index]);
			slide.$image  = slide.$elem.children('img');

			// Size the slide element
			slide.$elem.css({
				width: dims.width + 'px',
				height: dims.height + 'px',
				zIndex: 100
			});

			// Size the slide image
			slide.$image.css({
				width: dims.width + 'px',
				height: dims.height + 'px'
			});

			// Show only the first slide to start
			if (index) {
				slide.$elem.remove();
			}
		});
	};

	// 
	// Draw the slider manual controls
	// 
	Slider.prototype.drawManualControls = function() {
		var self = this;
		var $controls = $('<ul class="slider-manual-controls" />');
		
		_.forEach(self.slides, function(slide) {
			var $button = $('<li />');
			$controls.append($button);
			$button.click(function() {
				if (self.manualControlsDisabled) {return;}
				self.pauseAutorun(true);
				self.transitionToSlide(slide.index, function() {
					self.resetAutorun();
				});
			});
		});

		self.$elem.append($controls);
		self.$manualControls = $controls.children();
		self.setCurrentManual(0);
	};

	// 
	// Sets the correct manual control button to the "current"
	// 
	Slider.prototype.setCurrentManual = function(slide) {
		if (! this.$manualControls) {return;}

		this.$manualControls.removeClass('current');
		this.$manualControls.get(slide).className += ' current';
	};

	// 
	// Transition to the given slide
	// 
	Slider.prototype.transitionToSlide = function(slide, callback) {
		// Set the current manual control
		this.setCurrentManual(slide);

		// Don't allow the buttons to be used during transition to avoid bugs
		this.manualControlsDisabled = true;

		// Draw the next slide under the current one (if there is a current one)
		slide = this.slides[slide];
		slide.$elem.css({
			opacity: 0,
			zIndex: 9
		});
		this.$elem.prepend(slide.$elem);

		// Run the before function if one was given
		var currentSlide = this.slides[this.currentSlide];
		if (slide.beforeDraw) {
			slide.beforeDraw.call(this, slide, currentSlide);
		}
		
		// Fade from one slide to the next
		var dur = this.transitionDuration;
		var shortDur = Math.round(dur * 3/4);
		slide.$elem.animate({opacity: 1}, shortDur);
		currentSlide.$elem.animate({opacity: 0}, dur, _.bind(function() {
			// Do some clean up..
			currentSlide.$elem.remove();
			slide.$elem.css('zIndex', 10);
			this.currentSlide = slide.index;

			// Run the after function if one was given
			if (slide.afterDraw) {
				slide.afterDraw.call(this, slide, currentSlide);
			}

			// Re-enable manual controls
			this.manualControlsDisabled = false;

			// Run the given callback if there is one
			if (callback) {
				callback();
			}
		}, this));
	};

	// 
	// Transition to the next slide
	// 
	Slider.prototype.transitionToNext = function(callback) {
		var total = this.slides.length;
		var next = this.currentSlide + 1;
		if (next >= total) {
			next = 0;
		}
		this.transitionToSlide(next, callback);
	};

	// 
	// Returns an {width, height} object with the dimensions of the slider
	// 
	Slider.prototype.getSliderDimensions = function() {
		var width = $(window).width();
		var height = width * this.dimsRatio;
		return {width: width, height: height};
	};

	// 
	// Handles resizing the slider when the window resizes
	// 
	Slider.prototype.onresize = function() {
		// Get the correct dimensions for the slider
		var dims = this.getSliderDimensions();

		// Set the slider dimensions
		this.$elem.css({
			width: dims.width + 'px',
			height: dims.height + 'px'
		});

		// Set the slide dimensions
		_.forEach(this.slides, function(slide) {
			slide.$elem.css({
				width: dims.width + 'px',
				height: dims.height + 'px'
			});
			slide.$image.css({
				width: dims.width + 'px',
				height: dims.height + 'px'
			});

			// Determine which image to use
			var widths = _.keys(slide.images);
			var imageSrc = slide.images[closest(dims.width, widths)];
			slide.$image.attr('src', imageSrc);
		});
	};

	// 
	// Starts the auto-run feature
	// 
	Slider.prototype.autorun = function() {
		var self = this;
		
		if (self.autorunPauseCleanup) {return self.autorunPauseCleanup = false;}
		if (self.autorunning || ! self.shouldAutorun) {return;}
		self.autorunning = true;
		
		self.autorunTimeout = setTimeout(function() {
			if (self.autorunPauseCleanup) {
				return self.autorunning = self.autorunPauseCleanup = false;
			}
			if (self.autorunPaused) {return;}
			self.transitionToNext(function() {
				self.autorunning = false;
				self.autorun();
			});
		}, self.autorunDuration);
	};

	// 
	// Pause/unpause the auto-run
	// 
	Slider.prototype.pauseAutorun = function(pause) {
		if (this.autorunPaused === pause) {return;}
		if (pause) {
			this.autorunPaused = this.autorunPauseCleanup = true;
		} else {
			this.autorunPaused = false;
			this.autorun();
		}
	};

	// 
	// Resets the autorun timer
	// 
	Slider.prototype.resetAutorun = function() {
		clearTimeout(this.autorunTimeout);
		this.autorunning = false;
		this.autorunPaused = false;
		this.autorun();
	};

// --------------------------------------------------------
	
	// 
	// Find the closest number of a set to another given number
	// 
	function closest(num, nums) {
		var closestNum = null;
		var lowestDelta = 100000;

		_.forEach(nums, function(current) {
			var delta = Math.abs(current - num);
			if (delta < lowestDelta) {
				lowestDelta = delta;
				closestNum = current;
			}
		});

		return closestNum;
	}

}(window, document, jQuery, _));