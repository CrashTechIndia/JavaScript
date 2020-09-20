//keeping the scope local to the function
//eliminating risk of overriding globally accessable resources;

///////////// Example 1 ///////////////////
var callCounter = (function(){
    var count = 0;
    return function(){console.log(count+=1)};
})()

callCounter();
callCounter();
callCounter(); //output 3

/* 
The count variable is protected by the scope of an  anonymous function, 
And can only be changed using the callCounter function.
try achieving the same withput closures

*/

//////// Example 2 ///////////
function User(name){
    var displayName = function(greeting){
     console.log(greeting+' '+name);
    }
  return displayName;
}
var myFunc = User('Raj'); //lock in the user name
myFunc('Welcome '); //Output: Welcome Raj
myFunc('Hello '); //Output: Hello Raj


//////// Example 3 ////////


function increment(initial,increment){
    var fun = function(){
     console.log(initial+=increment);
    }
    return fun;
}

var z = increment(100000,15000);
z(); //115000
z(); //130000 ..and so on..