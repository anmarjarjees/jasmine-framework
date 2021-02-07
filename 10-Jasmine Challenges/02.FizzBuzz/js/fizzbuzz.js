/*
FizzBuzz is a classic programming problem that is often asked as an interview question.
Write some tests for the FizzBuzz game.

Problem:
Create a function called fizzBuzz:
This function should take in number as a parameter 
(numeric argument is needed to be passed into this function). 

The function should do the following:

If the number is divisible by 3 and 5, then return "FizzBuzz", example: 15
If the number is divisible by 3, then return "Fizz", example: 9
If the number is divisible by 5, then return "Buzz", example: 25
Else just return the number itself, example: 8

Write a set of tests that pass in various values to the FizzBuzz function 
and ensure that the function meets the above requirements. 
Make sure that you test all different "types" of inputs that the function may receive.
**************************************************************************************

The logic in math:
 1) How to know if the number is divisible by 3 (the number can be divided by 3 without remainder):
    for example: 243

    - we add every individual number 2+4+3 = 9
    - can we divide 9 by 3 with out any remainder and the answer is Yes
    So the number "243" is divisible by 3

2) How to know if the number is divisible by 5: 
   for example: 3425
    - We need to look at the last number if it's 0 or 5
    - If Yes then this number is divisible by 5

The logic for programming based on the code institute logic:
    if the remainder of division by 3 is 0 => divisible by 3
    if the remainder of division by 5 is 0 => divisible by 5
**************************************************************************

To review:
we did a similar example in our lecture, when we had to find if the number is even or odd
The logic:
if the remainder of dividing the number by 2 is 0 => it's an even number
else it's an odd number

the formula: number % 2
*/

function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else {
        return num;
    }
}

// for testing =>  expect(myVariable).toBeDefined();
let myVariable = 100;

// *******************************************************************
// Just for learning purpose (going beyond the challenge requirements)
// you can add other function(s):
function evenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}


// Let's try to test our function "fizzBuzz" itself, before running Jasmine test:
console.log(fizzBuzz(9)); // for 3 => Fizz
console.log(fizzBuzz(25)); // for 5 => Buzz
console.log(fizzBuzz(15)); // for both 3 and 5 => FizzBuzz
console.log(fizzBuzz(8)); // neither 3 nor 5 => 8