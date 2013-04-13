var events = require('events');

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

// This object will count up in intervals of 50ms 
// and emit a #prime event when a prime number is
// encountered.
function Counter() {
  this.interval   = 50;
  this.currentNum = 0;
}

// Add the EventEmitter to the object.
Counter.prototype = new events.EventEmitter();

// Self explanatory really.
Counter.prototype.count = function() {
  var self = this;
  if (self.currentNum.isPrime()) self.emit('prime');
  self.currentNum++;
};

Counter.prototype.run = function() {
  var self = this;
  setInterval(function(){
    self.count();
  },self.interval);
};

var counter = new Counter();

// Listen for the event and output
counter.on('prime',function(){
  var self = this;
  console.log(this.currentNum + ' is prime');
});

counter.run();

// http://twoism.posterous.com/emitting-events-with-nodejs
// http://howtonode.org/what-is-this
// http://howtonode.org/control-flow-part-ii
// http://howtonode.org/control-flow
// http://howtonode.org/demystifying-events-in-node
