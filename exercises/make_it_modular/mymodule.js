module.exports = function(dir, ext, callback) {

	var fs = require('fs');
	var path = require('path');

	if (dir && ext) {
		fs.readdir(dir, function(err, list) {
			if (err)
				return callback(err);
			
			list = list.filter(function(file) {
				return path.extname(file) == '.' + ext;
			});
			
			callback(null, list);
		});
	} else {
		console.log("Please provide the path to a test file and an extension signature to filter by (eg. 'txt').");
	}
};
