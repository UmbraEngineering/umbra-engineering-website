
Class('LayoutView').Extends('View').Uses(['InternalLinks'], {

	initialize: function() {
		this.$elem = $('#wrapper');

		this.initializeInternalLinks();
		this.bindEvents();
	}

});
