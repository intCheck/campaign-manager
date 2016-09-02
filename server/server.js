const restify = require('restify');
users = require('./users');
port = 3000;

var server = restify.createServer({
	name: 'Restify Server'
});

server.get('/', function(req, res, next) {
	res.send('hello world')
	return next();
});

server.use(function(req, res, next) {
	console.log(req.method + '' + req.url)
	return next();
});

module.exports = server;




