
var gulp        = require('gulp');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var es3ify      = require('gulp-es3ify');
var streamify   = require('gulp-streamify');
var uglify      = require('gulp-uglify');

gulp.task('javascript', function() {
	return browserify({
		paths: ['./src', './src/common'],
		entries: ['./src/main.js']
	})
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(streamify(es3ify()))
		// .pipe(streamify(uglify()))
		.pipe(gulp.dest('public/build'));
});
