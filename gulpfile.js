var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var jsFiles = ['index.js'];
var jsDest = 'dist/';

gulp.task('default', function() {
    return gulp.src(jsFiles)
        .pipe(rename('index.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest))
});