
require('exists-patch').patch();

module.exports = exports = function(grunt) {
	grunt.loadNpmTasks('grunt-css');
	init(grunt);
};
	
exports.stylesheets = [
	'public/stylesheets/globals.css',
	'public/stylesheets/ui.css',
//	'public/stylesheets/forms.css',
	'public/stylesheets/orbit.css',
	'public/stylesheets/reveal.css',
	'public/stylesheets/app.css',
	'public/stylesheets/mobile.css'
];
	
exports.javascripts = [
	'public/javascripts/jquery-1.7.2.min.js',
	'public/javascripts/placeholder.js',
	'public/javascripts/lodash.js',
	'public/javascripts/eventemitter2.js',
	'public/javascripts/spin.js',
	'public/javascripts/app.js',
	'public/javascripts/main.prod.js'
];

function init(grunt) {
	
	grunt.initConfig({
	// CSS Lint
		csslint: {
			all: {
				src: exports.stylesheets,
				rules: {
					'import': false,
					'overqualified-elements': 2
				}
			}
		},
	// CSS Min
		cssmin: {
			all: {
				src: exports.stylesheets,
				dest: 'public/style.min.css'
			}
		},
	// JS Lint
		lint: {
			all: ['public/javascripts/main.js', 'public/javascripts/app.js']
		},
		jshint: {
			options: {
				browser: true
			}
		},
	// JS Min
		min: {
			all: {
				src: exports.javascripts,
				dest: 'public/app.min.js'
			}
		}
	});
		
	grunt.registerTask('default', 'cssmin lint min');
	

// Clean
	grunt.registerTask('clean', function() {
		var fs    = require('fs');
		var path  = require('path');
		
		fs.unlink(relpath('public/style.min.css'));
		fs.unlink(relpath('public/app.min.js'));
		
		function relpath(file) {
			return path.join(__dirname, file);
		}
	});
		
}

