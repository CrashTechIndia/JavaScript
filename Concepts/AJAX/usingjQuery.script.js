//using JQuery
/*
AJAX is the art of exchanging data with a server, 
and updating parts of a web page - without reloading the whole page.
*/ 

var loadDoc = function(){
    $.ajax({
        url: "http://dummy.restapiexample.com/api/v1/employees",
        method: "GET",
        async: false,
        dateType: "json",
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        success: function (res) {
            debugger;
        },
        error: function (err) {

        }
    });
}