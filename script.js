window.onload = function(){
  
  
    // Check for the various File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        // Great success! All the File APIs are supported.
      } else {
        alert('The File APIs are not fully supported in this browser.');
      }
    
      var fs = require('fs');
      var textByLine = fs.readFileSync('phac.txt').toString().split("\n");
      outputData(textByLine);
    };

function outputData(file){
    let table = document.getElementById('table').innerHTML;
    table = textByLine;
    
    
}