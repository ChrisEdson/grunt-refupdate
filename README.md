# grunt-refupdate [![Build Status](https://travis-ci.org/ChrisEdson/grunt-refupdate.svg?branch=master)](https://travis-ci.org/ChrisEdson/grunt-refupdate)

> Updates reference numbers in files to avoid caching of obsolete resources on the clientside

## Getting Started

This plugin is designed to increment the file releases on your HTML asset references.

When loading resources, in order to avoid caching it is common practice to append a file release to the asset name.

```HTML
<head>
  ...
  <link type="text/css" href="app.css?r=1" rel="stylesheet">
  ...
</head>
```

When a new verson has been authored and ready to go to live, this file release is then incremented, e.g.:

```HTML
<link type="text/css" href="app.css?r=2" rel="stylesheet">
```

This plugin allows you to automate the incrementing of release numbers within your files when preparing to move your work to production.

This plugin requires Grunt `~0.4.5`. If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-refupdate --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-refupdate');
```

The plugin is on the NPM Repository [here](https://www.npmjs.org/package/grunt-refupdate).

## The "refupdate" task

### Overview
In your project's Gruntfile, add a section named `refupdate` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  refupdate: {
    options: {
      // Pass global options here
    },
    your_target: {
        options: {
          // Pass task specific options here
      }
    },
  },
});
```

### Example Usage

You have the following HTML, "views/index.html", referencing both CSS and Javascript files to load:
```HTML
<head>
  ...
  <link type="text/css" href="app.css?r=1" rel="stylesheet">
  ...
</head>
<body>
  ...
  <script type="text/javascript" src="app.js?r=1"></script>
</body>
```

You've just updated both of these files and want them to be pushed to a live environment. However, in their current state, the old versions may have been cached by the user. So let's update the references to "?r=2".

In order to match the release number, a regular expression is passed in to refupdate as an option. In this case, it will be:

```js
 /\?r=([0-9]+)/g
```

This will match both of the "?r=1" in the HTML and select the "1" as the number to iterate. You can see how this matches here: [Regex101](http://regex101.com/r/iJ2zN9/2). You can make the Regex as complex as you would like in order to make sure you're matching the correct text in your file.

You must also pass in the file location. Here, that's "views/index.html". The final refupdate configuration would look like:

```js
refupdate: {
  update_index: {
    options: {
      inputFile: "views/index.html",
      regex:  /\?r=([0-9]+)/g
    }
  }
}
```

If you wanted to increment the releases by something larger, say 5, pass "iterator: 5" as an option. If you wanted to create a new file rather than overwriting the original index.html, pass "outputFile: views/index2.html" as an option.

This plugin is most useful when used in a grunt chain when preparing a project for production; e.g. after file concatenation and minification.

### Options

#### options.inputFile

Type: `String`

The location of the file that you would like to use (relative to your project directory).

#### options.regex

Type: `Regular Expression`

The regular expression to select the string in your file that you would like incremented.

#### options.iterator (optional)

Type: `Integer`
Default value: `1`

The amount by which you'd like the reference to be updated.

#### options.outputFile (optional)

Type: `String`
Default value: `options.inputFile`

If you'd like a new output file, specify it here. Otherwise, the original input file will be overwritten.

## Contributing
Contributions very welcome! Install with:
```shell
$ npm install
```

Add unit tests for any new or changed functionality. Lint and test your code with:
```shell
$ grunt test
```

## Release History
* 0.1.3 - Sept 02, 2014 - Updated grunt dependencies
* 0.1.2 - Sept 02, 2014 - Updated Readme
* 0.1.1 - Sept 02, 2014 - Bug fixes, new tests
* 0.1.0 - Sept 02, 2014 - First release

## TODO
* Add type handling of options
* Add exception handling in tests
* Fix handling of numbers before group matching
