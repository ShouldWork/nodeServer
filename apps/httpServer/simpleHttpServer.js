var http = require('http'); 
var xmlEditor = require('./xmlEditor');

var server = http.createServer(function onRequest(request,response,next){
	console.log('Listening on port 8100');
	response.writeHead(200,{'Content-Type': 'text/plain'});
	response.write('The file is repaired!');
	response.end();
}).listen(8100);

