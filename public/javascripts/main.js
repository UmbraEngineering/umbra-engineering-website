
yepnope({
	load: [
		'/javascripts/jquery-1.7.2.min.js',
		'/javascripts/placeholder.js',
		'/javascripts/lodash.js',
		'/javascripts/eventemitter2.js',
		'/javascripts/spin.js',
		'/javascripts/spin.jquery.js',
		'/javascripts/app.js'
	],
	complete: function() {
		window.app = new App();
	}
});

