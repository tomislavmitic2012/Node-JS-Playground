var server = require('./server'),
    router = require('./router'),
    requestHandlers = require('./requestHandlers');

var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/show'] = requestHandlers.show;

// Injecting the router into the server
server.start(router.route, handle);
