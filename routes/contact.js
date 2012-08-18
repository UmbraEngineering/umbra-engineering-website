
var consts      = require('consts');
var app         = require(consts.LIB_PATH + '/app');
var mailer      = require(consts.BASE_PATH + '/helpers/mailer');
var validation  = require(consts.BASE_PATH + '/helpers/validation');

var socialIcons = [
	{
		alt: 'Facebook',
		img: 'facebook.png',
		url: 'http://facebook.com/UmbraEngineering',
		text: 'Connect with us on Facebook'
	}, {
		alt: 'Twitter',
		img: 'twitter.png',
		url: 'http://twitter.com/UmbraEng',
		text: 'Follow us on Twitter'
	}, {
		alt: 'LinkedIn',
		img: 'linkedin.png',
		url: 'http://linkedin.com/company/umbra-engineering',
		text: 'Check us out on LinkedIn'
	}
];

// ------------------------------------------------------------------

var contactForm = new validation.Validator({
	name: validation.textField({
		required: true,
		maxLength: 50
	}),
	company: validation.textField({
		maxLength: 75
	}),
	email: validation.textField({
		type: 'email',
		required: true
	}),
	reason: validation.radioField({
		required: true,
		values: ['request-quote', 'request-info'],
		otherValue: 'other',
		otherValidation: validation.textField({
			required: true,
			minLength: 5,
			maxLength: 50
		})
	}),
	message: validation.textField({
		required: true,
		minLength: 25,
		maxLength: 5000
	})
});

// ------------------------------------------------------------------

var reasonSubjectTags = {
	'request-quote': 'Quote',
	'request-info': 'Info',
	'other': 'Other'
};

// ------------------------------------------------------------------

var validationErrorMessages = {
	name: {
		required: 'The "name" field is required',
		maxLength: 'The "name" field cannot be longer than 50 characters'
	},
	company: {
		maxLength: 'The "company" field cannot be longer than 75 characters'
	},
	email: {
		required: 'The "email" field is required',
		type: 'Please enter a valid email address'
	},
	reason: {
		required: 'The "reason" field is required',
		values: 'Please select one of the given options for the "reason" field',
		other: {
			required: 'The "reason" field is required',
			minLength: 'The "reason" field must be at least 5 characters long',
			maxLength: 'The "reason" field cannot be longer than 50 characters'
		}
	},
	message: {
		required: 'The "message" field is required',
		minLength: 'The "message" field must contain at least 25 characters',
		maxLength: 'The "message" field cannot contain more than 5000 characters'
	}
};

// ------------------------------------------------------------------

app.get('/contact', function(req, res) {
	res.renderPage('contact', {socialIcons: socialIcons, prefill: { }});
});

app.post('/contact', function(req, res) {
	var data = {
		name: req.body.name,
		company: req.body.company,
		email: req.body.email,
		reason: [req.body.reason, req.body['reason-other']],
		message: req.body.message
	};
	var failures = contactForm.validate(data);
	
	// Respond with validation errors
	if (failures._total) {
		delete failures._total;
		
		var errors = [ ];
		Object.keys(failures).forEach(function(field) {
			failures[field].forEach(function(failure) {
				failure = failure.split(':');
				if (failure.length === 2) {
					errors.push(validationErrorMessages[field][failure[0]][failure[1]]);
				} else {
					errors.push(validationErrorMessages[field][failure[0]]);
				}
			});
		});
		
		if (req.xhr) {
			res.json({errors: errors}, 400);
		} else {
			res.renderPage('contact', {
				socialIcons: socialIcons,
				errors: errors,
				prefill: req.body
			});
		}
	}
	
	// Respond with success message
	else {
		var message = {
			to: 'contact@umbraengineering.com',
			from: data.name + ' <' + data.email + '>',
			subject: 'UmbraEngineering.com Contact Form [' + reasonSubjectTags[data.reason[0]] + ']',
			template: 'contact-email',
			data: data
		};
		mailer.send(message, function(err) {
			var status = 200;
			var msg = 'Your message has been sent.';
			if (err) {
				console.log(err);
				status = 500;
				msg = 'There was an error sending your message.';
			}
			if (req.xhr) {
				res.json({
					status: status,
					message: msg
				}, status);
			} else {
				res.status(status).renderPage('contact', {
					socialIcons: socialIcons,
					messages: [msg]
				});
			}
		});
	}
});











