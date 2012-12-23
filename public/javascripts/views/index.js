
Class('IndexPageView').Extends('PageView', {

	template: app.templates.index,

	initialize: function() {
		this._super.initialize.call(this);
	},

	draw: function() {
		this.draw.parent(this);
	}

});
