const foldString = require("../fold-string");

describe("foldString()", () => {
  test("emptry string argument returns empty string", () => {
    expect(foldString("")).toBe("");
  });
});
