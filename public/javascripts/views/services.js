
Class('ServicesPageView').Extends('PageView', {

	title: 'Services',
	template: app.templates.services,

	initialize: function() {
		this._super.initialize.call(this);
	},

	draw: function() {
		this.draw.parent(this);
	}

});
