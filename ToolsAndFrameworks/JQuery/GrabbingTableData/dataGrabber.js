//to be un in console of for seeing llive results -> Concepts\AJAX\Populating Table\table.html

var fun = function(){var myRows = [];
    var $headers = $("th");
    var $rows = $("tbody tr").each(function(index) {
      $cells = $(this).find("td");
      myRows[index] = {};
      $cells.each(function(cellIndex) {
        myRows[index][$($headers[cellIndex]).html()] = $(this).html();
      });    
    });
    
    // Let's put this in the object like you want and convert to JSON (Note: jQuery will also do this for you on the Ajax request)
    var myObj = {};
    myObj.myrows = myRows;
    // console.log(JSON.stringify(myObj));
    return myObj;
}

// additional console commands
console.table(fun().myrows);


