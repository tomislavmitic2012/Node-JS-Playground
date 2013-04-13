var Line = function(x1, y1, x2, y2) {
  var self = this;
  self['x1'] = x1;
  self['y1'] = y1;
  self['x2'] = x2;
  self['y2'] = y2;
};

Line.prototype.length = function() {
  var self = this;
  return Math.sqrt(
    Math.pow(Math.abs(self['x1'] - self['x2']), 2) +
    Math.pow(Math.abs(self['y1'] - self['y2']), 2)
  );
};

module.exports.create = function(x1, y1, x2, y2) {
  return new Line(x1, y1, x2, y2);
};
