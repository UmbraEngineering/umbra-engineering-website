
var fs      = require('fs');
var hbs     = require('handlebars');
var mailer  = require('nodemailer');

var views = { };

var transport = mailer.createTransport('SMTP', {
	service: 'Gmail',
	auth: {
		user: 'mailing@umbraengineering.com',
		pass: process.env.MAIL_PASSWORD
	}
});

exports.send = function(opts, callback) {
	var message = {
		to: opts.to,
		from: opts.from,
		subject: opts.subject
	};
	exports.render(opts.template, opts.data, function(err, body) {
		if (err) {
			return callback(err);
		}
		message.html = body;
		transport.sendMail(message, callback);
	});
};

exports.render = function(view, data, callback) {
	if (! views.hasOwnProperty(view)) {
		fs.readFile(__dirname + '/templates/' + view + '.hbs', 'utf8', function(err, content) {
			if (err) {
				return callback(err);
			}
			views[view] = hbs.compile(content);
			render();
		});
	} else {
		render();
	}
	function render() {
		try {
			var result = views[view](data);
		} catch (e) {
			return callback(e);
		}
		callback(null, result);
	}
};

