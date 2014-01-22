var http = require('http');

var queue = { };
var ended = 0;
var total = process.argv.length - 2;

var responder = function(response) {

	response.setEncoding('utf8');

	response.on('data', function(str) {
		this.data += str;
	});
	
	response.on('end', function() {
		ended++;
		if (ended == total) {
			output();
		}
	});
};

var output = function() {
	for (var url in queue) {
		console.log(queue[url].data);
	}
};

for (var i = 0; i < total; i++) {

	var url = process.argv[2+i];
	
	queue[url] = { url : url, data : '', responder : responder };

	http.get(url, function(response) {
		
		console.log("HOST: "+response.host);

		response.on('data', function(str) {
			data += str;
		});
		
		response.on('end', function() {
			ended++;
			if (ended == total) {
				output();
			}
		});
	});
}