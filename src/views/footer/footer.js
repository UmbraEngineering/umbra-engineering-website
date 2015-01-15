
var View = require('cloak.view');

var FooterView = module.exports = View.extend({

	template: 'views/footer/footer.hbs',

	events: {
		// 
	},

	draw: function() {
		this.elem.innerHTML = this.render();
		this.bindEvents();
	}

});
