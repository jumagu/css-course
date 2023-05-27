function task(done) {
  console.log("Desde mi primer tarea");
  done();
}

const { src, dest, watch, series } = require("gulp");

// CSS y SASS
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

// Imagenes
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const avif = require("gulp-avif");

//sourcemaps
const sourcemaps = require("gulp-sourcemaps");

//Css Nano
const cssnano = require("cssnano");

//Función para compilar sass a css
function css(done) {
  // compilar sass
  //pasos: 1 - Identificar el archivo, 2 -compilar el archivo, 3 - guardar el css
  src("src/scss/App.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write("."))
    .pipe(dest("build/css"));
  done();
}

//tarea que procesa las imágenes
function images() {
  return src("src/img/**/*")
    .pipe(imagemin({ optimizationLevel: 3 }))
    .pipe(dest("build/img"));
}

//Convertir a Webp
function webpImgs() {
  const options = {
    quality: 50,
  };
  return src("src/img/**/*.{png,jpg}")
    .pipe(webp(options))
    .pipe(dest("build/img"));
}

//Convertir a Avif
function avifImgs() {
  const options = {
    quality: 50,
  };
  return src("src/img/**/*.{png,jpg}")
    .pipe(avif(options))
    .pipe(dest("build/img"));
}

//función watch para guardar los cambios automaticamente
function dev() {
  watch("src/scss/**/*.scss", css);
  watch("src/img/**/*", images);
}

exports.firstTask = task;
exports.css = css;
exports.dev = dev;
exports.img = images;
exports.webpImgs = webpImgs;
exports.avifImgs = avifImgs;
exports.default = series(images, webpImgs, avifImgs, css, dev);

// series - se inicia una tarea, y hasta que finaliza, incia la siguiente
// parallel - todas inician al mismo tiempo
