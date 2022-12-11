const getTweetData = require("../get-tweet-data");

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
// empty string input returns object with keys but all values are zero
// input string only return object with length value
// input string with 1 mention return object with mention, mention count and length
// input string with 1 mention and 1 tag to return object with mention, mention count, tag, tag count and length
// input string with multiple mentions and tags to return object with all data
//check for new value
// test for mutated input

describe("get-tweet-data tests", () => {
  test("empty string input returns object with keys but all values are zero", () => {
    const input = "";
    const outputValue = {
      tags: [],
      mentions: [],
      tagCount: 0,
      mentionCount: 0,
      length: 0,
    };
    expect(getTweetData(input)).toEqual(outputValue);
  });

  test("input string only return object with length value", () => {
    const input = "I love testing";
    const outputValue = {
      tags: [],
      mentions: [],
      tagCount: 0,
      mentionCount: 0,
      length: 14,
    };
    expect(getTweetData(input)).toEqual(outputValue);
  });

  test("input string with 1 mention return object with mention, mention count and length", () => {
    const input = "My awesome tweet to @northcoders";
    const outputValue = {
      tags: [],
      mentions: ["@northcoders"],
      tagCount: 0,
      mentionCount: 1,
      length: 32,
    };
    expect(getTweetData(input)).toEqual(outputValue);
  });

  test("input string with 1 mention and 1 tag to return object with mention, mention count, tag, tag count and length", () => {
    const input = "My awesome tweet to @northcoders #coding";
    const outputValue = {
      tags: ["#coding"],
      mentions: ["@northcoders"],
      tagCount: 1,
      mentionCount: 1,
      length: 40,
    };
    expect(getTweetData(input)).toEqual(outputValue);
  });

  test("input string with multiple mentions and tags to return object with all data", () => {
    const input =
      "My awesome tweet to @northcoders , @northwestdevs , @students. subjects include  #coding #testing";
    const outputValue = {
      tags: ["#coding", "#testing"],
      mentions: ["@northcoders", "@northwestdevs", "@students"],
      tagCount: 2,
      mentionCount: 3,
      length: input.length,
    };
    expect(getTweetData(input)).toEqual(outputValue);
  });

  test("test for new instance at output", () => {
    const input =
      "My awesome tweet to @northcoders , @northwestdevs , @students. subjects include  #coding #testing";
    const returnValue = getTweetData(input);
    expect(input).not.toBe(returnValue);
  });

  test("does not mutate the input array", () => {
    const input =
      "My awesome tweet to @northcoders , @northwestdevs , @students. subjects include  #coding #testing";
    getTweetData(input);
    expect(input).toEqual(
      "My awesome tweet to @northcoders , @northwestdevs , @students. subjects include  #coding #testing"
    );
  });
});
