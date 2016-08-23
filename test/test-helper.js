console.log('LOADING TEST-HELPER');
'use strict'

// Dependancies
const Bluebird = require('bluebird');

/*********************
* SETTING UP GLOBALS *
*********************/
process.env.NODE_ENV = 'test';
global.__server = __dirname + '/../server';
// no client directory yet
// global.__client = __dirname + '/../client';


/**********************
* TEST SYNTAX HELPERS *
**********************/
const chai = require('chai');
// Option 1: Make the `expect` function available in every test file
global.expect = chai.expect;
// Option 2: Make everything should-able
global.should = chai.should();

/***********************
* MOCK API FOR TESTING *
***********************/
// Mock apps for API testing
// var Hapi = require('hapi');

// TestHelper.createApp = function (loader) {
//   var app = express();
//   app.use(require('body-parser').json());

//   app.testReady = function () {
//     // Log all errors
//     app.use(function (err, req, res, next) {
//       console.error('==Error==');
//       console.error('   ' + err.stack);
//       next(err);
//     });
//   };

//   return app;
// };

/********************************************
* ALLOWS YIELD STATEMENTS AND ASYNC TESTING *
********************************************/
global.before_ = function (f) {
  before(Bluebird.coroutine(f));
};

global.beforeEach_ = function (f) {
  beforeEach(Bluebird.coroutine(f));
};

global.it_ = function (description, f) {
  it(description, Bluebird.coroutine(f));
};

global.xit_ = function (description, f) {
  xit(description, f);
};

global.it_.only = function (description, f) {
  it.only(description, Bluebird.coroutine(f));
};
