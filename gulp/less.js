'use strict';

var config = require('../config.json');
var gulp   = require('gulp');
var less   = require('gulp-less');
var path   = require('path');

var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var autoprefix           = new LessPluginAutoPrefix({ browsers: ['last 2 versions'] });

// Compile less files without minicifaction
gulp.task('less', function() {
  var options = {
    paths:   [ path.join(__dirname, 'less', 'includes') ],
    plugins: [ autoprefix ],
  };

  return gulp.src(config.path.less + '/**/*.less')
    .pipe(less(options))
    .pipe(gulp.dest(config.path.css));
});
