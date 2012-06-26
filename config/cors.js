module.exports = function(app, conf) {

	conf.methods = ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'].join(', ');
	
	conf.headers = [ 'X-Requested-With', 'X-HTTP-Method-Override', 'Content-Type', 'Accept' ].join(', ');
	
//	app.configure('development', function() {
//		
//	});

//	app.configure('production', function() {
//		
//	});
	
};
