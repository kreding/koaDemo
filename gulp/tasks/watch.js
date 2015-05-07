var gulp = require('gulp'),
    rootPath = '../../',
    config = {
        src: [rootPath + 'src/j/**/*.jsx', rootPath + 'src/c/**/*.styl'],
        tasks: ['webpack']
    };

gulp.task('watch', ['build'], function(){
    gulp.watch(config.src, config.tasks);
});
