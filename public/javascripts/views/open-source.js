
Class('OpenSourcePageView').Extends('PageView', {

	title: 'Open Source',
	template: app.templates['open-source'],

	initialize: function() {
		this._super.initialize.call(this);
	},

	draw: function() {
		this.draw.parent(this);

		this.$('.github-repos').github({
			org: 'UmbraEngineering',
			width: '80%',
			show_repos: 10,
			repo_filter: function(repo) {
				return (! repo.fork);
			}
		});
	}

});
