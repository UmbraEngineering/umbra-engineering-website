
var View = module.exports = function() {
	this.stylesheets = [
		'/fonts/latin-modern/stylesheet.css',
		'/stylesheets/globals.css',
		'/stylesheets/ui.css',
		'/stylesheets/forms.css',
		'/stylesheets/orbit.css',
		'/stylesheets/reveal.css',
		'/stylesheets/app.css',
		'/stylesheets/mobile.css'
	];
	this.javascripts = [
		'/javascripts/jquery-1.5.1.min.js',
		'/javascripts/jquery.reveal.js',
		'/javascripts/jquery.orbit-1.3.0.js',
		'/javascripts/forms.jquery.js',
		'/javascripts/jquery.customforms.js',
		'/javascripts/jquery.placeholder.min.js',
		'/javascripts/app.js'
	];
};

View.prototype.includeCSS = function(files) {
	files = Array.isArray(files) ? files : [files];
	this.stylesheets.push.apply(this.stylesheets, files);
};

View.prototype.includeJS = function(files) {
	files = Array.isArray(files) ? files : [files];
	this.javascripts.push.apply(this.javascripts, files);
};

View.prototype.data = function(data) {
	data = data || { };
	data._stylesheets = this.stylesheets;
	data._javascripts = this.javascripts;
	return data;
};







