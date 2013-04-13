var fs = require('fs');

var options = {
  key: fs.readFileSync(__dirname + '/Exercise2/server-key.pem'),
  cert: fs.readFileSync(__dirname + '/Exercise2/server-cert.pem'), 
  requestCert: true,
  ca: [fs.readFileSync(__dirname + '/private/cakey.pem')]
};

require('tls').createServer(options, function(socket) {
  console.log('server conected', socket['authorized'] ? 'authorized' : 'unauthorized');
  socket.write("Welcome!\n");
  socket.setEncoding('utf8');
  socket.on('data', function(data) {
    console.log(data.toString());
  });
  socket.pipe(socket);
}).listen(4001, function() {
  console.log('server bound');
});
