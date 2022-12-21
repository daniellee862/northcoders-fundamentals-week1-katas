const changeCalculator = require("../change-calculator");

describe("function : changeCalculator()", () => {
  test("0 passed to function returns an empty object", () => {
    expect(changeCalculator(0)).toEqual({});
  });

  test("1 passed to function returns an object with one key/value pair", () => {
    expect(changeCalculator(1)).toEqual({ 1: 1 });
  });

  test("56 passed to function returns an object with many key/value pairs", () => {
    expect(changeCalculator(56)).toEqual({ 50: 1, 5: 1, 1: 1 });
  });

  test("input value is not mutated", () => {
    const input = 56;
    changeCalculator(input);
    expect(input).toBe(56);
  });
});
