"use strict";

// AT THE TOP OF EVERY TEST FILE
require('../test-helper');
require(__server + '/server.js');
const request = require('supertest');
const url = 'http://localhost:1337';
const assert = require('assert')

describe('API Tests', function () {

  describe('/users rotues tests:', function () {

    it_('Should be able to \'GET\' /users', function * () {
      let user;
      let getRequest = yield request(url)
                                .get('/users')
                                .expect(function(response) {
                                  assert(response.text === '.=^.^= Got Some Users! =^.^=.')
                                })
    })
    it_('Should be able to \'GET\' /users by id', function * () {
      let user;
      let getRequest = yield request(url)
                                .get('/users/1')
                                .expect(function(response) {
                                  assert(response.text === '.=^.^= Get a user by its ID =^.^=.')
                                })
    })

    it_('Should be able to \'POST\' /users', function * () {
      let user;
      let getRequest = yield request(url)
                                .post('/users')
                                .expect(function(response) {
                                  assert(response.text === '.=^.^= Creating User! =^.^=.')
                                })
    })

    it_('Should be able to \'PUT\' (update) /users by id ', function * () {
      let user;
      let getRequest = yield request(url)
                                .put('/users/1')
                                .expect(function(response) {
                                  assert(response.text === '.=^.^= Updated user by ID! =^.^=.')
                                })
    })

    it_('Should be able to \'DELETE\' /users by id ', function * () {
      let user;
      let getRequest = yield request(url)
                                .delete('/users/1')
                                .expect(function(response) {
                                  assert(response.text === '.=^.^= Deleted a user by ID! =^.^=.')
                                })
    })
  })
})

