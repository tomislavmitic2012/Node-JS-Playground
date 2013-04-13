var fs = require('fs'),
    http = require('http');

var sequence = 0;
http.createServer(function(req,res) {
  var fileName = '/home/tmitic/Node-JS-Playground/hands-on-node/Chapter9/Exercises/log/' + sequence + '.bin';
  console.log('writing ' + fileName + '\n');
  var writeStream = fs.createWriteStream(fileName);

  req.pipe(writeStream);
  req.on('end',function() {
    res.writeHead(200);
    res.end();
  });
  sequence++;
}).listen(3000);
