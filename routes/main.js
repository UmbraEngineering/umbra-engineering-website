
var consts      = require('consts');
var app         = require(consts.LIB_PATH + '/app');

app.get('/', function(req, res) {
	res.render('layout', {layout: false});
});

/*app.get('/', function(req, res) {
	res.renderPage('index', { });
});

// ------------------------------------------------------------------

app.get('/services', function(req, res) {
	res.renderPage('services', { });
});

// ------------------------------------------------------------------

app.get('/portfolio', function(req, res) {
	res.renderPage('portfolio', { });
});

// ------------------------------------------------------------------

app.get('/open-source', function(req, res) {
	res.renderPage('open-source', { });
});
*/
