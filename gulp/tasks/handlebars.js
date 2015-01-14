
var gulp        = require('gulp');
var handlebars  = require('gulp-handlebars');
var declare     = require('gulp-declare');
var concat      = require('gulp-concat');

gulp.task('handlebars', function() {
	gulp.src('src/views/**/*.hbs')
		.pipe(handlebars())
		.pipe(declare({
			namespace: 'views',
			root: 'module.exports',
			noRedeclare: true,
			processName: function(filePath) {
				return declare.processNameByPath(filePath.replace('src/views/', ''));
			}
		}))
		.pipe(concat('templates.js'))
		.pipe(gulp.dest('src'));
});
