var fs = require('fs');

var doWhatWasAsked = function(callback) {
  var self = this;
  self['buffer'] = new Buffer(10);

  var openA = function() {
    fs.open(__dirname + '/a.txt', 'r', readFromA);
  };

  var readFromA = function(err, fd) {
    if (err) { callback(err); return; }

    self['aFd'] = fd;
    fs.read(self['aFd'], self['buffer'], 0, 10, 10, openB);
  };

  var openB = function(err) {
    if (err) { callback(err); return; }
    fs.open(__dirname + '/b.txt', 'a', statB);
  };

  var statB = function(err, fd) {
    if (err) { callback(err); return; }
    self['bFd'] = fd;
    fs.fstat(self['bFd'], writeB);
  };

  var writeB = function(err, bStats) {
    if (err) { callback(err); return; }
    fs.write(self['bFd'], self['buffer'], 0, 10, bStats.size, callback);
  };

  openA();
};

console.log('Starting...');
doWhatWasAsked(function(err) {
  if (err) { throw err; }
  console.log('Done!');
});
