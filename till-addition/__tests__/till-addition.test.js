const tillAddition = require("../till-addition");

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
// empty input object should return "£0.00"
// test return value is a string
// return addition of one coin
// return addition of multiple coins and multiple denominations
//test return value is different from the input
// test for mutated input

/* const till = {
    "1p": 1,
    "2p": 1,
    "5p": 1,
    "10p": 1,
    "20p": 1,
    "50p": 1,
    "£1": 1,
    "£2": 1,
    "£5": 1,
    "£10": 1,
    "£20": 1,
    "£50": 1
  }; */

describe("till addition tests", () => {
  test(' empty input object should return "£0.00"', () => {
    expect(tillAddition({})).toEqual("£0.00");
  });

  test("test return value is a string", () => {
    expect(typeof tillAddition({})).toEqual("string");
  });

  test("return addition of one coin", () => {
    const till = {
      "1p": 1,
    };
    expect(tillAddition(till)).toEqual("£0.01");
  });

  test("return addition of multiple coins and multiple denominations", () => {
    const till = {
      "1p": 1,
      "2p": 1,
      "5p": 1,
      "10p": 1,
      "20p": 1,
      "50p": 1,
      "£1": 1,
      "£2": 1,
      "£5": 1,
      "£10": 1,
      "£20": 1,
      "£50": 1,
    };
    expect(tillAddition(till)).toEqual("£88.88");
  });
});
