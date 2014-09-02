/*
 * grunt-refupdate
 * https://github.com/chrisedson/grunt-refupdate
 *
 * Copyright (c) 2014 Chris Edson
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove any previously-created files
        clean: {
            tests: ['tmp']
        },

        // Configuration to be run (and then tested)
        refupdate: {
            single_replace: {
                options: {
                    inputFile: "test/input/single_replace",
                    regex: /abc([0-9]+)u1d/,
                    outputFile: "tmp/single_replace"
                }
            },
            multi_replace: {
                options: {
                    inputFile: "test/input/multi_replace",
                    regex: /abc([0-9]+)u1d/g,
                    outputFile: "tmp/multi_replace"
                }
            },
            custom_iterator: {
                options: {
                    inputFile: "test/input/custom_iterator",
                    regex: /cabc([6535]+)xa/,
                    outputFile: "tmp/custom_iterator",
                    iterator: 5
                }
            },
            no_output: {
                options: {
                    inputFile: "tmp/temp_input",
                    regex: /abc([0-9]+)u1d/
                }
            }
        },

        // Unit tests
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Create temporary file to overwrite in testing
    grunt.registerTask('writeTemp', function() {
        grunt.file.write('tmp/temp_input', 'abc1235u1d\n');
    });

    grunt.registerTask('refupdateTests',
        ['refupdate:single_replace', 'refupdate:multi_replace', 'refupdate:custom_iterator', 'refupdate:no_output']);

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['jshint', 'clean', 'writeTemp', 'refupdateTests', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['test']);

};
