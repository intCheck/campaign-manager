'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.route({
  method: 'GET',
  path: '/char',
  handler: function (request, reply) {
      reply('replace with function to get characters!');
  }
});

server.route({
  method: 'POST',
  path: '/char',
  handler: function (request, reply) {
      reply('figure out how to handle this route')
  }
})

// some changes
module.exports = server;
