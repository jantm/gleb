'use strict';

var config    = require('../config.json');
var gulp      = require('gulp');
var htmlclean = require('gulp-htmlclean');

gulp.task('htmlclean', function() {
  return gulp.src(config.path.templates + '/*.html')
    .pipe(htmlclean({
    	protect: /\n/g
    }))
    .pipe(gulp.dest(config.path.templates));
});

