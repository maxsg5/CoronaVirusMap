
let data;
window.onload = function(){
  
  let file = "./phac.txt";
fetch(file).then( r => r.text() )
.then( t => data += t.toString )

    
    
}