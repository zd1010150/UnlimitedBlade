var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', function () {
    gulp.watch(config.sass.src, ['sass']);
    gulp.watch(config.tpl.src, ['tpl']);
})
