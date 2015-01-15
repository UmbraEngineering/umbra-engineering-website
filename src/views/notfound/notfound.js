
var View = require('cloak.view');

var NotFoundView = module.exports = View.extend({

	template: 'views/notfound/notfound.hbs',
	className: 'notfound content-area',

	events: {
		// 
	},

	draw: function() {
		this.elem.innerHTML = this.render();
		this.bindEvents();
	}

});
