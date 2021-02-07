// We will add our own code here 
function addition(numOne, numTwo) {
    /*
add the if function after running/testing the code to see the error
    */

    /*
   if the both num1 and num2 are numbers then do the addition
   otherwise just return error message
   */
    if (typeof (numOne) == "number" && typeof (numTwo) == "number") {
        return numOne + numTwo;
    } else {
        // change return to alert() function after testing and getting the error first
        alert("Error!");
        /*
The alert box didn't pop up to screen.
That's because Jasmine captures the function and doesn't allow the alert box to be displayed.
This makes Jasmine very useful for unattended testing.

Otherwise, we'd have to click "OK" in our alert window to carry on with other tests.
        */
    }
}

/*
But interestingly, the alert box didn't pop up to screen.
That's because Jasmine captures the function and doesn't allow the alert box to be displayed.
This makes Jasmine very useful for unattended testing.
Otherwise, we'd have to click "OK" in our alert window to carry on with other tests.
So that's a basic introduction to Jasmine spies.

Note: the alert box and the prompt box that you see is just because our code below is not because of jasmine
*/

function division(num1, num2) {
    if (typeof (num1) == "number" && typeof (num2) == "number") {
        // we can add more test for the second number
        if (num2 != 0) {
            return num1 / num2;
        } else {
            alert('Division by 0!');
        }
    } else {
        /*
        we use prompt() method just for learning Jasmine, we should use alert() method
        */
        prompt("Error!");
    }
}


// Review:
document.write();

/*
these two methods belong to the browser object "window"
alert();
prompt();

window.alert()
window.prompt()
*/
addition("abc", 23); // alert Error!
division("abc", "xyz"); // prompt Error!

division(8, 0); // Div/0 in Infinity!
