var fs = require('fs');

fs.open(__dirname + '/a.txt','w',function(err,fd) {
  if (err) { throw err; }
  var buffer = new Buffer('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'),
      written = 0;

  (function writeIt() {
    fs.write(fd,buffer,0 + written,buffer.length - written,0 + written,function(err,bytesWritten) {
      if (err) { throw err; }
      written += bytesWritten;
      if (written === buffer.length) {
	console.log('done!');
      } else {
	writeIt();
      }
    });
  }());
});
