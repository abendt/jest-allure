const sum = require('./sum');
const Severity = require("../dist/Reporter").Severity;

describe("suite", () => {
    test('adds 1 + 2 to equal 3', () => {
        reporter
            .description("Feature should work cool")
            .severity(Severity.Critical)
            .feature("MyFeature")
            .story("BOND-007");

        reporter.startStep("check the sum");
        expect(sum(1, 2)).toBe(3);
        reporter.endStep();
    });
});
