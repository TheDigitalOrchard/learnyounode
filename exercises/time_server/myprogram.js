var net = require('net');
var util = require('util');
//var strftime = require('strftime');	// alternative to manual formatting of date

var port = process.argv[2];

var server = net.createServer(function(socket) {

	// prepare YYYY-MM-DD hh:mm values
	var date = new Date();
	var YYYY = date.getFullYear();
	var MM = date.getMonth() + 1;
	if (MM <= 9) MM = '0' + MM;
	var DD = date.getDate();
	if (DD <= 9) DD = '0' + DD;
	var hh = date.getHours();
	if (hh <= 9) hh = '0' + hh;
	var mm = date.getMinutes();
	if (mm <= 9) mm = '0' + mm;
	
	console.log(YYYY);
	
	// write formatted date/time to socket and end
	var str = '' + YYYY + '-' + MM + '-' + DD + ' ' + hh + ':' + mm + "\n";
	socket.end(str);
	
});
server.listen(port);
