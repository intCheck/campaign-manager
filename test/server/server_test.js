"use strict";

// AT THE TOP OF EVERY TEST FILE
require('../test-helper');
require(__server + '/server.js');
const request = require('supertest');
const url = 'http://localhost:1337';
const assert = require('assert')
// before(function() {
  // server.start((err) => {
  // if (err) {
      // throw err;
  // }
  // console.log('TEST SERVER RUNNING:', server.info.uri);
  // });
// });
console.log('YOYOYOYOYOY')

describe('API Tests', function () {

  describe('/users rotues tests:', function () {

    it_('Should be able to \'GET\' /users', function * () {
      let user;
      let getRequest = yield request(url)
                                .get('/users')
                                .expect(function(response) {
                                  assert(response.text === 'replace with function to get users!')
                                })
    })
    it_('Should be able to \'POST\' /users', function * () {
      let user;
      let getRequest = yield request(url)
                                .post('/users')
                                .expect(function(response) {
                                  assert(response.text === 'figure out how to handle this route')
                                })
    })
  })
})

