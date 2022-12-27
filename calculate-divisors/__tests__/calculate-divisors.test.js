const calculateDivisors = require("../calculate-divisors");

//ARRANGE. ACT. ASSERT.

describe("tests for calculate-divisors", () => {
  test("zero should return 0", () => {
    expect(calculateDivisors(0)).toEqual(0);
  });

  test("any number under 4 should return 0", () => {
    expect(calculateDivisors(3)).toEqual(0);
  });

  test("return sum of multiples of 3 below any number", () => {
    //yes parameter lets the function know to return the sum and not the array of multiples.
    expect(calculateDivisors(12, "yes")).toEqual(33);
  });

  test("returns a new value", () => {
    const input = 12;
    const returnValue = calculateDivisors(input);
    expect(input).not.toBe(returnValue);
  });

  test("does not mutate the input array", () => {
    const input = 12;
    calculateDivisors(input);
    expect(input).toEqual(12);
  });
});
