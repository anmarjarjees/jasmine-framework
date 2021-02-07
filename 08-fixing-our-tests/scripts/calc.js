Calculator = function () {
    this.value = 0;
};

/*
To Review: When we look at our calc.js file, we can see that the way that our calculator works has changed.
It now just takes one number as an argument instead of two.
It keeps that in a running total.
So that means that to add two numbers together, we need to call the calc.add() function twice.
*/
Calculator.prototype.add = function (number) {
    if (typeof (number) == "number") {
        this.value += number;
    } else {
        alert("Error!");
    }
};
