var net = require('net');

var sockets = [];

net.createServer(function(socket) {
  // Add every new connection to the socket array
  sockets.push(socket);

  // broadcast every message received to every client connection
  socket.on('data', function(data) {
    sockets.forEach(function(socket) {
      socket.write(data);
    });
  });

  // remove the client socket from the sockets array
  socket.on('end',function() {
    var pos = sockets.indexOf(socket);
    if (pos > 0) {
      sockets.splice(pos,1);
    }
  });
}).listen(4001);
