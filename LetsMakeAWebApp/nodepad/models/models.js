var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    crypto = require('crypto'),
    User, LoginToken;

/**
  * Model: Document
  */
Document = new Schema({
  'title': { type: String, index: true },
  'data': String,
  'tags': [String],
  //'keywords': [String],
  'user_id': ObjectId
});

Document.virtual('id').get(function() {
  var self = this;
  return self._id.toHexString();
});

/**
  * Model: User
  */
var validatePresenceOf = function(value) {
  return value && value.length;
};

User = new Schema({
  'email': {
    type: String, 
    validate: [validatePresenceOf, 'an email isrequired'],
    index: { 
      unique: true
    }
  },
  'hashed_password': String,
  'salt': String
});

User.virtual('id').get(function() {
  var self = this;
  return self._id.toHexString();
});

User.virtual('password').set(function(password) {
  var self = this;
  self._password = password;
  self.salt = self.makeSalt();
  self.hashed_password = self.encryptPassword(password);
}).get(function() {
  var self = this;
  return self._password;
});

User.method('authenticate', function(plainText) {
  var self = this;
  return self.encryptPassword(plainText) === self.hashed_password;
});

User.method('makeSalt', function() {
  return Math.round((new Date().valueOf() * Math.random())) + '';
});

User.method('encryptPassword', function(password) {
  var self = this;
  return crypto.createHmac('sha1', self.salt).update(password).digest('hex');
});

User.pre('save', function(next) {
  var self = this;
  if (!validatePresenceOf(self.password)) {
    next(new Error('Invalid Password!'));
  } else {
    next();
  }
});

exports.Document = function(db) {
  return db.model('Document', Document);
};

exports.User = function(db) {
  return db.model('User', User);
};
