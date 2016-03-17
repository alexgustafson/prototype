var paths = require('../paths');
var gulp = require('gulp');
var wiredep = require('wiredep').stream;

module.exports = {

    all: appRoot + '**/*.*',

    scss: appRoot + 'scss/**/*.scss',
    jade: appRoot + 'jade/**/*.jade',
    jade_exclude: '!' + appRoot + 'jade/**/_*.jade', // dont compile jade files that begin with _

    assets: appRoot + 'assets/**/*',
    assets_dest: outputRoot + 'assets/',

    scripts: appRoot + 'scripts/**/*.js',
    scripts_output: outputRoot + 'scripts/',

    //wiredep stuff
    bowerDirectory: "bower_components",
    bowerJson: 'bower.json',
    wiredep_jade_output: appRoot + 'jade/',
    wiredep_scss_output: appRoot + 'scss/',
    wiredep_sass_output: appRoot + 'sass/',

    dest: outputRoot,
    styleOutput: outputRoot + 'style/'

};


gulp.task('wiredep-jade', function () {
    gulp.src(paths.jade)
        .pipe(wiredep({
            directory: paths.bowerDirectory,
            ignorePath: '../',
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

