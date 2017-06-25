var gulp = require('gulp');
var connect = require("gulp-connect");
var proxy = require("http-proxy-middleware");
var webpack = require('webpack');
var gulpWebpack = require('webpack-stream');
var wpcfg = require('./webpack.config');

//sources watched for livereload
var htmlSources =['*.html'];
var cssSources = ['css/*.css'];
var jsSources = ['js/*.js'];
var outputSources = ['dist/*.js'];
var sources = htmlSources.concat(cssSources).concat(jsSources).concat(outputSources);

//server
gulp.task('server', function(){
    connect.server({
        root: "src/",
        port: 30016,
        livereload: true,
        middleware: function (connect, options) {

            var p1 = proxy('/v1', {
                target: 'http://localhost:30015/'
            });

            var p2 = proxy('/v2', {
                target: 'http://localhost:30016/'
            });

            return [p1, p2];
        }
    });
});

//livereload
gulp.task('livereload', function() {
    gulp.src(sources)
        .pipe(connect.reload());
});

//watch the file changes to trigger livereload
gulp.task('watch', function() {
    gulp.watch(sources, ['livereload']);
});

gulp.task('pack', function() {
    return gulp.src('src/js/entry.js')
        .pipe(gulpWebpack(wpcfg, webpack))
        .pipe(gulp.dest('src/dist/'));
});

gulp.task('dev', ["pack", "server", "livereload", "watch"]);

gulp.task('run', ["server"]);