function horse_race( success, failure ) {
  var victory = Math.round( Math.random() );

  if ( victory ) {
    success();
  } else {
    failure();
  }
}

horse_race(
  function() { console.log( 'Goodness! I won!' ); },
  function() { console.log( 'Drat. I lost.' ); }
);
