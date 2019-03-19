'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function(){
    return gulp.src('src/scss/**.scss')   
        .pipe(sourcemaps.init())
        .pipe(sass())  // Using gulp-sass
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest('dist/css'))
    });
    
gulp.task('watch', gulp.series('sass',function(){
    gulp.watch('src/scss/**.scss',gulp.series('sass'));
}));
