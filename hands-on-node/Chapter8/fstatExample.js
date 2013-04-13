var fs = require('fs');

/*
 *  You can query some meta-info on a file (or dir) by
 *  using fs.stat
 */
fs.stat('/etc/passwd',function(err,stats) {
  if (err) { console.log(err.message); return; }

  console.log(stats);
  console.log('this file is ' + stats.size + ' bytes long.');
});
