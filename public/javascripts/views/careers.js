
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
			/*{
				slug: 'ui-developer',
				name: 'UI Developer',
				description: 'User Interface Developer'
			}*/
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
