var sqrt = function( n ) {
  var r = 1;
  for( r = 1; r * r <= n; r++ ) { }
  
  if ( r * r == n ) {
    return r;
  } else {
    return r - 1;
  }
}
console.log( sqrt( 4294967296 ) );
