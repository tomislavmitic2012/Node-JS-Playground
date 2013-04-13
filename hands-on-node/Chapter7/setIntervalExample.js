var period = 1000;  // 1 second
var interval = setInterval(function() {
  console.log('tick');
}, period);

setTimeout(function() {
  clearInterval(interval);
},period * 5);
