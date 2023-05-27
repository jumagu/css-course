Instalación de gulp
npm install --global gulp-cli

Instalar gulp en un proyecto
► primero debemos inicializar el package.json
► ejecutamos npm i --save-dev gulp
► Con gulp -v se verifica que se haya instalado correctamente
► crear el archivo gulpfile.js donde crearemos nuestra tareas

Tareas en Gulp
► las tareas son básicamente funciones de javascript
► para ejecutarlas se usa el nombre el exports
    > gulp firstTask

Instalación de dependencias de sass para usar con gulp
> npm i --save-dev sass gulp-sass

En el gulpfile.js se creará la tarea que compilará los archivos scss a css


Verisiones compatibles con navegadores que no soportan css de última generación
    npm i --save-dev autoprefixer gulp-postcss

npm i --save-dev gulp-imagemin
npm i -D gulp-imagemin@7.1.0 (deprecated)
npm i --save-dev gulp-webp
npm i --save-dev gulp-avif
npm i --save-dev gulp-sourcemaps
npm i --save-dev cssnano