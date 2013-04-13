var Todo = function () {
  var self = this;

  self.defineProperties({
    'title': {'type': 'string', 'required': true},
    'id': {'type': 'string', 'required': true},
    'status': {'type': 'string', 'required': true}
  });

  self.validatesPresent('title');
  self.validatesLength('title', {'min': 5});

  self.validatesWithFunction('status', function(status) {
    return status === 'open' || status === 'done';
  });
};

Todo = geddy.model.register('Todo', Todo);
