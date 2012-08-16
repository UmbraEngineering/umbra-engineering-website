
var consts      = require('consts');
var app         = require(consts.LIB_PATH + '/app');
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
		minLength: 2,
		maxLength: 50
	}),
	company: validation.textField({
		minLength: 2,
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
			minLength: 2,
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

app.get('/contact', function(req, res) {
	res.renderPage('contact', {socialIcons: socialIcons});
});

app.post('/contact', function(req, res) {
	var form = {
		name: req.body.name,
		company: req.body.company,
		email: req.body.email,
		reason: [req.body.reason, req.body['reason-other']],
		message: req.body.message
	};
	
	
	
	res.renderPage('contact', {socialIcons: socialIcons});
});

