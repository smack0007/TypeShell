import { InputParser } from "./InputParser";

describe("InputParser", () => {
    describe("parse", () => {
        const testData: { input: string; expected: string[] }[] = [
            { input: "a", expected: ["a"] },
            // { input: "a b", expected: ["a", "b"] },
        ];

        for (const test of testData) {
            const expectation = `"${test.input}" => [ ${test.expected.map(
                (x) => `"${x}"`
            )} ]`;

            it(expectation, () => {
                const parser = new InputParser();
                expect(parser.parse(test.input)).toEqual(test.expected);
            });
        }
    });
});
