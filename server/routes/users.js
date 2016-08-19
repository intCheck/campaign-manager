'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.route({
  method: 'GET',
  path: '/users',
  handler: function (request, reply) {
      reply('replace with function to get users!');
  }
});

server.route({
  method: 'POST',
  path: '/users',
  handler: function (request, reply) {
      reply('figure out how to handle this route')
  }
})

module.exports = server;
