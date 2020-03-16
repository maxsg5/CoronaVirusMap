let dataOut;
let data = '[{"Location":"Alberta","confirmed":"56","probable":"0"},{"Location":"British Columbia","confirmed":"73","probable":"0"},{"Location":"Manitoba","confirmed":"4","probable":"3"},{"Location":"New Brunswick","confirmed":"1","probable":"5"},{"Location":"Newfoundland and Labrador","confirmed":"0","probable":"1"},{"Location":"Nova Scotia","confirmed":"0","probable":"3"},{"Location":"Ontario","confirmed":"145","probable":"0"},{"Location":"PEI","confirmed":"1","probable":"0"},{"Location":"Quebec","confirmed":"39","probable":"0"},{"Location":"Repatriated-travellers","confirmed":"4","probable":"0"},{"Location":"Saskatchewan","confirmed":"1","probable":"5"},{"Location":"Total Cases","confirmed":"324","probable":"14"}]';
window.onload = function(){
  dataOut = document.getElementById('data');
  let file = this.JSON.parse(data);
  let outputData = "<table class="+"minimalistBlack"+"><tbody> <tr> <th></th> <th># of Confirmed Cases</th> <th># of Probable Cases</th></tr>";
  for(var x = 0; x <= file.length-1; x++)
  {
    outputData += " <tr><td>"+file[x].Location.toString() +"</td><td>"+file[x].confirmed.toString() +"</td><td>"+file[x].probable.toString() +"</td></tr> ";
  }
  outputData += "</tbody></table>";
  dataOut.innerHTML= outputData;

//   let file = "./phac.txt";
// fetch(file).then( r => r.text() )
// .then( t => data += t )
// let txt = data.toString();
// let splitData = txt.split();    
    
}