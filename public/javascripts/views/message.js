
Class('MessageView').Extends('View', {

	message: null,
	duration: null,
	timer: null,

	template: app.templates.message,

	initialize: function(opts) {
		if (typeof opts === 'string') {
			opts = {message: opts};
		}
		_.extend(this, opts);

		this.$root = $('#messages');
		this.$elem = $('<div class="message" />');

		this.once('closed', _.bind(this.destroy, this));
	},

	events: {
		'click a.close':  'close'
	},

	draw: function() {
		this.$elem.hide();

		this.$root.append(this.$elem);
		this.$elem.html(this.render({
			message: this.message
		}));

		if (this.duration) {
			this.timer = setTimeout(_.bind(this.close, this), this.duration);
		}

		this.bindEvents();

		this.show(this.emits('opened'));
	},

	close: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		this.emit('close');

		if (this.timer) {
			clearTimeout(this.timer);
		}

		this.hide(this.emits('closed'));
	},

// -------------------------------------------------------------

	show: function(callback) {
		this.$elem.animate(this.showHideProperties('show'), 350, callback);
	},

	hide: function(callback) {
		this.$elem.animate(this.showHideProperties('hide'), 350, callback);
	},

	showHideProperties: function(showHideToggle) {
		return {
			height: showHideToggle,
			marginTop: showHideToggle,
			marginBottom: showHideToggle,
			paddingTop: showHideToggle,
			paddingBottom: showHideToggle,
			opacity: showHideToggle
		};
	}

});

// 
// Override the default {create} method to draw automatically
// 
app.MessageView.create = function(message) {
	message = new app.MessageView(message);
	message.draw();
	return message;
};
