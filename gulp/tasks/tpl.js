var gulp = require('gulp');
var config = require('../config').tpl;
var browserSync = require('browser-sync');

gulp.task('tpl', function () {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({
			stream: true
		}));
});
