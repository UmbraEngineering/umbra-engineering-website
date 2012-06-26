
var Hook = require('hook.io').Hook;
var util = require('util');

exports.hook = null;

var Web = exports.Web = function(options) {
	Hook.call(this, options);
	var self = exports.hook = this;
	
	self.on('hook::ready', function() {
		require('./app');
	});
};

// Web inherits from Hook
util.inherits(Web, Hook);

