
Class('CareersPageView').Extends('PageView', {

	title: 'Careers',
	template: app.templates.careers,

	initialize: function() {
		this._super.initialize.call(this);
	},

	draw: function() {
		this.draw.parent(this);
	}

});
