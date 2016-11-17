var xmldom = require('xmldom').DOMParser;
var fs = require('fs');
var XMLSerializer = require('xmldom').XMLSerializer;
var serializer = new XMLSerializer(); 

function fixXML(){
    fs.readFile('XACTDOC.xml','utf-8',function(err,data,next){
      if (err){
        throw err; 
      }
      var snapShot; 
      doc = new xmldom().parseFromString(data,'application/xml');
      snapShot = doc.getElementsByTagName('ProjectSnapshots');
      try{
        doc.removeChild(snapShot[0]);
      } catch (err){
        console.log("This document has no ProjectSnapshots to remove\nMust be something else?!");
      }
      var newDoc = serializer.serializeToString(doc);
      fs.writeFile('./XACTDOC.xml',newDoc,function(err,data){
        if (err){
          throw err; 
        }
      });
    }); 
}

exports.fixXML = fixXML; 
// fs.readFile('XACTDOC.xml', 'utf-8', function (err, data) {
//   if (err) {
//     throw err;
//   }
//   var genreno,
//       thisgenreobject,
//       thisgenre,
//       doc,
//       genres;
//   doc = new xmldom().parseFromString(data, 'application/xml');
//   genres = doc.getElementsByTagName('genre');
//   for (genreno in genres) {
//     thisgenreobject = genres[genreno];
//     if (thisgenreobject.firstChild) {
//       thisgenre = thisgenreobject.firstChild.nodeValue;
//       if (thisgenre === 'Computer') {
//         console.log(thisgenreobject.parentNode.getElementsByTagName('title')[0].firstChild.nodeValue);
//       }
//     }
//   }
// });