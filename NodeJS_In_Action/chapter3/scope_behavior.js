//  An example of how scope behavior can lead to bugs
function asyncFunction(callback) {
  setTimeout(function() {
    callback();
  }, 200);
}

var color = 'blue';

asyncFunction(function() {
  console.log('The color is ' + color);
});

color = 'green';
