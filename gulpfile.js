const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const concatCSS = require('gulp-concat-css');
function style() {
	return gulp.src('src/sass/**/*.sass')
		.pipe(sass().on('error',sass.logError))
		.pipe(autoprefixer())
		.pipe(concatCSS("style.css"))
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.stream());
}
function watch() {
	browserSync.init({
		server: {
			baseDir: "./src",
			index: "/index.html"
		}
	});
	gulp.watch('src/sass/**/*.sass', style);
	gulp.watch('./*.html').on('change',browserSync.reload);
	gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}
exports.default = watch;
exports.style = style;