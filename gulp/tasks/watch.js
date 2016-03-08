var gulp = require('gulp');
var paths = require('../paths')


gulp.task('watch', function () {
        gulp.watch(paths.jade, ['jade']);
        gulp.watch(paths.scss, ['scss']);
    }
);