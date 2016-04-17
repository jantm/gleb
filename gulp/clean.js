'use strict';

var config = require('../config.json');
var gulp   = require('gulp');
var clean  = require('gulp-clean');

// Clean the preview directory
gulp.task('clean', function() {
    return gulp.src(config.path.templates, {read: false})
        .pipe(clean());
});