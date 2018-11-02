var gulp = require('gulp'),
	watch = require('gulp-watch'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssImport = require('postcss-import'),
	browserSync = require('browser-sync').create();


gulp.task('watch', function() {
	browserSync.init({
		notify: false,
		server: {
			baseDir: "docs"
		}
	});
	watch('./docs/index.html', function() {
		browserSync.reload();
	});
	watch('./docs/styles/**/*.css', function() {
		gulp.start('cssInject');
	});
});


gulp.task('style', function() {
	return gulp.src('./docs/styles/style.css')
		.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
		.on('error', function(errorInfo) {
			console.log(errorInfo.toString());
			this.emit('end');			
		})
		.pipe(gulp.dest('./docs/temp/styles'))
});

gulp.task('cssInject', ['style'], function() {
	return gulp.src('./docs/temp/styles/*.css')
		.pipe(browserSync.stream());
});