var fs = require('fs');

var conn = require('net').createConnection('/tmp/tm_child_exercise.sock');

conn.on('fd',function(fileDesc) {
  fs.write(fileDesc,'this is the child! ',function() {
    conn.end();
  });
});
