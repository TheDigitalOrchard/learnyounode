var http = require('http');
var bl   = require('bl');

var queue = [];
var ended = 0;
var total = process.argv.length - 2;

/**
*	Wrap http.get() in a function so that we have a scoped index value
*/
var http_get = function(idx, url) {
	http.get(url, function(response) {

		response.pipe(
			bl(function(err, data) {
				if (err)
					return console.error(data);
				
				queue[idx] = data.toString();
				ended++;

				if (ended == total) {
					for (var i = 0; i < total; i++) {
						console.log(queue[i]);
					}
				}
			})
		);
	});
};

for (var i = 0; i < total; i++) {

	var url = process.argv[2+i];
	
	http_get(i, url);
	
	/* -- second attempt using buffer-list
	http.get(url, function(response) {

		response.pipe(
			bl(function(err, data) {
				if (err)
					return console.error(data);
				
				queue[i] = data.toString();
				ended++;

				if (ended == total) {
					for (var x = 0; x < total; x++) {
						console.log(queue[x]);
					}
				}
			});
		);

		//-- first attempt, which does not work correctly
		response.setEncoding('utf8');

		response.on('data', function(str) {
			data += str;
		});
		
		response.on('end', function() {
			ended++;
			if (ended == total) {
				
			}
		});
	});
	*/
}