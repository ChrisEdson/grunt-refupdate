'use strict';

var grunt = require('grunt');

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
    default_options: function(test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/default_options');
        var expected = grunt.file.read('test/expected/default_options');
        test.equal(actual, expected, 'should describe what the default behavior is.');

        test.done();
    },
    custom_iterator: function(test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/custom_iterator');
        var expected = grunt.file.read('test/expected/custom_iterator');
        test.equal(actual, expected, 'should describe what custom iterator behavior is.');

        test.done();
    },
    no_output: function(test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/temp_input');
        var expected = grunt.file.read('test/expected/default_options');

        test.equal(actual, expected, 'should have overwritten the original file.');

        test.done();
    }
};
