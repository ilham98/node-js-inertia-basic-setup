const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .js("client/index.js", "public/js/app.js")
  .react()
  //   .sass("resources/css/app.scss", "public/css", [
  //     //
  //   ])
  .sourceMaps()
  .webpackConfig({
    output: {
      chunkFilename: "js/[name].js?id=[chunkhash]",
    },
  });
