
var http    = require('http');
var static  = require('node-static');

var file = new static.Server('./public', {
	cache: 3600,
	indexFile: 'index.html'
});

http.createServer(handler)
	.listen(process.env.PORT, '0.0.0.0', function() {
		console.log('Static file server listening on port ' + process.env.PORT + '...');
	});

function handler(req, res) {
	req.addListener('end', function() {
		file.serve(req, res, function(err) {
			if (err && err.status === 404) {
				file.serveFile('/index.html', 200, { }, req, res);
			}
		});
	}).resume();
}
