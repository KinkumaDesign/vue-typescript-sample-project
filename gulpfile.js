var gulp = require('gulp');
var ts = require('gulp-typescript');
var webpack = require('gulp-webpack');

gulp.task('ts', function(){
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult = tsProject.src().pipe(ts(tsProject));
    return tsResult.js.pipe(gulp.dest('build/js'));
});

gulp.task('bundle', ['ts'], function(){
    gulp.src('./build/js/*.js')
        .pipe(webpack({
            entry: ['./build/js/ApplicationMain.js'],
            output:{
                filename: 'main.js',
                library: 'app'
            },
            devtool:'source-map',
            resolve: {
                extensions: ['', '.js']
            }
        }))
        .pipe(gulp.dest('htdocs/js'))
});
