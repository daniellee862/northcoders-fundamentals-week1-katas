const dnaPairs = require("../dna-pairs.js");
//ARRANGE. ACT. ASSERT.

describe("dnaPairs()", () => {
  test("empty string input returns empty array", () => {
    expect(dnaPairs("")).toEqual([]);
  });

  test("single base char returns a pair within nested array", () => {
    expect(dnaPairs("A")).toEqual(["A", "T"]);
  });

  test("multi base charachters returns nested array", () => {
    const output = [
      ["A", "T"],
      ["T", "A"],
      ["A", "T"],
      ["G", "C"],
    ];
    expect(dnaPairs("ATAG")).toEqual(output);
  });

  test("check returned array is same length as input string", () => {
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
