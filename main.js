
var http    = require('http');
var static  = require('node-static');
var mailer  = require('./mailer');

var file = new static.Server('./public', {
	cache: 3600,
	indexFile: 'index.html'
});

http.createServer(handler)
	.listen(process.env.PORT, '0.0.0.0', function() {
		console.log('Static file server listening on port ' + process.env.PORT + '...');
	});

function handler(req, res) {
	var data = '';
	req.addListener('data', function(chunk) {
		data += chunk;
	});

	req.addListener('end', function() {
		data = data && JSON.parse(data);

		if (req.url === '/contact/submit') {
			var errors = validateContact(data);
			if (errors.length) {
				return sendErrors(res, errors);
			}

			var mail = {
				template: 'contact',
				to: 'info@umbraengineering.com',
				from: data.name + ' <' + data.email + '>',
				subject: 'Contact Form Message',
				data: data
			};

			return mailer.send(mail, function(err) {
				if (err) {
					return sendErrors(res, err);
				}

				res.writeHead(200, {'content-type': 'application/json'});
				res.end();
			});
		}

		file.serve(req, res, function(err) {
			if (err && err.status === 404) {
				file.serveFile('/index.html', 200, { }, req, res);
			}
		});
	}).resume();
}

function validateContact(data) {
	var errors = [ ];

	if (! data.name) {
		errors.push('You must enter a name');
	}

	if (! data.email || data.email.indexOf('@') < 1) {
		errors.push('You must enter a valid email address');
	}

	if (! data.message) {
		errors.push('You haven\'t entered a message yet');
	}

	return errors;
}

function sendErrors(res, errors) {
	res.writeHead(500, {
		'content-type': 'application/json'
	});

	errors = (Array.isArray(errors) ? errors : [ errors ]).map(function(err) {
		if (err.stack) {
			return err.stack;
		}
		if (err.message) {
			return err.message;
		}
		return err;
	});
	
	res.write(JSON.stringify({
		errors: errors
	}));
	
	res.end();
}
