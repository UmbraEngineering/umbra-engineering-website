
var animate     = require('velocity-animate');
var Controller  = require('cloak.controller');
var Promise     = require('cloak.core/utils/promise');

// 
// Base animation method, applies an animation to the scope element
// 
// @param {animation} the properties to animate
// @param {opts} optional; options object
// @return promise
// 
exports.animate = function(animation, opts) {
	var self = this;

	opts = opts || { };

	return new Promise(function(resolve, reject) {
		animate(self.scope, animation, opts.duration || 600, function() {
			resolve();
		});
	});
};

// 
// Apply a fade in animation
// 
// @param {opts} optional; options object
// @return promise
// 
exports.fadeIn = function(opts) {
	return this.animate({ opacity: 1 }, opts);
};

// 
// Apply a fade out animation
// 
// @param {opts} optional; options object
// @return promise
// 
exports.fadeOut = function(opts) {
	return this.animate({ opacity: 0 }, opts);
};
