// keeping the scope local to the function
// eliminating risk of overriding globally accessable resources;

/// ////////// Example 1 ///////////////////
const callCounter = (function () {
    let count = 0;
    return function () { console.log(count += 1); };
}()); // wrapping function in parentheses is not necessary

callCounter();
callCounter();
callCounter(); // output 3

/*
The count variable is protected by the scope of an  anonymous function,
And can only be changed using the callCounter function.
try achieving the same withput closures

*/

/// ////////// Example 2 ///////////////////
// "counter" is a function that returns an object with properties, which in this case are functions.
const counter = (function () {
    let i = 0;

    return {
        get() {
            return console.log(i);
        },
        set(val) {
            i = val;
        },
        increment() {
            return console.log(++i);
        }
    };
}());

// These calls access the function properties returned by "counter".
counter.get(); // 0
counter.set(3);
counter.increment(); // 4`
counter.increment(); // 5

/// ///// Example 3 ///////////
function User(name) {
    const displayName = function (greeting) {
     console.log(`${greeting} ${name}`);
    };
  return displayName;
}
const myFunc = User("Raj"); // lock in the user name
myFunc("Welcome "); // Output: Welcome Raj
myFunc("Hello "); // Output: Hello Raj

/// ///// Example 4 ////////

function increment(initial, increment) {
    const fun = function () {
     console.log(initial += increment);
    };
    return fun;
}

const z = increment(100000, 15000);
z(); // 115000
z(); // 130000 ..and so on..
