const Hapi = require('hapi');
const db = require('./lib/db');
// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: process.env.IP || '0.0.0.0',
    port: process.env.PORT || 3000
});

// Add the route
server.route({
    method: 'GET',
    path:'/hello',
    handler: function (request, reply) {

        return reply('hello world');
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
//
db.loadSample('users');
