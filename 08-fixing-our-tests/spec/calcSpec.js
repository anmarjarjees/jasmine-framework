describe("Calculator", function () {
    /*
    So the first thing that we need to do is to create a new instance of the calculator object.
    So we'll do that: "var calc = new Calculator";
    */
    var calc = new Calculator;

    describe("Addition function", function () {
        it("should return 42", function () {
            /*
             we had this function: addition(20, 22)
             If we want to repeat the same idea of adding the same numbers: 20 + 22
             To add these two numbers together, 
             we need to call the calc.add() function twice.
 
             our initial value of "this.value" is 0
             calc.add(20); // this.value +=20 // this.value = 0 + 20
             calc.add(22); // this.value +=22 // this.value = 20 + 22
             */
            calc.add(20);
            calc.add(22);
            /*
            And this time, we're going to expect the value, our running value, "calc.value", to be 42.
            */
            expect(calc.value).toBe(42);
        });

        it("should return 26", function () {
            /*
            do the same thing with our second test.
            */
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        });

        it("should return an error if we don't supply a numeric value", function () {
            spyOn(window, "alert");
            /*
Finally, for our last test, we're just going to pass in one parameter here: the argument "Hitchhikers".
And call the add() function.

We expect that to have been an error.
            */
            // addition("text1", "text2") <= we can't call this function (not exist)
            // we will call our method "add()" for our object "calc":
            calc.add("AnyText");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    }); // end describe Addition tests
}); // end describe Calculator