var path = require('path');

var appRoot = 'src/';
var outputRoot = 'dist/';

module.exports = {

    scss: appRoot + 'scss/**/*.scss',
    jade: appRoot + 'jade/**/*.jade',
    jade_exclude: '!' + appRoot + 'jade/**/_*.jade', // dont compile jade files that begin with _
    js: appRoot + 'js/**/*.js',

    styleOutput: outputRoot + 'style/*.css',

    dest: outputRoot

};