var spawn = require('child_process').spawn;

var child = spawn('tail',['-f','syslog']);
child.stdout.on('data',function(data) {
  console.log('stdout: ' + data.toString());
});

child.stderr.on('data',function(data) {
  console.log('stderr: ' + data);
});
