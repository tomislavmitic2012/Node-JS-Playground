var fs = require('fs');

fs.stat(__dirname + '/syslog',function(err,stats) {
  if (err) { throw err; }
  console.log(stats.size);
});
