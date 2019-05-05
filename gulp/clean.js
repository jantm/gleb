'use strict';

var config = require('../config.json');
var gulp   = require('gulp');
var clean  = require('gulp-clean');

// Clean the preview directory
gulp.task('clean', function() {
  return gulp.src(config.path.build, {read: false})
    .pipe(clean());
});

gulp.task('clean:dev', function() {
  return gulp.src(config.path.preview, {read: false})
    .pipe(clean());
});
