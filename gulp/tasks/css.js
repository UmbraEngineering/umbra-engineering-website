
var gulp    = require('gulp');
var myth    = require('gulp-myth');
var cssmin  = require('gulp-cssmin');
var concat  = require('gulp-concat');

gulp.task('css', function() {
	return gulp.src(['src/normalize.css', 'src/base.css', 'src/views/**/*.css'])
		.pipe(myth())
		.pipe(concat('app.min.css'))
		.pipe(cssmin())
		.pipe(gulp.dest('public/build'));
});
