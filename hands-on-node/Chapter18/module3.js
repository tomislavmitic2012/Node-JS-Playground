var moduleA = require('./module1.js'),
    moduleB = require('./module2.js');

var myFunc = function() {
  return 'doing some crazy stuff!';
};

module.exports = {
  funcA: moduleA,
  funcB: moduleB.functionA,
  funcC: moduleB.functionB,
  funcD: myFunc
};
