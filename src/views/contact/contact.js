
var View                    = require('cloak.view');
var Animation               = require('animation/view');
var NotificationController  = require('views/notification');

var ContactView = module.exports = View.extend(Animation, {

	template: 'views/contact/contact.hbs',
	className: 'contact content-area',

	successTemplate: 'views/contact/success.hbs',

	events: {
		'click button.submit':    'submit'
	},

	draw: function() {
		this.elem.innerHTML = this.render();

		this.errors = this.findOne('.errors');

		this.form = {
			name: this.findOne('input.name'),
			email: this.findOne('input.email'),
			company: this.findOne('input.company'),
			companyWebsite: this.findOne('input.company-website'),
			message: this.findOne('textarea.message')
		};

		this.submitButton = this.findOne('button.submit');
		this.loader = this.findOne('div.progress-wrapper');

		this.bindEvents();
	},

// -------------------------------------------------------------
	
	// 
	// Runs when the form submit button is clicked
	// 
	// @param {evt} the event
	// @return void
	// 
	submit: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		// Disable the form to avoid duplicate requests or other confusion
		this.disable();
		this.showLoader();

		// Remove any no-longer-valid error messages
		this.clearErrors();

		// Pull the data from the form
		var data = this.fetchData();

		// Validate the form data
		if (! this.validate(data)) {
			this.enable();
			this.hideLoader();
			return;
		}

		// Submit the form data to the server
		this.emit('submit', data);
	},

	// 
	// Used after a message is successfully sent; Shows the success message
	// 
	// @return void
	// 
	showSuccess: function() {
		this.fadeOut()
			.then(this.renderSuccess.bind(this))
			.then(this.fadeIn.bind(this));
	},

	// 
	// Render the success template
	// 
	// @return void
	// 
	renderSuccess: function() {
		this.elem.innerHTML = this.render('successTemplate', null);
	},

// -------------------------------------------------------------
	
	// 
	// Disables the form elements
	// 
	// @param {flag} should the form be disabled (true) or enabled (false)
	// @return void
	// 
	disable: function(flag) {
		var self = this;

		flag = (flag == null) ? true : flag;

		this.submitButton.disabled = flag;
		Object.keys(this.form).forEach(function(key) {
			self.form[key].disabled = flag;
		});
	},

	// 
	// Enables the form elements
	// 
	// @return void
	// 
	enable: function() {
		this.disable(false);
	},

	// 
	// Shows the loading spinner
	// 
	// @return void
	// 
	showLoader: function() {
		this.loader.innerHTML = '<div class="tiny progress"><div>Loading</div></div>';
	},

	// 
	// Hides the loading spinner
	// 
	// @return void
	// 
	hideLoader: function() {
		this.loader.innerHTML = '';
	},

// -------------------------------------------------------------
	
	// 
	// Pulls the data out of the form
	// 
	// @return object
	// 
	fetchData: function() {
		var form = this.form;

		return Object.keys(form).reduce(function(memo, key) {
			memo[key] = form[key].value;

			return memo;
		}, { });
	},

	// 
	// Validates the form and renders any validation errors
	// 
	// @param {data} the form data to validate
	// @return boolean
	// 
	validate: function(data) {
		var valid = true;

		if (! data.name) {
			this.showError('You must enter a name');
			valid = false;
		}

		if (! data.email || data.email.indexOf('@') < 1) {
			this.showError('You must enter a valid email address');
			valid = false;
		}

		if (! data.message) {
			this.showError('You haven\'t entered a message yet');
			valid = false;
		}

		return valid;
	},

// -------------------------------------------------------------

	// 
	// Displays a validation error
	// 
	// @param {error} the error message
	// @return void
	// 
	showError: function(error) {
		new NotificationController(this.errors, error);
	},

	// 
	// Removes any currently displayed error messages
	// 
	// @return void
	// 
	clearErrors: function() {
		this.errors.innerHTML = '';
	}

});
