
var consts     = require('consts');
var app        = require(consts.LIB_PATH + '/app');
var hook       = require(consts.LIB_PATH + '/web').hook;
var conf       = require(consts.LIB_PATH + '/conf')('pass-reset');

app.get('/foo', function(req, res) {
	res.send('FOO!');
});

