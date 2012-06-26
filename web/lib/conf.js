
var fs    = require('fs');
var path  = require('path');
var app   = require('./app');

var confPath = path.join(__dirname, '../config');

exports = module.exports = function(file) {
	return exports[file];
};

fs.readdirSync(confPath).forEach(function(configFile) {
	if (configFile !== 'index.js') {
		var name = getName(configFile);
		exports[name] = { };
		require(path.join(confPath, configFile))(app, exports[name]);
	}
});

function getName(file) {
	var name = file.split('.');
	name.pop();
	return name.join('.');
}

