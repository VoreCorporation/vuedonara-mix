const mix = require('laravel-mix');

mix.setPublicPath('public')
  .js('resources/src/app.js', 'public/js')

mix.webpackConfig({
  resolve: {
    alias: {
      "@": path.resolve(
        __dirname,
        "resources"
      ),
      "@components": path.resolve(
        __dirname,
        "resources/src/components"
      ),
      "@store": path.resolve(
        __dirname,
        "resources/src/store"
      ),
      "@views": path.resolve(
        __dirname,
        "resources/src/views"
      ),
      "@router": path.resolve(
        __dirname,
        "resources/src/router"
      ),
      "@sass": path.resolve(
        __dirname,
        "resources/src/assets/sass"
      ),
      "@app-registry": path.resolve(
        __dirname,
        "resources/src/app"
      )
    }
  }
});