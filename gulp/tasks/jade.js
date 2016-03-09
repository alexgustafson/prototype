var gulp = require('gulp');
var paths = require('../paths');
var jade = require("gulp-jade");

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('jade', function () {
    return gulp.src([paths.jade, paths.jade_exclude])
        .pipe(jade({
            pretty: true
        }))
        .on('error', handleError)
        // static option
        //.pipe(gulp.dest(paths.dest))
        // django option
        .pipe(gulp.dest(paths.jade_dest))
});