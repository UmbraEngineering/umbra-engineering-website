
module.exports = exports = function(grunt) {
	grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	init(grunt);
};

var js = 'public/javascripts';
var css = 'public/stylesheets';

exports.stylesheets = [
	css + '/district-thin.font.css',
	css + '/tangerine.font.css',
	css + '/rocksalt.font.css',
	css + '/foundation.css',
	css + '/app.css'
];

exports.javascripts = [
// Core
	js + '/lib/cloak.js',
	js + '/lib/history.adapter.jquery.js',
	js + '/lib/history.html4.js',
	js + '/lib/history.js',

// Templates
	js + '/templates.js',

// Mixins
	js + '/mixins/**/*.js',

// Models
	// ...

// Views
	js + '/views/layout.js',
	js + '/views/page.js',
	js + '/views/index.js',
	js + '/views/services.js',
	// js + '/views/contact.js',
	js + '/views/portfolio.js',
	js + '/views/open-source.js',
	js + '/views/careers.js',

// Starter Script
	js + '/main.js'
];

function init(grunt) {
	
	grunt.initConfig({
	// JS Lint
		lint: {
			// Only lint our JS code, not third-party stuff
			all: exports.javascripts.slice(5)
		},
		jshint: {
			options: {
				browser: true,
				bitwise: false,
				camelcase: false,
				eqnull: true,
				latedef: false,
				plusplus: false,
				jquery: true,
				shadow: true,
				smarttabs: true,
				loopfunc: true,
				boss: true
			}
		},
	// Handlebars template
		handlebars: {
			all: {
				files: {
					'public/javascripts/templates.js': 'templates/**/*.hbs'
				},
				options: {
					namespace: 'app.templates',
					processName: function(filename) {
						return filename.replace(/\.hbs$/, '').split('/').slice(1).join('.');
					}
				}
			}
		},
	// Concat
		concat: {
			js: {
				src: exports.javascripts,
				dest: js + '/app.js',
				separator: ';'
			},
			css: {
				src: exports.stylesheets,
				dest: css + '/styles.css'
			}
		},
	// JS Min
		min: {
			all: {
				src: js + '/app.js',
				dest: js + '/app.min.js'
			}
		},
	// CSS Min
		cssmin: {
			all: {
				src: css + '/styles.css',
				dest: css + '/styles.min.css'
			}
		}
	});
		
	grunt.registerTask('default', 'lint clean handlebars concat:js min concat:css cssmin');
	

// Clean
	grunt.registerTask('clean', function() {
		var fs    = require('fs');
		var path  = require('path');
		
		fs.unlink(relpath(js + '/app.js'));
		fs.unlink(relpath(js + '/app.min.js'));
		fs.unlink(relpath(js + '/templates.js'));
		fs.unlink(relpath(css + '/styles.css'));
		fs.unlink(relpath(css + '/styles.min.css'));
		
		function relpath(file) {
			return path.join(__dirname, file);
		}
	});
		
}
