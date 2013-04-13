//  an example of the use of multiple callbacks as arguments to a single asynchrounous function
function doSomething() {
  var num = Math.floor(Math.random() * 101);

  if ((num % 2) == 0) {
    return true;
  }
  return false;
}

function asyncFunction(err, success) {
  if (doSomething()) {
    success();
  } else {
    err();
  }
}

asyncFunction(
  function() { console.log('I am a failure :\('); },
  function() { console.log('I am a success :\)'); }
);
