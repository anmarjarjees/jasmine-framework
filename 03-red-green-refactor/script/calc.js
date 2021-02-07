// we will add this function after running the test and see the error:
function addition() {
    /*
What's the easiest way that we can get this test to pass?
Well, it's just to return the number 42, isn't it?
So let's do that.
    */
    return 42; // Just for testing
}

// Test will pass now after defining this function

// let's try or own function (extra help)
function subtraction() {
    return "Sorry this function in not completed";
}

// ************************ Below is for JS learning NOT for Jasmine ****************************** //
// Below is the code review:
// call the function addition() 
addition();

/*
in JavaScript we can create anonymous functions that can be created and run at the same time:
it's also called Self-Invoking Functions: functions without names
this complex structure will be used in jQuery as the basic root function
*/
(function () {
    console.log("I am an anonymous function");
})();
