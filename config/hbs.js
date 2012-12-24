module.exports = function() {
	
	var hbs         = require('hbs');
	var dateformat  = require('dateformat');
	
	hbs.registerHelper('now', function(format) {
		return dateformat(new Date(), format);
	});

	hbs.registerHelper('json', function(value) {
		return new hbs.handlebars.SafeString(JSON.stringify(value));
	});

};
