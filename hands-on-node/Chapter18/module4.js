var util = require('util'),
    events = require('events');

// Quick and dirty prime checking.
Number.prototype.isPrime = function () {
  var i = 2;
  while (i<=this - 1) {
    if (this % i ==0) {
      return false;
      break;
    }
    i++;
  }
  if (i == this) {
    return true;
  }
};

var Line = function(x1, y1, x2, y2) {
  var self = this;
  self['x1'] = x1;
  self['y1'] = y1;
  self['x2'] = x2;
  self['y2'] = y2;
};

Line.prototype = new events.EventEmitter();

Line.prototype.length = function() {
  var self = this;
  var length = Math.sqrt(
    Math.pow(Math.abs(self['x1'] - self['x2']), 2) +
    Math.pow(Math.abs(self['y1'] - self['y2']), 2)
  );
  if (length.isPrime()) {
    self.emit('prime');
  }
  self['line_length'] = length;
};

module.exports.create = function(x1, y1, x2, y2) {
  return new Line(x1, y1, x2, y2);
};
