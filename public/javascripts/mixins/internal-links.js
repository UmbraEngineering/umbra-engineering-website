
Class.mixin('InternalLinks', {

	initializeInternalLinks: function() {
		this.events = _.extend({ }, this.events || { }, {
			'click a:not([rel~=external]):not([rel~=no-parse])': 'handleInternalLink'
		});
	},

// -------------------------------------------------------------
	
	handleInternalLink: function(evt) {
		if (! History.enabled) {return;}
		
		// Allow ctrl+click/cmd+click to go through normally
		if (evt.metaKey || evt.ctrlKey) {return;}

		evt.preventDefault();

		History.pushState(null, null, $(evt.target).attr('href'));
	}

});
