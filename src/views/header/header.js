
var View = require('cloak.view');

var HeaderView = module.exports = View.extend({

	template: 'views/header/header.hbs',

	events: {
		// 
	},

	draw: function() {
		this.elem.innerHTML = this.render();
		this.bindEvents();
	}

});
