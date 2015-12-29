var gulp = require('gulp');
var config = require('../config').tpl;

gulp.task('tpl', function () {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});
