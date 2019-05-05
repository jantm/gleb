'use strict';

var config      = require('../config.json');
var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function(done) {
  runSequence('clean', 'less', 'cleancss', 'inline', 'injectcss', 'assetpaths', 'htmlclean', done);
});
