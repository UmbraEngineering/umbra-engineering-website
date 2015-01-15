
var moment      = require('moment');
var handlebars  = require('cloak.view.handlebars').runtime.handlebars;

handlebars.registerHelper('moment', function(date, format) {
	return timeTag(date, moment(date).format(format));
});

handlebars.registerHelper('now', function(format) {
	date = moment();
	return timeTag(date.utc().format(), date.format(format));
});

handlebars.registerHelper('fromNow', function(date) {
	return timeTag(date, moment(date).fromNow());
});

function timeTag(datetime, text) {
	return new handlebars.SafeString(
		'<time datetime="' + datetime + '" data-tooltip="' + moment(datetime).format('lll') + '">' + text + '</time>'
	);
}
