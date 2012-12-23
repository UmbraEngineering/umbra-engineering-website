module.exports = function(app, conf) {
	
	app.configure('development', function() {
		conf.port     = 3000;
		conf.baseUrl  = 'http://umbra.local:' + conf.port;
	});

	app.configure('production', function() {
		conf.port     = process.env.PORT;
		conf.baseUrl  = 'http://umbraengineering.com';
	});
	
};
