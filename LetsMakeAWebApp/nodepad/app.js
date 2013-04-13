
/**
 * Module dependencies.
 */
var express = require('express'),
    app = module.exports = express.createServer(),
    mongoose = require('mongoose'),
    mongoStore = require('connect-mongodb'),
    util = require('util'),
    db,
    Document,
    User,
    Settings = {
      development: {},
      test: {},
      production: {}
    };

app.configure('development', function() {
  app.set('db-uri', 'mongodb://localhost/nodepad-development');
  app.use(express.errorHandler({
    dumpExceptions: true
  }));
});

app.configure('production', function() {
  app.set('db-uri', 'mongodb://localhost/nodepad-production');
});

app.configure('test', function() {
  app.set('db-uri', 'mongodb://localhost/nodepad-test');
});

// Set MongoDB connection
db = mongoose.connect(app.set('db-uri'));

// Configuration

app.configure(function() {
  app.set('views', __dirname + '/views');
  app.use(express.favicon());
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.session({
    store: mongoStore(app.set('db-uri')),
    secret: 'topsecret'
  }));
  app.use(express.logger({
    format: '\x1b[1m:method\x1b[0m \x1b[33m:url\x1b[0m :response-time ms'
  }));
  app.use(express.methodOverride());
  app.use(express.compiler({
    src: __dirname + '/public',
    enable: ['less']
  }));
  app.use(express.static(__dirname + '/public'));
});

// Some Dependency injection baby
app.Document = Document = require(__dirname + '/models/models').Document(db);
app.User = User = require(__dirname + '/models/models').User(db);

var loadUser = function(req, res, next) {
  if (req.session.user_id) {
    User.findById(req.session.user_id, function(err, user) {
      if (user) {
	req.currentUser = user;
	next();
      } else {
	res.redirect('/sessions/new');
      }
    });
  } else {
    res.redirect('/sessions/new');
  }
};

// Routes

// Home
app.get('/', loadUser, function(req, res) {
  res.redirect('/documents');
});

// Error handling
var NotFound = function(msg) {
  var self = this;
  self.name = 'NotFound';
  Error.call(self, msg);
  Error.captureStackTrace(self, arguments.callee);
};

util.inherits(NotFound, Error);

app.get('/404', function(req, res) {
  throw new NotFound
});

app.get('/500', function(req, res) {
  throw new Error('An unexpected error');
});

app.get('/bad', function(req, res) {
  unknownMethod();
});

app.error(function(err, req, res, next) {
  if (err instanceof NotFound) {
    res.render('404.jade', {status: 404});
  } else {
    next(err);
  }
});

app.error(function(err, req, res) {
  res.render('500.jade', {
    status: 500,
    locals: {
      error: err
    }
  });
});

// Document list
app.get('/documents.:format?', loadUser, function(req, res) {
  Document.find(function(err,documents) {
    switch(req.params.format) {
      case 'json':
	res.send(documents.map(function(d) {
	  return d;
	}));
      break;

      default:
	res.render('documents/index', {
	  locals: {
	    documents: documents,
	    currentUser: req.currentUser
	  }
	});
    }
  });
});

// Edit Document
app.get('/documents/:id.:format?/edit', loadUser, function(req, res, next) {
  Document.findById(req.params.id, function(err, d) {
    if (!d) {
      return next(new NotFound('Document not found!'));
    }
    res.render('documents/edit', {
      locals: {
	d: d,
	currentUser: req.currentUser
      }
    });
  });
});

// New document
app.get('/documents/new', loadUser, function(req, res) {
  res.render('documents/new', {
    locals: { 
      d: new Document(),
      currentUser: req.currentUser
    }
  });
});

// Create document
app.post('/documents.:format?', loadUser, function(req, res) {
  var d = new Document(req.body.d);
  d.save(function() {
    switch(req.params.format) {
      case 'json':
	res.send(d);
      break;

      default:
	res.redirect('/documents');
    }
  });
});

// Show document
app.get('/documents/:id.:format?', loadUser, function(req, res, next) {
  Document.findById(req.params.id, function(err, d) {
    if (!d) {
      return next(new NotFound('Document not found!'));
    }
    switch(req.params.format) {
      case 'json':
	res.send(d);
      break;

      default:
	res.render('documents/show', {
	  locals: {
	    d: d,
	    currentUser: req.currentUser
	  }
	});
    }
  });
});

// Update document
app.put('/documents/:id.:format?', loadUser, function(req, res, next) {
  Document.findById(req.body.d.id, function(err, d) {
    if (!d) {
      return next(new NotFound('Document not found!'));
    }
    d['title'] = req.body.d.title;
    d['data'] = req.body.d.data;
    d.save(function() {
      switch(req.params.format) {
	case 'json':
	  res.send(d);
	break;

	default:
	  res.redirect('/documents');
      }
    });
  });
});

// Delete document
app.del('/documents/:id.:format?', loadUser, function(req, res, next) {
  Document.findById(req.params.id, function(err, d) {
    if (!d) {
      return next(new NotFound('Document not found!'));
    }
    d.remove(function() {
      switch(req.params.format) {
	case 'json':
	  res.send('true');
	break;

	default:
	  res.redirect('/documents');
      }
    });
  });
});

// Users

app.get('/users/new', function(req, res) {
  res.render('users/new', {
    locals: {
      user: new User()
    }
  });
});

app.post('/users.:format?', function(req, res) {
  var user = new User(req.body.user);

  var userSaveFailed = function() {
    // TODO: Show error messages
    res.render('users/new', {
      locals: {
	user: user
      }
    });
  };

  user.save(function(err) {
    if (err) {
      return userSaveFailed();
    }

    switch(req.params.format) {
      case 'json':
	res.send(user.toObject());
      break;

      default:
	req.session.user_id = user.id;
	res.redirect('/documents');
    }
  });
});

// Sessions

app.get('/sessions/new', function(req, res) {
  res.render('sessions/new', {
    locals: {
      user: new User()
    }
  });
});

app.post('/sessions', function(req, res) {
  User.findOne({
    email: req.body.user.email
  }, function(err, user) {
    if (user && user.authenticate(req.body.user.password)) {
      req.session.user_id = user.id;
      res.redirect('/documents');
    } else {
      // TODO: Show error
      res.redirect('/sessions/new');
    }
  })
});

app.del('/sessions', loadUser, function(req, res) {
  if (req.session) {
    req.session.destroy(function() {});
  }
  res.redirect('/sessions/new');
});

if (!module.parent) {
  app.listen(3000);
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
}
