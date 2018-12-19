let mix = require('laravel-mix'),
    build = require('./taro.build.js');

mix.disableNotifications();
mix.webpackConfig({
    plugins: [
        build.taro
    ]
});

mix.setPublicPath('./')
   .js('resources/assets/js/app.js', 'dist/assets/js')
   .sass('resources/assets/sass/app.scss', 'dist/assets/css')
   .options({
       processCssUrls: false
   })
   .version();

mix.browserSync();