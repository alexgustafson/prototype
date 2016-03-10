var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');
var paths = require('../paths')


gulp.task('usemin', function() {
    gulp.src(paths.jade_dest + '**/*.html')
        .pipe(usemin({
            css: [minifyCss(), 'concat', rev()],
            //html: [minifyHtml({empty: true})],
            js: [uglify(), rev()]
        }))
        .pipe(gulp.dest(paths.jade_dest));
});