// Using promised-mongo:
var pmongo = require('promised-mongo');
// This is preemptive, if we are in production, we want to use heroku's db address. otherwise, lets use our local campaign_test
var dbName = process.env.NODE_ENV === 'production' ? process.env.MONGOLAB_URI : 'campaign_test';
// Establish db
var db = pmongo(dbName);
var _ = require('lodash');

// Delete everything function to clean database
db.deleteEverything = function () {
  return Promise.all([
    db.collection('characters').remove(),
    db.collection('users').remove()
  ])
}
// some changes
module.exports = db; 
