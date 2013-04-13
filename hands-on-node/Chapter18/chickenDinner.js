var events = require('events');

module.exports = Dummy;

function Dummy() {
  var self = this;
  events.EventEmitter.call(self);
}

Dummy.super = new process.EventEmitter();

Dummy.prototype = Object(events.EventEmitter.prototype, {
  constructor: {
    value: Dummy,
    enumerable: false
  }
});

Dummy.prototype.cooking = function(chicken) {
  var self = this;
  self['chicken'] = chicken;
  self['cook'] = function(chicken, cb) {
    cb(chicken);
  };      // assume dummy function that will do the cooking
  self['cook'](chicken, function(cooked_chicken) {
    self['chicken'] = cooked_chicken;
    self.emit('cooked');
  }); 
  return self;
}
