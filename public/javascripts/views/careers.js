
Class('CareersPageView').Extends('PageView', {

	title: 'Careers',
	template: app.templates.careers,
	openingTemplate: app.templates['careers-opening'],

	opening: null,

	initialize: function(href, params) {
		this._super.initialize.call(this);

		this.openings = this.openings();

		if (params && params.opening) {
			this.opening = params.opening;
		}
	},

	draw: function() {
		this.draw.parent(this, {
			openings: this.openings
		});

		this.$list = this.$('.careers-openings');
		this.$current = this.$('.careers-current');

		if (this.opening) {
			this.showOpening(this.opening);
		}
	},

// -------------------------------------------------------------

	openings: function() {
		return [
			{
				slug: 'front-end-engineer',
				name: 'Front End Web Engineer (Contractor)',
				description: 'Umbra Engineering is looking for Web Engineers with an understanding of modern web programming ' +
					'challenges and browser development of entry to mid skill level in the local Portland area. Umbra Engineering ' +
					'offers a chance for Web Engineers to show off their skills, as well as  provides skill training if necessary. ' +
					'Web Engineers will be free to work from any location and create their own hours in a part-time/full-time manor.',
				requirements: [
					'2 years minimum experience',
					'Deep understanding of HTML5 and CSS3',
					'Awesomely epic JavaScript skills (experience with libraries like jQuery and Underscore a plus)',
					'Understanding of modern web programing challenges and cross-browser development',
					'Experience working with AJAX/XHR and asynchronous programing',
					'Understanding of MVC concepts and RESTful design a big plus',
					'Self-motivated and self-managing'
				],
				offered: [
					'Work where you want on your own hours',
					'Training offered for additional skills as needed',
					'Opportunity to work with bleeding edge web technologies in a quickly growing startup',
					'Part-time and full-time work offered'
				]
			}
		];
	},

	showOpening: function(slug) {
		var self = this;

		var opening = _.find(self.openings, function(opening) {
			return opening.slug === slug;
		});

		self.$current.animate(self.smooth('hide'), 500, function() {
			self.$current.html(self.render(opening, 'openingTemplate'));
			self.$current.animate(self.smooth('show'), 500, function() {
				// ...
			});
		});
	},

	hideOpening: function() {
		var self = this;

		self.$current.animate(self.smooth('hide'), 500, function() {
			self.$current.html('');
		});
	},

	load: function(href, params) {
		if (params && params.opening) {
			this.opening = params.opening;
			this.showOpening(this.opening);
		} else {
			this.opening = null;
			this.hideOpening();
		}
	},

// -------------------------------------------------------------

	smooth: function(showHide) {
		return {
			height: showHide,
			marginTop: showHide,
			marginBottom: showHide,
			paddingTop: showHide,
			paddingBottom: showHide,
			opacity: showHide
		};
	}

});
