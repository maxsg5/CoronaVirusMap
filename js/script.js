
let data;
window.onload = function(){
  
  let file = "./phac.txt";
fetch(file).then( r => r.text() )
.then( t => data += t )
let txt = data.toString();
let splitData = txt.split();    
    
}