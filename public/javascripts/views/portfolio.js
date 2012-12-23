
Class('PortfolioPageView').Extends('PageView', {

	template: app.templates.portfolio,

	initialize: function() {
		this._super.initialize.call(this);
	},

	draw: function() {
		this.draw.parent(this);
	}

});
