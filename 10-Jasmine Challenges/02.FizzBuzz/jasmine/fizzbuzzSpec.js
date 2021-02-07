/*
Major (the parent script): Describe
*/
describe("Our custom functions fizzBuzz and evenOdd", function () {
    /*
    Minor (the children, the functions inside the main script):     
    - function fizzBuzz()
    - function evenOdd()

    Notice that Jasmine Framework will also randomize the running order of our describe() functions:
    */

    // We will start with fizzBuzz function first:
    describe("Our function 'fizzBuzz': fizzbuzz, fizz, buzz, or any number",
        function () {
            // check if the function "fizzBuzz" does exist:
            it("should exist", function () {
                // for learning:
                // expect(myVariable).toBeDefined(); // pass the test
                /*
                - Expectations are built with the function expect which takes a value, called the actual. 
                - Below we checking if the function fizzBuzz are defined or not
                */
                expect(fizzBuzz).toBeDefined();
            }); // end should exist

            it("should return Fizz when called as fizzBuzz(9)", function () {
                var result = fizzBuzz(9)
                expect(result).toBe("Fizz");
            });

            it("should return Buzz when called as fizzBuzz(10)", function () {
                var result = fizzBuzz(10)
                expect(result).toBe("Buzz");
            });

            it("should return FizzBuzz when called as fizzBuzz(15)", function () {
                var result = fizzBuzz(15)
                expect(result).toBe("FizzBuzz");
            });

            it("should return 2 when called as fizzBuzz(2)", function () {
                var result = fizzBuzz(2)
                expect(result).toBe(2);
            });
        }); // end testing our only function fizzBuzz

    // then we can start with evenOdd function:
    describe("Our function 'evenOdd': even or odd",
        function () {
            // I will let you enjoy it...
        });
}); // end main description for the entire project (the main function)