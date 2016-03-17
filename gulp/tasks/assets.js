var gulp = require('gulp');
var paths = require('../paths');
var copy = require('gulp-copy');

gulp.task('assets_files', function () {
    return gulp.src(paths.assets)
        .pipe(copy(paths.assets_dest, {
            prefix: 2
        }));
});

gulp.task('assets_bower', function() {
    return gulp.src('bower_components/**')
        .pipe(copy('dist'));
});

gulp.task('assets', ['assets_files','assets_bower']);