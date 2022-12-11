const calculateDivisors = require("../calculate-divisors");

//ARRANGE. ACT. ASSERT.

//toBe - same object/refernce
//toEqual - to be equal to, but not the same instance.

//test for return of new value
// test('returns a new array', () => {
//   const input = ['a', 'b', 'c'];
//   const returnValue = createNewPeople(input);
//   expect(input).not.toBe(returnValue);
// });

//test for non mutation of input
// test('does not mutate the input array', () => {
//   const input = ['a', 'b', 'c'];
//   createNewPeople(input);
//   expect(input).toEqual(['a', 'b', 'c']);
// });

//test list
// zero should return 0
// any number under 4 should return 0
// return multiples of 3 below any number
// return sum of multiples of 3 below any number
//check for new value
// test for mutated input

describe("tests for calculate-divisors", () => {
  test("zero should return 0", () => {
    expect(calculateDivisors(0)).toEqual(0);
  });

  test("any number under 4 should return 0", () => {
    expect(calculateDivisors(3)).toEqual(0);
  });

  test("return multiples of 3 below any number", () => {
    expect(calculateDivisors(12)).toEqual([3, 5, 6, 9, 10]);
  });

  test("return sum of multiples of 3 below any number", () => {
    //yes parameter lets the function know to return the sum and not the array of multiples.
    expect(calculateDivisors(12, "yes")).toEqual(33);
  });

  test("returns a new array", () => {
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
