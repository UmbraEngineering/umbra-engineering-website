
var View = require('cloak.view');

var ServicesView = module.exports = View.extend({

	template: 'views/services/services.hbs',
	className: 'services',

	events: {
		// 
	},

	draw: function() {
		this.elem.innerHTML = this.render();
		this.bindEvents();
	}

});
