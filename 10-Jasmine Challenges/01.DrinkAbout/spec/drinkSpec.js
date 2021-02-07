/*
describe("Our Text", Anonymous Function)
Major: ("My custom function whatCanIDrink", function () {});
Describe a test for script files (including all the functions; we only have one function)
*/
describe("My custom function whatCanIDrink", function () {
    /*
   Minor:  describe("Check age", function (){});
   Describe our tests for "whatCanIDrink" function
   
   We're going to say we want to do some additional tests, 
   describe("Addition tests", function () { } 

   we need a describe for each function we write in our main script,
   we only have one function so we only need one describe()
   but remember that describe() can have multiple it() functions
   in Jasmine Framework each it() function represents one specification 
   
   NOTE:
   in the browser window, the order of the "specs" might not be the same order like "it()"
   because Jasmine Framework runs them randomly  
   */
    describe("Check age", function () {
        /*
         it("description text", function(){
             expect().ToBe("exactly the same return statement value");
         })
        */

        // Now we are adding/running the tests it() functions
        // Notice that when there is no it() function => warning "No specs found"

        // test#1: Check if the function "whatCanIDrink" is exist or not:
        it("the function should exist",
            function () {
                // remember that we used toBe() with expect() in our lectures
                // in this example we will use another new method named toBeDefined()
                expect(whatCanIDrink).toBeDefined();

                /*
             - for more testing change the function name or put a wrong path for the src and test
             - fix the error and test again
                */
            }); // end spec#1

        // test#2: Check if the function will return "Drink Toddy" with the age 13:
        it("should return: Drink Toddy when called as whatCanIDrink(13)",
            function () {
                var result = whatCanIDrink(13);
                expect(result).toBe("Drink Toddy");

                // or we can write one sentence as we did in our lectures (nested functions):             
                // expect(whatCanIDrink(13)).toBe("Drink Toddy");
            }); // end spec#2

        // test#3: Check if the function will return "Drink Toddy" with the age 13:
        it("should return: Drink Coke when called as whatCanIDrink(17)",
            function () {
                // create a variable to receive the returned value of "whatCanIDrink" function:
                var result = whatCanIDrink(17);
                expect(result).toBe("Drink Coke");
            }); // end spec#3

        // test#4: Check if the function will return "Drink Beer" with the age 18:
        it("should return: Drink Beer when called as whatCanIDrink(18)",
            function () {
                var result = whatCanIDrink(18);
                expect(result).toBe("Drink Beer");
            }); // end spec#4

        // test#5: Check if the function will return "Drink Beer" with the age 20:
        it("should return: Drink Beer when called as whatCanIDrink(20)",
            function () {
                var result = whatCanIDrink(20);
                expect(result).toBe("Drink Beer");
            }); // end spec#5

        // test#6: Check if the function will return "Drink Whisky" with the age 30:
        it("should return: Drink Whisky when called as whatCanIDrink(30)",
            function () {
                var result = whatCanIDrink(30)
                expect(result).toBe("Drink Whisky");
            }); // end spec#6

        // test#7: Check if the function will return "Sorry..." with the age 140:    
        it("should be unable to return a drink when called as whatCanIDrink(140)",
            function () {
                var result = whatCanIDrink(140)
                expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
            }); // end spec#7

        // test#8: Check if the function will return a string with "Drink" with the age 10:
        it("should contain the word 'Drink' when called as whatCanIDrink(10)",
            function () {
                /*
                In JavaScript
                string is an object, this string object has a method named "indexOf()":

                The indexOf() method returns the position of the first occurrence of a specified value in a string.
                
                This method returns -1 if the value to search for never occurs.

                I		L	I	K	E		C	B	C	.
                0	1	2	3	4	5	6	7	8	9	10

                var myString="I LIKE CBC."
                var index = myString.indexOf(“Like”) => -1
                */

                // Analyze (My code):
                var myTest = whatCanIDrink(10);
                console.log(myTest); // Drink Toddy
                /*
                below we are attaching indexOf() to our function whatCanIDrink()!?
                the indexOf() will be attached to the returned value of whatCanIDrink()
                we know that the returned will be a string data type
                and that's why we can attach (chaining) indexOf() to our function
                */
                myTest = whatCanIDrink(17).indexOf("drink");
                console.log(myTest); // -1 

                // the challenge code:
                var result = whatCanIDrink(10).indexOf("Drink");
                console.log(result); // 0
            }); // end spec#8
    }); // end Additional tests: Check age
}); // end main/major description