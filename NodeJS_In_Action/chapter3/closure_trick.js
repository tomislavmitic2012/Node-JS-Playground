//  an example of using an anonymous function to preserve a global
// variables value
function asyncFunction(callback) {
  setTimeout(function() {
    callback();
  }, 200);
}

var color = 'blue';

(function(color) {
  asyncFunction(function() {
    console.log('The color is ' + color);
  });
}(color));

color = 'green';
