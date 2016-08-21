const db = require('../lib/db.js')
const Characters = {};

const collection = function() {
  return db.collection('characters')
}

Characters.insert = function(character) {
  return collection().insert(character);
}

Characters.find = function(query) {
  const query = query || {};
  // the id can be undefined
  return collection().find(query);
}

Characters.findByID = function(id) {
  return collection().findOne({_id : db.getMongoID(id)});
}

Characters.update = function(query, updateFields) {
  return collection().update(query, {$set : updateFields});
}

Characters.updateByID = function(id, updateFields) {
  return Characters.update({_id : db.getMongoID(id)}, updateFields);
}

module.exports = Characters;
