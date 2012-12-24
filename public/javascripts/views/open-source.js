
Class('OpenSourcePageView').Extends('PageView', {

	title: 'Open Source',
	template: app.templates['open-source'],

	initialize: function() {
		this._super.initialize.call(this);
	},

	draw: function() {
		this.draw.parent(this);
	}

});
