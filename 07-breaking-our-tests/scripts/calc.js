// Kind Reminder: This is our file for pure JavaScript programming
/*
function Calculator(value){
    this.property = value
}
*/
/*
So in my calc.js file, I'm going to create a new calculator object up here: Calculator = function().
*/
Calculator = function () {
    /*
The first thing I'm going to add to our prototype is a running value. This is a running total.

So we're going to initialize that to 0.
    */
    this.value = 0;
};
/*
Now that we've done that, we're going to create our addition function.
We're going to add it on to our calculator object as a prototype.

This is going to be a function that just takes one number as an argument.

So that means that to add two numbers together, we need to call the calc.add() function twice.
*/
Calculator.prototype.add = function (number) {
    /*
    We'll do our typeof() check again.
 if the type of number is actually a number?
    */
    if (typeof (number) == "number") {
        /*
        then our running total is going to be incremented by this number, 
        "this.value += number".
        */
        this.value += number; // instead of typing: this.value = this.value + number;
    } else {
        /*
      Otherwise, we're going to do an alert that just says "Error!".
      this.value += number;
      */
        alert("Error!");
    }
};


// *****************************************************************
// Below is just a review again (it's not part of our Jasmine test): 
// *****************************************************************
var calc = new Calculator();

// ***************************************************************************************
// We can't output (console.log/document.write) the function if it doesn't return any value
// If we do it, we will receive "undefined":
// console.log(calc.add(1)); // this.value = 0 + 1 = 1; // 1
// ***************************************************************************************

calc.add(1);
console.log(calc.value); // this.value = 0 + 1 = 1

calc.add(1);
console.log(calc.value); // this.value = 1 + 1 = 2

calc.add(1);
console.log(calc.value); // this.value = 2 + 1 = 3

calc.add(100);
console.log(calc.value); // this.value = 3 + 100 = 103
