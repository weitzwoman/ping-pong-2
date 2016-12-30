var gulp = require('gulp');

gulp.task('myTask', function(){
  console.log('hello gulp');
});

var browserify = require('browserify');

gulp.task('jsBrowserify', function() {
  return browserify({ entries: ['./js/pingpong-interface.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

var source = require('vinyl-source-stream');
