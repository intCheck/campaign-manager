const db = require('../lib/db.js')
const Users = {};

const collection = function() {
  return db.collection('users')
}

Users.insert = function(user) {
  return collection().insert(user);
}

Users.find = function(query) {
  const query = query || {};
  // the id can be undefined
  return collection().find(query);
}

Users.findByID = function(id) {
  return collection().findOne({_id : db.getMongoID(id)});
}

Users.update = function(query, updateFields) {
  return collection().update(query, {$set : updateFields});
}

Users.updateByID = function(id, updateFields) {
  return Users.update({_id : db.getMongoID(id)}, updateFields);
}

module.exports = Users;
