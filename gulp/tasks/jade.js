var gulp = require('gulp');
var paths = require('../paths');
var jade = require("gulp-jade");


gulp.task('jade', function () {
    gulp.src([paths.jade, paths.jade_exclude])
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest(paths.dest))
});