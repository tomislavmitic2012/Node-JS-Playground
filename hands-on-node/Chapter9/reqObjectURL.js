require('http').createServer(function(req,res) {
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('\n' + req.url + '\n');
}).listen(4000);
