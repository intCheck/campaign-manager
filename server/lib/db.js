// Using promised-mongo:
const pmongo = require('promised-mongo');
// This is preemptive, if we are in production, we want to use heroku's db address. otherwise, lets use our local campaign_test
const dbName = process.env.NODE_ENV === 'production' ? process.env.MONGOLAB_URI : 'campaign_test';
// Establish db
const db = pmongo(dbName);
const _ = require('lodash');
const samples = require('./sample.js');

// Delete everything function to clean database
db.deleteEverything = function () {
  return Promise.all([
    db.collection('characters').remove(),
    db.collection('users').remove()
  ])
  .then(function(result){
    console.log('removed characters/users from db', result);
  })
  .catch(error) {
    console.log('Error: ', error);
  }
}

db.getMongoID = function(idString) {
  return pmongo.ObjectId(idString);
}

db.loadSample = function(records, collectionName) {
  // Get the fixture from a file, this just an object
  // where the key is the collection name and the
  // value is an array of records to be inserted

  _.each(samples, function(records, collectionName){
    db.collection(collectionName).find().then(function(items){
      // only insert if the collection is empty
      if(items.length === 0) {
        db.collection(collectionName).insert(records);
      }
    })
  });
}

// Loading samples in a database, but not yet:
// db.loadSample(samples, 'Users');


module.exports = db;
