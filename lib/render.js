
var res     = require('http').ServerResponse;
var json    = require('json-output');
var consts  = require('consts');
var merge   = require('merge');

var css = require(consts.BASE_PATH + '/grunt').stylesheets.map(
	function(file) {
		return file.replace(/^public/, '');
	}
);

res.prototype.renderPage = function(page, data) {
	data = buildData(data);
	if (this.req.xhr) {
		data.layout = false;
		this.render(page, data, function(err, content) {
			if (err) {
				return this.json(json.error(err), 500);
			}
			this.json({ content: content });
		}.bind(this));
	} else {
		this.render(page, data);
	}
};

function buildData(data) {
	return merge({
		_environment: consts.ENVIRONMENT,
		_development: (consts.ENVIRONMENT === 'development'),
		_production: (consts.ENVIRONMENT === 'production'),
		_stylesheets: css
	}, data);
}

/* End of file render.js */
/* Location: ./lib/render.js */
