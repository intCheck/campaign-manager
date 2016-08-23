'use strict';
const characters = [
  {
    method: 'GET',
    path: '/char',
    handler: function (request, reply) {
        reply('replace with function to get characters!');
    }
  },
  {
    method: 'POST',
    path: '/char',
    handler: function (request, reply) {
        reply('figure out how to handle this route')
    }
  }
]

// some changes
module.exports = characters;
