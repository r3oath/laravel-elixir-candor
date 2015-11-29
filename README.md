# laravel-elixir-candor
The official Candor Laravel Elixir plugin.

View the official project site for [Candor](http://r3oath.github.io/candor/)

# Installation

Run the following command inside your Laravel project folder

```bash
npm install --save laravel-elixir-candor
```

Inside your `gulpfile.js` add the following just below the line `var elixir = require('laravel-elixir');`

```javascript
require('laravel-elixir-candor');
```

Then simply call...

```javascript
mix.candor('dir/*.cdor', 'dir', {
    fileType: 'php',
});
```

The first option passed is the `.cdor` (candor) files to parse. It automatically adds the path `resources/assets/candor/` to the front of it.

The second option is where to output the HTML files, the path `resources/views/` is automatically added to the front.

The third option is optional, and allows you to specify the file type of the generated HTML files, if the default type of `html` is not right for your needs.