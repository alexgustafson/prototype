var paths = require('../paths');
var gulp = require('gulp');
var wiredep = require('wiredep').stream;

var overrides = {
    // non standard package paths can be fixed here
}


gulp.task('wiredep-jade', function () {
    gulp.src(paths.jade)
        .pipe(wiredep({
            directory: paths.bowerDirectory,
            ignorePath: '../..',
            overrides: overrides
        })).pipe(gulp.dest(paths.wiredep_jade_output));

});


gulp.task('wiredep-scss', function () {
    gulp.src(paths.scss)
        .pipe(wiredep({
            directory: paths.bowerDirectory,
            overrides: overrides
        })).pipe(gulp.dest(paths.wiredep_scss_output));

});

gulp.task('wiredep', ['wiredep-jade','wiredep-scss']);

