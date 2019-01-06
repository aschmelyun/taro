let mix = require('laravel-mix'),
    build = require('./taro.build.js'),
    command = require('node-cmd');

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

mix.browserSync({
    files: [
        {
            match: ["content/*.json"],
            fn: function(event, file) {
                command.get('php taro build', (error, stdout, stderr) => {
                    console.log(error ? stderr : stdout);
                });
            }
        }
    ]
});