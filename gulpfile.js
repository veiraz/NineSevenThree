var gulp = require('gulp'),
    prefix = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    util = require('gulp-util');

gulp.task('default', function () {
  gulp.src('./scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(prefix('last 2 version', 'ie 8', 'ie 9'))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./output/'))
    return util.log('Done! Now grab the framework on /output/main.css');
});
