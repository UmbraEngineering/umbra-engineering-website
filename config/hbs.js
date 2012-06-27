module.exports = function() {
	
	var fs          = require('fs');
	var hbs         = require('hbs');
	var path        = require('path');
	var wrench      = require('wrench');
	var consts      = require('consts');
	var dateformat  = require('dateformat');
	
	hbs.registerHelper('now', function(format) {
		return dateformat(new Date(), format);
	});
	
	// NOTE: Doing this async technically creates a race condition,
	// but if anyone is making requests on the server that soon after
	// it goes up, they deserve what they get.
	wrench.readdirRecursive(consts.VIEW_PATH, function(err, files) {
		if (err) {throw err;}
		(files || [ ]).forEach(function(filePath) {
			var file = path.basename(filePath, '.hbs');
			var fileDir = path.dirname(filePath);
			if (file[0] === '_') {
				filePath = path.join(consts.VIEW_PATH, filePath);
				fs.readFile(filePath, 'utf8', function(err, data) {
					if (err) {throw err;}
					var partial = path.join(fileDir, file.slice(1));
					hbs.registerPartial(partial, data);
				});
			}
		});
	});

};
