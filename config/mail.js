
module.exports = function(app, conf) {
	
	conf.transport = {
		service: 'Gmail',
		auth: {
			user: 'mailing@umbraengineering.com',
			pass: process.env.MAIL_PASSWORD
		}
	};
	
//	conf.from = 'Mailing <mailing@umbraengineering.com>';
	
//	app.configure('development', function() {
//		
//	});

//	app.configure('production', function() {
//		
//	});
	
};

