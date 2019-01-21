var gulp = require('gulp');
var tap = require('gulp-tap');
var watch = require('gulp-watch');
var grun = require('gulp-run');
var fs = require('fs');
var path = require('path');

const PATH = {
  src: 'public/literature/**/*.md',
  dest: 'src/',
}

gulp.task('watchLiterature', () => {
  return watch(PATH.src, { ignoreInitial: true }, (vinyl) => {
    return grun('npx litpro -b src/ public/literature/' + vinyl.relative).exec();
	});
});

gulp.task('compile', (done) => {
  const folder = "./public/literature/";
  const files = fs.readdirSync('./public/literature')
    .filter((file) => fs.lstatSync(path.join(folder, file)).isFile());
	let compiled = 0;
	gulp.src(PATH.src)
		.pipe(tap((vinyl) => {
      return grun('npx litpro -b src/ ' + folder + vinyl.relative)
        .exec(() => {
          if (++compiled === files.length) {
            done();
          }
        });
    }));
});

gulp.task('react', () => {
  return grun('npm run dev').exec();
});

gulp.task('default', gulp.series('compile', gulp.parallel('watchLiterature', 'react')));
