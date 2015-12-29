var dest = "dist";
var src = 'src';

module.exports = {
    src: src,
    dest: dest,
    browserSync: {
        port: 3000, // default 3000
        server: {
            baseDir: [dest, './']
        }
    },
    clean: {
        dest: dest
    },
    sass: {
        src: [src + '/**/*.scss'],
        dest: dest
    },
    tpl: {
        src: [src + '/**/*.html'],
        dest: dest
    }
};
