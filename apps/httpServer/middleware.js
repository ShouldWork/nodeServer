var connect = require('connect');
var util = require('util');
var fixFile = require('./xmlEditor.js');

var interceptorFunction = function(request,response,next){
	console.log(util.format('Request for %s with method %s', request.url,request.method));
	next();
};

var fixFileFunction = function(request,response,next){
	fixFile(); 
	console.log('File should be fixed');
	next(); 
}

var server = connect()
	.use(interceptorFunction)
	.use(function onRequest(request,response){
		response.end('Hello from Connect app!');
	}).listen(8100);

