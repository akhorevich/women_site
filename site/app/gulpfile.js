var gulp = require('gulp');
var stylus = require('gulp-stylus');
var pug = require('gulp-pug');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('stylus', function () {
  return gulp.src('./build/style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('pug', function buildHTML() {
  return gulp.src('build/templates/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('./dist/'));
});
