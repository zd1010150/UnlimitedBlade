/**
 * [browserSync 负责起服务，配置代理转发]
 */

var gulp = require('gulp');
gulp.task('browserSync', function() {
	var browserSync = require('browser-sync');
	var config = require('../config').browserSync;

	browserSync({
		port: config.port,
		open: false, // 默认值true, 禁用浏览器自动打开
		server: {
			baseDir: config.server.baseDir
		}
	});
});
