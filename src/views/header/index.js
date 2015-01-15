
var HeaderView  = require('./header');
var Controller  = require('cloak.controller');

var HeaderController = module.exports = Controller.extend({

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
		var view = this.view = new HeaderView();

		this.scope.appendChild(view.elem);
		view.draw();
	}

});
