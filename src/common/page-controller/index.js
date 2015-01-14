
var Controller  = require('cloak.controller');
var Animation   = require('controller-animation');

var PageController = module.exports = Controller.extend(Animation, {

	View: null,

	initialize: function(scope) {
		this.scope = scope;
	},

	predraw: function() {
		// Make sure the element is invisible before rendering
		return this.fadeOut({ duration: 1 });
	},

	load: function() {
		// pass
	},

	draw: function() {
		var view = this.view = new this.View();

		this.scope.appendChild(view.elem);
		view.draw();

		return this.fadeIn();
	},

	undraw: function() {
		return this.fadeOut()
			.then(this.teardown.bind(this));
	},

	teardown: function() {
		this.view.remove();
		this.view = null;
		this.scope = null;
	}

});
