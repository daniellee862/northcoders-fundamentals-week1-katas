const sentenceToCamelCase = require("../sentence-to-camel-case");

describe("sentenceToCamelCase()", () => {
  test("EMPTY STRING ARGUMENT RETURNS EMPTY STRING", () => {
    expect(sentenceToCamelCase("")).toBe("");
  });

  test("ONE LETTER ARG RETURN UPPERCASE WITH TRUE BOOLEAN", () => {
    expect(sentenceToCamelCase("a", true)).toBe("A");
  });

  test("ONE LETTER ARG RETURN UPPERCASE WITH FALSE BOOLEAN", () => {
    expect(sentenceToCamelCase("a", false)).toBe("a");
  });

  test("SENTENCE ARG RETURN UPPER CAMEL WITH TRUE", () => {
    expect(sentenceToCamelCase("this sentence", true)).toBe("ThisSentence");
  });

  test("SENTENCE ARG RETURN LOWER CAMEL WITH FALSE", () => {
    expect(sentenceToCamelCase("this sentence", false)).toBe("thisSentence");
  });

  test("CHECK RETURN VALUE IS A STRING", () => {
    expect(typeof sentenceToCamelCase("this sentence", false)).toBe("string");
  });

  test("CHECK INPUT ARG IS NOT MUTATED", () => {
    const input = "hello world";
    sentenceToCamelCase(input, true);
    expect(input).toBe("hello world");
  });

  test("CHECK INPUT DOESNT HAVE SAME REFERENCE AS RETURN VALUE", () => {
    const input = "hello world";
    const returnValue = sentenceToCamelCase(input, true);
    expect(input).not.toBe(returnValue);
  });
});
