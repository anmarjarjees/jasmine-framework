describe("Calculator", function () {

    // calc = new Calculator; // code is changed:

    /*
Talk about beforeEach after reviewing the other calc objects below
For that, we can use a function provided by Jasmine called beforeEach().
Every testing framework you use will have something similar to this where we can effectively create a fresh instance of the object for every test we run.

beforeEach and then we're going to put a function in there.
These are called callback functions:
*/
    beforeEach(function () {
        /*
We want to create a new instance of calc.
So that will set our running total back to 0.
        */
        calc = new Calculator;
    });

    describe("Addition function", function () {
        it("should return 42", function () {
            // And then we added 20 to its internal value, so the total is now 20.
            calc.add(20);
            // After that, we added 22, which gives us the running total of 42.
            calc.add(22);
            expect(calc.value).toBe(42);
        });

        it("should return 26", function () {
            // in our next spec, we add 7, which gives us a total of 49.
            calc.add(7);
            // And finally, we add 19, which gives us a total of 68.
            calc.add(19);
            /*
The problem here is that the value has persisted across each of the specs.

What we need to do is separate it out so that this doesn't happen.
            */
            expect(calc.value).toBe(26);
        });

        it("should return an error if we don't supply two numbers", function () {
            spyOn(window, "alert");
            calc.add("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});