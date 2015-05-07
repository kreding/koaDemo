var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    rootPath = '../../',
    config = {
        src : src + '/c/**/*.styl',
        dest : dest + '/c',
        options : {
            compress: true
        }
    };

gulp.task('style', function(){
    gulp.src(config.src)
        .pipe(stylus(config.options))
        .pipe(gulp.dest(config.dest))
});
