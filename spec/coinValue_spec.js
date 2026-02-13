import { coinValue } from "../src/coinValue.js";

describe("calculates total value of coins", function () {
        it("tests 0", function () {
        let total = coinValue(0, 0, 0, 0, 0);
        expect(total).toBe(0);

    });
    it("tests 3.65", function(){
         let total = coinValue(2, 3, 1, 1, 1);
        expect(total).toBe(3.65);
    });
    
    it("tests toonies", function(){
        let total = coinValue(0, 0, 0, 0, 4);
        expect(total).toBe(8.00);
    });
})