/*
1.	You might say "I want to test a calculator" ==> describe("Calculator", function() {})
2.	"I'm going to test the addition function" == >describe("Addition tests", function() {})
3.	"I want to get the result of 42" ==> it("should return 42", function(){ })
4.	"So I expect 20 + 22 to be 42" ==> expect(addition(20, 22)).toBe(42);

This is exactly the same with Jasmine.

describe a test for calculator

- Test Name "Calculator" is the first argument of our describe function.
Note: Test name is just any string of names and yes it can have spaces
- The second one is a function.

*/
describe("Calculator", function () {
    /*
    And then inside here, we're going to describe some additional tests.
    We're going to say we want to do some addition tests:
    */
    describe("Addition tests", function () {
        /*
        Now we can make our assertions.
        We're going to say that it("should return 42") and that's what we expect. 
        Our second parameter is a function again.
        */
        it("should return 42", function () {
            /*
            What we're now going to say is that we expect that when we run our addition function with the numbers 20 and 22, we expect that to be 42; that's what we expect to have returned. 
        	
            expect( call our function()) .toBe( the returned value of our function )
            */
            expect(addition(20, 22)).toBe(42);
        });
    }); // end describe Addition tests

    // adding our own code for more practice 
    describe("subtraction function test", function () {
        it("Should return: Sorry this function in not completed", function () {
            expect(subtraction()).toBe("Sorry this function in not completed");
        });
    }); // end for subtraction test

    describe("division function test", function () {

    }); // end for division test
}); // end describe Calculator
// We'll go to our index.html and preview it.
/*
We can see here that our test fails as expected.
It tells us why our test failed.
And that's because we have a reference error saying that addition is not defined:
ReferenceError: addition is not defined
which is obvious because we haven't actually defined our addition function in our calc.js file yet.
*/