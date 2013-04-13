// start append client
var fs = require('fs'), 
    fileAppender = require('./appender.js');

fs.open('./test.txt','a',function(err,fd) {
  if (err) { throw err; }

  fs.fstat(fd,function(err,stats) {
    if (err) { throw err; }
    console.log(stats);
    var appender = fileAppender.startAppender(fd,stats.size);
    appender.append(new Buffer('append this!\n'), function(err) {
      console.log('appended!');
    });
  });
});
