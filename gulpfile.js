var gulp = require('gulp');
var webpack = require('webpack-stream'); // Handles the JS Modules

var browserSync = require('browser-sync'); // Reloads the browser when I save.
var reload = browserSync.reload;

var sass = require('gulp-sass');
var neat = require('node-neat').includePaths;


// Sass Bourbon Neat
gulp.task('styles', function () {
    return gulp.src('./App/_Styles/**/*.scss')
        .pipe(sass({
            includePaths: ['styles'].concat(neat)
        }))
        .pipe(gulp.dest('./public/css'))
        .pipe(reload({stream:true}));
});

gulp.task('scripts', function() {
  return gulp.src('src/Main.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('public/'))
    .pipe(reload({stream:true}));
});

// This should run after the public folder has been updated
gulp.task('browser-sync', function(){
  browserSync({
    server: {baseDir:'./public'}
  });
});

gulp.task("watch", function(){
    gulp.watch('./App/**/*.js', ['scripts']);
    gulp.watch('./App/_Styles/**/*.scss', ['styles']);
});

gulp.task("default", ['styles','scripts','browser-sync','watch']);