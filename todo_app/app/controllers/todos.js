var Todos = function () {
  var selfTodos = this;

  selfTodos.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  selfTodos.index = function (req, resp, params) {
    var self = this;

    geddy.model.adapter.Todo.all(function(err, todos) {
      self.respond({'params': params, 'todos': todos});
    });
  };

  selfTodos.add = function (req, resp, params) {
    var self = this;
    self.respond({'params': params});
  };

  selfTodos.create = function (req, resp, params) {
    var self = this, todo = geddy.model.Todo.create({
      'title': params.title,
      'id': geddy.string.uuid(10),
      'status': 'open'
    });
    todo.save(function(err, data) {
      if (err) {
        params.errors = err;
        self.transfer('add');
      } else {
        self.redirect({'controller': self.name});
      }
    });
  };

  selfTodos.show = function (req, resp, params) {
    var self = this;
    self.respond({'params': params});
  };

  selfTodos.edit = function (req, resp, params) {
    var self = this;

    geddy.model.Todo.load(params.id, function(err, todo) {
      self.respond({'params': params, 'todo': todo});
    });
  };

  selfTodos.update = function (req, resp, params) {
    var self = this;

    geddy.model.adapter.Todo.load(params.id, function(err, todo) {
      todo.status = params.status;
      todo.title = params.title;
      todo.save(function(err, data) {
	if (err) {
	  params.errors = err;
	  self.transfer('edit');
	} else {
	  self.redirect({'controller': self.name});
	}
      });
    });
  };

  selfTodos.remove = function (req, resp, params) {
    var self = this;

    geddy.model.adapter.Todo.remove(params.id, function(err) {
      if (err) {
	params.errors = err;
	self.transfer('edit');
      } else {
	self.redirect({'controller': self.name});
      }
    });
  };
};

exports.Todos = Todos;
