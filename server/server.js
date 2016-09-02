'use strict';
// Dependancies
const restify = require('restify');
const chalk = require('chalk')

/*
* Server configurations
*/
// the infamous 'leet' port ヽ(ﾟｰﾟ*ヽ)ヽ(*ﾟｰﾟ*)ﾉ(ﾉ*ﾟｰﾟ)ﾉ cuz we elite.
const port = process.env.PORT || 1337;
// Better to set options seperate, incase you need to change later
const serverOptions = {
  name: 'Campagin_Manager',
  version: '1.0.0'
};
const server = restify.createServer(serverOptions);

/**
* Middleware functions to help retrieving data from body or queries
*/
server.use(restify.bodyParser());
server.use(restify.queryParser());

/*
* Expose routes:
*/
const generateUserRoutes = require('./routes/users');
generateUserRoutes(server);

/**
* Default Route to test our server
*/
server.get('/', function(req, res, next) {
	res.send('hello world')
	return next();
});

server.use(function(req, res, next) {
	console.log(req.method + '' + req.url)
	return next();
});

<<<<<<< c0b378f702fe43ed1ab46741690c8bc58d82028c
module.exports = server;



=======
server.listen(port, function () {
  console.log(chalk.green(' .=^.^= Server now meowing on port ' + port + ' =^.^=.'));
});
>>>>>>> server and user routes working

