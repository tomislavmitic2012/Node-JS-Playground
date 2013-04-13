var fs = require('fs');
var options = {
  key: fs.readFileSync(__dirname + '/client1/client.pem'),
  cert: fs.readFileSync(__dirname + '/client1/client_cert.pem'),
  ca: [fs.readFileSync(__dirname + '/private/cakey.pem')]
};

var client = require('tls').connect(4001, options, function(err) {
  client['connected'] = true;
  console.log('connected');
  process.stdin.resume();
  process.stdin.pipe(client);
  client.pipe(process.stdout, {end: false});
});
