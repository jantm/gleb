'use strict';

var config     = require('../config.json');
var gulp       = require('gulp');
var assetpaths = require('gulp-assetpaths');

// Alter all assets paths
gulp.task('assetpaths', function() {
  return gulp.src([config.path.build + '/*.html'])
    .pipe(assetpaths({
      oldDomain:        config.path.assets.local,
      newDomain:        config.path.assets.external,
      docRoot:          config.path.build,
      filetypes:        ['jpg', 'jpeg', 'png', 'ico', 'gif'],
      customAttributes: ['background', 'src'],
      templates:        false,
    }))
    .pipe(gulp.dest(config.path.build));
});
