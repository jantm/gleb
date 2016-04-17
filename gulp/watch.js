'use strict';

var config = require('../config.json');
var gulp   = require('gulp');
var watch  = require('gulp-watch');

gulp.task('watch', ['less', 'injectcss:dev', 'inline']);