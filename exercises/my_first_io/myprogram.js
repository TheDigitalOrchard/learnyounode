var fs = require('fs');

var path = process.argv[2];

if (path) {
	var buffer = fs.readFileSync(path);

	var count = buffer.toString().split('\n').length - 1;

	console.log(count);
} else {
	console.log("Please provide the path to a test file.");
}
