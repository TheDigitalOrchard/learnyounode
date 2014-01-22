var fs = require('fs');

var path = process.argv[2];

if (path) {
	fs.readFile(path, 'utf8', function(err, data) {
		if (!err) {
			var count = data.split('\n').length - 1;
			console.log(count);
		}
	});
} else {
	console.log("Please provide the path to a test file.");
}
