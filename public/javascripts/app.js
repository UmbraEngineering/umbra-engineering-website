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
		
		if (App.historySupported) {
			$(window).bind('popstate', _.bind(function(e) {
				if (e.originalEvent.state) {
					this.emit('popstate', e.originalEvent.state);
				} else {
					(new HistoryState(location.href)).replace();
				}
			}, this));
		}
		
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
		
		var port = location.port ? '(:' + location.port + ')?' : '';
		var isLocalHref = new RegExp('^' + location.protocol + '//' + location.host + port);
		
		this.$body      = $('body');
		this.$content   = $('#content');
		this.$messages  = $('#messages');
		
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
		
	// Handle history navigation
		
		this.on('popstate', function(state) {
			HistoryState.fromHistory(state).loadPage();
		});
		
	// Build the loading animation/spinner
		
		var animating = false;
		var contentReady = false;
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
					$loading.animate(animateVertical('show'), 500, function() {
						spinner._spinner.spin($loading[0]);
						spinner._shown = true;
						if (typeof callback === 'function') {
							callback();
						}
					});
				} else if (typeof callback === 'function') {
					callback();
				}
			},
			hide: function(callback) {
				if (spinner._shown) {
					spinner._spinner.stop();
					$loading.animate(animateVertical('hide'), 500, function() {
						spinner._shown = false;
						if (typeof callback === 'function') {
							callback();
						}
					});
				} else if (typeof callback === 'function') {
					callback();
				}
			}
		};
	
	// Handle page loading
		
		this.on('redirect', function(href) {
			animating = true;
			loadingHref = href;
			this.$content.animate(animateVertical('hide'), 500, _.bind(function() {
				animating = contentVisible = false;
				this.emit('redirect.afterAnimate');
				if (! contentReady) {
					spinner.show(_.bind(function() {
					
					}, this));
				}
			}, this));
		});
		
		var showContent = _.bind(function(content) {
			var $elem = this.$content;
			return _.bind(function() {
				$elem.html(content);
				this.parse(this.$content[0]);
				spinner.hide(function() {
					$elem.animate(animateVertical('show'), 500, function() {
						contentVisible = true;
						animating = contentReady = false;
					});
				});
			}, this);
		}, this);
		
		var onload = _.bind(function(content) {
			contentReady = true;
			if (animating) {
				this.once('redirect.afterAnimate', showContent(content));
			} else {
				showContent(content)();
			}
		}, this);
		
		this.on('load', function(xhr, status) {
			var json = JSON.parse(xhr.responseText);
			onload(json.content);
		});
		
		this.on('load.timeout', function() {
			// TODO Define actual timeout content
			var content = 'Timeout!';
			onload(content);
		});
		
	// Handle form submission
		
		this.on('formSubmit', function(form) {
			$('.spinner', form).spin('tiny', '#26b');
		});
		
		this.on('formSubmit.load', function(form, xhr, status) {
			$('.spinner', form).spin(false);
			var json = JSON.parse(xhr.responseText);
			if (json.message) {
				this.showMessage(json.message);
			}
			if (json.error) {
				this.showMessage('error', json.error);
			} else if (json.errors) {
				this.showMessage('error',
					'<ul class="circle">' +
						_.map(json.errors, function(err) {
							return '<li>' + err + '</li>';
						}).join('\n') +
					'</ul>'
				);
			} else {
				form.reset();
			}
		});
		
		this.on('formSubmit.timeout', function() {
			$('.spinner', form).spin(false);
			this.showMessage('warn', 'The form submit request timed out. Please try again.');
		});
		
	// Parse the DOM
		
		this.parse(this.$body[0]);

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
			(new HistoryState(href)).push();
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
	App.prototype.submitForm = function(form) {
		this.emit('formSubmit', form);
		$.ajax({
			type: form.method.toUpperCase(),
			url: form.getAttribute('action'),
			cache: false,
			data: $(form).serialize(),
			complete: _.bind(function(xhr, status) {
				if (xhr.statusText === 'timeout') {
					this.emit('formSubmit.timeout', form, xhr, status);
				} else {
					this._trackPageview();
					this.emit('formSubmit.load', form, xhr, status);
				}
			}, this)
		});
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
	
	// Creates an object of options for animating an element vertically
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
	
// ------------------------------------------------------------------
//  History state control
	
	function HistoryState(href, data) {
		this.href = href;
		this.data = data || { };
		this.data.href = this.href;
	}
	
	HistoryState.prototype.push = function() {
		if (this.href && this.data) {
			history.pushState(this.data, '', this.href);
		}
	};
	
	HistoryState.prototype.replace = function() {
		if (this.href && this.data) {
			history.replaceState(this.data, '', this.href);
		}
	};
	
	HistoryState.prototype.loadPage = function() {
		if (this.href && this.data) {
			app._loadPage(this.href);
		}
	};
	
	HistoryState.fromHistory = function(state) {
		state = state || { };
		state = new HistoryState(state.href, state);
		return state;
	};

}(window, document, location));

/* End of file app.js */
/* Location: ./javascripts/app.js */
