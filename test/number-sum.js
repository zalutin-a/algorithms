var assert = require('assert');
const sum = require('../src/number-sum.js');

describe('Numbers', function() {
  describe('sum of digits', function() {
    it('should return 14 for 2525', function() {
      assert.equal(sum(2525), 14);
    });
    it('should return 3 for 10101', function() {
      assert.equal(sum(10101), 3);
    });
    it('should return type number', function() {
      assert.equal(typeof sum(2525), 'number');
    });
  });
});