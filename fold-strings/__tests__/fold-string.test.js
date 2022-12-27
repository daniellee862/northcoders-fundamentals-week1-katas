const foldString = require("../fold-string");

describe("foldString()", () => {
  test("emptry string argument returns empty string", () => {
    expect(foldString("")).toBe("");
  });

  test("even string argument returns string with end characters at center", () => {
    expect(foldString("abcdef")).toBe("cbafed");
  });

  test("odd string argument returns string with end characters either side of center charachter", () => {
    expect(foldString("Northcoders")).toBe("htroNcsredo");
  });

  test("return string retians spaces", () => {
    expect(foldString("javascript is cool")).toBe("savajtpirc is oclo");
  });

  test("return string is not the input string", () => {
    const inputString = "Hello, good afternoon";
    expect(foldString(inputString)).not.toBe(inputString);
  });

  //no test for mutation, primitive data type is immutable
});
