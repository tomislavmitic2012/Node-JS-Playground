var open = false;

setTimeout(function() {
  open = true;
}, 1000);

/*
 * We are setting a timeout that involes a function that will set the open variable
 * to true. This function is set to be triggered in one second. In the while loop below
 * we are waiting for the variable to become true. We can be lead to believe that in one
 * second the timeout will happen and set open to true, and that the while loop will stop
 * and that 'opened' will get printed. But this never happens, node will never execute the
 * timeout callback because the event loop is stuck on this while loop, never giving it a chance
 * to process the timeout event.
 */
while (!open) { 
  // wait 
}

console.log('opened!');
