var fs = require('fs'),
    events =  require('events'),
    watchDir = './watch',
    processedDir = './done';

function Watcher(watchDir, processedDir) {
  var self = this;

  self.watchDir = watchDir;
  self.processedDir = processedDir;
}

Watcher.prototype = new events.EventEmitter();

Watcher.prototype.watch = function() {
  var watcher = this;
  fs.readdir(watcher.watchDir, function(err, files) {
    if (err) throw err;
    for (index in files) {
      watcher.emit('process', files[index]);
    }
  });
}

Watcher.prototype.start = function() {
  var watcher = this;
  fs.watchFile(watcher.watchDir, function() {
    watcher.watch();
  });
}

//  Instantiate this bitch!!!!
var watcher = new Watcher(watchDir, processedDir);

watcher.on('process', function process(file) {
  var self = this;

  var watchFile = self.watchDir + '/' + file;
  var processedFile = self.processedDir + '/' + file.toLowerCase();

  fs.rename(watchFile, processedFile, function(err) {
    if (err) throw err;
  });
});

//  Bootstrap this bitch
watcher.start();
