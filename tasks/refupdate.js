/*
 * grunt-refupdate
 * https://github.com/chrisedson/grunt-refupdate
 *
 * Copyright (c) 2014 Chris Edson
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    grunt.registerMultiTask('refupdate',
        'Updates references in files to avoid caching of antiquated resources in production environments',
        function() {

            // Default values
            var options = this.options({
                iterator: 1,
            });

            // Set default output file to overwrite original if none specified
            options.outputFile = options.outputFile || options.inputFile;

            // Error if no file or regex specified
            if (options.inputFile === undefined) {
                grunt.log.error("No file specified in options");
                return false;
            } else if (options.regex === undefined) {
                grunt.log.error("No regex specified in option");
                return false;
            }

            // Error if no file found
            if (!grunt.file.exists(options.inputFile)) {
                grunt.log.error("File " + options.inputFile + " not found");
                return false;
            }

            var ref, newRef, fileContents, newContents;

            function increaseRef(match, group1) {
                // Increase reference
                ref = parseInt(group1);
                newRef = ref + options.iterator;

                var firstHalf = match.substring(0, match.indexOf(group1));
                var secondHalf = match.substring(match.indexOf(group1) + group1.length);

                grunt.log.writeln("Increased reference from " + ref + " to " + newRef);

                return firstHalf + newRef + secondHalf;
            }

            fileContents = grunt.file.read(options.inputFile);

            // Error if regex not found
            if (!options.regex.test(fileContents)) {
                grunt.log.error("Regex not found in file");
                return false;
            }
            newContents = fileContents.replace(options.regex, increaseRef);

            grunt.file.write(options.outputFile, newContents);

            if (options.outputFile !== options.inputFile) {
                grunt.log.writeln("Wrote new file, " + options.outputFile);
            } else {
                grunt.log.writeln("Re-wrote original file, " + options.inputFile);
            }

        });

};
