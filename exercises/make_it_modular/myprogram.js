var mymodule = require('./mymodule');

mymodule(process.argv[2], process.argv[3], function(err, list) {
	if (!err) {
		for (var i in list) {
			console.log(list[i]);
		}
	}
});
