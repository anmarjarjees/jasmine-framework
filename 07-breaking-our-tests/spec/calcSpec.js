describe("Calculator", function () {
    /*
So the first thing that we need to do is to create a new instance of the calculator object.
So we'll do that: "var calc = new Calculator";
This will create a new instance of the Calculator object.
    */
    var calc = new Calculator;

    describe("Addition function", function () {
        it("should return 42", function () {
            expect(addition(20, 22)).toBe(42);
        });

        it("should return 26", function () {
            expect(addition(7, 19)).toBe(26);
        });

        it("should return an error if we don't supply two numbers", function () {
            spyOn(window, "alert");
            addition("Hitchhikers", "Guide")
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    }); // end describe Addition tests
}); // end describe Calculator