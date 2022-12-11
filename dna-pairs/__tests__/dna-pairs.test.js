const dnaPairs = require("../dna-pairs.js");

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
// empty string input returns empty array
// single base char returns a pair within nested array
// multi base charachters returns nested array
// check returned array is same length as input string
// return a new value
// * No need to test for mutated input as strings / primitive data types are immutable

describe("dnaPairs()", () => {
  test("empty string input returns empty array", () => {
    const input = "";
    const output = [];

    expect(dnaPairs(input)).toEqual([]);
  });

  test("single base char returns a pair within nested array", () => {
    // create a new array
    //iterate over input with for loop
    //for each char check what it is with if statement
    // push an array with char and its matching pair to new array.

    const input = "A";
    const output = [["A", "T"]];

    expect(dnaPairs(input)).toEqual(output);
  });

  test("multi base charachters returns nested array", () => {
    //continue with for loop for all charachter of input string
    const input = "ATAG";
    const output = [
      ["A", "T"],
      ["T", "A"],
      ["A", "T"],
      ["G", "C"],
    ];

    expect(dnaPairs(input)).toEqual(output);
  });

  test("check returned array is same length as input string", () => {
    //continue with for loop for all charachter of input string
    const input = "ATAGATAG";
    const inputLength = input.length;
    const outputLength = dnaPairs(input).length;

    expect(inputLength).toBe(outputLength);
  });

  test("return a new value", () => {
    const input = "ATAGATAG";
    const output = dnaPairs(input);

    expect(input).not.toBe(output);
  });

  test("check for immutability", () => {
    const input = "ATAGATAG";
    dnaPairs(input);
    expect(input).toEqual("ATAGATAG");
  });
});
