#!/usr/bin/env /home/tmitic/.nvm/v0.6.5/bin/node

var schedule = function(timeout, callbackfunction) {
  return {
    start: function() {
      setTimeout(callbackfunction, timeout);
    }
  };
};

(function() {
  var timeout = 1000; // 1 second
  var count = 10;
  schedule(timeout, function doStuff() {
    console.log(++count);
    schedule(timeout, doStuff).start();
  }).start();
}());
