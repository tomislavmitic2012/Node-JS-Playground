var fs = require('fs');

var options = {
  key: fs.readFileSync(__dirname + '/Exercise2/server-key.pem'),
  cert: fs.readFileSync(__dirname + '/Exercise2/server-cert.pem'),
};

require('tls').createServer(options, function(socket) {
  socket.on('data', function(data) {
    console.log(data.toString());
  });
  socket.pipe(socket);
}).listen(4001);
