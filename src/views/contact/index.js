
var xhr             = require('cloak.xhr');
var PageController  = require('page-controller');

var ContactController = module.exports = PageController.extend({

	View: require('./contact'),

	draw: function() {
		var self = this;

		return this._super()
			.then(function() {
				self.view.on('submit', self.submit.bind(self));
			});
	},

	submit: function(data) {
		var self = this;

		return xhr
			.post('/contact/submit')
			.send(data)
			.then(function(res) {
				switch (res.status) {
					case 200:
					case 202:
						self.submitSuccess(res);
					break;
					case 400:
						self.submitInvalid(res);
					break;
					default:
						self.submitError(res);
					break;
				}
			});
	},

	submitSuccess: function(res) {
		this.view.showSuccess();
	},

	submitInvalid: function(res) {
		var view = this.view;
		var errors = res.json && res.json.errors;

		this.reenable();

		errors.forEach(function(err) {
			view.showError(err);
		});
	},

	submitError: function(res) {
		this.reenable();
		this.view.showError('An unexpected error has occurred on our server; Please try your request again later.');
	},

	reenable: function() {
		this.view.enable();
		this.view.hideLoader();
		this.view.clearErrors();
	}

});
