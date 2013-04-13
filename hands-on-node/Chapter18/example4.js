var Line = require('./module4.js');

var line = Line.create(0, 0, 2, 0);

line.on('prime', function() {
  var self = this;
  console.log('Line Lenght is prime!'); 
});

line.length();

console.log('Length of the line is: ' + line['line_length']);
