import gulp from 'gulp';
import sass from 'gulp-sass';
import browserSync from 'browser-sync';

const server = browserSync.create();

function scripts() {
  return gulp.src(['src/assets/js/*.js']).pipe(gulp.dest('dist/assets/js'));
}

function styles() {
  return gulp
    .src(['src/assets/scss/styles.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/assets/css'));
}
function tiles() {
  return gulp
    .src(['src/assets/tiled/**/*'])
    .pipe(gulp.dest('dist/assets/tiled/'));
}

function template() {
  return gulp.src(['src/index.html']).pipe(gulp.dest('dist/'));
}

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: './dist'
  });
  done();
}

function build(done) {
  tiles();
  template();
  scripts();
  styles();
  done();
}

function watch() {
  gulp.watch('./src/assets/scss/**/*.scss', gulp.series(styles, reload));
  gulp.watch('./src/assets/js/**/*.js', gulp.series(scripts, reload));
  gulp.watch('./src/*.html', gulp.series(template, reload));
}

const demo = gulp.series(build, serve, watch);

export default demo;
