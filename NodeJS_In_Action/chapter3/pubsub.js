var events = require('events'),
    net = require('net');

var channel = new events.EventEmitter();
channel.clients = {};
channel.subscriptions = {};
channel.setMaxListeners(50);

channel.on('join', function(id, client) {
  var self = this;

  var welcome = 'Welcome!\n' +
      'Guests online: ' + self.listeners('broadcast').length;
  client.write(welcome + '\n');

  self.clients[id] = client;
  self.subscriptions[id] = function(senderId, message) {
    if (id != senderId) {
      self.clients[id].write(message);
    }
  }
  self.on('broadcast', self.subscriptions[id]);
});

channel.on('leave', function(id) {
  var self = this;
  channel.removeListener('broadcast', self.subscriptions[id]);
  channel.emit('broadcast', id, id + ' has left the chat.\n');
});

var server = net.createServer(function(client) {
  var id = client.remoteAddress + ':' + client.remotePort;
  client.on('connect', function() {
    channel.emit('join', id, client);
  });
  client.on('data', function(data) {
    data = data.toString();
    channel.emit('broadcast', id, data);
  });
  client.on('close', function() {
    channel.emit('leave', id);
  });
}).listen(8888);
