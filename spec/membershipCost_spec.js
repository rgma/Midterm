import { membershipCost } from "../src/membershipCost.js";

describe("calculates gym membership discount", function () {
    it("tests 1", function () {
        let discount = membershipCost(100, 1);
        expect(discount).toBe(95);

    });
    it("tests 2", function(){
        let discount = membershipCost(100, 2);
        expect(discount).toBe(90);
    });
    
    it("tests 3", function(){
        let discount = membershipCost(100, 3);
        expect(discount).toBe(85);
    });

    it("tests 4", function(){
        let discount = membershipCost(100, 4);
        expect(discount).toBe(85);
    });
})