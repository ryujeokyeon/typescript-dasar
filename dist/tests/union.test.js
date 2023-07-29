"use strict";
describe("Union Types", () => {
    it("should support in typescript", () => {
        let sample = "max";
        console.info(sample);
        sample = 100;
        console.info(sample);
        sample = false;
        console.info(sample);
    });
    it("should support typeof operator", function () {
        function process(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value + 2;
            }
            else {
                return !value;
            }
        }
        expect(process("annisa")).toBe("ANNISA");
        expect(process(10)).toBe(12);
        expect(process(true)).toBe(false);
    });
});
