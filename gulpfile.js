
var requireDir = require('require-dir');
var gulp = require('gulp');
var runSequence = require('run-sequence');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', {
	recurse: true
});

gulp.task('default', function() {
	runSequence(['sass', 'tpl', 'browserSync'], 'watch');
});
