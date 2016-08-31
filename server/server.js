const Hapi = require('hapi');
const db = require('./lib/db');
// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: process.env.IP || 'localhost',
  port: process.env.PORT || 1337
});

// Route Arrays:
const charRoutes = require('./routes/characters');
const userRoutes = require('./routes/users');
server.route(charRoutes);
server.route(userRoutes);

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
<<<<<<< 474b2b54d87aac5c89216e696d0f480421599e40
// This is comment muahahaha




// This is another comment
=======
// This is a comment changed!
>>>>>>> added a comment
