'use strict';

var grunt = require('grunt');
// var refupdate = require('../tasks/refupdate.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.refupdate = {
    single_replace: function(test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/single_replace');
        var expected = grunt.file.read('test/expected/single_replace');
        test.equal(actual, expected, 'should replace one reference');

        test.done();
    },
    multi_replace: function(test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/multi_replace');
        var expected = grunt.file.read('test/expected/multi_replace');
        test.equal(actual, expected, 'should replace multiple references');

        test.done();
    },
    custom_iterator: function(test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/custom_iterator');
        var expected = grunt.file.read('test/expected/custom_iterator');
        test.equal(actual, expected, 'should iterate by 5');

        test.done();
    },
    no_output: function(test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/temp_input');
        var expected = grunt.file.read('test/expected/single_replace');

        test.equal(actual, expected, 'should have overwritten the original file.');

        test.done();
    }
};
