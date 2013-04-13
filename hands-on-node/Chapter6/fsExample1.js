var fs = require('fs');	  // get the fs module

var readStream = fs.createReadStream('/etc/passwd');

// Instead of using the 'addListener' function you can also use 'on'
// which is exactly the same thing
readStream.on('data',function(data) {
  console.log(data.toString());
});

readStream.on('end',function() {
  console.log('file ended');
});

/*
 *  Here we are binding to the readStream's 'data' and 'end' events, passing in callback functions
 *  to handle each of these cases. When one of these events happens, the readStream will call the
 *  callback function we pass in.
 *
 *  You can either pass in an anonymous function as in the above case, or you can pass a function
 *  name for a fucntion available on the current scope, or even a variable containing a function.
 */
