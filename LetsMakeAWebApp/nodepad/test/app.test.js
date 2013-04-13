// Run $ expresso

// Force test environment
process.env.NODE_ENV = 'test';

/**
 *  Module dependencies.
 */
var app = require(__dirname + '/../app'),
    assert = require('assert');

var createDocument = function(title, after) {
  var d = new app.Document({title: title});
  d.save(function() {
    var lastID = d['_id'].toHexString();
    after(lastID);
  });
};

module.exports = {
  'Test registration': function(beforeExit) {
    assert.response(app, {
      url: '/users.json',
      method: 'POST',
      data: JSON.stringify({
	user: {
	  email: 'tom@example.com',
	  password: 'test'
	}
      }),
      headers: {
	'Content-Type': 'applicaiton/json; charset=utf-8'
      }
    }, {
      status: 200,
      headers: {
	'Content-Type': 'application/json; charset=utf-8'
      }
    },
    function(res) {
      var user = JSON.parse(res.body);
      assert.equal('tom@example.com', user.email);
    });
  },

  'Test login': function(beforeExit) {
    assert.response(app, {
      url: '/session',
      method: 'POST',
      data: JSON.stringify({
	user: {
	  email: 'tom@example.com',
	  password: 'test'
	}
      }),
      headers: {
	'Content-Type': 'application/json; charset=utf-8'
      }
    }, {
      status: 302,
      headers: {
	'location': '/documents'
      }
    });
  },

  'Test document index': function(beforeExit) {
    assert.response(app,
      { 
	url: '/documents.json',
	method: 'POST',
	headers: { 'Content-Type': 'application/json; charset=utf-8' }
      },
      { 
	status: 200, 
      },
      function(res) {
        assert.includes(res['body'], '<title>NodePad</title>');
    });
  },

  'POST /documents.json': function(beforeExit) {
    assert.response(app, 
      {
	url: '/documents.json',
	method: 'POST',
	data: JSON.stringify({
	  d: {
	    title: 'Test'
	  }
	}),
	headers: {
	  'Content-Type': 'application/json; charset=utf-8'
	}
      }, {
	status: 200,
	headers: {
	  'Content-Type': 'application/json; charset=utf-8'
	}
      },
      function(res) {
	var d = JSON.parse(res.body);
	assert.equal('Test', d.title);
    });
  },

  'HTML POST /documents': function(beforeExit) {
    assert.response(app, 
      {
	url: '/documents',
	method: 'POST',
	data: 'd[title]=Test',
	headers: {
	  'Content-Type': 'application/x-www-form-urlencoded'
	}
      }, {
	status: 302,
	headers: {
	  'Content-Type': 'text/html'
	}
    });
  },

  'GET /documents/id.json': function(beforeExit) {

  },

  'GET /documents.json and delete them all': function(beforeExit) {
    assert.response(app,
      {
	url: '/documents.json',
	method: 'GET'
      },
      {
	status: 200,
	headers: {
	  'Content-Type': 'application/json; charset=utf-8'
	}
      },
      function(res) {
	var documents = JSON.parse(res.body);
	assert.type(documents, 'object');

	documents.forEach(function(doc) {
	  app.Document.findById(doc._id, function(err, d) {
	    d.remove();
	  });
	});
    });
  },

  'GET /': function(beforeExit) {
    assert.response(app, {
      url: '/',
      method: 'GET'
    },
    {
      status: 302
    });
  }
};

setTimeout(function() {
  process.exit();
}, 1000);
