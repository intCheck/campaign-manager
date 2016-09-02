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

module.exports = server;




