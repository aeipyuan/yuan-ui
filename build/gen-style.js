/* gen-style.js */
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const components = require('./components.json')

function buildCss(cb) {
  gulp.src('../src/styles/index.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename('lime-ui.css'))
    .pipe(gulp.dest('../lib/styles'));
  cb()
}

exports.default = gulp.series(buildCss)

作者：罗辑思维前端开发团队
链接：https://juejin.cn/post/6844903929633849357
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。