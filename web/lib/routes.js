
var fs = require('fs');
var path = require('path');

var routes = path.join(__dirname, '../routes');

fs.readdirSync(routes).forEach(function(routeFile) {
	require(path.join(routes, routeFile));
});

