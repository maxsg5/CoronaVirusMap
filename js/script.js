let dataOut = document.getElementById('data');
let data = '[{"Location":"Repatriated-travellers","confirmed":"4","probable":"0"},{"Location":"Saskatchewan","confirmed":"1","probable":"5"},{"Location":"Manitoba","confirmed":"4","probable":"3"},{"Location":"British Columbia","confirmed":"73","probable":"0"},{"Location":"Nova Scotia","confirmed":"0","probable":"3"},{"Location":"New Brunswick","confirmed":"1","probable":"5"},{"Location":"PEI","confirmed":"1","probable":"0"},{"Location":"Alberta","confirmed":"56","probable":"0"},{"Location":"Quebec","confirmed":"39","probable":"0"},{"Location":"Ontario","confirmed":"145","probable":"0"},{"Location":"Newfoundland and Labrador","confirmed":"0","probable":"1"},{"Location":"Total Cases","confirmed":"324","probable":"14"}]';
window.onload = function(){
  
  let file = this.JSON.parse(data);
  let outputData;
  for(var x = 0; x < file.length-1; x++)
  {
    outputData += file[x];
  }
  dataOut.innerText= outputData;

//   let file = "./phac.txt";
// fetch(file).then( r => r.text() )
// .then( t => data += t )
// let txt = data.toString();
// let splitData = txt.split();    
    
}