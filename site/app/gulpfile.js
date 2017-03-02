var gulp = require('gulp');
var stylus = require('gulp-stylus');
var jade = require('gulp-jade');
var imagemin = require('gulp-imagemin');

gulp.task('stylus', function () {
  return gulp.src('./build/style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('jade', function buildHTML() {
  return gulp.src('build/templates/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./dist/'));
});

gulp.task('imagemin', () =>
    gulp.src('./images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);
gulp.task('default', ['jade', 'stylus', 'imagemin']);
