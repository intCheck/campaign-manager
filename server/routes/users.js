'use strict';

function generateUserRoutes(server) {



server.get('/users', function(req, res, next) {
  res.send('Got Some Users!')
  console.log('got some users!');
  next();
});

}

module.exports = generateUserRoutes;
