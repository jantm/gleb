'use strict';

var config       = require('../config.json');
var gulp         = require('gulp');
var inlinesource = require('gulp-inline-source');

// Inject the styles into the template HTML file
gulp.task('injectcss', function() {
  // compress: true causes problems with some media queries
  var options = {
    compress: false,
  };

  return gulp.src(config.path.templates + '/**/*.html')
    .pipe(inlinesource(options))
    .pipe(gulp.dest(config.path.build));
});

gulp.task('injectcss:dev', function() {
  var options = {
    compress: false,
  };

  return gulp.src(config.path.templates + '/**/*.html')
    .pipe(inlinesource(options))
    .pipe(gulp.dest(config.path.preview));
});
