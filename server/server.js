'use strict';
// Dependancies
const express = require('express');
const chalk = require('chalk');

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
const app = express(serverOptions);
/*
* Expose routes:
*/
const generateUserRoutes = require('./routes/users');
generateUserRoutes(app);

/**
* Default Route to test our app
*/
app.get('/', function(req, res, next) {
	res.send('hello world')
});

app.use(function(req, res, next) {
	console.log(req.method + '' + req.url)
});

app.listen(port, function () {
  console.log(chalk.green(' .=^.^= app now meowing on port ' + port + ' =^.^=.'));
});

module.exports = server;
