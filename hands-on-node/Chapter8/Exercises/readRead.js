var fs = require('fs');

fs.open(__dirname + '/syslog','r',function(err,fd) {
  if (err) { throw err; }
  readSome = function(startingAt,byteCount,callback) {
    var buffer = new Buffer(byteCount),
	readBytes = 0;

    (function readIt() {
      fs.read(fd,buffer,readBytes,buffer.length - readBytes,startingAt + readBytes,function(err,bytesRead) {
	if (err) { throw err; }
	readBytes += bytesRead;
	if (readBytes === buffer.length) {
	  callback(buffer);
	} else {
	  readIt();
	}
      });
    }());
  };

  readSome(5,4,function(buffer1) {
    console.log(buffer1.toString());
    readSome(10,4,function(buffer2) {
      console.log(buffer2.toString());
    });
  });
});
