/**
 * App Controller
 */

(function(window, document, location, undefined) {
	
	// Constructor (Use the App::init method for init stuff)
	var App = window.App = function() {
		_.bindAll(this);
		
		// Initialize EventEmitter2
		EventEmitter2.call(this, {
			wildcard: false,
			delimiter: '.',
			maxListeners: 10
		});
		
		// Make sure the DOM is ready before running init
		$(document).ready(this.init);
	};
	
	// Check if the client has HTML5 History API support
	App.historySupported =!! (history && history.pushState);
	
	// Inherit EventEmitter2 prototype
	App.prototype = new EventEmitter2();
	
// ------------------------------------------------------------------
	
	// Initialize the app
	App.prototype.init = function() {
		
		this.$body = $('body');
		this.$content = $('#content');
		this.$messages = $('#messages');
		
		this.$content[0].appendChild(
			$('<a href="#">Spinner</a>').click(function(e) {
				e.preventDefault();
				app.emit('redirect', 'foo');
			})[0]
		);
		
		var port = location.port ? '(:' + location.port + ')?' : '';
		var isLocalHref = new RegExp('^' + location.protocol + '//' + location.host + port);
		
	// First thing, we define the error handler
		
		this.on('error', this._onError);
	
	// Handle placeholders
		
		this.on('parse', function() {
			window.fixPlaceholder();
		});
		
	// Handle anchor parsing
		
		this.on('parse.anchor', function(anchor) {
			var $a = $(anchor);
			var href = $a.attr('href');
			
			// Remove ugly link outlines when clicked
			$a.bind('mouseup', removeAnchorOutlineOthers);
			$a.bind('mouseout', removeAnchorOutlineOthers);
			$a.bind('mousedown', removeAnchorOutlineMouseDown);
			
			// Make local links use dynamic navigation
			if (isLocalHref.test(anchor.href)) {
				$a.bind('click', _.bind(function(evt) {
					evt.preventDefault();
					this.redirect(href);
				}, this));
			}
			
			// We have closures in here, so make sure this can
			// be garbage collected when we're done with it
			$a = null;
		});
	
	// Handle form parsing
		
		this.on('parse.form', function(form) {
			// Make local forms submit dynamically
			if (isLocalHref.test(form.action)) {
				$(form).bind('submit', _.bind(function(evt) {
					evt.preventDefault();
					this.submitForm(form);
				}, this));
			}
		});
		
	// Build the loading animation/spinner
		
		var animating = false;
		var contentVisible = true;
		var loadingHref = null;
		var $loading = $('#loading');
		
		var spinner = this.spinner = {
			_shown: false,
			_spinner: new Spinner({
				lines: 10,
				length: 10,
				width: 5,
				radius: 8,
				color: '#666',
				speed: 1,
				trail: 60,
				shadow: '0px 1px 1px #fff'
			}),
			show: function(callback) {
				if (! spinner._shown) {
					$loading.animate({ opacity: 'show', height: 'show' }, 500, function() {
						spinner._spinner.spin($loading[0]);
						spinner._shown = true;
						if (typeof callback === 'function') {
							callback();
						}
					});
				}
			},
			hide: function() {
				if (spinner._shown) {
					spinner._spinner.stop();
					$loading.animate({ opacity: 'hide', height: 'hide' }, 500, function() {
						spinner._shown = false;
						if (typeof callback === 'function') {
							callback();
						}
					});
				}
			}
		};
		
//		spinner.show();
		
		this.on('redirect', function(href) {
			animating = true;
			loadingHref = href;
			this.$content.animate({ opacity: 'hide', height: 'hide' }, 500, _.bind(function() {
				animating = contentVisible = false;
				spinner.show();
				this.emit('redirect.afterAnimate');
			}, this));
		});
		
		this.on('load', function(callback) {
			var onready = _.bind(function() {
				
			}, this);
			
			// Make sure we are not still animating
			if (animating) {
				this.once('redirect.afterAnimate', onready);
			} else {onready();}
		});
		
		this.on('load.timeout', function() {
			var onready = _.bind(function() {
				
			}, this);
			
			// Make sure we are not still animating
			if (animating) {
				this.once('redirect.afterAnimate', onready);
			} else {onready();}
		});

	// ------------------------------------------------------------------
	// ------------------------------------------------------------------
		setTimeout(_.bind(function() {
			this.showMessage('warn', 'This site is still under construction. Please come back later.');
		}, this), 2000);
	// ------------------------------------------------------------------
	// ------------------------------------------------------------------
		
	};
	
// ------------------------------------------------------------------
	
	// The universal error handler
	App.prototype._onError = function(msg) {
		
	};
	
	// Redirect the app
	App.prototype.redirect = function(href) {
		this.emit('redirect', href);
		if (App.historySupported) {
			this._loadPage(href);
		} else {
			window.location.replace(href);
		}
	};
	
	// Load a page dynamically
	App.prototype._loadPage = function(href) {
		$.ajax({
			type: 'GET',
			url: href,
			cache: false,
			complete: _.bind(function(xhr, status) {
				if (xhr.statusText === 'timeout') {
					this.emit('load.timeout', xhr, status);
				} else {
					this._trackPageview();
					this.emit('load', xhr, status);
				}
			}, this)
		});
	};
	
	// If the site is using Google Analytics, this will track
	// a new page impression dynamically
	App.prototype._trackPageview = function() {
		if (window._gaq) {
			_gaq.push(['_trackPageview']);
		}
	};
	
	// Submit a form
	App.prototype.submitForm = function(evt) {
		
	};
	
	// This parser the DOM and makes the needed changes every "load"
	App.prototype.parse = function(node) {
		this.emit('parse', node);
		
		// Parse anchors
		$('a', node).each(_.bind(function(index, anchor) {
			this.emit('parse.anchor', anchor);
		}, this));
		
		// Parse forms
		$('form', node).each(_.bind(function(index, form) {
			this.emit('parse.form', form);
		}, this));
	};
	
	// This displays messages at the top of the page
	App.prototype.showMessage = function(style, msg, callback, onclose) {
		if (typeof msg === 'undefined') {
			msg = style;
			style = null;
		}
		var $msg = $('<div class="msg">' + msg + '</div>');
		if (style) {
			$msg.addClass(style);
		}
		var $close = $('<a class="close">&times;</a>');
		$close.click(function() {
			$msg.animate(animateVertical('hide'), 600, function() {
				$msg.remove();
				$close = $msg = null;
				if (typeof onclose === 'function') {
					onclose();
				}
			});
		});
		$msg.append($close);
		this.$messages.append($msg);
		$msg.hide();
		$msg.animate(animateVertical('show'), 600, callback);
	};
	
// ------------------------------------------------------------------

	// anchor.onmousedown
	function removeAnchorOutlineMouseDown() {
		this.blur();
		this.hideFocus = true;
		this.style.outline = 'none';
	}
	
	// anchor.onmouse[up|out]
	function removeAnchorOutlineOthers() {
		this.blur();
		this.hideFocus = false;
		this.style.outline = null;
	}
	
	function animateVertical(showHide) {
		return {
			height: showHide,
			opacity: showHide,
			paddingTop: showHide,
			paddingBottom: showHide,
			marginTop: showHide,
			marginBottom: showHide
		};
	}

}(window, document, location));

/* End of file app.js */
/* Location: ./javascripts/app.js */
