
var animate     = require('velocity-animate');
var Promise     = require('cloak.core/utils/promise');
var shortcuts   = require('./shortcuts');

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

Object.keys(shortcuts).forEach(function(key) {
	exports[key] = shortcuts[key];
});
