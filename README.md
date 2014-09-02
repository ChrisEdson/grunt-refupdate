# grunt-refupdate [![Build Status](https://travis-ci.org/ChrisEdson/grunt-refupdate.svg?branch=master)](https://travis-ci.org/ChrisEdson/grunt-refupdate)

> Updates references in files to avoid caching of antiquated resources in production environments

## Getting Started

This plugin is designed to increment your asset references when loading from HTML.

When loading resources, in order to avoid caching, it is common practice to append a file release to the asset name.

```HTML
<head>
    ...
    <link type="text/css" href="css/app.min.css?r=1" rel="stylesheet">
    ...
</head>
```

When a new verson has been authored and ready to go to live, this file release is then incremented, e.g.:

```HTML
<link type="text/css" href="css/app.min.css?r=2" rel="stylesheet">
```

This plugin allows you to automate the incrementing of release numbers within your files when preparing to move your work to production.

This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-refupdate --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-refupdate');
```

## The "refupdate" task

### Overview
In your project's Gruntfile, add a section named `refupdate` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  refupdate: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

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
Install with:
```shell
$ npm install
```

Add unit tests for any new or changed functionality. Lint and test your code with:
```shell
$ grunt test
```

## Release History
* 0.1.1 - Sept 02, 2014 - Bug fixes, new tests
* 0.1.0 - Sept 02, 2014 - First release

## TODO
* Add type handling of options
* Add exception handling in tests
