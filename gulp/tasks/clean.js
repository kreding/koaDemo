var gulp = require('gulp'),
    del = require('del'),
    rootPath = '../../',
    config = {
        src: [rootPath + 'public/**/*']
    };

gulp.task('clean', function(){
    del.sync(config.src);
});
