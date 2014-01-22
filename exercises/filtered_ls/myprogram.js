/**
*	Notes for Kyle:
*		The official solution uses the "path" module, which I did not use.
*		I left my test program as-is since it was successful, but now I'm aware of the path module
*		for future usage and it would be a more robust way of checking for the file's real extension.
*/

var fs = require('fs');

var path = process.argv[2];
var ext  = process.argv[3];

if (path && ext) {
	fs.readdir(path, function(err, list) {
		if (!err) {
			for (var i in list) {
				if (list[i].indexOf('.'+ext) != -1) {
					console.log(list[i]);
				}
			}
		}
	});
} else {
	console.log("Please provide the path to a test file and an extension signature to filter by (eg. 'txt').");
}
