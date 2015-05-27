var gulp = require('gulp');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');

gulp.task('default', function () {
  gulp.src('./scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(prefix('last 2 version', 'ie 8', 'ie 9'))
    .pipe(gulp.dest('./output/main.css'));
});
