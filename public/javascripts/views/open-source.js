
Class('OpenSourcePageView').Extends('PageView', {

	template: app.templates['open-source'],

	initialize: function() {
		this._super.initialize.call(this);
	},

	draw: function() {
		this.draw.parent(this);
	}

});
