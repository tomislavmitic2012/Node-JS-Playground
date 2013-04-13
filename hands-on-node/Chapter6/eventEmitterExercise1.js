var util = require('util'),
    EventEmitter = require('events').EventEmitter;

var Ticker = function() {
  var self = this;

  setInterval(function() {
    self.emit('tick');
  }, 1000);
};
