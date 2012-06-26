
var Hook  = require('hook.io').Hook;
var util  = require('util');

var WebHook = exports.WebHook = function(options) {
	Hook.call(this, options);
	
	// Load configuration
	this.config.use('file', { file: './config.json' });
	this.conf = this.config.get('web');
	
	// Bind event listeners
	this.on('hook::ready', function() {
		
		/**
		 * Event listener
		 *
		 * @param   function  callback
		 */
		this.on('*::foo', function(callback) {
			
		}.bind(this));
		
	}.bind(this));
};

util.inherits(WebHook, Hook);

/**
 * Do something
 * 
 * @access  public
 * @return  void
 */
WebHook.prototype.doSomething = function() {
	
};

/* End of file web.js */
/* Location: ./web/lib/web.js */
