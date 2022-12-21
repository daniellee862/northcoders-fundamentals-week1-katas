const tillAddition = require("../till-addition");

//ARRANGE. ACT. ASSERT.

//test list
// empty input object should return "£0.00"
// test return value is a string
// return addition of one coin
// return addition of multiple coins and multiple denominations
//test return value is different from the input
// test for mutated input

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
