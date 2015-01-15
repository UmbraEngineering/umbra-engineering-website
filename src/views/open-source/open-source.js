
var View = require('cloak.view');

var OpenSourceView = module.exports = View.extend({

	template: 'views/open-source/open-source.hbs',
	className: 'open-source content-area',

	events: {
		// 
	},

	draw: function() {
		this.elem.innerHTML = this.render();
		this.bindEvents();
	}

});
