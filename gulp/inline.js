'use strict';

var config      = require('../config.json');
var gulp        = require('gulp');
var inliner     = require('gulp-mc-inliner');
var browserSync = require('browser-sync').get('gleb');

// MailChimp inliner
gulp.task('inline', function() {
  return gulp.src(config.path.build + '/**/*.html')
  .pipe(inliner(config.mailchimp.api_key))
  .pipe(gulp.dest(config.path.build));
});

gulp.task('inline:dev', function() {
  return gulp.src(config.path.preview + '/**/*.html')
    .pipe(inliner(config.mailchimp.api_key))
    .pipe(gulp.dest(config.path.preview));
});
