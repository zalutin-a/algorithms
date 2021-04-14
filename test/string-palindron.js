var assert = require('assert');
const isPalindrom = require('../src/palindrom.js');

describe('Strings', function() {
  describe('palindrom', function() {
    it('should return true for Poop', function() {
      assert.equal(isPalindrom('Poop'), true);
    });
    it('should return true for poiop', function() {
      assert.equal(isPalindrom('poiop'), true);
    });
    it('should return true for 1poiop1', function() {
      assert.equal(isPalindrom('1poiop1'), true);
    });
    it('should return false for 1pziop1', function() {
      assert.equal(isPalindrom('1pziop1'), false);
    });
    it('should return false for hello', function() {
      assert.equal(isPalindrom('hello'), false);
    });
  });
});