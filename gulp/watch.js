'use strict';

var config      = require('../config.json');
var gulp        = require('gulp');
var watch       = require('gulp-watch');
var runSequence = require('run-sequence');

gulp.task('watch', function(done) {
  runSequence('clean:dev', 'less', 'cleancss', 'injectcss:dev', 'inline:dev', 'htmlclean:dev', done);
});
