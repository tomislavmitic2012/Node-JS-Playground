var spawn = require('child_process').spawn;

require('fs').open(__dirname + '/example.txt','a', function(err,fileDesc) {
  var server = require('net').createServer(function(socket) {
    socket.write('Here you go!', fileDesc);
    socket.end();
    server.close();
  });

  server.listen('/tmp/tm_child_exercise.sock',function() {
    var child = spawn(process.argv[0],[__dirname + '/client.js']);
    child.on('exit',function() {
      console.log('child exited!');
    });
  });
});
