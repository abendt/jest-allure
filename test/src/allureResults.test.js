const fs = require('fs');

describe("allureTestResults", () => {
    it('allure-results folder exists', () => {
        expect(fs.existsSync("./build/allure-results")).toBe(true);
    });
});
