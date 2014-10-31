var gulp = require('gulp'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch');

gulp.task('connect', function() {
    connect.server({
        root: 'client',
        livereload: true
    });
});

gulp.task('watch', function () {
    var sources = [
        './client/*',
        './client/angular/*',
        './client/react/*',
        './client/polymer/*'
    ]
    watch(sources)
        .pipe(connect.reload());
});

gulp.task('default', ['connect', 'watch']);