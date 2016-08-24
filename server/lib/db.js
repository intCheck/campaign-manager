// Using promised-mongo:
const pmongo = require('promised-mongo');
const _ = require('lodash');
const mongoose = require('mongoose');


// Establish db
const dbName = process.env.NODE_ENV === 'production' ? process.env.MONGOLAB_URI : 'mongodb://localhost:27017/campaign_test';
const db = pmongo(dbName, ['users', 'characters']);
mongoose.connect(dbName, options);

// Delete everything function to clean database
db.deleteEverything = function () {
  return Promise.all([
    db.collection('characters').remove(),
    db.collection('users').remove()
  ])
  .then(function(result){
    console.log('removed characters/users from db', result)
  })
  .catch(function(error) {
    console.log('Error: ', error);
  })
}

db.getMongoID = function(idString) {
  return pmongo.ObjectId(idString);
}

db.loadSample = function(records, collectionName) {
  // Get the fixture from a file, this just an object
  // where the key is the collection name and the
  // value is an array of records to be inserted

  const samples = require('./sample.js');

  _.each(samples, function(sample, collectionName){
    db.collection(collectionName).find().then(function(items){
      console.log('items', items);
      // only insert if the collection is empty
      if(items.length === 0) {
        db.collection(collectionName).insert(sample);
      }
    })
  });
}

// Loading samples in a database, but not yet:
// db.loadSample(samples, 'Users');

module.exports = db;
