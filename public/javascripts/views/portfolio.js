
Class('PortfolioPageView').Extends('PageView', {

	title: 'Portfolio',
	template: app.templates.portfolio,

	initialize: function() {
		this._super.initialize.call(this);
	},

	draw: function() {
		this.draw.parent(this);
	}

});
