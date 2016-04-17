'use strict';

var config       = require('../config.json');
var gulp         = require('gulp');
var inlinesource = require('gulp-inline-source');

// Inject the styles into the template HTML file
gulp.task('injectcss:dev', function() {
    var options = {
        compress: false
    };
 
    return gulp.src(config.path.html + '/**/*.html')
        .pipe(inlinesource(options))
        .pipe(gulp.dest(config.path.templates));
});

gulp.task('injectcss', function() {
    var options = {
        compress: true
    };
 
    return gulp.src(config.path.html + '/**/*.html')
        .pipe(inlinesource(options))
        .pipe(gulp.dest(config.path.templates));
});