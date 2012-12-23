
Class('ServicesPageView').Extends('PageView', {

	template: app.templates.services,

	initialize: function() {
		this._super.initialize.call(this);
	},

	draw: function() {
		this.draw.parent(this);
	}

});
