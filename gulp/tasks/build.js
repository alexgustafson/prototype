var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function() {
    runSequence('wiredep', ['jade', 'scss', 'assets', 'scripts'], 'usemin');
});


