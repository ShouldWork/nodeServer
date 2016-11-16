var fs = require('fs'); 

fs.readFile('readFile.js', 'utf-8', function(err, data){
	if (err){
		throw err; 
	} else {
		console.log('File contains'); 
		console.log(data); 
	}
});

