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

server.use(restify.bodyParser());

server.get('api/users', users.get);
server.get('api/users/:id', users.getById);
server.post('api/users', users.post);
server.put('api/users/:id', users.put);
server.del('api/users/:id', users.del);

server.listen(port, function() {
	console.log('server running at ' + port);
});