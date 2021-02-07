function addition(numOne, numTwo) {
    /*
add the if function after running/testing the code to see the error
    */

    // Modify the function with typeof
    /*
    if the both num1 and num2 are numbers then do the addition
    otherwise just return error message
    */
    if (typeof (numOne) == "number" && typeof (numTwo) == "number") {
        return numOne + numTwo;
    } else {
        return "Error!";
    }
}
// Test will pass after adding if condition with typeof()


// Review:
var x = 100;
console.log(typeof (x)); // number

var y = 23.79;
console.log(typeof (y)); // number


var z = "Any text";
console.log(typeof (z)); // string


var a = true;
console.log(typeof (a)); // boolean

var myArray = [];
console.log(typeof (myArray)); // object