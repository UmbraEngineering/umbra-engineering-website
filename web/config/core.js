module.exports = function(app, conf) {
	
	app.configure('development', function() {
		conf.baseUrl = 'http://localhost:3000';
	});

	app.configure('production', function() {
		conf.baseUrl = 'http://umbraengineering.com';
	});
	
};
