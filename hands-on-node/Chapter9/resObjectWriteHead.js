var util = require('util');

require('http').createServer(function(req,res) {
  res.writeHead(200, {
    'Content-Type':'text/plain',
    'Cache-Control':'max-age=3600'
  });
  res.end('\nHello World!\n');
}).listen(4000);
