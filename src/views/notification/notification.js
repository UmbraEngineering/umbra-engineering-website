
var View = require('cloak.view');

var NotificationView = module.exports = View.extend({

	template: 'views/notification/notification.hbs',
	className: 'notification',

	events: {
		'click a.close':    'close'
	},

	initialize: function(message) {
		this.message = message;
	},

	draw: function() {
		this.elem.innerHTML = this.render({
			message: this.message
		});

		this.bindEvents();
	},

	show: function() {
		this.elem.classList.add('shown');
	},

	close: function() {
		this.elem.classList.remove('shown');
		setTimeout(this.remove.bind(this), 800);
	}

});
