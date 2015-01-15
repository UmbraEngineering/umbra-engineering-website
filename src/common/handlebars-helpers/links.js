
var handlebars  = require('cloak.view.handlebars').runtime.handlebars;

handlebars.registerHelper('a', function(type) {
	return types[type].apply(this, Array.prototype.slice.call(arguments, 1));
});

var types = {
	github: function(path, opts) {
		return anchor('https://github.com/' + path, opts.fn(this), { rel: 'external' });
	}
}

// -------------------------------------------------------------

// 
// Builds the HTML stirng for an anchor
// 
// @param {href} the link's href
// @param {text} the display text
// @param {attrs} optional; additional attributes for the anchor
// @return string
// 
function anchor(href, text, attrs) {
	var str = '<a href="' + href + '"';
	Object.keys(attrs || { }).forEach(function(key) {
		str += ' ' + key + '="' + attrs[key] + '"';
	});
	return str + '>' + text + '</a>';
}
