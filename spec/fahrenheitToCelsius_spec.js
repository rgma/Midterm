import { fahrenheitToCelsius } from "../src/fahrenheitToCelsius.js";

describe("converts F TO C", function () {
    it("tests 32", function () {
        let celsius = fahrenheitToCelsius(32);
        expect(celsius).toBe(0);

    });
    it("tests 68", function(){
        let celsius = fahrenheitToCelsius(68);
        expect(celsius).toBe(20);
    });
    
    it("tests 212", function(){
        let celsius = fahrenheitToCelsius(212);
        expect(celsius).toBe(100);
    });
})