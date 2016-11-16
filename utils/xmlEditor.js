var xmldom = require('xmldom').DOMParser;
var fs = require('fs');
var XMLSerializer = require('xmldom').XMLSerializer;
var serializer = new XMLSerializer(); 


function fixFile(){
  fs.readFile('XactDoc.xml','utf-8',function(err,data,next){
    if (err){
      throw err; 
    }
    var snapShot; 
    doc = new xmldom().parseFromString(data,'application/xml');
    snapShot = doc.getElementsByTagName('ProjectSnapshots');
    doc.removeChild(snapShot[0]);
    var newDoc = serializer.serializeToString(doc);
    fs.writeFile('./XACTDOC.xml',newDoc,function(err,data){
      if (err){
        throw err; 
      }
    });
  }); 
}