
var View = require('cloak.view');

var HomeView = module.exports = View.extend({

	template: 'views/home/home.hbs',
	className: 'home',

	events: {
		// 
	},

	draw: function() {
		this.elem.innerHTML = this.render();
		this.bindEvents();
	}

});
