$(document).ready(function(){
  let data = getData();
  //document.getElementById('submit-file').onclick(displayHTMLTable(data));
});
function getData(){
  var data;
  $.ajax({
    type: "GET",  
    url: "phac.txt",
    dataType: "text",       
    success: function(response)  
    {
    data = $.txt.toArrays(response);
    displayHTMLTable(data);
    }   
  });
  return data;
}

	
  function displayHTMLTable(results){
    var table = "<table class='table'>";
    var data = results;
     
    for(i=0;i<data.length;i++){
      table+= "<tr>";
      var row = data[i];
      var cells = row.join(",").split(",");
       
      for(j=0;j<cells.length;j++){
        table+= "<td>";
        table+= cells[j];
        table+= "</th>";
      }
      table+= "</tr>";
    }
    table+= "</table>";
    $("#parsed_csv_list").html(table);
    document.getElementById('table').innerHTML = table;
  }

