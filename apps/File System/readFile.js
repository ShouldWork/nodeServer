var fs = require('fs');
// Require data from another js file. 
var printUtil = require('../utils/printUtil.js'); 
var content = fs.readFileSync('message.js','utf-8'); 


// These functions are pulled from the printUtil.js file
printUtil.printMessage("Print Message Call:"); 
printUtil.printWithDateMessage("Print with date message Class: "); 



