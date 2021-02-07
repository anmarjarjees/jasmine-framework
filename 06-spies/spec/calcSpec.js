describe("Calculator", function () {
    describe("Addition tests", function () {
        it("should return 42", function () {
            expect(addition(20, 22)).toBe(42);
        });

        it("should return 26", function () {
            expect(addition(7, 19)).toBe(26);
        });

        // more test:
        it("should return 10", function () {
            expect(addition(7, 3)).toBe(10);
        });


        it("Should return an error if we don't supply two numbers", function () {
            /*
            We removed ==> expect(addition("Hitchhikers", "Guide")).toBe("Error!"); 
            In order to use spyOn() function
            */

            /*
            spyOn() function:
            - first argument is the object that the function we're spying on belongs to. In this case, the argument is "window" because alert() is a method of the window object.
            The second argument is a string with the name of the function, which in this case is "alert".
            */
            spyOn(window, "alert");
            /*
            Now we'll invoke our addition function, and we're going to pass through "A" and "B":
            */
            addition("A", "B");
            /*
            Now our expectation is that we expect(window.alert). 
            to Have Been Called With a string of "Error!".
            So "toHaveBeenCalledWith" allows us to pass through a parameter 
            and to check if that parameter is the one that the function has been called with. 
            We can test for specific parameters.
            */
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    }); // end describe Addition tests

    // we can add more test by ourselves just to practice how to use spyOn() method for Jasmine:
    describe("division function test", function () {
        it("should return an error if we don't supply two numbers", function () {
            // for us to learn more we used prompt method of window object:
            // We used prompt just for learning :-)
            spyOn(window, "prompt");
            division("abc", "def");
            expect(window.prompt).toHaveBeenCalledWith("Error!");
        });

        // again doing more test for our own function division again:
        it("Should return division by Zero if the second number is 0", function () {
            spyOn(window, "alert");
            division(5, 0);
            expect(window.alert).toHaveBeenCalledWith("Division by 0!");
        });
    }); // end describe division test
}); // end describe Calculator
