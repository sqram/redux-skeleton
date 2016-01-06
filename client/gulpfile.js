/*
 * Open 2 terminals and Navigate to directory of gulpfile.
 * DO `gulp webserver` in one, and `gulp watch` in another
 */

// grab our gulp packages
var gulp  = require('gulp')
  , stylus = require('gulp-stylus')
  , server = require('gulp-server-livereload')
  , watch = require('gulp-watch')
  , babel = require("gulp-babel")
  , browserify = require('browserify')
  , rename = require('gulp-rename')
  , source = require('vinyl-source-stream')
  ;


// Webserver - localhost:8000
gulp.task('webserver', function() {
  gulp.src('./public')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true
    }))
});



gulp.task('javascript', function() {

  // babelify
  gulp.src(["src/js/**/*.js"], {base: 'src'})
    .pipe(babel({
      presets: ['es2015'],
      plugins: ['transform-react-jsx']
    }))
    .pipe(gulp.dest("./public/"));

  // browserify
  browserify({
    entries: ['./public/js/app.js']
  })
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./public/js'))

})




// Watch
gulp.task('watch', function() {
  // watch styl files
  gulp.watch('./src/css/**/*.styl', function() {
    gulp.run('process-stylus')
  });

  gulp.watch('./src/js/**/*.js', function() {
    gulp.run('javascript');
  });

  gulp.watch('./src/*.html', function() {
    gulp.run('copy-html');
  })

});






// Copy HTML
gulp.task('copy-html', function() {
    gulp.src('./src/index.html')
    .pipe(gulp.dest('./public'));
});



// Process-stylus
gulp.task('process-stylus', function() {
    gulp.src(['src/css/app.styl'], {base: 'src'})
    .pipe(stylus())
    .pipe(gulp.dest('./public/'));
});


gulp.task('default', [
  'webserver'
  //'process-stylus',
  //'copy-html'
]);