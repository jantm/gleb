'use strict';

var config    = require('../config.json');
var gulp      = require('gulp');
var cleanCSS = require('gulp-clean-css');

gulp.task('cleancss', function() {
  return gulp.src(config.path.css + '/*.css')
    .pipe(cleanCSS({
			compatibility        : 'ie7',
			keepBreaks           : true,
			shorthabndCompacting : false
  	}))
    .pipe(gulp.dest(config.path.css));
});