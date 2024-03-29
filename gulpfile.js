const { src, dest, task, series, watch, parallel } = require("gulp");
const rm = require('gulp-rm');
// const sass = require('gulp-sass');
const sass = require('gulp-sass')(require('dart-sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const px2rem = require('gulp-smile-px2rem');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const svgo = require('gulp-svgo');
const svgSprite = require('gulp-svg-sprite');
const gulpif = require('gulp-if');
 
const env = process.env.NODE_ENV;
 
const {SRC_PATH, DIST_PATH, STYLE_LIBS, JS_LIBS} = require('./gulp.config');
 
// sass.compiler = require('node-sass');
 
task('clean', () => {
 return src(`${DIST_PATH}/**/*`, { read: false })
   .pipe(rm())
})
 
task('copy:html', () => {
 return src(`${SRC_PATH}/*.html`)
   .pipe(dest(DIST_PATH))
   .pipe(reload({ stream: true }));
})
 
task('styles', () => {
 return src([...STYLE_LIBS, 'src/styles/scss/main.scss'])
   .pipe(gulpif(env === 'dev', sourcemaps.init()))
   .pipe(concat('main.min.scss'))
   .pipe(sassGlob())
   .pipe(sass().on('error', sass.logError))
  //  .pipe(px2rem())
   .pipe(gulpif(env === 'prod', autoprefixer({
       browsers: ['last 2 versions'],
       cascade: false
     })))
   .pipe(gulpif(env === 'prod', gcmq()))
   .pipe(gulpif(env === 'prod', cleanCSS()))
   .pipe(gulpif(env === 'dev', sourcemaps.write()))
   .pipe(dest(DIST_PATH))
   .pipe(reload({ stream: true }));
});
 
const libs = [
 'node_modules/jquery/dist/jquery.js',
 'src/scripts/*.js'
];
 
task('scripts', () => {
 return src(['src/scripts/*.js'])
   .pipe(gulpif(env === 'dev', sourcemaps.init()))
   .pipe(concat('main.min.js', {newLine: ';'}))
   .pipe(gulpif(env === 'prod', babel({
       presets: ['@babel/env']
     })))
   .pipe(gulpif(env === 'prod', uglify()))
   .pipe(gulpif(env === 'dev', sourcemaps.write()))
   .pipe(dest(DIST_PATH))
   .pipe(reload({ stream: true }));
});
 
task('icons', () => {
 return src('src/image/**/*.svg')
   .pipe(svgo({
     plugins: [
       {
         removeAttrs: {
           attrs: '(fill|stroke|style|width|height|data.*)'
         }
       }
     ]
   }))
  //  .pipe(svgSprite({
  //    mode: {
  //      symbol: {
  //        sprite: 'src/styles/scss/svg/sprite.svg'
  //      }
  //    }
  //  }))

  
   .pipe(dest(`${DIST_PATH}/images/icons`));
});

task('icons', () => {
  return src('src/icons-svg/*.svg')
      .pipe(svgSprite({ // спрайт svg
          mode: {
              symbol: {
                  sprite: '../sprite.svg'
              }
          }
      }))
      .pipe(dest('dist/icons-svg'));
});

task('img', () => { // таск для подключения картинок 
  return src('src/image/**/*.*')
      .pipe(dest('dist/image'))
});

task('video', () => { // таск для подключения видео 
  return src('src/video/*.*')
      .pipe(dest('dist/video'));
      // .pipe(dest('${DIST_PATH}/video'));
});
 
task('server', () => {
 browserSync.init({
     server: {
         baseDir: "./dist"
     },
     open: false
 });
});
 
task('watch', () => {
 watch('./src/styles/**/*.scss', series('styles'));
 watch('./src/*.html', series('copy:html'));
 watch('./src/scripts/*.js', series('scripts'));
 watch('./src/image/**/*.svg', series('icons'));
 watch('./src/img/**', series('img')); // слежка за папкой img
});
 
 
task('default',
 series(
   'clean',
   parallel('copy:html', 'video', 'styles', 'scripts', 'icons', 'img'),
   parallel('watch', 'server')
 )
);
 
task('build',
 series(
   'clean',
   parallel('copy:html', 'video', 'styles', 'scripts', 'icons', 'img'))
);
