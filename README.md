# Taro

[![Current Version](https://img.shields.io/packagist/v/aschmelyun/taro.svg?style=flat-square)](https://packagist.org/packages/aschmelyun/larametrics)
![License](https://img.shields.io/github/license/aschmelyun/taro.svg?style=flat-square)
[![Total Downloads](https://img.shields.io/packagist/dt/aschmelyun/taro.svg?style=flat-square)](https://packagist.org/packages/aschmelyun/taro)

A blazing-fast static site generator that uses JSON files for content and the Laravel Blade templating engine to.

A full version of the docs can be found [here](https://aschmelyun.com/taro/docs), below you'll find a quick 'Getting Started' guide.

![Screenshot of Taro building a site](https://i.imgur.com/Kxtpbcm.png)

## Requirements
- PHP 5.6.4 or higher 

## Installation
Starting a project with Taro is easy through Composer:

```bash
composer create-project aschmelyun/taro taro
```

After Composer finishes up, cd inside your project's root directory and install node dependencies:

```bash
npm install
```

From there you can build the demo site, which outputs to a `dist/` folder in your project root:

```bash
npm run dev
```

## Adding a page

Inside the `content/` directory you'll find a single hello-world.json file that you can reference or copy directly to create your new page. 

There are only two required properties that need to be set for the page to be built:

- **view:** The Laravel Blade file that the content data should be passed to. You can exclude `.blade.php` in the filename, and even substitute the forward slashes (/) in the path with periods (.). All template files are relative to the views folder in your project's resources directory, so if you had a file at `resources/views/blog/page.blade.php` you would use **"view": "blog.page"** in your content's JSON file.

- **slug:** This is the URL path relative to your root domain that you want the page published to. For example, if you wanted to create a page at `https://example.com/blog/this-cool-post` you would set the value of the slug property to **"/blog/this-cool-post"**. 

The rest of the properties in the JSON content file are directly passed as variables to your Blade file. If you have a property like **"foo": "bar"** calling `{{ $foo }}` in your Blade template will echo "bar".

You're not limited to just `key:value` strings either, you can add in arrays and objects as well and they'll translate over directly to variables that you can use in your Blade templates.

## Modifying your assets

By default, Taro uses SCSS files that are compiled to CSS during the build process. There's a basic skeleton structure set up in the `resources/assets/sass` directory, that uses bootstrap's grid and reset stylesheets to give you a clean (and lightweight) slate to work with.

There's a bootstrapped JavaScript file that imports lodash, jQuery, and Vue dependencies through npm to use with your project. That can be modified by editing the `resources/assets/js/app.js` file. Since we're using webpack to compile our assets, feel free to go crazy with modules and single-file components.

## Publishing your site

Once you're ready to publish your site, simply run the command:

```bash
npm run production
```

Which will minify your assets and build the site again with the new versioned files.

You can then publish your entire project to a host of your choice as long as the web root is pointed to the `/dist` folder. Additionally, you're free to just publish the built files in the dist folder by themselves.

## Roadmap
Taro is still very much in development, and while it's designed to remain as simple as possible there's a few features that could make for a better overall experience. Here's what's on the path ahead:

- [ ] Re-build after changes in assets or content files 
- [ ] Live reloading after changes in assets or content files
- [ ] Ability to use folders in content directory
- [ ] Translate content structure to site structure, so slug would just be an override and not required 
- [ ] Ability to add in and use HTML in JSON content files
- [ ] More detailed build errors if something goes wrong
- [ ] A better cli interface and style during site builds

## Contact Info

Have an issue? Submit it here! Want to get in touch? Feel free to reach out to me on [Twitter](https://twitter.com/aschmelyun) for any kind of general questions or comments.

## License

The MIT License (MIT). See [LICENSE.md](https://github.com/aschmelyun/taro/blob/master/LICENSE.md) for more details.