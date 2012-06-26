
var consts     = require('consts');
var app        = require(consts.LIB_PATH + '/app');

app.get('/foo', function(req, res) {
	res.send('FOO!');
});

