describe("Calculator", function () {
    describe("Addition tests", function () {
        it("should return 42", function () {
            expect(addition(20, 22)).toBe(42);
        });

        it("should return 26", function () {
            /*
            What we're now going to say is that we expect that when we run our addition function with the numbers 20 and 22, we expect that to be 42; that's what we expect to have returned. 
            */
            expect(addition(7, 19)).toBe(26);
        });

        /*
Again, in the addition tests function, we're going to say it("should return an error if we don't supply two numbers").

Again, we put a function in.
And we're going to say that we expect that if we call our addition function with the strings"Hitchhikers" and "Guide", then that should be an error.

if(" Our Text",function(){ })
        */
        it("Should return an error if we don't supply two numbers", function () {
            expect(addition("Hitchhikers", "Guide")).toBe("Error!");
        });
    }); // end describe Addition tests
}); // end describe Calculator

// We'll go to our index.html and preview it.
/*
We can see here that our test fails as expected.
It tells us why our test failed.
And that's because we have a reference error saying that addition is not defined, which is obvious because we haven't actually defined our addition function in our calc.js file yet.
*/