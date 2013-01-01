
Class('IndexPageView').Extends('PageView', {

	template: app.templates.index,

	initialize: function() {
		this._super.initialize.call(this);
	},

	draw: function() {
		this.draw.parent(this, {
			services: this.services()
		});
	},

	services: function() {
		return [
			{
				title: 'HTML/CSS',
				content: 'We have experience with the latest HTML5 and CSS3 features as well as with responsive ' +
					'design, so your application will be fast and good looking where ever you put it.'
			}, {
				title: 'JavaScript',
				content: 'JavaScript is our specialty. We have experience not only with raw JS, but also with ' +
					'many of the common libraries and frameworks like jQuery, Underscore, and Backbone.'
			}, {
				title: 'Node',
				content: 'We use the Node.js platform to build application back-ends and API servers. We have also ' +
					'built <a href="/open-source">several stand-alone Node modules</a> for performing various tasks.'
			}
		];
	}

});
