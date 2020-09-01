import { InputParser } from "./InputParser";

describe("InputParser", () => {
    it("should parse input as exepected", () => {
        const parser = new InputParser();
        expect(parser.parse("a")).toEqual(["a"]);
    });
});
