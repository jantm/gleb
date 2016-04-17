'use strict';

var config      = require('../config.json');
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Run a browser preview with autorefresh
gulp.task('browserSync', [], function() {
    var files = [
        config.path.less + '/**/*.less',
        config.path.templates + '/**/.html'
    ];

    browserSync.init({
        server: {
            baseDir   : './',
            directory : true
        },
        startPath      : config.path.templates,
        logPrefix      : 'GLEB',
        logConnections : true,
        logFileChanges : true,
        notify         : false
    });

    gulp.watch(files, ['watch'], browserSync.reload);
});