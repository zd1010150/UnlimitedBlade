var gulp = require('gulp');
var config = require('../config').sass;

gulp.task('sass', function () {
    var sass = require('gulp-sass');
    return gulp.src(config.src, {base: require('../config').src})
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest(config.dest));
});
