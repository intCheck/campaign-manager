'use strict';
const users = [
  {
    method: 'GET',
    path: '/users',
    handler: function (request, reply) {
        reply('replace with function to get users!');
    }
  },
  {
    method: 'POST',
    path: '/users',
    handler: function (request, reply) {
        reply('figure out how to handle this route')
    }
  }
]

module.exports = users;
