var express = require('express');
var app = express(); 
var bodyParser = require('body-parser');
var http = require('http'); 
var xmlEditor = require('./xmlEditor');


app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());




var server = http.createServer(function onRequest(request,response,next){
	console.log('Listening on port 8100');
	response.writeHead(200,{'Content-Type': 'text/plain'});
	xmlEditor.fixXML(); 
	response.write('The file is repaired!');
	response.end();
}).listen(8100);

