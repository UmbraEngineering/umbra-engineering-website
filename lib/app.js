
var fs        = require('fs');
var path      = require('path');
var consts    = require('consts');
var express   = require('express');

// Create the server

var app = module.exports = express.createServer();

// Configuration

consts.define('BASE_PATH',    path.join(__dirname, '..'));
consts.define('LIB_PATH',     path.join(__dirname, '.'));
consts.define('VIEW_PATH',    path.join(__dirname, '../views'));
consts.define('PUBLIC_PATH',  path.join(__dirname, '../public'));
consts.define('ENVIRONMENT',  app.settings.env);

var conf = require('./conf');

app.configure(function() {
	app.set('view engine', 'hbs');
	app.set('views', consts.VIEW_PATH);
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(function(req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Credentials', true);
		res.header('Access-Control-Allow-Methods', conf.cors.methods);
		res.header('Access-Control-Allow-Headers', conf.cors.headers);
		
		next();
	});
	app.use(conf.useragent.parser());
	app.use(express.logger());
	app.use(app.router);
});

app.configure('development', function() {
	app.use(express.static(consts.PUBLIC_PATH));
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function() {
	app.use(express.static(consts.PUBLIC_PATH, {maxAge: 31557600000}));
	app.use(express.errorHandler());
});

// Rendering/Routes

require('./render');
require('./routes');

// Start the server

app.listen(conf.core.port, function() {
	console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

