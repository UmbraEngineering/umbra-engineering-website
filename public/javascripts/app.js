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
		
		var port = location.port ? '(:' + location.port + ')?' : '';
		var isLocalHref = new RegExp('^' + location.protocol + '//' + location.host + port);
		
	// First thing, we define the error handler
		
		this.on('error', this._onError);
		
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
			var $form = $(form);
			var action = $form.attr('action');
			
			
			
		});
		
	// Build the loading spinner
		
		this.on('redirect', function() {
			
		});
		
		this.on('load', function() {
			
		});
		
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

}(window, document, location));

/* End of file app.js */
/* Location: ./javascripts/app.js */
