module.exports = function(app, conf) {
	
	var useragent = require('useragent');
	
	// Parser middleware
	conf.parser = function() {
		return function(req, res, next) {
			req.ua = useragent.parse(req.headers['user-agent']);
			next();
		};
	};
	
	// Add the isMobile method
	useragent.Agent.prototype._isMobile = null;
	useragent.Agent.prototype.isMobile = function() {
		if (this._isMobile === null) {
			try {
				this._isMobile = (
					this.family === 'Android' ||
					(this.os && this.os.family === 'iOS') ||
					this.family === 'IEMobile' ||
					this.family === 'Opera Mini' ||
					this.family === 'Opera Mobile' ||
					this.family === 'Blackberry'
				);
			} catch (e) {
				this._isMobile = false;
			}
		}
		return this._isMobile;
	};
	
};
