var gulp = require('gulp'),
minifycss = require('gulp-minify-css'),
jshint = require('gulp-jshint'),
stylish = require('jshint-stylish'),
uglify = require('gulp-uglify'),
usemin = require('gulp-usemin'),
imagemin = require('gulp-imagemin'),
rename = require('gulp-rename'),
concat = require('gulp-concat'),
notify = require('gulp-notify'),
cache = require('gulp-cache'),
changed = require('gulp-changed'),
rev = require('gulp-rev'),
browserSync = require('browser-sync'),
del = require('del');

gulp.task('jshint', function() {
return gulp.src('../my site/client/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

// Clean
gulp.task('clean', function() {
return del(['dist']);
});

// Default task
gulp.task('default', ['clean'], function() {
gulp.start('usemin', 'imagemin');
});

gulp.task('usemin',['jshint'], function () {
return gulp.src('./client/stylesheets/**/*')
    .pipe(usemin({
      css:[minifycss(),rev()],
      js: [uglify(),rev()]
    }))
    .pipe(gulp.dest('dist/css'));
});

// Images
gulp.task('imagemin', function() {
return del(['dist/images']), gulp.src('../client/img/**/*')
  .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
  .pipe(gulp.dest('dist/images'))
  .pipe(notify({ message: 'Images task complete' }));
});

// Watch
gulp.task('watch', ['browser-sync'], function() {
// Watch .js files
gulp.watch('{../my site/client/**/*.js,../my site/client/stylesheets/**/*.css,../client/views/**/*.html}', ['usemin']);
    // Watch image files
gulp.watch('../client/img/**/*', ['imagemin']);

});

gulp.task('browser-sync', ['default'], function () {
var files = [
    '../client/views/**/*.html',
    '../my site/client/stylesheets/**/*.css',
    '../client/img/**/*',
    '../my site/client/**/*.js',
    'dist/**/*'
];

browserSync.init(files, {
server: {
    baseDir: "dist",
    index: "index.html"
}
});
      // Watch any files in dist/, reload on change
gulp.watch(['dist/**']).on('change', browserSync.reload);
});