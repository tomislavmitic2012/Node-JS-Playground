var path = require('path'),
    fs = require('fs'),
    http = require('http');

http.createServer(function(req,res) {
  var file = path.normalize(req.url);
  path.exists(file,function(exists) {
    if (exists) {
      fs.stat(file, function(err,stat) {
	var rs;

	if (err) { throw err; }

	if (stat.isDirectory()) {
	  res.writeHead(403);
	  res.write(req.url + '\n');
	  res.end('Forbidden!');
	} else {
	  rs = fs.createReadStream(file);
	  res.writeHead(200);
	  rs.pipe(res);
	}
      });
    } else {
      res.writeHead(404);
      res.write(req.url + '\n');
      res.end('Not found!');
    }
  });
}).listen(4000);
