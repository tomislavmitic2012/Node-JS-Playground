var http = require('http'),
    mysql = require('mysql');

var client = mysql.createClient({
  user: 'lrngsql',
  password: '111879'
});

client.useDatabase('bank');

http.createServer(function(req, res) {
  if (req.url == '/') {
    client.query("select * from employee order by start_date desc limit 5", function(err, results, fields) {
      if (err) throw err;

      var output = '<html><head><title>Tom\'s cool mysql thing</title></head><body>' +
	  '<h1>Bank Employees</h1>' +
	  '<ul>';

      for (var index in results) {
	output += '<li>' + results[index].emp_id + ' ' +
		  results[index].fname + ' ' + results[index].lname + ' ' +
		  results[index].start_date + ' ' + results[index].title + ' ' +
		  results[index].assigned_branch_id;
      }
      output += '</ul></body></html>';
      console.log(output);

      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(output);
    });
  }
}).listen(8080, '127.0.0.1');
