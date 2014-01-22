var http = require('http');
var url	 = require('url');
 
var port = Number(process.argv[2]);

var api_parsetime = function(query) {
	if (typeof query.iso == 'string') {
		var date = new Date(query.iso);
		var json = { hour : date.getHours(), minute : date.getMinutes(), second : date.getSeconds() };
		return JSON.stringify(json);
	} else {
		return null;
	}
};

var api_unixtime = function(query) {
	if (typeof query.iso == 'string') {
		var json = { unixtime : Date.parse(query.iso) };
		return JSON.stringify(json);
	} else {
		return null;
	}
};

var server = http.createServer(function (request, response) {
	
	var parts = url.parse(request.url, true);
		
	switch (parts.pathname) {
		case '/api/parsetime':
			var json = api_parsetime(parts.query);
			break;
		case '/api/unixtime':
			var json = api_unixtime(parts.query);
			break;
	}
	
	if (typeof json == 'string') {
		// send response
		response.writeHead(200, {'Content-Type':'application/json'});
		response.end(json);
	} else {
		response.end("Invalid Request!");
	}

});
server.listen(port);