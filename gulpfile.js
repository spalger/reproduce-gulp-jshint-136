var gulp = require('gulp')
var jshint = require('gulp-jshint')

gulp.task('lint', function(){
  return gulp
    .src('src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('gulp-html-log', { filename: 'output.html' }));
});
