var dgram = require('dgram');

var socket = dgram.createSocket('udp4', function(message,rinfo) {
  console.log(rinfo);
  console.log(message.toString());
  socket.send(message,0,message.lenght,rinfo.port,rinfo.address);
});

socket.bind(4001);
