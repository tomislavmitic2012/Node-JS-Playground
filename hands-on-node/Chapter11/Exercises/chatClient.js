var net = require('net');

if (process.argv.length < 4) {
  console.log('Usage: ' + process.argv[0] + ' ' +
    process.argv[1] + ' <host> <port>');
  return;
}

var host = process.argv[2],
    port = process.argv[3];

// create connection to chat server
var conn = net.createConnection(port,host);

process.stdin.resume();
// pipe the process stdin into the socket
process.stdin.pipe(conn);
// to print what we get from the server, pipe
// the socket into the process
conn.pipe(process.stdout, {end:false});
