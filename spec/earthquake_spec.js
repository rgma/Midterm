import { earthquake } from "../src/earthquake.js";

describe("determines earthquake damage", function () {
    it("tests below 5", function () {
        let result = earthquake(4.5);
        expect(result).toBe("Little or no damage");

    });
    it("tests between 5 and 5.5", function(){
        let result = earthquake(5.2);
        expect(result).toBe("Some damage");
    });
    it("tests between 5.5 and 6 ", function(){
        let result = earthquake(6.0);
        expect(result).toBe("Serious damage: walls may crack or fall");
    });
    it("tests between 6.5 and 7.5", function(){
        let result = earthquake(7.0);
        expect(result).toBe("Disaster: buildings may collapse");
    })
    it("tests between 7.5 and higher", function(){
        let result = earthquake(8.0);
        expect(result).toBe("Catastrophe: most buildings destroyed");
    })
})