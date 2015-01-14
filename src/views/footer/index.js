
var FooterView  = require('./footer');
var Controller  = require('cloak.controller');

var FooterController = module.exports = Controller.extend({

	initialize: function(scope) {
		this.scope = scope;
		this.run();
	},

	predraw: function() {
		// pass
	},

	load: function() {
		// pass
	},

	draw: function() {
		var view = this.view = new FooterView();

		this.scope.appendChild(view.elem);
		view.draw();
	}

});
