module.exports = function() {
	
	var hbs         = require('hbs');
	var dateformat  = require('dateformat');
	
	hbs.registerHelper('now', function(format) {
		return dateformat(new Date(), format);
	});

};
