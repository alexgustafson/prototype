var path = require('path');

var appRoot = 'src/';
var outputRoot = 'dist/';

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