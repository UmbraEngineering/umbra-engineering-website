
var consts  = require('consts');
var app     = require(consts.LIB_PATH + '/app');

app.get('/', function(req, res) {
	res.renderPage('index', {ua: req.ua});
});

