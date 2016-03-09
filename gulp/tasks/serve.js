var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['build', 'watch'], function() {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./dist/"
        },
        injectChanges: true
    });

    gulp.watch("dist/**/*", ['']).on('change', browserSync.reload);
})