var fs = require('fs');

fs.open(__dirname + '/syslog','r',function(err,fd) {
  if (err) { throw err; }
  var buffer = new Buffer(5),
      readBytes = 0;
  (function readIt() {
    fs.read(fd,buffer,readBytes,buffer.length - readBytes,10 + readBytes,function(err,bytesRead) {
      if (err) { throw err; }
      readBytes += bytesRead;
      if (readBytes === buffer.length) {
	console.log(buffer.toString());
      } else {
	readIt();
      }
    });
  }());
});
