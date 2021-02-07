describe("Calculator", function () {
    describe("Addition tests", function () {
        it("should return 42", function () {
            expect(addition(20, 22)).toBe(42);
        });
        /*
Well, we want to make sure that our calculator can return values other than 42.

So we can add another test to do that.
Let's say 7+19 should return 26.
        */
        it("should return 26", function () {
            /*
            What we're now going to say is that we expect that when we run our addition function with the numbers 20 and 22, we expect that to be 42; that's what we expect to have returned. 
            */
            expect(addition(7, 19)).toBe(26);
        });

        // more test:
        it("should return 10", function () {
            expect(addition(7, 3)).toBe(10);
        });
    }); // end describe Addition tests

    // we can add more describe for other functions
    describe("division function test", function () {

    }); // end describe test
}); // end describe Calculator

// We'll go to our index.html and preview it.
/*
We can see here that our test fails as expected.
It tells us why our test failed.
And that's because we have a reference error saying that addition is not defined, which is obvious because we haven't actually defined our addition function in our calc.js file yet.
*/