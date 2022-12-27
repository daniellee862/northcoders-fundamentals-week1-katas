const morseCode = require("../morse-code");

describe("morseCode()", () => {
  test("EMPTY STRING ARGUMENT, RETURNS EMPTY STRING", () => {
    expect(morseCode("")).toBe("");
  });
  test("TWO MORSE CODE CHARACTER ARGMENT RETURNS STRING OF TWO LETTERS", () => {
    expect(morseCode(".... ..")).toBe("HI");
  });
  test("FIVE MORSE CODE CHARACTER ARGMENT RETURNS STRING OF FIVE LETTERS", () => {
    expect(morseCode("-. --- .-. - .... -.-. --- -.. . .-. ...")).toBe(
      "NORTHCODERS"
    );
  });
  test("SENTENCE WITH SPACES ARGMENT RETURNS DECODED SENTENCE STRING", () => {
    expect(
      morseCode(
        "--. --- --- -..   -- --- .-. -. .. -. --.   -. --- .-. - .... -.-. --- -.. . .-. ..."
      )
    ).toBe("GOOD MORNING NORTHCODERS");
  });
});
