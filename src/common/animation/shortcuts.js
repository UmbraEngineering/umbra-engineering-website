
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
