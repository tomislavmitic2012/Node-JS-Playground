var http = require('http'),
    url = require('url');

// dependency injection of the router
var start = function(route, handle) {
  var onRequest = function(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + ' received!');
    route(handle, pathname, response, request);
  };

  http.createServer(onRequest).listen(8888);

  console.log('Server has started.');
};

exports.start = start;
