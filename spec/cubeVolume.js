import { cubeVolume } from "../src/cubeVolume.js";

describe("converts cube height to volume", function () {
    it("tests 1", function () {
        let volume = cubeVolume(1);
        expect(volume).toBe(1);

    });
    it("tests 2", function(){
        let volume = cubeVolume(2);
        expect(volume).toBe(8);
    });
    
    it("tests 3", function(){
        let volume = cubeVolume(3);
        expect(volume).toBe(27);
    });
})