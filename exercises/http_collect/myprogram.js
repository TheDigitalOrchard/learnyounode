var http = require('http');

http.get(process.argv[2], function(response) {

	var data = '';

	response.setEncoding('utf8');
	
	response.on('data', function(str) {
		data += str;
	});
	
	response.on('end', function() {
		console.log(data.length);
		console.log(data);
	});
	
});