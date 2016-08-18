'use strict';

var config      = require('../config.json');
var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('serve', function(done) {
  runSequence('clean', 'less', 'cleancss', 'injectcss', 'inline', 'htmlclean', 'browserSync', done);
});