
var consts      = require('consts');
var app         = require(consts.LIB_PATH + '/app');

app.get('/', render);
app.get('/services', render);
app.get('/contact', render);
app.get('/portfolio', render);
app.get('/open-source', render);
app.get('/careers', render);
app.get('/careers/:opening', render);

function render(req, res) {
	res.render('layout', {layout: false});
}
