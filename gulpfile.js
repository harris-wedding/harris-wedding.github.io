var gulp = require("gulp"),
  connect = require("gulp-connect"),
  path = require('path'),
  ghPages = require('gulp-gh-pages'),
  clean = require('gulp-clean'),
  runSequence = require('run-sequence'),
  gutil = require('gulp-util');

gulp.task('stylus', function () {
  var stylus = require("gulp-stylus"),
    flatten = require('gulp-flatten'),
    nib = require('nib'),
    jeet = require('jeet'),
    rupture = require('rupture');

  return gulp.src(['src/styl/styl.styl'])
    .pipe(stylus({
      use: [nib(), jeet(), rupture()],
      'include css': true
      }))
    .pipe(flatten())
    .pipe(gulp.dest('./dest/css'))
    .pipe(connect.reload());
});

// gulp.task('stylint', function() {
//   var stylint = require('gulp-stylint');
//   return gulp.src(['src/**/*.styl', '!./src/styl/lib/**/*.styl'])
//     .pipe(stylint({config: '.stylintrc'}));
// });

gulp.task('images', function() {
  return gulp.src('./src/images/**/*')
    .pipe(gulp.dest('./dest/images'));
});

gulp.task('templatizer', function() {
  var templatizer = require('templatizer');

  templatizer('./src/**/*.jade', './dest/templatizer.js', {
    namespace: 'window.App',
    dontremoveMixins: true
  });

});

gulp.task('jade', function() {
  var jade = require('gulp-jade'),
    gutil = require('gulp-util');

  gulp.src(['./src/templates/**/*.jade', '!./src/templates/**/_*.jade'])
    .pipe(jade())
    .on('error', gutil.log)
    .pipe(gulp.dest('./dest'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['src/**/*.styl'], ['stylus']);
  gulp.watch(['src/**/*.jade'], ['jade', 'templatizer']);
  gulp.watch(['src/**/*.js'], ['browserify-js']);
  gulp.watch(['src/images/**/*'], ['images']);
});

gulp.task('connect', function() {
  connect.server({
    root: ['dest'],
    livereload: true
  });
});

gulp.task('clean', function () {
  'use strict';
  return gulp.src(['dest'], {read: false})
    .pipe(clean({
      force: true
    }));
});

// Do not run this
// Run gh-pages instead
gulp.task('deploy', function() {
  return gulp.src('./dest/**/*')
    .pipe(ghPages({
        'branch': 'master'
      }));
});

gulp.task('copy-vendor-js', function() {

  gulp.src('bower_components/**/*')
    .pipe(gulp.dest('./dest/'));

});

gulp.task('browserify-js', function () {
  var browserify = require('browserify');
  var source = require('vinyl-source-stream');
  var buffer = require('vinyl-buffer');
  var globby = require('globby');
  var through = require('through2');
  var uglify = require('gulp-uglify');
  var sourcemaps = require('gulp-sourcemaps');
  var reactify = require('reactify');
  var gutil = require('gulp-util');

  // gulp expects tasks to return a stream, so we create one here.
  var bundledStream = through();

  bundledStream
    // turns the output bundle stream into a stream containing
    // the normal attributes gulp plugins expect.
    .pipe(source('app.js'))
    // the rest of the gulp task, as you would normally write it.
    // here we're copying from the Browserify + Uglify2 recipe.
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
      // Add gulp plugins to the pipeline here.
    .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dest/js/'))
    .pipe(connect.reload());

  // "globby" replaces the normal "gulp.src" as Browserify
  // creates it's own readable stream.
  globby([
    './src/js/app.js',
    './src/js/exports.js'

    // './src/components/**/*.js'
  ], function(err, entries) {
    // ensure any errors from globby are handled
    if (err) {
      bundledStream.emit('error', err);
      return;
    }

    // create the Browserify instance.
    var b = browserify({
      entries: entries,
      debug: true,
      transform: [reactify]
    });

    // pipe the Browserify stream into the stream we created earlier
    // this starts our gulp pipeline.
    b.bundle().pipe(bundledStream);
  });

  // finally, we return the stream, so gulp knows when this task is done.
  return bundledStream;
});

gulp.task('browserify-vendor-js', function () {
  var browserify = require('browserify');
  var source = require('vinyl-source-stream');
  var buffer = require('vinyl-buffer');
  var globby = require('globby');
  var through = require('through2');
  var uglify = require('gulp-uglify');
  var sourcemaps = require('gulp-sourcemaps');
  var reactify = require('reactify');
  var gutil = require('gulp-util');

  // gulp expects tasks to return a stream, so we create one here.
  var bundledStream = through();

  bundledStream
    // turns the output bundle stream into a stream containing
    // the normal attributes gulp plugins expect.
    .pipe(source('vendor.js'))
    // the rest of the gulp task, as you would normally write it.
    // here we're copying from the Browserify + Uglify2 recipe.
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
      // Add gulp plugins to the pipeline here.
    .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dest/js/'))
    .pipe(connect.reload());

  // "globby" replaces the normal "gulp.src" as Browserify
  // creates it's own readable stream.
  globby([
    './src/js/lib/**/*'
  ], function(err, entries) {
    // ensure any errors from globby are handled
    if (err) {
      bundledStream.emit('error', err);
      return;
    }

    // create the Browserify instance.
    var b = browserify({
      entries: entries,
      debug: true,
      transform: [reactify]
    });

    // pipe the Browserify stream into the stream we created earlier
    // this starts our gulp pipeline.
    b.bundle().pipe(bundledStream);
  });

  // finally, we return the stream, so gulp knows when this task is done.
  return bundledStream;
});

gulp.task('copy-node-modules', function() {
  gulp.src('node_modules/**/*')
   .pipe(gulp.dest('./dest/node_modules'));

});

gulp.task('cname', function() {
  gulp.src('CNAME')
   .pipe(gulp.dest('./dest'));
});

gulp.task('gh-pages', function(callback) {
  runSequence(
    ['clean'],
    ['cname'],
    ['stylus', 'jade'],
    ['browserify-js'],
    ['browserify-vendor-js'],
    ['copy-vendor-js'],
    ['templatizer'],
    ['copy-node-modules'],
    ['images'],
    ['deploy'],
    callback);
});

gulp.task('default', function(callback) {
  runSequence(
    ['clean'],
    ['stylus'],
    ['jade'],
    ['browserify-js'],
    ['browserify-vendor-js'],
    ['copy-vendor-js'],
    ['templatizer'],
    ['copy-node-modules'],
    ['images'],
    ['connect', 'watch'],
    callback);
});
