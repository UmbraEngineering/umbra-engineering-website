
Class('ContactPageView').Extends('PageView', {

	template: app.templates.contact,

	initialize: function() {
		this._super.initialize.call(this);
	},

	draw: function() {
		this.draw.parent(this, {
			socialIcons: [
				{
					alt: 'Facebook',
					img: 'facebook.png',
					url: 'http://facebook.com/UmbraEngineering',
					text: 'Connect with us on Facebook'
				}, {
					alt: 'Twitter',
					img: 'twitter.png',
					url: 'http://twitter.com/UmbraEng',
					text: 'Follow us on Twitter'
				}, {
					alt: 'LinkedIn',
					img: 'linkedin.png',
					url: 'http://linkedin.com/company/umbra-engineering',
					text: 'Check us out on LinkedIn'
				}
			]
		});
	}

});
