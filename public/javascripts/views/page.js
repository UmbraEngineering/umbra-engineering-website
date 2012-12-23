
Class('PageView').Extends('View').Uses(['InternalLinks'], {

	initialize: function() {
		this.$root = $('#content');
		this.$elem = $('<div class="page" />');

		this.initializeInternalLinks();
	},

	events: { },
	
	draw: function(locals) {
		this.$elem.hide();
		this.$root.append(this.$elem);
		this.$elem.html(this.render(locals));

		this.bindEvents();
	},

// -------------------------------------------------------------

	show: function(callback) {
		this.$elem.animate(this.showHideProperties('show'), 500, callback);
	},

	hide: function(callback) {
		this.$elem.animate(this.showHideProperties('hide'), 500, callback);
	},

	showHideProperties: function(showHideToggle) {
		return {opacity: showHideToggle};
		/*return {
			height: showHideToggle,
			marginTop: showHideToggle,
			marginBottom: showHideToggle,
			paddingTop: showHideToggle,
			paddingBottom: showHideToggle,
			opacity: showHideToggle
		};*/
	}
	
});
