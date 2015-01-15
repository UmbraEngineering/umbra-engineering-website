
var NotificationView  = require('./notification');
var Controller        = require('cloak.controller');

var NotificationController = module.exports = Controller.extend({

	initialize: function(scope, message) {
		this.scope = scope;
		this.message = message;
		this.run();
	},

	predraw: function() {
		// pass
	},

	load: function() {
		// pass
	},

	draw: function() {
		var view = this.view = new NotificationView(this.message);

		this.scope.appendChild(view.elem);
		view.draw();

		setTimeout(view.show.bind(view), 100);

		view.on('remove', this.undraw.bind(this));
	},

	undraw: function() {
		// Teardown when unrendered
		for (var i in this) {
			this[i] = null;
		}
	}

});
