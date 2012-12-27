
Class('ErrorPageView').Extends('PageView', {

	code: null,
	name: null,
	message: null,

	template: app.templates.error,

	initialize: function(errorInfo) {
		this._super.initialize.call(this);

		_.extend(this, errorInfo);
	},

	draw: function() {
		this.draw.parent(this, {
			code: this.code,
			name: this.name,
			message: this.message
		});
	}
	
});
