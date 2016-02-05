var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var reload = browserSync.reload;

// we need a slight delay to reload browsers
// connected to browser-sync after restarting nodemon
var BROWSER_SYNC_RELOAD_DELAY = 400;

/* Compile Sass */
gulp.task('sass', function() {
	return gulp.src('./scss/app.scss')
    .pipe(sass({includePaths: ['app/vendor/foundation/scss']}))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./app/css/'));
});

gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    script: 'bin/www',
    ignore: [
      'gulpfile.js',
      'node_modules/'
    ]
  })
  .on('start', function onStart() {
      // ensure start only got called once
      if (!called) { cb(); }
      called = true;
  })
  .on('restart', function onRestart() {
      // reload connected browsers after a slight delay
      setTimeout(function reload() {
        browserSync.reload({
          stream: false  
        });
      }, BROWSER_SYNC_RELOAD_DELAY);
  });
});

/* Browser Sync */
gulp.task('browser-sync', ['nodemon'], function() {
  var files = [
      'routes/*.js',
      'app/**/*.*'
    ];
  browserSync.init(files, {
    proxy: "localhost:5000",  // local node app address
    port: 5555,  // use *different* port than above
    notify: true
  });
});

gulp.task('default', ['sass', 'browser-sync'], function() {
	gulp.watch('scss/app.scss', ['sass']);
});