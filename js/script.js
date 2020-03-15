

window.onload = function(){
  
  let file = "./phac.txt";
fetch(file).then( r => r.text() )
.then( t => console.log(t) )

    
    
}