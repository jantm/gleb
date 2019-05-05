'use strict';

var config    = require('../config.json');
var gulp      = require('gulp');
var htmlclean = require('gulp-htmlclean');

function htmlClean(pathKey) {
  var path = config.path[pathKey];

  if (!path) {
    return;
  }

  return gulp.src(path + '/*.html')
    .pipe(htmlclean({
    	protect: /\n/g,
    }))
    .pipe(gulp.dest(path));
}

gulp.task('htmlclean', function() {
  return htmlClean('build');
});

gulp.task('htmlclean:dev', function() {
  return htmlClean('preview');
});

