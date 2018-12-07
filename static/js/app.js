// from data.js
var tableData = data;
var tbody = d3.select("tbody");

data.forEach(function(sighting) {
    
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
   
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });


var inputField = d3.select("#datetime");
var dateSubmit = d3.select('#filter-btn');

dateSubmit.on("click", function() {
    d3.event.preventDefault();
    // TODO: code to clear the table
    function myFunction() {
        var input, filter, table, tr, td, i;
        input = document.getElementById("datetime");
        filter = input.value;
        table = document.getElementById("ufo-table");
        tr = table.getElementsByTagName("tr");
        for (i = 1; i < tr.length; i++) {
            // Hide the row initially.
            tr[i].style.display = "none";
        
            td = tr[i].getElementsByTagName("td");
            for (var j = 0; j < td.length; j++) {
              cell = tr[i].getElementsByTagName("td")[j];
              if (cell) {
                if (cell.innerText.indexOf(filter) > -1) {
                  tr[i].style.display = "";
                  break;
                };
              };
            };
        };
        console.log(table);
      };
      myFunction();
    });
// YOUR CODE HERE!
