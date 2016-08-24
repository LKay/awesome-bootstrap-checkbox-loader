awesome-bootstrap-checkbox-loader
=================================
[Awesome Bootstrap Checkout](https://github.com/flatlogic/awesome-bootstrap-checkbox) configuration and loading package for webpack, using Sass and Less.

Usage
-----

### Complete Awesome Bootstrap Checkout

To use the complete `awesome-bootstrap-checkbox` package including all styles with the default settings:

``` javascript
require("awesome-bootstrap-checkbox-loader");
```

The `require` statement should be present in your application code(Entry file or any other file required in entry file) and not in webpack.config.js.

### Custom configuration

You can configurate `awesome-bootstrap-loader` with two configuration files depending on which (`sass` or `less`) compiler you are using:

**Sass**
```
awesome-bootstrap-checkbox.config.js
awesome-bootstrap-checkbox.config.scss
```

**Less**
```
awesome-bootstrap-checkbox.config.js
awesome-bootstrap-checkbox.config.less
```

Add both files *next to each other* in your project. Then:

``` javascript
require("awesome-bootstrap-checkbox-loader!./path/to/awesome-bootstrap-checkbox.config.js");
```

Or simple add it as entry point to your `webpack.config.js`:

``` javascript
module.exports = {
  entry: [
    "awesome-bootstrap-checkbox-loader!./path/to/awesome-bootstrap-checkbox.config.js",
    "your-existing-entry-point"
  ]
};
```

### Configuration Files

##### `awesome-bootstrap-checkbox.config.js`

Example:

``` javascript
module.exports = {
  compiler: "sass",
  styleLoader: "style-loader!css-loader!sass-loader",
  styles: {
    checkbox: true,
    radio: false
  }
};
```

##### `font-awesome.config.scss` or `font-awesome.config.scss`

Imported after Font-Awesome's default variables, but before anything else.

You may customize `awesome-bootstrap-checkbox` here.

Example:

**Sass**
```scss
$check-icon: "\f00d";
```
**Less**
```less
@check-icon: "\f00d";
```


### extract-text-webpack-plugin

Configure style loader in `awesome-bootstrap-checkbox.config.js`.

Example:

``` javascript
module.exports = {
  compiler: "sass",
  styleLoader: require('extract-text-webpack-plugin').extract('style-loader', 'css-loader!sass-loader'),
  styles: true
};
```

Install `extract-text-webpack-plugin` before using this configuration.


## Credits

- Based on [font-awesome-loader](https://github.com/shakacode/font-awesome-loader) (shakacode)
