var fs = require('fs');

// Appender
var startAppender = function(fd,startPos) {
  var pos = startPos;

  return {
    append: function(buffer,callback) {
      var written = 0,
	  oldPos = pos;

      pos += buffer;
      (function tryWriting() {
	if (written < buffer.length) {
	  fs.write(fd,buffer,written,buffer.length - written, oldPos + written, function(err,bytesWritten) {
	    if (err) { callback(err); return; }
	    written += bytesWritten;
	    tryWriting();
	  });
	} else {
	  // we have finished
	  callback(null);
	}
      }());
    }
  };
};

exports.startAppender = startAppender;
