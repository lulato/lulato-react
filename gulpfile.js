var gulp = require('gulp');
var webpack = require('webpack-stream');

var sass = require('gulp-sass');
var neat = require('node-neat').includePaths;

// Sass Bourbon Neat
gulp.task('styles', function () {
    return gulp.src('./App/_Styles/*.scss')
        .pipe(sass({
            includePaths: ['styles'].concat(neat)
        }))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('default', function() {
  return gulp.src('src/Main.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('public/'));
});

