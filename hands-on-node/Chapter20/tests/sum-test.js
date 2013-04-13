require('should');
var assert = require('assert');
var sum = require('../module.js');

module.exports.testSumToZero = function() {
  sum(0, 5).should.equal(5);
};

module.exports.testSumToZero2 = function() {
  sum(5, 0).should.equal(5);
};

module.exports.someSomes = function() {
  sum(1, 1).should.equal(2);
  sum(1, 2).should.equal(3);
  sum(2, 1).should.equal(3);
  sum(10, 120).should.equal(130);
};

module.exports.testAsync = function(beforeExit) {
  var n = 0;
  setTimeout(function() {
    ++n;
    assert.ok(true);
  },200);
   setTimeout(function() {
    ++n;
    assert.ok(true);
  },200);
  beforeExit(function() {
    assert.equal(2, n, 'Ensure both timeouts are called');
  });
};
