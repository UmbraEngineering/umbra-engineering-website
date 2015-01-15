
var Router                = require('cloak.router');
var Promise               = require('cloak.core/utils/promise');
var HomeController        = require('views/home');
var ServicesController    = require('views/services');
var OpenSourceController  = require('views/open-source');
var ContactController     = require('views/contact');
var NotFoundController    = require('views/notfound');

var MainRouter = module.exports = Router.extend({

	routes: {
		'/':                'home',
		'/open-source':     'openSource',
		'/services':        'services',
		'/contact':         'contact'
	},

	initialize: function() {
		this.scope = document.getElementById('main');
		this.on('notfound', this.notfound.bind(this));
	},

// -------------------------------------------------------------

	// 
	// Home page
	// 
	home: function() {
		document.title = 'Umbra Engineering';
		this.drawPage(HomeController);
	},

// -------------------------------------------------------------
	
	// 
	// Open source page
	// 
	openSource: function() {
		document.title = 'Open Source / Umbra Engineering';
		this.drawPage(OpenSourceController);
	},

// -------------------------------------------------------------

	// 
	// Services page
	// 
	services: function() {
		document.title = 'Services / Umbra Engineering';
		this.drawPage(ServicesController);
	},

// -------------------------------------------------------------
	
	// 
	// Contact page
	// 
	contact: function() {
		document.title = 'Contact / Umbra Engineering';
		this.drawPage(ContactController);
	},

// -------------------------------------------------------------
	
	// 
	// 404 Handler
	// 
	notfound: function() {
		document.title = 'Not Found / Umbra Engineering';
		this.drawPage(NotFoundController);
	},

// -------------------------------------------------------------
	
	// 
	// Given a page controller, changes the view to the given page
	// 
	// @param {Ctrl} a page controller class to render
	// @return promise
	// 
	drawPage: function(Ctrl) {
		var self = this;

		if (this.current) {
			return this.current.undraw().then(render);
		} else {
			return wait(500).then(render);
		}

		function render() {
			self.current = new Ctrl(self.scope);
			return self.current.run();
		}
	}

});

// -------------------------------------------------------------

// 
// A simple wait function; Returns a promise that resolves after the given number of milliseconds
// 
// @param {ms} number of milliseconds to wait
// @return promise
// 
function wait(ms) {
	return new Promise(function(resolve, reject) {
		setTimeout(resolve, ms);
	});
}
