const Hapi = require('hapi');
const db = require('./lib/db');
// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: process.env.IP || 'localhost',
  port: process.env.PORT || 1337
});

/**
* Used to create routes out of incoming route arrays:
*/
const routeMaker = (routes) => {
  routes.forEach( route => {
      server.route(route);
  })
}
// Route Arrays:
const charRoutes = require('./routes/characters');
const userRoutes = require('./routes/users')

// Exposing Routes
routeMaker(charRoutes);
routeMaker(userRoutes);

// Default Route:
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Welcome!');
    }
})

// Start the server
server.start((err) => {
  if (err) {
      throw err;
  }
  console.log('Server running at:', server.info.uri);
});

module.exports = server;
//
// db.loadSample('users');
