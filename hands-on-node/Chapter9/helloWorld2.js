require('http').createServer(function(req,res) {
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('\nHello World!\n');
}).listen(4000);
