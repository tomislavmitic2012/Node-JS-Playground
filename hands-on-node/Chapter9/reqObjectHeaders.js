var util = require('util');

require('http').createServer(function(req,res) {
  res.writeHead(200,{'Content-Type:':'text/plain'});
  res.write('\n');
  res.write(util.inspect(req.headers));
  res.end('\n');
}).listen(4000);
