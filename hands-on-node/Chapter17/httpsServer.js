var https = require('https'),
    fs = require('fs');

var options = {
  key: fs.readFileSync('/home/tmitic/Node-JS-Playground/hands-on-node/Chapter16/Exercises/Exercise2/server-key.pem'),
  cert: fs.readFileSync('/home/tmitic/Node-JS-Playground/hands-on-node/Chapter16/Exercises/Exercise2/server-cert.pem')
};

https.createServer(options, function(req,res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);
