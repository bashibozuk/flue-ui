const gulp = require('gulp');
const concat = require('gulp-concat');
const ts = require('gulp-typescript');
var webserver = require('gulp-webserver');

const browserify = require('browserify');
const tsify = require('tsify');
const source = require('vinyl-source-stream');

gulp.task('default',['client:ts', 'client:html'], () => {
   gulp.src("node_modules/phaser/build/phaser.js")
      .pipe(gulp.dest("dist"));
});

gulp.task('client:ts', () => {
   return browserify({
      basedir: '.',
      debug: true,
      entries: ['src/main.ts'],
      cache: {},
      packageCache: {}
   })
      .plugin(tsify)
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(gulp.dest("dist"));
});

gulp.task('client:html', () => {
   gulp.src("src/index.html")
      .pipe(gulp.dest("dist"))
});

gulp.task('webserver', function() {
   gulp.src('dist')
      .pipe(webserver({
         livereload: true,
         directoryListing: false,
         open: true
      }));
});