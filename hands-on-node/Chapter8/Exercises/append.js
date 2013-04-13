var fs = require('fs');

fs.open(__dirname + '/a.txt','a',function(err,fd) {
  if (err) { throw err; }
  var buffer = new Buffer('\nabc\n'),
      written = 0;

  (function writeIt() {
    fs.write(fd,buffer,0 + written,buffer.length - written,null,function(err,bytesWritten) {
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
