const {src, dest, task, series} = require('gulp');
const { deserialize } = require('v8');
const rm = require( 'gulp-rm' );
const sass = require('gulp-sass')(require('sass'));

task('clean', () => {
    return src( 'dist/**/*', { read: false }).pipe( rm())
});

task('copy', () => {
    return src('src/styles/main.scss').pipe(dest('dist'));    
});

task('styles', () => {
    return     
});

task("default", series("clean", "copy"));

