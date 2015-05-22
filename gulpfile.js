var gulp       = require('gulp');
var plumber    = require('gulp-plumber');
var sass       = require('gulp-sass');
var webserver  = require('gulp-webserver');
var opn        = require('opn');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var reactify   = require('reactify');

var sourcePaths = {
  styles: ['./build/scss/**/*.scss']
};

var distPaths = {
  styles: './public/css',
  html: './public',
  js: './public/js'
};

var server = {
  host: 'localhost',
  port: '8001'
}

gulp.task('sass', function () {
  gulp.src( sourcePaths.styles )
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest(distPaths.styles));
});

gulp.task('html', function() {
  gulp.src('./build/index.html')
    .pipe(gulp.dest(distPaths.html));
});

gulp.task('webserver', function() {
  gulp.src( './public' )
    .pipe(webserver({
      host:             server.host,
      port:             server.port,
      livereload:       true,
      directoryListing: false
    }));
});

gulp.task('js', function () {
  browserify('./build/js/App.jsx')
    .transform('reactify')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest(distPaths.js))
});

gulp.task('openbrowser', function() {
  opn( 'http://' + server.host + ':' + server.port );
});

gulp.task('watch', function(){
  gulp.watch(sourcePaths.styles, ['sass']);
});

gulp.task('build', ['html', 'js', 'sass']);

gulp.task('default', ['build', 'webserver', 'watch', 'openbrowser']);