'use strict';

var config      = require('../config.json');
var gulp        = require('gulp');
var inliner     = require('gulp-mc-inliner');
var browserSync = require('browser-sync').create();

// MailChimp inliner
gulp.task('inline', function() {
    return gulp.src(config.path.templates + '/**/*.html')
        .pipe(inliner(config.mailchimp.api_key))
        .pipe(gulp.dest(config.path.templates))
        .pipe(browserSync.reload({stream:true}));
});