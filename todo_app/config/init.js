var mongo = require('mongodb-wrapper');

geddy.db = mongo.db('localhost', 27017, 'todo');
geddy.db.collection('todos');

// Add uncaught-exception handler in prod-like environments
if (geddy.config.environment != 'development') {
  process.addListener('uncaughtException', function (err) {
    geddy.log.error(JSON.stringify(err));
  });
}

geddy.todos = [];

//  create a blank model-adapter object, and added the Todo model adapter onto it
geddy.model.adapter = {};
geddy.model.adapter.Todo = require(process.cwd() + '/lib/model_adapters/todo').Todo;
